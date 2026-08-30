import type { Project } from './types'

// Fallback data. Rendered when Firestore has no projects yet, and used
// as the seed list you can load into Firestore from the admin panel
// (or by hand) the first time you set the site up.
export const seedProjects: Project[] = [
  {
    id: 'evidentiary',
    order: 1,
    name: 'EVIDENTIARY',
    description:
      'A multi tenant SaaS project management platform for legal and engineering firms. Built the React and TypeScript interface end to end down to the Node.js, Express, and MongoDB backend, then rebuilt how user roles work under the hood with proper RBAC middleware so each tenant only sees what it should.',
    role: 'Lead developer',
    status: 'In progress',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'RBAC'],
  },
  {
    id: 'nexuspay',
    order: 2,
    name: 'NexusPay',
    description:
      'A secure international payment platform, and my final year project. Led a four person team to build a system trustworthy enough to move real money, wrapped in TLS 1.3 and AES 256 GCM encryption, holding 99.9% uptime.',
    role: 'Team lead',
    status: 'Live',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Docker'],
    repoUrl: 'https://github.com/JNSY-3D',
  },
  {
    id: 'pulsecare',
    order: 3,
    name: 'PulseCare',
    description:
      'An Android healthcare monitoring app built for pacemaker patients, where uptime is not optional. Hit 99.9% uptime with HIPAA aligned encryption, and added a medication reminder that cut missed doses by 85% plus a sub two second SOS alert.',
    role: 'Developer',
    status: 'Live',
    tags: ['Kotlin', 'Firebase', 'Material Design 3', 'MVVM'],
    repoUrl: 'https://github.com/XENTRIX-Portfolio/PulseCare',
  },
  {
    id: 'stock-management',
    order: 4,
    name: 'Stock Management System',
    description:
      'An inventory platform tracking over 1,000 items live through Firebase, with tiered permissions so staff only touch what they are supposed to. An analytics dashboard on top cut stockouts by 60% and pushed audit accuracy to 99.8%.',
    role: 'Developer',
    status: 'Live',
    tags: ['React', 'Firebase', 'Node.js', 'Material UI', 'Chart.js'],
    repoUrl: 'https://github.com/XENTRIX-Portfolio/Stock-ManagementSite',
  },
  {
    id: 'serve-sa',
    order: 5,
    name: 'ServeSA',
    description:
      'A municipal service portal handling over 200 daily citizen requests, built for the South African context.',
    role: 'Developer',
    status: 'Live',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 'hourzzz',
    order: 6,
    name: 'Hourzzz',
    description:
      'An employee time tracking app built to simplify shift logging and payroll handoffs.',
    role: 'Developer',
    status: 'Live',
    tags: ['React', 'Firebase'],
  },
  {
    id: 'esp-client',
    order: 7,
    name: 'ESP Client',
    description:
      'A load shedding management system that pulls live schedules through API integration.',
    role: 'Developer',
    status: 'Live',
    tags: ['JavaScript', 'API Integration'],
  },
]
