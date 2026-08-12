import React from 'react';
import CalculatorTemplate from '@/components/engineering/CalculatorTemplate';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'Cantilever Beam Calculator — Deflection, Slope & Bending Moment',
  description:
    'Free online cantilever beam calculator. Calculate fixed-end support reaction moment, maximum tip deflection (wL⁴/8EI or PL³/3EI), shear force, and bending moment diagrams.',
  canonicalUrl: '/calculators/cantilever-beam',
});

export default function CantileverBeamCalculatorPage() {
  const formulas = [
    {
      label: 'Fixed End Reaction Moment (UDL over full span L)',
      formula: 'M_fixed = - (w · L²) / 2',
      description: 'The fixed wall must resist the entire overturning moment caused by the distributed load.',
    },
    {
      label: 'Maximum Tip Deflection (UDL w)',
      formula: 'δ_max = (w · L⁴) / (8 · E · I)',
      description: 'Peak downward displacement occurring at the free tip of the cantilever under uniform load.',
    },
    {
      label: 'Maximum Tip Deflection (Point Load P at Tip)',
      formula: 'δ_max = (P · L³) / (3 · E · I)',
      description: 'Elastic deflection at x = L produced by a concentrated force at the unsupported tip.',
    },
    {
      label: 'Maximum Tip Slope Angle (Point Load P)',
      formula: 'θ_max = (P · L²) / (2 · E · I)',
      description: 'The rotational slope in radians at the free end of the cantilever.',
    },
  ];

  const faqs = [
    {
      question: 'Why is the bending moment negative in a cantilever beam?',
      answer:
        'A downward load on a cantilever causes hogging (convex bending upward), which places the top fibers in tension and bottom fibers in compression. Under standard engineering sign conventions, hogging is defined as negative moment.',
    },
    {
      question: 'Where is the maximum shear force in a cantilever beam?',
      answer:
        'The maximum shear force occurs at the fixed support wall (x = 0), where the vertical reaction R_A must balance all downward loads applied along the length of the span.',
    },
  ];

  const related = [
    {
      title: 'General Beam Calculator',
      href: '/calculators/beam',
      desc: 'Multi-load beam analysis with customizable support placements.',
    },
    {
      title: 'Beam Deflection Calculator',
      href: '/calculators/deflection',
      desc: 'Macaulay singularity integration and slope curves.',
    },
    {
      title: 'Moment of Inertia Calculator',
      href: '/calculators/moment-of-inertia',
      desc: 'Calculate second moment of area (I) for standard cross-sections.',
    },
  ];

  return (
    <CalculatorTemplate
      title="Cantilever Beam Calculator"
      badge="FIXED SUPPORT ANALYSIS"
      headline="Cantilever Beam Calculator"
      description="Calculate reactions, maximum negative bending moment at the fixed root, and tip deflection for cantilever beams subjected to point loads, uniformly distributed loads (UDL), and tip moments."
      primaryFormula="δ_tip = (w·L⁴) / (8EI) + (P·L³) / (3EI)"
      formulas={formulas}
      faqs={faqs}
      relatedCalculators={related}
    >
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Cantilever Beam Mechanics & Boundary Conditions
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          A cantilever is anchored rigidly at one end (fixed support) and completely free at the opposite end. Because the fixed support resists vertical displacement and rotation, the boundary conditions are:
        </p>

        <div className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs sm:text-sm space-y-1.5 border border-slate-800">
          <p className="text-emerald-400 font-bold">// At Fixed Root (x = 0):</p>
          <p>Deflection v(0) = 0</p>
          <p>Slope θ(0) = dv/dx = 0</p>
          <p className="text-purple-400 font-bold pt-2">// At Free End (x = L):</p>
          <p>Shear Force V(L) = 0 (or concentrated tip load P)</p>
          <p>Bending Moment M(L) = 0 (or applied tip moment M₀)</p>
        </div>
      </div>
    </CalculatorTemplate>
  );
}
