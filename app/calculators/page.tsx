import React from 'react';
import Link from 'next/link';
import { Calculator, ArrowRight, Activity, Zap, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CALCULATORS_NAV } from '@/lib/constants/navigation';
import { constructMetadata } from '@/lib/seo/metadata';
import { APP_URLS } from '@/lib/constants/links';

export const metadata = constructMetadata({
  title: 'Engineering Calculators & Structural Solvers',
  description:
    'Free online beam deflection calculators, simply supported beam tools, cantilever analysis, shear force diagrams (SFD), and bending moment (BMD) solvers.',
  canonicalUrl: '/calculators',
});

export default function CalculatorsHubPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="relative pt-14 pb-16 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-blue-500/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold font-mono">
            <Calculator className="w-3.5 h-3.5" />
            <span>CALCULATOR DIRECTORY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Engineering Calculators & Solvers
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Instant, mathematically verified structural calculation tools for beam mechanics, deflection equations, shear force jumps, and second moment of area.
          </p>

          <div className="flex items-center gap-6 pt-2 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              414/414 solver tests passing
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              Free online access
            </span>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CALCULATORS_NAV.map((calc, idx) => (
            <Link
              key={idx}
              href={calc.href}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Calculator className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                  {calc.label}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {calc.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                <span>Launch Calculator</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold">Looking for multi-span or indeterminate beam analysis?</h3>
            <p className="text-xs text-slate-300">
              Beam Master supports internal hinges, spring supports, varying loads, and complete 11-step LaTeX walkthroughs.
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
