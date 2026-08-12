'use client';

import React from 'react';
import { Target, BookOpenCheck, ShieldCheck, Cpu } from 'lucide-react';

export default function WhyUs() {
  const points = [
    {
      title: 'Deterministic Mathematical Rigor',
      desc: 'Never approximate black-box answers. From 414/414 verified beam tests to Green’s theorem evaluated to 10⁻⁹ precision with Kahan summation, every calculation is mathematically grounded.',
      icon: ShieldCheck,
      color: 'text-emerald-400 bg-emerald-950/60 border-emerald-800',
    },
    {
      title: 'Transparent Step-by-Step Proofs',
      desc: 'See every equilibrium resolution, singularity integral, stress rotation, and cycle energy balance in LaTeX formulas with actual numerical substitutions and physical interpretations.',
      icon: BookOpenCheck,
      color: 'text-blue-400 bg-blue-950/60 border-blue-800',
    },
    {
      title: 'Ecosystem of Specialized Solvers',
      desc: 'Integrated suite spanning Continuous Beams (Beam Master), Plane Stress (Mohr Master), 2D Trusses (Truss Master), Exact Cross-Sections (ZED 2), and Thermodynamics (ThermoCore).',
      icon: Cpu,
      color: 'text-purple-400 bg-purple-950/60 border-purple-800',
    },
    {
      title: 'Verified Against Benchmark Datasets',
      desc: 'Calibrated against standard engineering textbooks (Beer & Johnston, Hibbeler, Moran & Shapiro) and independently audited with automated regression suites.',
      icon: Target,
      color: 'text-teal-400 bg-teal-950/60 border-teal-800',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold font-mono">
            <span>ENGINEERING PRINCIPLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Why Engineers Trust AskOnlineTutor
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Built by engineers for students, educators, and practicing professionals who demand mathematical accuracy and transparent derivations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div
                key={i}
                className="bg-slate-950/80 border border-slate-800 rounded-2xl p-7 flex gap-5 hover:border-slate-700 transition-colors"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${pt.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-100">{pt.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{pt.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
