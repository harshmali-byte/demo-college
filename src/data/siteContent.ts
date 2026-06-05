export const CONTACT = {
  email: "jkjunagadh@gmail.com",
  address: "Green City, Bypass Road, Near Chobari Railway Crossing, Junagadh-362001",
  addressShort: "Green City, Bypass Road, Near Chobari Railway Crossing, Junagadh",
  phones: ["9228006940", "7990661530"],
  primaryPhone: "9228006940",
};

export const COLLEGE = {
  name: "College of Computer, Science & Information Technology",
  shortName: "KJ",
  brandTitle: "KJ JUNAGADH",
  location: "Junagadh",
  fullName: "College of Computer, Science & Information Technology - Junagadh",
  copyrightText:
    "College of Computer, Science & Information Technology KJ-Junagadh.",
  about:
    "Graduate, Post Graduate and Diploma Education in emerging area of Pure Science, Bioscience, Computer Science and Medical Laboratory Technology..",
};

export type NavSubItem = { label: string; href: string };

export type NavMenuItem = {
  label: string;
  href: string;
  children?: NavSubItem[];
};

export const NAV_MENU: NavMenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "WELCOME TO COLLEGE", href: "/about" },
      { label: "ABOUT COLLEGE", href: "/about" },
      { label: "MISSION/VISION", href: "/about" },
      { label: "MANAGEMENT-SIET", href: "/about#management" },
    ],
  },
  {
    label: "Departments",
    href: "/departments",
    children: [
      { label: "INFORMATION TECHNOLOGY", href: "/departments/it" },
      { label: "BIOSCIENCE", href: "/departments/bioscience" },
      { label: "CHEMISTRY", href: "/departments/chemistry" },
      { label: "FACULTIES", href: "/about" },
    ],
  },
  {
    label: "Courses",
    href: "/courses",
    children: [
      { label: "M.SC.(IT & CA)", href: "/courses" },
      { label: "M.SC.(MICRO.)", href: "/courses" },
      { label: "M.SC.(CHEM.)", href: "/courses" },
      { label: "D.M.L.T.", href: "/courses" },
      { label: "B.SC.(IT)", href: "/courses" },
      { label: "B.C.A.", href: "/courses" },
      { label: "B.SC.(MICRO.)", href: "/courses" },
      { label: "B.SC.(CHEM.)", href: "/courses" },
    ],
  },
  {
    label: "Admission",
    href: "/admission",
    children: [
      { label: "ADMISSION PROCESS", href: "/admission" },
      { label: "RULES & REGULATIONS", href: "/admission" },
    ],
  },
  {
    label: "Gallery",
    href: "/#gallery",
    children: [
      { label: "COLLEGE INFRASTRUCTURE", href: "/#facilities" },
      { label: "CO-CURRICULAR ACTIVITIES", href: "/#gallery" },
    ],
  },
  { label: "Rankers", href: "/#rankers" },
  { label: "Support", href: "/contact" },
  { label: "Contact Us", href: "/contact" },
];

/** @deprecated Use NAV_MENU — kept for simple link lists */
export const NAV_LINKS = NAV_MENU.map(({ label, href }) => ({ label, href }));

export const SITEMAP_LINKS_LEFT = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Departments", href: "/departments" },
  { label: "Courses", href: "/courses" },
  { label: "Admission", href: "/admission" },
];

export const SITEMAP_LINKS_RIGHT = [
  { label: "Gallery", href: "/#gallery" },
  { label: "Rankers", href: "/#rankers" },
  { label: "Facilities", href: "/#facilities" },
  { label: "Contact Us", href: "/contact" },
];

export const SUPPORT_LINKS = [
  "Student Corner",
  "Alumni",
  "Anti-Ragging",
  "Anti-Sexual Harrashment",
  "Rules & Regulations",
  "Appointments",
  "Committee",
  "Activity Calendar",
  "Feedback",
];

export const SOCIAL_LINKS = [
  { label: "Android App", icon: "android" },
  { label: "Facebook", icon: "facebook" },
  { label: "Twitter", icon: "twitter" },
  { label: "Instagram", icon: "instagram" },
  { label: "YouTube", icon: "youtube" },
  { label: "Telegram", icon: "telegram" },
];

export const COURSES = [
  {
    id: "bca",
    title: "Bachelor of Computer Application",
    shortTitle: "B.C.A.",
    duration: "3 Years",
    seats: "120 Seats",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&auto=format&fit=crop",
    category: "Computer Science",
  },
  {
    id: "bsc-it",
    title: "Bachelor of Science in IT",
    shortTitle: "B. Sc.(IT)",
    duration: "3 Years",
    seats: "60 Seats",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&auto=format&fit=crop",
    category: "Information Technology",
  },
  {
    id: "bsc",
    title: "Bachelor of Science",
    shortTitle: "B. Sc.",
    duration: "3 Years",
    seats: "90 Seats",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80&auto=format&fit=crop",
    category: "Pure Science",
  },
  {
    id: "msc-it-ca",
    title: "Master of Science (IT & CA)",
    shortTitle: "M.Sc. (IT & CA)",
    duration: "2 Years",
    seats: "40 Seats",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&auto=format&fit=crop",
    category: "Post Graduate",
  },
  {
    id: "msc-micro",
    title: "Master of Science (Microbiology)",
    shortTitle: "M.Sc. (Microbiology)",
    duration: "2 Years",
    seats: "30 Seats",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80&auto=format&fit=crop",
    category: "Bioscience",
  },
  {
    id: "msc-chem",
    title: "Master of Science (Chemistry)",
    shortTitle: "M.Sc. (Chemistry)",
    duration: "2 Years",
    seats: "30 Seats",
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&q=80&auto=format&fit=crop",
    category: "Pure Science",
  },
  {
    id: "dmlt",
    title: "Diploma in Medical Laboratory Technology",
    shortTitle: "DMLT",
    duration: "2 Years",
    seats: "40 Seats",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80&auto=format&fit=crop",
    category: "Diploma",
  },
];
