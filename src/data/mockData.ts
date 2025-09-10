// CareReward Platform Mock Data
// Re-export all mock data modules for easy importing

// Financial Mock Data
export * from './financial';

// Clinical Mock Data
export * from './clinical';

// Behavior Analytics Mock Data
export * from './behavior';

// Opportunity Analysis Mock Data
export * from './opportunity';

// Reward System Mock Data
export * from './rewards';

// Success Stories Mock Data
export * from './success';

// Legacy mock data for backward compatibility
import { 
  User, 
  DashboardMetrics, 
  Activity, 
  FinancialMetrics, 
  ClinicalMetrics, 
  BehaviorDriver, 
  OpportunityAnalysis, 
  RewardSystem, 
  SuccessStory, 
  Report 
} from '../types';

// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@carereward.com',
    role: 'admin',
    department: 'Clinical Operations',
    avatar: '/avatars/sarah.jpg',
    lastLogin: new Date('2024-01-15T10:30:00Z'),
    permissions: ['read', 'write', 'admin'],
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.chen@carereward.com',
    role: 'manager',
    department: 'Quality Assurance',
    avatar: '/avatars/michael.jpg',
    lastLogin: new Date('2024-01-14T16:45:00Z'),
    permissions: ['read', 'write'],
  },
  {
    id: '3',
    name: 'Lisa Wang',
    email: 'lisa.wang@carereward.com',
    role: 'provider',
    department: 'Primary Care',
    avatar: '/avatars/lisa.jpg',
    lastLogin: new Date('2024-01-15T08:20:00Z'),
    permissions: ['read', 'write'],
  },
  {
    id: '4',
    name: 'James Rodriguez',
    email: 'james.rodriguez@carereward.com',
    role: 'analyst',
    department: 'Data Analytics',
    avatar: '/avatars/james.jpg',
    lastLogin: new Date('2024-01-15T14:15:00Z'),
    permissions: ['read'],
  },
];

// Mock Dashboard Metrics
export const mockDashboardMetrics: DashboardMetrics = {
  totalProviders: 156,
  activeRewards: 23,
  totalPointsAwarded: 45680,
  monthlyEngagement: 78.5,
  topPerformingDepartment: 'Primary Care',
  recentActivity: [
    {
      id: '1',
      type: 'reward_awarded',
      title: 'Quality Excellence Award',
      description: 'Dr. Sarah Johnson received 500 points for outstanding patient care',
      timestamp: new Date('2024-01-15T09:30:00Z'),
      userId: '1',
      userName: 'Dr. Sarah Johnson',
      points: 500,
    },
    {
      id: '2',
      type: 'goal_achieved',
      title: 'Patient Satisfaction Goal',
      description: 'Primary Care department achieved 95% patient satisfaction',
      timestamp: new Date('2024-01-15T08:45:00Z'),
      userId: '3',
      userName: 'Lisa Wang',
    },
    {
      id: '3',
      type: 'milestone_reached',
      title: 'Cost Savings Milestone',
      description: 'Quality Assurance team reached $50K in cost savings',
      timestamp: new Date('2024-01-14T17:20:00Z'),
      userId: '2',
      userName: 'Michael Chen',
    },
  ],
};

// Mock Financial Metrics (Legacy)
export const mockFinancialMetrics: FinancialMetrics = {
  totalSavings: 125000,
  costPerPatient: 485.50,
  revenueImpact: 15.2,
  roi: 285,
  budgetAllocation: [
    {
      category: 'Clinical Excellence',
      allocated: 450000,
      spent: 320000,
      remaining: 130000,
      percentage: 71.1,
    },
    {
      category: 'Quality Improvement',
      allocated: 300000,
      spent: 280000,
      remaining: 20000,
      percentage: 93.3,
    },
    {
      category: 'Innovation Projects',
      allocated: 200000,
      spent: 150000,
      remaining: 50000,
      percentage: 75.0,
    },
    {
      category: 'Staff Development',
      allocated: 150000,
      spent: 120000,
      remaining: 30000,
      percentage: 80.0,
    },
  ],
  monthlyTrends: [
    {
      month: 'Jan',
      savings: 15000,
      costs: 12000,
      roi: 125,
    },
    {
      month: 'Feb',
      savings: 18000,
      costs: 13500,
      roi: 133,
    },
    {
      month: 'Mar',
      savings: 22000,
      costs: 15000,
      roi: 147,
    },
    {
      month: 'Apr',
      savings: 25000,
      costs: 16000,
      roi: 156,
    },
    {
      month: 'May',
      savings: 28000,
      costs: 17000,
      roi: 165,
    },
    {
      month: 'Jun',
      savings: 32000,
      costs: 18000,
      roi: 178,
    },
  ],
};

// Mock Clinical Metrics (Legacy)
export const mockClinicalMetrics: ClinicalMetrics = {
  patientSatisfaction: 94.2,
  readmissionRate: 8.5,
  qualityScore: 87.3,
  outcomeImprovements: [
    {
      metric: 'Diabetes Control',
      baseline: 65.2,
      current: 78.5,
      improvement: 13.3,
      target: 80.0,
    },
    {
      metric: 'Hypertension Management',
      baseline: 72.8,
      current: 85.2,
      improvement: 12.4,
      target: 85.0,
    },
    {
      metric: 'Preventive Care',
      baseline: 68.5,
      current: 82.3,
      improvement: 13.8,
      target: 85.0,
    },
  ],
  departmentPerformance: [
    {
      department: 'Primary Care',
      score: 92.5,
      trend: 'up',
      change: 2.3,
    },
    {
      department: 'Cardiology',
      score: 88.7,
      trend: 'up',
      change: 1.8,
    },
    {
      department: 'Endocrinology',
      score: 85.2,
      trend: 'up',
      change: 3.1,
    },
    {
      department: 'Pulmonology',
      score: 82.8,
      trend: 'stable',
      change: 0.5,
    },
  ],
};

// Mock Behavior Drivers (Legacy)
export const mockBehaviorDrivers: BehaviorDriver[] = [
  {
    id: '1',
    name: 'Medication Adherence',
    description: 'Tracking and improving medication adherence rates',
    category: 'clinical',
    impact: 'high',
    frequency: 'monthly',
    points: 500,
    isActive: true,
    participants: 1250,
    successRate: 78.5,
  },
  {
    id: '2',
    name: 'Preventive Care Completion',
    description: 'Encouraging completion of preventive care screenings',
    category: 'patient_care',
    impact: 'high',
    frequency: 'quarterly',
    points: 300,
    isActive: true,
    participants: 980,
    successRate: 82.3,
  },
  {
    id: '3',
    name: 'Care Coordination',
    description: 'Improving care coordination between providers',
    category: 'operational',
    impact: 'medium',
    frequency: 'weekly',
    points: 200,
    isActive: true,
    participants: 156,
    successRate: 85.7,
  },
  {
    id: '4',
    name: 'Patient Education',
    description: 'Enhancing patient education and engagement',
    category: 'patient_care',
    impact: 'medium',
    frequency: 'monthly',
    points: 250,
    isActive: true,
    participants: 750,
    successRate: 72.8,
  },
];

// Mock Opportunity Analysis (Legacy)
export const mockOpportunityAnalysis: OpportunityAnalysis[] = [
  {
    id: '1',
    title: 'Reduce Avoidable Admissions',
    description: 'Implement care coordination to reduce avoidable hospital admissions',
    category: 'cost_savings',
    priority: 'high',
    potentialImpact: 125000,
    effort: 'medium',
    timeline: '6 months',
    status: 'in_progress',
    owner: 'Dr. Sarah Johnson',
    department: 'Clinical Operations',
  },
  {
    id: '2',
    title: 'Improve Medication Adherence',
    description: 'Enhance medication adherence through patient education and support',
    category: 'quality_improvement',
    priority: 'high',
    potentialImpact: 85000,
    effort: 'low',
    timeline: '3 months',
    status: 'identified',
    owner: 'Lisa Wang',
    department: 'Primary Care',
  },
  {
    id: '3',
    title: 'Telehealth Implementation',
    description: 'Expand telehealth services to improve access and reduce costs',
    category: 'innovation',
    priority: 'medium',
    potentialImpact: 95000,
    effort: 'high',
    timeline: '12 months',
    status: 'identified',
    owner: 'Michael Chen',
    department: 'Quality Assurance',
  },
  {
    id: '4',
    title: 'Preventive Care Campaign',
    description: 'Launch comprehensive preventive care campaign',
    category: 'quality_improvement',
    priority: 'medium',
    potentialImpact: 65000,
    effort: 'medium',
    timeline: '9 months',
    status: 'in_progress',
    owner: 'Dr. Sarah Johnson',
    department: 'Clinical Operations',
  },
];

// Mock Reward System (Legacy)
export const mockRewardSystem: RewardSystem[] = [
  {
    id: '1',
    name: 'Quality Excellence Award',
    description: 'Award for outstanding patient care and quality metrics',
    type: 'points',
    value: 500,
    criteria: ['Patient satisfaction >90%', 'Quality metrics met', 'No adverse events'],
    isActive: true,
    category: 'Clinical Excellence',
    icon: '🏆',
    color: '#10B981',
  },
  {
    id: '2',
    name: 'Innovation Badge',
    description: 'Recognition for innovative approaches to patient care',
    type: 'badge',
    value: 300,
    criteria: ['Implemented new process', 'Measurable improvement', 'Team collaboration'],
    isActive: true,
    category: 'Innovation',
    icon: '💡',
    color: '#3B82F6',
  },
  {
    id: '3',
    name: 'Cost Savings Certificate',
    description: 'Certificate for achieving significant cost savings',
    type: 'certificate',
    value: 750,
    criteria: ['Cost savings >$10K', 'Quality maintained', 'Process documented'],
    isActive: true,
    category: 'Cost Management',
    icon: '💰',
    color: '#F59E0B',
  },
  {
    id: '4',
    name: 'Patient Engagement Recognition',
    description: 'Recognition for exceptional patient engagement',
    type: 'recognition',
    value: 200,
    criteria: ['Patient feedback >95%', 'Engagement metrics met', 'Positive outcomes'],
    isActive: true,
    category: 'Patient Care',
    icon: '❤️',
    color: '#EF4444',
  },
];

// Mock Success Stories (Legacy)
export const mockSuccessStories: SuccessStory[] = [
  {
    id: '1',
    title: 'Diabetes Management Success',
    description: 'Comprehensive diabetes management program reduced HbA1c levels by 15% across 200 patients',
    category: 'quality_improvement',
    impact: 85000,
    participants: ['Dr. Sarah Johnson', 'Lisa Wang', 'Diabetes Care Team'],
    department: 'Endocrinology',
    date: new Date('2024-01-10'),
    metrics: {
      before: 8.2,
      after: 7.0,
      improvement: 14.6,
    },
    featured: true,
  },
  {
    id: '2',
    title: 'Telehealth Implementation',
    description: 'Successful telehealth rollout improved access and reduced costs by 25%',
    category: 'innovation',
    impact: 125000,
    participants: ['Michael Chen', 'IT Team', 'Clinical Staff'],
    department: 'Quality Assurance',
    date: new Date('2024-01-05'),
    metrics: {
      before: 100,
      after: 75,
      improvement: 25,
    },
    featured: true,
  },
  {
    id: '3',
    title: 'Medication Adherence Program',
    description: 'Patient education program improved medication adherence by 20%',
    category: 'quality_improvement',
    impact: 65000,
    participants: ['Lisa Wang', 'Pharmacy Team', 'Patient Educators'],
    department: 'Primary Care',
    date: new Date('2023-12-20'),
    metrics: {
      before: 75,
      after: 90,
      improvement: 20,
    },
    featured: false,
  },
];

// Mock Reports (Legacy)
export const mockReports: Report[] = [
  {
    id: '1',
    name: 'Monthly Financial Report',
    type: 'financial',
    description: 'Comprehensive monthly financial performance report',
    parameters: [
      {
        name: 'Date Range',
        type: 'date',
        value: new Date('2024-01-01'),
        required: true,
      },
      {
        name: 'Department',
        type: 'select',
        value: 'All',
        options: ['All', 'Primary Care', 'Cardiology', 'Endocrinology'],
        required: false,
      },
    ],
    schedule: 'monthly',
    lastGenerated: new Date('2024-01-01T00:00:00Z'),
    recipients: ['Dr. Sarah Johnson', 'Michael Chen'],
  },
  {
    id: '2',
    name: 'Clinical Quality Dashboard',
    type: 'clinical',
    description: 'Real-time clinical quality metrics dashboard',
    parameters: [
      {
        name: 'Metrics',
        type: 'select',
        value: 'All',
        options: ['All', 'Diabetes Control', 'Hypertension Management', 'Preventive Care'],
        required: false,
      },
    ],
    schedule: 'weekly',
    lastGenerated: new Date('2024-01-15T08:00:00Z'),
    recipients: ['Dr. Sarah Johnson', 'Lisa Wang'],
  },
  {
    id: '3',
    name: 'Engagement Analytics',
    type: 'engagement',
    description: 'Member engagement and participation analytics',
    parameters: [
      {
        name: 'Time Period',
        type: 'select',
        value: 'Last 30 Days',
        options: ['Last 7 Days', 'Last 30 Days', 'Last 90 Days', 'Last Year'],
        required: true,
      },
    ],
    schedule: 'weekly',
    lastGenerated: new Date('2024-01-15T06:00:00Z'),
    recipients: ['James Rodriguez', 'Michael Chen'],
  },
];