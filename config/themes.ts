/**
 * themes.ts — Two themes: dark (default) and light.
 */

export type ThemeKey = "midnight" | "light"

export interface ThemeItem {
  key: ThemeKey
  label: string
  description: string
  accentColor: string
  gradient: string | null
}

export const themes: ThemeItem[] = [
  {
    key: "midnight",
    label: "Dark",
    description: "Midnight · dark",
    accentColor: "rgba(255,255,255,0.6)",
    gradient: null,
  },
  {
    key: "light",
    label: "Light",
    description: "Light · clean white",
    accentColor: "rgba(0,0,0,0.7)",
    gradient: "linear-gradient(150deg, #e8e8e8 0%, #f5f5f5 50%, #ffffff 100%)",
  },
]
