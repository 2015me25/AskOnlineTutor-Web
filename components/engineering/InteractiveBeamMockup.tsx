'use client';

import React, { useState } from 'react';
import { Play, Sparkles, Activity, Download, FileText, CheckCircle2 } from 'lucide-react';

interface BeamPreset {
  id: string;
  name: string;
  span: number;
  supports: { type: 'pin' | 'roller' | 'fixed'; x: number }[];
  loads: { type: 'point' | 'udl' | 'moment'; x: number; length?: number; mag: number }[];
  ra: string;
  rb: string;
  vMax: string;
  mMax: string;
  sfdPath: string;
  bmdPath: string;
}

const PRESETS: BeamPreset[] = [
  {
    id: 'simple-point',
    name: 'Simply Supported + Point Load',
    span: 10,
    supports: [
      { type: 'pin', x: 0 },
      { type: 'roller', x: 10 },
    ],
    loads: [{ type: 'point', x: 5, mag: -50 }],
    ra: '+25.0 kN',
    rb: '+25.0 kN',
    vMax: '±25.0 kN',
    mMax: '+125.0 kN·m',
    sfdPath: 'M 40 180 L 40 130 L 260 130 L 260 230 L 480 230 L 480 180 Z',
    bmdPath: 'M 40 180 L 260 110 L 480 180 Z',
  },
  {
    id: 'cantilever-udl',
    name: 'Cantilever + Uniform Distributed Load',
    span: 8,
    supports: [{ type: 'fixed', x: 0 }],
    loads: [{ type: 'udl', x: 0, length: 8, mag: -10 }],
    ra: '+80.0 kN, M_A = -320 kN·m',
    rb: 'N/A',
    vMax: '-80.0 kN',
    mMax: '-320.0 kN·m',
    sfdPath: 'M 40 180 L 40 110 L 480 180 Z',
    bmdPath: 'M 40 180 Q 40 250 480 180 Z',
  },
  {
    id: 'overhang-compound',
    name: 'Overhanging + Distributed + Point',
    span: 12,
    supports: [
      { type: 'pin', x: 2 },
      { type: 'roller', x: 10 },
    ],
    loads: [
      { type: 'point', x: 0, mag: -20 },
      { type: 'udl', x: 2, length: 8, mag: -15 },
    ],
    ra: '+72.5 kN',
    rb: '+67.5 kN',
    vMax: '+52.5 kN',
    mMax: '+85.2 kN·m',
    sfdPath: 'M 40 180 L 40 210 L 120 210 L 120 120 L 400 230 L 400 180 L 480 180 Z',
    bmdPath: 'M 40 180 L 120 220 Q 260 110 400 180 Z',
  },
];

export default function InteractiveBeamMockup() {
  const [activePreset, setActivePreset] = useState<BeamPreset>(PRESETS[0]);
  const [activeTab, setActiveTab] = useState<'diagrams' | 'steps'>('diagrams');

  const portalUrl = 'https://app.askonlinetutor.com/beam';

  return (
    <div className="w-full bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-200">
      {/* Top Application Bar Mockup */}
      <div className="bg-slate-950/90 border-b border-slate-800 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 mr-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs font-mono font-bold text-slate-300">Beam Master v1.17</span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/50">
            Analytical Solver
          </span>
        </div>

        {/* Preset Selector */}
        <div className="flex items-center gap-1.5 overflow-x-auto">
          {PRESETS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePreset(p)}
              className={`text-xs px-2.5 py-1 rounded-md font-medium transition-all ${
                activePreset.id === p.id
                  ? 'bg-blue-600 text-white font-bold shadow-sm'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-700'
              }`}
            >
              {p.name.split('+')[0]}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={portalUrl}
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors shadow-sm"
          >
            <span>Open in App</span>
            <Play className="w-3 h-3 fill-current" />
          </a>
        </div>
      </div>

      {/* Main Visualizer Area */}
      <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Interactive Canvas & Diagram */}
        <div className="lg:col-span-2 space-y-4">
          {/* Beam Topology Canvas */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 relative">
            <div className="text-[11px] font-mono text-slate-400 mb-2 flex justify-between">
              <span>PHYSICAL MODEL (L = {activePreset.span}.00 m)</span>
              <span className="text-blue-400 font-semibold">E = 200 GPa, I = 8.33×10⁻⁵ m⁴</span>
            </div>

            {/* SVG Engineering Beam Diagram */}
            <svg viewBox="0 0 520 140" className="w-full h-auto max-h-[160px]">
              {/* Grid Lines */}
              <line x1="40" y1="90" x2="480" y2="90" stroke="#334155" strokeDasharray="3,3" />

              {/* Beam Solid Spine */}
              <rect x="40" y="82" width="440" height="12" rx="2" fill="#3B82F6" stroke="#60A5FA" strokeWidth="1.5" />

              {/* Load Vectors */}
              {activePreset.id === 'simple-point' && (
                <g>
                  {/* Point Load Arrow at midspan */}
                  <line x1="260" y1="25" x2="260" y2="78" stroke="#EF4444" strokeWidth="3" markerEnd="url(#red-arrow)" />
                  <polygon points="260,82 254,68 266,68" fill="#EF4444" />
                  <text x="260" y="20" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                    P = 50.0 kN (x = 5.0m)
                  </text>
                </g>
              )}

              {activePreset.id === 'cantilever-udl' && (
                <g>
                  {/* Distributed Load Rect */}
                  <rect x="40" y="45" width="440" height="35" fill="rgba(239, 68, 68, 0.15)" stroke="#EF4444" strokeWidth="1" strokeDasharray="4,2" />
                  {[0.1, 0.25, 0.4, 0.55, 0.7, 0.85, 0.98].map((pct, i) => (
                    <polygon key={i} points={`${40 + 440 * pct},80 ${36 + 440 * pct},68 ${44 + 440 * pct},68`} fill="#EF4444" />
                  ))}
                  <text x="260" y="38" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                    w = 10.0 kN/m (Uniform)
                  </text>
                </g>
              )}

              {activePreset.id === 'overhang-compound' && (
                <g>
                  {/* Point Load on left overhang */}
                  <polygon points="40,82 34,68 46,68" fill="#EF4444" />
                  <line x1="40" y1="30" x2="40" y2="78" stroke="#EF4444" strokeWidth="2.5" />
                  <text x="40" y="22" fill="#F87171" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                    20 kN
                  </text>

                  {/* UDL on span */}
                  <rect x="115" y="45" width="290" height="35" fill="rgba(239, 68, 68, 0.15)" stroke="#EF4444" strokeWidth="1" strokeDasharray="3,3" />
                  <text x="260" y="38" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                    w = 15.0 kN/m
                  </text>
                </g>
              )}

              {/* Supports */}
              {activePreset.supports.map((sup, idx) => {
                const posX = 40 + sup.x * (440 / activePreset.span);
                if (sup.type === 'pin') {
                  return (
                    <g key={idx}>
                      <polygon points={`${posX},94 ${posX - 10},114 ${posX + 10},114`} fill="#10B981" stroke="#059669" strokeWidth="1.5" />
                      <line x1={posX - 14} y1="116" x2={posX + 14} y2="116" stroke="#059669" strokeWidth="2" />
                      <text x={posX} y="130" fill="#34D399" fontSize="10" textAnchor="middle" fontFamily="monospace">
                        A (Pin)
                      </text>
                    </g>
                  );
                } else if (sup.type === 'roller') {
                  return (
                    <g key={idx}>
                      <circle cx={posX} cy="102" r="8" fill="#10B981" stroke="#059669" strokeWidth="1.5" />
                      <line x1={posX - 14} y1="112" x2={posX + 14} y2="112" stroke="#059669" strokeWidth="2" />
                      <text x={posX} y="128" fill="#34D399" fontSize="10" textAnchor="middle" fontFamily="monospace">
                        B (Roller)
                      </text>
                    </g>
                  );
                } else {
                  return (
                    <g key={idx}>
                      <rect x="26" y="60" width="14" height="60" fill="#10B981" stroke="#059669" strokeWidth="1.5" />
                      <line x1="26" y1="60" x2="26" y2="120" stroke="#059669" strokeWidth="3" />
                      <text x="33" y="134" fill="#34D399" fontSize="10" textAnchor="middle" fontFamily="monospace">
                        Fixed
                      </text>
                    </g>
                  );
                }
              })}
            </svg>
          </div>

          {/* Diagram Plots (SFD & BMD) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* SFD */}
            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3.5">
              <div className="flex items-center justify-between text-xs font-mono font-bold mb-2">
                <span className="text-emerald-400">SHEAR FORCE (SFD)</span>
                <span className="text-slate-400 font-normal">V_max = {activePreset.vMax}</span>
              </div>
              <svg viewBox="0 0 520 240" className="w-full h-24 bg-slate-900/50 rounded border border-slate-800/80">
                <line x1="40" y1="180" x2="480" y2="180" stroke="#475569" strokeWidth="1.5" />
                <path d={activePreset.sfdPath} fill="rgba(16, 185, 129, 0.25)" stroke="#10B981" strokeWidth="2" />
              </svg>
            </div>

            {/* BMD */}
            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3.5">
              <div className="flex items-center justify-between text-xs font-mono font-bold mb-2">
                <span className="text-purple-400">BENDING MOMENT (BMD)</span>
                <span className="text-slate-400 font-normal">M_max = {activePreset.mMax}</span>
              </div>
              <svg viewBox="0 0 520 240" className="w-full h-24 bg-slate-900/50 rounded border border-slate-800/80">
                <line x1="40" y1="180" x2="480" y2="180" stroke="#475569" strokeWidth="1.5" />
                <path d={activePreset.bmdPath} fill="rgba(168, 85, 247, 0.25)" stroke="#A855F7" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right 1 Col: Calculated Values & LaTeX Step Walkthrough */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <div className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-blue-400" />
                <span>SOLVER OUTPUT</span>
              </div>
              <span className="text-[10px] font-mono font-extrabold px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                EXACT
              </span>
            </div>

            {/* Reactions Grid */}
            <div className="space-y-2.5 font-mono text-xs mb-4">
              <div className="flex justify-between py-1.5 px-2 rounded bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400">Support Reaction A:</span>
                <span className="text-emerald-400 font-bold">{activePreset.ra}</span>
              </div>
              <div className="flex justify-between py-1.5 px-2 rounded bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400">Support Reaction B:</span>
                <span className="text-emerald-400 font-bold">{activePreset.rb}</span>
              </div>
              <div className="flex justify-between py-1.5 px-2 rounded bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400">Max Shear (|V|):</span>
                <span className="text-blue-400 font-bold">{activePreset.vMax}</span>
              </div>
              <div className="flex justify-between py-1.5 px-2 rounded bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400">Max Moment (|M|):</span>
                <span className="text-purple-400 font-bold">{activePreset.mMax}</span>
              </div>
            </div>

            {/* LaTeX Step Preview */}
            <div className="bg-slate-900 rounded-lg p-3 border border-slate-800 text-[11px] font-mono text-slate-300 space-y-1.5">
              <div className="text-slate-500 font-bold text-[10px] uppercase">Step 1 — Static Equilibrium:</div>
              <p className="text-slate-300">∑F_y = 0 ⟹ R_A + R_B - P = 0</p>
              <p className="text-slate-300">∑M_A = 0 ⟹ R_B(10) - (50)(5) = 0</p>
              <p className="text-blue-400 font-bold">⟹ R_B = 25.00 kN, R_A = 25.00 kN</p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
            <span className="text-slate-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Verified Solver
            </span>
            <a
              href={portalUrl}
              className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1 transition-colors"
            >
              Solve custom beam →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
