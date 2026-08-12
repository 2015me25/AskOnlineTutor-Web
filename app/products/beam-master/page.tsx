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
  ShieldCheck,
  Play,
} from 'lucide-react';
import { constructMetadata } from '@/lib/seo/metadata';
import { APP_URLS } from '@/lib/constants/links';
import InteractiveBeamMockup from '@/components/engineering/InteractiveBeamMockup';

export const metadata = constructMetadata({
  title: 'Beam Master — Advanced Beam Analysis & Step-by-Step Solver',
  description:
    'Beam Master is the flagship beam analysis software by AskOnlineTutor. Calculate reactions, SFD, BMD, slope & deflection profiles, and export high-resolution PDF calculation sheets.',
  canonicalUrl: '/products/beam-master',
});

export default function BeamMasterProductPage() {
  const capabilities = [
    {
      title: 'Advanced Determinate & Indeterminate Solving',
      desc: 'Solves simply supported, cantilever, propped cantilever, and continuous multi-span beams using stiffness formulations and singularity integration.',
      icon: Activity,
    },
    {
      title: 'Diverse Load & Boundary Types',
      desc: 'Supports point loads, uniform distributed loads (UDL), triangular/trapezoidal varying loads (UVL), point couples, internal moment hinges, and elastic spring supports.',
      icon: Layers,
    },
    {
      title: 'Macaulay’s Deflection Integration',
      desc: 'Integrates beam curvature twice using Macaulay singularity brackets to compute exact vertical displacement v(x) and rotation θ(x) across any point.',
      icon: Zap,
    },
    {
      title: 'Transparent 11-Step Mathematical Proofs',
      desc: 'Step-by-step LaTeX derivations showing static equilibrium equations, boundary value evaluations, and internal polynomial expressions.',
      icon: BookOpen,
    },
    {
      title: 'Publication-Ready PDF Reports',
      desc: 'Generate complete calculation packets featuring high-resolution vector diagrams, summary tables, equations, and customizable project headers.',
      icon: FileSpreadsheet,
    },
    {
      title: 'Cross-Platform Cloud Sync',
      desc: 'Access, edit, duplicate, and share structural beam models across desktop, tablet, and mobile browsers instantly.',
      icon: Cpu,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-14 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-blue-500/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold font-mono">
              <span>FLAGSHIP STRUCTURAL SOLVER</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Beam Master
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Analytical and stiffness-based beam analysis with step-by-step solutions. Calculate reaction forces, plot exact shear and moment curves, and generate client-ready PDF calculation packages.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={APP_URLS.beamMaster}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-500/25 hover:scale-[1.02] transition-all"
              >
                <span>Launch Beam Master Free</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors"
              >
                <span>View Plans & Pricing</span>
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-2 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                414/414 regression tests passing
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                No installation required
              </span>
            </div>
          </div>

          {/* Interactive Workstation Mockup */}
          <div className="mt-8">
            <InteractiveBeamMockup />
          </div>
        </div>
      </section>

      {/* Deep Dive Capabilities */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold font-mono">
            <span>ENGINEERING SPECIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built for Mathematical Precision
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every calculation routine in Beam Master is built on rigorous structural mechanics principles and cross-validated against 414 regression test cases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Ready to experience modern structural beam analysis?
            </h3>
            <p className="text-sm text-slate-300">
              Start with free determinate beam analysis or unlock complete 11-step LaTeX walkthroughs and high-resolution PDF exports with Pro.
            </p>
          </div>
          <a
            href={APP_URLS.beamMaster}
            className="shrink-0 px-8 py-4 rounded-xl text-base font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/25"
          >
            <span>Open Beam Master</span>
          </a>
        </div>
      </section>
    </div>
  );
}
