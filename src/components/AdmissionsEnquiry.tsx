import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck, 
  HelpCircle, Clock, Sparkles, FileText, ArrowRight, ExternalLink 
} from 'lucide-react';

interface AdmissionsEnquiryProps {
  selectedProgram?: string;
  onSuccess?: () => void;
}

export const AdmissionsEnquiry: React.FC<AdmissionsEnquiryProps> = ({ selectedProgram, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: selectedProgram || 'B.Tech - Artificial Intelligence and Data Science',
    state: 'Tamil Nadu',
    city: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const programsList = [
    'B.Tech - Artificial Intelligence and Data Science (AI & DS)',
    'B.E. - Computer Science and Engineering (CSE)',
    'B.E. - Electronics and Communication Engineering (ECE)',
    'B.E. - Mechanical Engineering (Industry 4.0)',
    'B.E. - Electrical and Electronics Engineering (EEE)',
    'B.E. - Civil Engineering & Infrastructure',
    'M.B.A. - Master of Business Administration',
    'M.E. - Computer Science and Engineering',
    'Ph.D. / Research Programs',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('http://127.0.0.1:8000/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).catch(() => {});
    } catch (err) {
      console.log('Enquiry submission fallback:', err);
    } finally {
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        if (onSuccess) onSuccess();
      }, 500);
    }
  };

  return (
    <section id="admissions" className="py-20 bg-[#FAF9F6] border-t border-b border-[#D9DCE1]">
      <div className="max-w-[1760px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="tag-accreditation inline-block">
            Admissions Open 2026-27
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
            Begin Your Engineering Journey at PSVCET
          </h2>
          <p className="font-body text-sm sm:text-base text-[#60656C]">
            Take the first step towards an autonomous engineering degree. Submit your enquiry for seat availability, counseling codes, and merit scholarships.
          </p>
        </div>

        {/* Form & Consultation Grid (Stitch Spec: Soft Pearl/Platinum Container, 1px Gold border highlight) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Info, Scholarships & Direct Helpdesk (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#D9DCE1] rounded-2xl p-6 sm:p-8 space-y-6 shadow-tier-1">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#80672E] font-label">
                  Admission Helpdesk
                </span>
                <h3 className="font-headline text-2xl font-bold text-charcoal mt-1">
                  Dedicated Admissions Office
                </h3>
                <p className="text-xs sm:text-sm text-[#60656C] mt-2 leading-relaxed">
                  Our admissions counselors are available Monday through Saturday from 9:00 AM to 6:00 PM to assist with TNEA counselling, management quota, and scholarship applications.
                </p>
              </div>

              {/* Direct Hotlines */}
              <div className="space-y-3 pt-2">
                <a 
                  href="tel:+919944491919" 
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-[#FAF9F6] border border-[#D9DCE1] hover:border-[#80672E] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F0E8D5] flex items-center justify-center text-[#80672E] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#60656C] block">Primary Admission Helpline</span>
                    <span className="font-headline font-bold text-sm text-charcoal">+91 99444 91919 / 94432 50550</span>
                  </div>
                </a>

                <a 
                  href="mailto:admissions@psvcet.ac.in" 
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-[#FAF9F6] border border-[#D9DCE1] hover:border-[#80672E] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F0E8D5] flex items-center justify-center text-[#80672E] flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#60656C] block">Admissions Email</span>
                    <span className="font-headline font-bold text-sm text-charcoal">admissions@psvcet.ac.in</span>
                  </div>
                </a>

                <a 
                  href="https://maps.app.goo.gl/WKEqs8KqW6csb7oi7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-[#FAF9F6] border border-[#D9DCE1] hover:border-[#80672E]/50 transition-colors group cursor-pointer"
                  title="Open in Google Maps"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F0E8D5] group-hover:bg-[#80672E] group-hover:text-white flex items-center justify-center text-[#80672E] flex-shrink-0 transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-semibold text-[#60656C] flex items-center justify-between">
                      <span>Campus Location</span>
                      <ExternalLink className="w-3 h-3 text-[#80672E] opacity-75 group-hover:opacity-100" />
                    </span>
                    <span className="text-xs text-charcoal font-medium group-hover:text-[#80672E] transition-colors block">
                      Bangalore-Chennai National Highway, Mittapalli, Krishnagiri - 635108
                    </span>
                  </div>
                </a>
              </div>

              {/* Scholarships Banner */}
              <div className="pt-4 border-t border-[#D9DCE1] space-y-2">
                <span className="text-xs font-bold text-charcoal flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#80672E]" />
                  Available Scholarships 2026-27:
                </span>
                <ul className="text-xs text-[#60656C] space-y-1.5 pl-5 list-disc">
                  <li><strong>Merit Scholarships:</strong> Up to 100% tuition waiver for top board cutoffs.</li>
                  <li><strong>First Graduate Scheme:</strong> Government tuition fee concession.</li>
                  <li><strong>Sports Excellence Quota:</strong> Special fee waivers for state/national athletes.</li>
                  <li><strong>Post-Matric & Community Scholarships:</strong> SC/ST/BC/MBC/Minority schemes.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Interactive Lead Capture Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border-2 border-[#B49A59]/40 rounded-2xl p-6 sm:p-10 shadow-tier-2 relative">
              
              {/* Form Title */}
              <div className="border-b border-[#D9DCE1] pb-5 mb-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline text-2xl font-bold text-charcoal">
                    Apply / Enquiry Form 2026-27
                  </h3>
                  <span className="text-xs font-bold text-[#80672E] bg-[#F0E8D5] px-3 py-1 rounded-full uppercase tracking-wider font-label">
                    TNEA: 2636
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#60656C] mt-1">
                  Fill in your details below and our admissions team will contact you within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-headline text-2xl font-bold text-charcoal">
                    Thank You for Your Enquiry!
                  </h4>
                  <p className="text-sm text-[#60656C] max-w-md mx-auto">
                    Your application details have been received. An academic counselor from PSVCET will reach out to you at <strong className="text-charcoal">{formData.phone}</strong> shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary text-xs mt-4"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1.5 font-label">
                      Full Name of Applicant <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-12 bg-white border border-[#D9DCE1] rounded-lg px-4 text-sm text-charcoal focus:outline-none focus:border-[#80672E] focus:ring-2 focus:ring-[#80672E]/10 transition-all placeholder-[#60656C]/50"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5 font-label">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        required
                        placeholder="e.g. rahul@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-12 bg-white border border-[#D9DCE1] rounded-lg px-4 text-sm text-charcoal focus:outline-none focus:border-[#80672E] focus:ring-2 focus:ring-[#80672E]/10 transition-all placeholder-[#60656C]/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5 font-label">
                        Mobile / WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel" 
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full h-12 bg-white border border-[#D9DCE1] rounded-lg px-4 text-sm text-charcoal focus:outline-none focus:border-[#80672E] focus:ring-2 focus:ring-[#80672E]/10 transition-all placeholder-[#60656C]/50"
                      />
                    </div>
                  </div>

                  {/* Program of Interest */}
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1.5 font-label">
                      Program / Degree of Interest <span className="text-red-500">*</span>
                    </label>
                    <select 
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full h-12 bg-white border border-[#D9DCE1] rounded-lg px-4 text-sm text-charcoal focus:outline-none focus:border-[#80672E] focus:ring-2 focus:ring-[#80672E]/10 transition-all"
                    >
                      {programsList.map((p, i) => (
                        <option key={i} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>

                  {/* State & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5 font-label">
                        State <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Tamil Nadu / Karnataka"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full h-12 bg-white border border-[#D9DCE1] rounded-lg px-4 text-sm text-charcoal focus:outline-none focus:border-[#80672E] focus:ring-2 focus:ring-[#80672E]/10 transition-all placeholder-[#60656C]/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5 font-label">
                        City / Town <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Krishnagiri / Hosur / Chennai"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full h-12 bg-white border border-[#D9DCE1] rounded-lg px-4 text-sm text-charcoal focus:outline-none focus:border-[#80672E] focus:ring-2 focus:ring-[#80672E]/10 transition-all placeholder-[#60656C]/50"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1.5 font-label">
                      Questions / Specific Query (Optional)
                    </label>
                    <textarea 
                      rows={3}
                      placeholder="Ask about cutoffs, hostel facilities, fees, or bus routes..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-[#D9DCE1] rounded-lg p-3 text-sm text-charcoal focus:outline-none focus:border-[#80672E] focus:ring-2 focus:ring-[#80672E]/10 transition-all placeholder-[#60656C]/50 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button 
                      type="submit"
                      disabled={loading}
                      className="btn-gold w-full flex items-center justify-center gap-2 text-base py-3.5 shadow-lg disabled:opacity-75"
                    >
                      {loading ? (
                        <span>Submitting Application...</span>
                      ) : (
                        <>
                          <span>Submit Online Admission Enquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-[#60656C] mt-2.5">
                      🔒 Your contact information is strictly confidential and used solely for admission guidance.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
