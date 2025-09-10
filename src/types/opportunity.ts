// Opportunity Analysis Types

export type OpportunityCategory = 
  | 'avoidance' 
  | 'prevention' 
  | 'substitute' 
  | 'control' 
  | 'compliance' 
  | 'disease_reversal';

export interface OpportunityMetric {
  id: string;
  category: OpportunityCategory;
  name: string;
  description: string;
  currentState: number;
  targetState: number;
  delta: number;
  unit: string;
  financialImpact: number;
  implementationCost: number;
  roi: number;
  timeframe: string;
  priority: 'high' | 'medium' | 'low';
  feasibility: 'high' | 'medium' | 'low';
  lastUpdated: Date;
}

export interface ScenarioModel {
  id: string;
  name: string;
  description: string;
  category: OpportunityCategory;
  assumptions: ScenarioAssumption[];
  outcomes: ScenarioOutcome[];
  probability: number;
  confidence: number;
  lastUpdated: Date;
}

export interface ScenarioAssumption {
  id: string;
  variable: string;
  currentValue: number;
  projectedValue: number;
  rationale: string;
  confidence: number;
}

export interface ScenarioOutcome {
  id: string;
  metric: string;
  baseline: number;
  projected: number;
  improvement: number;
  timeframe: string;
  probability: number;
}

export interface OpportunityAnalysis {
  id: string;
  title: string;
  category: OpportunityCategory;
  description: string;
  currentState: number;
  targetState: number;
  delta: number;
  financialImpact: number;
  implementationCost: number;
  roi: number;
  timeframe: string;
  priority: 'high' | 'medium' | 'low';
  status: 'identified' | 'analyzing' | 'implementing' | 'monitoring' | 'completed';
  owner: string;
  team: string[];
  milestones: Milestone[];
  risks: Risk[];
  lastUpdated: Date;
}

export interface Milestone {
  id: string;
  name: string;
  description: string;
  dueDate: Date;
  status: 'pending' | 'in_progress' | 'completed' | 'overdue';
  completedAt?: Date;
  dependencies: string[];
}

export interface Risk {
  id: string;
  name: string;
  description: string;
  probability: 'low' | 'medium' | 'high';
  impact: 'low' | 'medium' | 'high';
  mitigation: string;
  owner: string;
  status: 'identified' | 'mitigating' | 'resolved';
}

export interface OpportunityReport {
  id: string;
  title: string;
  period: DateRange;
  totalOpportunities: number;
  totalFinancialImpact: number;
  categories: OpportunityCategorySummary[];
  recommendations: Recommendation[];
  lastUpdated: Date;
}

export interface OpportunityCategorySummary {
  category: OpportunityCategory;
  count: number;
  totalImpact: number;
  avgROI: number;
  topOpportunities: OpportunityAnalysis[];
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  category: OpportunityCategory;
  priority: 'high' | 'medium' | 'low';
  impact: number;
  effort: 'low' | 'medium' | 'high';
  timeframe: string;
  rationale: string;
}
