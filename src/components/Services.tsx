import { Snowflake, Wind, Wrench, ArrowRight } from 'lucide-react';
import {
  HVAC_SERVICES,
  REFRIGERATION_SERVICES,
  SERVICE_IMAGE,
  COLD_ROOM_IMAGE,
  whatsappServiceLink,
} from '@/data';

export default function Services() {
  return (
    <section className="relative py-20 sm:py-24 bg-white overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent" />

      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative section-padding max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-brand-cyan/10 rounded-full px-4 py-1.5 mb-4">
            <Snowflake className="w-4 h-4 text-brand-cyan-dark" />
            <span className="text-brand-cyan-dark text-sm font-semibold tracking-wide">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
            Comprehensive HVAC & Refrigeration Solutions
          </h2>
          <p className="text-brand-navy/60 text-lg">
            From installation to maintenance, we deliver reliable cooling solutions
            tailored to your needs.
          </p>
        </div>

        {/* HVAC Services Block */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative reveal">
              <div className="relative rounded-2xl overflow-hidden shadow-navy group">
                <img
                  src={SERVICE_IMAGE}
                  alt="HVAC technician servicing air conditioner"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Wind className="w-5 h-5 text-brand-cyan-dark" />
                    <span className="font-display font-bold text-brand-navy">HVAC & Aircon Services</span>
                  </div>
                </div>
              </div>
              {/* Cyan accent bar */}
              <div className="absolute -top-3 -right-3 w-24 h-24 border-4 border-brand-cyan/30 rounded-2xl -z-10" />
            </div>

            {/* Service list */}
            <div className="reveal">
              <h3 className="text-2xl font-bold text-brand-navy mb-2">HVAC & Air Conditioning</h3>
              <p className="text-brand-navy/60 mb-6">
                We supply and install air conditioning units, offering a full range of
                services to keep your systems running efficiently.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {HVAC_SERVICES.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.label}
                      className="group flex items-center gap-3 bg-gray-50 hover:bg-brand-cyan/5 border border-gray-100 hover:border-brand-cyan/30 rounded-xl px-4 py-3 transition-all duration-200 hover:scale-[1.02]"
                    >
                      <div className="w-9 h-9 rounded-lg bg-brand-cyan/10 group-hover:bg-brand-cyan/20 flex items-center justify-center transition-colors">
                        <Icon className="w-4.5 h-4.5 text-brand-cyan-dark" />
                      </div>
                      <span className="text-sm font-medium text-brand-navy">{service.label}</span>
                    </div>
                  );
                })}
              </div>
              <a
                href={whatsappServiceLink('HVAC & Aircon')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-brand-cyan-dark font-semibold hover:gap-3 transition-all"
              >
                Inquire about HVAC services
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Refrigeration Services Block */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Service list (left this time) */}
          <div className="reveal order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-brand-navy mb-2">Refrigeration & Cold Room</h3>
            <p className="text-brand-navy/60 mb-6">
              Installation and sales of cold room equipment, assembly of cold storages,
              and specialized green energy technology solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {REFRIGERATION_SERVICES.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.label}
                    className="group flex items-center gap-3 bg-gray-50 hover:bg-brand-cyan/5 border border-gray-100 hover:border-brand-cyan/30 rounded-xl px-4 py-3 transition-all duration-200 hover:scale-[1.02]"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-cyan/10 group-hover:bg-brand-cyan/20 flex items-center justify-center transition-colors flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-cyan-dark" />
                    </div>
                    <span className="text-sm font-medium text-brand-navy">{service.label}</span>
                  </div>
                );
              })}
            </div>
            <a
              href={whatsappServiceLink('Refrigeration & Cold Room')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-brand-cyan-dark font-semibold hover:gap-3 transition-all"
            >
              Inquire about Refrigeration services
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Image */}
          <div className="relative reveal order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-navy group">
              <img
                src={COLD_ROOM_IMAGE}
                alt="Industrial cold storage facility"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Snowflake className="w-5 h-5 text-brand-cyan-dark" />
                  <span className="font-display font-bold text-brand-navy">Refrigeration & Cold Room</span>
                </div>
              </div>
            </div>
            {/* Cyan accent bar */}
            <div className="absolute -top-3 -left-3 w-24 h-24 border-4 border-brand-cyan/30 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
