import React from 'react';
import Link from 'next/link';
import { Calculator, BookOpen, ArrowRight, ShieldCheck } from 'lucide-react';
import { CALCULATORS_NAV, GUIDES_NAV } from '@/lib/constants/navigation';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'Engineering Resources — Calculators, Guides & Theory',
  description:
    'Explore free engineering calculators, structural mechanics guides, Macaulay method tutorials, and cross-section properties.',
  canonicalUrl: '/resources',
});

export default function ResourcesHubPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="relative pt-14 pb-16 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-blue-500/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold font-mono">
            <BookOpen className="w-3.5 h-3.5" />
            <span>KNOWLEDGE HUB</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Engineering Resources & Knowledge Center
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Free calculation tools, structural mechanics guides, and derivation tutorials to support your engineering journey.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Calculators Block */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                <Calculator className="w-4 h-4" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Engineering Calculators</h2>
            </div>
            <Link
              href="/calculators"
              className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              <span>Explore all calculators</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CALCULATORS_NAV.map((c, i) => (
              <Link
                key={i}
                href={c.href}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                    {c.label}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{c.description}</p>
                </div>
                <span className="text-[11px] font-bold text-blue-600 mt-4 block">Launch Tool →</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Guides Block */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Mechanics & Derivation Guides</h2>
            </div>
            <Link
              href="/guides"
              className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
            >
              <span>Explore all guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {GUIDES_NAV.map((g, i) => (
              <Link
                key={i}
                href={g.href}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all group block"
              >
                <span className="text-[10px] font-mono font-bold text-indigo-600 uppercase block mb-1">
                  Structural Mechanics Tutorial
                </span>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                  {g.label}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{g.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
