'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Share2,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { APP_URLS } from '@/lib/constants/links';

export interface GuidePageProps {
  title: string;
  category: string;
  readTime: string;
  lastUpdated: string;
  summary: string;
  keyTakeaways: string[];
  children: React.ReactNode;
  relatedGuides?: { title: string; href: string; category: string }[];
}

export default function GuideTemplate({
  title,
  category,
  readTime,
  lastUpdated,
  summary,
  keyTakeaways,
  children,
  relatedGuides,
}: GuidePageProps) {
  return (
    <article className="bg-white min-h-screen">
      {/* Header / Meta */}
      <section className="relative pt-12 pb-14 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/3 w-[500px] h-[250px] bg-indigo-500/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-white transition-colors">
              Guides
            </Link>
            <span>/</span>
            <span className="text-indigo-400 font-bold">{category}</span>
          </nav>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold font-mono">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{category}</span>
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                <Clock className="w-3.5 h-3.5" />
                <span>{readTime}</span>
              </span>
              <span className="text-xs text-slate-400 font-mono">Updated {lastUpdated}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              {summary}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Key Takeaways Box */}
        <div className="p-6 rounded-2xl bg-indigo-50/70 border border-indigo-200/80 mb-10 space-y-3">
          <h3 className="font-bold text-indigo-950 text-sm uppercase tracking-wider flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            <span>Key Engineering Takeaways</span>
          </h3>
          <ul className="space-y-2">
            {keyTakeaways.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-indigo-900">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Markdown-style prose body */}
        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 text-base leading-relaxed">
          {children}
        </div>

        {/* In-Guide Conversion Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="relative space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold">
              <span>SOLVE LIVE IN BEAM MASTER</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Verify your beam calculations in real time.
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Skip manual arithmetic errors. Plot shear and bending diagrams, evaluate deflection equations, and inspect full step-by-step LaTeX proofs instantly.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={APP_URLS.beamMaster}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/25"
              >
                <span>Launch Beam Master Free</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs text-slate-400 font-mono">414/414 solver tests passing</span>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        {relatedGuides && relatedGuides.length > 0 && (
          <div className="mt-14 pt-8 border-t border-slate-200 space-y-4">
            <h3 className="font-bold text-slate-900 text-lg">Continue Reading Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedGuides.map((rg, idx) => (
                <Link
                  key={idx}
                  href={rg.href}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-400 transition-all block group"
                >
                  <span className="text-[10px] font-mono font-bold text-indigo-600 uppercase block mb-1">
                    {rg.category}
                  </span>
                  <h4 className="font-bold text-sm text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {rg.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </article>
  );
}
