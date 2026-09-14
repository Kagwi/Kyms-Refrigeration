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
    image: 'https://images.pexels.com/photos/29223418/pexels-photo-29223418.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Air Conditioners',
    description: 'Split, window, and industrial AC units for efficient space cooling.',
    image: 'https://images.pexels.com/photos/7616651/pexels-photo-7616651.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Control Panels',
    description: 'HVAC control panels for centralised monitoring and system management.',
    image: 'https://images.pexels.com/photos/24828656/pexels-photo-24828656.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Thermostats',
    description: 'Digital and programmable thermostats for precise temperature control.',
    image: 'https://images.pexels.com/photos/7616651/pexels-photo-7616651.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Condensers',
    description: 'Outdoor condenser units for heat rejection in refrigeration systems.',
    image: 'https://images.pexels.com/photos/24828656/pexels-photo-24828656.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Evaporator Fans',
    description: 'High-performance evaporator fan motors for consistent air circulation.',
    image: 'https://images.pexels.com/photos/29223418/pexels-photo-29223418.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Thermostatic Expansion Valves',
    description: 'TXV valves for precise refrigerant flow control in HVAC systems.',
    image: 'https://images.pexels.com/photos/7616651/pexels-photo-7616651.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Filter Dryers',
    description: 'Refrigeration-grade filter driers to remove moisture and contaminants.',
    image: 'https://images.pexels.com/photos/24828656/pexels-photo-24828656.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Thermo Sensors',
    description: 'Accurate temperature sensors for HVAC monitoring and control.',
    image: 'https://images.pexels.com/photos/29223418/pexels-photo-29223418.jpeg?auto=compress&cs=tinysrgb&w=800',
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
