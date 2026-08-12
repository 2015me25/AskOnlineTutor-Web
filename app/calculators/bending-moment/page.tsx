import React from 'react';
import CalculatorTemplate from '@/components/engineering/CalculatorTemplate';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'Bending Moment Diagram (BMD) Calculator & Theory Tool',
  description:
    'Free online bending moment diagram (BMD) calculator. Calculate internal moments, find maximum bending moment locations, inflection points (points of contraflexure), and plot exact curves.',
  canonicalUrl: '/calculators/bending-moment',
});

export default function BendingMomentCalculatorPage() {
  const formulas = [
    {
      label: 'Fundamental Slope Relation',
      formula: 'dM/dx = V(x)',
      description: 'The derivative (slope) of the bending moment diagram at any point is equal to the value of the shear force.',
    },
    {
      label: 'Area Integration Law',
      formula: 'M(x₂) - M(x₁) = ∫[x₁ to x₂] V(x) dx',
      description: 'The change in bending moment between two points equals the area under the shear force diagram.',
    },
    {
      label: 'Point of Inflection (Contraflexure)',
      formula: 'M(x) = 0  (with curvature reversal)',
      description: 'The coordinate along the beam where the moment changes sign from sagging (+) to hogging (-).',
    },
    {
      label: 'Point Moment Discontinuity',
      formula: 'M(x⁺) - M(x⁻) = - M_applied',
      description: 'An applied external concentrated couple causes a vertical step jump in the bending moment diagram.',
    },
  ];

  const faqs = [
    {
      question: 'How do I locate the exact position of maximum bending moment?',
      answer:
        'Because dM/dx = V(x), set the shear force equation V(x) = 0 and solve for x. Substitute this x-coordinate back into the bending moment equation M(x) to determine the peak numerical magnitude.',
    },
    {
      question: 'What is a point of contraflexure (inflection point)?',
      answer:
        'A point of contraflexure occurs where the bending moment diagram crosses the zero axis (M = 0). At this point, the beam curvature transitions from convex to concave (or vice versa), and the internal flexural stress in the fibers is zero.',
    },
  ];

  const related = [
    {
      title: 'Shear Force Diagram (SFD) Tool',
      href: '/calculators/shear-force',
      desc: 'Understand how shear jumps dictate bending curvature.',
    },
    {
      title: 'General Beam Calculator',
      href: '/calculators/beam',
      desc: 'Complete multi-load continuous beam calculations.',
    },
    {
      title: 'How to Draw BMD Guide',
      href: '/guides/bending-moment-diagram',
      desc: 'Comprehensive step-by-step tutorial on constructing BMDs.',
    },
  ];

  return (
    <CalculatorTemplate
      title="Bending Moment Calculator"
      badge="INTERNAL FLEXURE SOLVER"
      headline="Bending Moment Diagram (BMD) Calculator"
      description="Plot exact bending moment diagrams, pinpoint maximum flexural stress points, and locate inflection points for any determinate or indeterminate beam."
      primaryFormula="dM(x)/dx = V(x) ⟹ M(x) = M₀ + ∫ V(x) dx"
      formulas={formulas}
      faqs={faqs}
      relatedCalculators={related}
    >
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Understanding Bending Moments in Beams
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          The internal bending moment $M(x)$ represents the internal couple developed inside a structural cross-section to resist external transverse forces. Sagging bending causes tension in bottom fibers and compression in top fibers.
        </p>
      </div>
    </CalculatorTemplate>
  );
}
