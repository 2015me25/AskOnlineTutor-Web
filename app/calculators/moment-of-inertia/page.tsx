import React from 'react';
import CalculatorTemplate from '@/components/engineering/CalculatorTemplate';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'Moment of Inertia Calculator — Second Moment of Area (Ix, Iy)',
  description:
    'Free online moment of inertia calculator. Calculate centroid (x̄, ȳ), second moment of area (Ix, Iy), section modulus (Zx, Zy), and radius of gyration using the parallel axis theorem.',
  canonicalUrl: '/calculators/moment-of-inertia',
});

export default function MomentOfInertiaCalculatorPage() {
  const formulas = [
    {
      label: 'Rectangle Centroidal Moment of Inertia',
      formula: 'I_x = (b · h³) / 12,   I_y = (h · b³) / 12',
      description: 'Second moment of area for a solid rectangular section of base b and height h about its neutral centroidal axes.',
    },
    {
      label: 'Parallel Axis Theorem (Steiner’s Theorem)',
      formula: 'I_total = ∑ [ I_centroid + A · d² ]',
      description: 'Calculates the moment of inertia of compound sections about the global neutral axis shifted by distance d.',
    },
    {
      label: 'Solid Circular Cross-Section',
      formula: 'I_x = I_y = (π · d⁴) / 64 = (π · r⁴) / 4',
      description: 'Second moment of area for a solid circle with diameter d and radius r.',
    },
    {
      label: 'Elastic Section Modulus (S or Z)',
      formula: 'S_x = I_x / y_max',
      description: 'Measures bending resistance against peak fiber flexural stress: σ_max = M / S_x.',
    },
  ];

  const faqs = [
    {
      question: 'What is the second moment of area (moment of inertia)?',
      answer:
        'The second moment of area (I) is a geometric property that quantifies how cross-sectional area is distributed relative to an axis. Sections with material located far from the neutral axis (like I-beams) have high moments of inertia and superior bending resistance.',
    },
    {
      question: 'How does moment of inertia affect beam deflection?',
      answer:
        'Because beam deflection v(x) is inversely proportional to flexural rigidity EI, doubling the moment of inertia I halves the elastic bending deflection under the same applied loads.',
    },
  ];

  const related = [
    {
      title: 'Beam Deflection Calculator',
      href: '/calculators/deflection',
      desc: 'Use your calculated moment of inertia (I) to evaluate beam sag.',
    },
    {
      title: 'Moment of Inertia Guide',
      href: '/guides/moment-of-inertia',
      desc: 'Step-by-step guide to centroid determination and parallel axis theorem.',
    },
    {
      title: 'General Beam Calculator',
      href: '/calculators/beam',
      desc: 'Interactive beam analysis with customizable cross-sections.',
    },
  ];

  return (
    <CalculatorTemplate
      title="Moment of Inertia Calculator"
      badge="CROSS-SECTION PROPERTIES"
      headline="Moment of Inertia Calculator"
      description="Calculate centroid coordinates (x̄, ȳ), second moment of area (Ix, Iy), elastic section modulus, and radius of gyration for rectangular, circular, I-beam, and composite cross-sections."
      primaryFormula="I_xx = ∫ y² dA = I_c + A·d²"
      formulas={formulas}
      faqs={faqs}
      relatedCalculators={related}
    >
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          How to Calculate Composite Cross-Section Inertia
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          For built-up shapes (I-beams, T-sections, channels), follow this 3-step engineering process:
        </p>

        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm max-w-lg mx-auto my-6 bg-white">
          <img
            src="/stitch/a_technical_engineering_visualization_fo.png"
            alt="I-Beam Moment of Inertia Technical Diagram"
            className="w-full h-auto"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-xs font-bold text-blue-600 font-mono">STEP 1</span>
            <h4 className="font-bold text-slate-900 text-sm">Find Centroid (ȳ)</h4>
            <p className="text-xs text-slate-600">ȳ = (∑ A_i · y_i) / (∑ A_i)</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-xs font-bold text-blue-600 font-mono">STEP 2</span>
            <h4 className="font-bold text-slate-900 text-sm">Individual I_i</h4>
            <p className="text-xs text-slate-600">I_i = (b_i · h_i³) / 12</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-xs font-bold text-blue-600 font-mono">STEP 3</span>
            <h4 className="font-bold text-slate-900 text-sm">Parallel Axis</h4>
            <p className="text-xs text-slate-600">I_total = ∑ (I_i + A_i · d_i²)</p>
          </div>
        </div>
      </div>
    </CalculatorTemplate>
  );
}
