'use client';

import React from 'react';
import { Activity, Layers, Disc, View, Flame, ArrowRight, CheckCircle2 } from 'lucide-react';
import { APP_URLS } from '@/lib/constants/links';

export default function EngineeringSuite() {
  const apps = [
    {
      id: 'beam-master',
      title: 'Beam Master',
      status: 'LIVE',
      badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      tagline: '1D Continuous Beam & Deflection Solver',
      desc: 'Analytical and stiffness-based continuous beam solver with 414/414 passing tests. Handles angled loads, internal hinges, piecewise cut sections, and 11-step LaTeX derivations.',
      icon: Activity,
      iconColor: 'text-blue-600 bg-blue-100',
      image: '/stitch/a_high_fidelity_clean_ui_mockup_of_a_pro.png',
      actionText: 'Open Beam Master',
      actionHref: APP_URLS.beamMaster,
      isLive: true,
      features: [
        'Point, UDL, UVL & Angled Loads',
        'Internal Hinges & Multi-Span Supports',
        'Macaulay & Global Stiffness Engine',
        '414 Verified Regression Tests',
      ],
    },
    {
      id: 'mohr-master',
      title: 'Mohr Master',
      status: 'LIVE APP',
      badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      tagline: "Plane Stress & Mohr's Circle Calculator",
      desc: 'Interactive 2D plane stress transformation engine. Calculates principal stresses (σ₁, σ₂), maximum in-plane shear (τ_max), and synchronizes rotating stress elements in real time.',
      icon: Disc,
      iconColor: 'text-indigo-600 bg-indigo-100',
      image: '/stitch/a_high_fidelity_clean_ui_mockup_of_a_pro.png',
      actionText: 'View Details',
      actionHref: '/products#mohr-master',
      isLive: true,
      features: [
        'Principal Stresses & Principal Angles',
        'Real-Time Rotating Stress Element',
        'Hydrostatic & Pure Shear Edge Cases',
        '7-Step Educational Proof Breakdown',
      ],
    },
    {
      id: 'truss-master',
      title: 'Truss Master',
      status: 'IN DEVELOPMENT',
      badgeClass: 'bg-amber-100 text-amber-800 border-amber-300',
      tagline: '2D Planar Truss Analysis Platform',
      desc: 'Hybrid 2D truss engine combining a 100% accurate global stiffness matrix backend with step-by-step Method of Joints and Method of Sections derivations.',
      icon: Layers,
      iconColor: 'text-teal-600 bg-teal-100',
      image: '/stitch/a_technical_engineering_visualization_of.png',
      actionText: 'View Architecture',
      actionHref: '/products#truss-master',
      isLive: false,
      features: [
        'Pratt, Warren, Howe & Fink Templates',
        'Automated Determinacy (m + r = 2j)',
        'Zero-Force Member Detection Rules',
        'Tension vs Compression Visual Coding',
      ],
    },
    {
      id: 'section-master',
      title: 'Section Properties (ZED 2)',
      status: 'ENGINE VERIFIED',
      badgeClass: 'bg-blue-100 text-blue-800 border-blue-300',
      tagline: "Exact Green's Theorem Geometric Engine",
      desc: "Clean-room cross-section calculator using Green's theorem and Kahan compensated summation. Verified to 10⁻⁹ precision on primitive geometry and 10⁻⁶ off-origin.",
      icon: View,
      iconColor: 'text-purple-600 bg-purple-100',
      image: '/stitch/a_technical_engineering_visualization_fo.png',
      actionText: 'View Specification',
      actionHref: '/products#section-master',
      isLive: false,
      features: [
        "Exact Green's Theorem Contour Integrals",
        'Kahan Compensated Summation (10⁻⁹ Tol)',
        'CW/CCW Winding-Robust Holes',
        'AISC Shapes & Built-Up Sections',
      ],
    },
    {
      id: 'thermo-core',
      title: 'ThermoCore',
      status: '88/88 BENCHMARKS',
      badgeClass: 'bg-rose-100 text-rose-800 border-rose-300',
      tagline: 'Tiered Thermodynamics & Cycle Engine',
      desc: 'High-performance thermodynamics backend powered by CoolProp 7.2.0 with 88/88 benchmarked problems across state properties, energy balances, Rankine/Brayton cycles, and transient CVs.',
      icon: Flame,
      iconColor: 'text-rose-600 bg-rose-100',
      image: '/stitch/a_technical_engineering_visualization_of.png',
      actionText: 'View Benchmarks',
      actionHref: '/products#thermo-core',
      isLive: false,
      features: [
        'CoolProp 7.2.0 High-Accuracy Fluid States',
        'Rankine, Brayton, Otto & Diesel Cycles',
        'Transient & Unsteady Control Volumes',
        'Deterministic ParseValidator Pipeline',
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold font-mono">
            <span>ENGINEERING SUITE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Real Engineering Solvers. Verified Accuracy.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our purpose-built engineering platform spans structural mechanics, stress transformations, section properties, and thermodynamics — backed by thousands of regression tests and benchmarked proofs.
          </p>
        </div>

        {/* Suite Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, i) => {
            const Icon = app.icon;
            return (
              <div
                key={i}
                className={`bg-white rounded-3xl p-6 border transition-all flex flex-col justify-between overflow-hidden group ${
                  app.isLive
                    ? 'border-blue-300 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:border-blue-500'
                    : 'border-slate-200/80 shadow-sm opacity-95 hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${app.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border font-mono ${app.badgeClass}`}>
                      {app.status}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-slate-900 mb-0.5">{app.title}</h3>
                  <p className="text-xs font-semibold text-blue-600 mb-2">{app.tagline}</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{app.desc}</p>

                  {/* Visual Preview */}
                  {app.image && (
                    <div className="mb-4 rounded-xl overflow-hidden border border-slate-100 bg-slate-50 relative aspect-[16/10]">
                      <img
                        src={app.image}
                        alt={`${app.title} preview`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Feature Bullets */}
                  <div className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                    {app.features.map((feat, fi) => (
                      <div key={fi} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div>
                  {app.isLive ? (
                    <a
                      href={app.actionHref}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm"
                    >
                      <span>{app.actionText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <a
                      href={app.actionHref}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-center text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-colors"
                    >
                      <span>{app.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
