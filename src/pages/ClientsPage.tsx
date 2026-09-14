import { Star, Quote, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import PageWrapper from '@/components/PageWrapper';
import PartnerCarousel from '@/components/PartnerCarousel';
import {
  CLIENTS_IMAGE_BG,
  TESTIMONIALS,
  PAST_CLIENTS,
  COMPANY,
  GALLERY_IMAGES,
  whatsappServiceLink,
} from '@/data';
import { MessageCircle } from 'lucide-react';

export default function ClientsPage() {
  return (
    <PageWrapper>
      <PageHero
        title="Our Clients"
        highlight="Trusted by Many"
        subtitle="From commercial buildings to hospitals and cold storage facilities — discover the businesses that rely on KYMS for their cooling needs."
        icon={Building2}
        bgImage={CLIENTS_IMAGE_BG}
      />

      {/* Past Clients Grid */}
      <section className="relative py-20 sm:py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="relative section-padding max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 reveal">
            <div className="inline-flex items-center gap-2 bg-brand-cyan/10 rounded-full px-4 py-1.5 mb-4">
              <Building2 className="w-4 h-4 text-brand-cyan-dark" />
              <span className="text-brand-cyan-dark text-sm font-semibold tracking-wide">Past Clients</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
              Businesses We've Served
            </h2>
            <p className="text-brand-navy/60 text-lg">
              We've delivered cooling solutions across multiple industries — each project
              handled with the same commitment to quality.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PAST_CLIENTS.map((client, index) => {
              const Icon = client.icon;
              return (
                <div
                  key={client.name}
                  className="reveal group bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] hover:border-brand-cyan/30"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-cyan/10 to-brand-cyan/20 group-hover:from-brand-cyan group-hover:to-brand-cyan-dark flex items-center justify-center mb-4 transition-all">
                    <Icon className="w-7 h-7 text-brand-cyan-dark group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display font-bold text-brand-navy text-base mb-1">
                    {client.name}
                  </h3>
                  <p className="text-sm text-brand-navy/50">{client.type}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 reveal">
            <div className="inline-flex items-center gap-2 bg-brand-cyan/10 rounded-full px-4 py-1.5 mb-4">
              <Quote className="w-4 h-4 text-brand-cyan-dark" />
              <span className="text-brand-cyan-dark text-sm font-semibold tracking-wide">Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
              What Our Clients Say
            </h2>
            <p className="text-brand-navy/60 text-lg">
              Real feedback from the people and businesses we've worked with.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="reveal group relative bg-white rounded-2xl p-7 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Quote icon */}
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-brand-cyan/5 group-hover:bg-brand-cyan/10 flex items-center justify-center transition-colors">
                  <Quote className="w-5 h-5 text-brand-cyan/40" />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-cyan text-brand-cyan" />
                  ))}
                </div>

                {/* Message */}
                <p className="text-sm text-brand-navy/70 leading-relaxed mb-6">
                  "{testimonial.message}"
                </p>

                {/* Author */}
                  <div>
                    <h4 className="font-display font-bold text-brand-navy text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-brand-navy/50">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="relative py-20 sm:py-24 bg-white overflow-hidden">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 reveal">
            <div className="inline-flex items-center gap-2 bg-brand-cyan/10 rounded-full px-4 py-1.5 mb-4">
              <Building2 className="w-4 h-4 text-brand-cyan-dark" />
              <span className="text-brand-cyan-dark text-sm font-semibold tracking-wide">Project Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
              Our Work in Action
            </h2>
            <p className="text-brand-navy/60 text-lg">
              A glimpse of the HVAC and refrigeration projects we've delivered.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {GALLERY_IMAGES.map((img, index) => (
              <div
                key={index}
                className={`reveal gallery-item relative rounded-2xl overflow-hidden shadow-md group cursor-pointer ${
                  index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="h-56 sm:h-64 overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute inset-0 bg-brand-cyan/10 group-hover:bg-brand-cyan/5 transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white font-display font-semibold text-sm sm:text-base drop-shadow-lg">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Suppliers Carousel */}
      <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="section-padding max-w-7xl mx-auto mb-10">
          <div className="text-center max-w-3xl mx-auto reveal">
            <div className="inline-flex items-center gap-2 bg-brand-cyan/10 rounded-full px-4 py-1.5 mb-4">
              <MessageCircle className="w-4 h-4 text-brand-cyan-dark" />
              <span className="text-brand-cyan-dark text-sm font-semibold tracking-wide">Our Suppliers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-3">
              Equipment & Spare Parts Partners
            </h2>
            <p className="text-brand-navy/60 text-lg">
              We source genuine refrigeration equipment and spare parts from trusted
              global manufacturers and suppliers.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="reveal">
          <PartnerCarousel />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="section-padding max-w-4xl mx-auto text-center reveal">
          <div className="relative bg-gradient-to-r from-brand-navy to-brand-navy-light rounded-2xl p-10 sm:p-12 overflow-hidden shadow-navy">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Join Our Satisfied Clients
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
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
