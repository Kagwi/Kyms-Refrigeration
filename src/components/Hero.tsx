import { Snowflake, Wind, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountUp from '@/components/CountUp';
import { COMPANY, HERO_IMAGE, whatsappLink } from '@/data';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Modern wall-mounted air conditioner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      </div>

      {/* Decorative floating snowflake */}
      <div className="absolute top-32 right-[8%] hidden lg:block animate-float z-10">
        <Snowflake className="w-24 h-24 text-brand-cyan/30" strokeWidth={1} />
      </div>
      <div className="absolute bottom-32 left-[5%] hidden lg:block animate-float z-10" style={{ animationDelay: '1.5s' }}>
        <Wind className="w-16 h-16 text-brand-cyan-light/20" strokeWidth={1} />
      </div>

      {/* Content */}
      <div className="relative z-20 section-padding max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-cyan/15 border border-brand-cyan/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Snowflake className="w-4 h-4 text-brand-cyan" />
            <span className="text-brand-cyan-light text-sm font-medium tracking-wide">
              HVAC & Refrigeration Experts
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up">
            Cool Comfort,
            <br />
            <span className="text-gradient-cyan">Engineered for You</span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            {COMPANY.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a
              href={whatsappLink('your services')}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-cyan-dark text-white font-semibold px-7 py-4 rounded-xl shadow-brand hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold px-7 py-4 rounded-xl hover:bg-white/20 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call {COMPANY.phone}
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/15 animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
            {[
              { value: 50, label: 'Past Clients', suffix: '+' },
              { value: 16, label: 'Services Offered', suffix: '' },
              { value: 10, label: 'Partner Suppliers', suffix: '' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-brand-cyan">
                  <CountUp end={stat.value} duration={1500} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        to="/services"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-1 group"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase group-hover:text-brand-cyan transition-colors">
          Explore
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-brand-cyan to-transparent animate-pulse-slow" />
      </Link>
    </section>
  );
}
