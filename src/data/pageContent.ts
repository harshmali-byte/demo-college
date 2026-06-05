import { colors } from "../theme/tokens";

export const WELCOME_CONTENT = {
  paragraphs: [
    "Welcome to the College of Computer, Science & Information Technology (KJ), Junagadh — a premier institution dedicated to nurturing talent, fostering innovation, and shaping future-ready professionals.",
    "At KJ, we believe every student possesses unique academic potential. Our mission is to unlock that potential through quality education, hands-on learning, and a supportive campus environment that encourages growth at every step.",
    "Beyond academics, we emphasize moral character, discipline, and ethical values — preparing students not only for successful careers but also for responsible citizenship in a rapidly evolving world.",
    "Our global-standard education ecosystem, state-of-the-art laboratories, experienced faculty, and industry-aligned curriculum create an environment where students thrive, innovate, and achieve excellence.",
  ],
  trustees: [
    { name: "Dr. D. G. Makadia", role: "Managing Trustee", color: colors.brand.primary },
    { name: "Mr. G. R. Kansagra", role: "Trustee & Director", color: colors.brand.secondary },
    { name: "Dr. H. L. Kansagra", role: "Trustee", color: colors.accent.teal },
    { name: "Dr. G. T. Ladani", role: "Trustee", color: colors.accent.gold },
    { name: "Mr. V. M. Vaishnani", role: "Trustee", color: colors.brand.tertiary },
  ],
  quickLinks: [
    { label: "Events", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80&auto=format&fit=crop" },
    { label: "Rankers", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80&auto=format&fit=crop" },
    { label: "Alumni", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&auto=format&fit=crop" },
  ],
  management: [
    { name: "Dr. D. G. Makadia", role: "Managing Trustee (SIET)", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop" },
    { name: "Mr. G. R. Kansagra", role: "Trustee & Director (SIET)", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop" },
    { name: "Dr. H. L. Kansagra", role: "Trustee (SIET)", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop" },
    { name: "Dr. G. T. Ladani", role: "Trustee (SIET)", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop" },
    { name: "Mr. V. M. Vaishnani", role: "Trustee (SIET)", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop" },
  ],
};

export const POPULAR_PAGES_HOME = [
  { label: "About College", href: "/about" },
  { label: "About Courses", href: "/courses" },
  { label: "Events Gallery", href: "#" },
  { label: "Students Achievement", href: "#" },
  { label: "Appointments", href: "#" },
  { label: "Alumni", href: "#" },
  { label: "Committee", href: "#" },
  { label: "Anti-Ragging", href: "#" },
  { label: "Anti-Sexual Harassment", href: "#" },
];

export const POPULAR_PAGES_ADMISSION = [
  { label: "About College", href: "/about" },
  { label: "About Courses", href: "/courses" },
  { label: "Library Policy", href: "#" },
  { label: "Student Achievement", href: "#" },
  { label: "Opportunities", href: "#" },
  { label: "Alumni", href: "#" },
  { label: "E-learning", href: "#" },
  { label: "Anti-Ragging", href: "#" },
  { label: "Admission Procedure", href: "/admission" },
];

export const DEPARTMENTS_HOME = [
  { label: "IT Department", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80&auto=format&fit=crop", href: "/departments/it" },
  { label: "Bioscience Department", image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&q=80&auto=format&fit=crop", href: "/departments/bioscience" },
  { label: "Chemistry Department", image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&q=80&auto=format&fit=crop", href: "/departments/chemistry" },
];

export const DEPARTMENTS_ADMISSION = [
  { label: "IT Department", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80&auto=format&fit=crop", href: "/departments/it" },
  { label: "Bioscience Department", image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&q=80&auto=format&fit=crop", href: "/departments/bioscience" },
  { label: "Chemistry Department", image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&q=80&auto=format&fit=crop", href: "/departments/chemistry" },
];

export const ADMISSION_ELIGIBILITY = [
  {
    degree: "B.Sc.",
    tags: ["B.Sc."],
    text: "A candidate who has passed Higher Secondary Certificate examination (10+2) from Gujarat State Board or equivalent examination from any recognized board with Science stream is eligible for admission to B.Sc. program.",
  },
  {
    degree: "B.C.A. & B. Sc.(IT)",
    tags: ["B.Sc.(IT)", "B.C.A."],
    text: "A candidate who has passed Higher Secondary Certificate examination (10+2) from Gujarat State Board or equivalent with vocational stream in Science/Commerce, or Science/Commerce stream with Mathematics, is eligible for B.C.A. and B.Sc.(IT) programs.",
  },
  {
    degree: "M.Sc. (IT & CA)",
    tags: ["M.Sc.(IT)"],
    text: "A candidate holding a Bachelor's degree (B.C.A., B.Sc. IT, B.Sc. Computer Science, or equivalent) with minimum 45% marks from a recognized university is eligible for M.Sc. (IT & CA) program.",
  },
  {
    degree: "M.Sc.(Microbiology)",
    tags: ["M.Sc.(Microbiology)"],
    text: "A candidate holding B.Sc. in Microbiology, Biotechnology, or related Bioscience discipline with minimum 45% marks from a recognized university is eligible for M.Sc.(Microbiology) program.",
  },
  {
    degree: "M.Sc.(Chemistry)",
    tags: ["M.Sc.(Chemistry)"],
    text: "A candidate holding B.Sc. in Chemistry or equivalent degree with minimum 45% marks from a recognized university is eligible for M.Sc.(Chemistry) program.",
  },
];

export const ADMISSION_DOCUMENTS = [
  "Leaving certificate of school/college last attended.",
  "H.S.C. / Degree mark sheet (original + 2 photocopies).",
  "Trial mark sheet (original + 2 photocopies).",
  "H.S.C. / Degree attempt certificate.",
  "Provisional eligibility certificate from Saurashtra University (for other boards).",
  "Caste certificate (if applicable).",
  "Certificate of Physical Handicap (if applicable).",
  "Passport size photographs.",
];

export const CONTACT_WEBSITES = ["www.kj.edu.in", "www.kj.co.in"];
