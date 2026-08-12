'use client';

import React from 'react';
import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  FileSpreadsheet,
  Layers,
  Sparkles,
  Zap,
  BookOpen,
  Cpu,
} from 'lucide-react';
import { APP_URLS } from '@/lib/constants/links';

export default function FeaturedBeamMaster() {
  const features = [
    {
      title: 'Exact SFD & BMD Curves',
      desc: 'Instant shear jump calculations, point moments, and continuous bending moment diagrams.',
      icon: Activity,
    },
    {
      title: 'Multiple Boundary Conditions',
      desc: 'Pin, roller, fixed, free, and internal hinge supports for determinate and indeterminate spans.',
      icon: Layers,
    },
    {
      title: 'Deflection & Slope Profiles',
      desc: 'Double integration and Macaulay singularity solving with elastic modulus E and moment of inertia I.',
      icon: Zap,
    },
    {
      title: 'Step-by-Step LaTeX Derivations',
      desc: 'Transparent 11-step mathematical walkthroughs showing equilibrium equations and boundary values.',
      icon: BookOpen,
    },
    {
      title: 'High-Resolution PDF Reports',
      desc: 'Generate engineering-ready calculation sheets with vector diagrams and project metadata.',
      icon: FileSpreadsheet,
    },
    {
      title: 'Project Cloud Sync',
      desc: 'Store, duplicate, and share beam setups with fast one-click library access.',
      icon: Cpu,
    },
  ];

  return (
    <section id="beam-master" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/15 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Copy & Feature Grid */}
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold font-mono">
              <span>FLAGSHIP PRODUCT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Meet <span className="text-blue-400">Beam Master</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Analytical and stiffness-based beam analysis with step-by-step solutions. Visualize shear and bending moment diagrams, calculate elastic deflection, and understand every step of the derivation.
            </p>

            {/* Feature Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-blue-500/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-sm text-slate-100">{f.title}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={APP_URLS.beamMaster}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-500/25 transition-all"
              >
                <span>Open Beam Master</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/products/beam-master"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors"
              >
                <span>Explore Features</span>
              </Link>
            </div>
          </div>

          {/* Right: Technical Solver Card Mockup */}
          <div className="w-full lg:w-auto shrink-0 max-w-lg bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold text-slate-300">Continuous Beam Solver</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800/50">
                414/414 Tests Passing
              </span>
            </div>

            {/* Code / Equation Block */}
            <div className="space-y-2 font-mono text-xs text-slate-300 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
              <div className="text-slate-500 text-[10px] uppercase font-bold">// Macaulay Equation for M(x)</div>
              <p className="text-purple-300">
                M(x) = R_A⟨x⟩¹ - P⟨x - a⟩¹ - ½w⟨x - c⟩² + M₀⟨x - d⟩⁰
              </p>
              <div className="pt-2 text-slate-500 text-[10px] uppercase font-bold">// Elastic Deflection Curve</div>
              <p className="text-blue-300">
                EI · v(x) = ⅙R_A⟨x⟩³ - ⅙P⟨x - a⟩³ - ¹⁄₂₄w⟨x - c⟩⁴ + C₁x + C₂
              </p>
            </div>

            {/* Results Snapshot */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                <div className="text-slate-500 text-[10px]">MAX DEFLECTION</div>
                <div className="text-emerald-400 font-bold text-sm">-3.42 mm</div>
                <div className="text-[10px] text-slate-400">at x = 5.24 m</div>
              </div>
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                <div className="text-slate-500 text-[10px]">MAX MOMENT</div>
                <div className="text-blue-400 font-bold text-sm">+142.5 kN·m</div>
                <div className="text-[10px] text-slate-400">at x = 4.80 m</div>
              </div>
            </div>

            <div className="pt-2 text-center">
              <a
                href={APP_URLS.beamMaster}
                className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Launch Interactive Web Solver</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
