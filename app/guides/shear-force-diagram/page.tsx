import React from 'react';
import GuideTemplate from '@/components/engineering/GuideTemplate';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'How to Draw a Shear Force Diagram (SFD) — Step-by-Step Guide',
  description:
    'Learn how to construct Shear Force Diagrams (SFD). Detailed explanation of static equilibrium, sign conventions, point load jumps, and distributed load slopes.',
  canonicalUrl: '/guides/shear-force-diagram',
});

export default function SfdGuidePage() {
  const takeaways = [
    'Shear force V(x) is the net algebraic sum of all transverse forces acting on either side of a beam cut section.',
    'Point loads create abrupt vertical step jumps equal in magnitude to the concentrated force: ΔV = -P.',
    'Uniform distributed loads (UDL) create a constant downward slope in the SFD: dV/dx = -w.',
    'Bending moment peaks strictly where the shear force diagram crosses zero (V(x) = 0).',
  ];

  const related = [
    {
      title: 'How to Draw Bending Moment Diagrams (BMD)',
      href: '/guides/bending-moment-diagram',
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
      title="How to Draw a Shear Force Diagram (SFD): Step-by-Step Engineering Tutorial"
      category="Structural Mechanics"
      readTime="7 min read"
      lastUpdated="August 2026"
      summary="Master the construction of Shear Force Diagrams (SFD). Learn standard sign conventions, resolve boundary support reactions, and map internal shear curves under point loads, uniform distributed loads, and overhangs."
      keyTakeaways={takeaways}
      relatedGuides={related}
    >
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">1. What is a Shear Force Diagram?</h2>
        <p>
          A <strong>Shear Force Diagram (SFD)</strong> is a continuous engineering plot representing the internal transverse shear force $V(x)$ developed across the longitudinal axis of a structural member. The purpose of an SFD is to allow structural engineers to evaluate maximum shear stresses and ensure the beam will not fail in transverse shear.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">2. Standard Engineering Sign Convention</h2>
        <p>
          Consistency in sign conventions is essential when computing internal forces:
        </p>
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-sm space-y-2">
          <p className="text-blue-700 font-bold">Positive Shear (+V):</p>
          <p className="text-slate-700">
            Produces a clockwise rotational shear couple. (Upward forces to the left of the cut, or downward forces to the right of the cut).
          </p>
          <p className="text-purple-700 font-bold pt-2">Negative Shear (-V):</p>
          <p className="text-slate-700">
            Produces a counter-clockwise rotational shear couple.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">3. The 4-Step Method to Construct an SFD</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
            <h4 className="font-bold text-slate-900 text-sm">Step 1: Determine Support Reactions</h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Apply equations of static equilibrium (∑F_y = 0 and ∑M_A = 0) across the complete Free Body Diagram (FBD).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
            <h4 className="font-bold text-slate-900 text-sm">Step 2: Start from the Left End (x = 0)</h4>
            <p className="text-xs sm:text-sm text-slate-600">
              At $x = 0^-$, the shear force is 0. If an upward reaction $R_A$ exists at the left support, the SFD jumps instantly up by $+R_A$.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
            <h4 className="font-bold text-slate-900 text-sm">Step 3: Move Across Load Zones</h4>
            <p className="text-xs sm:text-sm text-slate-600">
              - In unloaded regions: $V(x)$ remains constant (horizontal flat line).<br />
              - In uniform load (UDL) regions: $V(x)$ decreases linearly with slope $-w$.<br />
              - At concentrated point loads $P$: $V(x)$ takes an abrupt downward step of magnitude $-P$.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
            <h4 className="font-bold text-slate-900 text-sm">Step 4: Verify Closure at the Right End (x = L)</h4>
            <p className="text-xs sm:text-sm text-slate-600">
              The final reaction $R_B$ at the rightmost boundary must bring the shear diagram back exactly to zero ($V = 0$). If it does not close to zero, there is an arithmetic error in the equilibrium calculations.
            </p>
          </div>
        </div>
      </div>
    </GuideTemplate>
  );
}
