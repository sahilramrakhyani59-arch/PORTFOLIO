import type { LucideIcon } from 'lucide-react';
import {
  Code2,
  FileCode,
  Cpu,
  Calculator,
  Globe,
  User,
  Boxes,
  BrainCircuit,
  Server,
  Database,
  GitBranch,
  Sparkles,
  Layout,
  Monitor,
  FolderGit2,
  GraduationCap,
  ScanSearch,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Instagram,
} from 'lucide-react';

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export type Skill = { name: string; level: number; icon: LucideIcon };

export const skills: Skill[] = [
  { name: 'Java', level: 85, icon: Code2 },
  { name: 'JavaScript', level: 80, icon: FileCode },
  { name: 'React', level: 78, icon: Globe },
  { name: 'HTML', level: 90, icon: Layout },
  { name: 'CSS', level: 85, icon: Monitor },
  { name: 'SQL', level: 75, icon: Database },
  { name: 'C', level: 80, icon: Cpu },
  { name: 'Git / GitHub', level: 82, icon: GitBranch },
  { name: 'AI Tools', level: 88, icon: Sparkles },
  { name: 'Basic ML', level: 65, icon: BrainCircuit },
];

export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  icon: LucideIcon;
  gradient: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Legal Metrology Compliance Scanner',
    description:
      'A software solution that helps identify important packaged commodity information such as MRP, net quantity and manufacturing/packing details using OCR and automated processing.',
    technologies: ['Java', 'Spring Boot', 'OCR', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/sahilramrakhyani',
    liveUrl: '#',
    icon: ScanSearch,
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 2,
    title: 'Smart Pothole & Road Damage Detection',
    description:
      'An IoT-based road monitoring project that uses sensors, camera and location data to detect and record road damage for safer roads.',
    technologies: ['Python', 'Raspberry Pi', 'MPU6050', 'GPS', 'Camera'],
    githubUrl: 'https://github.com/sahilramrakhyani',
    liveUrl: '#',
    icon: Cpu,
    gradient: 'from-violet-500/20 to-purple-500/20',
  },
  {
    id: 3,
    title: 'Simple Calculator',
    description:
      'A command-line calculator developed in C supporting basic arithmetic operations with clean, efficient logic.',
    technologies: ['C Programming'],
    githubUrl: 'https://github.com/sahilramrakhyani',
    liveUrl: '#',
    icon: Calculator,
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
];

export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
};

export const experience: ExperienceItem[] = [
  {
    role: 'Software Development Intern',
    organization: 'Incubein Foundation — RTMNU',
    period: 'Internship',
    description:
      'Gained hands-on exposure to software development and web technologies in a real-world environment.',
    highlights: [
      'Worked with software development and web technologies',
      'Gained experience with asset management and organizing/tracking company assets',
      'Collaborated in a professional engineering environment',
    ],
    icon: Server,
  },
  {
    role: 'B.Tech — Computer Science Engineering',
    organization: 'Priyadarshini Bhagwati College of Engineering',
    period: 'Expected Graduation: 2027',
    description:
      'Pursuing B.Tech in Computer Science Engineering, focused on programming, software development and problem-solving skills.',
    highlights: [
      'Building strong foundations in data structures, algorithms and software engineering',
      'Exploring web development, AI-assisted development and practical technology solutions',
    ],
    icon: GraduationCap,
  },
];

export type Certificate = {
  title: string;
  organization: string;
  date: string;
  url: string;
};

export const certificates: Certificate[] = [
  {
    title: 'Certificate Title Placeholder',
    organization: 'Organization Name',
    date: 'Month 2025',
    url: '#',
  },
  {
    title: 'Certificate Title Placeholder',
    organization: 'Organization Name',
    date: 'Month 2025',
    url: '#',
  },
  {
    title: 'Certificate Title Placeholder',
    organization: 'Organization Name',
    date: 'Month 2025',
    url: '#',
  },
];

export type Service = { title: string; description: string; icon: LucideIcon };

export const services: Service[] = [
  { title: 'Business Websites', description: 'Professional, fast and modern websites for businesses and startups.', icon: Briefcase },
  { title: 'Portfolio Websites', description: 'Clean and creative personal portfolios that stand out to recruiters.', icon: User },
  { title: 'Responsive Websites', description: 'Fully responsive sites that look great on every device and screen size.', icon: Monitor },
  { title: 'Software Projects', description: 'End-to-end software projects built with modern tools and best practices.', icon: FolderGit2 },
  { title: 'Student Projects', description: 'Academic and engineering projects that solve real problems effectively.', icon: Boxes },
  { title: 'AI-Assisted Solutions', description: 'Practical digital solutions built using AI-assisted development workflows.', icon: BrainCircuit },
];

export type SocialLink = { label: string; href: string; icon: LucideIcon };

export const socialLinks: SocialLink[] = [
  { label: 'Email', href: 'mailto:sahilramrakhyani@gmail.com', icon: Mail },
  { label: 'GitHub', href: 'https://github.com/sahilramrakhyani', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sahilramrakhyani', icon: Linkedin },
  { label: 'Instagram', href: 'https://instagram.com/sahilramrakhyani', icon: Instagram },
];
