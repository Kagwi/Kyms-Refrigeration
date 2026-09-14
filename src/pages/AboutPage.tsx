import { Snowflake, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import About from '@/components/About';
import PageWrapper from '@/components/PageWrapper';
import { ABOUT_IMAGE, COMPANY, BUILDING_IMAGES } from '@/data';

// Replace with the actual founder image path or URL
const FOUNDER_IMAGE = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

const STATS = [
  { value: '8+', label: 'Past Clients' },
  { value: '16', label: 'Services Offered' },
  { value: '10', label: 'Partner Suppliers' },
  { value: '3', label: 'Products Available' },
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <PageHero
        title="About Us"
        highlight="Cooling Excellence Since Day One"
        subtitle="Learn about KYMS Refrigeration and Air Conditioning — your trusted partner in HVAC, refrigeration, and green energy technology."
        icon={Snowflake}
        bgImage={ABOUT_IMAGE}
      />
      <About />

      {/* Founder Section */}
      <section className="relative py-20 sm:py-24 bg-white overflow-hidden">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Founder Image */}
            <div className="reveal relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={FOUNDER_IMAGE}
                  alt="Kelvin Kimemia Maguta - Founder"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
              </div>
              {/* Decorative blurs */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-navy/5 rounded-full blur-xl -z-10" />
            </div>

            {/* Founder Text */}
            <div className="reveal" style={{ transitionDelay: '100ms' }}>
              <div className="inline-flex items-center gap-2 bg-brand-cyan/10 rounded-full px-4 py-1.5 mb-4">
                <Snowflake className="w-4 h-4 text-brand-cyan-dark" />
                <span className="text-brand-cyan-dark text-sm font-semibold tracking-wide">
                  Meet Our Founder
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
                Kelvin Kimemia Maguta
              </h2>
              <p className="text-brand-navy/70 text-lg leading-relaxed mb-6">
                With years of experience in the refrigeration and air conditioning industry,
                Kelvin founded KYMS Refrigeration and Air Conditioning with a vision to deliver
                superior quality services. His commitment to excellence and customer satisfaction
                drives every project we undertake.
              </p>
              <p className="text-brand-navy/60 leading-relaxed">
                Under his leadership, we continue to provide reliable, sustainable, and
                innovative cooling solutions for homes, businesses, and industries across the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="relative py-16 bg-gradient-to-r from-brand-navy to-brand-navy-light overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-cyan/10 rounded-full blur-3xl" />
        <div className="relative section-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className="reveal text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl sm:text-5xl font-bold text-brand-cyan mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buildings Gallery */}
      <section className="relative py-20 sm:py-24 bg-white overflow-hidden">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 reveal">
            <div className="inline-flex items-center gap-2 bg-brand-cyan/10 rounded-full px-4 py-1.5 mb-4">
              <Snowflake className="w-4 h-4 text-brand-cyan-dark" />
              <span className="text-brand-cyan-dark text-sm font-semibold tracking-wide">
                Where We Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
              Serving All Types of Buildings
            </h2>
            <p className="text-brand-navy/60 text-lg">
              From office towers to hospitals and retail spaces — we deliver cooling
              solutions for every type of facility.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BUILDING_IMAGES.map((src, index) => (
              <div
                key={index}
                className="reveal gallery-item relative rounded-2xl overflow-hidden shadow-md group cursor-pointer h-56"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <img
                  src={src}
                  alt="Building we serve"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
                <div className="absolute inset-0 bg-brand-cyan/10 group-hover:bg-brand-cyan/5 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="section-padding max-w-5xl mx-auto">
          <div className="text-center mb-10 reveal">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-3">
              Our Core Values
            </h2>
            <p className="text-brand-navy/60">
              The principles that guide every project we undertake.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Reliability', desc: 'Dependable service you can count on, every time.' },
              { title: 'Quality', desc: 'Genuine parts and workmanship that lasts.' },
              { title: 'Sustainability', desc: 'Green energy solutions and CFC phase-out programs.' },
              { title: 'Customer First', desc: 'Your cooling comfort is our priority.' },
            ].map((value, index) => (
              <div
                key={value.title}
                className="reveal bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-all text-center"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-cyan/10 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-cyan-dark" />
                </div>
                <h4 className="font-display font-bold text-brand-navy text-sm mb-1">
                  {value.title}
                </h4>
                <p className="text-xs text-brand-navy/50 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="section-padding max-w-4xl mx-auto text-center reveal">
          <div className="relative bg-gradient-to-r from-brand-navy to-brand-navy-light rounded-2xl p-10 sm:p-12 overflow-hidden shadow-navy">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {COMPANY.guarantee}
              </h2>
              <p className="text-white/70 mb-6">
                {COMPANY.subGuarantee}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-cyan-dark text-white font-semibold px-7 py-4 rounded-xl shadow-brand hover:shadow-lg hover:scale-[1.03] transition-all"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
