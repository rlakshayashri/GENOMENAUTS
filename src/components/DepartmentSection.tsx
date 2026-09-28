import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Globe, Zap, Users, BookOpen, Rocket, Dna, Target } from 'lucide-react';

export const DepartmentSection: React.FC = () => {
  const [pulseMode, setPulseMode] = useState<'METRICS' | 'SPECTRUM'>('METRICS');
  const [counter, setCounter] = useState(0);

  // Animated counter for live minds metric
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => (prev < 200 ? prev + 10 : 200));
    }, 40);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { value: `${counter}+`, label: 'CURIOUS MINDS', icon: Users, color: '#19D9FF' },
    { value: '20+', label: 'PLANNED WORKSHOPS + EVENTS', icon: BookOpen, color: '#8FEA22' },
    { value: '15', label: 'ACTIVE PROJECTS', icon: Zap, color: '#C084FC' },
    { value: '01', label: 'SHARED MISSION', icon: Rocket, color: '#FB923C' },
  ];

  const keyAreas = [
    'Molecular Biology',
    'Genetic Engineering',
    'Microbiology',
    'Biochemistry',
    'Bioinformatics & Computational Biology',
    'Bioprocess Engineering',
    'Fermentation Technology',
    'Immunology',
    'Environmental Biotechnology',
    'Food Biotechnology',
  ];

  return (
    <section id="department" className="relative py-20 md:py-28 bg-[#020711] overflow-hidden border-t border-[#1B3045]/60 scanline-bg">
      {/* Background radial glow */}
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#8FEA22]/8 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: HEADLINE, ABOUT DEPARTMENT, VISION & KEY AREAS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* SECTION LABEL & INSTITUTION LOGO */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="px-3 py-1.5 rounded-xl bg-white/95 border border-white/40 inline-flex items-center shadow-md">
                <img src="/srm_logo.png" alt="SRMIST Ramapuram" className="h-7 w-auto object-contain" />
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1222] border border-[#1B3045] glow-box-cyan">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#19D9FF] font-semibold">
                  DEPARTMENT OF BIOTECHNOLOGY · SRMIST RAMAPURAM
                </span>
              </div>
            </div>

            {/* HEADLINE */}
            <h2 className="font-headline font-extrabold text-3xl sm:text-5xl lg:text-6xl leading-[1.25] tracking-normal text-[#F5F7FA]">
              Navigate the <br />
              <span className="text-cyan-green-gradient glow-text-cyan">code of life.</span>
            </h2>

            {/* OFFICIAL ABOUT DEPARTMENT TEXT */}
            <div className="p-6 rounded-2xl bg-[#0A1222] border border-[#1B3045] space-y-4 glow-box-cyan">
              <div className="flex items-center gap-2 text-[#19D9FF] font-mono text-xs font-bold">
                <Dna className="w-4 h-4 text-[#19D9FF]" />
                <span>ABOUT THE DEPARTMENT</span>
              </div>
              <p className="text-[#8C9BB0] text-sm sm:text-base leading-relaxed">
                The Department of Biotechnology at SRMIST Ramapuram provides students with a strong foundation in biological sciences through a combination of theoretical learning, practical laboratory training, research, and innovation. The department encourages students to explore biotechnology through projects, internships, workshops, and industry exposure while developing scientific and professional skills.
              </p>
            </div>

            {/* HOD'S MESSAGE FOR GENOMENAUTS */}
            <div className="p-6 rounded-2xl bg-[#0C1527] border border-[#19D9FF]/40 space-y-3.5 shadow-xl glow-box-cyan relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#1B3045] pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-[#19D9FF] bg-[#0A1222] flex items-center justify-center font-headline font-bold text-sm text-[#19D9FF] overflow-hidden shrink-0">
                    <img src="/hemavathy.png" alt="Dr. Hemavathy" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#19D9FF] font-extrabold block">
                      HOD'S MESSAGE FOR GENORBIT
                    </span>
                    <span className="text-[#F5F7FA] font-headline text-sm font-bold block">
                      Dr. Hemavathy · Head of Department
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-[#8C9BB0] text-xs sm:text-sm leading-relaxed italic">
                <p>
                  "In the era of exponential biological data, the synergy between biology, computer science, and statistics has become indispensable. This database is curated as a centralized, accessible resource for our students, researchers, and faculty to explore genomic, proteomic, and structural data with ease."
                </p>
                <p>
                  "The field is witnessing transformative advancements. From AI-driven drug discovery and AlphaFold-based protein structure prediction to single-cell multi-omics, metagenomics, and precision medicine, computational biology is redefining healthcare and biotechnology. Our focus is to equip students with skills aligned to these trending frontiers."
                </p>
                <p>
                  "I encourage you to utilize this platform for learning, research, and innovation, and to contribute towards building robust computational solutions for real-world biological challenges."
                </p>
              </div>
            </div>

            {/* DEPARTMENT VISION STATEMENT */}
            <div className="p-5 rounded-xl bg-[#0C1425] border border-[#1B3045] space-y-2">
              <div className="flex items-center gap-2 text-[#8FEA22] font-mono text-xs font-bold">
                <Target className="w-4 h-4 text-[#8FEA22]" />
                <span>DEPARTMENT VISION</span>
              </div>
              <p className="text-[#F5F7FA] font-headline text-base font-bold leading-relaxed">
                "To develop skilled, innovative, and responsible biotechnology professionals who can contribute to scientific advancement and real-world challenges."
              </p>
            </div>

            {/* KEY AREAS PILLS & FACULTY/CREW LINK */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1B3045]/60 pb-3">
                <div className="font-mono text-xs uppercase tracking-widest text-[#19D9FF] font-bold">
                  KEY CORE AREAS OF STUDY & RESEARCH
                </div>
                <a
                  href="#team"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#19D9FF]/40 bg-[#0C1425] text-[#19D9FF] hover:bg-[#19D9FF]/10 hover:border-[#19D9FF] font-mono text-[11px] uppercase tracking-[0.15em] font-semibold transition-all cursor-pointer w-fit shrink-0 shadow-sm"
                >
                  <span>MEET THE FACULTY & CREW</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="flex flex-wrap gap-2">
                {keyAreas.map((area, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-mono bg-[#0C1425] border border-[#1B3045] text-[#8C9BB0] hover:text-[#19D9FF] hover:border-[#19D9FF]/40 transition-colors"
                  >
                    #{area}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: DASHBOARD CARD "CLUB ACTIVITY PULSE" */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl bg-[#0A1222] border border-[#1B3045] p-6 sm:p-8 relative overflow-hidden shadow-2xl glow-box-cyan card-shimmer sticky top-28">
              
              {/* CARD TOP HEADER */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#1B3045]">
                <div className="flex items-center gap-2.5">
                  <Activity className="w-5 h-5 text-[#19D9FF] animate-pulse" />
                  <span className="font-headline text-sm font-bold tracking-wider text-[#F5F7FA]">
                    CLUB ACTIVITY PULSE
                  </span>
                </div>

                <div className="flex items-center gap-1 bg-[#0C1425] p-1 rounded-lg border border-[#1B3045]">
                  <button
                    onClick={() => setPulseMode('METRICS')}
                    className={`px-2 py-1 rounded font-mono text-[10px] uppercase transition-all ${
                      pulseMode === 'METRICS' ? 'bg-[#19D9FF]/20 text-[#19D9FF] font-bold' : 'text-[#8C9BB0]'
                    }`}
                  >
                    METRICS
                  </button>
                  <button
                    onClick={() => setPulseMode('SPECTRUM')}
                    className={`px-2 py-1 rounded font-mono text-[10px] uppercase transition-all ${
                      pulseMode === 'SPECTRUM' ? 'bg-[#8FEA22]/20 text-[#8FEA22] font-bold' : 'text-[#8C9BB0]'
                    }`}
                  >
                    SIGNAL
                  </button>
                </div>
              </div>

              {/* CARD CONTENT MODE */}
              {pulseMode === 'METRICS' ? (
                <div className="space-y-4 mb-8">
                  {stats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02, x: 4 }}
                        className="p-4 rounded-xl bg-[#0C1425] border border-[#1B3045]/80 flex items-center justify-between hover:border-[#19D9FF]/40 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="p-2.5 rounded-lg bg-[#0A1222] border border-[#1B3045]"
                            style={{ color: stat.color }}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#8C9BB0] font-semibold">
                            {stat.label}
                          </span>
                        </div>
                        <span className="font-headline font-bold text-2xl" style={{ color: stat.color }}>
                          {stat.value}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                /* SIMULATED SPECTRUM SIGNAL MODE */
                <div className="py-6 mb-8 space-y-6">
                  <div className="text-center font-mono text-xs text-[#19D9FF] uppercase tracking-widest">
                    ACTIVE GENOMICS SIGNAL WAVEFORM
                  </div>

                  <div className="h-28 flex items-end justify-between gap-1 px-2">
                    {Array.from({ length: 28 }).map((_, i) => {
                      const heights = [30, 60, 45, 90, 75, 40, 85, 100, 65, 35, 80, 50, 95, 70, 40, 85, 60, 90, 45, 75, 100, 30, 65, 80, 50, 95, 40, 70];
                      const height = heights[i % heights.length];
                      return (
                        <div
                          key={i}
                          className="w-full rounded-t bg-gradient-to-t from-[#19D9FF]/30 to-[#8FEA22] animate-pulse"
                          style={{
                            height: `${height}%`,
                            animationDuration: `${1 + (i % 5) * 0.4}s`,
                          }}
                        />
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between font-mono text-[10px] text-[#8C9BB0] pt-2 border-t border-[#1B3045]">
                    <span>FREQ: 432.8 MHz</span>
                    <span>BANDWIDTH: 10 Gb/s</span>
                    <span className="text-[#8FEA22]">LOCKED</span>
                  </div>
                </div>
              )}

              {/* CARD BOTTOM STATUS BAR */}
              <div className="pt-4 border-t border-[#1B3045] flex flex-wrap items-center justify-between text-[11px] font-mono text-[#8C9BB0] gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#8FEA22]" />
                  <span className="text-[#F5F7FA] font-bold">SYS / ONLINE</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#19D9FF]">
                  <Globe className="w-3.5 h-3.5" />
                  <span>LAT 12.82° N · LONG 80.04° E</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
