import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, RefreshCw } from 'lucide-react';

export const CommandDeck: React.FC = () => {
  const [orbitSpeed, setOrbitSpeed] = useState<'NORMAL' | 'BOOST'>('NORMAL');

  return (
    <div className="mb-20">
      {/* COMMAND DECK INTRODUCTORY PANEL */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-2xl bg-[#0A1222] border border-[#1B3045] p-6 sm:p-10 relative overflow-hidden shadow-2xl glow-box-cyan card-shimmer"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C1425] border border-[#1B3045] w-fit">
                <Compass className="w-4 h-4 text-[#19D9FF] animate-spin" style={{ animationDuration: '10s' }} />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#19D9FF] font-semibold">
                  GENORBIT / COMMAND DECK
                </span>
              </div>

              {/* Orbit mode switcher */}
              <button
                onClick={() => setOrbitSpeed(orbitSpeed === 'NORMAL' ? 'BOOST' : 'NORMAL')}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0C1425] border border-[#1B3045] text-xs font-mono text-[#8C9BB0] hover:text-[#8FEA22] transition-colors"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${orbitSpeed === 'BOOST' ? 'animate-spin text-[#8FEA22]' : ''}`} />
                <span>{orbitSpeed === 'BOOST' ? 'HIGH-SPEED ORBIT' : 'STANDARD ORBIT'}</span>
              </button>
            </div>

            <h3 className="font-headline font-bold text-3xl sm:text-5xl text-[#F5F7FA] mb-6 leading-tight">
              One orbit. <br />
              <span className="text-cyan-green-gradient glow-text-cyan">Many ways to move it.</span>
            </h3>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-xl bg-[#0C1425] border border-[#1B3045] hover:border-[#19D9FF]/50 transition-colors"
              >
                <div className="font-headline font-bold text-4xl text-[#19D9FF] mb-1">
                  20
                </div>
                <div className="font-mono text-xs uppercase tracking-[0.15em] text-[#8C9BB0] font-semibold">
                  PEOPLE IN THE CURRENT ORBIT
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-xl bg-[#0C1425] border border-[#1B3045] hover:border-[#8FEA22]/50 transition-colors"
              >
                <div className="font-headline font-bold text-4xl text-[#8FEA22] mb-1">
                  06
                </div>
                <div className="font-mono text-xs uppercase tracking-[0.15em] text-[#8C9BB0] font-semibold">
                  CREATIVE + RESEARCH DOMAINS
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT: CIRCULAR ORBITAL VISUALIZATION */}
          <div className="lg:col-span-5 flex justify-center items-center py-6">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
              
              {/* Outer Orbit Rings with speed variation */}
              <div
                className="absolute inset-0 rounded-full border border-[#19D9FF]/30"
                style={{
                  animation: `orbitRotate ${orbitSpeed === 'BOOST' ? '8s' : '25s'} linear infinite`,
                }}
              />
              <div
                className="absolute inset-4 rounded-full border border-dashed border-[#8FEA22]/40"
                style={{
                  animation: `orbitRotate ${orbitSpeed === 'BOOST' ? '12s' : '35s'} linear infinite reverse`,
                }}
              />
              <div className="absolute inset-10 rounded-full border border-[#19D9FF]/40" />

              {/* Orbiting Nodes */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#19D9FF] shadow-[0_0_15px_#19D9FF]" />
              <div className="absolute bottom-6 right-6 w-3.5 h-3.5 rounded-full bg-[#8FEA22] shadow-[0_0_12px_#8FEA22]" />
              <div className="absolute top-12 left-6 w-4 h-4 rounded-full bg-[#C084FC] shadow-[0_0_12px_#C084FC]" />
              <div className="absolute bottom-10 left-12 w-3.5 h-3.5 rounded-full bg-[#FB923C] shadow-[0_0_12px_#FB923C]" />

              {/* CENTER CORE: GN */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-24 h-24 rounded-full bg-[#0C1425] border-2 border-[#19D9FF] flex flex-col items-center justify-center shadow-[0_0_40px_rgba(25,217,255,0.5)] z-10 cursor-pointer"
              >
                <span className="font-headline font-extrabold text-2xl tracking-wider text-[#F5F7FA]">
                  GN
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#8FEA22]">
                  ORBIT CORE
                </span>
              </motion.div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};
