import { Wind, MessageCircle, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Services from '@/components/Services';
import PageWrapper from '@/components/PageWrapper';
import { SERVICE_IMAGE, COMPANY, whatsappServiceLink, GALLERY_IMAGES } from '@/data';

export default function ServicesPage() {
  return (
    <PageWrapper>
      <PageHero
        title="Our Services"
        highlight="Expertise You Can Trust"
        subtitle="From ductable air conditioning units and HVAC installation to cold room assembly and green energy technology, we deliver comprehensive cooling solutions."
        icon={Wind}
        bgImage={SERVICE_IMAGE}
      />
      <Services />

      {/* Project Gallery */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 reveal">
            <div className="inline-flex items-center gap-2 bg-brand-cyan/10 rounded-full px-4 py-1.5 mb-4">
              <Wind className="w-4 h-4 text-brand-cyan-dark" />
              <span className="text-brand-cyan-dark text-sm font-semibold tracking-wide">Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
              Our Work in Action
            </h2>
            <p className="text-brand-navy/60 text-lg">
              See the HVAC and refrigeration projects we've delivered for our clients.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {GALLERY_IMAGES.map((img, index) => (
              <div
                key={index}
                className="reveal gallery-item relative rounded-2xl overflow-hidden shadow-md group cursor-pointer"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="h-56 sm:h-64 overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent" />
                <div className="absolute inset-0 bg-brand-cyan/10 group-hover:bg-brand-cyan/5 transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white font-display font-semibold text-sm drop-shadow-lg">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="section-padding max-w-4xl mx-auto text-center reveal">
          <div className="relative bg-gradient-to-r from-brand-navy to-brand-navy-light rounded-2xl p-10 sm:p-12 overflow-hidden shadow-navy">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Need a Service We Offer?
              </h2>
              <p className="text-white/70 mb-6">
                {COMPANY.guarantee}
              </p>
              <a
                href={whatsappServiceLink('HVAC & Refrigeration')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-cyan-dark text-white font-semibold px-7 py-4 rounded-xl shadow-brand hover:shadow-lg hover:scale-[1.03] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Inquire on WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
