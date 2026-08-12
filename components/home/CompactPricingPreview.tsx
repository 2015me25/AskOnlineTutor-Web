'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '@/lib/pricing/plans';

export default function CompactPricingPreview() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold font-mono">
            <span>TRANSPARENT PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Simple, Student & Engineer Friendly Plans
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Start free with core beam analysis, or upgrade to Engineering Pro for complete step-by-step derivations and publication-ready PDF reports.
          </p>

          {/* Billing Switcher */}
          <div className="pt-3 flex items-center justify-center gap-3">
            <span className={`text-sm font-semibold ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
              Monthly Billing
            </span>
            <button
              type="button"
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-12 h-6 rounded-full bg-slate-200 p-1 flex items-center transition-colors focus:outline-none"
              aria-label="Toggle annual billing"
            >
              <div
                className={`w-4 h-4 rounded-full bg-blue-600 shadow-md transform transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span
              className={`text-sm font-semibold flex items-center gap-1.5 ${
                isAnnual ? 'text-slate-900' : 'text-slate-500'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                SAVE 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = plan.monthlyPrice === 0 ? '$0' : isAnnual ? `$${plan.annualPrice}` : `$${plan.monthlyPrice}`;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                  plan.popular
                    ? 'bg-slate-900 text-white border-2 border-blue-500 shadow-2xl shadow-blue-500/15 scale-100 lg:-translate-y-2'
                    : 'bg-slate-50 text-slate-900 border border-slate-200/80 shadow-sm hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full font-mono ${
                        plan.popular
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-400/40'
                          : 'bg-slate-200/80 text-slate-700'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold mb-1">{plan.name}</h3>
                  <p className={`text-xs mb-6 leading-relaxed ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mb-8 pb-6 border-b border-slate-200/20">
                    <span className="text-4xl sm:text-5xl font-black">{price}</span>
                    <span className={`text-xs font-semibold ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                      /{plan.period}
                    </span>
                  </div>

                  {/* Key Feature Bullets */}
                  <div className="space-y-3.5 mb-8">
                    {plan.features.slice(0, 5).map((feat, fi) => (
                      <div key={fi} className="flex items-start gap-3 text-xs sm:text-sm font-medium">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            plan.popular ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className={plan.popular ? 'text-slate-200' : 'text-slate-700'}>
                          {feat.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <a
                    href={plan.ctaHref}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all ${
                      plan.popular
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 shadow-sm'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to Full Pricing & Comparison */}
        <div className="mt-12 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span>Compare all features, team seats, and limits in detail</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
