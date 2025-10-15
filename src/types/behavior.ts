// Behavior Analytics Types

export interface BehaviorMetric {
  id: string;
  name: string;
  category: string;
  description: string;
  currentValue: number;
  targetValue: number;
  benchmarkValue: number;
  unit: string;
  frequency: number; // per 1000 members
  trend: 'improving' | 'declining' | 'stable';
  impact: 'high' | 'medium' | 'low';
  lastUpdated: Date;
  dataSource: string;
}

export interface TrendData {
  id: string;
  metric: string;
  period: Date;
  value: number;
  change: number;
  changePercent: number;
  trend: 'up' | 'down' | 'stable';
  significance: 'significant' | 'moderate' | 'minimal';
}

export interface AlertData {
  id: string;
  type: 'warning' | 'critical' | 'info' | 'success';
  category: string;
  title: string;
  description: string;
  metric: string;
  currentValue: number;
  threshold: number;
  severity: 'low' | 'medium' | 'high';
  status: 'active' | 'acknowledged' | 'resolved';
  createdAt: Date;
  updatedAt: Date;
  assignedTo?: string;
  actions: AlertAction[];
}

export interface AlertAction {
  id: string;
  type: 'investigate' | 'intervene' | 'monitor' | 'escalate';
  description: string;
  status: 'pending' | 'in_progress' | 'completed';
  assignedTo: string;
  dueDate: Date;
  completedAt?: Date;
}

export interface BehaviorDriver {
  id: string;
  name: string;
  category: string;
  description: string;
  currentLevel: number;
  targetLevel: number;
  benchmarkLevel: number;
  unit: string;
  frequency?: string;
  impact: 'high' | 'medium' | 'low';
  trend: 'improving' | 'declining' | 'stable';
  lastUpdated: Date;
  points?: number;
  isActive?: boolean;
  participants?: number;
  successRate?: number;
  interventions: BehaviorIntervention[];
}

export interface BehaviorIntervention {
  id: string;
  name: string;
  type: string;
  description: string;
  status: 'planned' | 'active' | 'completed' | 'cancelled';
  startDate: Date;
  endDate?: Date;
  effectiveness: number;
  cost: number;
  participants: number;
}

export interface EngagementMetrics {
  id: string;
  program: string;
  participants: number;
  participationRate: number;
  completionRate: number;
  satisfactionScore: number;
  behaviorChange: number;
  costPerParticipant: number;
  roi: number;
  lastUpdated: Date;
}

export interface PredictiveAnalytics {
  id: string;
  model: string;
  prediction: string;
  confidence: number;
  timeframe: string;
  factors: string[];
  recommendations: string[];
  lastUpdated: Date;
}
