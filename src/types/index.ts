export type DomainType = 
  | 'ALL'
  | 'MANAGEMENT'
  | 'DESIGN'
  | 'PR'
  | 'MEDIA'
  | 'BIO RESEARCH'
  | 'CONTENT';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  domain: DomainType;
  quote: string;
  isLeadership?: boolean;
  category?: '01 / DEPARTMENT' | '02 / FACULTY COORDINATORS' | '03 / STUDENT PRESIDENTS' | 'DOMAIN_POD';
  initials?: string;
  avatarColor?: string;
  avatarUrl?: string;
  accentColor?: string;
  linkedin?: string;
  email?: string;
  bio?: string;
}

export interface InterestFormData {
  fullName: string;
  registerNumberOrEmail: string;
  yearOfStudy: string;
  branchProgramme: string;
  targetDomain: string;
  motivation: string;
}

export interface BioinfoSubmissionData {
  submitterName: string;
  contactEmail: string;
  dataType: 'MACROMOLECULAR_MODEL' | 'GENOMIC_DATASET' | 'PIPELINE_SCRIPT' | 'OTHER';
  modelOrDataTitle: string;
  resourceLinkOrDetails: string;
  abstractDescription: string;
}

export interface HypotheticalScenario {
  id: string;
  title: string;
  tagline: string;
  domainCategory: string;
  description: string;
  keyQuestion: string;
  votes: number;
  tags: string[];
}
