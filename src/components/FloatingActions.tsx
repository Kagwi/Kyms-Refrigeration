import { MessageCircle, ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { COMPANY, whatsappLink } from '@/data';

export default function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      {/* Scroll to top */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-brand-navy text-white rounded-full shadow-navy hover:bg-brand-navy-light hover:scale-110 transition-all flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* WhatsApp float */}
      <a
        href={whatsappLink('your services')}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 bg-gradient-to-br from-brand-cyan to-brand-cyan-dark text-white rounded-full shadow-brand hover:scale-110 transition-all flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-brand-cyan animate-ping opacity-20" />
        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-brand-navy text-white text-sm font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with {COMPANY.shortName}
        </span>
      </a>
    </div>
  );
}
