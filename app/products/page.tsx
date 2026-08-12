import React from 'react';
import Link from 'next/link';
import { Activity, Layers, Disc, View, Flame, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { constructMetadata } from '@/lib/seo/metadata';
import { APP_URLS } from '@/lib/constants/links';

export const metadata = constructMetadata({
  title: 'Engineering Products Suite — Beam Master, Mohr Master, Truss Master, Section ZED 2 & ThermoCore',
  description:
    'Explore the AskOnlineTutor engineering suite: verified structural mechanics, plane stress transformations, Green’s theorem cross-sections, and CoolProp thermodynamics solvers.',
  canonicalUrl: '/products',
});

export default function ProductsPage() {
  const products = [
    {
      id: 'beam-master',
      title: 'Beam Master',
      status: 'LIVE IN WEB APP',
      badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      tagline: 'Continuous Beam Analysis & 11-Step Mathematical Proofs',
      image: '/stitch/a_high_fidelity_clean_ui_mockup_of_a_pro.png',
      description:
        'A comprehensive 1D beam calculation engine passing 414/414 regression tests. Solves statically determinate and indeterminate continuous multi-spans with point loads, uniform distributed loads (UDL), linearly varying loads (UVL), concentrated moments, and angled forces with axial decomposition.',
      specs: [
        { label: 'Test Suite', value: '414/414 Passing (100%)' },
        { label: 'Engine', value: 'Macaulay & Global Stiffness' },
        { label: 'Loads', value: 'Point, UDL, UVL, Moments, Angled' },
        { label: 'Features', value: 'Internal Hinges, PDF Reports' },
      ],
      features: [
        'Deterministic Macaulay double-integration deflection engine',
        'Direct global stiffness matrix formulation for continuous spans',
        'Support for internal hinges with bending moment discontinuity checks',
        'Angled & inclined force decomposition with axial reaction vectors',
        'Complete 11-step mathematical LaTeX derivations and governing equations',
        'High-resolution multi-page vector PDF calculation packet reports',
      ],
      isLive: true,
      href: '/products/beam-master',
      portalHref: APP_URLS.beamMaster,
    },
    {
      id: 'mohr-master',
      title: 'Mohr Master',
      status: 'LIVE APP (FLUTTER)',
      badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      tagline: "Plane Stress Transformations & Interactive Mohr's Circle",
      image: '/stitch/a_high_fidelity_clean_ui_mockup_of_a_pro.png',
      description:
        "A specialized 2D plane stress transformation calculator for mechanics of materials. Converts normal and shear stress components (σx, σy, τxy) into principal stresses (σ₁, σ₂) and maximum in-plane shear (τ_max) with real-time synchronized stress element rotation.",
      specs: [
        { label: 'Methodology', value: "Mohr's Circle & Stress Transformation" },
        { label: 'Outputs', value: 'σ₁, σ₂, θ_p, τ_max, θ_s' },
        { label: 'Edge Cases', value: 'Hydrostatic, Pure Shear, Uniaxial' },
        { label: 'Educational', value: '7-Step Formula Breakdown' },
      ],
      features: [
        'Instant principal stress calculation (σ₁, σ₂) and principal angle orientations (θ_p)',
        'Maximum in-plane shear stress (τ_max) and corresponding normal stress (σ_avg)',
        'Arbitrary plane stress transformation at any custom angle θ',
        'Real-time animated Mohr’s Circle plot with synchronized rotating stress element',
        'Comprehensive 7-step pedagogical derivation with substitutions and interpretations',
        'Robust edge case handlers for hydrostatic pressure, pure shear, and uniaxial tension',
      ],
      isLive: true,
      portalHref: APP_URLS.beamMaster,
    },
    {
      id: 'truss-master',
      title: 'Truss Master',
      status: 'IN DEVELOPMENT',
      badgeClass: 'bg-amber-100 text-amber-800 border-amber-300',
      tagline: '2D Planar Truss Analysis & Hybrid Step-by-Step Solver',
      image: '/stitch/a_technical_engineering_visualization_of.png',
      description:
        'A structural analysis platform for 2D pin-jointed trusses. Utilizes a hybrid architecture: a 100% accurate global stiffness matrix backend coupled with pedagogical Method of Joints and Method of Sections generators.',
      specs: [
        { label: 'Engine', value: 'Matrix Stiffness + Equilibrium Solver' },
        { label: 'Methods', value: 'Method of Joints & Method of Sections' },
        { label: 'Stability', value: 'Static Determinacy Check (m+r=2j)' },
        { label: 'Templates', value: 'Pratt, Warren, Howe, Fink, K-Truss' },
      ],
      features: [
        'Global matrix stiffness engine for guaranteed ground-truth axial member forces',
        'Step-by-step Method of Joints equilibrium derivations for joint-by-joint review',
        'Method of Sections cutting-plane equilibrium with moment center selection',
        'Automated static determinacy and mechanism classification (m + r vs 2j)',
        'Automated zero-force member detection rules (unloaded joints & collinear sets)',
        'Color-coded member visualization distinguishing Tension (blue) and Compression (red)',
      ],
      isLive: false,
    },
    {
      id: 'section-master',
      title: 'Section Properties (ZED 2)',
      status: 'ENGINE VERIFIED',
      badgeClass: 'bg-blue-100 text-blue-800 border-blue-300',
      tagline: "Exact Green's Theorem Boundary-Contour Geometric Engine",
      image: '/stitch/a_technical_engineering_visualization_fo.png',
      description:
        "A clean-room rebuild cross-section analysis engine. Computes area, centroid (x̄, ȳ), second moments of area (Ix, Iy, Ixy), principal axes, and section moduli using Green's theorem boundary integrals with Kahan compensated summation.",
      specs: [
        { label: 'Precision', value: '10⁻⁹ on Primitives, 10⁻⁶ Off-Origin' },
        { label: 'Integration', value: "Green's Theorem Two-Pass Centered" },
        { label: 'Robustness', value: 'CW/CCW Winding-Robust Contours' },
        { label: 'Libraries', value: 'AISC Steel Shapes & Custom Polygons' },
      ],
      features: [
        "Exact boundary-contour evaluation via Green's theorem (no mesh discretization error)",
        'Kahan compensated summation algorithm ensuring numerical stability down to 10⁻⁹',
        'Winding-robust contour handling (automatically resolves inner hole orientations)',
        'Second moments of area (Ix, Iy, Ixy) and principal axes rotation angle (θ_p)',
        'Elastic section moduli (Sx, Sy) and plastic section moduli (Zx, Zy)',
        'Full AISC structural shape database (W, S, C, L, HSS, WT) and custom composite polygons',
      ],
      isLive: false,
    },
    {
      id: 'thermo-core',
      title: 'ThermoCore',
      status: '88/88 BENCHMARKS (100%)',
      badgeClass: 'bg-rose-100 text-rose-800 border-rose-300',
      tagline: 'Tiered Thermodynamics & Power Cycle Engine',
      image: '/stitch/a_technical_engineering_visualization_of.png',
      description:
        'A high-performance thermodynamics platform featuring 88/88 verified benchmark problems. Integrates CoolProp 7.2.0 for high-accuracy fluid states, 1st & 2nd law device balances, thermodynamic power/refrigeration cycles, and an independent ParseValidator pipeline.',
      specs: [
        { label: 'Accuracy', value: '88/88 Benchmarks (100.0% Pass Rate)' },
        { label: 'Fluid Engine', value: 'CoolProp 7.2.0 EOS & Ideal Gases' },
        { label: 'Cycles', value: 'Rankine, Brayton, Otto, Diesel, Carnot' },
        { label: 'Verification', value: 'Deterministic ParseValidator' },
      ],
      features: [
        'Tier 1 (43/43): High-precision state property evaluation across Water, Refrigerants & Gases',
        'Tier 2 (23/23): 1st & 2nd Law energy balances for nozzles, turbines, heat exchangers & transient CVs',
        'Tier 3 (12/12): Complete cycle models for Rankine (reheat/regenerative), Brayton, Otto & Diesel',
        'Tier 4 (10/10): Psychrometrics, gas mixtures, combustion stoichiometry, and parametric sweeps',
        'Structured REST API (/solve, /psychro, /sweep, /sensitivity) powered by FastAPI',
        'Independent deterministic ParseValidator preventing hallucinated engineering values',
      ],
      isLive: false,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-14 pb-16 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-blue-500/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold font-mono">
            <span>ENGINEERING ECOSYSTEM</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Verified Engineering Solvers & Platforms
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Every application in the AskOnlineTutor ecosystem is built on deterministic mathematical foundations, rigorous benchmark validation, and step-by-step educational transparency.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              414/414 Beam Solver Tests
            </span>
            <span className="flex items-center gap-1.5 text-rose-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              88/88 Thermo Benchmarks
            </span>
            <span className="flex items-center gap-1.5 text-blue-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              10⁻⁹ Green’s Theorem Precision
            </span>
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {products.map((p, idx) => (
          <div
            key={p.id}
            id={p.id}
            className={`rounded-3xl p-8 sm:p-10 border transition-all ${
              p.isLive
                ? 'bg-white border-blue-300 shadow-xl shadow-blue-500/5 ring-1 ring-blue-500/20'
                : 'bg-slate-50/70 border-slate-200'
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
              <div className="space-y-4 max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full border font-mono ${p.badgeClass}`}>
                    {p.status}
                  </span>
                  <span className="text-xs font-mono text-slate-400">ENGINEERING MODULE 0{idx + 1}</span>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{p.title}</h2>
                  <p className="text-sm font-semibold text-blue-600 mt-0.5">{p.tagline}</p>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {p.description}
                </p>

                {/* Technical Specs Pill Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-2">
                  {p.specs.map((spec, si) => (
                    <div key={si} className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider">{spec.label}</span>
                      <span className="text-xs font-bold text-slate-900 mt-0.5 block">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Feature Checkpoints */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-200/60">
                  {p.features.map((feat, fi) => (
                    <div key={fi} className="flex items-start gap-2 text-xs sm:text-sm font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Image + Action */}
              <div className="shrink-0 flex flex-col gap-4 w-full lg:w-80">
                {p.image && (
                  <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm aspect-[16/10] relative">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                )}

                {p.isLive ? (
                  <>
                    <a
                      href={p.portalHref}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition-all"
                    >
                      <span>Launch in Web App</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    {p.href && (
                      <Link
                        href={p.href}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 transition-colors"
                      >
                        <span>View Full Guide</span>
                      </Link>
                    )}
                  </>
                ) : (
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center space-y-1">
                    <span className="text-xs font-bold text-slate-700 block">Engineering Status</span>
                    <span className="text-xs text-slate-500">
                      {p.status.includes('BENCHMARK')
                        ? 'Backend Tested & Verified'
                        : p.status.includes('VERIFIED')
                        ? 'Exact Engine Proven'
                        : 'In Active Development'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
