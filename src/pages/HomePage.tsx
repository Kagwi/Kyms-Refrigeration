import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Snowflake,
  Wind,
  Package,
  Wrench,
  MessageCircle,
  Star,
  Quote,
  Building2,
} from 'lucide-react';
import Hero from '@/components/Hero';
import PageWrapper from '@/components/PageWrapper';
import PartnerCarousel from '@/components/PartnerCarousel';
import {
  COMPANY,
  HVAC_SERVICES,
  REFRIGERATION_SERVICES,
  PRODUCTS,
  SERVICE_IMAGE,
  COLD_ROOM_IMAGE,
  TESTIMONIALS,
  GALLERY_IMAGES,
  whatsappLink,
  whatsappServiceLink,
} from '@/data';

export default function HomePage() {
  return (
    <PageWrapper>
      <Hero />

      {/* Services Preview */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="relative section-padding max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 reveal">
            <div className="inline-flex items-center gap-2 bg-brand-cyan/10 rounded-full px-4 py-1.5 mb-4">
              <Snowflake className="w-4 h-4 text-brand-cyan-dark" />
              <span className="text-brand-cyan-dark text-sm font-semibold tracking-wide">What We Do</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
              Our Core Services
            </h2>
            <p className="text-brand-navy/60 text-lg">
              Comprehensive HVAC and refrigeration solutions for residential, commercial,
              and industrial needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* HVAC Card */}
            <div className="reveal group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={SERVICE_IMAGE}
                  alt="HVAC services"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/90 flex items-center justify-center backdrop-blur-sm">
                    <Wind className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-display font-bold text-white text-lg">HVAC & Aircon</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {HVAC_SERVICES.slice(0, 6).map((s) => (
                    <span key={s.label} className="text-xs font-medium bg-gray-50 text-brand-navy/70 px-3 py-1.5 rounded-lg">
                      {s.label}
                    </span>
                  ))}
                  <span className="text-xs font-medium bg-gray-50 text-brand-navy/50 px-3 py-1.5 rounded-lg">
                    +{HVAC_SERVICES.length - 6} more
                  </span>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-brand-cyan-dark font-semibold hover:gap-3 transition-all"
                >
                  View all services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="h-1 bg-gradient-to-r from-brand-cyan to-brand-cyan-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>

            {/* Refrigeration Card */}
            <div className="reveal group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={COLD_ROOM_IMAGE}
                  alt="Refrigeration services"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/90 flex items-center justify-center backdrop-blur-sm">
                    <Snowflake className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-display font-bold text-white text-lg">Refrigeration & Cold Room</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {REFRIGERATION_SERVICES.slice(0, 4).map((s) => (
                    <span key={s.label} className="text-xs font-medium bg-gray-50 text-brand-navy/70 px-3 py-1.5 rounded-lg">
                      {s.label}
                    </span>
                  ))}
                  <span className="text-xs font-medium bg-gray-50 text-brand-navy/50 px-3 py-1.5 rounded-lg">
                    +{REFRIGERATION_SERVICES.length - 4} more
                  </span>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-brand-cyan-dark font-semibold hover:gap-3 transition-all"
                >
                  View all services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="h-1 bg-gradient-to-r from-brand-cyan to-brand-cyan-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          </div>

          <div className="text-center reveal">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-cyan-dark text-white font-semibold px-7 py-3.5 rounded-xl shadow-brand hover:shadow-lg hover:scale-105 transition-all"
            >
              Explore All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 reveal">
            <div className="inline-flex items-center gap-2 bg-brand-cyan/10 rounded-full px-4 py-1.5 mb-4">
              <Package className="w-4 h-4 text-brand-cyan-dark" />
              <span className="text-brand-cyan-dark text-sm font-semibold tracking-wide">Products</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
              Shop Our Products
            </h2>
            <p className="text-brand-navy/60 text-lg">
              Quality HVAC supplies. Order directly via WhatsApp with pre-filled messages.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {PRODUCTS.map((product, index) => (
              <div
                key={product.name}
                className="reveal group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-brand-navy mb-1">{product.name}</h3>
                  <p className="text-xs text-brand-navy/50 mb-4 line-clamp-2">{product.description}</p>
                  <a
                    href={whatsappLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan-dark hover:gap-2.5 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Buy via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center reveal">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-white text-brand-navy font-semibold px-7 py-3.5 rounded-xl shadow-md border border-gray-200 hover:border-brand-cyan hover:text-brand-cyan-dark hover:shadow-lg transition-all"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Project Gallery Preview */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 reveal">
            <div className="inline-flex items-center gap-2 bg-brand-cyan/10 rounded-full px-4 py-1.5 mb-4">
              <Building2 className="w-4 h-4 text-brand-cyan-dark" />
              <span className="text-brand-cyan-dark text-sm font-semibold tracking-wide">Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
              Our Work in Action
            </h2>
            <p className="text-brand-navy/60 text-lg">
              A glimpse of HVAC and refrigeration projects we've delivered.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {GALLERY_IMAGES.slice(0, 4).map((img, index) => (
              <div
                key={index}
                className="reveal gallery-item relative rounded-2xl overflow-hidden shadow-md group cursor-pointer"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="h-44 sm:h-56 overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent" />
                <div className="absolute inset-0 bg-brand-cyan/10 group-hover:bg-brand-cyan/5 transition-colors duration-500" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-white font-display font-semibold text-xs sm:text-sm drop-shadow-lg">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center reveal">
            <Link
              to="/clients"
              className="inline-flex items-center gap-2 bg-white text-brand-navy font-semibold px-7 py-3.5 rounded-xl shadow-md border border-gray-200 hover:border-brand-cyan hover:text-brand-cyan-dark hover:shadow-lg transition-all"
            >
              See All Clients & Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
              Don't just take our word for it — hear from the businesses we've served.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="reveal group relative bg-white rounded-2xl p-7 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-brand-cyan/5 group-hover:bg-brand-cyan/10 flex items-center justify-center transition-colors">
                  <Quote className="w-5 h-5 text-brand-cyan/40" />
                </div>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-cyan text-brand-cyan" />
                  ))}
                </div>
                <p className="text-sm text-brand-navy/70 leading-relaxed mb-6 line-clamp-4">
                  "{testimonial.message}"
                </p>
                <div className="flex flex-col pt-5 border-t border-gray-100">
                  <h4 className="font-display font-bold text-brand-navy text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-brand-navy/50">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center reveal">
            <Link
              to="/clients"
              className="inline-flex items-center gap-2 bg-white text-brand-navy font-semibold px-7 py-3.5 rounded-xl shadow-md border border-gray-200 hover:border-brand-cyan hover:text-brand-cyan-dark hover:shadow-lg transition-all"
            >
              Read All Testimonials
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Suppliers Carousel */}
      <section className="relative py-16 bg-white overflow-hidden">
        <div className="section-padding max-w-7xl mx-auto mb-8">
          <div className="text-center max-w-3xl mx-auto reveal">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-2">
              Equipment & Spare Parts Partners
            </h2>
            <p className="text-brand-navy/60">
              We source genuine refrigeration equipment from trusted global manufacturers.
            </p>
          </div>
        </div>
        <div className="reveal">
          <PartnerCarousel />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-r from-brand-navy to-brand-navy-light rounded-3xl p-10 sm:p-16 overflow-hidden shadow-navy reveal">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl" />
            <div className="relative max-w-2xl">
              <div className="inline-block bg-brand-cyan/20 rounded-full p-3 mb-5">
                <Wrench className="w-6 h-6 text-brand-cyan-light" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Ready for Efficient Cooling?
              </h2>
              <p className="text-white/70 text-lg mb-8">
                {COMPANY.guarantee} Contact us today for a free quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappServiceLink('HVAC & Aircon')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-cyan-dark text-white font-semibold px-7 py-4 rounded-xl shadow-brand hover:shadow-lg hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Get a Free Quote
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold px-7 py-4 rounded-xl hover:bg-white/20 transition-all"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
