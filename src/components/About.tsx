import { Snowflake, CheckCircle2, Leaf, Award, Users, Clock } from 'lucide-react';
import { COMPANY, ABOUT_IMAGE } from '@/data';

const FEATURES = [
  {
    icon: Award,
    title: 'Expert Installation',
    description: 'Professional supply and installation of all air conditioning unit types.',
  },
  {
    icon: Leaf,
    title: 'Green Energy Technology',
    description: 'CFC refrigeration phase-out programs and eco-friendly cooling solutions.',
  },
  {
    icon: Users,
    title: 'Skilled Technicians',
    description: 'Experienced team delivering reliable service, testing and commissioning.',
  },
  {
    icon: Clock,
    title: 'Responsive Support',
    description: 'Quick turnaround on repairs, maintenance and emergency call-outs.',
  },
];

export default function About() {
  return (
    <section className="relative py-20 sm:py-24 bg-white overflow-hidden">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative reveal">
            <div className="relative rounded-2xl overflow-hidden shadow-navy">
              <img
                src={ABOUT_IMAGE}
                alt="HVAC technician performing maintenance"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-cyan-dark flex items-center justify-center shadow-brand">
                  <Snowflake className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-brand-navy leading-none">All Sizes</div>
                  <div className="text-xs text-brand-navy/50 mt-1">Copper pipes & elbows</div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-4 border-brand-cyan/20 rounded-2xl -z-10" />
          </div>

          {/* Content side */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 bg-brand-cyan/10 rounded-full px-4 py-1.5 mb-4">
              <Snowflake className="w-4 h-4 text-brand-cyan-dark" />
              <span className="text-brand-cyan-dark text-sm font-semibold tracking-wide">
                About KYMS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mb-6 leading-tight">
              Your Trusted Partner in
              <span className="text-gradient-cyan"> Cooling Excellence</span>
            </h2>

            <p className="text-brand-navy/70 text-lg leading-relaxed mb-8">
              {COMPANY.tagline}
            </p>

            {/* Guarantee quote */}
            <div className="bg-gradient-to-r from-brand-cyan/10 to-brand-cyan/5 border-l-4 border-brand-cyan rounded-r-xl p-5 mb-8">
              <p className="text-brand-navy font-display font-semibold text-lg italic">
                "{COMPANY.guarantee}"
              </p>
            </div>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-3 hover:scale-[1.02] transition-transform duration-200">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-cyan/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-cyan-dark" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy text-sm mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-brand-navy/55 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Checkmark list */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8">
              {['Licensed', 'Experienced', 'Reliable', 'Affordable'].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan-dark" />
                  <span className="text-sm font-medium text-brand-navy/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
