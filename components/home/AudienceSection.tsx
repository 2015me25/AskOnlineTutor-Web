'use client';

import React, { useState } from 'react';
import { GraduationCap, Briefcase, School, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AudienceSection() {
  const [activeTab, setActiveTab] = useState<'students' | 'engineers' | 'educators'>('students');

  const data = {
    students: {
      headline: 'Understand the calculation, not just the answer.',
      sub: 'Master statics, mechanics of materials, and structural analysis with transparent mathematical derivations and interactive diagrams.',
      benefits: [
        'Step-by-step equilibrium and Macaulay derivations',
        'Interactive real-time SFD & BMD curve changes',
        'Verify homework solutions and prepare for exams with confidence',
        'Cloud project history to revisit previous course problems',
      ],
      tag: 'Built for Engineering Students',
    },
    engineers: {
      headline: 'Get reliable calculations when you need them.',
      sub: 'Rapidly verify structural designs, check boundary actions, and generate professional PDF calculation packages for clients.',
      benefits: [
        'Deterministic, 414+ verified analytical solver engine',
        'Reusable project templates and flexible boundary conditions',
        'Export high-resolution calculation sheets with vector diagrams',
        'Seamless SI and US Customary unit conversions',
      ],
      tag: 'Built for Practicing Engineers',
    },
    educators: {
      headline: 'Demonstrate engineering concepts visually in the classroom.',
      sub: 'Turn abstract differential equations and singularity functions into live, interactive classroom demonstrations that students grasp immediately.',
      benefits: [
        'Project interactive beams live on lecture hall projectors',
        'Create custom homework problem sets with verified solution keys',
        'Generate structured LaTeX calculation handouts with one click',
        'Departmental and lab license options available',
      ],
      tag: 'Built for Universities & Faculty',
    },
  };

  const current = data[activeTab];

  return (
    <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
            <span>TAILORED SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Designed for Every Stage of Engineering
          </h2>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-xl bg-white border border-slate-200 shadow-sm gap-1">
            <button
              onClick={() => setActiveTab('students')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'students'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Students</span>
            </button>

            <button
              onClick={() => setActiveTab('engineers')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'engineers'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Engineers</span>
            </button>

            <button
              onClick={() => setActiveTab('educators')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'educators'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <School className="w-4 h-4" />
              <span>Educators</span>
            </button>
          </div>
        </div>

        {/* Tab Content Box */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-200/50">
          <span className="text-xs font-extrabold text-blue-600 uppercase tracking-wider mb-2 block">
            {current.tag}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 leading-tight">
            {current.headline}
          </h3>
          <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
            {current.sub}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 mb-8">
            {current.benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700 leading-snug">{b}</span>
              </div>
            ))}
          </div>

          <div>
            <a
              href="https://app.askonlinetutor.com/beam"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition-all"
            >
              <span>Explore for {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
