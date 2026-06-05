export const HERO_QUICK_ACTIONS = [
  { label: "Admission Inquiry", href: "/contact" },
  { label: "Online Admission", href: "/admission" },
  { label: "Online Fees Payment", href: "/contact" },
  { label: "KJ Prospectus", href: "/admission" },
];

export const HERO_SLIDES = [
  {
    image:
      "https://images.unsplash.com/photo-1638636214032-581196ffd400?w=1600&q=80&auto=format&fit=crop",
    badge: "Admissions Open 2026-27",
    title: "Welcome to KJ-Junagadh",
    subtitle: "College of Computer, Science & Information Technology",
    affiliation: "Affiliated to Bhakta Kavi Narsinh Mehta University, Junagadh",
    description:
      "A sprawling green campus in Junagadh offering quality education in IT and Science for over two decades — shaping confident, career-ready graduates.",
    primaryCta: { label: "About College", href: "/about" },
    secondaryCta: { label: "Apply Now", href: "/admission" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80&auto=format&fit=crop",
    badge: "Campus Infrastructure",
    title: "Modern Academic Buildings",
    subtitle: "Spacious Classrooms, Auditoriums & Learning Spaces",
    affiliation: "Wi-Fi Enabled Campus · ICT Classrooms · Seminar Halls",
    description:
      "Purpose-built infrastructure with well-ventilated classrooms, seminar halls, and student-friendly facilities designed for focused learning and collaboration.",
    primaryCta: { label: "View Facilities", href: "/#facilities" },
    secondaryCta: { label: "Campus Tour", href: "/#gallery" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80&auto=format&fit=crop",
    badge: "ICT Computer Labs",
    title: "Advanced IT Laboratories",
    subtitle: "Programming, Networking & Software Development",
    affiliation: "BCA · B.Sc.(IT) · M.Sc.(IT & CA) · PGDCA",
    description:
      "Fully equipped computer labs with latest hardware, high-speed internet, and industry-standard software for hands-on training and project work.",
    primaryCta: { label: "Explore Courses", href: "/courses" },
    secondaryCta: { label: "IT Department", href: "/departments/it" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=1600&q=80&auto=format&fit=crop",
    badge: "Chemistry Laboratory",
    title: "Pure & Applied Science Labs",
    subtitle: "Chemistry, Physics & Analytical Research",
    affiliation: "B.Sc. · M.Sc.(Chemistry) · Research-Oriented Curriculum",
    description:
      "Modern chemistry and science laboratories with precision instruments, safety standards, and guided practical sessions for strong scientific foundations.",
    primaryCta: { label: "Chemistry Dept.", href: "/departments/chemistry" },
    secondaryCta: { label: "Our Departments", href: "/departments" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1600&q=80&auto=format&fit=crop",
    badge: "Bioscience & DMLT Labs",
    title: "Microbiology & Medical Lab Training",
    subtitle: "Clinical Skills with Real Laboratory Exposure",
    affiliation: "M.Sc.(Microbiology) · DMLT · Biotechnology Programs",
    description:
      "Specialized bioscience and medical laboratory facilities where students gain practical expertise in microbiology, diagnostics, and healthcare technology.",
    primaryCta: { label: "Bioscience Dept.", href: "/departments/bioscience" },
    secondaryCta: { label: "View Courses", href: "/courses" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1600&q=80&auto=format&fit=crop",
    badge: "Smart Classrooms",
    title: "Interactive Learning Environment",
    subtitle: "Seminars, Workshops & Expert Faculty Sessions",
    affiliation: "Expert Faculty · Industry Visits · Placement Support",
    description:
      "Engaging lecture halls and seminar spaces host regular workshops, expert talks, and academic events that connect classroom learning to real-world careers.",
    primaryCta: { label: "About College", href: "/about" },
    secondaryCta: { label: "Admission Process", href: "/admission" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600&q=80&auto=format&fit=crop",
    badge: "Campus Life",
    title: "A Vibrant Student Community",
    subtitle: "Library · Hostel · Sports · Cultural Activities",
    affiliation: "Holistic Development Beyond the Classroom",
    description:
      "From a well-stocked library to cultural events and sports, KJ offers a supportive campus life that nurtures academic excellence and personal growth.",
    primaryCta: { label: "Campus Gallery", href: "/#gallery" },
    secondaryCta: { label: "Contact Us", href: "/contact" },
  },
];

export const ABOUT_HOME = {
  badge: "About Us",
  title: "Welcome to KJ-Junagadh",
  paragraphs: [
    "College of Computer, Science & Information Technology (KJ), Junagadh has been providing high-quality education in emerging areas of Pure Science, Bioscience, Computer Science and Medical Laboratory Technology for over two decades.",
    "Affiliated to Bhakta Kavi Narsinh Mehta University, Junagadh, we are committed to academic excellence, innovation, and holistic student development in a vibrant learning environment.",
    "Our institution blends rigorous academics with practical exposure, modern laboratories, and industry-aligned curriculum to prepare students for successful careers and responsible citizenship.",
  ],
  image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80&auto=format&fit=crop",
};

export const MISSION_MANAGEMENT = [
  {
    title: "Mission & Vision",
    text: "To provide world-class education in IT and Science, fostering innovation, research, and ethical leadership. We envision KJ as a centre of academic excellence producing globally competent professionals.",
    href: "/about",
  },
  {
    title: "Management",
    text: "Led by Saraswati Infotech Education Trust (SIET), our experienced management team is dedicated to maintaining the highest standards of education, infrastructure, and student welfare.",
    href: "/about",
  },
];

export const COURSE_TABS = [
  { id: "bca", label: "BCA" },
  { id: "bsc-it", label: "B.Sc.IT" },
  { id: "bsc", label: "B.Sc." },
  { id: "pgdca", label: "PGDCA" },
  { id: "msc-it", label: "M.Sc.(CA & IT)" },
  { id: "msc-cs", label: "M.Sc.(CS)" },
  { id: "msc-micro", label: "M.Sc.(Micro)" },
];

export const TAB_COURSES: Record<string, { title: string; image: string }[]> = {
  bca: [
    { title: "Bachelor of Computer Application (B.C.A.)", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80&auto=format&fit=crop" },
    { title: "B.C.A. — Software Development", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80&auto=format&fit=crop" },
    { title: "B.C.A. — Web Technologies", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80&auto=format&fit=crop" },
  ],
  "bsc-it": [
    { title: "Bachelor of Science in IT (B.Sc.IT)", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80&auto=format&fit=crop" },
    { title: "B.Sc.IT — Network & Security", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80&auto=format&fit=crop" },
    { title: "B.Sc.IT — Data Analytics", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop" },
  ],
  bsc: [
    { title: "Bachelor of Science (B.Sc.)", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80&auto=format&fit=crop" },
    { title: "B.Sc. — Chemistry", image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80&auto=format&fit=crop" },
    { title: "B.Sc. — Physics", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80&auto=format&fit=crop" },
  ],
  pgdca: [
    { title: "Post Graduate Diploma in Computer Application", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80&auto=format&fit=crop" },
    { title: "PGDCA — Programming", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80&auto=format&fit=crop" },
    { title: "PGDCA — Database Management", image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&q=80&auto=format&fit=crop" },
  ],
  "msc-it": [
    { title: "Master of Science (IT & CA)", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80&auto=format&fit=crop" },
    { title: "M.Sc. — Cloud Computing", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80&auto=format&fit=crop" },
    { title: "M.Sc. — Computer Applications", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80&auto=format&fit=crop" },
  ],
  "msc-cs": [
    { title: "Master of Science (Computer Science)", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80&auto=format&fit=crop" },
    { title: "M.Sc.(CS) — AI & ML", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80&auto=format&fit=crop" },
    { title: "M.Sc.(CS) — Software Engineering", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80&auto=format&fit=crop" },
  ],
  "msc-micro": [
    { title: "Master of Science (Microbiology)", image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80&auto=format&fit=crop" },
    { title: "M.Sc.(Micro) — Clinical Microbiology", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80&auto=format&fit=crop" },
    { title: "M.Sc.(Micro) — Industrial Microbiology", image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80&auto=format&fit=crop" },
  ],
};

export const FACILITIES = [
  "ICT Classrooms",
  "Wi-Fi Campus",
  "Library",
  "Computer Lab",
  "Science Lab",
  "Hostel",
  "Transportation",
  "Sports",
  "Canteen",
  "Medical Facility",
];

export const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80&auto=format&fit=crop", alt: "Cultural event" },
  { src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&q=80&auto=format&fit=crop", alt: "Seminar" },
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80&auto=format&fit=crop", alt: "College event" },
  { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80&auto=format&fit=crop", alt: "Graduation ceremony" },
];

export const DEPARTMENT_GRID = [
  { label: "Department of I.T.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80&auto=format&fit=crop", href: "/departments/it" },
  { label: "Department of Biosciences", image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&q=80&auto=format&fit=crop", href: "/departments/bioscience" },
  { label: "Department of Chemistry", image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&q=80&auto=format&fit=crop", href: "/departments/chemistry" },
  { label: "Computer Science", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80&auto=format&fit=crop", href: "/departments/it" },
  { label: "Microbiology", image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&q=80&auto=format&fit=crop", href: "/departments/bioscience" },
  { label: "Biotechnology", image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&q=80&auto=format&fit=crop", href: "/departments/bioscience" },
  { label: "Medical Lab Technology", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&q=80&auto=format&fit=crop", href: "/departments/bioscience" },
  { label: "Physics", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80&auto=format&fit=crop", href: "/departments/chemistry" },
  { label: "Mathematics", image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&q=80&auto=format&fit=crop", href: "/departments/it" },
];

export const SHINING_STARS = [
  { name: "Priya Sharma", rank: "University Topper — B.Sc.IT", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop" },
  { name: "Rahul Patel", rank: "Gold Medal — B.C.A.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop" },
  { name: "Neha Desai", rank: "Topper — M.Sc. Microbiology", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop" },
  { name: "Karan Mehta", rank: "Distinction — B.Sc.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop" },
];

export const INQUIRY_COURSES = [
  "B.C.A.",
  "B.Sc.(IT)",
  "B.Sc.",
  "M.Sc.(IT & CA)",
  "M.Sc.(Microbiology)",
  "M.Sc.(Chemistry)",
  "DMLT",
  "PGDCA",
];
