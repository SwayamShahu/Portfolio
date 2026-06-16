/**
 * skills.ts
 */

export type Skills = Record<string, string[]>

export const skills: Skills = {
  "Languages":          ["Java", "SQL", "JavaScript", "C"],
  "Backend":            ["Spring Boot", "Spring MVC", "Spring Security", "Spring Cloud", "Microservices", "REST APIs", "JWT"],
  "Frontend & Design":  ["ReactJS", "Thymeleaf", "Tailwind CSS", "Bootstrap", "Figma"],
  "Databases & ORM":    ["MySQL", "MongoDB", "Spring Data JPA", "Hibernate"],
  "DevOps & Tools":     ["Docker", "Docker Compose", "Kubernetes", "Git", "Maven", "Postman", "Swagger/OpenAPI"],
  "Testing":            ["JUnit", "Mockito"],
  "AI / LLM Tools":     ["Claude Code", "Cursor", "Antigravity"],
}
