export interface IconTitleItem {
  title: string
  icon: string
}

export interface DescriptionItem extends IconTitleItem {
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

export const team: TeamMember[] = [
  { name: 'Putri Diana Oktavia', role: 'CEO', image: '/images/team/putri-diana-oktavia.jpg' },
  { name: 'Muhamad Basim', role: 'CTO', image: '/images/team/muhamad-basim.jpg' },
  { name: 'Firman Febryan', role: 'COO', image: '/images/team/firman-febryan.jpg' },
]
