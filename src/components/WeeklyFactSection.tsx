import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WEEKLY_BIOTECH_FACTS } from '../data/weeklyFactsData';
import { Sparkles, Zap, Share2, Check, ArrowRight, Dna, Atom } from 'lucide-react';

export const WeeklyFactSection: React.FC = () => {
  const [selectedFactId, setSelectedFactId] = useState<string>(WEEKLY_BIOTECH_FACTS[0].id);
  const [copied, setCopied] = useState(false);

  const activeFact = WEEKLY_BIOTECH_FACTS.find((f) => f.id === selectedFactId) || WEEKLY_BIOTECH_FACTS[0];

  const handleCopyFact = () => {
    const textToCopy = `🔬 GENOMENAUTS BIOTECHNOLOGY FACT (${activeFact.title}):\n\n${activeFact.summary}\n\nExplore more at GENOMENAUTS · SRMIST Ramapuram!`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="weekly-fact" className="relative py-20 md:py-28 bg-[#020711] border-t border-[#1B3045]/60 overflow-hidden scanline-bg">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#19D9FF]/8 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#8FEA22]/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION LABEL */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0A1222] border border-[#1B3045] mb-6 glow-box-cyan"
        >
          <Sparkles className="w-4 h-4 text-[#8FEA22] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#19D9FF] font-semibold">
            BIO-ORBIT · FACT OF THE WEEK
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#8FEA22] animate-ping" />
        </motion.div>

        {/* HEADLINE HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <h2 className="font-headline font-extrabold text-3xl sm:text-5xl lg:text-6xl leading-[1.2] tracking-normal text-[#F5F7FA] mb-4">
              Uncover the <br />
              <span className="text-cyan-green-gradient glow-text-cyan">code of nature.</span>
            </h2>
            <p className="text-[#8C9BB0] text-base sm:text-lg leading-relaxed">
              Every week, GENOMENAUTS highlights a groundbreaking, mind-bending fact from genomics, extremophile biology, AI protein design, and synthetic biology.
            </p>
          </div>
        </div>

        {/* TWO-COLUMN LAYOUT: FEATURED FACT DEEP-DIVE vs ARCHIVE SELECTOR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: FEATURED ACTIVE FACT DISPLAY CARD (7 COLS) */}
          <div className="lg:col-span-7 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFact.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="p-6 sm:p-8 rounded-3xl bg-[#0A1222] border-2 border-[#19D9FF]/40 hover:border-[#8FEA22] transition-all duration-300 shadow-[0_0_35px_rgba(25,217,255,0.15)] relative overflow-hidden card-shimmer glow-box-cyan flex-1 flex flex-col justify-between"
              >
                <div>
                  {/* CARD HEADER: WEEK BADGE & CATEGORY */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-[#1B3045]">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest font-extrabold bg-[#8FEA22]/15 text-[#8FEA22] border border-[#8FEA22]/40">
                        {activeFact.weekLabel}
                      </span>
                      {activeFact.isCurrentWeek && (
                        <span className="font-mono text-[10px] text-[#19D9FF] bg-[#19D9FF]/10 px-2.5 py-0.5 rounded-full border border-[#19D9FF]/30 font-bold">
                          LIVE NOW
                        </span>
                      )}
                    </div>

                    <span className="font-mono text-xs uppercase tracking-[0.18em] font-bold text-[#19D9FF]">
                      #{activeFact.category}
                    </span>
                  </div>

                  {/* FACT TITLE */}
                  <h3 className="font-headline font-extrabold text-2xl sm:text-3xl text-[#F5F7FA] mb-4 leading-snug">
                    {activeFact.title}
                  </h3>

                  {/* FACT SUMMARY HIGHLIGHT BOX */}
                  <div className="p-4 rounded-2xl bg-[#0C1425] border border-[#19D9FF]/30 mb-5 relative">
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-[#8FEA22] shrink-0 mt-0.5 animate-pulse" />
                      <p className="text-[#F5F7FA] text-sm sm:text-base leading-relaxed font-sans font-semibold">
                        "{activeFact.summary}"
                      </p>
                    </div>
                  </div>

                  {/* SCIENTIFIC INSIGHT & TAKEAWAY */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-widest text-[#19D9FF] font-extrabold block mb-1.5 flex items-center gap-1.5">
                        <Atom className="w-4 h-4 text-[#19D9FF]" />
                        <span>THE SCIENTIFIC MECHANISM</span>
                      </span>
                      <p className="text-[#8C9BB0] text-xs sm:text-sm leading-relaxed">
                        {activeFact.scientificInsight}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#020711]/80 border border-[#1B3045]">
                      <span className="font-mono text-[11px] uppercase tracking-widest text-[#8FEA22] font-bold block mb-1">
                        WHY IT MATTERS
                      </span>
                      <p className="text-[#F5F7FA] font-headline text-xs sm:text-sm font-bold">
                        {activeFact.takeaway}
                      </p>
                    </div>
                  </div>
                </div>

                {/* FOOTER TAGS & SHARE SIGNAL BUTTON */}
                <div className="pt-4 border-t border-[#1B3045] flex flex-wrap items-center justify-between gap-4 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {activeFact.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-mono uppercase tracking-wider bg-[#0C1425] border border-[#1B3045] text-[#8C9BB0]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={handleCopyFact}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#19D9FF]/15 border border-[#19D9FF]/40 text-[#19D9FF] hover:bg-[#19D9FF]/30 font-mono text-xs uppercase tracking-wider font-bold transition-all hover:scale-105 cursor-pointer shadow-sm"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-[#8FEA22]" />
                        <span className="text-[#8FEA22]">FACT COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-4 h-4" />
                        <span>SHARE FACT SIGNAL</span>
                      </>
                    )}
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: FACT ARCHIVE & SELECTOR LIST (5 COLS) */}
          <div className="lg:col-span-5 flex flex-col h-full justify-between">
            <div className="flex items-center justify-between mb-3 pb-1 border-b border-[#1B3045]/60">
              <div className="font-mono text-xs text-[#19D9FF] uppercase tracking-widest flex items-center gap-2 font-bold">
                <Dna className="w-4 h-4 text-[#19D9FF]" />
                <span>WEEKLY ARCHIVE VAULT ({WEEKLY_BIOTECH_FACTS.length})</span>
              </div>
              <span className="font-mono text-[10px] text-[#8FEA22] uppercase tracking-wider font-bold">
                SELECT TO EXPAND
              </span>
            </div>

            <div className="space-y-3 overflow-y-auto max-h-[580px] pr-1.5">
              {WEEKLY_BIOTECH_FACTS.map((fact) => {
                const isSelected = fact.id === activeFact.id;

                return (
                  <motion.div
                    key={fact.id}
                    onClick={() => setSelectedFactId(fact.id)}
                    whileHover={{ x: 4 }}
                    className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#0A1222] border-[#8FEA22] shadow-[0_0_20px_rgba(143,234,34,0.2)]'
                        : 'bg-[#0A1222]/70 border-[#1B3045] hover:border-[#19D9FF]/50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <span
                        className={`px-2.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider font-bold border ${
                          fact.isCurrentWeek
                            ? 'bg-[#8FEA22]/20 text-[#8FEA22] border-[#8FEA22]/40'
                            : 'bg-[#0C1425] text-[#8C9BB0] border-[#1B3045]'
                        }`}
                      >
                        {fact.weekLabel}
                      </span>

                      <span className="font-mono text-[10px] text-[#19D9FF] font-semibold">
                        #{fact.category}
                      </span>
                    </div>

                    <h4 className="font-headline font-bold text-sm text-[#F5F7FA] mb-1 leading-snug">
                      {fact.title}
                    </h4>

                    <p className="text-[#8C9BB0] text-xs leading-relaxed line-clamp-2 italic mb-2">
                      "{fact.summary}"
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-[#1B3045]/60 text-[10px] font-mono uppercase tracking-wider">
                      <span className={isSelected ? 'text-[#8FEA22] font-bold' : 'text-[#8C9BB0]'}>
                        {isSelected ? 'ACTIVE VIEWING' : 'VIEW INSIGHT'}
                      </span>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-[#8FEA22] translate-x-1' : 'text-[#8C9BB0]'}`} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
