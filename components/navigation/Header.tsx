'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Compass,
  ChevronDown,
  Menu,
  X,
  Activity,
  Layers,
  Box,
  BrainCircuit,
  Calculator,
  BookOpen,
  ArrowRight,
  GraduationCap,
  Briefcase,
  School,
  Sparkles,
} from 'lucide-react';
import { PRODUCTS_NAV, CALCULATORS_NAV, GUIDES_NAV, SOLUTIONS_NAV } from '@/lib/constants/navigation';
import { APP_URLS } from '@/lib/constants/links';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-slate-900 tracking-tight text-base sm:text-lg leading-tight">
                ASK ONLINE TUTOR
              </span>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider -mt-0.5 font-mono">
                Engineering Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg transition-colors"
                onClick={() => setProductsOpen(!productsOpen)}
              >
                Products
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${productsOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="p-2 border-b border-slate-100 mb-1">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Structural & Analytical Solvers
                    </span>
                  </div>

                  <Link
                    href="/products/beam-master"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900">Beam Master</span>
                        <span className="text-[9px] font-mono font-extrabold px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800">
                          LIVE
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        Reactions, SFD, BMD & Deflection Solvers
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/products#truss-master"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors opacity-80 hover:opacity-100"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-800">Truss Master</span>
                        <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-800">
                          SOON
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">Method of joints & stiffness truss solver</p>
                    </div>
                  </Link>

                  <Link
                    href="/products#frame-master"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors opacity-80 hover:opacity-100"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Box className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-800">Frame Master</span>
                        <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-800">
                          SOON
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">2D portal & rigid frame analysis</p>
                    </div>
                  </Link>

                  <div className="pt-2 border-t border-slate-100 mt-1">
                    <Link
                      href="/products"
                      className="block text-center py-1 text-xs font-bold text-blue-600 hover:text-blue-700"
                    >
                      View All Products in Suite →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Calculators Dropdown */}
            <Link
              href="/calculators"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg transition-colors"
            >
              Calculators
            </Link>

            {/* Guides Dropdown */}
            <Link
              href="/guides"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg transition-colors"
            >
              Guides
            </Link>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg transition-colors"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
              >
                Solutions
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${solutionsOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
              </button>

              {solutionsOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 mt-1 z-50">
                  <Link
                    href="/solutions/students"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    <div>
                      <div className="text-sm font-bold">For Students</div>
                      <p className="text-xs text-slate-500">Homework verification & derivations</p>
                    </div>
                  </Link>
                  <Link
                    href="/solutions/engineers"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    <Briefcase className="w-4 h-4 text-emerald-600" />
                    <div>
                      <div className="text-sm font-bold">For Engineers</div>
                      <p className="text-xs text-slate-500">Quick checks & PDF calculation packets</p>
                    </div>
                  </Link>
                  <Link
                    href="/solutions/educators"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    <School className="w-4 h-4 text-purple-600" />
                    <div>
                      <div className="text-sm font-bold">For Universities & Faculty</div>
                      <p className="text-xs text-slate-500">Lecture projection & department licenses</p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Pricing */}
            <Link
              href="/pricing"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg transition-colors"
            >
              Pricing
            </Link>

            {/* About */}
            <Link
              href="/about"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={APP_URLS.login}
              className="text-sm font-semibold text-slate-700 hover:text-slate-900 px-3 py-2 rounded-lg transition-colors"
            >
              Sign In
            </a>
            <a
              href={APP_URLS.beamMaster}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm shadow-blue-500/25 transition-all hover:shadow-md hover:scale-[1.02]"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-2 pb-6 space-y-3">
          <Link
            href="/products/beam-master"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600"
          >
            Beam Master (Live)
          </Link>
          <Link
            href="/calculators"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600"
          >
            Calculators
          </Link>
          <Link
            href="/guides"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600"
          >
            Engineering Guides
          </Link>
          <Link
            href="/solutions/students"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600"
          >
            Solutions (Students / Engineers / Faculty)
          </Link>
          <Link
            href="/pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600"
          >
            Pricing & Plans
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600"
          >
            Contact
          </Link>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={APP_URLS.beamMaster}
              className="w-full text-center px-4 py-2.5 font-bold text-white bg-blue-600 rounded-xl shadow"
            >
              Start Engineering Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
