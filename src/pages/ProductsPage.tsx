import { Package } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Products from '@/components/Products';
import PageWrapper from '@/components/PageWrapper';
import { SERVICE_IMAGE } from '@/data';

const PRODUCTS = [
  // Original products
  {
    name: 'Copper Pipes',
    description: 'High-quality copper pipes available in various sizes for HVAC and refrigeration.',
    image: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Elbows',
    description: 'Copper elbows and fittings in multiple sizes for secure pipe connections.',
    image: 'https://images.pexels.com/photos/5691625/pexels-photo-5691625.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Gas Gauges',
    description: 'Precision gas gauges for accurate refrigerant pressure readings.',
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
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

export default function ProductsPage() {
  return (
    <PageWrapper>
      <PageHero
        title="Our Products"
        highlight="Quality HVAC Supplies"
        subtitle="Copper pipes, elbows, gas gauges, fridges, air conditioners, control panels, thermostats, condensers, evaporator fans, TXV valves, filter dryers, thermo sensors — all available. Order directly via WhatsApp."
        icon={Package}
        bgImage={SERVICE_IMAGE}
      />
      <Products products={PRODUCTS} />
    </PageWrapper>
  );
}
