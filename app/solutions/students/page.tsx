import React from 'react';
import Link from 'next/link';
import { GraduationCap, CheckCircle2, ArrowRight, BookOpen, ShieldCheck, Sparkles } from 'lucide-react';
import { constructMetadata } from '@/lib/seo/metadata';
import { APP_URLS } from '@/lib/constants/links';

export const metadata = constructMetadata({
  title: 'Engineering Analysis for Students — Statics & Mechanics Homework Helper',
  description:
    'Master statics and mechanics of materials with transparent step-by-step mathematical derivations, interactive SFD and BMD plots, and verified solutions.',
  canonicalUrl: '/solutions/students',
});

export default function StudentsSolutionPage() {
  const benefits = [
    {
      title: 'Never Stare at a Confusing Answer Key Again',
      desc: 'Get full 11-step LaTeX derivations showing every static equilibrium equation, free body diagram, and singularity polynomial evaluated step-by-step.',
    },
    {
      title: 'Interactive Real-Time Understanding',
      desc: 'Drag load points and change support configurations to instantly see how shear jumps, zero-crossings, and inflection points respond in real time.',
    },
    {
      title: 'Verify Exam & Homework Problems with Confidence',
      desc: 'Double-check your handwritten calculations against our 414 regression-tested analytical solver before turning in assignments.',
    },
    {
      title: 'Organized Cloud Workspace',
      desc: 'Save and organize beam setups by course, semester, or homework assignment for instant review before finals.',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="relative pt-14 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-blue-500/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>FOR ENGINEERING STUDENTS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Understand the Calculation, <br />
            <span className="text-blue-400">Not Just the Answer.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Master statics, mechanics of materials, and structural analysis with transparent mathematical derivations, interactive curves, and verified solution steps.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <a
              href={APP_URLS.beamMaster}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-500/25 transition-all"
            >
              <span>Start Learning Free</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors"
            >
              <span>Student Pricing Plans</span>
            </Link>
          </div>

          <div className="flex items-center gap-6 pt-2 text-xs text-slate-400 font-medium justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              414/414 solver tests passing
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              Free plan forever available
            </span>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900">Why Students Love AskOnlineTutor</h2>
          <p className="text-slate-600 text-sm">Designed specifically around how engineering concepts are taught and learned.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Feature 0{i + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">{b.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
