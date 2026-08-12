import React from 'react';
import GuideTemplate from '@/components/engineering/GuideTemplate';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'Macaulay’s Method for Beam Deflection — Singularity Brackets & Double Integration',
  description:
    'Comprehensive tutorial on Macaulay’s singularity method for beam deflection. Learn singularity brackets, boundary constants evaluation, and double integration.',
  canonicalUrl: '/guides/beam-deflection',
});

export default function BeamDeflectionGuidePage() {
  const takeaways = [
    'Euler-Bernoulli beam theory relates moment to curvature: EI · (d²v/dx²) = M(x).',
    'Macaulay’s singularity brackets ⟨x - a⟩ⁿ allow writing a single global moment equation for multi-load spans.',
    'Brackets are evaluated as (x - a)ⁿ only when x ≥ a; when x < a, the bracket term equals 0.',
    'Only two constants of integration (C₁ and C₂) are needed for the entire beam length.',
  ];

  const related = [
    {
      title: 'How to Draw Shear Force Diagrams (SFD)',
      href: '/guides/shear-force-diagram',
      category: 'Structural Mechanics',
    },
    {
      title: 'Moment of Inertia & Parallel Axis Theorem',
      href: '/guides/moment-of-inertia',
      category: 'Section Properties',
    },
  ];

  return (
    <GuideTemplate
      title="Macaulay’s Method for Beam Deflection: Singularity Brackets & Derivations"
      category="Advanced Analysis"
      readTime="10 min read"
      lastUpdated="August 2026"
      summary="Understand the powerful Macaulay singularity function method for calculating beam slope and deflection profiles without piecewise domain partitioning."
      keyTakeaways={takeaways}
      relatedGuides={related}
    >
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">1. Why Macaulay’s Method is Superior</h2>
        <p>
          In traditional double integration, each load discontinuity creates a new span segment, producing 2 constants of integration per segment. For a beam with 3 loads, this requires solving a system of 6 to 8 simultaneous boundary equations. <strong>Macaulay’s method</strong> reduces the entire problem to a single continuous equation governed by just two global constants: $C_1$ and $C_2$.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">2. The Singularity Bracket Definition</h2>
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-sm space-y-2">
          <p className="font-bold text-slate-900">⟨x - a⟩ⁿ = (x - a)ⁿ   for x ≥ a</p>
          <p className="font-bold text-slate-400">⟨x - a⟩ⁿ = 0           for x &lt; a</p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">3. Step-by-Step Integration Rules</h2>
        <p>
          When integrating Macaulay terms, integrate the entire bracket as a single entity:
        </p>
        <div className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-sm space-y-2">
          <p>∫ ⟨x - a⟩¹ dx = ½ ⟨x - a⟩²</p>
          <p>∫ ⟨x - a⟩² dx = ⅓ ⟨x - a⟩³</p>
          <p>∫ ⟨x - a⟩³ dx = ¼ ⟨x - a⟩⁴</p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">4. Boundary Conditions & Solving Constants</h2>
        <p>
          Substitute support boundary coordinates into the global deflection equation EI · v(x):
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Pinned Support at x = 0:</strong> v(0) = 0 ⟹ C₂ = 0.</li>
          <li><strong>Roller Support at x = L:</strong> v(L) = 0 ⟹ solve directly for C₁.</li>
        </ul>
      </div>
    </GuideTemplate>
  );
}
