import { Link } from 'react-router-dom';
import { ChevronRight, Snowflake } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface PageHeroProps {
  title: string;
  highlight?: string;
  subtitle: string;
  icon: LucideIcon;
  bgImage: string;
}

export default function PageHero({ title, highlight, subtitle, icon: Icon, bgImage }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      <div className="relative z-10 section-padding max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-white/50 mb-6 animate-fade-in">
          <Link to="/" className="hover:text-brand-cyan-light transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-brand-cyan-light">{title}</span>
        </nav>

        <div className="inline-flex items-center gap-2 bg-brand-cyan/15 border border-brand-cyan/30 rounded-full px-4 py-2 mb-5 animate-fade-in">
          <Icon className="w-4 h-4 text-brand-cyan" />
          <span className="text-brand-cyan-light text-sm font-medium tracking-wide">
            {title}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 animate-fade-in-up">
          {title}
          {highlight && (
            <>
              <br />
              <span className="text-gradient-cyan">{highlight}</span>
            </>
          )}
        </h1>

        <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          {subtitle}
        </p>
      </div>

      {/* Decorative snowflake */}
      <div className="absolute top-20 right-[5%] hidden lg:block animate-float z-10">
        <Snowflake className="w-20 h-20 text-brand-cyan/20" strokeWidth={1} />
      </div>
    </section>
  );
}
