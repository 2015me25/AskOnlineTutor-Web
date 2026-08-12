'use client';

import React, { useState } from 'react';
import { Check, X, ArrowRight, HelpCircle } from 'lucide-react';
import { PRICING_PLANS, PRICING_FAQS } from '@/lib/pricing/plans';

export default function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(false);

  const featureMatrix = [
    {
      category: 'Beam Analysis Solvers',
      items: [
        { name: 'Determinate Beams (Simply Supported, Cantilever, Overhang)', free: true, pro: true, suite: true },
        { name: 'Indeterminate Continuous Beams', free: false, pro: true, suite: true },
        { name: 'Internal Moment & Shear Hinges', free: false, pro: true, suite: true },
        { name: 'Point, UDL, UVL & Applied Couple Loads', free: true, pro: true, suite: true },
        { name: 'Custom Boundary Spring Supports', free: false, pro: true, suite: true },
      ],
    },
    {
      category: 'Diagrams & Mathematical Output',
      items: [
        { name: 'Interactive Shear Force Diagrams (SFD)', free: true, pro: true, suite: true },
        { name: 'Interactive Bending Moment Diagrams (BMD)', free: true, pro: true, suite: true },
        { name: 'Elastic Deflection & Slope Profiles', free: true, pro: true, suite: true },
        { name: 'Complete 11-Step LaTeX Mathematical Derivations', free: false, pro: true, suite: true },
        { name: 'Macaulay Bracket Singularity Breakdown', free: false, pro: true, suite: true },
      ],
    },
    {
      category: 'Export & Deliverables',
      items: [
        { name: 'Online Results Summary View', free: true, pro: true, suite: true },
        { name: 'High-Resolution Vector PDF Calculation Packets', free: false, pro: true, suite: true },
        { name: 'Custom Department/Company Watermark & Logos', free: false, pro: false, suite: true },
        { name: 'CSV & Tabular Coordinate Output', free: false, pro: true, suite: true },
      ],
    },
    {
      category: 'Cloud Projects & Ecosystem',
      items: [
        { name: 'Saved Project Models', free: '5 local', pro: 'Unlimited cloud', suite: 'Unlimited cloud' },
        { name: 'Cross-Device Cloud Sync', free: false, pro: true, suite: true },
        { name: 'Cross-Section Properties Importer', free: false, pro: true, suite: true },
        { name: 'Truss Master & Frame Master Access', free: false, pro: 'Early beta', suite: 'Early beta' },
        { name: 'AI Engineering Solver (Textbook OCR)', free: false, pro: false, suite: 'Early access' },
        { name: 'Seats / Users Included', free: '1 user', pro: '1 user', suite: 'Up to 50 seats' },
      ],
    },
  ];

  return (
    <div className="space-y-16">
      {/* Billing Switcher */}
      <div className="flex items-center justify-center gap-3">
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

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
        {PRICING_PLANS.map((plan) => {
          const price = plan.monthlyPrice === 0 ? '$0' : isAnnual ? `$${plan.annualPrice}` : `$${plan.monthlyPrice}`;

          return (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                plan.popular
                  ? 'bg-slate-900 text-white border-2 border-blue-500 shadow-2xl shadow-blue-500/15 scale-100 lg:-translate-y-2'
                  : 'bg-white text-slate-900 border border-slate-200/90 shadow-sm hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full font-mono ${
                      plan.popular
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-400/40'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold mb-1">{plan.name}</h3>
                <p className={`text-xs mb-6 leading-relaxed ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1.5 mb-8 pb-6 border-b border-slate-200/20">
                  <span className="text-4xl sm:text-5xl font-black">{price}</span>
                  <span className={`text-xs font-semibold ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                    /{plan.period}
                  </span>
                </div>

                <div className="space-y-3.5 mb-8">
                  {plan.features.map((feat, fi) => (
                    <div key={fi} className="flex items-start gap-3 text-xs sm:text-sm font-medium">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          feat.included
                            ? plan.popular
                              ? 'bg-blue-500 text-white'
                              : 'bg-blue-100 text-blue-700'
                            : 'bg-slate-100 text-slate-400'
                        }`}
                      >
                        {feat.included ? (
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        ) : (
                          <X className="w-2.5 h-2.5" />
                        )}
                      </div>
                      <span
                        className={
                          !feat.included
                            ? 'text-slate-400 line-through'
                            : plan.popular
                            ? 'text-slate-200'
                            : 'text-slate-700'
                        }
                      >
                        {feat.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href={plan.ctaHref}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm'
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

      {/* Feature Comparison Matrix */}
      <div className="max-w-6xl mx-auto pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-10 tracking-tight">
          Complete Feature Comparison Matrix
        </h2>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="py-4 px-6 font-bold text-slate-900 w-2/5">Feature</th>
                <th className="py-4 px-4 font-bold text-slate-700 text-center w-1/5">Free Starter</th>
                <th className="py-4 px-4 font-bold text-blue-600 text-center w-1/5 bg-blue-50/50">
                  Engineering Pro
                </th>
                <th className="py-4 px-4 font-bold text-slate-700 text-center w-1/5">Engineering Suite</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {featureMatrix.map((cat, ci) => (
                <React.Fragment key={ci}>
                  <tr className="bg-slate-100/70">
                    <td colSpan={4} className="py-2.5 px-6 font-bold text-slate-800 text-xs uppercase tracking-wider">
                      {cat.category}
                    </td>
                  </tr>
                  {cat.items.map((item, ii) => (
                    <tr key={ii} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-6 text-slate-700 font-medium">{item.name}</td>
                      <td className="py-3.5 px-4 text-center">
                        {typeof item.free === 'boolean' ? (
                          item.free ? (
                            <Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[2.5]" />
                          ) : (
                            <span className="text-slate-300">—</span>
                          )
                        ) : (
                          <span className="text-xs font-semibold text-slate-600">{item.free}</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-center bg-blue-50/30">
                        {typeof item.pro === 'boolean' ? (
                          item.pro ? (
                            <Check className="w-4 h-4 text-blue-600 mx-auto stroke-[2.5]" />
                          ) : (
                            <span className="text-slate-300">—</span>
                          )
                        ) : (
                          <span className="text-xs font-bold text-blue-600">{item.pro}</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        {typeof item.suite === 'boolean' ? (
                          item.suite ? (
                            <Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[2.5]" />
                          ) : (
                            <span className="text-slate-300">—</span>
                          )
                        ) : (
                          <span className="text-xs font-semibold text-slate-800">{item.suite}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
