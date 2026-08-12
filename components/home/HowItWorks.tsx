'use client';

import React from 'react';
import { PenTool, Cpu, LineChart, FileCheck2, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Define',
      desc: 'Enter span length, support types, material modulus (E), cross-section inertia (I), and load positions (Point, UDL, Moment).',
      icon: PenTool,
      color: 'from-blue-600 to-indigo-600',
    },
    {
      num: '02',
      title: 'Analyze',
      desc: 'Our deterministic analytical engine calculates equilibrium reactions, shear equations, and Macaulay polynomials instantly.',
      icon: Cpu,
      color: 'from-indigo-600 to-violet-600',
    },
    {
      num: '03',
      title: 'Visualize',
      desc: 'Inspect interactive, high-precision Shear Force (SFD), Bending Moment (BMD), and elastic Deflection diagrams in real time.',
      icon: LineChart,
      color: 'from-violet-600 to-purple-600',
    },
    {
      num: '04',
      title: 'Understand',
      desc: 'Review complete 11-step mathematical derivations with LaTeX formatted equations, boundary conditions, and printable PDF exports.',
      icon: FileCheck2,
      color: 'from-emerald-600 to-teal-600',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
            <span>ENGINEERING WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            From Problem to Engineering Solution
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A clear four-step process built to deepen conceptual understanding and ensure calculation accuracy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 relative flex flex-col justify-between hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-slate-300">{step.num}</span>
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-md`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold text-blue-600">
                  <span>Step {step.num} Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
