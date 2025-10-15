// Clinical Metrics Types

export interface ChronicCondition {
  id: string;
  name: string;
  code: string;
  category: string;
  frequency: number; // percentage
  pmpm: number;
  memberCount: number;
  prevalence: 'low' | 'medium' | 'high';
  severity: 'mild' | 'moderate' | 'severe';
  trend: 'increasing' | 'decreasing' | 'stable';
}

export interface MultiChronicity {
  chronicityLevel: '1' | '2' | '3' | '3+';
  frequency: number; // percentage
  memberCount: number;
  pmpm: number;
  avgConditions: number;
  complexity: 'low' | 'medium' | 'high';
  trend: 'increasing' | 'decreasing' | 'stable';
}

export interface AgeDemographics {
  ageGroup: string;
  frequency: number; // percentage
  memberCount: number;
  pmpm: number;
  avgChronicConditions: number;
  riskLevel: 'low' | 'medium' | 'high';
  trend: 'increasing' | 'decreasing' | 'stable';
}

export interface GeographicData {
  id: string;
  city: string;
  state: string;
  frequency: number; // percentage
  memberCount: number;
  pmpm: number;
  avgAge: number;
  chronicityIndex: number;
  riskScore: number;
  trend: 'increasing' | 'decreasing' | 'stable';
}

export interface ClinicalMetrics {
  id: string;
  metric: string;
  category: string;
  currentValue: number;
  targetValue: number;
  benchmarkValue: number;
  unit: string;
  frequency: number; // per 1000 members
  trend: 'improving' | 'declining' | 'stable';
  lastUpdated: Date;
  dataSource: string;
}

export interface QualityMetrics {
  id: string;
  measure: string;
  description: string;
  numerator: number;
  denominator: number;
  rate: number;
  benchmark: number;
  performance: 'above' | 'below' | 'at';
  lastUpdated: Date;
  trend: 'improving' | 'declining' | 'stable';
}

export interface RiskStratification {
  riskLevel: 'low' | 'medium' | 'high' | 'very_high';
  memberCount: number;
  percentage: number;
  avgPMPM: number;
  avgChronicConditions: number;
  interventionNeeded: boolean;
  trend: 'increasing' | 'decreasing' | 'stable';
}

export interface ClinicalOutcomes {
  id: string;
  condition: string;
  outcome: string;
  baseline: number;
  current: number;
  target: number;
  improvement: number;
  unit?: string;
  timeframe: string;
  significance: 'significant' | 'moderate' | 'minimal';
  sustainability?: string;
  lastUpdated: Date;
}
