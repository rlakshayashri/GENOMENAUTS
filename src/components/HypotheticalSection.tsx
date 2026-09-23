import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INITIAL_HYPOTHETICALS } from '../data/hypotheticalsData';
import type { HypotheticalScenario } from '../types';
import { Sparkles, ThumbsUp, Lightbulb, PlusCircle, CheckCircle2, HelpCircle, ArrowUpRight } from 'lucide-react';

export const HypotheticalSection: React.FC = () => {
  const [scenarios, setScenarios] = useState<HypotheticalScenario[]>(INITIAL_HYPOTHETICALS);
  const [activeScenarioId, setActiveScenarioId] = useState<string>(INITIAL_HYPOTHETICALS[0].id);
  const [votedIds, setVotedIds] = useState<Record<string, boolean>>({});

  // New Hypothesis Form State
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newQuestion, setNewQuestion] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newDomain, setNewDomain] = useState('SYNTHETIC BIOLOGY');
  const [submittedNew, setSubmittedNew] = useState(false);

  const activeScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  const handleVote = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (votedIds[id]) return;

    setScenarios((prev) =>
      prev.map((sc) => (sc.id === id ? { ...sc, votes: sc.votes + 1 } : sc))
    );
    setVotedIds((prev) => ({ ...prev, [id]: true }));
  };

  const handleAddHypothesis = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newQuestion.trim()) return;

    const created: HypotheticalScenario = {
      id: `hypo-${Date.now()}`,
      title: newTitle,
      tagline: newQuestion,
      domainCategory: newDomain.toUpperCase(),
      description: newDescription || 'Submitted by a curious Genomenaut at SRMIST Ramapuram.',
      keyQuestion: newQuestion,
      votes: 1,
      tags: ['Student Hypothesis', 'SRMIST Ramapuram', 'Creative Bio'],
    };

    setScenarios([created, ...scenarios]);
    setActiveScenarioId(created.id);
    setSubmittedNew(true);
    setTimeout(() => {
      setSubmittedNew(false);
      setShowSubmitModal(false);
      setNewTitle('');
      setNewQuestion('');
      setNewDescription('');
    }, 1800);
  };

  return (
    <section id="hypotheticals" className="relative py-20 md:py-28 bg-[#020711] border-t border-[#1B3045]/60 overflow-hidden scanline-bg">
      {/* Background radial light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C084FC]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION LABEL */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0A1222] border border-[#1B3045] mb-6 glow-box-cyan"
        >
          <Lightbulb className="w-4 h-4 text-[#C084FC] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C084FC] font-semibold">
            06 / HYPOTHETICAL RESEARCH LAB
          </span>
        </motion.div>

        {/* HEADLINE & PROMPT INTRO */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <h2 className="font-headline font-extrabold text-3xl sm:text-5xl lg:text-6xl leading-[1.25] text-[#F5F7FA] mb-4">
              Experimenting with <br />
              <span className="text-cyan-green-gradient glow-text-cyan">what-if scenarios.</span>
            </h2>
            <p className="text-[#8C9BB0] text-base sm:text-lg leading-relaxed">
              Explore thought experiments designed to challenge biological assumptions, spark curiosity, and generate high-impact research questions at SRMIST Ramapuram.
            </p>
          </div>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C084FC] text-[#020711] font-mono text-xs uppercase tracking-[0.18em] font-extrabold hover:bg-[#D8B4FE] transition-all shadow-[0_0_25px_rgba(192,132,252,0.4)] hover:scale-[1.02] active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <PlusCircle className="w-4 h-4" />
            <span>PROPOSE A HYPOTHESIS</span>
          </button>
        </div>

        {/* TWO-COLUMN GRID: SCENARIO SELECTOR CARDS vs ACTIVE SCENARIO DETAIL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: SCENARIOS LIST (4 COLS) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="font-mono text-xs text-[#8C9BB0] uppercase tracking-widest mb-2 flex items-center gap-2">
              <HelpCircle className="w-3.5 h-3.5 text-[#19D9FF]" />
              <span>SELECT THOUGHT EXPERIMENT ({scenarios.length})</span>
            </div>

            {scenarios.map((sc) => {
              const isActive = sc.id === activeScenarioId;
              const hasVoted = votedIds[sc.id];

              return (
                <motion.div
                  key={sc.id}
                  onClick={() => setActiveScenarioId(sc.id)}
                  whileHover={{ x: 4 }}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#0A1222] border-[#C084FC] shadow-[0_0_25px_rgba(192,132,252,0.25)]'
                      : 'bg-[#0A1222]/70 border-[#1B3045] hover:border-[#19D9FF]/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="px-2.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider font-semibold bg-[#C084FC]/10 text-[#C084FC] border border-[#C084FC]/30">
                      {sc.domainCategory}
                    </span>

                    <button
                      onClick={(e) => handleVote(sc.id, e)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                        hasVoted
                          ? 'bg-[#8FEA22]/20 text-[#8FEA22] border border-[#8FEA22]/40 font-bold'
                          : 'bg-[#0C1425] text-[#8C9BB0] hover:text-[#19D9FF] border border-[#1B3045]'
                      }`}
                    >
                      <ThumbsUp className="w-3 h-3" />
                      <span>{sc.votes}</span>
                    </button>
                  </div>

                  <h4 className="font-headline font-bold text-lg text-[#F5F7FA] mb-1">
                    {sc.title}
                  </h4>
                  <p className="text-[#8C9BB0] text-xs leading-relaxed line-clamp-2">
                    {sc.tagline}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT: ACTIVE SCENARIO DEEP-DIVE CARD (7 COLS) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScenario.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="p-8 sm:p-10 rounded-2xl bg-[#0A1222] border border-[#1B3045] shadow-2xl relative overflow-hidden card-shimmer glow-box-cyan"
              >
                {/* DOMAIN BADGE & VOTE BUTTON */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#1B3045]">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#19D9FF]">
                    {activeScenario.domainCategory}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[#8C9BB0]">RELEVANCE INDEX</span>
                    <button
                      onClick={(e) => handleVote(activeScenario.id, e)}
                      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                        votedIds[activeScenario.id]
                          ? 'bg-[#8FEA22] text-[#020711] shadow-[0_0_15px_rgba(143,234,34,0.4)]'
                          : 'bg-[#19D9FF]/10 border border-[#19D9FF]/40 text-[#19D9FF] hover:bg-[#19D9FF]/20'
                      }`}
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>{activeScenario.votes} VOTES</span>
                    </button>
                  </div>
                </div>

                {/* SCENARIO TITLE & TAGLINE */}
                <h3 className="font-headline font-extrabold text-3xl sm:text-4xl text-[#F5F7FA] mb-4">
                  {activeScenario.title}
                </h3>
                <div className="p-4 rounded-xl bg-[#0C1425] border border-[#1B3045] text-[#19D9FF] font-mono text-sm font-semibold mb-6 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#8FEA22] shrink-0 mt-0.5" />
                  <span>"{activeScenario.tagline}"</span>
                </div>

                {/* DESCRIPTION */}
                <div className="space-y-4 mb-8">
                  <p className="text-[#8C9BB0] text-base leading-relaxed">
                    {activeScenario.description}
                  </p>
                  <div className="p-5 rounded-xl bg-[#020711] border border-[#1B3045] space-y-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#8FEA22] font-bold block">
                      CENTRAL RESEARCH QUESTION
                    </span>
                    <p className="text-[#F5F7FA] font-headline text-lg font-bold">
                      {activeScenario.keyQuestion}
                    </p>
                  </div>
                </div>

                {/* TAGS & CTA */}
                <div className="pt-6 border-t border-[#1B3045] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {activeScenario.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-[#0C1425] border border-[#1B3045] text-[#8C9BB0]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#19D9FF] hover:underline font-bold"
                  >
                    <span>EXPLORE IN LAB</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* MODAL TO PROPOSE A NEW HYPOTHESIS */}
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020711]/85 backdrop-blur-md">
            <div className="relative w-full max-w-lg rounded-2xl bg-[#0A1222] border border-[#1B3045] p-6 sm:p-8 shadow-2xl overflow-hidden glow-box-cyan">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1B3045]">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-[#C084FC]" />
                  <span className="font-headline font-bold text-lg text-[#F5F7FA]">
                    PROPOSE A HYPOTHETICAL
                  </span>
                </div>
                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="text-[#8C9BB0] hover:text-[#F5F7FA] font-mono text-xs"
                >
                  [CLOSE]
                </button>
              </div>

              {submittedNew ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#8FEA22] mx-auto" />
                  <h4 className="font-headline font-bold text-2xl text-[#F5F7FA]">
                    Hypothesis Registered!
                  </h4>
                  <p className="text-[#8C9BB0] text-xs font-mono">
                    Your creative scenario has been published to the Genomenauts orbit.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleAddHypothesis} className="space-y-4">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#8C9BB0] mb-1">
                      HYPOTHESIS TITLE *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Synthetic Bacterial Neurons"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0C1425] border border-[#1B3045] text-[#F5F7FA] placeholder-[#8C9BB0]/50 text-sm focus:outline-none focus:border-[#C084FC]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#8C9BB0] mb-1">
                      "WHAT IF...?" QUESTION *
                    </label>
                    <input
                      type="text"
                      placeholder="What if bacteria could transmit optical signals?"
                      value={newQuestion}
                      onChange={(e) => setNewQuestion(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0C1425] border border-[#1B3045] text-[#F5F7FA] placeholder-[#8C9BB0]/50 text-sm focus:outline-none focus:border-[#C084FC]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#8C9BB0] mb-1">
                      DOMAIN CATEGORY
                    </label>
                    <select
                      value={newDomain}
                      onChange={(e) => setNewDomain(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#0C1425] border border-[#1B3045] text-[#F5F7FA] text-sm focus:outline-none focus:border-[#C084FC]"
                    >
                      <option value="SYNTHETIC BIOLOGY">SYNTHETIC BIOLOGY</option>
                      <option value="AI PROTEIN DESIGN">AI PROTEIN DESIGN</option>
                      <option value="COMPUTATIONAL GENOMICS">COMPUTATIONAL GENOMICS</option>
                      <option value="BIOLOGICAL COMPUTING">BIOLOGICAL COMPUTING</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#8C9BB0] mb-1">
                      ELABORATION / CONTEXT
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Provide context or mechanism..."
                      value={newDescription}
                      onChange={(e) => setNewDescription(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#0C1425] border border-[#1B3045] text-[#F5F7FA] placeholder-[#8C9BB0]/50 text-sm focus:outline-none focus:border-[#C084FC] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#C084FC] text-[#020711] font-mono text-xs uppercase tracking-[0.2em] font-extrabold hover:bg-[#D8B4FE] transition-colors cursor-pointer"
                  >
                    SUBMIT TO ORBIT
                  </button>
                </form>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
