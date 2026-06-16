/**
 * experience.ts
 */

export interface ExperienceItem {
  company: string
  role: string
  period: string
  description: string
  tech: string[]
  achievements: string[]
  links?: { type: string; url: string; label: string }[]
}

export const experience: ExperienceItem[] = [
  {
    company: "TalentXMinds",
    role: "Software Developer",
    period: "Mar 2026 – Present",
    description: "Building Spring Boot APIs and ReactJS frontends for client projects end-to-end.",
    tech: ["Spring Boot", "ReactJS", "Docker", "Claude Code", "Java"],
    achievements: [
      "Contributed to 2+ client projects building Spring Boot APIs and ReactJS frontends, handling business logic, validation, and error handling end-to-end.",
      "Developed Resume Builder – an AI-powered tool that generates ATS-optimized resumes with semantic scoring.",
      "Used Claude Code to reduce boilerplate and cut feature turnaround by ~30%.",
      "Containerized services with Docker for consistent team environments.",
    ],
  },
  {
    company: "HOTIT Institute Pvt. Ltd.",
    role: "Web Developer Intern",
    period: "Jun 2024 – Jul 2024",
    description: "Built responsive web pages improving UI consistency and user engagement.",
    tech: ["HTML5", "CSS3", "Bootstrap", "Agile/Scrum"],
    achievements: [
      "Built 5+ responsive web pages using HTML5, CSS3, and Bootstrap, improving UI consistency and increasing user engagement by 20%.",
      "Delivered all sprint tasks on time within defined SLAs working in an Agile/Scrum team.",
    ],
  },
]

export interface ResumeExperienceItem {
  company: string
  role: string
  period: string
  subRoles?: string[]
  bullets: string[]
}

export const resumeExperience: ResumeExperienceItem[] = [
  {
    company: "TalentXMinds",
    role: "Software Developer",
    period: "Mar 2026 – Present",
    bullets: [
      "Contributed to 2+ client projects building Spring Boot APIs and ReactJS frontends end-to-end.",
      "Developed AI-powered Resume Builder with ATS semantic scoring.",
      "Used Claude Code to reduce boilerplate and cut feature turnaround by ~30%; containerized services with Docker.",
    ],
  },
  {
    company: "HOTIT Institute Pvt. Ltd., Nagpur",
    role: "Web Developer Intern",
    period: "Jun 2024 – Jul 2024",
    bullets: [
      "Built 5+ responsive web pages using HTML5, CSS3, and Bootstrap, increasing user engagement by 20%.",
      "Delivered all sprint tasks on time in an Agile/Scrum team.",
    ],
  },
]

export interface EducationItem {
  school: string
  degree: string
  period: string
}

export const education: EducationItem = {
  school: "S. B. Jain Institute of Technology, Management & Research, Nagpur",
  degree: "B.Tech — Computer Science & Engineering (CGPA: 8.93/10)",
  period: "2022 – 2026",
}

export const teaching: string[] = [
  "Published a peer-reviewed paper in the I-Manager Journal on AI/ML applications.",
  "Presented research at IEEE AICARE 2025, UEM Kolkata — received Presenter Certificate.",
  "1st Runner-Up at TechTrek Hackathon, G. H. Raisoni College, Nagpur.",
  "Solved 100+ DSA problems on LeetCode.",
]
