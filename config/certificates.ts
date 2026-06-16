/**
 * certificates.ts
 * ─────────────────────────────────────────────────────────────
 * Certificates and credentials rendered in the Certificates window.
 * Each entry has a title, issuer, and a link to the certificate.
 * ─────────────────────────────────────────────────────────────
 */

export interface CertificateItem {
  /** Certificate title */
  title: string
  /** Issuing organisation */
  issuer: string
  /** URL to view the certificate */
  url: string
}

export const certificates: CertificateItem[] = [
  {
    title: "Java Programming Certificate",
    issuer: "GeeksForGeeks (GFG)",
    url: "https://www.linkedin.com/posts/swayam-shahu_certificate-activity-7420813868257603584-7MD1",
  },
  {
    title: "Full Stack Java",
    issuer: "FutureSkills Prime — NSQF Level 5 / Nasscom",
    url: "https://drive.google.com/file/d/1MWpPHay3TxyDCyHBRThCNan2HooBx95g/view?usp=drivesdk",
  },
  {
    title: "Figma Course: Web & Mobile Projects from Scratch",
    issuer: "Udemy",
    url: "https://drive.google.com/file/d/1EbypCbqnm7BPnv3AMxE6VDUMAw7NAL8A/view",
  },
  {
    title: "Design and Analysis of Algorithms",
    issuer: "NPTEL",
    url: "https://drive.google.com/file/d/1EiLMa7iCXzlqwkxHzJBWlCPlE-409tKn/view",
  },
  {
    title: "Competitive Programming through Problem Solving",
    issuer: "S. B. Jain Institute of Technology (Value Added Course)",
    url: "https://drive.google.com/file/d/1Ehp0-P8IjhJJVpFfgRR_FlsTZT7GWAIu/view",
  },
]
