// Financial Metrics Types

import { DateRange } from './common';

export interface PMPMData {
  id: string;
  period: Date;
  totalPMPM: number;
  medicalPMPM: number;
  pharmacyPMPM: number;
  riskAdjustedPMPM: number;
  memberCount: number;
  totalCost: number;
  medicalCost: number;
  pharmacyCost: number;
}

export interface FinancialTrends {
  period: Date;
  totalPMPM: number;
  medicalPMPM: number;
  pharmacyPMPM: number;
  riskAdjustedPMPM: number;
  trend: 'increasing' | 'decreasing' | 'stable';
  changePercent: number;
  benchmarkComparison: number;
}

export interface BenchmarkData {
  metric: string;
  currentValue: number;
  benchmarkValue: number;
  percentile: number;
  performance: 'above' | 'below' | 'at';
  variance: number;
  variancePercent: number;
}

export interface CostDrivers {
  id: string;
  category: string;
  metric: string;
  currentValue: number;
  targetValue: number;
  benchmarkValue: number;
  impact: 'high' | 'medium' | 'low';
  trend: 'improving' | 'declining' | 'stable';
  lastUpdated: Date;
}

export interface FinancialOpportunity {
  id: string;
  category: 'avoidance' | 'prevention' | 'substitute' | 'control' | 'compliance' | 'disease_reversal';
  metric: string;
  currentState: number;
  targetState: number;
  delta: number;
  financialImpact: number;
  implementationCost: number;
  roi: number;
  timeframe: string;
  priority: 'high' | 'medium' | 'low';
}

export interface BudgetAllocation {
  category: string;
  allocated: number;
  spent: number;
  remaining: number;
  percentage: number;
  variance: number;
}

export interface CostSavings {
  id: string;
  category: string;
  description: string;
  amount: number;
  period: Date;
  verified: boolean;
  source: string;
}

export interface FinancialReport {
  id: string;
  title: string;
  period: DateRange;
  totalCost: number;
  totalSavings: number;
  netImpact: number;
  metrics: PMPMData[];
  opportunities: FinancialOpportunity[];
  recommendations: string[];
}
