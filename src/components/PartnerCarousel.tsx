import { PARTNERS } from '@/data';

export default function PartnerCarousel() {
  // Duplicate the list for seamless infinite scroll
  const partners = [...PARTNERS, ...PARTNERS];

  return (
    <div className="relative overflow-hidden py-4">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />

      <div className="carousel-track">
        {partners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex-shrink-0 w-52 sm:w-60 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 px-6 py-5 flex items-center gap-4 hover:scale-[1.03] hover:border-brand-cyan/30"
          >
            {/* Logo placeholder */}
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-brand-navy to-brand-navy-light flex items-center justify-center shadow-md">
              <span className="text-brand-cyan-light font-display font-bold text-lg tracking-tight">
                {partner.initials}
              </span>
            </div>
            <div className="min-w-0">
              <h4 className="font-display font-bold text-brand-navy text-sm leading-tight truncate">
                {partner.name}
              </h4>
              <p className="text-xs text-brand-navy/50 mt-0.5 truncate">
                {partner.tagline}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
