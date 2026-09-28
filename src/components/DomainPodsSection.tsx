import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DOMAIN_POD_MEMBERS, DOMAIN_COLORS } from '../data/teamData';
import type { TeamMember } from '../types';
import { Filter, ArrowUpRight, Search, X } from 'lucide-react';

export const DomainPodsSection: React.FC<{ onSelectMember?: (member: TeamMember) => void }> = ({ onSelectMember }) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const domainTabs = [
    'ALL',
    'BIORESEARCH',
    'DESIGN',
    'CONTENT',
    'PR',
    'MOTION MEDIA',
    'MANAGEMENT',
  ];

  const filteredMembers = DOMAIN_POD_MEMBERS.filter((member) => {
    const memberDomainNorm = member.domain.toUpperCase().replace('BIO RESEARCH', 'BIORESEARCH').replace('MEDIA', 'MOTION MEDIA');
    const matchesDomain = activeFilter === 'ALL' || memberDomainNorm.includes(activeFilter) || activeFilter.includes(memberDomainNorm);
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.quote.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDomain && matchesSearch;
  });

  return (
    <section id="domain-pods" className="relative py-20 md:py-28 bg-[#020711] border-t border-[#1B3045]/60 overflow-hidden scanline-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION LABEL */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1222] border border-[#1B3045] mb-6 glow-box-cyan">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#19D9FF] font-semibold">
            04 / DOMAIN PODS
          </span>
        </div>

        {/* HEADLINE + DESCRIPTION */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <h2 className="font-headline font-extrabold text-4xl sm:text-6xl leading-tight text-[#F5F7FA] mb-4">
              Find your <span className="text-cyan-green-gradient glow-text-cyan">frequency.</span>
            </h2>
            <p className="text-[#8C9BB0] text-base sm:text-lg leading-relaxed">
              Every domain has its own rhythm. Explore the people shaping what GENOMENAUTS becomes next across Bioresearch, Design, Content, PR, Motion Media, and Management.
            </p>
          </div>

          {/* DYNAMIC SEARCH INPUT */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-[#8C9BB0] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search crew members..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#0A1222] border border-[#1B3045] text-[#F5F7FA] placeholder-[#8C9BB0]/60 text-xs font-mono focus:outline-none focus:border-[#19D9FF] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C9BB0] hover:text-[#F5F7FA]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* DOMAIN FILTER BUTTONS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <div className="flex items-center gap-2 pr-2 border-r border-[#1B3045] text-[#8C9BB0]">
            <Filter className="w-4 h-4 text-[#19D9FF]" />
            <span className="font-mono text-xs uppercase tracking-widest hidden sm:inline">DOMAINS:</span>
          </div>

          {domainTabs.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-[0.18em] transition-all whitespace-nowrap border cursor-pointer ${
                  isActive
                    ? 'bg-[#8FEA22]/15 border-[#8FEA22] text-[#8FEA22] shadow-[0_0_20px_rgba(143,234,34,0.3)] font-bold'
                    : 'bg-[#0A1222] border-[#1B3045] text-[#8C9BB0] hover:text-[#F5F7FA] hover:border-[#19D9FF]/50'
                }`}
              >
                {tab}
                {tab === 'ALL' && ` (${DOMAIN_POD_MEMBERS.length})`}
              </button>
            );
          })}
        </div>

        {/* MEMBER CARDS GRID WITH FRAMER MOTION ANIMATE PRESENCE */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredMembers.map((member) => {
              const domainKey = (member.domain === 'BIO RESEARCH' ? 'BIO RESEARCH' : member.domain) as keyof typeof DOMAIN_COLORS;
              const domainStyle = DOMAIN_COLORS[domainKey] || DOMAIN_COLORS.MANAGEMENT;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={member.id}
                  onClick={() => onSelectMember && onSelectMember(member)}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group p-6 rounded-2xl bg-[#0A1222] border border-[#1B3045] hover:border-[#19D9FF]/70 transition-all duration-300 cursor-pointer shadow-xl flex flex-col justify-between card-shimmer glow-box-cyan"
                >
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-full bg-[#0C1425] border-2 flex items-center justify-center font-headline font-bold text-lg text-[#F5F7FA] transition-transform group-hover:scale-105 overflow-hidden shrink-0"
                          style={{ borderColor: domainStyle.accent }}
                        >
                          {member.avatarUrl ? (
                            <img src={member.avatarUrl} alt={member.name} className="w-full h-full object-cover rounded-full" />
                          ) : (
                            member.initials
                          )}
                        </div>
                        <div>
                          <h4 className="font-headline font-bold text-lg text-[#F5F7FA] group-hover:text-[#19D9FF] transition-colors">
                            {member.name}
                          </h4>
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[#8C9BB0]">
                            {member.role}
                          </span>
                        </div>
                      </div>

                      <span
                        className={`px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider font-semibold border ${domainStyle.bg} ${domainStyle.text} ${domainStyle.border}`}
                      >
                        {member.domain}
                      </span>
                    </div>

                    <p className="text-[#8C9BB0] text-sm leading-relaxed mb-6 italic">
                      "{member.quote}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1B3045]/60 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.15em] text-[#8C9BB0]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: domainStyle.accent }} />
                      <span>IN THE GENOMENAUTS ORBIT</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#8C9BB0] group-hover:text-[#19D9FF] transition-colors" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredMembers.length === 0 && (
          <div className="py-16 text-center text-[#8C9BB0] font-mono text-sm border border-dashed border-[#1B3045] rounded-2xl bg-[#0A1222]/50">
            NO MEMBERS FOUND MATCHING "{searchQuery || activeFilter}".
          </div>
        )}

      </div>
    </section>
  );
};
