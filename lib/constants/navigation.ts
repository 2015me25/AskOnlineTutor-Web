import { APP_URLS } from './links';

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  badgeType?: 'live' | 'soon' | 'planned';
  description?: string;
  isExternal?: boolean;
}

export const PRODUCTS_NAV: NavItem[] = [
  {
    label: 'Beam Master',
    href: '/products/beam-master',
    badge: 'LIVE',
    badgeType: 'live',
    description: 'Advanced 1D beam analysis with SFD, BMD, slope & deflection profiles.',
  },
  {
    label: 'Truss Master',
    href: '/products#truss-master',
    badge: 'SOON',
    badgeType: 'soon',
    description: '2D pin-jointed truss analysis via Method of Joints & Stiffness Matrix.',
  },
  {
    label: 'Frame Master',
    href: '/products#frame-master',
    badge: 'SOON',
    badgeType: 'soon',
    description: 'Multi-bay, multi-story 2D rigid frame analysis with sway calculation.',
  },
  {
    label: 'Section Master',
    href: '/products#section-master',
    badge: 'SOON',
    badgeType: 'soon',
    description: 'Geometric centroid, moments of inertia (Ix, Iy), and section moduli.',
  },
  {
    label: 'AI Engineering Solver',
    href: '/products#ai-solver',
    badge: 'PLANNED',
    badgeType: 'planned',
    description: 'Textbook diagram OCR & instant step-by-step LaTeX solution derivations.',
  },
];

export const CALCULATORS_NAV: NavItem[] = [
  {
    label: 'Beam Calculator',
    href: '/calculators/beam',
    description: 'General beam solver for point loads, UDL, and overhangs.',
  },
  {
    label: 'Cantilever Beam Calculator',
    href: '/calculators/cantilever-beam',
    description: 'Fixed-end cantilever analysis for point loads and uniform distributed loads.',
  },
  {
    label: 'Simply Supported Beam Calculator',
    href: '/calculators/simply-supported-beam',
    description: 'Pinned-roller span with midspan deflection and peak bending moments.',
  },
  {
    label: 'Bending Moment Diagram (BMD)',
    href: '/calculators/bending-moment',
    description: 'Inflection points, zero-shear crossings, and peak bending moments.',
  },
  {
    label: 'Shear Force Diagram (SFD)',
    href: '/calculators/shear-force',
    description: 'Shear jump discontinuities, distributed load slopes, and reaction shears.',
  },
  {
    label: 'Beam Deflection Calculator',
    href: '/calculators/deflection',
    description: 'Elastic curve deflection v(x) via double integration & Macaulay method.',
  },
  {
    label: 'Moment of Inertia Calculator',
    href: '/calculators/moment-of-inertia',
    description: 'Second moment of area for I-beams, T-sections, and composite geometry.',
  },
];

export const GUIDES_NAV: NavItem[] = [
  {
    label: 'How to Draw Shear Force Diagrams',
    href: '/guides/shear-force-diagram',
    description: 'Equilibrium equations, sign conventions, and shear force jumps.',
  },
  {
    label: 'How to Draw Bending Moment Diagrams',
    href: '/guides/bending-moment-diagram',
    description: 'Constructing BMD from SFD curves and locating maximum moments.',
  },
  {
    label: 'Macaulay’s Method for Beam Deflection',
    href: '/guides/beam-deflection',
    description: 'Singularity functions, double integration, and evaluating constants.',
  },
  {
    label: 'Moment of Inertia & Parallel Axis Theorem',
    href: '/guides/moment-of-inertia',
    description: 'Second moment of area, centroid determination, and flexural rigidity.',
  },
];

export const SOLUTIONS_NAV: NavItem[] = [
  {
    label: 'For Engineering Students',
    href: '/solutions/students',
    description: 'Verify homework, understand derivations, and ace mechanics exams.',
  },
  {
    label: 'For Practicing Engineers',
    href: '/solutions/engineers',
    description: 'Rapid design validation and professional calculation packet reports.',
  },
  {
    label: 'For Universities & Faculty',
    href: '/solutions/educators',
    description: 'Interactive lecture demonstrations and departmental licensing.',
  },
];
