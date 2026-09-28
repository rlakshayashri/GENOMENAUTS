import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Binary, Code2, ArrowUpRight, Sparkles, Compass, Target, Award, Zap } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ABOUT' | 'VISION' | 'OBJECTIVES' | 'ACTIVITIES'>('ABOUT');

  const pillars = [
    {
      id: '01',
      title: 'Computational genomics',
      description: 'Decode complex genomic datasets through Python, R, and next-generation sequencing workflows.',
      icon: Binary,
      badge: 'NGS & BLAST',
    },
    {
      id: '02',
      title: 'Structural biology + AI',
      description: 'Explore protein structure, molecular docking, and the machine learning ideas reshaping drug discovery.',
      icon: Cpu,
      badge: 'ML & DOCKING',
    },
    {
      id: '03',
      title: 'Bio-software engineering',
      description: 'Build sequence aligners, data dashboards, and research tools that make biology more computable.',
      icon: Code2,
      badge: 'TOOL ENGINE',
    },
  ];

  const clubObjectives = [
    'Make biotechnology learning interactive and engaging.',
    'Encourage research-oriented and innovative thinking.',
    'Introduce students to computational biology & bioinformatics.',
    'Develop leadership, teamwork, and problem-solving skills.',
  ];

  const clubActivities = [
    'Biotechnology Quizzes & BLAST-Based Challenges',
    'Computational Biology Sessions & Database Workflows',
    'Technical Workshops & Outreach Initiatives',
    'Team Competitions & Creative Scientific Events',
  ];

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-20 right-10 w-[550px] h-[550px] bg-[#19D9FF]/8 rounded-full blur-[130px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#8FEA22]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TECHNICAL SECTION LABEL */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0A1222] border border-[#1B3045] mb-8 glow-box-cyan"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#19D9FF] animate-spin" style={{ animationDuration: '8s' }} />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#19D9FF] font-semibold">
            01 / GENOMENAUTS · COMPUTATIONAL BIOLOGY & BIOINFORMATICS CLUB
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#8FEA22] animate-ping" />
        </motion.div>

        {/* HERO MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-16 lg:mb-20">
          
          {/* LEFT: HUGE HEADLINE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <h1 className="font-headline text-3xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.3] tracking-normal text-[#F5F7FA] mb-4">
              Biology is the <br className="hidden sm:block" />
              <span className="glow-text-cyan">question.</span> <br />
              <span className="text-cyan-green-gradient drop-shadow-[0_0_35px_rgba(25,217,255,0.3)]">
                Computation is <br className="hidden sm:block" />
                our lens.
              </span>
            </h1>
          </motion.div>

          {/* RIGHT: COMPACT GENOMENAUTS INTRO CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0A1222] border border-[#1B3045] backdrop-blur-md relative overflow-hidden card-shimmer shadow-xl space-y-4 glow-box-cyan">
              
              {/* TOP HEADER & TAB SWITCHER */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#1B3045] pb-2.5">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] font-bold text-[#19D9FF]">
                    CLUB COMMAND PORTAL
                  </span>
                  <span className="font-mono text-[9px] text-[#8FEA22] uppercase tracking-wider px-2 py-0.5 rounded bg-[#8FEA22]/10 border border-[#8FEA22]/30 font-bold">
                    SRMIST RAMAPURAM
                  </span>
                </div>

                <div className="flex items-center gap-1 bg-[#0C1425] p-1 rounded-xl border border-[#1B3045]">
                  <button
                    onClick={() => setActiveTab('ABOUT')}
                    className={`flex-1 py-1.5 rounded-lg font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === 'ABOUT'
                        ? 'bg-[#19D9FF]/20 text-[#19D9FF] border border-[#19D9FF]/50 font-bold'
                        : 'text-[#8C9BB0] hover:text-[#F5F7FA]'
                    }`}
                  >
                    ABOUT
                  </button>
                  <button
                    onClick={() => setActiveTab('VISION')}
                    className={`flex-1 py-1.5 rounded-lg font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === 'VISION'
                        ? 'bg-[#8FEA22]/20 text-[#8FEA22] border border-[#8FEA22]/50 font-bold'
                        : 'text-[#8C9BB0] hover:text-[#F5F7FA]'
                    }`}
                  >
                    VISION
                  </button>
                  <button
                    onClick={() => setActiveTab('OBJECTIVES')}
                    className={`flex-1 py-1.5 rounded-lg font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === 'OBJECTIVES'
                        ? 'bg-[#C084FC]/20 text-[#C084FC] border border-[#C084FC]/50 font-bold'
                        : 'text-[#8C9BB0] hover:text-[#F5F7FA]'
                    }`}
                  >
                    OBJECTIVES
                  </button>
                  <button
                    onClick={() => setActiveTab('ACTIVITIES')}
                    className={`flex-1 py-1.5 rounded-lg font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === 'ACTIVITIES'
                        ? 'bg-[#FB923C]/20 text-[#FB923C] border border-[#FB923C]/50 font-bold'
                        : 'text-[#8C9BB0] hover:text-[#F5F7FA]'
                    }`}
                  >
                    ACTIVITIES
                  </button>
                </div>
              </div>

              {/* TAB CONTENT BODY (COMPACT) */}
              <div className="py-1 min-h-[160px] flex flex-col justify-center">
                {activeTab === 'ABOUT' && (
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-[#19D9FF] font-mono text-[11px] font-bold">
                      <Compass className="w-4 h-4 text-[#19D9FF]" />
                      <span>COMPUTATIONAL BIOLOGY & BIOINFORMATICS CLUB</span>
                    </div>
                    <p className="text-[#8C9BB0] text-xs sm:text-sm leading-relaxed">
                      GENOMENAUTS is a student-driven computational biology and bioinformatics club at SRMIST Ramapuram providing a platform to explore algorithms, genomics, AI protein design, and data science through hands-on projects, workshops, and interdisciplinary research.
                    </p>
                    <p className="text-[#F5F7FA] font-mono text-[11px] pt-1 text-cyan-green-gradient font-bold">
                      GOAL: Learn, explore, collaborate, and innovate beyond the curriculum.
                    </p>
                  </div>
                )}

                {activeTab === 'VISION' && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[#8FEA22] font-mono text-[11px] font-bold">
                      <Target className="w-4 h-4 text-[#8FEA22]" />
                      <span>CLUB VISION</span>
                    </div>
                    <p className="text-[#F5F7FA] font-headline text-sm sm:text-base font-bold leading-snug p-3 rounded-xl bg-[#0C1425] border border-[#1B3045]">
                      "To build an active student community that encourages scientific thinking, innovation, collaboration, and curiosity in biotechnology."
                    </p>
                  </div>
                )}

                {activeTab === 'OBJECTIVES' && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[#C084FC] font-mono text-[11px] font-bold mb-1">
                      <Award className="w-4 h-4 text-[#C084FC]" />
                      <span>CORE OBJECTIVES</span>
                    </div>
                    <ul className="space-y-1 text-xs text-[#8C9BB0]">
                      {clubObjectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#8FEA22] font-bold">✓</span>
                          <span className="text-[#F5F7FA]">{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'ACTIVITIES' && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[#FB923C] font-mono text-[11px] font-bold mb-1">
                      <Zap className="w-4 h-4 text-[#FB923C]" />
                      <span>CLUB ACTIVITIES</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#8C9BB0]">
                      {clubActivities.map((act, i) => (
                        <li key={i} className="flex items-center gap-2 p-1.5 rounded-lg bg-[#0C1425] border border-[#1B3045]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#19D9FF]" />
                          <span className="text-[#F5F7FA] font-medium">{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* CARD FOOTER */}
              <div className="pt-3 border-t border-[#1B3045] flex items-center justify-between text-[11px] font-mono text-[#8C9BB0]">
                <span>SRMIST BIOTECH</span>
                <a
                  href="#contact"
                  className="text-[#19D9FF] hover:underline font-bold flex items-center gap-1"
                >
                  <span>JOIN ORBIT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </motion.div>
        </div>

        {/* THREE RESEARCH PILLAR CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.15 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative p-6 sm:p-8 rounded-2xl bg-[#0A1222]/90 border border-[#1B3045] hover:border-[#19D9FF]/80 transition-all duration-300 flex flex-col justify-between shadow-xl card-shimmer glow-box-cyan"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-13 h-13 rounded-2xl border border-[#19D9FF]/40 bg-[#0C1425] flex items-center justify-center group-hover:border-[#19D9FF] group-hover:bg-[#19D9FF]/15 transition-colors shadow-md">
                      <Icon className="w-6 h-6 text-[#19D9FF] group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider text-[#8FEA22] bg-[#8FEA22]/10 border border-[#8FEA22]/30">
                        {pillar.badge}
                      </span>
                      <span className="font-mono text-sm uppercase tracking-widest text-[#8C9BB0] group-hover:text-[#19D9FF] transition-colors font-bold">
                        {pillar.id}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-headline font-bold text-2xl text-[#F5F7FA] mb-3 group-hover:text-[#19D9FF] transition-colors tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-[#8C9BB0] text-sm leading-relaxed mb-8">
                    {pillar.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#1B3045]/60 group-hover:border-[#19D9FF]/40">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#8C9BB0] group-hover:text-[#19D9FF] transition-colors">
                    EXPLORE PILLAR
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#8FEA22]/10 border border-[#8FEA22]/40 flex items-center justify-center group-hover:bg-[#8FEA22] group-hover:border-[#8FEA22] transition-all">
                    <ArrowUpRight className="w-4 h-4 text-[#8FEA22] group-hover:text-[#020711] transition-colors" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
