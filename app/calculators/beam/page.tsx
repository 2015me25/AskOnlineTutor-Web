import React from 'react';
import CalculatorTemplate from '@/components/engineering/CalculatorTemplate';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'Free Online Beam Calculator — Reactions, SFD, BMD & Deflection',
  description:
    'Calculate beam reactions, shear force diagrams (SFD), bending moment diagrams (BMD), and elastic deflection profiles for point loads, UDL, and applied moments.',
  canonicalUrl: '/calculators/beam',
});

export default function BeamCalculatorPage() {
  const formulas = [
    {
      label: 'Static Equilibrium (Vertical Forces)',
      formula: '∑ F_y = 0 ⟹ R_A + R_B - ∑ P_i - ∫ w(x) dx = 0',
      description: 'Sum of all upward vertical reaction forces equals the sum of applied downward forces.',
    },
    {
      label: 'Static Equilibrium (Moments about A)',
      formula: '∑ M_A = 0 ⟹ R_B · L - ∑ (P_i · x_i) - ∫ w(x)·x dx + ∑ M_k = 0',
      description: 'Moment equilibrium allows direct solution of support reactions for statically determinate systems.',
    },
    {
      label: 'Shear Force Differential Relation',
      formula: 'V(x) = V(0) - ∫ w(x) dx ⟹ dV/dx = -w(x)',
      description: 'The slope of the shear force diagram at any point equals the negative of the distributed load intensity.',
    },
    {
      label: 'Bending Moment Differential Relation',
      formula: 'M(x) = M(0) + ∫ V(x) dx ⟹ dM/dx = V(x)',
      description: 'The slope of the bending moment diagram equals the shear force. Moment peaks occur where V(x) = 0.',
    },
  ];

  const faqs = [
    {
      question: 'How do I calculate reactions for a beam with overhangs?',
      answer:
        'First take the sum of moments about one of the support points (e.g. Support A) to solve for reaction R_B. Then use vertical equilibrium (∑Fy = 0) to solve for R_A. Loads located on the cantilever overhangs will create cantilever moments that reduce or increase midspan sag.',
    },
    {
      question: 'Where does the maximum bending moment occur?',
      answer:
        'Because dM/dx = V(x), the local maximum bending moment strictly occurs at positions where the shear force diagram crosses zero (V(x) = 0) or at points of concentrated load application.',
    },
    {
      question: 'Can this beam calculator handle metric and imperial units?',
      answer:
        'Yes! Beam Master seamlessly converts between SI units (kN, N, m, mm, GPa, mm⁴) and US Customary units (kips, lbs, ft, in, ksi, in⁴).',
    },
  ];

  const related = [
    {
      title: 'Simply Supported Beam Calculator',
      href: '/calculators/simply-supported-beam',
      desc: 'Pinned-roller spans with central point and uniform loads.',
    },
    {
      title: 'Cantilever Beam Calculator',
      href: '/calculators/cantilever-beam',
      desc: 'Fixed-end cantilever analysis with tip deflection formulas.',
    },
    {
      title: 'Bending Moment Diagram (BMD) Tool',
      href: '/calculators/bending-moment',
      desc: 'Plot moment curves, inflection points, and zero-shear crossings.',
    },
  ];

  return (
    <CalculatorTemplate
      title="Beam Calculator"
      badge="GENERAL BEAM ANALYSIS"
      headline="Free Online Beam Calculator"
      description="Analyze simply supported, cantilever, and overhanging beams. Plot exact Shear Force Diagrams (SFD), Bending Moment Diagrams (BMD), and evaluate maximum elastic deflection in seconds."
      primaryFormula="EI · d⁴v/dx⁴ = q(x) ⟹ M(x) = -EI · d²v/dx²"
      formulas={formulas}
      faqs={faqs}
      relatedCalculators={related}
    >
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          How to Calculate Beam Reactions & Diagrams
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Structural beam analysis begins with creating a Free Body Diagram (FBD), resolving boundary reactions via equations of static equilibrium, and integrating internal shear and bending equations across every segment of the span.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-2">
            <span className="text-xs font-bold text-blue-700 uppercase font-mono">Sign Convention</span>
            <h4 className="font-bold text-slate-900 text-sm">Shear Force (V)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Clockwise shearing action (upward force on the left segment, downward on the right segment) is defined as positive (+).
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-200/80 space-y-2">
            <span className="text-xs font-bold text-purple-700 uppercase font-mono">Sign Convention</span>
            <h4 className="font-bold text-slate-900 text-sm">Bending Moment (M)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sagging moment (compression in top fibers, tension in bottom fibers) is defined as positive (+).
            </p>
          </div>
        </div>
      </div>
    </CalculatorTemplate>
  );
}
