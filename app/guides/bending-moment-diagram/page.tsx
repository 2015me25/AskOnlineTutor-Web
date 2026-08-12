import React from 'react';
import GuideTemplate from '@/components/engineering/GuideTemplate';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'How to Draw Bending Moment Diagrams (BMD) — Inflection Points & Calculus',
  description:
    'Comprehensive engineering guide on constructing Bending Moment Diagrams (BMD). Learn calculus relationships, inflection points, and concentrated couple discontinuities.',
  canonicalUrl: '/guides/bending-moment-diagram',
});

export default function BmdGuidePage() {
  const takeaways = [
    'The slope of the Bending Moment Diagram is equal to the Shear Force: dM/dx = V(x).',
    'The change in bending moment between two coordinates equals the area under the shear force curve.',
    'Maximum or minimum bending moments occur where the shear force crosses the zero axis (V = 0).',
    'Inflection points (contraflexure) occur where M(x) = 0 and curvature changes from sagging to hogging.',
  ];

  const related = [
    {
      title: 'How to Draw Shear Force Diagrams (SFD)',
      href: '/guides/shear-force-diagram',
      category: 'Structural Mechanics',
    },
    {
      title: 'Macaulay’s Method for Beam Deflection',
      href: '/guides/beam-deflection',
      category: 'Advanced Analysis',
    },
  ];

  return (
    <GuideTemplate
      title="How to Draw a Bending Moment Diagram (BMD): Calculus, Areas & Zero-Crossings"
      category="Structural Mechanics"
      readTime="8 min read"
      lastUpdated="August 2026"
      summary="Master the construction of Bending Moment Diagrams (BMD). Understand the fundamental calculus link between shear and moment, calculate inflection points, and locate peak stresses."
      keyTakeaways={takeaways}
      relatedGuides={related}
    >
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">1. Definition of Bending Moment</h2>
        <p>
          The <strong>Bending Moment $M(x)$</strong> is the internal reaction couple that develops within a beam cross-section to resist external bending actions. Bending moments create normal flexural stresses according to the elastic flexure formula:
        </p>
        <div className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-sm text-center">
          σ(y) = (M · y) / I
        </div>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">2. The Calculus Connection: dM/dx = V(x)</h2>
        <p>
          Because the derivative of the bending moment is the shear force:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Where $V(x) &gt; 0$, the BMD has a positive upward slope.</li>
          <li>Where $V(x) &lt; 0$, the BMD has a negative downward slope.</li>
          <li>Where $V(x) = 0$, the BMD has a horizontal tangent slope ($dM/dx = 0$), which marks a local peak moment.</li>
          <li>Under a uniform load $w$, the SFD is degree 1 (linear), which makes the BMD degree 2 (parabolic).</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">3. Points of Contraflexure (Inflection Points)</h2>
        <p>
          A point of contraflexure is a location where the bending moment vanishes ($M = 0$) and the beam curvature changes sense. In continuous or overhanging beams, identifying inflection points is vital for determining where reinforcement steel must transition from the bottom face (sagging zone) to the top face (hogging zone).
        </p>
      </div>
    </GuideTemplate>
  );
}
