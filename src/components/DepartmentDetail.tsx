import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowUpRight, CheckCircle2, Award } from 'lucide-react';

export const DepartmentDetail: React.FC = () => {
  const [activeCommand, setActiveCommand] = useState<string>('cat mission.txt');
  const [terminalLog, setTerminalLog] = useState<string[]>([
    '// Department of Biotechnology · SRMIST Ramapuram',
    'MODE: ACTIVE ACADEMIC & RESEARCH PIPELINE',
    'FOCUS: TRANSLATIONAL & COMPUTATIONAL BIOTECHNOLOGY',
    'STATUS: GROWING ↗',
    '----------------------------------------',
    '- Provide quality education through strong theoretical and practical learning.',
    '- Encourage research, innovation, and interdisciplinary learning.',
    '- Provide hands-on exposure to modern biotechnology techniques.',
    '- Promote internships, workshops, industry interaction, and professional development.',
  ]);

  const commandPresets = [
    { cmd: 'cat mission.txt', label: 'MISSION' },
    { cmd: 'cat opportunities.txt', label: 'OPPORTUNITIES' },
    { cmd: 'python blast_align.py', label: 'BLAST RUN' },
    { cmd: 'npm run fold_ai', label: 'ALPHAFOLD2' },
  ];

  const handleRunCommand = (cmd: string) => {
    setActiveCommand(cmd);
    if (cmd === 'cat mission.txt') {
      setTerminalLog([
        '$ cat mission.txt',
        '----------------------------------------',
        'DEPARTMENT MISSION & OBJECTIVES:',
        '- Quality education through strong theoretical and practical learning.',
        '- Encourage research, innovation, and interdisciplinary learning.',
        '- Hands-on exposure to modern biotechnology techniques.',
        '- Promote internships, workshops, industry interaction, & professional development.',
      ]);
    } else if (cmd === 'cat opportunities.txt') {
      setTerminalLog([
        '$ cat opportunities.txt',
        '----------------------------------------',
        'STUDENT OPPORTUNITIES AT SRMIST RAMAPURAM:',
        'Students participate in research projects, internships, workshops, conferences, hackathons, and competitions to strengthen technical knowledge, teamwork, and problem-solving skills.',
      ]);
    } else if (cmd === 'python blast_align.py') {
      setTerminalLog([
        '$ python blast_align.py --query seq_491.fasta',
        '[1/3] Loading NCBI Nucleotide database...',
        '[2/3] Aligning 2,400 base pairs against reference human genome (GRCh38)...',
        '[3/3] Match score: 99.8% Identity | E-value: 0.00e+00',
        'SUCCESS: Variant identified at Chr12:49,102,841 C>T',
      ]);
    } else if (cmd === 'npm run fold_ai') {
      setTerminalLog([
        '$ npm run fold_ai --target=PDB_6VXX',
        '[AI CORE] Initializing ESMFold + AlphaFold multimer prediction...',
        '[GPU REASONING] Computing pLDDT confidence matrix...',
        'Average pLDDT Score: 94.2 (High confidence)',
        '3D PDB structure saved to /artifacts/protein_docking.pdb',
      ]);
    }
  };

  const featureRows = [
    {
      id: '01',
      title: 'Make science tangible',
      description: 'From molecular mechanisms to population-scale data, our department gives students the context to ask better questions.',
    },
    {
      id: '02',
      title: 'Learn across disciplines',
      description: 'Move between wet-lab validation, computational pipelines, and the conversations that connect them.',
    },
    {
      id: '03',
      title: 'Find your research orbit',
      description: 'With modern labs and a research-first community, there is room to explore before you have all the answers.',
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-[#020711] overflow-hidden border-t border-[#1B3045]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="font-headline font-extrabold text-4xl sm:text-6xl leading-[1.02] tracking-tight text-[#F5F7FA] mb-6">
            Rooted in biotech. <br />
            <span className="text-cyan-green-gradient glow-text-cyan">Wired for what's next.</span>
          </h2>
          <p className="text-[#8C9BB0] text-base sm:text-lg leading-relaxed">
            Inside SRMIST’s Department of Biotechnology, experimental science and computational intelligence share the same lab table.
          </p>
        </motion.div>

        {/* TWO-COLUMN LAYOUT: INTERACTIVE TERMINAL PANEL vs FEATURE ROWS & OPPORTUNITIES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT: INTERACTIVE TERMINAL PANEL WITH OFFICIAL MISSION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="rounded-2xl bg-[#0A1222] border border-[#1B3045] overflow-hidden shadow-2xl h-full flex flex-col justify-between glow-box-cyan">
              
              {/* TERMINAL HEADER */}
              <div className="px-5 py-4 bg-[#0C1425] border-b border-[#1B3045] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]/80 cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80 cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]/80 cursor-pointer" />
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px] text-[#8C9BB0]">
                  <Terminal className="w-3.5 h-3.5 text-[#19D9FF]" />
                  <span>department_mission_core.sh</span>
                </div>
              </div>

              {/* COMMAND PRESET BUTTONS */}
              <div className="px-4 py-2 bg-[#0A1222] border-b border-[#1B3045] flex items-center gap-2 overflow-x-auto">
                <span className="font-mono text-[10px] text-[#8C9BB0] uppercase">EXEC:</span>
                {commandPresets.map((preset) => (
                  <button
                    key={preset.cmd}
                    onClick={() => handleRunCommand(preset.cmd)}
                    className={`px-2.5 py-1 rounded font-mono text-[10px] uppercase transition-all whitespace-nowrap border ${
                      activeCommand === preset.cmd
                        ? 'bg-[#19D9FF]/20 text-[#19D9FF] border-[#19D9FF]/50 font-bold'
                        : 'bg-[#0C1425] text-[#8C9BB0] border-[#1B3045] hover:text-[#F5F7FA]'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              {/* TERMINAL LOG OUTPUT */}
              <div className="p-6 sm:p-7 font-mono text-xs sm:text-sm space-y-2.5 flex-1 bg-[#020711]/60">
                {terminalLog.map((line, idx) => (
                  <div
                    key={idx}
                    className={`${
                      line.startsWith('$')
                        ? 'text-[#8FEA22] font-bold'
                        : line.startsWith('SUCCESS') || line.startsWith('STUDENT')
                        ? 'text-[#19D9FF]'
                        : line.startsWith('//')
                        ? 'text-[#8C9BB0] italic'
                        : 'text-[#F5F7FA]'
                    }`}
                  >
                    {line}
                  </div>
                ))}
              </div>

              {/* TERMINAL FOOTER DECORATION */}
              <div className="px-6 py-3 bg-[#0C1425] border-t border-[#1B3045] font-mono text-[10px] text-[#8C9BB0] flex justify-between">
                <span className="flex items-center gap-1.5 text-[#8FEA22]">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>SYSTEM READY</span>
                </span>
                <span>SRMIST RAMAPURAM</span>
              </div>

            </div>
          </motion.div>

          {/* RIGHT: THREE NUMBERED FEATURE ROWS + STUDENT OPPORTUNITIES BOX */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {featureRows.map((row, idx) => (
                <motion.div
                  key={row.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  whileHover={{ x: 6, borderColor: '#19D9FF' }}
                  className="group p-6 rounded-2xl bg-[#0A1222] border border-[#1B3045] transition-all duration-300 flex flex-col sm:flex-row sm:items-center gap-6 cursor-pointer card-shimmer"
                >
                  <div className="font-headline font-bold text-2xl text-[#19D9FF] px-4 py-2 rounded-xl bg-[#0C1425] border border-[#1B3045] w-fit group-hover:bg-[#19D9FF]/15 group-hover:scale-105 transition-all">
                    {row.id}
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-xl text-[#F5F7FA] mb-2 group-hover:text-[#19D9FF] transition-colors">
                      {row.title}
                    </h3>
                    <p className="text-[#8C9BB0] text-sm leading-relaxed">
                      {row.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* OFFICIAL STUDENT OPPORTUNITIES BOX */}
            <div className="p-6 rounded-2xl bg-[#0C1425] border border-[#1B3045] space-y-3">
              <div className="flex items-center gap-2 text-[#8FEA22] font-mono text-xs font-bold">
                <Award className="w-4 h-4 text-[#8FEA22]" />
                <span>STUDENT OPPORTUNITIES & ENGAGEMENT</span>
              </div>
              <p className="text-[#8C9BB0] text-sm leading-relaxed">
                Students are encouraged to participate in research projects, internships, workshops, conferences, competitions, hackathons, and other activities that strengthen their technical knowledge, teamwork, communication, and problem-solving skills.
              </p>
            </div>

            {/* CTA BUTTON */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#0A1222] border border-[#8FEA22] text-[#8FEA22] font-mono text-xs uppercase tracking-[0.2em] font-extrabold hover:bg-[#8FEA22] hover:text-[#020711] transition-all duration-300 shadow-[0_0_20px_rgba(143,234,34,0.2)] hover:shadow-[0_0_30px_rgba(143,234,34,0.5)] hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>FIND YOUR PLACE IN THE ORBIT</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
