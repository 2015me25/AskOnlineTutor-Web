'use client';

import React from 'react';
import Link from 'next/link';
import { Calculator, BookOpen, ArrowRight, ExternalLink } from 'lucide-react';
import { CALCULATORS_NAV, GUIDES_NAV } from '@/lib/constants/navigation';

export default function ResourcesPreview() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold font-mono">
            <span>ENGINEERING RESOURCES & SEO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Free Calculators & Engineering Guides
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Strengthen your theoretical foundations with verified structural formulas and interactive calculation tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Calculators Column */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-slate-900 text-lg">Interactive Calculators</h3>
              </div>
              <Link
                href="/calculators"
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                <span>View all</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CALCULATORS_NAV.slice(0, 6).map((c, i) => (
                <Link
                  key={i}
                  href={c.href}
                  className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-sm transition-all group flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                      <span>{c.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 shrink-0" />
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">{c.description}</p>
                  </div>
                  <span className="text-[11px] font-semibold text-blue-600 mt-3 block">View tool →</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Guides Column */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                <h3 className="font-bold text-slate-900 text-lg">Technical Articles & Guides</h3>
              </div>
              <Link
                href="/guides"
                className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
              >
                <span>View all</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-3">
              {GUIDES_NAV.map((g, i) => (
                <Link
                  key={i}
                  href={g.href}
                  className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-indigo-300 hover:shadow-sm transition-all block group"
                >
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 mb-1">
                    <span className="text-indigo-600 uppercase font-mono">Structural Mechanics</span>
                    <span>Engineering Guide</span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {g.label}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{g.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
