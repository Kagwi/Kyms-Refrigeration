import { Link } from 'react-router-dom';
import {
  Snowflake,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CreditCard,
  Building2,
  Wallet,
  ExternalLink,
} from 'lucide-react';
import { COMPANY, NAV_LINKS, PAYMENT, whatsappLink } from '@/data';

export default function Footer() {
  return (
    <footer className="relative bg-brand-navy text-white overflow-hidden">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent" />

      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="relative section-padding max-w-7xl mx-auto py-16">
        <div className="grid lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-cyan-dark flex items-center justify-center shadow-brand">
                <Snowflake className="w-6 h-6 text-white" strokeWidth={2.2} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-lg">KYMS</span>
                <span className="text-[10px] text-brand-cyan tracking-wide">
                  Refrigeration & Aircon
                </span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              {COMPANY.tagline}
            </p>
            <a
              href={whatsappLink('your services')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-cyan/15 hover:bg-brand-cyan/25 border border-brand-cyan/30 text-brand-cyan-light font-medium text-sm px-4 py-2.5 rounded-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Message us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-brand-cyan-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-cyan mt-0.5 flex-shrink-0" />
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                  className="text-sm text-white/60 hover:text-brand-cyan-light transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-cyan mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-sm text-white/60 hover:text-brand-cyan-light transition-colors break-all"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-cyan mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/60">{COMPANY.location}</span>
              </li>
              <li>
                <a
                  href={COMPANY.googleBusinessLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-brand-cyan-light hover:text-brand-cyan transition-colors mt-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View on Google Business Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Payment Details */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              Payment Details
            </h4>
            <div className="space-y-4">
              {/* Bank */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-4 h-4 text-brand-cyan" />
                  <span className="text-xs font-semibold text-white/80 uppercase tracking-wide">
                    Bank
                  </span>
                </div>
                <p className="text-sm text-white/70">
                  {PAYMENT.bank.name}
                </p>
                <p className="text-xs text-white/50 mt-0.5">
                  A/C: {PAYMENT.bank.accountNo}
                </p>
              </div>

              {/* M-Pesa */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Wallet className="w-4 h-4 text-brand-cyan" />
                  <span className="text-xs font-semibold text-white/80 uppercase tracking-wide">
                    M-Pesa
                  </span>
                </div>
                <p className="text-sm text-white/70">
                  Paybill: {PAYMENT.mpesa.paybill}
                </p>
                <p className="text-xs text-white/50 mt-0.5">
                  A/C: {PAYMENT.mpesa.accountNo}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-white/40">
            <CreditCard className="w-3.5 h-3.5" />
            <span>Equity Bank &amp; M-Pesa accepted</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
