// Current Situation Mock Data
// Cost of Care Overview and Analysis Data

export interface CostMetrics {
  currentCostOfCarePMPM: number;
  riskAdjustedPMPM: number;
  medicalPMPM: number;
  pharmacyPMPM: number;
  totalPoolSpending: number;
  riskScore: number;
  activeMembership: number;
  period: string;
  lastUpdated: Date;
}

export interface ChronicCondition {
  name: string;
  frequency: number; // percentage
  pmpmCost: number;
  memberCount: number;
  trend: 'up' | 'down' | 'stable';
  changePercent: number;
}

export interface AgeGroupData {
  ageRange: string;
  memberCount: number;
  chronicConditionRate: number;
  averagePMPM: number;
  topConditions: string[];
}

export interface GeographicData {
  location: string;
  state: string;
  memberCount: number;
  chronicConditionRate: number;
  averagePMPM: number;
  topConditions: string[];
}

export interface CostDriver {
  name: string;
  value: number;
  unit: string;
  target: number;
  trend: 'up' | 'down' | 'stable';
  changePercent: number;
  impact: 'high' | 'medium' | 'low';
}

export interface CurrentSituationData {
  costMetrics: CostMetrics;
  chronicConditions: ChronicCondition[];
  ageDistribution: AgeGroupData[];
  geographicDistribution: GeographicData[];
  costDrivers: CostDriver[];
}

// Mock Cost Metrics
export const mockCostMetrics: CostMetrics = {
  currentCostOfCarePMPM: 680.00,
  riskAdjustedPMPM: 558.00,
  medicalPMPM: 517.00,
  pharmacyPMPM: 163.00,
  totalPoolSpending: 15900000, // 23,383 members * $680 PMPM
  riskScore: 1.2,
  activeMembership: 23383,
  period: 'Last 3 Months',
  lastUpdated: new Date('2024-01-15T10:30:00Z'),
};

// Mock Chronic Conditions Data
export const mockCurrentSituationChronicConditions: ChronicCondition[] = [
  {
    name: 'Hypertension',
    frequency: 28.5,
    pmpmCost: 145.20,
    memberCount: 2850,
    trend: 'up',
    changePercent: 2.3,
  },
  {
    name: 'Diabetes Mellitus',
    frequency: 18.2,
    pmpmCost: 185.75,
    memberCount: 1820,
    trend: 'up',
    changePercent: 1.8,
  },
  {
    name: 'High Cholesterol',
    frequency: 24.8,
    pmpmCost: 95.40,
    memberCount: 2480,
    trend: 'stable',
    changePercent: 0.2,
  },
  {
    name: 'CHF',
    frequency: 8.5,
    pmpmCost: 320.60,
    memberCount: 850,
    trend: 'down',
    changePercent: -1.2,
  },
  {
    name: 'CKD',
    frequency: 12.3,
    pmpmCost: 275.80,
    memberCount: 1230,
    trend: 'up',
    changePercent: 3.1,
  },
  {
    name: 'COPD',
    frequency: 9.7,
    pmpmCost: 245.30,
    memberCount: 970,
    trend: 'stable',
    changePercent: 0.5,
  },
  {
    name: 'Cancer',
    frequency: 6.2,
    pmpmCost: 485.90,
    memberCount: 620,
    trend: 'up',
    changePercent: 1.5,
  },
  {
    name: 'Serious Mental Illness',
    frequency: 11.4,
    pmpmCost: 195.25,
    memberCount: 1140,
    trend: 'up',
    changePercent: 2.8,
  },
];

// Mock Age Distribution Data
export const mockCurrentSituationAgeDistribution: AgeGroupData[] = [
  {
    ageRange: '0-1',
    memberCount: 450,
    chronicConditionRate: 2.1,
    averagePMPM: 125.50,
    topConditions: ['Congenital Heart Disease', 'Prematurity'],
  },
  {
    ageRange: '2-18',
    memberCount: 1850,
    chronicConditionRate: 8.5,
    averagePMPM: 95.75,
    topConditions: ['Asthma', 'ADHD', 'Diabetes Type 1'],
  },
  {
    ageRange: '18-29',
    memberCount: 3200,
    chronicConditionRate: 12.3,
    averagePMPM: 145.20,
    topConditions: ['Depression', 'Anxiety', 'Substance Use'],
  },
  {
    ageRange: '30-39',
    memberCount: 2850,
    chronicConditionRate: 18.7,
    averagePMPM: 185.40,
    topConditions: ['Hypertension', 'Diabetes', 'High Cholesterol'],
  },
  {
    ageRange: '40-49',
    memberCount: 2650,
    chronicConditionRate: 28.5,
    averagePMPM: 245.80,
    topConditions: ['Hypertension', 'High Cholesterol', 'Diabetes'],
  },
  {
    ageRange: '50-59',
    memberCount: 2200,
    chronicConditionRate: 42.8,
    averagePMPM: 385.60,
    topConditions: ['Hypertension', 'Diabetes', 'High Cholesterol', 'CHF'],
  },
  {
    ageRange: '60+',
    memberCount: 1800,
    chronicConditionRate: 68.2,
    averagePMPM: 485.90,
    topConditions: ['Hypertension', 'CHF', 'CKD', 'COPD', 'Cancer'],
  },
];

// Mock Geographic Distribution Data
export const mockCurrentSituationGeographicDistribution: GeographicData[] = [
  {
    location: 'New York',
    state: 'NY',
    memberCount: 2850,
    chronicConditionRate: 32.5,
    averagePMPM: 425.80,
    topConditions: ['Hypertension', 'Diabetes', 'High Cholesterol'],
  },
  {
    location: 'Los Angeles',
    state: 'CA',
    memberCount: 3200,
    chronicConditionRate: 28.7,
    averagePMPM: 385.20,
    topConditions: ['Hypertension', 'Diabetes', 'Depression'],
  },
  {
    location: 'Chicago',
    state: 'IL',
    memberCount: 1850,
    chronicConditionRate: 35.2,
    averagePMPM: 445.60,
    topConditions: ['Hypertension', 'CHF', 'COPD'],
  },
  {
    location: 'Houston',
    state: 'TX',
    memberCount: 2200,
    chronicConditionRate: 38.8,
    averagePMPM: 465.40,
    topConditions: ['Diabetes', 'Hypertension', 'CKD'],
  },
  {
    location: 'Phoenix',
    state: 'AZ',
    memberCount: 1650,
    chronicConditionRate: 31.5,
    averagePMPM: 395.80,
    topConditions: ['Hypertension', 'Diabetes', 'High Cholesterol'],
  },
  {
    location: 'Philadelphia',
    state: 'PA',
    memberCount: 1450,
    chronicConditionRate: 33.8,
    averagePMPM: 415.20,
    topConditions: ['Hypertension', 'CHF', 'COPD'],
  },
  {
    location: 'San Antonio',
    state: 'TX',
    memberCount: 1200,
    chronicConditionRate: 36.5,
    averagePMPM: 425.60,
    topConditions: ['Diabetes', 'Hypertension', 'CKD'],
  },
  {
    location: 'San Diego',
    state: 'CA',
    memberCount: 1100,
    chronicConditionRate: 29.2,
    averagePMPM: 375.40,
    topConditions: ['Hypertension', 'Diabetes', 'Depression'],
  },
];

// Mock Cost Drivers Data
export const mockCurrentSituationCostDrivers: CostDriver[] = [
  {
    name: 'Admission per 1000 members',
    value: 125.5,
    unit: 'per 1000',
    target: 120.0,
    trend: 'up',
    changePercent: 3.2,
    impact: 'high',
  },
  {
    name: 'Avoidable admission per 1000 members',
    value: 28.7,
    unit: 'per 1000',
    target: 25.0,
    trend: 'up',
    changePercent: 5.8,
    impact: 'high',
  },
  {
    name: 'ED Visit per 1000 members',
    value: 285.3,
    unit: 'per 1000',
    target: 275.0,
    trend: 'up',
    changePercent: 2.1,
    impact: 'medium',
  },
  {
    name: 'Preventable ED Visits',
    value: 45.8,
    unit: 'per 1000',
    target: 40.0,
    trend: 'up',
    changePercent: 8.5,
    impact: 'high',
  },
  {
    name: 'Generic Drug Utilization rate',
    value: 78.5,
    unit: '%',
    target: 85.0,
    trend: 'up',
    changePercent: 2.3,
    impact: 'medium',
  },
  {
    name: 'Drug pickup rate',
    value: 82.3,
    unit: '%',
    target: 90.0,
    trend: 'up',
    changePercent: 1.8,
    impact: 'medium',
  },
  {
    name: 'Annual wellness visit rate',
    value: 65.2,
    unit: '%',
    target: 75.0,
    trend: 'up',
    changePercent: 3.5,
    impact: 'medium',
  },
  {
    name: 'Out of Network utilization rate',
    value: 12.8,
    unit: '%',
    target: 10.0,
    trend: 'down',
    changePercent: -1.2,
    impact: 'high',
  },
];

// Combined Current Situation Data
export const mockCurrentSituationData: CurrentSituationData = {
  costMetrics: mockCostMetrics,
  chronicConditions: mockCurrentSituationChronicConditions,
  ageDistribution: mockCurrentSituationAgeDistribution,
  geographicDistribution: mockCurrentSituationGeographicDistribution,
  costDrivers: mockCurrentSituationCostDrivers,
};
