// CareReward Platform Type Definitions
// Re-export all type modules for easy importing

// Authentication & User Types
export * from './auth';

// Financial Metrics Types
export * from './financial';

// Clinical Metrics Types
export * from './clinical';

// Behavior Analytics Types
export * from './behavior';

// Opportunity Analysis Types
export * from './opportunity';

// Reward System Types
export * from './rewards';

// Success Stories Types
export * from './success';

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
