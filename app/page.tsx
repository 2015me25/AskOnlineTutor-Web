import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturedBeamMaster from '@/components/home/FeaturedBeamMaster';
import EngineeringSuite from '@/components/home/EngineeringSuite';
import HowItWorks from '@/components/home/HowItWorks';
import WhyUs from '@/components/home/WhyUs';
import AudienceSection from '@/components/home/AudienceSection';
import ResourcesPreview from '@/components/home/ResourcesPreview';
import FinalCta from '@/components/home/FinalCta';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero & Engineering Workstation Visualizer */}
      <HeroSection />

      {/* 2. Flagship Showcase: Beam Master */}
      <FeaturedBeamMaster />

      {/* 3. Engineering Suite Grid (Beam, Truss, Frame, Section, AI Solver) */}
      <EngineeringSuite />

      {/* 4. How It Works (Define -> Analyze -> Visualize -> Understand) */}
      <HowItWorks />

      {/* 5. Why AskOnlineTutor (Engineering-First Advantages) */}
      <WhyUs />

      {/* 6. Tailored Solutions: Students / Engineers / Educators */}
      <AudienceSection />

      {/* 7. Resources & SEO Calculators Preview */}
      <ResourcesPreview />

      {/* 8. Final Conversion CTA Banner */}
      <FinalCta />
    </div>
  );
}
