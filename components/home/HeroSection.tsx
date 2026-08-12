'use client';

import React from 'react';
import { ArrowRight, Play, CheckCircle2, ShieldCheck, Activity, Cpu } from 'lucide-react';
import InteractiveBeamMockup from '../engineering/InteractiveBeamMockup';
import { APP_URLS } from '@/lib/constants/links';

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-white">
      {/* Subtle Background Grid & Glow */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Copy */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wide font-mono">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Next-Generation Engineering Calculation Platform</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Engineering Analysis, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Made Clear.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Advanced beam analysis, reaction forces, shear & bending diagrams, and step-by-step mathematical solutions — built for engineering students and structural engineers.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <a
              href={APP_URLS.beamMaster}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all"
            >
              <span>Start Engineering Free</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#beam-master"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 border border-slate-200/80 rounded-xl transition-all"
            >
              <Play className="w-4 h-4 text-blue-600 fill-blue-600" />
              <span>Explore Beam Master</span>
            </a>
          </div>
        </div>

        {/* Real Engineering Software Interface Mockup */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
          <InteractiveBeamMockup />
        </div>

        {/* Trust Value Strip (Accurate 414/414 wording) */}
        <div className="mt-14 pt-8 border-t border-slate-200 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Engineering-focused</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Step-by-step solutions</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Interactive diagrams</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Cross-platform web</span>
            </div>
            <div className="col-span-2 md:col-span-1 flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-emerald-700 bg-emerald-50 md:bg-transparent py-1.5 rounded-lg border border-emerald-200 md:border-none">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>414/414 solver tests passing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
