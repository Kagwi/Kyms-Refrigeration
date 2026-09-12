import { ShoppingCart, MessageCircle, Package } from 'lucide-react';
import { PRODUCTS, whatsappLink, COMPANY } from '@/data';

export default function Products() {
  return (
    <section className="relative py-20 sm:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-brand-cyan/10 rounded-full px-4 py-1.5 mb-4">
            <Package className="w-4 h-4 text-brand-cyan-dark" />
            <span className="text-brand-cyan-dark text-sm font-semibold tracking-wide">
              Shop With Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
            Products Available for Purchase
          </h2>
          <p className="text-brand-navy/60 text-lg">
            Quality HVAC and refrigeration supplies. Click to order directly via WhatsApp —
            we'll respond with pricing and availability.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <div
              key={product.name}
              className="reveal group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-brand-navy/10 to-transparent" />
                {/* Blue tint overlay */}
                <div className="absolute inset-0 bg-brand-cyan/10 group-hover:bg-brand-cyan/5 transition-colors duration-500" />

                {/* Floating product badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md">
                  <span className="text-xs font-semibold text-brand-cyan-dark">In Stock</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-2">{product.name}</h3>
                <p className="text-sm text-brand-navy/60 leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* WhatsApp Buy Button */}
                <a
                  href={whatsappLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-cyan-dark text-white font-semibold px-5 py-3.5 rounded-xl shadow-brand hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group/btn"
                >
                  <MessageCircle className="w-5 h-5" />
                  Buy via WhatsApp
                  <ShoppingCart className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 -translate-x-2 transition-all duration-300" />
                </a>
              </div>

              {/* Bottom accent line */}
              <div className="h-1 bg-gradient-to-r from-brand-cyan to-brand-cyan-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* Guarantee banner */}
        <div className="mt-16 reveal">
          <div className="relative bg-gradient-to-r from-brand-navy to-brand-navy-light rounded-2xl p-8 sm:p-12 overflow-hidden shadow-navy">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="relative text-center max-w-2xl mx-auto">
              <div className="inline-block bg-brand-cyan/20 rounded-full p-3 mb-4">
                <ShoppingCart className="w-6 h-6 text-brand-cyan-light" />
              </div>
              <p className="text-2xl sm:text-3xl font-display font-bold text-white leading-snug mb-3">
                "{COMPANY.guarantee}"
              </p>
              <p className="text-brand-cyan-light text-base sm:text-lg">
                {COMPANY.subGuarantee}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
