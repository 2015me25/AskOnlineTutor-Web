import React from 'react';
import Link from 'next/link';
import { Compass, ShieldCheck, CheckCircle2, Target, HeartHandshake, ArrowRight, Layers, Flame, View, Disc } from 'lucide-react';
import { constructMetadata } from '@/lib/seo/metadata';
import { APP_URLS } from '@/lib/constants/links';

export const metadata = constructMetadata({
  title: 'About AskOnlineTutor Engineering — Mission & Testing Methodology',
  description:
    'Learn about AskOnlineTutor Engineering: our mission to provide transparent, mathematically verified structural calculation tools with 414 regression tests and verified benchmarks.',
  canonicalUrl: '/about',
});

export default function AboutPage() {
  const values = [
    {
      title: 'Mathematical Transparency',
      desc: 'We reject black-box engineering tools. Every output from our solvers is backed by step-by-step mathematical derivations, governing equations, and clearly stated sign conventions.',
      icon: Target,
    },
    {
      title: 'Exhaustive Test Rigor',
      desc: 'From 414/414 verified beam tests to Green’s theorem evaluated to 10⁻⁹ precision and 88/88 thermodynamics benchmarks, every calculation engine is tested against ground-truth benchmarks.',
      icon: ShieldCheck,
    },
    {
      title: 'Multi-Disciplinary Ecosystem',
      desc: 'Built to connect continuous beams, plane stress transformations, 2D trusses, exact geometric cross-sections, and thermodynamic power cycles in a unified browser interface.',
      icon: HeartHandshake,
    },
  ];

  const solverSuites = [
    {
      name: 'Beam Master',
      benchmark: '414/414 Tests Passing',
      desc: '1D continuous beam analysis, internal hinges, piecewise cut sections, and Macaulay double integration.',
    },
    {
      name: 'Mohr Master',
      benchmark: 'Live Flutter App',
      desc: '2D plane stress transformation, principal stresses (σ₁, σ₂), maximum shear, and real-time rotating stress element.',
    },
    {
      name: 'Section Properties (ZED 2)',
      benchmark: '10⁻⁹ Exact Precision',
      desc: 'Green’s theorem boundary integration with Kahan summation for AISC steel shapes and custom composite sections.',
    },
    {
      name: 'ThermoCore',
      benchmark: '88/88 Benchmarks (100%)',
      desc: 'Tiered thermodynamics engine with CoolProp 7.2.0 fluid states, Rankine/Brayton cycles, and transient CV balances.',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="relative pt-14 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-blue-500/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold font-mono">
            <Compass className="w-3.5 h-3.5" />
            <span>OUR MISSION & PHILOSOPHY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Engineering Analysis, <br />
            <span className="text-blue-400">Made Clear.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            AskOnlineTutor Engineering was founded on a simple premise: engineering calculation software should be intuitive, mathematically transparent, and verified against rigorous textbook ground-truths.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="prose prose-slate max-w-none space-y-6 text-slate-700 text-base leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Why We Built AskOnlineTutor
          </h2>
          <p>
            For decades, engineering students and practicing engineers were caught between two extremes: simplistic calculators that output a single black-box number without explanation, or expensive desktop software suites with complex, inaccessible interfaces.
          </p>
          <p>
            We built AskOnlineTutor to bridge this gap. Our tools combine the speed and visual feedback of modern web applications with the analytical rigor of university engineering mechanics textbooks.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Core Engineering Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Verified Solvers Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Verified Engineering Engines
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {solverSuites.map((suite, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 text-base">{suite.name}</h3>
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                    {suite.benchmark}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{suite.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Verification Methodology Banner */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>EXHAUSTIVE TEST SUITE</span>
          </div>
          <h3 className="text-2xl font-extrabold text-white">414/414 Regression Tests Passing</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Every analytical routine for reaction forces, Macaulay bracket singularity integration, shear jumps, and bending curves is continuously executed against 414 standard textbook and benchmark test cases.
          </p>
          <div className="pt-2">
            <a
              href={APP_URLS.beamMaster}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/25"
            >
              <span>Explore Beam Master Free</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
