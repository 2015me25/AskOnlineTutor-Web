import React from 'react';
import Link from 'next/link';
import { Compass, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CALCULATORS_NAV, GUIDES_NAV } from '@/lib/constants/navigation';
import { APP_URLS } from '@/lib/constants/links';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Compass className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-white tracking-tight text-base leading-tight">
                  ASK ONLINE TUTOR
                </span>
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider font-mono">
                  Engineering Platform
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Professional engineering tools. Clear calculations. Confident decisions.
              Delivering verified structural solvers and step-by-step solutions for students, engineers, and educators.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-3 py-1.5 rounded-full w-fit font-mono font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>414/414 solver tests passing</span>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4 font-mono">
              Products
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/products/beam-master" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Beam Master</span>
                  <span className="text-[9px] font-mono font-extrabold px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-400">
                    LIVE
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products#truss-master" className="hover:text-white transition-colors">
                  Truss Master (Soon)
                </Link>
              </li>
              <li>
                <Link href="/products#frame-master" className="hover:text-white transition-colors">
                  Frame Master (Soon)
                </Link>
              </li>
              <li>
                <Link href="/products#section-master" className="hover:text-white transition-colors">
                  Section Master (Soon)
                </Link>
              </li>
              <li>
                <Link href="/products#ai-solver" className="hover:text-white transition-colors">
                  AI Engineering Solver
                </Link>
              </li>
            </ul>
          </div>

          {/* Calculators Column */}
          <div>
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4 font-mono">
              Calculators
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/calculators/beam" className="hover:text-white transition-colors">
                  Beam Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/cantilever-beam" className="hover:text-white transition-colors">
                  Cantilever Beam
                </Link>
              </li>
              <li>
                <Link href="/calculators/simply-supported-beam" className="hover:text-white transition-colors">
                  Simply Supported Beam
                </Link>
              </li>
              <li>
                <Link href="/calculators/bending-moment" className="hover:text-white transition-colors">
                  Bending Moment (BMD)
                </Link>
              </li>
              <li>
                <Link href="/calculators/shear-force" className="hover:text-white transition-colors">
                  Shear Force (SFD)
                </Link>
              </li>
              <li>
                <Link href="/calculators/deflection" className="hover:text-white transition-colors">
                  Beam Deflection
                </Link>
              </li>
              <li>
                <Link href="/calculators/moment-of-inertia" className="hover:text-white transition-colors">
                  Moment of Inertia
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides & Company */}
          <div>
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4 font-mono">
              Guides & Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/guides/shear-force-diagram" className="hover:text-white transition-colors">
                  Draw SFD Guide
                </Link>
              </li>
              <li>
                <Link href="/guides/bending-moment-diagram" className="hover:text-white transition-colors">
                  Draw BMD Guide
                </Link>
              </li>
              <li>
                <Link href="/guides/beam-deflection" className="hover:text-white transition-colors">
                  Macaulay&apos;s Method
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Platform
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} AskOnlineTutor Engineering. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href={APP_URLS.beamMaster} className="hover:text-slate-300 transition-colors">
              Open Beam Master
            </a>
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
