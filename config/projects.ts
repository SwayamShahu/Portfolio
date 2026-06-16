/**
 * projects.ts
 */

export interface ProjectItem {
  title: string
  description: string
  tech: string[]
  status?: string
  stars?: number
  link: string
}

export interface ProjectsConfig {
  personal: ProjectItem[]
  client: ProjectItem[]
}

export const projects: ProjectsConfig = {
  personal: [
    {
      title: "Smart Communication Analyzer",
      description: "A 7-service Spring Cloud platform (Eureka, Config Server, API Gateway + 4 domain services) with Docker Compose for single-command startup and Eureka service discovery for zero-downtime redeployment.",
      tech: ["Spring Boot", "Spring Cloud", "Docker Compose", "Eureka", "API Gateway"],
      link: "https://github.com/SwayamShahu/Smart_Communication_Analyzer",
    },
    {
      title: "FinTrack Pro – Fintech App",
      description: "3-tier fintech platform with expense tracking, JWT/RBAC security, and ML-driven anomaly detection (Isolation Forest + LSTM) delivering real-time notifications with <1s latency across 10+ backend components.",
      tech: ["Spring Boot 3.2", "React", "TensorFlow", "JWT", "RBAC", "MySQL"],
      link: "https://github.com/SwayamShahu/Fintech-full_stack_project",
    },
    {
      title: "Quiz Management System",
      description: "Role-based quiz platform with separate student and teacher workflows, secured by JWT + BCrypt, Spring Security CORS configuration, and granular endpoint authorization.",
      tech: ["Spring Boot", "JWT", "Spring Security", "MySQL", "React"],
      link: "https://github.com/SwayamShahu/Quiz-Application-Project",
    },
    {
      title: "ShopEase – E-Commerce Backend",
      description: "RESTful backend for product browsing, cart management, and order placement with Spring Data JPA, JWT auth, role-based access control, and unit tests using JUnit and Mockito.",
      tech: ["Java 21", "Spring Boot 3.2", "MySQL", "JUnit", "Mockito", "Spring Security"],
      link: "https://github.com/SwayamShahu/E-commerce-Full-Stack-Project",
    },
  ],

  client: [
    {
      title: "Resume Builder (AI-Powered)",
      description: "AI-powered tool that generates ATS-optimized resumes with semantic scoring, built at TalentXMinds. Containerized with Docker for consistent team environments.",
      tech: ["Spring Boot", "ReactJS", "Docker", "AI/LLM"],
      status: "In Progress",
      link: "https://github.com/SwayamShahu",
    },
  ],
}

export interface ResumeProjectItem {
  name: string
  desc: string
}

export const resumeProjects: ResumeProjectItem[] = [
  {
    name: "Smart Communication Analyzer",
    desc: "7-service Spring Cloud platform with Eureka, Config Server, API Gateway, and Docker Compose for single-command startup and zero-downtime redeployment.",
  },
  {
    name: "FinTrack Pro",
    desc: "Fintech platform with JWT/RBAC, ML anomaly detection (Isolation Forest + LSTM), and real-time notifications at <1s latency across 10+ backend components.",
  },
  {
    name: "Quiz Management System",
    desc: "Role-based quiz platform with Spring Security, JWT + BCrypt auth, granular endpoint authorization, and CORS configuration.",
  },
  {
    name: "ShopEase – E-Commerce Backend",
    desc: "RESTful Spring Boot backend with JPA/Hibernate, JWT auth, RBAC, and JUnit/Mockito unit tests for service layer validation.",
  },
]
