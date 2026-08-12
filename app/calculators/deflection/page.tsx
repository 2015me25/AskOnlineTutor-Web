import React from 'react';
import CalculatorTemplate from '@/components/engineering/CalculatorTemplate';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'Beam Deflection Calculator — Euler-Bernoulli & Macaulay Method',
  description:
    'Free online beam deflection calculator. Calculate elastic displacement v(x), slope θ(x), maximum sag, and evaluate Macaulay singularity constants of integration.',
  canonicalUrl: '/calculators/deflection',
});

export default function BeamDeflectionCalculatorPage() {
  const formulas = [
    {
      label: 'Euler-Bernoulli Beam Equation',
      formula: 'EI · (d²v / dx²) = M(x)',
      description: 'The curvature of the elastic beam is directly proportional to internal bending moment and inversely proportional to flexural rigidity EI.',
    },
    {
      label: 'Slope Equation (First Integration)',
      formula: 'EI · θ(x) = EI · (dv/dx) = ∫ M(x) dx + C₁',
      description: 'Integrating bending moment yields the rotational slope equation with constant of integration C₁.',
    },
    {
      label: 'Deflection Equation (Second Integration)',
      formula: 'EI · v(x) = ∬ M(x) dx dx + C₁ · x + C₂',
      description: 'Second integration yields vertical displacement v(x) with boundary constants C₁ and C₂.',
    },
    {
      label: 'Macaulay Bracket Singularity Rule',
      formula: '⟨x - a⟩ⁿ = (x - a)ⁿ if x ≥ a, else 0  (for n ≥ 0)',
      description: 'Enables expressing discontinuous point and distributed loads across the entire span in a single continuous equation.',
    },
  ];

  const faqs = [
    {
      question: 'What is flexural rigidity (EI)?',
      answer:
        'Flexural rigidity is the product of Young’s Modulus of Elasticity (E) and the Second Moment of Area (I). It measures the beam’s resistance to bending deflection. Higher EI values result in significantly smaller deflections.',
    },
    {
      question: 'How are constants of integration C₁ and C₂ solved?',
      answer:
        'Constants C₁ and C₂ are evaluated by substituting known boundary conditions (e.g. at pin/roller supports, deflection v = 0; at fixed supports, slope θ = 0 and deflection v = 0).',
    },
  ];

  const related = [
    {
      title: 'Macaulay’s Method Guide',
      href: '/guides/beam-deflection',
      desc: 'Step-by-step mathematical guide to singularity bracket integration.',
    },
    {
      title: 'Moment of Inertia Calculator',
      href: '/calculators/moment-of-inertia',
      desc: 'Determine cross-section moment of inertia (I) for standard shapes.',
    },
    {
      title: 'General Beam Calculator',
      href: '/calculators/beam',
      desc: 'Plot deflection curves interactively in real time.',
    },
  ];

  return (
    <CalculatorTemplate
      title="Beam Deflection Calculator"
      badge="ELASTIC CURVE INTEGRATION"
      headline="Beam Deflection Calculator"
      description="Compute elastic deflection profiles v(x), slope distributions θ(x), and peak displacement coordinates using Euler-Bernoulli double integration and Macaulay singularity brackets."
      primaryFormula="EI · v(x) = ∬ M(x) dx dx + C₁x + C₂"
      formulas={formulas}
      faqs={faqs}
      relatedCalculators={related}
    >
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          How Deflection is Derived
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Euler-Bernoulli beam theory governs the relationship between transverse loading $q(x)$, shear force $V(x)$, bending moment $M(x)$, slope $\theta(x)$, and vertical deflection $v(x)$:
        </p>

        <div className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs sm:text-sm space-y-2 border border-slate-800">
          <p className="text-blue-400">1. Load: q(x)</p>
          <p className="text-emerald-400">2. Shear: V(x) = -∫ q(x) dx + C_v</p>
          <p className="text-purple-400">3. Moment: M(x) = ∫ V(x) dx + C_m</p>
          <p className="text-amber-400">4. Slope: EI·θ(x) = ∫ M(x) dx + C₁</p>
          <p className="text-rose-400">5. Deflection: EI·v(x) = ∫ EI·θ(x) dx + C₂</p>
        </div>
      </div>
    </CalculatorTemplate>
  );
}
