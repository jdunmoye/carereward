// Core data structures for CareAlign Rewards Platform

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'provider' | 'analyst';
  department: string;
  avatar?: string;
  lastLogin: Date;
  permissions: string[];
}

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

export interface FinancialMetrics {
  totalSavings: number;
  costPerPatient: number;
  revenueImpact: number;
  roi: number;
  budgetAllocation: BudgetItem[];
  monthlyTrends: FinancialTrend[];
}

export interface BudgetItem {
  category: string;
  allocated: number;
  spent: number;
  remaining: number;
  percentage: number;
}

export interface FinancialTrend {
  month: string;
  savings: number;
  costs: number;
  roi: number;
}

export interface ClinicalMetrics {
  patientSatisfaction: number;
  readmissionRate: number;
  qualityScore: number;
  outcomeImprovements: OutcomeMetric[];
  departmentPerformance: DepartmentMetric[];
}

export interface OutcomeMetric {
  metric: string;
  baseline: number;
  current: number;
  improvement: number;
  target: number;
}

export interface DepartmentMetric {
  department: string;
  score: number;
  trend: 'up' | 'down' | 'stable';
  change: number;
}

export interface BehaviorDriver {
  id: string;
  name: string;
  description: string;
  category: 'clinical' | 'operational' | 'patient_care' | 'innovation';
  impact: 'high' | 'medium' | 'low';
  frequency: 'daily' | 'weekly' | 'monthly' | 'quarterly';
  points: number;
  isActive: boolean;
  participants: number;
  successRate: number;
}

export interface OpportunityAnalysis {
  id: string;
  title: string;
  description: string;
  category: 'cost_savings' | 'quality_improvement' | 'efficiency' | 'innovation';
  priority: 'high' | 'medium' | 'low';
  potentialImpact: number;
  effort: 'low' | 'medium' | 'high';
  timeline: string;
  status: 'identified' | 'in_progress' | 'completed' | 'cancelled';
  owner: string;
  department: string;
}

export interface RewardSystem {
  id: string;
  name: string;
  description: string;
  type: 'points' | 'badge' | 'certificate' | 'monetary' | 'recognition';
  value: number;
  criteria: string[];
  isActive: boolean;
  category: string;
  icon?: string;
  color?: string;
}

export interface SuccessStory {
  id: string;
  title: string;
  description: string;
  category: 'cost_savings' | 'quality_improvement' | 'innovation' | 'teamwork';
  impact: number;
  participants: string[];
  department: string;
  date: Date;
  metrics: {
    before: number;
    after: number;
    improvement: number;
  };
  featured: boolean;
}

export interface Report {
  id: string;
  name: string;
  type: 'financial' | 'clinical' | 'engagement' | 'custom';
  description: string;
  parameters: ReportParameter[];
  schedule?: 'daily' | 'weekly' | 'monthly' | 'quarterly';
  lastGenerated?: Date;
  recipients: string[];
}

export interface ReportParameter {
  name: string;
  type: 'date' | 'number' | 'string' | 'boolean' | 'select';
  value: any;
  options?: string[];
  required: boolean;
}

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon: string;
  children?: NavigationItem[];
  badge?: number;
}

export interface ThemeConfig {
  primary: string;
  secondary: string;
  accent: string;
  success: string;
  warning: string;
  error: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  errors?: string[];
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// Form types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'select' | 'textarea' | 'checkbox' | 'date';
  required: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  };
}

export interface FormData {
  [key: string]: any;
}

// Chart data types
export interface ChartDataPoint {
  name: string;
  value: number;
  color?: string;
}

export interface TimeSeriesDataPoint {
  date: string;
  value: number;
  category?: string;
}

export interface ChartConfig {
  type: 'line' | 'bar' | 'pie' | 'area' | 'scatter';
  title: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  data: ChartDataPoint[] | TimeSeriesDataPoint[];
  colors?: string[];
  height?: number;
  width?: number;
}
