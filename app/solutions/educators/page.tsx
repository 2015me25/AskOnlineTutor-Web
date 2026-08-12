import React from 'react';
import Link from 'next/link';
import { School, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { constructMetadata } from '@/lib/seo/metadata';
import { APP_URLS } from '@/lib/constants/links';

export const metadata = constructMetadata({
  title: 'Engineering Software for Universities, Professors & Educators',
  description:
    'Demonstrate engineering concepts visually in the classroom. Create custom homework problem sets with verified solution keys and departmental licensing.',
  canonicalUrl: '/solutions/educators',
});

export default function EducatorsSolutionPage() {
  const benefits = [
    {
      title: 'Interactive Lecture Projection Mode',
      desc: 'Project live, responsive beam diagrams on lecture hall screens. Adjust point loads and support types on the fly to build student intuition.',
    },
    {
      title: 'Automated Verified Solution Keys',
      desc: 'Quickly generate LaTeX formatted homework solution keys with exact mathematical derivations and vector diagram illustrations.',
    },
    {
      title: 'Departmental & Lab Licensing',
      desc: 'Equip your entire university engineering lab or civil/mechanical department with centralized single-sign-on access and custom university watermarks.',
    },
    {
      title: 'Curriculum & LMS Integration',
      desc: 'Integrate directly into Canvas, Blackboard, or Moodle assignment workflows with structured problem export formats.',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="relative pt-14 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-blue-500/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold font-mono">
            <School className="w-3.5 h-3.5" />
            <span>FOR UNIVERSITIES & FACULTY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Demonstrate Concepts Visually <br />
            <span className="text-blue-400">In the Lecture Hall.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Turn abstract differential equations and singularity functions into live, interactive classroom demonstrations that engineering students grasp immediately.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-500/25 transition-all"
            >
              <span>Request Academic License</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href={APP_URLS.beamMaster}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors"
            >
              <span>Test Interactive Visualizer</span>
            </a>
          </div>

          <div className="flex items-center gap-6 pt-2 text-xs text-slate-400 font-medium justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              414/414 solver tests passing
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-blue-400" />
              LaTeX handout exports
            </span>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900">Transform Engineering Education</h2>
          <p className="text-slate-600 text-sm">Empowering professors to teach structural mechanics with unmatched visual clarity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Academic Benefit 0{i + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">{b.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
