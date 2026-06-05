export const colors = {
  brand: {
    primary: "#0B1F4D",
    secondary: "#132B67",
    tertiary: "#1A3A7A",
    footer: "#051D3B",
    footerDark: "#031428",
  },
  accent: {
    cyan: "#00D4FF",
    teal: "#00BFA5",
    gold: "#FFB300",
    goldHover: "#FF8F00",
  },
  surface: {
    bg: "#F7FAFC",
    card: "rgba(255, 255, 255, 0.72)",
    cardBorder: "rgba(255, 255, 255, 0.6)",
    muted: "rgba(11, 31, 77, 0.04)",
  },
  text: {
    primary: "#0F172A",
    secondary: "#475569",
    muted: "#64748B",
    inverse: "#FFFFFF",
  },
  border: {
    light: "rgba(11, 31, 77, 0.08)",
    medium: "rgba(11, 31, 77, 0.15)",
    accent: "rgba(0, 212, 255, 0.3)",
  },
  gradient: {
    brand: "linear-gradient(135deg, #0B1F4D 0%, #132B67 100%)",
    brandVertical: "linear-gradient(180deg, #0B1F4D 0%, #051D3B 100%)",
    accent: "linear-gradient(to right, #00D4FF, #00BFA5)",
    hero: "linear-gradient(135deg, rgba(11,31,77,0.92) 0%, rgba(11,31,77,0.75) 45%, rgba(11,31,77,0.55) 100%)",
    gold: "linear-gradient(135deg, #FFB300, #FF8F00)",
  },
  overlay: {
    navy: "rgba(11, 31, 77, 0.85)",
    light: "rgba(11, 31, 77, 0.06)",
  },
  dept: {
    it: "#0B1F4D",
    bioscience: "#132B67",
    chemistry: "#1A3A7A",
  },
  button: {
    primary: "#0B1F4D",
    secondary: "#132B67",
    accent: "#00D4FF",
    highlight: "#00BFA5",
    cta: "#FFB300",
    ctaHover: "#FF8F00",
  },
} as const;

export const glassCard = {
  borderRadius: "24px",
  bg: colors.surface.card,
  backdropFilter: "blur(12px)",
  border: `1px solid ${colors.surface.cardBorder}`,
  boxShadow: "0 8px 32px rgba(11, 31, 77, 0.06)",
  sx: { WebkitBackdropFilter: "blur(12px)" },
};

/** Consistent layout rhythm — 8px grid, scales up on larger breakpoints */
export const layout = {
  containerMaxW: "1400px",
  containerPx: { base: 5, sm: 6, md: 8, lg: 10 },
  sectionPy: { base: 16, md: 20, lg: 24 },
  sectionPyCompact: { base: 12, md: 16, lg: 20 },
  sectionPyTight: { base: 10, md: 12 },
  pagePy: { base: 12, md: 16, lg: 20 },
  pageGridGap: { base: 8, md: 10, lg: 12 },
  contentStack: { base: 6, md: 8, lg: 10 },
  gridGap: { base: 6, md: 8, lg: 10 },
  gridGapLg: { base: 8, md: 10, lg: 14 },
  headerMb: { base: 8, md: 10, lg: 12 },
  heroOverlap: { base: -10, md: -14 },
  bannerPy: { base: 16, md: 20, lg: 24 },
  navbarPy: { base: 3, md: 4 },
} as const;
