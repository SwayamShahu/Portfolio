/**
 * siteConfig.ts
 * ─────────────────────────────────────────────────────────────
 * Identity, social profiles, contact details, and page metadata.
 * ─────────────────────────────────────────────────────────────
 */

export interface Personal {
  firstName: string
  lastName: string
  fullName: string
  initials: string
  role: string
  shortRole: string
  tagline: string
  location: string
  age: number | string
  avatar: string
  username: string
}

export interface Social {
  github: string
  twitter: string
  blog: string
  githubUsername: string
  twitterHandle: string
}

export interface ContactRow {
  icon: "mail" | "calendar" | "twitter" | "github"
  href: string
  label: string
  mono: string
}

export interface Contact {
  email: string
  calendar: string
  heading: string
  subheading: string
  rows: ContactRow[]
}

export interface Seo {
  title: string
  description: string
}

export interface Features {
  konami: boolean
}

export interface SiteConfig {
  personal: Personal
  social: Social
  contact: Contact
  seo: Seo
  resumeLink: string
  features: Features
}

export const siteConfig: SiteConfig = {
  personal: {
    firstName: "Swayam",
    lastName: "Shahu",
    fullName: "Swayam Shahu",
    initials: "SS",
    role: "Java Backend Engineer",
    shortRole: "Java Backend Engineer | Spring Boot | Microservices | Docker",
    tagline:
      "Final-year B.Tech CS student with hands-on experience in Java, Spring Boot, Microservices, and Docker. I enjoy understanding what users actually need, thinking through what makes sense to build, and then designing a clean solution – not just writing code.",
    location: "Nagpur, India",
    age: 21,
    avatar: "/avatar.svg",
    username: "SwayamShahu",
  },

  social: {
    github: "https://github.com/SwayamShahu",
    twitter: "https://x.com/SwayamShahu",
    blog: "https://leetcode.com/u/SwayamShahu",
    githubUsername: "SwayamShahu",
    twitterHandle: "SwayamShahu",
  },

  contact: {
    email: "swayamshahu153@gmail.com",
    calendar: "https://linkedin.com/in/swayam-shahu",
    heading: "Let's Connect",
    subheading: "Open to entry-level Java Backend / Software Engineer roles. Let's talk!",
    rows: [
      { icon: "mail",     href: "mailto:swayamshahu153@gmail.com",          label: "Email",     mono: "swayamshahu153@gmail.com" },
      { icon: "calendar", href: "https://linkedin.com/in/swayam-shahu",     label: "LinkedIn",  mono: "linkedin.com/in/swayam-shahu" },
      { icon: "twitter",  href: "https://leetcode.com/u/SwayamShahu",       label: "LeetCode",  mono: "leetcode.com/u/SwayamShahu" },
      { icon: "github",   href: "https://github.com/SwayamShahu",           label: "GitHub",    mono: "SwayamShahu" },
    ],
  },

  seo: {
    title: "Swayam Shahu — Java Backend Engineer",
    description: "Portfolio of Swayam Shahu — Java Backend Engineer specialising in Spring Boot, Microservices, Docker, and REST APIs.",
  },

  resumeLink: "https://drive.google.com/file/d/1eadcQEtxjUuHC4RqLoMBfv8Zf9ImQQs3/view?usp=drivesdk",

  features: {
    konami: false,
  },
}
