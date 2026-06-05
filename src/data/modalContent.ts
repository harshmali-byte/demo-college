import { colors } from "../theme/tokens";

export const FLYER_MODAL = {
  tagline: "Your Choice — Your Career — Your Future",
  features: [
    "Quality Education since 2000",
    "Girls Hostel in Campus",
    "WiFi Enabled Campus",
  ],
  courseGroups: [
    {
      title: "Bachelor Degree",
      color: colors.brand.secondary,
      courses: ["B.C.A.", "B.Sc.(IT)", "B.Sc."],
    },
    {
      title: "Master Degree",
      color: colors.brand.tertiary,
      courses: ["M.Sc.(IT&CA)", "M.Sc.(Chem)", "M.Sc.(Micro)"],
    },
    {
      title: "P. G. Diploma",
      color: colors.brand.primary,
      courses: ["D.M.L.T."],
    },
  ],
  highlights: ["Interactive Atmosphere", "Skill Based Education"],
  studentImage:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80&auto=format&fit=crop",
  website: "www.kj.edu.in",
};

export const ELEARNING_MODAL = {
  title: "KJ eLearning Platform for IT & Science Courses",
  platforms: [
    {
      name: "eGuru",
      tagline: "Innovative, Educate, Empower",
      url: "eguru.kj.edu.in",
      gradient: "linear(to-r, brand.500, accent.gold)",
      accent: colors.brand.secondary,
    },
    {
      name: "eGyan",
      tagline: "eFuel Your Future with eGyan",
      url: "egyan.kj.edu.in",
      gradient: "linear(to-r, brand.500, accent.cyan)",
      accent: colors.brand.primary,
    },
  ],
};

export const MODAL_STORAGE_KEY = "kj-institute-first-visit-complete";
