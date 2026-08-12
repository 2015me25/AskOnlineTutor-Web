export interface PricingPlan {
  id: string;
  name: string;
  badge: string;
  monthlyPrice: number;
  annualPrice: number; // monthly equivalent when billed annually
  period: string;
  description: string;
  popular?: boolean;
  ctaText: string;
  ctaHref: string;
  isExternalCta?: boolean;
  features: {
    text: string;
    included: boolean;
    highlight?: boolean;
  }[];
  limits: {
    beams: string;
    derivationSteps: string;
    reports: string;
    crossSections: string;
    support: string;
  };
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free Starter',
    badge: 'FOREVER FREE',
    monthlyPrice: 0,
    annualPrice: 0,
    period: 'free forever',
    description: 'Essential analytical tools for students learning statics and basic beam mechanics.',
    popular: false,
    ctaText: 'Start Free',
    ctaHref: 'https://app.askonlinetutor.com/beam',
    isExternalCta: true,
    features: [
      { text: 'Beam Master (Determinate Beams)', included: true },
      { text: 'Interactive SFD & BMD Curves', included: true },
      { text: 'Up to 5 Saved Local Projects', included: true },
      { text: 'SI & US Customary Unit Systems', included: true },
      { text: 'Standard Summary Results Viewer', included: true },
      { text: 'Complete Step-by-Step LaTeX Derivations', included: false },
      { text: 'Indeterminate Beams & Internal Hinges', included: false },
      { text: 'High-Resolution PDF Calculation Packet Export', included: false },
      { text: 'Cross-Section Properties Importer', included: false },
      { text: 'Unlimited Cloud Project Sync', included: false },
    ],
    limits: {
      beams: 'Determinate spans only',
      derivationSteps: 'Basic summary only',
      reports: 'Web view only',
      crossSections: 'Standard rectangular/circular',
      support: 'Community forum',
    },
  },
  {
    id: 'pro',
    name: 'Engineering Pro',
    badge: 'MOST POPULAR',
    monthlyPrice: 9,
    annualPrice: 7, // $7/mo billed annually ($84/yr)
    period: 'per month',
    description: 'Full power for engineering students, faculty, and practicing structural engineers.',
    popular: true,
    ctaText: 'Start 14-Day Free Trial',
    ctaHref: 'https://app.askonlinetutor.com/beam',
    isExternalCta: true,
    features: [
      { text: 'Full Access: Beam Master (Indeterminate & Multi-Span)', included: true, highlight: true },
      { text: 'Internal Hinges & Multiple Intermediate Supports', included: true },
      { text: 'Complete 11-Step LaTeX Derivation Walkthroughs', included: true, highlight: true },
      { text: 'High-Resolution PDF Calculation Packet Export', included: true, highlight: true },
      { text: 'Cross-Section Properties Importer (I, A, Centroid)', included: true },
      { text: 'Unlimited Cloud Projects & Instant Sync', included: true },
      { text: 'SI & US Customary Unit Conversions', included: true },
      { text: 'Early Access to Truss Master & Frame Master', included: true },
      { text: 'Priority Email & Engineering Support', included: true },
    ],
    limits: {
      beams: 'Unlimited determinate & indeterminate',
      derivationSteps: 'Full 11-step mathematical breakdown',
      reports: 'Vector PDF with custom branding',
      crossSections: 'Full library & custom composites',
      support: 'Priority 24/7 email',
    },
  },
  {
    id: 'suite',
    name: 'Engineering Suite',
    badge: 'TEAMS & ACADEMIC',
    monthlyPrice: 49,
    annualPrice: 39, // $39/mo billed annually
    period: 'per month',
    description: 'For university engineering departments, student labs, and structural design teams.',
    popular: false,
    ctaText: 'Contact Academic Team',
    ctaHref: '/contact',
    isExternalCta: false,
    features: [
      { text: 'Everything in Pro for up to 50 team/student seats', included: true, highlight: true },
      { text: 'University LMS & Classroom Assignment Integration', included: true },
      { text: 'Custom University Watermark on PDF Calculation Sheets', included: true },
      { text: 'Centralized User Management & Department Licensing', included: true },
      { text: 'AI Engineering Solver & OCR Early Access Beta', included: true, highlight: true },
      { text: 'Shared Team Project Library & Templates', included: true },
      { text: 'Dedicated Account Manager & Curriculum Onboarding', included: true },
    ],
    limits: {
      beams: 'Unlimited enterprise seats',
      derivationSteps: 'Full breakdown + lecture projection mode',
      reports: 'University branded & white-labeled',
      crossSections: 'Unlimited team library',
      support: 'Dedicated engineer & video call support',
    },
  },
];

export const PRICING_FAQS = [
  {
    question: 'Can I use AskOnlineTutor for free?',
    answer:
      'Yes! The Free Starter plan includes determinate beam calculations, interactive SFD and BMD plots, deflection curves, and standard calculation summaries with no credit card required.',
  },
  {
    question: 'How does the 14-day free trial work for Engineering Pro?',
    answer:
      'When you start your trial, you get immediate access to all Pro features—including indeterminate beams, internal hinges, full 11-step LaTeX derivations, and PDF exports. You can cancel anytime before the trial ends at zero charge.',
  },
  {
    question: 'Do you offer student discounts or university lab licenses?',
    answer:
      'Yes! We offer heavily discounted department licenses and semester passes for engineering students and universities. Contact our academic team for institutional volume pricing.',
  },
  {
    question: 'What calculation methods are used by Beam Master?',
    answer:
      'Beam Master uses deterministic analytical methods, singularity functions (Macaulay’s method), double integration, and direct stiffness formulations. Every solver routine is validated against our 414 regression tests.',
  },
  {
    question: 'Can I export calculation reports for client deliverables or homework?',
    answer:
      'Engineering Pro and Suite users can export professional, publication-ready PDF calculation sheets containing reaction summaries, load diagrams, high-resolution SFD/BMD vector plots, and complete step-by-step mathematical proofs.',
  },
];
