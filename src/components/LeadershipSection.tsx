import React from 'react';
import { motion } from 'framer-motion';
import { LEADERSHIP_MEMBERS } from '../data/teamData';
import type { TeamMember } from '../types';
import { ArrowUpRight, Sparkles, Mail } from 'lucide-react';

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

interface LeadershipSectionProps {
  onSelectMember?: (member: TeamMember) => void;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ onSelectMember }) => {
  const facultyMembers = LEADERSHIP_MEMBERS.filter(
    (m) => m.category === '01 / DEPARTMENT' || m.category === '02 / FACULTY COORDINATORS'
  );

  const studentPresidents = LEADERSHIP_MEMBERS.filter(
    (m) => m.category === '03 / STUDENT PRESIDENTS'
  );

  return (
    <div className="space-y-16">
      {/* ROW 1: HOD & FACULTY COORDINATORS */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-[#1B3045] pb-3">
          <Sparkles className="w-4 h-4 text-[#8FEA22]" />
          <h3 className="font-mono text-sm uppercase tracking-[0.2em] font-bold text-[#19D9FF]">
            01 / DEPARTMENT HOD & FACULTY COORDINATORS
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facultyMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -7, scale: 1.01 }}
              onClick={() => onSelectMember && onSelectMember(member)}
              className="group relative p-6 sm:p-7 rounded-2xl bg-[#0A1222] border border-[#1B3045] hover:border-[#19D9FF]/80 transition-all duration-300 cursor-pointer shadow-xl flex flex-col justify-between card-shimmer glow-box-cyan"
            >
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-full bg-[#0C1425] border-2 ${
                        member.avatarColor || 'border-[#19D9FF] text-[#19D9FF]'
                      } flex items-center justify-center font-headline font-bold text-xl shadow-[0_0_20px_rgba(25,217,255,0.2)] group-hover:scale-110 transition-transform duration-300 overflow-hidden shrink-0`}
                    >
                      {member.avatarUrl ? (
                        <img src={member.avatarUrl} alt={member.name} className="w-full h-full object-cover rounded-full" />
                      ) : (
                        member.initials
                      )}
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-xl text-[#F5F7FA] group-hover:text-[#19D9FF] transition-colors">
                        {member.name}
                      </h4>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#8FEA22] block mt-0.5 font-semibold">
                        {member.role}
                      </span>
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-[#0C1425] border border-[#1B3045] flex items-center justify-center group-hover:border-[#19D9FF] group-hover:bg-[#19D9FF]/15 transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-[#8C9BB0] group-hover:text-[#19D9FF]" />
                  </div>
                </div>

                <p className="text-[#8C9BB0] text-sm leading-relaxed mb-6 italic">
                  "{member.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#1B3045]/60 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.15em] text-[#8C9BB0]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8FEA22]" />
                  <span>IN THE GENOMENAUTS ORBIT</span>
                </div>
                <span className="text-[#19D9FF] group-hover:underline font-bold">PROFILE ↗</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ROW 2: STUDENT PRESIDENTS (HIGHLIGHTED & SPECIAL) */}
      <div className="space-y-8 relative pt-6">
        {/* Ambient Radial Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-gradient-to-r from-[#19D9FF]/10 via-[#8FEA22]/12 to-[#C084FC]/10 rounded-full blur-[110px] pointer-events-none" />

        {/* SECTION LABEL & BADGE */}
        <div className="flex items-center justify-between border-b border-[#1B3045] pb-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-[#8FEA22]/15 border border-[#8FEA22]/40 text-[#8FEA22]">
              <Sparkles className="w-4.5 h-4.5 animate-pulse" />
            </div>
            <h3 className="font-mono text-sm uppercase tracking-[0.2em] font-extrabold text-[#19D9FF] flex items-center gap-2">
              <span>02 / STUDENT PRESIDENTS</span>
            </h3>
          </div>
          <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-widest text-[#8FEA22] bg-[#8FEA22]/15 border border-[#8FEA22]/40 px-3 py-1 rounded-full font-bold">
            EXECUTIVE PRESIDENCY
          </span>
        </div>

        {/* PRESIDENTS CARDS GRID - PERFECT SYMMETRY & BALANCED PROPORTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto relative z-10">
          {studentPresidents.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -7, scale: 1.01 }}
              onClick={() => onSelectMember && onSelectMember(member)}
              className="group relative p-6 sm:p-7 rounded-2xl bg-[#0A1222] border border-[#1B3045] hover:border-[#8FEA22]/80 transition-all duration-300 cursor-pointer shadow-xl flex flex-col justify-between card-shimmer glow-box-cyan h-full"
            >
              {/* TOP PRESIDENT CROWN/BADGE */}
              <div className="absolute top-4 right-5 font-mono text-[9px] uppercase tracking-widest text-[#8FEA22] bg-[#8FEA22]/15 border border-[#8FEA22]/40 px-2.5 py-0.5 rounded-full font-bold">
                EXECUTIVE ORBIT
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-full bg-[#0C1425] border-2 ${
                          member.avatarColor || 'border-[#19D9FF] text-[#19D9FF]'
                        } flex items-center justify-center font-headline font-bold text-xl shadow-[0_0_20px_rgba(25,217,255,0.2)] group-hover:scale-110 transition-transform duration-300 overflow-hidden shrink-0`}
                      >
                        {member.avatarUrl ? (
                          <img src={member.avatarUrl} alt={member.name} className="w-full h-full object-cover rounded-full" />
                        ) : (
                          member.initials
                        )}
                      </div>
                      <div>
                        <h4 className="font-headline font-bold text-xl text-[#F5F7FA] group-hover:text-[#19D9FF] transition-colors">
                          {member.name}
                        </h4>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#8FEA22] block mt-0.5 font-semibold">
                          {member.role} · GENOMENAUTS
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* EQUALIZED QUOTE CONTAINER HEIGHT FOR PERFECT SYMMETRY */}
                  <div className="min-h-[52px] flex items-center mb-6">
                    <p className="text-[#8C9BB0] text-sm leading-relaxed italic">
                      "{member.quote}"
                    </p>
                  </div>
                </div>

                {/* DEDICATED CONTACT BAR */}
                {(member.linkedin || member.email) && (
                  <div className="mb-5 pt-3.5 border-t border-[#1B3045]/60 flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#8C9BB0] font-semibold">
                      DIRECT SIGNALS
                    </span>
                    <div className="flex items-center gap-2">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#19D9FF]/15 border border-[#19D9FF]/40 text-[#19D9FF] hover:bg-[#19D9FF]/30 hover:border-[#19D9FF] text-xs font-mono font-bold transition-all hover:scale-105 shadow-sm"
                          title="LinkedIn Profile"
                        >
                          <LinkedInIcon />
                          <span>LINKEDIN</span>
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#8FEA22]/15 border border-[#8FEA22]/40 text-[#8FEA22] hover:bg-[#8FEA22]/30 hover:border-[#8FEA22] text-xs font-mono font-bold transition-all hover:scale-105 shadow-sm"
                          title="Gmail Address"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>GMAIL</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#1B3045]/60 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.15em] text-[#8C9BB0]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8FEA22]" />
                  <span>PRESIDENTIAL ORBIT</span>
                </div>
                <span className="text-[#19D9FF] group-hover:underline font-bold">PROFILE ↗</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
