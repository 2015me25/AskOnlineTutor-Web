'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { PRICING_FAQS } from '@/lib/pricing/plans';

export default function PricingFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold font-mono">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>GOT QUESTIONS?</span>
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-slate-600">
          Everything you need to know about plans, academic pricing, and solver accuracy.
        </p>
      </div>

      <div className="space-y-3">
        {PRICING_FAQS.map((faq, idx) => (
          <div
            key={idx}
            className="border border-slate-200 rounded-2xl overflow-hidden bg-white transition-all shadow-sm"
          >
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 hover:bg-slate-50 transition-colors text-sm sm:text-base"
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                  openIdx === idx ? 'rotate-180 text-blue-600' : ''
                }`}
              />
            </button>
            {openIdx === idx && (
              <div className="p-5 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
