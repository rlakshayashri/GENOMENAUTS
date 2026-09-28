import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT CLUB', href: '#about' },
    { name: 'DEPARTMENT', href: '#department' },
    { name: 'MEET THE TEAM', href: '#team' },
    { name: 'CONTACT & DATA', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[80px] flex items-center border-b border-[#1B3045]/80 ${
        scrolled ? 'bg-[#020711]/92 backdrop-blur-md shadow-lg shadow-[#020711]/60' : 'bg-[#020711]/85 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-4">
        
        {/* LEFT: BRAND BADGES (SRM LOGO + GENOMENAUTS LOGO + GENORBIT TITLE) */}
        <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="h-9 px-2 rounded-lg bg-white/95 border border-white/40 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
            <img src="/srm_logo.png" alt="SRMIST Ramapuram Logo" className="h-6 w-auto object-contain" />
          </div>

          <div className="w-[1px] h-6 bg-[#1B3045] hidden sm:block" />

          <div className="w-9 h-9 rounded-full border border-[#19D9FF]/70 bg-[#0A1222] flex items-center justify-center shadow-[0_0_12px_rgba(25,217,255,0.3)] group-hover:border-[#19D9FF] group-hover:shadow-[0_0_18px_rgba(25,217,255,0.5)] transition-all overflow-hidden p-0.5 shrink-0">
            <img src="/logo.png" alt="GENOMENAUTS Logo" className="w-full h-full object-contain rounded-full group-hover:scale-105 transition-transform duration-300" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-headline font-bold text-base sm:text-lg tracking-wider text-[#F5F7FA] group-hover:text-[#19D9FF] transition-colors leading-none">
                GENORBIT
              </span>
            </div>
            <span className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-[#8C9BB0] whitespace-nowrap mt-0.5">
              GENOMENAUTS · SRMIST RAMAPURAM
            </span>
          </div>
        </a>

        {/* CENTER: DESKTOP NAV LINKS */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-mono text-[10.5px] xl:text-[11px] uppercase tracking-[0.14em] text-[#8C9BB0] hover:text-[#19D9FF] transition-colors relative py-1 whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#19D9FF] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* RIGHT: RECRUITMENT STATUS & CTA BUTTON */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A1222] border border-[#1B3045] whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-[#8FEA22] animate-ping" />
            <span className="w-2 h-2 rounded-full bg-[#8FEA22] absolute" />
            <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-[#F5F7FA] pl-2 whitespace-nowrap">
              2026 RECRUITMENT ACTIVE
            </span>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#19D9FF]/60 text-[#19D9FF] hover:bg-[#19D9FF]/10 font-mono text-xs uppercase tracking-[0.15em] font-semibold transition-all hover:shadow-[0_0_15px_rgba(25,217,255,0.3)] hover:scale-[1.02] active:scale-95 whitespace-nowrap"
          >
            <span>JOIN US</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* MOBILE MENU TRIGGER BUTTON */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#8C9BB0] hover:text-[#F5F7FA] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#19D9FF]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[80px] left-0 right-0 bg-[#020711]/95 border-b border-[#1B3045] backdrop-blur-xl p-6 flex flex-col gap-5 shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A1222] border border-[#1B3045] w-fit">
            <span className="w-2 h-2 rounded-full bg-[#8FEA22]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#8FEA22]">
              2026 RECRUITMENT ACTIVE · GENOMENAUTS
            </span>
          </div>

          <nav className="flex flex-col gap-3.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-mono text-sm uppercase tracking-[0.18em] text-[#F5F7FA] hover:text-[#19D9FF] py-2 border-b border-[#1B3045]/40 flex items-center justify-between whitespace-nowrap"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-[#8C9BB0]" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="mt-2 text-center py-3 rounded-md bg-[#8FEA22] text-[#020711] font-mono text-xs uppercase tracking-[0.2em] font-bold shadow-[0_0_20px_rgba(143,234,34,0.3)] whitespace-nowrap"
          >
            JOIN THE ORBIT ↗
          </a>
        </div>
      )}
    </header>
  );
};
