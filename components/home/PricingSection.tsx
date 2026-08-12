'use client';

import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  const portalUrl = 'https://app.askonlinetutor.com';

  const plans = [
    {
      name: 'Free Starter',
      badge: 'FOREVER FREE',
      price: '$0',
      period: 'free forever',
      desc: 'Essential calculation tools for students learning statics and basic beam mechanics.',
      features: [
        'Beam Master (Determinate Beams)',
        'Interactive SFD & BMD Curves',
        'Up to 5 Saved Local Projects',
        'SI & US Customary Unit Support',
        'Standard Calculation Viewer',
      ],
      cta: 'Start Free',
      ctaHref: `${portalUrl}/beam`,
      popular: false,
    },
    {
      name: 'Engineering Pro',
      badge: 'MOST POPULAR',
      price: isAnnual ? '$7' : '$9',
      period: 'per month',
      desc: 'Full power for engineering students, faculty, and practicing structural engineers.',
      features: [
        'Full Access: Beam, Truss & Frame Solvers',
        'Indeterminate Beams & Internal Hinges',
        'Complete 11-Step LaTeX Derivation Walkthroughs',
        'High-Resolution PDF Calculation Packet Export',
        'Cross-Section Properties Importer',
        'Unlimited Cloud Projects & Sync',
      ],
      cta: 'Choose Pro',
      ctaHref: `${portalUrl}/beam`,
      popular: true,
    },
    {
      name: 'Engineering Suite',
      badge: 'TEAMS & ACADEMIC',
      price: isAnnual ? '$39' : '$49',
      period: 'per month',
      desc: 'For university engineering departments, student labs, and design teams.',
      features: [
        'Everything in Pro for up to 50 students/seats',
        'LMS & Classroom Assignment Integration',
        'Custom University Watermarking on PDFs',
        'AI Engineering Solver & OCR Early Access',
        'Direct Priority Support & Feature Requests',
      ],
      cta: 'Choose Suite',
      ctaHref: '/contact',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
            <span>TRANSPARENT PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Simple, Transparent Plans
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Access professional engineering calculation tools with flexible, student-friendly plans.
          </p>

          {/* Billing Switcher */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <span className={`text-sm font-semibold ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-12 h-6 rounded-full bg-slate-200 p-1 flex items-center transition-colors focus:outline-none"
            >
              <div
                className={`w-4 h-4 rounded-full bg-blue-600 shadow-md transform transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-semibold flex items-center gap-1.5 ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
              <span>Annual Billing</span>
              <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                SAVE 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                p.popular
                  ? 'bg-slate-900 text-white border-2 border-blue-500 shadow-2xl shadow-blue-500/15 scale-100 lg:-translate-y-2'
                  : 'bg-slate-50 text-slate-900 border border-slate-200/80 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full ${
                      p.popular
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-400/40'
                        : 'bg-slate-200/80 text-slate-700'
                    }`}
                  >
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold mb-1">{p.name}</h3>
                <p className={`text-xs mb-6 ${p.popular ? 'text-slate-400' : 'text-slate-500'}`}>{p.desc}</p>

                <div className="flex items-baseline gap-1.5 mb-8 pb-6 border-b border-slate-200/20">
                  <span className="text-4xl sm:text-5xl font-black">{p.price}</span>
                  <span className={`text-xs font-semibold ${p.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                    /{p.period}
                  </span>
                </div>

                <div className="space-y-3.5 mb-8">
                  {p.features.map((feat, fi) => (
                    <div key={fi} className="flex items-start gap-3 text-xs sm:text-sm font-medium">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          p.popular ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className={p.popular ? 'text-slate-200' : 'text-slate-700'}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href={p.ctaHref}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all ${
                    p.popular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 shadow-sm'
                  }`}
                >
                  <span>{p.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
