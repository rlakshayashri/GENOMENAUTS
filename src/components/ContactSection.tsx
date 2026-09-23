import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, CheckCircle2, Lock, ArrowUpRight, Radio, Loader2, Database, UserPlus, UploadCloud, FileCode2, MessageCircle } from 'lucide-react';
import type { InterestFormData, BioinfoSubmissionData } from '../types';

export const ContactSection: React.FC = () => {
  const [formMode, setFormMode] = useState<'RECRUITMENT' | 'DATA_SUBMISSION'>('RECRUITMENT');

  // RECRUITMENT FORM STATE
  const [formData, setFormData] = useState<InterestFormData>({
    fullName: '',
    registerNumberOrEmail: '',
    yearOfStudy: '',
    branchProgramme: '',
    targetDomain: '',
    motivation: '',
  });

  // DATA SUBMISSION FORM STATE
  const [bioinfoData, setBioinfoData] = useState<BioinfoSubmissionData>({
    submitterName: '',
    contactEmail: '',
    dataType: 'MACROMOLECULAR_MODEL',
    modelOrDataTitle: '',
    resourceLinkOrDetails: '',
    abstractDescription: '',
  });

  const [isTransmitting, setIsTransmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateRecruitment = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.registerNumberOrEmail.trim()) errs.registerNumberOrEmail = 'Contact detail is required';
    if (!formData.yearOfStudy) errs.yearOfStudy = 'Please select your year of study';
    if (!formData.branchProgramme.trim()) errs.branchProgramme = 'Branch/Programme is required';
    if (!formData.targetDomain) errs.targetDomain = 'Please select a domain to explore';
    if (!formData.motivation.trim()) errs.motivation = 'Please tell us what brings you here';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateBioinfo = () => {
    const errs: Record<string, string> = {};
    if (!bioinfoData.submitterName.trim()) errs.submitterName = 'Submitter name is required';
    if (!bioinfoData.contactEmail.trim()) errs.contactEmail = 'Contact email is required';
    if (!bioinfoData.modelOrDataTitle.trim()) errs.modelOrDataTitle = 'Title is required';
    if (!bioinfoData.resourceLinkOrDetails.trim()) errs.resourceLinkOrDetails = 'Link or data payload detail is required';
    if (!bioinfoData.abstractDescription.trim()) errs.abstractDescription = 'Brief abstract description is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = formMode === 'RECRUITMENT' ? validateRecruitment() : validateBioinfo();

    if (isValid) {
      setIsTransmitting(true);
      setTimeout(() => {
        setIsTransmitting(false);
        setSubmitted(true);
      }, 1200);
    }
  };

  const resetForms = () => {
    setFormData({
      fullName: '',
      registerNumberOrEmail: '',
      yearOfStudy: '',
      branchProgramme: '',
      targetDomain: '',
      motivation: '',
    });
    setBioinfoData({
      submitterName: '',
      contactEmail: '',
      dataType: 'MACROMOLECULAR_MODEL',
      modelOrDataTitle: '',
      resourceLinkOrDetails: '',
      abstractDescription: '',
    });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-[#020711] border-t border-[#1B3045]/60 overflow-hidden scanline-bg">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-0 w-[550px] h-[550px] bg-[#19D9FF]/8 rounded-full blur-[150px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION LABEL */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1222] border border-[#1B3045] mb-6 glow-box-cyan"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#19D9FF] font-semibold">
            05 / JOIN THE CLUB & DATA SUBMISSION
          </span>
        </motion.div>

        {/* HEADLINE + SUPPORTING COPY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="font-headline font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-[#F5F7FA] mb-6">
            Your next <br />
            <span className="text-[#19D9FF] glow-text-cyan">discovery</span> <br />
            <span className="text-cyan-green-gradient">starts here.</span>
          </h2>
          <p className="text-[#8C9BB0] text-base sm:text-lg leading-relaxed">
            Join the orbit at SRMIST Ramapuram Campus, connect with our official WhatsApp community, or submit your bioinformatics datasets and PDB models directly.
          </p>
        </motion.div>

        {/* TWO COLUMN GRID: SIGNAL DETAILS vs FORM PORTAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE: SIGNAL US & LOCATION INFO (SRMIST RAMAPURAM) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="p-8 rounded-2xl bg-[#0A1222] border border-[#1B3045] shadow-2xl relative overflow-hidden space-y-6 card-shimmer glow-box-cyan">
              <div className="flex items-center gap-2.5 text-[#19D9FF]">
                <Radio className="w-5 h-5 animate-pulse" />
                <span className="font-headline text-sm uppercase tracking-[0.2em] font-bold text-[#F5F7FA]">
                  SIGNAL US · SRMIST RAMAPURAM
                </span>
              </div>

              {/* WHATSAPP COMMUNITY CHANNEL (HIGHLIGHTED) */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0C1425] border border-[#25D366]/50 shadow-[0_0_20px_rgba(37,211,102,0.15)]">
                <div className="p-2.5 rounded-lg bg-[#0A1222] border border-[#25D366]/60 text-[#25D366]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[#8FEA22] font-bold">
                    OFFICIAL WHATSAPP COMMUNITY
                  </div>
                  <a
                    href="https://chat.whatsapp.com/C95GLOFgT5H2p3M8u6VKJG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-headline font-bold text-base text-[#25D366] hover:underline"
                  >
                    <span>JOIN WHATSAPP COMMUNITY</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <p className="text-[11px] text-[#8C9BB0] font-sans">
                    Connect with student builders, researchers, and club updates.
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0C1425] border border-[#1B3045]">
                <div className="p-2.5 rounded-lg bg-[#0A1222] border border-[#1B3045] text-[#19D9FF]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[#8C9BB0] mb-1">
                    PRIMARY TRANSMISSION
                  </div>
                  <a
                    href="mailto:genomenauts@gmail.com"
                    className="font-headline font-bold text-base text-[#F5F7FA] hover:text-[#19D9FF] transition-colors"
                  >
                    genomenauts@gmail.com
                  </a>
                </div>
              </div>

              {/* LOCATION (SRMIST RAMAPURAM) */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0C1425] border border-[#1B3045]">
                <div className="p-2.5 rounded-lg bg-[#0A1222] border border-[#1B3045] text-[#8FEA22]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[#8C9BB0] mb-1">
                    BASE LAB LOCATION
                  </div>
                  <div className="font-headline font-bold text-sm sm:text-base text-[#F5F7FA] leading-snug">
                    Department of Biotechnology <br />
                    <span className="text-[#8FEA22] font-semibold">SRMIST Ramapuram Campus</span> <br />
                    <span className="text-[#8C9BB0] font-normal text-xs">Bharathi Salai, Ramapuram, Chennai - 600089</span>
                  </div>
                </div>
              </div>

              {/* SUBMISSION DATA PORTAL INFO */}
              <div className="p-4 rounded-xl bg-[#0C1425] border border-[#1B3045] space-y-2">
                <div className="flex items-center gap-2 text-[#C084FC] font-mono text-xs font-bold">
                  <Database className="w-4 h-4" />
                  <span>BIOINFO DATA VAULT</span>
                </div>
                <p className="text-[#8C9BB0] text-xs leading-relaxed">
                  Accepting PDB structure models, ESMFold predictions, FASTQ alignment scripts, and novel bioinformatics datasets.
                </p>
              </div>

              {/* OPERATIONAL METRICS */}
              <div className="pt-4 border-t border-[#1B3045] grid grid-cols-2 gap-4 font-mono text-xs text-[#8C9BB0]">
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-[#19D9FF]">CAMPUS</span>
                  <span className="text-[#F5F7FA] font-bold">RAMAPURAM</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-[#8FEA22]">ACCEPTED MAJORS</span>
                  <span className="text-[#F5F7FA] font-bold">ALL DISCIPLINES</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT SIDE: TOGGLEABLE FORM (RECRUITMENT INTEREST vs BIOINFO DATA SUBMISSION) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0A1222] border border-[#1B3045] shadow-2xl relative glow-box-green card-shimmer">
              
              {/* FORM MODE SWITCHER TABS */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#1B3045]">
                <div className="flex items-center gap-2 bg-[#0C1425] p-1 rounded-xl border border-[#1B3045]">
                  <button
                    type="button"
                    onClick={() => { setFormMode('RECRUITMENT'); setSubmitted(false); setErrors({}); }}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                      formMode === 'RECRUITMENT'
                        ? 'bg-[#8FEA22]/20 text-[#8FEA22] border border-[#8FEA22]/40 font-bold'
                        : 'text-[#8C9BB0] hover:text-[#F5F7FA]'
                    }`}
                  >
                    <UserPlus className="w-3.5 h-3.5" />
                    <span>RECRUITMENT FORM</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => { setFormMode('DATA_SUBMISSION'); setSubmitted(false); setErrors({}); }}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                      formMode === 'DATA_SUBMISSION'
                        ? 'bg-[#19D9FF]/20 text-[#19D9FF] border border-[#19D9FF]/40 font-bold'
                        : 'text-[#8C9BB0] hover:text-[#F5F7FA]'
                    }`}
                  >
                    <UploadCloud className="w-3.5 h-3.5" />
                    <span>SUBMIT BIOINFO DATA</span>
                  </button>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0C1425] border border-[#1B3045]">
                  <Lock className="w-3.5 h-3.5 text-[#8FEA22]" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#8FEA22]">
                    ENCRYPTED
                  </span>
                </div>
              </div>

              {/* SUCCESS CONFIRMATION STATE */}
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-[#8FEA22]/20 border-2 border-[#8FEA22] flex items-center justify-center mx-auto text-[#8FEA22] shadow-[0_0_30px_rgba(143,234,34,0.5)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-headline font-bold text-3xl text-[#F5F7FA]">
                    {formMode === 'RECRUITMENT' ? 'Signal Transmitted!' : 'Bioinfo Data Payload Vaulted!'}
                  </h3>
                  <p className="text-[#8C9BB0] text-sm max-w-md mx-auto leading-relaxed">
                    {formMode === 'RECRUITMENT' ? (
                      <>
                        Thank you for applying, <span className="text-[#19D9FF] font-bold">{formData.fullName}</span>. Your interest profile has been submitted to the Genomenauts recruitment team at <span className="text-[#8FEA22] font-semibold">SRMIST Ramapuram</span>.
                      </>
                    ) : (
                      <>
                        Thank you, <span className="text-[#19D9FF] font-bold">{bioinfoData.submitterName}</span>. Your bioinformatics model/data submission (<span className="text-[#8FEA22] font-semibold">{bioinfoData.modelOrDataTitle}</span>) has been routed to the Genomenauts research team.
                      </>
                    )}
                  </p>
                  <button
                    onClick={resetForms}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#19D9FF] text-[#19D9FF] font-mono text-xs uppercase tracking-[0.18em] hover:bg-[#19D9FF]/10 transition-all font-bold cursor-pointer"
                  >
                    SUBMIT ANOTHER PAYLOAD
                  </button>
                </motion.div>
              ) : formMode === 'RECRUITMENT' ? (
                /* RECRUITMENT INTEREST FORM */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-[0.15em] text-[#8C9BB0] mb-2 font-semibold">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Aditi Rao"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0C1425] border border-[#1B3045] text-[#F5F7FA] placeholder-[#8C9BB0]/50 focus:outline-none focus:border-[#19D9FF] font-sans text-sm transition-colors"
                    />
                    {errors.fullName && <span className="text-red-400 font-mono text-[11px] mt-1 block">{errors.fullName}</span>}
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-[0.15em] text-[#8C9BB0] mb-2 font-semibold">
                      REGISTER NUMBER / EMAIL *
                    </label>
                    <input
                      type="text"
                      placeholder="Your best contact (SRMIST Ramapuram Reg No / Email)"
                      value={formData.registerNumberOrEmail}
                      onChange={(e) => setFormData({ ...formData, registerNumberOrEmail: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0C1425] border border-[#1B3045] text-[#F5F7FA] placeholder-[#8C9BB0]/50 focus:outline-none focus:border-[#19D9FF] font-sans text-sm transition-colors"
                    />
                    {errors.registerNumberOrEmail && <span className="text-red-400 font-mono text-[11px] mt-1 block">{errors.registerNumberOrEmail}</span>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-[0.15em] text-[#8C9BB0] mb-2 font-semibold">
                        YEAR OF STUDY *
                      </label>
                      <select
                        value={formData.yearOfStudy}
                        onChange={(e) => setFormData({ ...formData, yearOfStudy: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0C1425] border border-[#1B3045] text-[#F5F7FA] focus:outline-none focus:border-[#19D9FF] font-sans text-sm transition-colors appearance-none"
                      >
                        <option value="">Select year</option>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                      </select>
                      {errors.yearOfStudy && <span className="text-red-400 font-mono text-[11px] mt-1 block">{errors.yearOfStudy}</span>}
                    </div>

                    <div>
                      <label className="block font-mono text-xs uppercase tracking-[0.15em] text-[#8C9BB0] mb-2 font-semibold">
                        BRANCH / PROGRAMME *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. B.Tech Biotechnology"
                        value={formData.branchProgramme}
                        onChange={(e) => setFormData({ ...formData, branchProgramme: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0C1425] border border-[#1B3045] text-[#F5F7FA] placeholder-[#8C9BB0]/50 focus:outline-none focus:border-[#19D9FF] font-sans text-sm transition-colors"
                      />
                      {errors.branchProgramme && <span className="text-red-400 font-mono text-[11px] mt-1 block">{errors.branchProgramme}</span>}
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-[0.15em] text-[#8C9BB0] mb-2 font-semibold">
                      WHERE DO YOU WANT TO EXPLORE? *
                    </label>
                    <select
                      value={formData.targetDomain}
                      onChange={(e) => setFormData({ ...formData, targetDomain: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0C1425] border border-[#1B3045] text-[#F5F7FA] focus:outline-none focus:border-[#19D9FF] font-sans text-sm transition-colors appearance-none"
                    >
                      <option value="">Select domain</option>
                      <option value="Design">Design</option>
                      <option value="Management">Management</option>
                      <option value="PR">PR</option>
                      <option value="Media">Media</option>
                      <option value="Bio Research">Bio Research</option>
                      <option value="Content">Content</option>
                      <option value="Computational Biology">Computational Biology</option>
                      <option value="AI / ML">AI / ML</option>
                    </select>
                    {errors.targetDomain && <span className="text-red-400 font-mono text-[11px] mt-1 block">{errors.targetDomain}</span>}
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-[0.15em] text-[#8C9BB0] mb-2 font-semibold">
                      WHAT BRINGS YOU HERE? *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="A question, an idea, or a problem you want to explore..."
                      value={formData.motivation}
                      onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0C1425] border border-[#1B3045] text-[#F5F7FA] placeholder-[#8C9BB0]/50 focus:outline-none focus:border-[#19D9FF] font-sans text-sm transition-colors resize-none"
                    />
                    {errors.motivation && <span className="text-red-400 font-mono text-[11px] mt-1 block">{errors.motivation}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={isTransmitting}
                    className="w-full py-4 rounded-xl bg-[#8FEA22] text-[#020711] font-mono text-xs uppercase tracking-[0.2em] font-extrabold hover:bg-[#A2F126] transition-all duration-300 shadow-[0_0_30px_rgba(143,234,34,0.4)] flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 cursor-pointer disabled:opacity-70"
                  >
                    {isTransmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>TRANSMITTING SIGNAL...</span>
                      </>
                    ) : (
                      <>
                        <span>TRANSMIT INTEREST</span>
                        <ArrowUpRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* BIOINFORMATICS DATA & MODEL SUBMISSION FORM */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="p-4 rounded-xl bg-[#0C1425] border border-[#1B3045] flex items-center gap-3">
                    <FileCode2 className="w-5 h-5 text-[#19D9FF]" />
                    <span className="font-mono text-xs text-[#19D9FF]">
                      BIOINFORMATICS DATA & MODEL DEPOSIT PORTAL
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-[0.15em] text-[#8C9BB0] mb-2 font-semibold">
                        SUBMITTER NAME *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Dr. Hemavathy / Student Name"
                        value={bioinfoData.submitterName}
                        onChange={(e) => setBioinfoData({ ...bioinfoData, submitterName: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0C1425] border border-[#1B3045] text-[#F5F7FA] placeholder-[#8C9BB0]/50 focus:outline-none focus:border-[#19D9FF] font-sans text-sm transition-colors"
                      />
                      {errors.submitterName && <span className="text-red-400 font-mono text-[11px] mt-1 block">{errors.submitterName}</span>}
                    </div>

                    <div>
                      <label className="block font-mono text-xs uppercase tracking-[0.15em] text-[#8C9BB0] mb-2 font-semibold">
                        CONTACT EMAIL *
                      </label>
                      <input
                        type="email"
                        placeholder="your.email@srmist.edu.in"
                        value={bioinfoData.contactEmail}
                        onChange={(e) => setBioinfoData({ ...bioinfoData, contactEmail: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0C1425] border border-[#1B3045] text-[#F5F7FA] placeholder-[#8C9BB0]/50 focus:outline-none focus:border-[#19D9FF] font-sans text-sm transition-colors"
                      />
                      {errors.contactEmail && <span className="text-red-400 font-mono text-[11px] mt-1 block">{errors.contactEmail}</span>}
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-[0.15em] text-[#8C9BB0] mb-2 font-semibold">
                      SUBMISSION TYPE *
                    </label>
                    <select
                      value={bioinfoData.dataType}
                      onChange={(e) => setBioinfoData({ ...bioinfoData, dataType: e.target.value as any })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0C1425] border border-[#1B3045] text-[#F5F7FA] focus:outline-none focus:border-[#19D9FF] font-sans text-sm transition-colors appearance-none"
                    >
                      <option value="MACROMOLECULAR_MODEL">Macromolecular 3D Model (.pdb / .cif / AlphaFold)</option>
                      <option value="GENOMOMIC_DATASET">Genomic / Transcriptomic Dataset (.fasta / .fastq / VCF)</option>
                      <option value="PIPELINE_SCRIPT">Bio-Pipeline Tool / Script (.py / .r / .sh)</option>
                      <option value="OTHER">Other Research Data / Hypothesis</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-[0.15em] text-[#8C9BB0] mb-2 font-semibold">
                      DATA / MODEL TITLE *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Spike Protein Docking Complex PDB_8VXX"
                      value={bioinfoData.modelOrDataTitle}
                      onChange={(e) => setBioinfoData({ ...bioinfoData, modelOrDataTitle: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0C1425] border border-[#1B3045] text-[#F5F7FA] placeholder-[#8C9BB0]/50 focus:outline-none focus:border-[#19D9FF] font-sans text-sm transition-colors"
                    />
                    {errors.modelOrDataTitle && <span className="text-red-400 font-mono text-[11px] mt-1 block">{errors.modelOrDataTitle}</span>}
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-[0.15em] text-[#8C9BB0] mb-2 font-semibold">
                      RESOURCE LINK OR DATASET DETAILS *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. GitHub link, Google Drive URL, NCBI accession, or PDB ID"
                      value={bioinfoData.resourceLinkOrDetails}
                      onChange={(e) => setBioinfoData({ ...bioinfoData, resourceLinkOrDetails: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0C1425] border border-[#1B3045] text-[#F5F7FA] placeholder-[#8C9BB0]/50 focus:outline-none focus:border-[#19D9FF] font-sans text-sm transition-colors"
                    />
                    {errors.resourceLinkOrDetails && <span className="text-red-400 font-mono text-[11px] mt-1 block">{errors.resourceLinkOrDetails}</span>}
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-[0.15em] text-[#8C9BB0] mb-2 font-semibold">
                      ABSTRACT / METHODOLOGY SUMMARY *
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe the computational model, tools used, or biological findings..."
                      value={bioinfoData.abstractDescription}
                      onChange={(e) => setBioinfoData({ ...bioinfoData, abstractDescription: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0C1425] border border-[#1B3045] text-[#F5F7FA] placeholder-[#8C9BB0]/50 focus:outline-none focus:border-[#19D9FF] font-sans text-sm transition-colors resize-none"
                    />
                    {errors.abstractDescription && <span className="text-red-400 font-mono text-[11px] mt-1 block">{errors.abstractDescription}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={isTransmitting}
                    className="w-full py-4 rounded-xl bg-[#19D9FF] text-[#020711] font-mono text-xs uppercase tracking-[0.2em] font-extrabold hover:bg-[#A9EDFF] transition-all duration-300 shadow-[0_0_30px_rgba(25,217,255,0.4)] flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 cursor-pointer disabled:opacity-70"
                  >
                    {isTransmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>TRANSMITTING DATASET...</span>
                      </>
                    ) : (
                      <>
                        <span>TRANSMIT BIOINFO DATASET</span>
                        <ArrowUpRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
