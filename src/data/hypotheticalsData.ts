import type { HypotheticalScenario } from '../types';

export const INITIAL_HYPOTHETICALS: HypotheticalScenario[] = [
  {
    id: 'hypo-1',
    title: 'Synthetic Plastivore Ribozymes',
    tagline: 'What if RNA could digest microplastics in living ecosystems?',
    domainCategory: 'SYNTHETIC BIOLOGY & ENZYMATICS',
    description:
      'Imagine engineering self-assembling catalytic RNA ribozymes capable of breaking down polyethylene terephthalate (PET) into benign organic compounds without requiring protein translation vectors.',
    keyQuestion:
      'Can we design an catalytic RNA fold that targets synthetic carbon-carbon bonds in microplastics?',
    votes: 42,
    tags: ['RNA Folding', 'Microplastics', 'Catalytic RNA'],
  },
  {
    id: 'hypo-2',
    title: 'Generative Protein Design for Ambient Carbon Fixation',
    tagline: 'What if AI designed zero-activation-energy Rubisco enzymes?',
    domainCategory: 'AI PROTEIN DESIGN',
    description:
      'Plant RuBisCO is notoriously inefficient. Using de novo generative diffusion models (like RFdiffusion and ESM-3), what if we synthesize an artificial enzyme with 100x oxygen-discrimination and near-zero activation energy for industrial carbon capture?',
    keyQuestion:
      'What structural motifs eliminate photorespiration bottlenecks in carbon fixation?',
    votes: 58,
    tags: ['AlphaFold3', 'Carbon Capture', 'De Novo Enzymes'],
  },
  {
    id: 'hypo-3',
    title: 'Real-Time Regenerative Transcriptomics',
    tagline: 'What if we mapped single-cell RNA velocity during limb regeneration?',
    domainCategory: 'COMPUTATIONAL GENOMICS',
    description:
      'Axolotls can regenerate complete limbs, cardiac muscle, and spinal cord tissue. By tracking single-cell RNA sequencing velocity across all 100,000 cells in an amputated limb over 30 days, can we decode the exact genetic state machine that prevents scar tissue formation?',
    keyQuestion:
      'What gene regulatory networks trigger blastema formation instead of fibrotic scarring?',
    votes: 39,
    tags: ['scRNA-seq', 'Regeneration', 'Gene Networks'],
  },
  {
    id: 'hypo-4',
    title: 'DNA Strand Displacement Logic Gates',
    tagline: 'What if living cells performed matrix multiplication via DNA computing?',
    domainCategory: 'BIOLOGICAL COMPUTING',
    description:
      'Using nucleic acid strand displacement (MSD) circuits engineered into eukaryotic cytoplasm, we could compute complex neural networks directly inside cancer cells to trigger apoptosis only when multiple diagnostic biomarkers align.',
    keyQuestion:
      'How do we maximize signal-to-noise ratio in molecular DNA logic circuits in vivo?',
    votes: 51,
    tags: ['DNA Computing', 'Logic Gates', 'Theranostics'],
  },
];
