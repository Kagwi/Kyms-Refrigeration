import { Package } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Products from '@/components/Products';
import PageWrapper from '@/components/PageWrapper';
import { SERVICE_IMAGE } from '@/data';

export default function ProductsPage() {
  return (
    <PageWrapper>
      <PageHero
        title="Our Products"
        highlight="Quality HVAC Supplies"
        subtitle="Copper pipes, elbows, and gas gauges — all available in various sizes. Order directly via WhatsApp."
        icon={Package}
        bgImage={SERVICE_IMAGE}
      />
      <Products />
    </PageWrapper>
  );
}
