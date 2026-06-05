import { colors } from "../theme/tokens";
import type { BannerSlide } from "./bannerContent";

export type DeptNavButton = { label: string; color: string; href?: string };
export type TechItem = { label: string; image: string };
export type CareerGroup = { title: string; items: string[] };

export type DepartmentData = {
  slug: string;
  title: string;
  breadcrumb: string;
  heroImage: string;
  bannerSlides: BannerSlide[];
  paragraphs: string[];
  bestPractices?: string[];
  highlights?: string[];
  industryLinkage?: { text: string; partners: string[] };
  ugPrograms: string[];
  pgPrograms: string[];
  features: string[];
  deptNavButtons: DeptNavButton[];
  courseNavButtons: DeptNavButton[];
  careerTitle: string;
  careerGroups: CareerGroup[];
  technologies: TechItem[];
};

const btn = colors.button;

export const DEPARTMENT_LIST = [
  {
    slug: "it",
    title: "Department of I.T.",
    subtitle: "Information Technology",
    color: colors.dept.it,
    icon: "globe",
    href: "/departments/it",
  },
  {
    slug: "bioscience",
    title: "Department of Biosciences",
    subtitle: "Bioscience & Microbiology",
    color: colors.dept.bioscience,
    icon: "chart",
    href: "/departments/bioscience",
  },
  {
    slug: "chemistry",
    title: "Department of Chemistry",
    subtitle: "Pure & Applied Chemistry",
    color: colors.dept.chemistry,
    icon: "book",
    href: "/departments/chemistry",
  },
];

const deptButtons = [
  { label: "Syllabus", color: btn.primary, href: "/courses" },
  { label: "Rankers", color: btn.highlight, href: "/#rankers" },
  { label: "Faculties", color: btn.secondary, href: "/about" },
  { label: "Alumni", color: btn.accent, href: "/about" },
];

const itCourses = [
  { label: "B.C.A.", color: btn.primary, href: "/courses" },
  { label: "B.Sc.(IT)", color: btn.highlight, href: "/courses" },
  { label: "M.Sc.(IT & CA)", color: btn.secondary, href: "/courses" },
];

const bioCourses = [
  { label: "B.Sc.(Micro.)", color: btn.primary, href: "/courses" },
  { label: "M.Sc.(Micro.)", color: btn.secondary, href: "/courses" },
  { label: "D.M.L.T.", color: btn.highlight, href: "/courses" },
];

const chemCourses = [
  { label: "B.Sc.(Chemistry)", color: btn.primary, href: "/courses" },
  { label: "M.Sc.(Chemistry)", color: btn.secondary, href: "/courses" },
];

export const DEPARTMENTS: Record<string, DepartmentData> = {
  it: {
    slug: "it",
    title: "Department of Information Technology",
    breadcrumb: "Department of IT",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80&auto=format&fit=crop",
    bannerSlides: [
      {
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80&auto=format&fit=crop",
        badge: "Department of IT",
        title: "Department of Information Technology",
        subtitle: "BCA · B.Sc.(IT) · M.Sc.(IT & CA)",
        tagline: "Industry-aligned curriculum, modern computer labs, and dedicated placement assistance since 2000.",
      },
      {
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80&auto=format&fit=crop",
        badge: "ICT Labs",
        title: "Advanced Computer Laboratories",
        subtitle: "Programming · Web · Mobile · Data Analytics",
        tagline: "Hands-on training with latest hardware, software, and high-speed campus connectivity.",
      },
      {
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80&auto=format&fit=crop",
        badge: "Career Ready",
        title: "Career Opportunity in I.T.",
        subtitle: "Software Engineer · System Analyst · Project Manager",
        tagline: "Graduates placed across development, design, evaluation, and infrastructure roles.",
      },
    ],
    paragraphs: [
      "The Department of Information Technology at KJ, Junagadh was established in 2000 with a vision to provide quality education in computer science and information technology. Affiliated to Bhakta Kavi Narsinh Mehta University (BKNMU), Junagadh, the department has consistently delivered excellence in academics and placements.",
      "Our mission is to strengthen career goals through industry-aligned curriculum, modern computer laboratories, and a robust Learning Management System. We focus on developing skilled professionals ready for the global IT industry.",
      "The department offers undergraduate and postgraduate programs designed to meet the evolving demands of the technology sector, with emphasis on practical learning, project-based education, and placement assistance.",
    ],
    ugPrograms: ["B.C.A. (Bachelor of Computer Application)", "B.Sc.(I.T.) (Bachelor of Science in Information Technology)"],
    pgPrograms: ["M.Sc.(I.T. & C.A.) (Master of Science in Information Technology & Computer Application)"],
    features: [
      "Modern computer laboratories with latest hardware & software",
      "Career goal strengthening through industry visits & internships",
      "Dedicated placement assistance cell",
      "Learning Management System (LMS) for all courses",
      "Highly skilled and experienced faculty members",
      "Well-stocked library with digital resources",
      "Campus-wide high-speed internet connectivity",
    ],
    deptNavButtons: deptButtons,
    courseNavButtons: itCourses,
    careerTitle: "Career Opportunity in I.T.",
    careerGroups: [
      { title: "Evaluation", items: ["Tester (Code/Functional)", "Information Audit System"] },
      { title: "Design", items: ["System Analyst", "Business Analyst", "Multimedia Expert", "Visual Modeling Expert"] },
      { title: "Development", items: ["Junior/Senior Software Engineer", "Team Leader", "Project Manager", "DBA"] },
      { title: "Training", items: ["Enabler", "Academic"] },
      { title: "Maintenance", items: ["Network Manager", "Infrastructure Support", "Re-engineering", "BPO/KPO"] },
    ],
    technologies: [
      { label: "Python Django", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&q=80&auto=format&fit=crop" },
      { label: "Android", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&q=80&auto=format&fit=crop" },
      { label: "Laravel", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&q=80&auto=format&fit=crop" },
      { label: "WordPress", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&q=80&auto=format&fit=crop" },
      { label: "React JS", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&q=80&auto=format&fit=crop" },
      { label: "Node JS", image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&q=80&auto=format&fit=crop" },
      { label: "MongoDB", image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=300&q=80&auto=format&fit=crop" },
      { label: "R Programming", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&q=80&auto=format&fit=crop" },
      { label: "Flutter", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&q=80&auto=format&fit=crop" },
      { label: "Python", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&q=80&auto=format&fit=crop" },
    ],
  },
  bioscience: {
    slug: "bioscience",
    title: "Department of Bioscience",
    breadcrumb: "Department of Bioscience",
    heroImage: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1600&q=80&auto=format&fit=crop",
    bannerSlides: [
      {
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1600&q=80&auto=format&fit=crop",
        badge: "Department of Bioscience",
        title: "Department of Bioscience",
        subtitle: "Microbiology · Biotechnology · DMLT",
        tagline: "Centre of excellence in bioscience with research-focused laboratory training since 2000.",
      },
      {
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1600&q=80&auto=format&fit=crop",
        badge: "Medical Lab Technology",
        title: "Clinical & Industrial Microbiology",
        subtitle: "M.Sc.(Microbiology) · D.M.L.T.",
        tagline: "Practical exposure for careers in pharmaceutical, healthcare, food, and research industries.",
      },
      {
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1600&q=80&auto=format&fit=crop",
        badge: "Research & Innovation",
        title: "Science Labs & Seminars",
        subtitle: "Symposiums · Industrial Visits · Co-curricular Activities",
        tagline: "Qualified faculty, modern infrastructure, and outcome-based teaching for bioscience students.",
      },
    ],
    paragraphs: [
      "The Department of Bioscience at KJ, Junagadh is affiliated to Bhakta Kavi Narsinh Mehta University (BKNMU), Junagadh. Established in 2000, the department has been a centre of excellence in microbiology, biotechnology, and medical laboratory sciences.",
      "We provide quality education with a strong focus on research, practical laboratory training, and student-centric activities including seminars, symposiums, and industrial visits to prepare graduates for diverse careers in bioscience.",
      "Our department fosters an environment of scientific inquiry and innovation, equipping students with the knowledge and skills required for careers in pharmaceutical, healthcare, food, and research industries.",
    ],
    bestPractices: [
      "Insightful course structure and integrated teaching learning process",
      "Follows outcome-based teaching with regular tests and assignments",
      "Offers personalized learning opportunities via in-class and off-class learning",
    ],
    highlights: [
      "Offers a range of co-curricular activities (symposiums, seminars, etc.)",
      "Possesses adequate infrastructure and lab facilities",
      "Offers an array of programs and courses in UG and PG level",
      "Qualified and motivated faculty members",
      "Offers a range of extra-curricular, value-added courses",
    ],
    ugPrograms: ["B.Sc.(Microbiology)", "D.M.L.T. (Diploma in Medical Laboratory Technology)"],
    pgPrograms: ["M.Sc.(Microbiology)"],
    features: [],
    deptNavButtons: deptButtons,
    courseNavButtons: bioCourses,
    careerTitle: "Career Opportunity in Bioscience",
    careerGroups: [
      {
        title: "Different Positions",
        items: [
          "Food Microbiologist", "Medical Microbiologist", "Mycologist", "Water Analyst",
          "Quality Assurance", "Quality Control", "Production Officer", "Research Scientist",
          "Research Fellow", "Research Assistant", "Laboratory Technician", "Teacher/Lecturer", "Food Inspector",
        ],
      },
      {
        title: "Various Fields",
        items: [
          "Pharmaceutical Industries", "Dairy Industries", "Processing Industries", "Beverage Industries",
          "Clinical and Pathology Lab", "Healthcare Organisations", "Fisheries Industries",
          "Research Institutions", "Higher Education Institutions", "Forensic Science",
          "Government Organisations", "Agro Industries",
        ],
      },
    ],
    technologies: [
      { label: "Applied Microbiology", image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=300&q=80&auto=format&fit=crop" },
      { label: "Genetic Engineering", image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=300&q=80&auto=format&fit=crop" },
      { label: "Immunology", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=300&q=80&auto=format&fit=crop" },
      { label: "Industrial Microbiology", image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=300&q=80&auto=format&fit=crop" },
      { label: "Biochemistry", image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=300&q=80&auto=format&fit=crop" },
      { label: "Immunofluorescence", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=300&q=80&auto=format&fit=crop" },
      { label: "Bioinformatics", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&q=80&auto=format&fit=crop" },
    ],
  },
  chemistry: {
    slug: "chemistry",
    title: "Department of Chemistry",
    breadcrumb: "Department of Chemistry",
    heroImage: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=1600&q=80&auto=format&fit=crop",
    bannerSlides: [
      {
        image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=1600&q=80&auto=format&fit=crop",
        badge: "Department of Chemistry",
        title: "Department of Chemistry",
        subtitle: "B.Sc.(Chemistry) · M.Sc.(Chemistry)",
        tagline: "Strong theoretical foundations with extensive practical laboratory experience.",
      },
      {
        image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=1600&q=80&auto=format&fit=crop",
        badge: "Science Laboratories",
        title: "Pure & Applied Chemistry",
        subtitle: "Organic · Inorganic · Physical · Analytical Chemistry",
        tagline: "Modern labs with research-oriented learning and industry-aligned curriculum.",
      },
      {
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1600&q=80&auto=format&fit=crop",
        badge: "Industry Linkage",
        title: "Career Opportunity in Chemistry",
        subtitle: "Pharma · Chemical · Research · Education",
        tagline: "Internships and placements with leading chemical and pharmaceutical industries.",
      },
    ],
    paragraphs: [
      "The Department of Chemistry at KJ, Junagadh is committed to providing quality education in pure and applied chemistry. Our programs are designed to develop strong theoretical foundations combined with extensive practical laboratory experience.",
      "The department focuses on research-oriented learning, quality faculty, and student activities that prepare graduates for careers in chemical industries, pharmaceuticals, education, and research institutions.",
      "With modern laboratories and industry linkages, we ensure students gain real-world exposure and the skills needed to excel in the field of chemistry.",
    ],
    industryLinkage: {
      text: "The department maintains strong connections with leading industries for internships, industrial visits, and placement opportunities.",
      partners: ["Reliance Industries", "TATA", "Rallis", "Sun Pharma", "Cipla", "Gujarat Chemicals", "Deepak Nitrite"],
    },
    ugPrograms: ["B.Sc.(Chemistry)"],
    pgPrograms: ["M.Sc.(Chemistry)"],
    features: [],
    deptNavButtons: deptButtons,
    courseNavButtons: chemCourses,
    careerTitle: "Career Opportunity in Chemistry",
    careerGroups: [
      {
        title: "Different Positions",
        items: [
          "Quality Control Chemist", "Food & Drug Inspector", "Lab Technician",
          "Research Associate", "Production Chemist", "Analytical Chemist",
          "Environmental Chemist", "Teacher/Lecturer", "Scientific Officer",
        ],
      },
      {
        title: "Various Fields",
        items: [
          "Chemical Industries", "Pharmaceutical", "Petroleum", "Educational Sector",
          "Research Institutions", "Government Laboratories", "Paint & Polymer Industries",
          "Fertilizer Industries", "Food Processing",
        ],
      },
    ],
    technologies: [
      { label: "Inorganic Chemistry", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&q=80&auto=format&fit=crop" },
      { label: "Stereochemistry", image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=300&q=80&auto=format&fit=crop" },
      { label: "Physical Chemistry", image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=300&q=80&auto=format&fit=crop" },
      { label: "Organic Chemistry", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=300&q=80&auto=format&fit=crop" },
      { label: "Spectroscopy", image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=300&q=80&auto=format&fit=crop" },
      { label: "Medical Chemistry", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=300&q=80&auto=format&fit=crop" },
      { label: "Analytical Chemistry", image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=300&q=80&auto=format&fit=crop" },
    ],
  },
};
