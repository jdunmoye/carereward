// Reward System Types

export interface RewardActivity {
  id: string;
  name: string;
  description: string;
  category: RewardCategory;
  points: number;
  difficulty: 'easy' | 'medium' | 'hard';
  frequency: 'one_time' | 'daily' | 'weekly' | 'monthly' | 'quarterly';
  targetAudience: 'all' | 'specific_condition' | 'high_risk' | 'new_members';
  requirements: string[];
  benefits: string[];
  isActive: boolean;
  startDate: Date;
  endDate?: Date;
  maxParticipants?: number;
  currentParticipants: number;
  completionRate: number;
  satisfactionScore: number;
  lastUpdated: Date;
}

export type RewardCategory = 
  | 'avoidance' 
  | 'prevention' 
  | 'substitute' 
  | 'control' 
  | 'compliance' 
  | 'disease_reversal';

export interface PointsConfiguration {
  id: string;
  category: RewardCategory;
  basePoints: number;
  multiplier: number;
  bonusPoints: number;
  maxPointsPerPeriod: number;
  period: 'daily' | 'weekly' | 'monthly';
  conditions: PointsCondition[];
  lastUpdated: Date;
}

export interface PointsCondition {
  id: string;
  condition: string;
  points: number;
  type: 'bonus' | 'penalty' | 'multiplier';
  description: string;
}

export interface RewardEngagementMetrics {
  id: string;
  activityId: string;
  participantId: string;
  pointsEarned: number;
  completionDate: Date;
  satisfactionScore?: number;
  feedback?: string;
  followUpRequired: boolean;
  followUpDate?: Date;
}

export interface RewardProgram {
  id: string;
  name: string;
  description: string;
  category: RewardCategory;
  activities: RewardActivity[];
  totalPoints: number;
  participants: number;
  startDate: Date;
  endDate?: Date;
  status: 'draft' | 'active' | 'paused' | 'completed' | 'cancelled';
  budget: number;
  spent: number;
  roi: number;
  lastUpdated: Date;
}

export interface ParticipantProfile {
  id: string;
  memberId: string;
  name: string;
  email: string;
  riskLevel: 'low' | 'medium' | 'high';
  chronicConditions: string[];
  totalPoints: number;
  activitiesCompleted: number;
  engagementScore: number;
  lastActivity: Date;
  preferences: ParticipantPreferences;
  goals: ParticipantGoal[];
}

export interface ParticipantPreferences {
  communicationMethod: 'email' | 'sms' | 'app' | 'phone';
  frequency: 'daily' | 'weekly' | 'monthly';
  categories: RewardCategory[];
  notifications: boolean;
}

export interface ParticipantGoal {
  id: string;
  description: string;
  targetPoints: number;
  currentPoints: number;
  deadline: Date;
  status: 'active' | 'completed' | 'missed';
  reward?: string;
}

export interface RewardRedemption {
  id: string;
  participantId: string;
  reward: string;
  pointsCost: number;
  redemptionDate: Date;
  status: 'pending' | 'approved' | 'fulfilled' | 'cancelled';
  fulfillmentDate?: Date;
  notes?: string;
}

export interface RewardAnalytics {
  id: string;
  period: Date;
  totalActivities: number;
  totalParticipants: number;
  totalPointsAwarded: number;
  totalPointsRedeemed: number;
  avgEngagementScore: number;
  completionRate: number;
  satisfactionScore: number;
  costPerParticipant: number;
  roi: number;
  topActivities: ActivityPerformance[];
  categoryBreakdown: CategoryPerformance[];
}

export interface ActivityPerformance {
  activityId: string;
  name: string;
  participants: number;
  completionRate: number;
  satisfactionScore: number;
  pointsAwarded: number;
  cost: number;
  roi: number;
}

export interface CategoryPerformance {
  category: RewardCategory;
  activities: number;
  participants: number;
  totalPoints: number;
  avgCompletionRate: number;
  avgSatisfactionScore: number;
  totalCost: number;
  roi: number;
}
