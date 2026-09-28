import React, { useState } from 'react';
import type { TeamMember } from '../types';
import { DOMAIN_COLORS } from '../data/teamData';
import { X, Sparkles, Dna, Mail, GraduationCap, Maximize2 } from 'lucide-react';

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

interface MemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export const MemberModal: React.FC<MemberModalProps> = ({ member, onClose }) => {
  const [showPhotoEnlarged, setShowPhotoEnlarged] = useState(false);

  if (!member) return null;

  const domainStyle = member.domain && DOMAIN_COLORS[member.domain as keyof typeof DOMAIN_COLORS] 
    ? DOMAIN_COLORS[member.domain as keyof typeof DOMAIN_COLORS]
    : { accent: '#19D9FF', text: 'text-[#19D9FF]', bg: 'bg-[#19D9FF]/10', border: 'border-[#19D9FF]/30' };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020711]/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl rounded-2xl bg-[#0A1222] border border-[#1B3045] p-6 sm:p-8 shadow-2xl overflow-hidden glow-box-cyan max-h-[90vh] overflow-y-auto">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#0C1425] border border-[#1B3045] text-[#8C9BB0] hover:text-[#F5F7FA] hover:border-[#19D9FF] transition-all cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* TOP AVATAR & HEADER */}
        <div className="flex items-center gap-5 sm:gap-6 mb-6">
          <div
            onClick={() => member.avatarUrl && setShowPhotoEnlarged(true)}
            className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#0C1425] border-2 flex items-center justify-center font-headline font-extrabold text-3xl text-[#F5F7FA] shadow-xl shrink-0 overflow-hidden relative group ${
              member.avatarUrl ? 'cursor-pointer hover:border-[#19D9FF]' : ''
            }`}
            style={{ borderColor: domainStyle.accent }}
            title={member.avatarUrl ? 'Click to enlarge photo' : undefined}
          >
            {member.avatarUrl ? (
              <>
                <img src={member.avatarUrl} alt={member.name} className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#020711]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="w-6 h-6 text-[#19D9FF] drop-shadow-md" />
                </div>
              </>
            ) : (
              member.initials
            )}
          </div>

          <div>
            <h3 className="font-headline font-bold text-2xl sm:text-3xl text-[#F5F7FA]">
              {member.name}
            </h3>
            <div className="font-mono text-xs uppercase tracking-wider text-[#8FEA22] mt-0.5 font-semibold">
              {member.role}
            </div>
            
            <div className="flex items-center gap-2 mt-2">
              {member.domain && (
                <span
                  className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider font-semibold border ${domainStyle.bg} ${domainStyle.text} ${domainStyle.border}`}
                >
                  {member.domain} POD
                </span>
              )}
              {member.avatarUrl && (
                <button
                  onClick={() => setShowPhotoEnlarged(true)}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider font-semibold bg-[#19D9FF]/10 text-[#19D9FF] border border-[#19D9FF]/30 hover:bg-[#19D9FF]/20 transition-all cursor-pointer"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>ENLARGE PHOTO</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* QUOTE BLOCK */}
        <div className="p-5 rounded-xl bg-[#0C1425] border border-[#1B3045] mb-6">
          <div className="font-mono text-[10px] uppercase tracking-widest text-[#19D9FF] mb-2 flex items-center gap-1.5 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ORBIT STATEMENT</span>
          </div>
          <p className="text-[#F5F7FA] text-base leading-relaxed italic">
            "{member.quote}"
          </p>
        </div>

        {/* ACADEMIC & RESEARCH PROFILE BIO IF PRESENT */}
        {member.bio && (
          <div className="p-5 rounded-xl bg-[#0C1425] border border-[#1B3045] mb-6 space-y-2.5">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#8FEA22] font-bold flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#8FEA22]" />
              <span>CREW PROFILE & LEADERSHIP BACKGROUND</span>
            </div>
            <div className="text-[#8C9BB0] text-xs sm:text-sm leading-relaxed space-y-3">
              {member.bio.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}

        {/* LINKEDIN AND EMAIL DETAILS IF PRESENT */}
        {(member.linkedin || member.email) && (
          <div className="p-5 rounded-xl bg-[#0C1425] border border-[#1B3045] mb-6 space-y-3">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#8FEA22] font-bold">
              DIRECT CONTACT SIGNALS
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#0A1222] border border-[#19D9FF]/40 text-[#19D9FF] hover:bg-[#19D9FF]/20 hover:border-[#19D9FF] transition-all font-mono text-xs font-bold shadow-md hover:scale-105"
                >
                  <LinkedInIcon />
                  <span>{member.linkedin.replace(/^https?:\/\/(www\.)?/, '')}</span>
                </a>
              )}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#0A1222] border border-[#8FEA22]/40 text-[#8FEA22] hover:bg-[#8FEA22]/20 hover:border-[#8FEA22] transition-all font-mono text-xs font-bold shadow-md hover:scale-105"
                >
                  <Mail className="w-4 h-4" />
                  <span>{member.email}</span>
                </a>
              )}
            </div>
          </div>
        )}

        {/* METADATA FOOTER */}
        <div className="pt-4 border-t border-[#1B3045] flex items-center justify-between text-xs font-mono text-[#8C9BB0]">
          <div className="flex items-center gap-2">
            <Dna className="w-4 h-4 text-[#8FEA22]" />
            <span>GENORBIT CREW MEMBER</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#8FEA22] text-[#020711] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#A2F126] transition-colors cursor-pointer"
          >
            CLOSE PROFILE
          </button>
        </div>

      </div>

      {/* ENLARGED FULL-SCREEN PHOTO LIGHTBOX OVERLAY */}
      {showPhotoEnlarged && member.avatarUrl && (
        <div 
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center p-4 bg-[#020711]/95 backdrop-blur-xl animate-fadeIn"
          onClick={() => setShowPhotoEnlarged(false)}
        >
          <div 
            className="relative max-w-md w-full rounded-2xl bg-[#0A1222] border border-[#19D9FF]/60 p-4 sm:p-5 shadow-[0_0_50px_rgba(25,217,255,0.3)] glow-box-cyan"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPhotoEnlarged(false)}
              className="absolute top-3 right-3 p-2 rounded-full bg-[#0C1425] border border-[#1B3045] text-[#8C9BB0] hover:text-[#F5F7FA] hover:border-[#19D9FF] transition-all cursor-pointer z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="rounded-xl overflow-hidden border border-[#1B3045] mb-4 bg-[#020711] flex items-center justify-center max-h-[70vh]">
              <img 
                src={member.avatarUrl} 
                alt={member.name} 
                className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
              />
            </div>

            <div className="flex items-center justify-between font-mono text-xs text-[#8C9BB0] border-t border-[#1B3045] pt-3">
              <div>
                <span className="text-[#F5F7FA] font-headline font-bold text-base block text-[#19D9FF]">{member.name}</span>
                <span className="text-[10px] text-[#8FEA22] uppercase tracking-wider font-semibold">{member.role}</span>
              </div>
              <button
                onClick={() => setShowPhotoEnlarged(false)}
                className="px-3 py-1.5 rounded-lg bg-[#19D9FF]/20 border border-[#19D9FF]/50 text-[#19D9FF] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#19D9FF]/30 transition-colors cursor-pointer"
              >
                CLOSE PHOTO
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
