import React from 'react';
import GuideTemplate from '@/components/engineering/GuideTemplate';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'Moment of Inertia & Parallel Axis Theorem — Cross-Section Guide',
  description:
    'Engineering guide to calculating centroid (x̄, ȳ), second moment of area (Ix, Iy), section modulus, and applying the parallel axis theorem to composite shapes.',
  canonicalUrl: '/guides/moment-of-inertia',
});

export default function MomentOfInertiaGuidePage() {
  const takeaways = [
    'The Second Moment of Area (I) determines a beam cross-section’s resistance to flexural bending.',
    'Centroid ȳ is the area-weighted center of gravity: ȳ = (∑ A_i · y_i) / (∑ A_i).',
    'The Parallel Axis Theorem shifts inertia from local centroidal axes to the global neutral axis: I = I_c + A·d².',
    'I-beams place the vast majority of cross-sectional area in the outer flanges, maximizing I for minimal steel weight.',
  ];

  const related = [
    {
      title: 'Macaulay’s Method for Beam Deflection',
      href: '/guides/beam-deflection',
      category: 'Advanced Analysis',
    },
    {
      title: 'How to Draw Bending Moment Diagrams (BMD)',
      href: '/guides/bending-moment-diagram',
      category: 'Structural Mechanics',
    },
  ];

  return (
    <GuideTemplate
      title="Moment of Inertia & Parallel Axis Theorem: The Complete Engineering Guide"
      category="Section Properties"
      readTime="9 min read"
      lastUpdated="August 2026"
      summary="Master the mathematics of cross-sectional properties. Learn how to locate centroids, calculate second moments of area for built-up sections, and understand flexural stiffness."
      keyTakeaways={takeaways}
      relatedGuides={related}
    >
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">1. What is the Second Moment of Area?</h2>
        <p>
          In structural engineering, the <strong>Second Moment of Area ($I$)</strong> (frequently referred to as the area moment of inertia) measures how the geometry of a cross-section resists bending moments. The mathematical definition about the x-axis is:
        </p>
        <div className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-sm text-center">
          I_x = ∬ y² dA
        </div>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">2. The Parallel Axis Theorem (Steiner’s Theorem)</h2>
        <p>
          When a composite shape is composed of multiple sub-elements whose individual centroids do not coincide with the overall neutral axis of the beam, use the Parallel Axis Theorem:
        </p>
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-sm space-y-2">
          <p className="font-bold text-blue-700">I_total = ∑ [ I_local + A_i · d_i² ]</p>
          <p className="text-slate-600 text-xs">
            where d_i = |y_i - ȳ| is the perpendicular distance between the sub-element centroid and the overall global centroid ȳ.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">3. Why the I-Beam is Structurally Optimal</h2>
        <p>
          Because of the squared distance term ($y^2$ or $d^2$), material placed further from the neutral axis contributes exponentially more to bending stiffness. By concentrating steel in top and bottom flanges connected by a thin web, the I-beam maximizes $I$ while drastically reducing total weight and cost.
        </p>
      </div>
    </GuideTemplate>
  );
}
