"use client"

import { motion } from "framer-motion"
import { ExternalLink, Award } from "lucide-react"
import { certificates } from "@/config/certificates"

export default function Certificates({ compact = false }: { compact?: boolean }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={compact ? "px-6 py-6" : "py-20 px-6"}
    >
      <p
        className="font-mono text-[10px] uppercase tracking-[0.14em] mb-1"
        style={{ color: "var(--text-muted)" }}
      >
        Certificates
      </p>
      <p className="text-[12px] mb-6" style={{ color: "var(--text-muted)" }}>
        Courses, credentials &amp; certifications.
      </p>

      <div className="space-y-0">
        {certificates.map((cert, i) => (
          <motion.a
            key={i}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-start gap-3 py-4 group cursor-pointer"
            style={{
              borderTop: i === 0 ? "1px solid var(--separator)" : undefined,
              borderBottom: "1px solid var(--separator)",
              textDecoration: "none",
            }}
          >
            {/* Icon */}
            <span
              className="mt-0.5 flex-none w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
              style={{
                background: "var(--accent-subtle)",
                color: "var(--accent)",
              }}
            >
              <Award size={14} strokeWidth={1.8} aria-hidden="true" />
            </span>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p
                className="text-[13px] font-medium leading-[1.4] mb-0.5 transition-colors"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {cert.title}
              </p>
              <p
                className="font-mono text-[10px] uppercase tracking-[0.08em]"
                style={{ color: "var(--text-muted)" }}
              >
                {cert.issuer}
              </p>
            </div>

            {/* External link indicator */}
            <ExternalLink
              size={13}
              strokeWidth={1.5}
              aria-hidden="true"
              className="flex-none mt-0.5 opacity-0 group-hover:opacity-60 transition-opacity"
              style={{ color: "var(--text-muted)" }}
            />
          </motion.a>
        ))}
      </div>
    </motion.section>
  )
}
