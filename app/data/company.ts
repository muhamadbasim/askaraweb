export interface IconTitleItem {
  title: string
  icon: string
}

export interface DescriptionItem extends IconTitleItem {
  description: string
}

export interface ConversionProof {
  metric: string
  title: string
  description: string
}

export interface ApproachStep {
  number: string
  title: string
  description: string
}

export interface TeamMember {
  name: string
  role: string
  image: string
}

export const companyContact = {
  location: 'Deruzzi SPACE',
  address: 'Jl. Sukajadi 25, Sukajadi, Jawa Barat 40162',
  email: 'info@askaradigital.com',
  phone: '0822-5811-2280',
  phoneHref: 'tel:+6282258112280',
  whatsappLabel: 'WhatsApp Consultation',
  whatsappHref: 'https://wa.me/6282258112280?text=Halo%20Askara%2C%20saya%20ingin%20konsultasi%20solusi%20digital%20untuk%20bisnis%20saya.',
  website: 'www.askaradigital.com',
  websiteHref: 'https://www.askaradigital.com',
} as const

export const features: IconTitleItem[] = [
  { title: 'Business-Oriented', icon: '▣' },
  { title: 'Experienced Team', icon: '◇' },
  { title: 'Scalable Architecture', icon: '▤' },
  { title: 'AI-Driven Innovation', icon: '✦' },
]

export const missions = [
  'Deliver innovative and reliable digital solutions.',
  'Empower businesses through technology and data.',
  'Build long-term partnerships based on trust and value.',
  'Continuously innovate to create sustainable growth.',
]

export const services: DescriptionItem[] = [
  {
    title: 'Enterprise Software Development',
    icon: '</>',
    description: 'Custom software solutions to drive innovation and growth.',
  },
  {
    title: 'Web & Mobile Apps',
    icon: '▱',
    description: 'Scalable and intuitive applications built for exceptional user experiences.',
  },
  {
    title: 'AI & Automation',
    icon: 'AI',
    description: 'Intelligent automation to optimize processes and accelerate results.',
  },
  {
    title: 'Cloud Infrastructure',
    icon: '☁',
    description: 'Secure, scalable, and reliable cloud solutions that power your business.',
  },
  {
    title: 'Data & Business Intelligence',
    icon: '↗',
    description: 'Transform data into actionable insights to make smarter business decisions.',
  },
  {
    title: 'IT Consulting',
    icon: '◎',
    description: 'Strategic advisory and technology consulting to achieve your goals.',
  },
]

export const approach: ApproachStep[] = [
  { number: '01', title: 'Discover', description: 'Understand business needs and challenges.' },
  { number: '02', title: 'Design', description: 'Craft the right solution and user experience.' },
  { number: '03', title: 'Develop', description: 'Build with quality, agility, and best practices.' },
  { number: '04', title: 'Deliver', description: 'Implement solutions that drive real impact.' },
  { number: '05', title: 'Support', description: 'Provide ongoing optimization and support.' },
]

export const values: DescriptionItem[] = [
  {
    title: 'Collaboration',
    icon: '◎',
    description: 'We believe in the power of teamwork and strong partnerships.',
  },
  {
    title: 'Innovation',
    icon: '✦',
    description: 'We continuously explore new ideas to deliver better solutions.',
  },
  {
    title: 'Integrity',
    icon: '◇',
    description: 'We act with honesty, transparency, and responsibility.',
  },
  {
    title: 'Excellence',
    icon: '▣',
    description: 'We are committed to delivering the highest quality in everything we do.',
  },
]


export const whyAskara: ConversionProof[] = [
  {
    metric: '01',
    title: 'Strategy before build',
    description: 'Every engagement starts with business goals, operational context, and a clear roadmap before engineering begins.',
  },
  {
    metric: '02',
    title: 'Integrated delivery team',
    description: 'Consulting, UX, software, cloud, data, and automation work as one delivery lane to reduce handoff friction.',
  },
  {
    metric: '03',
    title: 'Scalable by design',
    description: 'Solutions are designed for secure growth, maintainable architecture, and future integration from day one.',
  },
  {
    metric: '04',
    title: 'Partnership mindset',
    description: 'Askara supports implementation, optimization, and iteration so technology keeps creating value after launch.',
  },
]

export const industries: DescriptionItem[] = [
  {
    title: 'Enterprise & Operations',
    icon: '▦',
    description: 'Internal platforms, workflow automation, dashboards, and integration layers for growing organizations.',
  },
  {
    title: 'Retail & Commerce',
    icon: '◈',
    description: 'Digital storefronts, order flows, mobile experiences, and data-driven customer engagement.',
  },
  {
    title: 'Education & Training',
    icon: '✧',
    description: 'Learning platforms, admissions workflows, analytics, and automation for modern education providers.',
  },
  {
    title: 'Professional Services',
    icon: '◎',
    description: 'Client portals, CRM workflows, reporting systems, and productivity tools for service businesses.',
  },
  {
    title: 'Property & Facilities',
    icon: '▱',
    description: 'Operational systems, booking flows, asset tracking, and digital tenant or customer experiences.',
  },
  {
    title: 'Data-driven Teams',
    icon: 'AI',
    description: 'Business intelligence, AI-assisted workflows, and automation for teams that need faster decisions.',
  },
]

export const team: TeamMember[] = [
  { name: 'Putri Diana Oktavia', role: 'CEO', image: '/images/team/putri-diana-oktavia.jpg' },
  { name: 'Muhamad Basim', role: 'CTO', image: '/images/team/muhamad-basim.jpg' },
  { name: 'Firman Febryan', role: 'COO', image: '/images/team/firman-febryan.jpg' },
]
