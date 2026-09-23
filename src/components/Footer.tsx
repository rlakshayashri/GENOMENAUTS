import React from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#020711] border-t border-[#1B3045] pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MAIN FOOTER ROW WITH PERFECT ALIGNMENT */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-12 border-b border-[#1B3045]/60">
          
          {/* LEFT: BRANDING */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-full border border-[#19D9FF]/50 bg-[#0A1222] flex items-center justify-center shadow-[0_0_15px_rgba(25,217,255,0.3)] overflow-hidden p-0.5">
              <img src="/logo.png" alt="GENOMENAUTS Logo" className="w-full h-full object-contain rounded-full" />
            </div>
            <div>
              <div className="font-headline font-bold text-xl tracking-wider text-[#F5F7FA]">
                GENOMENAUTS
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8C9BB0] whitespace-nowrap">
                SRMIST RAMAPURAM / BIOTECHNOLOGY
              </div>
            </div>
          </div>

          {/* CENTER: WHATSAPP COMMUNITY CTA BUTTON (ALWAYS SINGLE LINE) */}
          <a
            href="https://chat.whatsapp.com/C95GLOFgT5H2p3M8u6VKJG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] font-mono text-xs uppercase tracking-[0.16em] font-bold hover:bg-[#25D366]/25 transition-all shadow-[0_0_20px_rgba(37,211,102,0.2)] whitespace-nowrap shrink-0 hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>JOIN WHATSAPP COMMUNITY</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </a>

          {/* RIGHT: NAVIGATION LINKS (CLEAN SINGLE HORIZONTAL ROW) */}
          <nav className="flex flex-wrap items-center justify-center lg:justify-end gap-5 sm:gap-6 font-mono text-xs uppercase tracking-[0.15em] text-[#8C9BB0] shrink-0">
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-[#19D9FF] transition-colors whitespace-nowrap">
              About Club
            </a>
            <a href="#department" onClick={(e) => handleNavClick(e, '#department')} className="hover:text-[#19D9FF] transition-colors whitespace-nowrap">
              Department
            </a>
            <a href="#team" onClick={(e) => handleNavClick(e, '#team')} className="hover:text-[#19D9FF] transition-colors whitespace-nowrap">
              Meet the Team
            </a>
            <a href="#hypotheticals" onClick={(e) => handleNavClick(e, '#hypotheticals')} className="hover:text-[#19D9FF] transition-colors whitespace-nowrap">
              Hypothetical Lab
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-[#19D9FF] transition-colors whitespace-nowrap">
              Contact & Data
            </a>
          </nav>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-[#8C9BB0] gap-4">
          <div>
            © 2026 GENOMENAUTS · SRM Institute of Science and Technology, Ramapuram Campus
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8FEA22]" />
            <span>SYS STATUS: NORMAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
