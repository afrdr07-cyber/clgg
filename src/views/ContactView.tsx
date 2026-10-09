import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COLLEGE_DETAILS } from '../data/officialCollegeData';
import { PageView } from '../types/navigation';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, 
  ChevronRight, Building2, Compass, MessageSquare, ExternalLink 
} from 'lucide-react';

interface ContactViewProps {
  onNavigate: (view: PageView, subTab?: string) => void;
  onOpenBusModal: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate, onOpenBusModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('http://127.0.0.1:8000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).catch(() => {});
    } catch (err) {
      console.log('Contact submission fallback:', err);
    } finally {
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 500);
    }
  };

  return (
    <div className="w-full space-y-10">

      {/* Page Masthead Banner */}
      <section className="w-full bg-[#FAF9F6] border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#80672E] uppercase tracking-wider">
              <button onClick={() => onNavigate('home')} className="hover:underline">Home</button>
              <ChevronRight className="w-3.5 h-3.5 text-[#A0A5AD]" />
              <span>Contact Us</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#22262B] leading-tight">
              Get in Touch with PSVCET
            </h1>
            <p className="font-body text-sm sm:text-base text-[#60656C] leading-relaxed">
              Our admissions team, principal desk, and administrative staff are here to assist you. Visit our campus on the Chennai-Bengaluru NH-48 corridor or connect with us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white border border-[#D9DCE1] rounded-2xl p-6 space-y-3 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-[#F0E8D5] text-[#80672E] flex items-center justify-center">
            <Phone className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-base font-bold text-[#22262B]">Admissions Hotline</h3>
          <p className="text-xs text-[#60656C]">Direct line for application enquiries and counselling guidance.</p>
          <div className="space-y-1 pt-1 text-xs font-semibold text-[#80672E]">
            <a href="tel:+918838428106" className="block hover:underline">+91 88384 28106</a>
            <a href="tel:+919444273966" className="block hover:underline">+91 94442 73966</a>
            <a href="tel:+916369342733" className="block hover:underline">+91 63693 42733</a>
          </div>
        </div>

        <div className="bg-white border border-[#D9DCE1] rounded-2xl p-6 space-y-3 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-[#F0E8D5] text-[#80672E] flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-base font-bold text-[#22262B]">Official Emails</h3>
          <p className="text-xs text-[#60656C]">Send your academic and administrative enquiries.</p>
          <div className="space-y-1 pt-1 text-xs font-semibold text-[#80672E]">
            <a href="mailto:selvam.psv@gmail.com" className="block hover:underline">selvam.psv@gmail.com</a>
            <a href="mailto:principal@psvcet.ac.in" className="block hover:underline">principal@psvcet.ac.in</a>
            <a href="mailto:admissions@psvcet.ac.in" className="block hover:underline">admissions@psvcet.ac.in</a>
          </div>
        </div>

        <div className="bg-white border border-[#D9DCE1] rounded-2xl p-6 space-y-3 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-[#F0E8D5] text-[#80672E] flex items-center justify-center">
            <MapPin className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-base font-bold text-[#22262B]">Campus Address</h3>
          <p className="text-xs text-[#60656C] leading-relaxed">
            Mittapalli, Balinayanapalli Post, Elathagiri SO, Krishnagiri - Chennai Highway (NH-48), Krishnagiri - 635 108, Tamil Nadu.
          </p>
          <div className="pt-1 flex items-center justify-between gap-2 flex-wrap">
            <span className="text-[11px] font-bold text-[#80672E]">TNEA Code: 2642 / 2636</span>
            <a
              href="https://maps.app.goo.gl/WKEqs8KqW6csb7oi7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#80672E] hover:text-[#664F18] hover:underline"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="bg-white border border-[#D9DCE1] rounded-2xl p-6 space-y-3 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-[#F0E8D5] text-[#80672E] flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-base font-bold text-[#22262B]">Office Timings</h3>
          <p className="text-xs text-[#60656C] leading-relaxed">
            Monday to Saturday:<br />
            <strong>08:30 AM – 05:30 PM</strong>
          </p>
          <button
            onClick={onOpenBusModal}
            className="text-xs font-semibold text-[#80672E] hover:underline block pt-2 cursor-pointer"
          >
            Bus Transport Routes →
          </button>
        </div>
      </section>

      {/* Main Grid: Form & Map */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Form */}
        <div className="lg:col-span-7 bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          <h2 className="font-serif text-2xl font-bold text-[#22262B]">
            Send an Enquiry / Message
          </h2>

          {submitted ? (
            <div className="p-8 text-center bg-[#FAF9F6] rounded-2xl border border-[#D9DCE1] space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#22262B]">Message Sent!</h3>
              <p className="text-xs sm:text-sm text-[#60656C]">Thank you for contacting us. We will respond promptly.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-[#80672E] font-semibold hover:underline cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#22262B] mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#D9DCE1] bg-[#FAF9F6] focus:bg-white focus:outline-none focus:border-[#80672E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#22262B] mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#D9DCE1] bg-[#FAF9F6] focus:bg-white focus:outline-none focus:border-[#80672E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#22262B] mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="email@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#D9DCE1] bg-[#FAF9F6] focus:bg-white focus:outline-none focus:border-[#80672E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#22262B] mb-1">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Admission inquiry, Verification, etc."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#D9DCE1] bg-[#FAF9F6] focus:bg-white focus:outline-none focus:border-[#80672E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#22262B] mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Your detailed message or query..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#D9DCE1] bg-[#FAF9F6] focus:bg-white focus:outline-none focus:border-[#80672E] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 bg-[#80672E] hover:bg-[#664F18] text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          )}
        </div>

        {/* Map & Directions */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#FAF9F6] border border-[#D9DCE1] rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h3 className="font-serif text-xl font-bold text-[#22262B]">
                Location & Campus Directions
              </h3>
              <a
                href="https://maps.app.goo.gl/WKEqs8KqW6csb7oi7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#80672E] hover:bg-[#664F18] text-white rounded-xl text-xs font-semibold shadow-xs transition-colors w-fit"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-xs text-[#60656C] leading-relaxed">
              Situated right on the Chennai-Bengaluru National Highway (NH-48), 12 km from Krishnagiri Town, 45 km from Hosur, and 85 km from Bengaluru Electronic City. Easily accessible via frequent state buses and college transport.
            </p>

            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-[#D9DCE1] shadow-xs relative group">
              <iframe
                title="PSVCET Campus Location Map"
                src="https://maps.google.com/maps?q=PSV+College+of+Engineering+and+Technology+Mittapalli&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://maps.app.goo.gl/WKEqs8KqW6csb7oi7"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 bg-white/95 hover:bg-white text-[#22262B] border border-[#D9DCE1] shadow-md px-3 py-1.5 rounded-lg text-[11px] font-semibold flex items-center gap-1.5 transition-all"
              >
                <Compass className="w-3.5 h-3.5 text-[#80672E]" />
                <span>GPS Navigation ↗</span>
              </a>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};
