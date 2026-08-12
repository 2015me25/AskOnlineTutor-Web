'use client';

import React from 'react';
import Link from 'next/link';
import { Calculator, BookOpen, ArrowRight, ExternalLink } from 'lucide-react';

export default function ResourcesSection() {
  const portalUrl = 'https://app.askonlinetutor.com/beam';

  const calculators = [
    { name: 'Beam Deflection Calculator', path: portalUrl, desc: 'Calculate max deflection v_max for any beam span' },
    { name: 'Simply Supported Beam Calculator', path: portalUrl, desc: 'Reactions, midspan deflection and peak moment' },
    { name: 'Cantilever Beam Calculator', path: portalUrl, desc: 'Fixed support reactions with UDL and point loads' },
    { name: 'Shear Force Diagram (SFD) Tool', path: portalUrl, desc: 'Plot shear force jumps with exact equations' },
    { name: 'Bending Moment Diagram (BMD) Tool', path: portalUrl, desc: 'Instant inflection points and zero-shear crossings' },
    { name: 'Moment of Inertia Calculator', path: '/resources', desc: 'Calculate Ix, Iy for I-beams and custom sections' },
  ];

  const guides = [
    {
      title: 'How to Draw a Shear Force Diagram (Step-by-Step)',
      desc: 'Learn how to construct SFD curves from static equilibrium, sign conventions, and concentrated forces.',
      category: 'Structural Mechanics',
      readTime: '6 min read',
    },
    {
      title: 'How to Calculate Beam Deflection with Macaulay’s Method',
      desc: 'A comprehensive guide on singularity brackets, double integration, and evaluating constants of integration.',
      category: 'Advanced Analysis',
      readTime: '9 min read',
    },
    {
      title: 'What Is Moment of Inertia and How Does It Affect Bending?',
      desc: 'Understand the second moment of area (I), parallel axis theorem, and flexural rigidity (EI).',
      category: 'Section Properties',
      readTime: '5 min read',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
            <span>ENGINEERING RESOURCES & SEO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Free Calculators & Engineering Guides
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Strengthen your theoretical foundations with verified structural formulas and interactive calculation tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Calculators Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <Calculator className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-slate-900 text-lg">Interactive Calculators</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {calculators.map((c, i) => (
                <a
                  key={i}
                  href={c.path}
                  className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-sm transition-all group flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                      <span>{c.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 shrink-0" />
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">{c.desc}</p>
                  </div>
                  <span className="text-[11px] font-semibold text-blue-600 mt-3 block">Launch tool →</span>
                </a>
              ))}
            </div>
          </div>

          {/* Guides Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              <h3 className="font-bold text-slate-900 text-lg">Technical Articles & Guides</h3>
            </div>

            <div className="space-y-3">
              {guides.map((g, i) => (
                <Link
                  key={i}
                  href="/resources"
                  className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-indigo-300 hover:shadow-sm transition-all block group"
                >
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 mb-1.5">
                    <span className="text-indigo-600 uppercase">{g.category}</span>
                    <span>{g.readTime}</span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {g.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{g.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
