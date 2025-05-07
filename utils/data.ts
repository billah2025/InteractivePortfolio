export type Project = {
  id: number;
  title: string;
  description: string;
  category: 'web' | 'mobile' | 'design';
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product listings, search functionality, shopping cart, user authentication, and payment integration.',
    category: 'web',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity application for managing tasks, projects, and deadlines with collaborative features and real-time updates.',
    category: 'web',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'JavaScript'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description: 'A comprehensive analytics dashboard that tracks and visualizes social media engagement metrics across multiple platforms.',
    category: 'web',
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false
  },
  {
    id: 4,
    title: 'Travel Companion App',
    description: 'A mobile application that helps users plan trips, discover attractions, and navigate new destinations with offline maps.',
    category: 'mobile',
    technologies: ['React Native', 'Expo', 'Google Maps API', 'GraphQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true
  },
  {
    id: 5,
    title: 'Health Tracker App',
    description: 'A mobile application for tracking fitness activities, nutrition, and health metrics with personalized recommendations.',
    category: 'mobile',
    technologies: ['React Native', 'Redux', 'Firebase', 'HealthKit API'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false
  },
  {
    id: 6,
    title: 'Music Streaming UI',
    description: 'A sleek and intuitive user interface design for a music streaming service with focus on user experience and accessibility.',
    category: 'design',
    technologies: ['Figma', 'Adobe XD', 'UI/UX', 'Prototyping'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true
  },
  {
    id: 7,
    title: 'Real Estate Website',
    description: 'A modern property listing website with advanced search filters, interactive maps, and virtual tour integration.',
    category: 'web',
    technologies: ['Next.js', 'TypeScript', 'Mapbox API', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false
  },
  {
    id: 8,
    title: 'Restaurant Ordering System',
    description: 'A comprehensive solution for restaurants including menu management, order processing, and customer interface.',
    category: 'web',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false
  },
  {
    id: 9,
    title: 'Finance Dashboard UI',
    description: 'A sophisticated UI design for a financial management platform with data visualization and reporting features.',
    category: 'design',
    technologies: ['Figma', 'Sketch', 'Design Systems', 'UI Components'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false
  }
];
