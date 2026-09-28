import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { MolecularBackground } from './components/MolecularBackground';
import { HeroSection } from './components/HeroSection';
import { DepartmentSection } from './components/DepartmentSection';
import { CommandDeck } from './components/CommandDeck';
import { LeadershipSection } from './components/LeadershipSection';
import { DomainPodsSection } from './components/DomainPodsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MemberModal } from './components/MemberModal';
import type { TeamMember } from './types';

export function App() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="relative min-h-screen bg-[#020711] text-[#F5F7FA] bg-tech-grid">
      {/* PROCEDURAL DNA / MOLECULAR CANVAS BACKGROUND (FULL VIEWPORT) */}
      <MolecularBackground />

      {/* STICKY FIXED NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT CONTAINERS */}
      <main className="relative z-10">
        {/* SECTION 01: HERO / ABOUT CLUB */}
        <HeroSection />

        {/* SECTION 02: DEPARTMENT SECTION & ACTIVITY PULSE */}
        <DepartmentSection />

        {/* SECTION 03: MEET THE TEAM (LEADERSHIP & STUDENT PRESIDENTS) */}
        <section id="team" className="py-20 md:py-28 bg-[#020711] border-t border-[#1B3045]/60 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* SECTION LABEL */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0A1222] border border-[#1B3045] mb-6">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#19D9FF]">
                03 / THE CREW
              </span>
            </div>

            {/* HEADLINE */}
            <div className="max-w-3xl mb-16">
              <h2 className="font-headline font-extrabold text-4xl sm:text-6xl leading-tight text-[#F5F7FA] mb-4">
                People make the <br />
                <span className="text-cyan-green-gradient">pipeline move.</span>
              </h2>
              <p className="text-[#8C9BB0] text-base sm:text-lg leading-relaxed">
                Meet the mentors and student leaders building a more curious, capable, and collaborative biotech community at SRMIST Ramapuram.
              </p>
            </div>

            {/* COMMAND DECK VISUALIZER PANEL */}
            <CommandDeck />

            {/* HOD, FACULTY & PRESIDENTS CARDS */}
            <LeadershipSection onSelectMember={(member) => setSelectedMember(member)} />
          </div>
        </section>

        {/* SECTION 04: DOMAIN PODS */}
        <DomainPodsSection onSelectMember={(member) => setSelectedMember(member)} />

        {/* SECTION 05: JOIN THE CLUB & BIOINFO DATA SUBMISSION */}
        <ContactSection />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* MEMBER PROFILE MODAL */}
      <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </div>
  );
}

export default App;
