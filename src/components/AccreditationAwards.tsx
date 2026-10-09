import React from 'react';
import { 
  ShieldCheck, Award, CheckCircle2, FileCheck, 
  ExternalLink, Building2, Sparkles, Star 
} from 'lucide-react';

export const AccreditationAwards: React.FC = () => {
  const accreditations = [
    {
      title: 'UGC Autonomous Status',
      authority: 'University Grants Commission, New Delhi',
      desc: 'Conferred autonomous status granting complete academic freedom to formulate modern CBCS syllabus and rapid assessment structures.',
      badge: 'Autonomous',
      year: 'Concurred by Anna University',
    },
    {
      title: 'NAAC "A" Grade',
      authority: 'National Assessment and Accreditation Council',
      desc: 'Awarded Prestigious "A" Grade validating superior teaching standards, research output, student governance, and world-class infrastructure.',
      badge: 'Grade A',
      year: 'Institutional Accreditation',
    },
    {
      title: 'NBA Accredited Programs',
      authority: 'National Board of Accreditation, New Delhi',
      desc: 'Eligible undergraduate engineering programs evaluated and accredited for outcome-based technical education under Tier standards.',
      badge: 'NBA Tier',
      year: 'Outcome-Based Education',
    },
    {
      title: 'AICTE Approval',
      authority: 'All India Council for Technical Education',
      desc: 'All undergraduate and postgraduate technical and management degree programs are strictly approved by statutory body AICTE.',
      badge: 'Approved',
      year: 'Statutory Compliance',
    },
    {
      title: 'Anna University Affiliation',
      authority: 'Anna University, Chennai, Tamil Nadu',
      desc: 'Permanently affiliated to Tamil Nadu’s premier technical university with degrees officially awarded by Anna University.',
      badge: 'Affiliated',
      year: 'TNEA Code: 2636',
    },
    {
      title: 'ISO 9001:2015 Certified',
      authority: 'International Quality Management Standard',
      desc: 'Certified for maintaining rigorous international standards in higher technical education management and student services.',
      badge: 'Certified',
      year: 'Quality Benchmark',
    }
  ];

  return (
    <section id="accreditations" className="py-20 bg-white">
      <div className="max-w-[1760px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="tag-accreditation inline-block">
            Recognition & Accreditations
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
            Distinguished Accreditations & National Stature
          </h2>
          <p className="font-body text-sm sm:text-base text-[#60656C]">
            Our institutional credentials stand as a hallmark of our unwavering commitment to academic excellence, transparency, and research rigor.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {accreditations.map((acc, index) => (
            <div 
              key={index}
              className="pearl-card p-6 sm:p-7 flex flex-col justify-between border border-[#D9DCE1] bg-[#FAF9F6]/40 hover:bg-white transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#F0E8D5] flex items-center justify-center text-[#80672E] group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#80672E] bg-[#F0E8D5] px-2.5 py-0.5 rounded-full font-label">
                    {acc.badge}
                  </span>
                </div>

                <h3 className="font-headline text-xl font-bold text-charcoal group-hover:text-[#80672E] transition-colors">
                  {acc.title}
                </h3>
                <span className="text-xs font-semibold text-[#80672E] block">
                  {acc.authority}
                </span>

                <p className="font-body text-xs sm:text-sm text-[#60656C] leading-relaxed pt-1">
                  {acc.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#D9DCE1]/60 flex items-center justify-between text-xs text-[#60656C]">
                <span>{acc.year}</span>
                <FileCheck className="w-4 h-4 text-[#80672E]" />
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Disclosure Links */}
        <div className="mt-12 p-6 bg-[#FAF9F6] border border-[#D9DCE1] rounded-2xl flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-charcoal">
          <span className="text-[#80672E] font-headline font-bold text-sm">
            Statutory & Mandatory Disclosures:
          </span>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#aicte-eoas" className="hover:text-[#80672E] hover:underline flex items-center gap-1">
              <span>AICTE Approvals (EOA)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-[#D9DCE1]">•</span>
            <a href="#anna-univ" className="hover:text-[#80672E] hover:underline flex items-center gap-1">
              <span>Anna University Affiliation Orders</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-[#D9DCE1]">•</span>
            <a href="#nirf-d" className="hover:text-[#80672E] hover:underline flex items-center gap-1">
              <span>NIRF Data Submission</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-[#D9DCE1]">•</span>
            <a href="#iqac" className="hover:text-[#80672E] hover:underline flex items-center gap-1">
              <span>IQAC Annual Reports</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
