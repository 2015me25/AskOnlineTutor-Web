import React from 'react';
import CalculatorTemplate from '@/components/engineering/CalculatorTemplate';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'Simply Supported Beam Calculator — Maximum Moment & Deflection',
  description:
    'Calculate reactions, maximum center moment (wL²/8 or PL/4), midspan deflection (5wL⁴/384EI), shear force diagrams (SFD), and bending moment diagrams (BMD).',
  canonicalUrl: '/calculators/simply-supported-beam',
});

export default function SimplySupportedBeamCalculatorPage() {
  const formulas = [
    {
      label: 'Maximum Bending Moment (Uniform Distributed Load w)',
      formula: 'M_max = (w · L²) / 8',
      description: 'Occurs exactly at midspan (x = L/2) where the shear force crosses zero.',
    },
    {
      label: 'Maximum Midspan Deflection (Uniform Load w)',
      formula: 'δ_max = (5 · w · L⁴) / (384 · E · I)',
      description: 'The standard theoretical formula for central downward displacement under uniform loading.',
    },
    {
      label: 'Maximum Bending Moment (Center Point Load P)',
      formula: 'M_max = (P · L) / 4',
      description: 'Peak sagging moment directly beneath a concentrated load placed at x = L/2.',
    },
    {
      label: 'Maximum Midspan Deflection (Center Point Load P)',
      formula: 'δ_max = (P · L³) / (48 · E · I)',
      description: 'Maximum elastic deflection for a midspan concentrated force.',
    },
  ];

  const faqs = [
    {
      question: 'What is a simply supported beam?',
      answer:
        'A simply supported beam rests on a pinned support at one end (resisting horizontal and vertical movement) and a roller support at the other end (resisting vertical movement only, allowing thermal expansion and axial freedom). Both supports allow free rotation.',
    },
    {
      question: 'Why is the moment zero at the ends of a simply supported beam?',
      answer:
        'Because pin and roller supports cannot resist rotational moments (they are frictionless hinges with no rotational stiffness), the internal bending moment at both extreme boundaries must equal zero: M(0) = 0 and M(L) = 0.',
    },
  ];

  const related = [
    {
      title: 'Bending Moment Diagram (BMD) Tool',
      href: '/calculators/bending-moment',
      desc: 'Understand parabolic moment curves and peak values.',
    },
    {
      title: 'Shear Force Diagram (SFD) Tool',
      href: '/calculators/shear-force',
      desc: 'Calculate support shear jumps and zero crossings.',
    },
    {
      title: 'Beam Deflection Calculator',
      href: '/calculators/deflection',
      desc: 'Evaluate elasticity (E) and cross-section inertia (I).',
    },
  ];

  return (
    <CalculatorTemplate
      title="Simply Supported Beam Calculator"
      badge="PIN-ROLLER MECHANICS"
      headline="Simply Supported Beam Calculator"
      description="Analyze simply supported beams with point loads, uniform distributed loads (UDL), and applied couples. Calculate support reactions, peak midspan moment, and maximum elastic deflection."
      primaryFormula="M_max = (w·L²)/8,  δ_max = (5w·L⁴)/(384EI)"
      formulas={formulas}
      faqs={faqs}
      relatedCalculators={related}
    >
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Standard Load Cases & Closed-Form Solutions
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          For standard symmetric configurations, the reactions are equal (R_A = R_B = wL/2 or P/2). The shear diagram is linear or step-wise, and the bending moment diagram forms a smooth symmetric parabola.
        </p>
      </div>
    </CalculatorTemplate>
  );
}
