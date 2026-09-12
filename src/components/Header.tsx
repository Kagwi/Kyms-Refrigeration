import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Snowflake } from 'lucide-react';
import { COMPANY, NAV_LINKS, whatsappLink } from '@/data';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-white/90 backdrop-blur-sm py-3'
      }`}
    >
      <div className="section-padding max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2.5 group">
          <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-cyan-dark flex items-center justify-center shadow-brand transition-transform group-hover:scale-105">
            <Snowflake className="w-6 h-6 text-white" strokeWidth={2.2} />
            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-brand-navy rounded-full border-2 border-white flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" />
            </span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-brand-navy text-lg tracking-tight">
              KYMS
            </span>
            <span className="text-[10px] text-brand-cyan-dark font-medium tracking-wide">
              Refrigeration & Aircon
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive(link.path)
                  ? 'text-brand-cyan-dark bg-brand-cyan/10'
                  : 'text-brand-navy/80 hover:text-brand-cyan-dark hover:bg-brand-cyan/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Phone */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:text-brand-cyan-dark transition-colors"
          >
            <Phone className="w-4 h-4" />
            {COMPANY.phone}
          </a>
          <a
            href={whatsappLink('your services')}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-brand-cyan to-brand-cyan-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-brand hover:shadow-lg hover:scale-[1.03] transition-all duration-200"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-lg text-brand-navy hover:bg-brand-cyan/10 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white border-t border-brand-cyan/10 px-5 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`px-4 py-3 text-base font-medium rounded-lg transition-all ${
                isActive(link.path)
                  ? 'text-brand-cyan-dark bg-brand-cyan/10'
                  : 'text-brand-navy/80 hover:text-brand-cyan-dark hover:bg-brand-cyan/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappLink('your services')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-2 bg-gradient-to-r from-brand-cyan to-brand-cyan-dark text-white text-center font-semibold px-5 py-3 rounded-lg shadow-brand"
          >
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
