export type BannerSlide = {
  image: string;
  badge?: string;
  title: string;
  subtitle?: string;
  tagline?: string;
};

export type PageBannerConfig = {
  breadcrumbs: { label: string; href?: string }[];
  slides: BannerSlide[];
};

export const PAGE_BANNERS: Record<string, PageBannerConfig> = {
  about: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Welcome to KJ" },
    ],
    slides: [
      {
        image: "https://images.unsplash.com/photo-1638636214032-581196ffd400?w=1600&q=80&auto=format&fit=crop",
        badge: "About KJ",
        title: "Welcome to KJ",
        subtitle: "College of Computer, Science & Information Technology",
        tagline: "Two decades of academic excellence in IT and Science at Junagadh.",
      },
      {
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80&auto=format&fit=crop",
        badge: "Our Legacy",
        title: "Shaping Future Leaders",
        subtitle: "Affiliated to BKNMU, Junagadh",
        tagline: "Quality education, modern infrastructure, and holistic student development.",
      },
      {
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600&q=80&auto=format&fit=crop",
        badge: "Campus Life",
        title: "A Vibrant Learning Community",
        subtitle: "Library · Hostel · Sports · Cultural Activities",
        tagline: "Beyond classrooms — seminars, events, and a supportive campus environment.",
      },
    ],
  },
  admission: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Admission Process" },
    ],
    slides: [
      {
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80&auto=format&fit=crop",
        badge: "Admissions Open 2026-27",
        title: "Admission Process",
        subtitle: "Your Journey to KJ Starts Here",
        tagline: "Explore eligibility, required documents, and step-by-step admission guidance.",
      },
      {
        image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1600&q=80&auto=format&fit=crop",
        badge: "UG & PG Programs",
        title: "Apply for IT & Science Courses",
        subtitle: "BCA · B.Sc.(IT) · B.Sc. · M.Sc. · DMLT · PGDCA",
        tagline: "Choose from undergraduate, postgraduate, and diploma programs at KJ Junagadh.",
      },
      {
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80&auto=format&fit=crop",
        badge: "Campus Facilities",
        title: "Join a Modern Campus",
        subtitle: "Wi-Fi Campus · Labs · Hostel · Placement Support",
        tagline: "State-of-the-art facilities designed for academic success and career growth.",
      },
    ],
  },
  courses: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Courses" },
    ],
    slides: [
      {
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80&auto=format&fit=crop",
        badge: "Academic Programs",
        title: "Featured Courses",
        subtitle: "Undergraduate, Postgraduate & Diploma",
        tagline: "Industry-aligned curriculum across IT, Bioscience, and Pure Science.",
      },
      {
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80&auto=format&fit=crop",
        badge: "Information Technology",
        title: "BCA, B.Sc.(IT) & M.Sc.(IT & CA)",
        subtitle: "Programming · Networking · Software Development",
        tagline: "Hands-on training in advanced computer laboratories with expert faculty.",
      },
      {
        image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=1600&q=80&auto=format&fit=crop",
        badge: "Pure & Applied Science",
        title: "B.Sc., M.Sc. Chemistry & Microbiology",
        subtitle: "Science Labs · Research · Practical Learning",
        tagline: "Build strong foundations in chemistry, microbiology, and medical laboratory technology.",
      },
    ],
  },
  departments: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Departments" },
    ],
    slides: [
      {
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80&auto=format&fit=crop",
        badge: "Our Departments",
        title: "Departments",
        subtitle: "IT · Bioscience · Chemistry",
        tagline: "Specialized departments delivering excellence in academics, research, and placements.",
      },
      {
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1600&q=80&auto=format&fit=crop",
        badge: "Bioscience",
        title: "Microbiology & Medical Lab Sciences",
        subtitle: "M.Sc.(Microbiology) · DMLT · Biotechnology",
        tagline: "Practical laboratory training for careers in healthcare and research industries.",
      },
      {
        image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=1600&q=80&auto=format&fit=crop",
        badge: "Chemistry",
        title: "Pure & Applied Chemistry",
        subtitle: "B.Sc. · M.Sc.(Chemistry)",
        tagline: "Modern laboratories with guided practical sessions and research orientation.",
      },
    ],
  },
  contact: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Contact" },
    ],
    slides: [
      {
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80&auto=format&fit=crop",
        badge: "Get in Touch",
        title: "Contact Us",
        subtitle: "We're Here to Help You",
        tagline: "Reach out for admissions, courses, campus visits, or any queries about KJ Junagadh.",
      },
      {
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80&auto=format&fit=crop",
        badge: "Visit Campus",
        title: "Green City, Bypass Road",
        subtitle: "Near Chobari Railway Crossing, Junagadh-362001",
        tagline: "Schedule a campus visit and explore our facilities, labs, and learning environment.",
      },
      {
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80&auto=format&fit=crop",
        badge: "Feedback Welcome",
        title: "Share Your Suggestions",
        subtitle: "Admissions · Support · General Inquiry",
        tagline: "Your feedback helps us improve — connect with us by phone, email, or the form below.",
      },
    ],
  },
};
