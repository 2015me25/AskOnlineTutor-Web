import React from 'react';
import CalculatorTemplate from '@/components/engineering/CalculatorTemplate';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'Shear Force Diagram (SFD) Calculator & Jump Analysis',
  description:
    'Free online shear force diagram (SFD) calculator. Calculate internal shear forces, identify point load jump discontinuities, and find zero-shear crossings with verified equations.',
  canonicalUrl: '/calculators/shear-force',
});

export default function ShearForceCalculatorPage() {
  const formulas = [
    {
      label: 'Shear-Load Differential Equation',
      formula: 'dV/dx = -w(x)',
      description: 'The rate of change (slope) of the shear diagram equals the negative distributed load intensity.',
    },
    {
      label: 'Concentrated Point Load Discontinuity (Jump)',
      formula: 'V(x⁺) - V(x⁻) = - P',
      description: 'A downward point load causes an abrupt step drop equal to the force magnitude P in the SFD.',
    },
    {
      label: 'Support Upward Reaction Jump',
      formula: 'V(x⁺) - V(x⁻) = + R',
      description: 'An upward reaction force causes an instant vertical step rise equal to reaction R.',
    },
    {
      label: 'Uniform Distributed Load (UDL) Slope',
      formula: 'V(x) = V₀ - w · x',
      description: 'A uniform load creates a constant downward sloping linear shear force curve with slope -w.',
    },
  ];

  const faqs = [
    {
      question: 'What is a shear force jump?',
      answer:
        'A shear force jump is a mathematical step discontinuity in the shear force diagram caused by a concentrated force (such as a point load or support reaction). Because the force acts over an infinitesimal length, the internal shear must change instantly to satisfy equilibrium.',
    },
    {
      question: 'Why does zero shear indicate maximum bending moment?',
      answer:
        'From calculus, the maximum of a function occurs where its first derivative equals zero. Since dM/dx = V(x), when V(x) = 0, the tangent slope of the bending moment diagram is horizontal, indicating a local peak or trough in moment.',
    },
  ];

  const related = [
    {
      title: 'Bending Moment Diagram (BMD) Tool',
      href: '/calculators/bending-moment',
      desc: 'See how shear diagrams integrate directly into bending curves.',
    },
    {
      title: 'How to Draw SFD Guide',
      href: '/guides/shear-force-diagram',
      desc: 'Step-by-step tutorial on calculating shear jumps and drawing curves.',
    },
    {
      title: 'General Beam Calculator',
      href: '/calculators/beam',
      desc: 'Interactive SFD and BMD visualizer.',
    },
  ];

  return (
    <CalculatorTemplate
      title="Shear Force Calculator"
      badge="TRANSVERSE FORCE SOLVER"
      headline="Shear Force Diagram (SFD) Calculator"
      description="Calculate internal transverse shear forces along any beam span. Identify point load jump discontinuities, support reactions, and locate zero-shear crossings."
      primaryFormula="dV(x)/dx = -w(x) ⟹ V(x) = V₀ - ∫ w(x) dx"
      formulas={formulas}
      faqs={faqs}
      relatedCalculators={related}
    >
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          How Shear Force Curves Behave
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          The internal shear force $V(x)$ represents the total algebraic sum of vertical forces acting on one side of a cut section. Under no distributed load, $V(x)$ remains strictly horizontal (constant). Under a uniform load $w$, it slopes downward linearly.
        </p>
      </div>
    </CalculatorTemplate>
  );
}
