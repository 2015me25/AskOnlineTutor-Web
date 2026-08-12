'use client';

import React from 'react';
import { ArrowRight, Play, CheckCircle2, ShieldCheck } from 'lucide-react';
import { APP_URLS } from '@/lib/constants/links';

export default function FinalCta() {
  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Engineering Line Grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-500/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold font-mono">
          <span>JOIN THE ENGINEERING ECOSYSTEM</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl mx-auto">
          Start Building Better Engineering Solutions Today.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Explore Beam Master today and discover a growing suite of professional calculation and analysis tools designed for clarity, confidence, and mathematical rigor.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={APP_URLS.beamMaster}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-xl shadow-blue-500/30 hover:scale-[1.02] transition-all"
          >
            <span>Start Engineering Free</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="#beam-master"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all"
          >
            <Play className="w-4 h-4 text-blue-400 fill-blue-400" />
            <span>Explore Beam Master</span>
          </a>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Instant in-browser access
          </span>
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            414/414 solver tests passing
          </span>
        </div>
      </div>
    </section>
  );
}
