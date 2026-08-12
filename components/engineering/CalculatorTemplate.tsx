'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  Play,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
} from 'lucide-react';
import { APP_URLS } from '@/lib/constants/links';

export interface CalculatorFormula {
  label: string;
  formula: string;
  description: string;
}

export interface CalculatorFaq {
  question: string;
  answer: string;
}

export interface CalculatorPageProps {
  title: string;
  badge: string;
  headline: string;
  description: string;
  primaryFormula: string;
  formulas: CalculatorFormula[];
  faqs: CalculatorFaq[];
  relatedCalculators?: { title: string; href: string; desc: string }[];
  beamPresetType?: 'simple' | 'cantilever' | 'overhang' | 'bmd' | 'sfd';
  children?: React.ReactNode;
}

export default function CalculatorTemplate({
  title,
  badge,
  headline,
  description,
  primaryFormula,
  formulas,
  faqs,
  relatedCalculators,
  children,
}: CalculatorPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero / Header */}
      <section className="relative pt-12 pb-16 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-blue-500/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/calculators" className="hover:text-white transition-colors">
              Calculators
            </Link>
            <span>/</span>
            <span className="text-blue-400 font-bold">{title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Col: Info & Launch */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold font-mono">
                <Calculator className="w-3.5 h-3.5" />
                <span>{badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                {headline}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {description}
              </p>

              {/* Primary Formula Card */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-sm">
                <span className="text-slate-500 text-[11px] uppercase font-bold block mb-1">
                  Primary Governing Relation:
                </span>
                <p className="text-blue-400 font-bold text-base sm:text-lg tracking-wide">{primaryFormula}</p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={APP_URLS.beamMaster}
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-500/25 hover:scale-[1.02] transition-all"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Launch Full Interactive Solver</span>
                </a>
                <a
                  href="#formulas"
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors"
                >
                  <span>View Theory & Formulas</span>
                  <ChevronDown className="w-4 h-4" />
                </a>
              </div>

              {/* Verified Trust Strip */}
              <div className="flex items-center gap-6 pt-2 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  414/414 solver tests passing
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  Exact closed-form solutions
                </span>
              </div>
            </div>

            {/* Right Col: Quick Visual Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-blue-400" />
                    LIVE SOLVER READY
                  </span>
                  <span className="text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60 text-[10px]">
                    100% ACCURATE
                  </span>
                </div>

                <div className="space-y-3">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Beam Master handles any combination of point loads, uniform distributed loads (UDL), varying loads (UVL), and applied moments with instant SFD, BMD, and deflection curves.
                  </p>

                  <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-2 text-xs font-mono">
                    <div className="text-slate-400 text-[11px] font-bold uppercase">Features Included:</div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>Instant Shear Force Jump Calculations</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>Parabolic & Cubic Bending Moment Profiles</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Double Integration & Macaulay Deflection</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>Complete 11-Step LaTeX Derivations</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={APP_URLS.beamMaster}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm"
                  >
                    <span>Open in Web App</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Formulas Body */}
      <section id="formulas" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Custom Content Slot */}
            {children}

            {/* Formulas Breakdown */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Engineering Formulas & Governing Equations
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {formulas.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2 hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-slate-900 text-sm">{item.label}</h3>
                      <span className="text-[11px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        Equation 0{idx + 1}
                      </span>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 font-mono text-sm font-bold text-slate-900">
                      {item.formula}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-6 pt-6 border-t border-slate-200">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider">
                  <HelpCircle className="w-4 h-4" />
                  <span>Frequently Asked Questions</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Calculation Details & Clarifications
                </h2>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-white"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-4 text-left font-bold text-sm text-slate-900 hover:bg-slate-50 transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${
                          openFaq === idx ? 'rotate-180 text-blue-600' : ''
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* CTA Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 shadow-xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold">Solve in Beam Master</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Need to add internal hinges, multiple supports, or export a professional PDF report? Open the complete web application.
              </p>
              <a
                href={APP_URLS.beamMaster}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/25"
              >
                <span>Open Beam Master Free</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-center text-slate-400">
                414/414 regression tests passing • No install needed
              </p>
            </div>

            {/* Related Calculators */}
            {relatedCalculators && relatedCalculators.length > 0 && (
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-4">
                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-blue-600" />
                  <span>Related Calculators</span>
                </h3>
                <div className="space-y-2.5">
                  {relatedCalculators.map((rc, idx) => (
                    <Link
                      key={idx}
                      href={rc.href}
                      className="block p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-sm transition-all group"
                    >
                      <div className="font-bold text-xs text-slate-900 group-hover:text-blue-600 transition-colors">
                        {rc.title}
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{rc.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
