import React from 'react';
import PricingTable from '@/components/pricing/PricingTable';
import PricingFaq from '@/components/pricing/PricingFaq';
import { constructMetadata } from '@/lib/seo/metadata';
import { ShieldCheck, CheckCircle2, Award } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Pricing & Plans — Transparent Engineering SaaS',
  description:
    'Flexible pricing plans for engineering students, faculty, and practicing engineers. Start free or upgrade to Engineering Pro with 14-day free trial.',
  canonicalUrl: '/pricing',
});

export default function PricingPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="relative pt-14 pb-16 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-blue-500/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold font-mono">
            <span>TRANSPARENT PLANS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Simple, Predictable Pricing
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Choose the plan that fits your engineering workflow. Start free with core beam mechanics or unlock full LaTeX derivations and publication-ready PDF reports.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              414/414 solver tests passing
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              14-day free trial on Pro
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              Cancel anytime with one click
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Matrix Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <PricingTable />
        <PricingFaq />
      </section>
    </div>
  );
}
