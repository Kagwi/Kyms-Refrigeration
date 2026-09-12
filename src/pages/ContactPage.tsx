import { MessageCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Contact from '@/components/Contact';
import PageWrapper from '@/components/PageWrapper';
import { CLIENTS_IMAGE_BG } from '@/data';

export default function ContactPage() {
  return (
    <PageWrapper>
      <PageHero
        title="Contact Us"
        highlight="Let's Talk Cooling"
        subtitle="Ready for reliable cooling solutions? Reach out for a free quote, service inquiry, or product order."
        icon={MessageCircle}
        bgImage={CLIENTS_IMAGE_BG}
      />
      <Contact />
    </PageWrapper>
  );
}
