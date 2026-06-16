/**
 * terminal.ts
 * ─────────────────────────────────────────────────────────────
 * Payloads for the interactive Terminal window. Each entry is the
 * content printed by a command or a virtual file. Lines are shown
 * verbatim — an empty string renders as a blank line.
 * ─────────────────────────────────────────────────────────────
 */

export interface TerminalConfig {
  /** Content of `cat about.txt`. */
  about: string[]
  /** Content of `cat skills.txt`. */
  skills: string[]
  /** Content of `cat experience.txt`. */
  experience: string[]
  /** Content of `cat contact.txt`. */
  contact: string[]
  /** Content of `cat resume.pdf`. */
  resume: string[]
  /** Output of `whoami`. */
  whoami: string[]
  /** Fake JSON returned by `curl github.com/<user>`. */
  githubJson: string
}

export const terminal: TerminalConfig = {
  about: [
    "Name:     Swayam Shahu",
    "Age:      21",
    "Role:     Java Backend Engineer",
    "Location: Nagpur, India",
    "",
    "Final-year B.Tech CS student with hands-on experience in Java,",
    "Spring Boot, Microservices, and Docker.",
    "",
    "I enjoy understanding what users actually need, thinking through",
    "what makes sense to build, and then designing a clean solution",
    "— not just writing code.",
  ],
  skills: [
    "Languages:        Java · SQL · JavaScript · C",
    "Backend:          Spring Boot · Spring MVC · Spring Security · Spring Cloud",
    "                  Microservices · REST APIs · JWT",
    "Frontend:         ReactJS · Thymeleaf · Tailwind CSS · Bootstrap · Figma",
    "Databases / ORM:  MySQL · MongoDB · Spring Data JPA · Hibernate",
    "DevOps / Tools:   Docker · Docker Compose · Kubernetes · Git · Maven",
    "                  Postman · Swagger/OpenAPI",
    "Testing:          JUnit · Mockito",
    "AI / LLM:         Claude Code · Cursor · Antigravity",
  ],
  experience: [
    "TalentXMinds           Mar 2026 – Present   Software Developer",
    "HOTIT Institute Pvt.   Jun 2024 – Jul 2024  Web Developer Intern",
    "",
    "Education:",
    "S. B. Jain Institute of Technology, Management & Research, Nagpur",
    "B.Tech — Computer Science & Engineering  (CGPA: 8.93/10)  2022–2026",
  ],
  contact: [
    "email:    swayamshahu153@gmail.com",
    "github:   github.com/SwayamShahu",
    "linkedin: linkedin.com/in/swayam-shahu",
    "leetcode: leetcode.com/u/SwayamShahu",
  ],
  resume: [
    "Opening résumé…",
    "→ drive.google.com/file/d/1eadcQEtxjUuHC4RqLoMBfv8Zf9ImQQs3/view",
  ],
  whoami: [
    "Swayam Shahu",
    "Java Backend Engineer · Nagpur, India",
    "",
    "Building clean, well-reasoned backend systems with Spring Boot,",
    "Microservices, and Docker. Open to entry-level SWE roles.",
  ],
  githubJson: `{"login":"SwayamShahu","name":"Swayam Shahu","bio":"Java Backend Engineer | Spring Boot | Microservices | Docker","location":"Nagpur, India","public_repos":20}`,
}
