/**
 * status.ts
 */

export interface StatusRow {
  label: string
  value: string
}

export interface StatusConfig {
  available: boolean
  label: string
  currently: StatusRow[]
}

export const status: StatusConfig = {
  available: true,
  label: "Open to work",
  currently: [
    { label: "Building",   value: "AI-powered Resume Builder @ TalentXMinds" },
    { label: "Learning",   value: "System Design" },
    { label: "Solving",    value: "DSA problems on LeetCode (100+ done)" },
  ],
}
