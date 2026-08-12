import React from 'react';
import Link from 'next/link';
import { Briefcase, CheckCircle2, ArrowRight, ShieldCheck, FileSpreadsheet } from 'lucide-react';
import { constructMetadata } from '@/lib/seo/metadata';
import { APP_URLS } from '@/lib/constants/links';

export const metadata = constructMetadata({
  title: 'Engineering Analysis for Practicing Structural Engineers',
  description:
    'Rapidly verify structural beam designs, check indeterminate reactions, evaluate complex load cases, and export publication-ready PDF calculation packages.',
  canonicalUrl: '/solutions/engineers',
});

export default function EngineersSolutionPage() {
  const benefits = [
    {
      title: 'Rapid Design Sanity Checks',
      desc: 'Quickly evaluate continuous beams, multi-load combinations, and cantilever overhangs without firing up heavy finite element suites.',
    },
    {
      title: 'Publication-Ready PDF Calculation Packets',
      desc: 'Export professional vector calculation packets with company logos, project metadata, load diagrams, and summary tables ready for client submission.',
    },
    {
      title: 'Deterministic, 414-Test Verified Accuracy',
      desc: 'Every solver calculation is strictly deterministic and backed by our comprehensive suite of 414 regression tests.',
    },
    {
      title: 'Seamless SI and US Customary Support',
      desc: 'Toggle between kilonewtons/meters and kips/feet instantly without error-prone manual unit conversion.',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="relative pt-14 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-blue-500/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>FOR PRACTICING ENGINEERS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Reliable Calculations <br />
            <span className="text-blue-400">When You Need Them.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Rapidly verify structural designs, check complex boundary actions, and generate professional PDF calculation packages for clients and regulatory review.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <a
              href={APP_URLS.beamMaster}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-500/25 transition-all"
            >
              <span>Launch Beam Master</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors"
            >
              <span>View Pro Plans</span>
            </Link>
          </div>

          <div className="flex items-center gap-6 pt-2 text-xs text-slate-400 font-medium justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              414/414 solver tests passing
            </span>
            <span className="flex items-center gap-1.5">
              <FileSpreadsheet className="w-4 h-4 text-blue-400" />
              Vector PDF exports
            </span>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900">Engineered for Professional Reliability</h2>
          <p className="text-slate-600 text-sm">Designed to streamline structural calculation workflows and deliver audit-proof documentation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Capability 0{i + 1}</span>
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
