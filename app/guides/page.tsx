import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { GUIDES_NAV } from '@/lib/constants/navigation';
import { constructMetadata } from '@/lib/seo/metadata';
import { APP_URLS } from '@/lib/constants/links';

export const metadata = constructMetadata({
  title: 'Engineering Guides & Structural Mechanics Tutorials',
  description:
    'Comprehensive engineering tutorials on shear force diagrams (SFD), bending moment diagrams (BMD), Macaulay’s method for deflection, and moment of inertia.',
  canonicalUrl: '/guides',
});

export default function GuidesHubPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-14 pb-16 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-indigo-500/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold font-mono">
            <BookOpen className="w-3.5 h-3.5" />
            <span>KNOWLEDGE BASE & GUIDES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Structural Mechanics & Engineering Guides
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Step-by-step mathematical explanations, sign conventions, derivation methods, and worked textbook examples curated for engineering students and structural designers.
          </p>

          <div className="flex items-center gap-6 pt-2 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              Verified textbook derivations
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" />
              Transparent LaTeX equations
            </span>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GUIDES_NAV.map((guide, idx) => (
            <Link
              key={idx}
              href={guide.href}
              className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-400 mb-3">
                  <span className="text-indigo-600 uppercase">Structural Mechanics</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Tutorial 0{idx + 1}</span>
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-3 leading-snug">
                  {guide.label}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {guide.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600">
                <span>Read Step-by-Step Guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold">Want to solve these equations automatically?</h3>
            <p className="text-xs text-slate-300">
              Beam Master validates every step of your calculation with our 414 regression test verified engine.
            </p>
          </div>
          <a
            href={APP_URLS.beamMaster}
            className="shrink-0 px-6 py-3 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/25"
          >
            <span>Open Beam Master</span>
          </a>
        </div>
      </section>
    </div>
  );
}
