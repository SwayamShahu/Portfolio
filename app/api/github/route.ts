import { NextResponse } from "next/server"
import { siteConfig } from "@/config/siteConfig"

export const revalidate = 21600

type Level = 0 | 1 | 2 | 3 | 4

const LEVEL_MAP: Record<string, Level> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
}

// GitHub GraphQL API — includes private contributions when GITHUB_TOKEN is set
async function fetchViaGraphQL(username: string) {
  const token = process.env.GITHUB_TOKEN
  if (!token) return null

  const to = new Date()
  const from = new Date()
  from.setFullYear(from.getFullYear() - 1)

  const query = `
    query($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
              }
            }
          }
        }
      }
    }
  `

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { username, from: from.toISOString(), to: to.toISOString() },
    }),
    next: { revalidate: 21600 },
  })

  if (!res.ok) return null
  const json = await res.json()
  const calendar = json?.data?.user?.contributionsCollection?.contributionCalendar
  if (!calendar) return null

  const contributions = calendar.weeks.flatMap(
    (week: { contributionDays: { date: string; contributionCount: number; contributionLevel: string }[] }) =>
      week.contributionDays.map((day) => ({
        date: day.date,
        count: day.contributionCount,
        level: LEVEL_MAP[day.contributionLevel] ?? 0,
      }))
  )

  return {
    contributions,
    total: { total: calendar.totalContributions as number },
  }
}

// Fallback: public-only third-party scraper
async function fetchViaPublicAPI(username: string) {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
    { next: { revalidate: 21600 } }
  )
  if (!res.ok) return null
  const data = await res.json()
  return {
    contributions: data.contributions as { date: string; count: number; level: Level }[],
    total: data.total as Record<string, number>,
  }
}

export async function GET() {
  try {
    const username = siteConfig.social.githubUsername
    const data = (await fetchViaGraphQL(username)) ?? (await fetchViaPublicAPI(username))
    if (!data) return NextResponse.json({ contributions: [], total: {} })
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ contributions: [], total: {} })
  }
}
