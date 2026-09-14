import {
  Wind,
  Wrench,
  Snowflake,
  ThermometerSun,
  Gauge,
  Settings,
  Package,
  ShoppingCart,
  Recycle,
  Zap,
  Building2,
  Factory,
  Hospital,
  Store,
  Hotel,
  Warehouse,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const COMPANY = {
  name: 'KYMS Refrigeration and Air Conditioning',
  shortName: 'KYMS',
  tagline:
    'We specialize in installing, servicing, testing and commissioning HVAC systems including CFC refrigeration phase-out programs and green energy technology.',
  phone: '+254 799 188 112',
  phoneIntl: '254799188112',
  email: 'kelvinmaguta021@icloud.com',
  location: 'Basement, Downtown Towers, Duruma Road',
  guarantee:
    'We guarantee you will experience the excellent breeze of efficient cooling!',
  subGuarantee:
    'Cooling solutions tailored to satisfy your cooling needs, for any type of air conditioning.',
  googleBusinessLink: 'https://share.google/DgFITfaqnJapVPNlW',
};

export function whatsappLink(productName: string): string {
  const message = `Hello, I am interested in buying ${productName} of all sizes.`;
  return `https://wa.me/${COMPANY.phoneIntl}?text=${encodeURIComponent(message)}`;
}

export function whatsappServiceLink(serviceName: string): string {
  const message = `Hello, I am interested in your ${serviceName} service. Please provide more information.`;
  return `https://wa.me/${COMPANY.phoneIntl}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
  { label: 'Clients', path: '/clients' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const HVAC_SERVICES = [
  { icon: ThermometerSun, label: 'Check Up' },
  { icon: Wind, label: 'Cleaning' },
  { icon: Wrench, label: 'Repairs' },
  { icon: Settings, label: 'Maintenance' },
  { icon: Package, label: 'Dismantling' },
  { icon: Snowflake, label: 'Installation' },
  { icon: Gauge, label: 'Freon Charging' },
  { icon: Recycle, label: 'System Reprocess' },
  { icon: Wrench, label: 'Replacement Parts' },
  { icon: Package, label: 'Relocation' },
];

export const REFRIGERATION_SERVICES = [
  { icon: Snowflake, label: 'Cold Room Installation' },
  { icon: Package, label: 'Cold Room Equipment Sales' },
  { icon: Settings, label: 'Cold Storage Assembly' },
  { icon: Zap, label: 'Green Energy Technology' },
  { icon: Recycle, label: 'CFC Phase-Out Programs' },
  { icon: Gauge, label: 'Testing & Commissioning' },
];

export interface Product {
  name: string;
  description: string;
  image: string;
}

export const PRODUCTS: Product[] = [
  // --- Original products ---
  {
    name: 'Copper Pipes',
    description: 'High-quality copper pipes available in various sizes for HVAC and refrigeration.',
    image: 'https://images.pexels.com/photos/28169591/pexels-photo-28169591.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Elbows',
    description: 'Copper elbows and fittings in multiple sizes for secure pipe connections.',
    image: 'https://images.pexels.com/photos/28178448/pexels-photo-28178448.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Gas Gauges',
    description: 'Precision gas gauges for accurate refrigerant pressure readings.',
    image: 'https://images.pexels.com/photos/7937300/pexels-photo-7937300.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  // New products
  {
    name: 'Refrigerators',
    description: 'Commercial and domestic fridges for reliable food and beverage cooling.',
    image: 'https://images.pexels.com/photos/38306635/pexels-photo-38306635.jpeg',
  },
  {
    name: 'Air Conditioners',
    description: 'Split, window, and industrial AC units for efficient space cooling.',
    image: 'https://images.pexels.com/photos/27134985/pexels-photo-27134985.jpeg',
  },
  {
    name: 'Control Panels',
    description: 'HVAC control panels for centralised monitoring and system management.',
    image: 'https://images.pexels.com/photos/5953723/pexels-photo-5953723.jpeg',
  },
  {
    name: 'Thermostats',
    description: 'Digital and programmable thermostats for precise temperature control.',
    image: 'https://images.pexels.com/photos/7616651/pexels-photo-7616651.jpeg',
  },
  {
    name: 'Evaporator Fans',
    description: 'High-performance evaporator fan motors for consistent air circulation.',
    image: 'https://images.pexels.com/photos/5502720/pexels-photo-5502720.jpeg',
  },
  {
    name: 'Thermostatic Expansion Valves',
    description: 'TXV valves for precise refrigerant flow control in HVAC systems.',
    image: 'https://images.pexels.com/photos/372796/pexels-photo-372796.jpeg',
  },
];

// --- Images ---

export const HERO_IMAGE =
  'https://images.pexels.com/photos/38788452/pexels-photo-38788452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const SERVICE_IMAGE =
  'https://github.com/Kagwi/Kyms-Refrigeration/blob/main/Air%20Con.jpeg?raw=true?';

export const COLD_ROOM_IMAGE =
  'https://github.com/Kagwi/Kyms-Refrigeration/blob/main/Coldroom.jpeg?raw=true';

export const ABOUT_IMAGE =
  'https://github.com/Kagwi/Kyms-Refrigeration/blob/main/Kyms%20Staff.jpeg?raw=true';

export const PRODUCTS_IMAGE_BG =
  'https://images.pexels.com/photos/28169591/pexels-photo-28169591.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const CLIENTS_IMAGE_BG =
  'https://images.pexels.com/photos/946310/pexels-photo-946310.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const GALLERY_IMAGES = [
  {
    src: 'https://images.pexels.com/photos/19016904/pexels-photo-19016904.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Rooftop HVAC units on a commercial building',
    label: 'Commercial HVAC Installation',
  },
  {
    src: 'https://images.pexels.com/photos/8456426/pexels-photo-8456426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Rooftop air conditioning units',
    label: 'Outdoor Condenser Units',
  },
  {
    src: 'https://images.pexels.com/photos/27099094/pexels-photo-27099094.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Refrigerated trucks in industrial lot',
    label: 'Refrigerated Transport',
  },
  {
    src: 'https://images.pexels.com/photos/4487382/pexels-photo-4487382.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Warehouse worker among stacked goods',
    label: 'Cold Storage Operations',
  },
  {
    src: 'https://images.pexels.com/photos/29181490/pexels-photo-29181490.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Technician hands working with tools',
    label: 'Professional Servicing',
  },
  {
    src: 'https://images.pexels.com/photos/9606949/pexels-photo-9606949.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Hands using precision tools in workshop',
    label: 'Precision Repairs',
  },
];

export const BUILDING_IMAGES = [
  'https://images.pexels.com/photos/14527417/pexels-photo-14527417.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/946310/pexels-photo-946310.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://github.com/Kagwi/Kyms-Refrigeration/blob/main/Building%202.jpeg?raw=true',
  'https://github.com/Kagwi/Kyms-Refrigeration/blob/main/Building%204.jpeg?raw=true',
];

// --- Testimonials ---

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  message: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'James Mwangi',
    role: 'Facilities Manager',
    company: 'Downtown Towers',
    message:
      'KYMS installed and commissioned our entire building HVAC system. Their professionalism and attention to detail was outstanding. The cooling efficiency improved dramatically after their system reprocess service.',
    rating: 5,
  },
  {
    name: 'Sarah Kamau',
    role: 'Operations Director',
    company: 'FreshCold Logistics',
    message:
      'We hired KYMS to assemble our cold storage facility and the results exceeded expectations. Their team was punctual, knowledgeable, and delivered ahead of schedule. Highly recommend for any cold room project.',
    rating: 5,
  },
  {
    name: 'David Otieno',
    role: 'Business Owner',
    company: 'Breeze Comfort Ltd',
    message:
      'After struggling with frequent breakdowns, KYMS took over our AC maintenance. They identified issues other technicians missed and our systems have run flawlessly since. Their freon charging service is top-notch.',
    rating: 5,
  },
  {
    name: 'Patrick Muhia',
    role: 'Manager',
    company: 'World Plastics',
    message:
      'The KYMS team handled the complete HVAC installation for our hotel renovation. They were clean, efficient, and respectful of our guests throughout the process. The cooling is perfectly balanced in every room.',
    rating: 5,
  },
  {
    name: 'Mr. Farah',
    role: 'Proprietor',
    company: 'Second Cafe',
    message:
      'For a hospital, reliable refrigeration is critical. KYMS installed our medical cold rooms and has maintained them flawlessly for over a year. Their response time for emergency call-outs is impressive.',
    rating: 5,
  },
  {
    name: 'Mr. Samuel',
    role: 'Christian Foundation Fellowship (CFF)',
    company: 'Church',
    message:
      'KYMS supplied and installed all our refrigeration display units. They also trained our staff on basic maintenance. The copper pipes and fittings they provided are excellent quality. Great after-sales support.',
    rating: 5,
  },
];

// --- Past Clients ---

export interface Client {
  name: string;
  type: string;
  icon: LucideIcon;
}

export const PAST_CLIENTS: Client[] = [
  { name: 'World Plastics', type: 'Commercial Building', icon: Building2 },
  { name: 'Second Cafe', type: 'Hospitality', icon: Hotel },
  { name: 'Christian Foundation Fellowship', type: 'Church', icon: Building2 },
  { name: 'Queendom Salon', type: 'Commercial Building', icon: Building2 },
  { name: 'Scales Technology', type: 'Office Space', icon: Building2 },
  { name: 'Highland Peak View Apartments', type: 'Residential', icon: Building2 },
];

// --- Partner Suppliers (refrigeration equipment & spare parts) ---

export interface Partner {
  name: string;
  initials: string;
  tagline: string;
}

export const PARTNERS: Partner[] = [
  { name: 'Roch', initials: 'R', tagline: 'HVAC & Refrigeration' },
  { name: 'Hisesnse', initials: 'HS', tagline: 'HVAC & Refrigeration' },
  { name: 'Von Hot Point', initials: 'VHP', tagline: 'Climate Control' },
  { name: 'Samsung HVAC', initials: 'SM', tagline: 'Cooling Solutions' },
  { name: 'LG Electronics', initials: 'LG', tagline: 'Air Conditioners' },
  { name: 'SmartPro', initials: 'SP', tagline: 'Commercial Cooling' },
  { name: 'Bitzer Kenya', initials: 'BZ', tagline: 'Refrigeration Compressors' },
  { name: 'TCL', initials: 'TCL', tagline: 'Compressor Technology' },
  { name: 'Danfoss Supply', initials: 'DF', tagline: 'Refrigeration Controls' },
  { name: 'Haier', initials: 'H', tagline: 'Heat Exchangers' },
];

export const PAYMENT = {
  bank: {
    name: 'Equity Bank',
    accountNo: '1330162508070',
  },
  mpesa: {
    paybill: '247247',
    accountNo: '0799 188 112',
  },
};
