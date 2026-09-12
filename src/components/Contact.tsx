import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  Building2,
  ExternalLink,
} from 'lucide-react';
import { COMPANY, whatsappLink } from '@/data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello, my name is ${formData.name}.%0A%0A${formData.message}%0A%0AContact: ${formData.phone}%0AEmail: ${formData.email}`;
    const link = `https://wa.me/${COMPANY.phoneIntl}?text=${text}`;
    window.open(link, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative py-20 sm:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-brand-cyan/10 rounded-full px-4 py-1.5 mb-4">
            <MessageCircle className="w-4 h-4 text-brand-cyan-dark" />
            <span className="text-brand-cyan-dark text-sm font-semibold tracking-wide">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
            Contact Us Today
          </h2>
          <p className="text-brand-navy/60 text-lg">
            Ready for reliable cooling solutions? Reach out for a free quote or any inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info + Map */}
          <div className="reveal space-y-6">
            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                className="group bg-white rounded-xl p-5 shadow-md hover:shadow-xl border border-gray-100 transition-all hover:scale-[1.02]"
              >
                <div className="w-11 h-11 rounded-lg bg-brand-cyan/10 group-hover:bg-brand-cyan/20 flex items-center justify-center mb-3 transition-colors">
                  <Phone className="w-5 h-5 text-brand-cyan-dark" />
                </div>
                <h4 className="font-semibold text-brand-navy text-sm mb-1">Phone</h4>
                <p className="text-sm text-brand-navy/60">{COMPANY.phone}</p>
              </a>

              <a
                href={`mailto:${COMPANY.email}`}
                className="group bg-white rounded-xl p-5 shadow-md hover:shadow-xl border border-gray-100 transition-all hover:scale-[1.02]"
              >
                <div className="w-11 h-11 rounded-lg bg-brand-cyan/10 group-hover:bg-brand-cyan/20 flex items-center justify-center mb-3 transition-colors">
                  <Mail className="w-5 h-5 text-brand-cyan-dark" />
                </div>
                <h4 className="font-semibold text-brand-navy text-sm mb-1">Email</h4>
                <p className="text-sm text-brand-navy/60 break-all">{COMPANY.email}</p>
              </a>

              <div className="group bg-white rounded-xl p-5 shadow-md border border-gray-100 transition-all sm:col-span-2">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-lg bg-brand-cyan/10 group-hover:bg-brand-cyan/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <MapPin className="w-5 h-5 text-brand-cyan-dark" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-brand-navy text-sm mb-1">Location</h4>
                    <p className="text-sm text-brand-navy/60">{COMPANY.location}</p>
                    <a
                      href={COMPANY.googleBusinessLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-brand-cyan-dark font-medium mt-2 hover:gap-2.5 transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      View on Google Business Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp button */}
            <a
              href={whatsappLink('your services')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-brand-cyan to-brand-cyan-dark text-white font-semibold px-6 py-4 rounded-xl shadow-brand hover:shadow-lg hover:scale-[1.01] transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Chat with us on WhatsApp
            </a>

            {/* Embedded Map */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 h-64">
              <iframe
                title="KYMS Location - Downtown Towers, Duruma Road"
                src="https://www.google.com/maps?q=Duruma+Road+Nairobi+Kenya&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-7 sm:p-8 shadow-xl border border-gray-100"
            >
              <h3 className="text-xl font-bold text-brand-navy mb-6 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-brand-cyan-dark" />
                Send us a message
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-brand-navy/70 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all text-sm"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-navy/70 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-navy/70 mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+254 ..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-navy/70 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your cooling needs..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-navy to-brand-navy-light text-white font-semibold px-6 py-4 rounded-xl shadow-navy hover:shadow-lg hover:scale-[1.01] transition-all"
                >
                  {sent ? (
                    <>
                      <Clock className="w-5 h-5" />
                      Opening WhatsApp...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send via WhatsApp
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-brand-navy/40">
                  Your message will be sent directly to our WhatsApp for a fast response.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
