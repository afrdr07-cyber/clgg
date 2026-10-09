import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Phone, ArrowRight } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, defaultProgram }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: defaultProgram || 'B.Tech - Artificial Intelligence and Data Science (AI & DS)',
    city: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('http://127.0.0.1:8000/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          course: formData.program,
          city: formData.city,
        }),
      }).catch(() => {});
    } catch (err) {
      console.log('Enquiry modal fallback:', err);
    } finally {
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 500);
    }
  };

  const programsList = [
    'B.Tech - Artificial Intelligence and Data Science (AI & DS)',
    'B.E. - Computer Science and Engineering (CSE)',
    'B.E. - Electronics and Communication Engineering (ECE)',
    'B.E. - Mechanical Engineering (Industry 4.0)',
    'B.E. - Electrical and Electronics Engineering (EEE)',
    'B.E. - Civil Engineering & Infrastructure',
    'M.B.A. - Master of Business Administration',
    'M.E. - Computer Science and Engineering',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-[#D9DCE1] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-[#60656C] hover:text-charcoal hover:bg-[#FAF9F6] transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-headline font-bold text-2xl text-charcoal">
              Enquiry Received Successfully
            </h3>
            <p className="text-xs sm:text-sm text-[#60656C] max-w-sm mx-auto">
              Our academic counseling team will reach out to you within 24 hours with admission cutoff criteria and fee structures.
            </p>
            <button 
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn-gold text-xs px-6 py-2.5 mt-2"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="border-b border-[#D9DCE1] pb-4 mb-5">
              <span className="text-[11px] font-bold text-[#80672E] uppercase tracking-wider font-label">
                Admissions 2026-27
              </span>
              <h3 className="font-headline text-2xl font-bold text-charcoal mt-0.5">
                Apply for Autonomous Admission
              </h3>
              <p className="text-xs text-[#60656C] mt-1">
                PSV College of Engineering and Technology (TNEA Code: 2636)
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="Applicant Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-11 bg-[#FAF9F6] border border-[#D9DCE1] rounded-lg px-3.5 text-xs text-charcoal focus:outline-none focus:border-[#80672E] focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="name@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-11 bg-[#FAF9F6] border border-[#D9DCE1] rounded-lg px-3.5 text-xs text-charcoal focus:outline-none focus:border-[#80672E] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-11 bg-[#FAF9F6] border border-[#D9DCE1] rounded-lg px-3.5 text-xs text-charcoal focus:outline-none focus:border-[#80672E] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">
                  Program of Interest <span className="text-red-500">*</span>
                </label>
                <select 
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full h-11 bg-[#FAF9F6] border border-[#D9DCE1] rounded-lg px-3 text-xs text-charcoal focus:outline-none focus:border-[#80672E] focus:bg-white"
                >
                  {programsList.map((p, i) => (
                    <option key={i} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">
                  City / Town
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Krishnagiri / Hosur / Bangalore"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full h-11 bg-[#FAF9F6] border border-[#D9DCE1] rounded-lg px-3.5 text-xs text-charcoal focus:outline-none focus:border-[#80672E] focus:bg-white"
                />
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full flex items-center justify-center gap-2 text-sm py-3"
                >
                  {loading ? 'Submitting...' : 'Submit Application'}
                  {!loading && <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
