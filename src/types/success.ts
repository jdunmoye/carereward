// Success Stories Types

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  category: 'diabetes' | 'hypertension' | 'mental_health' | 'preventive_care' | 'medication_adherence' | 'lifestyle_change';
  patientProfile: PatientProfile;
  initialChallenges: Challenge[];
  careTeamApproach: CareApproach;
  treatmentJourney: TreatmentJourney;
  outcomes: Outcome[];
  keyLearnings: string[];
  recommendations: string[];
  featured: boolean;
  publishedDate: Date;
  lastUpdated: Date;
  tags: string[];
}

export interface PatientProfile {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  chronicConditions: ChronicCondition[];
  riskFactors: RiskFactor[];
  demographics: Demographics;
  baselineMetrics: BaselineMetric[];
  insuranceType: string;
  location: string;
}

export interface ChronicCondition {
  id: string;
  name: string;
  code: string;
  severity: 'mild' | 'moderate' | 'severe';
  duration: number; // months
  complications: string[];
  medications: Medication[];
}

export interface RiskFactor {
  id: string;
  factor: string;
  level: 'low' | 'medium' | 'high';
  modifiable: boolean;
  interventions: string[];
}

export interface Demographics {
  race: string;
  ethnicity: string;
  education: string;
  employment: string;
  income: string;
  familyHistory: string[];
}

export interface BaselineMetric {
  id: string;
  metric: string;
  value: number;
  unit: string;
  date: Date;
  normalRange: string;
  status: 'normal' | 'elevated' | 'high' | 'critical';
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  adherence: number; // percentage
  sideEffects: string[];
  effectiveness: 'high' | 'medium' | 'low';
}

export interface Challenge {
  id: string;
  challenge: string;
  impact: 'high' | 'medium' | 'low';
  description: string;
  barriers: string[];
}

export interface CareApproach {
  id: string;
  teamMembers: TeamMember[];
  strategy: string;
  interventions: Intervention[];
  timeline: string;
  communicationPlan: string;
}

export interface TeamMember {
  id: string;
  role: string;
  name: string;
  specialty: string;
  involvement: string;
  contactFrequency: string;
}

export interface Intervention {
  id: string;
  type: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  frequency: string;
  effectiveness: number;
  cost: number;
}

export interface TreatmentJourney {
  id: string;
  phases: TreatmentPhase[];
  milestones: Milestone[];
  setbacks: Setback[];
  breakthroughs: Breakthrough[];
  totalDuration: number; // months
}

export interface TreatmentPhase {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  duration: number; // weeks
  focus: string;
  activities: string[];
  outcomes: string[];
}

export interface Milestone {
  id: string;
  name: string;
  description: string;
  date: Date;
  significance: 'major' | 'minor';
  impact: string;
  celebration: string;
}

export interface Setback {
  id: string;
  description: string;
  date: Date;
  cause: string;
  impact: 'high' | 'medium' | 'low';
  response: string;
  lessons: string[];
}

export interface Breakthrough {
  id: string;
  description: string;
  date: Date;
  trigger: string;
  impact: 'high' | 'medium' | 'low';
  sustainability: string;
  replication: string;
}

export interface Outcome {
  id: string;
  metric: string;
  baseline: number;
  current: number;
  improvement: number;
  unit: string;
  significance: 'significant' | 'moderate' | 'minimal';
  timeframe: string;
  sustainability: 'high' | 'medium' | 'low';
}

export interface SuccessStory {
  id: string;
  caseStudyId: string;
  title: string;
  summary: string;
  keyOutcomes: string[];
  patientQuote?: string;
  careTeamQuote?: string;
  featured: boolean;
  publishedDate: Date;
  views: number;
  shares: number;
  tags: string[];
}

export interface SuccessMetrics {
  id: string;
  period: Date;
  totalStories: number;
  featuredStories: number;
  totalViews: number;
  totalShares: number;
  avgEngagement: number;
  categoryBreakdown: CategoryMetrics[];
  topStories: StoryPerformance[];
}

export interface CategoryMetrics {
  category: string;
  count: number;
  views: number;
  shares: number;
  avgEngagement: number;
}

export interface StoryPerformance {
  storyId: string;
  title: string;
  views: number;
  shares: number;
  engagement: number;
  category: string;
}
