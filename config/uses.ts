/**
 * uses.ts — Tools, software, and stack I use daily.
 */

export interface UseItem {
  name: string
  note?: string
}

export interface UseGroup {
  category: string
  items: UseItem[]
}

export const uses: UseGroup[] = [
  {
    category: "Editor",
    items: [
      { name: "VS Code",       note: "daily driver" },
      { name: "IntelliJ IDEA", note: "Java / Spring Boot" },
      { name: "Cursor",        note: "AI-assisted coding" },
    ],
  },
  {
    category: "AI Tools",
    items: [
      { name: "Claude Code",   note: "CLI coding agent" },
      { name: "Cursor",        note: "in-editor AI" },
      { name: "Antigravity",   note: "LLM tooling" },
    ],
  },
  {
    category: "Dev Tools",
    items: [
      { name: "Docker Desktop", note: "containerisation" },
      { name: "Postman",        note: "API testing" },
      { name: "Maven",          note: "build tool" },
      { name: "Git + GitHub",   note: "version control" },
      { name: "Swagger/OpenAPI",note: "API docs" },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "Figma", note: "UI/UX design" },
    ],
  },
  {
    category: "Stack defaults",
    items: [
      { name: "Java 21 + Spring Boot 3.2", note: "backend" },
      { name: "ReactJS",                   note: "frontend" },
      { name: "MySQL / MongoDB",           note: "databases" },
      { name: "Docker Compose",            note: "local orchestration" },
    ],
  },
]
