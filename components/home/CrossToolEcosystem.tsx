'use client';

import React from 'react';
import { View, ArrowRight, Activity, Box, Sparkles, RefreshCw } from 'lucide-react';

export default function CrossToolEcosystem() {
  const steps = [
    {
      app: 'Section Master',
      badge: 'PROPERTIES',
      output: 'Ix, Iy, Centroid (x̄, ȳ), Zx',
      desc: 'Calculate custom composite or AISC steel geometry.',
      icon: View,
      color: 'border-purple-300 bg-purple-50 text-purple-700',
    },
    {
      app: 'Beam Master',
      badge: 'ANALYSIS',
      output: 'SFD, BMD, Slope & Deflection v(x)',
      desc: 'Inherits section inertia (I) directly for exact deflection integration.',
      icon: Activity,
      color: 'border-blue-300 bg-blue-50 text-blue-700',
    },
    {
      app: 'Frame Master',
      badge: 'GLOBAL SYSTEMS',
      output: '2D Lateral Sway & Joint Moments',
      desc: 'Combines multiple beam-column elements into full portal frames.',
      icon: Box,
      color: 'border-amber-300 bg-amber-50 text-amber-700',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>INTERCONNECTED PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Your Engineering Tools Work Together
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminate copy-pasting numbers. Seamlessly transfer structural cross-sections, boundary actions, and member forces across all applications in one click.
          </p>
        </div>

        {/* Workflow Pipeline Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${s.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-200/80 text-slate-700">
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1">{s.app}</h3>
                  <p className="text-xs text-slate-500 mb-4">{s.desc}</p>

                  <div className="bg-white p-3 rounded-lg border border-slate-200 font-mono text-xs text-slate-800">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold mb-0.5">
                      Transferred Output:
                    </span>
                    <span className="text-blue-600 font-bold">{s.output}</span>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>Stage 0{i + 1}</span>
                  <span className="text-blue-600 font-bold">Automatic Sync →</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
