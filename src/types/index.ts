// CareReward Platform Type Definitions
// Re-export all type modules for easy importing

// Authentication & User Types
export * from './auth';

// Financial Metrics Types
export * from './financial';

// Clinical Metrics Types
export * from './clinical';

// Behavior Analytics Types
export type { BehaviorMetric, TrendData, AlertData, BehaviorDriver, BehaviorIntervention } from './behavior';

// Opportunity Analysis Types
export type { OpportunityCategory, OpportunityMetric, OpportunityAnalysis, OpportunityMilestone, Risk } from './opportunity';

// Reward System Types
export type { RewardProgram, RewardActivity, RewardEngagementMetrics, RewardRedemption, RewardAnalytics } from './rewards';

// Success Stories Types
export type { CaseStudy, PatientProfile, SuccessChronicCondition, SuccessRiskFactor, Demographics, BaselineMetric, Medication, Challenge, CareApproach, TeamMember, SuccessIntervention, TreatmentJourney, TreatmentPhase, SuccessMilestone, Setback, Breakthrough, Outcome, SuccessStory, SuccessMetrics } from './success';

// Common Types
export * from './common';

// Legacy types for backward compatibility
export interface DashboardMetrics {
  totalProviders: number;
  activeRewards: number;
  totalPointsAwarded: number;
  monthlyEngagement: number;
  topPerformingDepartment: string;
  recentActivity: Activity[];
}

export interface Activity {
  id: string;
  type: 'reward_awarded' | 'goal_achieved' | 'milestone_reached' | 'system_update';
  title: string;
  description: string;
  timestamp: Date;
  userId: string;
  userName: string;
  points?: number;
}

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon: string;
  children?: NavigationItem[];
  badge?: number;
}

// Missing types for backward compatibility
export interface FinancialMetrics {
  id: string;
  metric: string;
  value: number;
  unit: string;
  trend: 'increasing' | 'decreasing' | 'stable';
  lastUpdated: Date;
  totalSavings?: number;
  costPerPatient?: number;
  revenueImpact?: number;
  roi?: number;
  budgetAllocation?: any[];
  monthlyTrends?: any[];
}

export interface RewardSystem {
  id: string;
  name: string;
  description: string;
  points: number;
  category: string;
  status: 'active' | 'inactive';
  lastUpdated: Date;
  type?: string;
  value?: number;
  criteria?: string[];
  isActive?: boolean;
  icon?: string;
  color?: string;
}

export interface Report {
  id: string;
  title: string;
  type: string;
  generatedAt: Date;
  data: any;
  name?: string;
  description?: string;
  parameters?: any[];
  schedule?: string;
  lastGenerated?: Date;
  recipients?: string[];
}

// Legacy ClinicalMetrics interface
export interface ClinicalMetrics {
  patientSatisfaction: number;
  readmissionRate: number;
  qualityScore: number;
  outcomeImprovements: Array<{
    metric: string;
    baseline: number;
    current: number;
    improvement: number;
    target: number;
  }>;
  departmentPerformance?: any[];
}