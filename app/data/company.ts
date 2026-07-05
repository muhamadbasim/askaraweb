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

export interface SolutionCapability {
  label: string
}

export interface IndustrySolution {
  title: string
  subtitle: string
  category: string
  icon: string
  accent: string
  description: string
  capabilities: string[]
  benefits: string[]
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
    title: 'Enterprise grade solutions',
    description: 'Business platforms are designed around reliable workflows, maintainable architecture, and operational accountability.',
  },
  {
    metric: '02',
    title: 'AI-powered innovation',
    description: 'Automation, analytics, and AI assistants help teams reduce manual work and improve response speed.',
  },
  {
    metric: '03',
    title: 'Scalable architecture',
    description: 'Solutions are built for secure growth, future integration, and evolving business complexity from day one.',
  },
  {
    metric: '04',
    title: 'Custom development',
    description: 'Askara adapts software to each industry process instead of forcing teams into generic tools.',
  },
  {
    metric: '05',
    title: 'Cloud and on-premise ready',
    description: 'Deployment direction can align with performance, governance, security, and operational requirements.',
  },
  {
    metric: '06',
    title: 'Long-term partnership',
    description: 'We support implementation, optimization, and iteration so technology keeps creating value after launch.',
  },
]

export const industries: IndustrySolution[] = [
  {
    title: 'Manufacturing ERP',
    subtitle: 'Smart Manufacturing Solutions',
    category: 'Operations',
    icon: 'MFG',
    accent: '#12afa4',
    description: 'Integrated ERP for production, inventory, purchasing, quality, maintenance, finance, and supply chain visibility.',
    capabilities: ['Production management', 'Inventory control', 'Purchasing workflow', 'Quality control', 'Maintenance planning', 'Finance reporting', 'Supply chain dashboard', 'AI forecasting'],
    benefits: ['Increase productivity', 'Reduce operational cost', 'Monitor factory performance in real time'],
  },
  {
    title: 'Education System',
    subtitle: 'Smart Education Platform',
    category: 'Experience',
    icon: 'EDU',
    accent: '#3b82f6',
    description: 'Digital academic platform for student information, learning delivery, attendance, parent engagement, and school finance.',
    capabilities: ['Student information', 'Learning management', 'Academic management', 'Attendance tracking', 'Parent portal', 'Finance module', 'Digital library', 'AI assistant'],
    benefits: ['Improve learning experience', 'Simplify academic operations', 'Strengthen parent engagement'],
  },
  {
    title: 'Clinic & Beauty Management',
    subtitle: 'Smart Clinic Ecosystem',
    category: 'Experience',
    icon: 'CLN',
    accent: '#ec4899',
    description: 'Clinic operating system for appointments, patient records, treatment history, membership, CRM, inventory, and dashboards.',
    capabilities: ['Patient management', 'Appointment scheduling', 'Electronic medical records', 'Treatment history', 'Membership programs', 'CRM follow-up', 'Inventory control', 'Financial dashboard'],
    benefits: ['Improve patient experience', 'Increase retention', 'Streamline clinic operations'],
  },
  {
    title: 'Hotel Management',
    subtitle: 'Integrated Hotel Solutions',
    category: 'Hospitality',
    icon: 'HTL',
    accent: '#06b6d4',
    description: 'Hotel platform for reservation, front office, housekeeping, F&B, channel manager, POS, revenue, and guest services.',
    capabilities: ['Reservation system', 'Front office', 'Housekeeping', 'F&B operations', 'Channel manager', 'POS integration', 'Revenue dashboard', 'Guest portal'],
    benefits: ['Elevate guest experience', 'Increase occupancy visibility', 'Improve revenue control'],
  },
  {
    title: 'Resto Management',
    subtitle: 'Smart Restaurant Solutions',
    category: 'Hospitality',
    icon: 'RST',
    accent: '#f97316',
    description: 'Restaurant platform for POS, menu recipes, stock movement, kitchen display, online orders, loyalty, and analytics.',
    capabilities: ['POS cashier', 'Menu recipe costing', 'Inventory movement', 'Kitchen display system', 'Table reservation', 'Online ordering', 'CRM loyalty', 'Analytics dashboard'],
    benefits: ['Accelerate service flow', 'Control food cost', 'Improve customer satisfaction'],
  },
  {
    title: 'Laundry Management',
    subtitle: 'Smart Laundry Solutions',
    category: 'Operations',
    icon: 'LDY',
    accent: '#22c55e',
    description: 'Laundry business system for orders, membership, pickup delivery, inventory, machine assets, staff performance, and billing.',
    capabilities: ['Order management', 'Customer membership', 'Pickup delivery', 'Inventory supplies', 'Machine assets', 'Staff performance', 'Billing automation', 'Operational reporting'],
    benefits: ['Increase operational efficiency', 'Improve customer service', 'Track profitability clearly'],
  },
  {
    title: 'Outsourcing Management',
    subtitle: 'Workforce Solution',
    category: 'Workforce',
    icon: 'HR',
    accent: '#8b5cf6',
    description: 'Workforce management platform for employee data, attendance, payroll, contract, performance, training, billing, and compliance.',
    capabilities: ['Employee management', 'Attendance tracking', 'Payroll process', 'Contract control', 'Performance review', 'Training records', 'Client billing', 'Compliance reports'],
    benefits: ['Optimize workforce operations', 'Improve cost efficiency', 'Maintain service quality'],
  },
  {
    title: 'Franchise Management',
    subtitle: 'Grow Your Franchise Business',
    category: 'Growth',
    icon: 'FRC',
    accent: '#eab308',
    description: 'Franchise growth system for franchisees, outlets, royalty, supply chain, marketing, sales reporting, and compliance documents.',
    capabilities: ['Franchisee management', 'Outlet operations', 'Royalty tracking', 'Supply chain flow', 'Marketing campaigns', 'Sales reporting', 'Document control', 'Compliance dashboard'],
    benefits: ['Scale expansion faster', 'Standardize outlet operations', 'Track network profitability'],
  },
  {
    title: 'BPR / Fintech System',
    subtitle: 'Digital Financial Solutions',
    category: 'Finance',
    icon: 'FIN',
    accent: '#14b8a6',
    description: 'Financial workflow platform for loan management, credit analysis, collection, approvals, customer portal, reporting, and AI scoring.',
    capabilities: ['Loan management', 'Credit analysis', 'Collection workflow', 'Member management', 'Approval workflow', 'Customer portal', 'Regulatory reporting', 'AI credit scoring'],
    benefits: ['Speed up approvals', 'Improve risk control', 'Strengthen collection visibility'],
  },
  {
    title: 'AI Digital Employee',
    subtitle: 'Next Generation AI Workforce',
    category: 'AI & Automation',
    icon: 'AI',
    accent: '#38bdf8',
    description: 'AI workforce solutions for customer service, reception, sales, HR, collection, knowledge management, data analysis, and executive support.',
    capabilities: ['AI customer service', 'Virtual receptionist', 'Sales assistant', 'HR assistant', 'Collection assistant', 'Knowledge management', 'Data analyst', 'Executive assistant'],
    benefits: ['Provide 24/7 availability', 'Reduce repetitive workload', 'Increase team productivity'],
  },
]

export const technologyPartnerPillars: DescriptionItem[] = [
  {
    title: 'Integrated in One System',
    icon: '▦',
    description: 'Connect operations, data, and users through one coordinated digital ecosystem.',
  },
  {
    title: 'Real-Time & Accurate',
    icon: '↗',
    description: 'Give leaders faster operational visibility through dashboards and structured workflows.',
  },
  {
    title: 'Automation & Efficiency',
    icon: '⚙',
    description: 'Reduce repetitive manual work so teams can focus on high-value execution.',
  },
  {
    title: 'Data-Driven Decision',
    icon: '◎',
    description: 'Turn business activity into insights that support measurable decisions.',
  },
  {
    title: 'Secure & Reliable',
    icon: '◇',
    description: 'Design with reliability, access control, and operational continuity in mind.',
  },
  {
    title: 'Professional Support',
    icon: '24',
    description: 'Partner beyond launch with improvement, maintenance, and practical technical guidance.',
  },
]

export const team: TeamMember[] = [
  { name: 'Putri Diana Oktavia', role: 'CEO', image: '/images/team/putri-diana-oktavia.jpg' },
  { name: 'Muhamad Basim', role: 'CTO', image: '/images/team/muhamad-basim.jpg' },
  { name: 'Firman Febryan', role: 'COO', image: '/images/team/firman-febryan.jpg' },
]
