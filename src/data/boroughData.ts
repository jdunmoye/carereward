// Borough-specific data for NYC
export interface BoroughData {
  name: string;
  costMetrics: {
    currentCostOfCarePMPM: number;
    riskAdjustedPMPM: number;
    medicalPMPM: number;
    pharmacyPMPM: number;
    riskScore: number;
    totalPoolSpending: number;
    activeMembership: number;
  };
  chronicConditions: Array<{
    name: string;
    frequency: number;
    memberCount: number;
    pmpmCost: number;
    trend: 'up' | 'down' | 'stable';
    changePercent: number;
  }>;
  ageDistribution: Array<{
    ageRange: string;
    memberCount: number;
    averagePMPM: number;
    chronicConditionRate: number;
    topConditions: string[];
  }>;
  geographicDistribution: Array<{
    location: string;
    memberCount: number;
    averagePMPM: number;
    chronicConditionRate: number;
    topConditions: string[];
  }>;
  costDrivers: Array<{
    name: string;
    value: number;
    unit: string;
    target: number;
    changePercent: number;
  }>;
}

export const boroughData: Record<string, BoroughData> = {
  'New York': {
    name: 'New York',
    costMetrics: {
      currentCostOfCarePMPM: 680.00,
      riskAdjustedPMPM: 558.00,
      medicalPMPM: 517.00,
      pharmacyPMPM: 163.00,
      riskScore: 1.2,
      totalPoolSpending: 190000000,
      activeMembership: 23383
    },
    chronicConditions: [
      { name: 'Diabetes', frequency: 12.5, memberCount: 2923, pmpmCost: 185.50, trend: 'up', changePercent: 2.3 },
      { name: 'Hypertension', frequency: 28.3, memberCount: 6617, pmpmCost: 142.75, trend: 'up', changePercent: 1.8 },
      { name: 'Heart Disease', frequency: 8.7, memberCount: 2034, pmpmCost: 298.25, trend: 'down', changePercent: -0.5 },
      { name: 'COPD', frequency: 6.2, memberCount: 1450, pmpmCost: 245.80, trend: 'stable', changePercent: 0.1 },
      { name: 'Depression', frequency: 15.8, memberCount: 3695, pmpmCost: 98.45, trend: 'up', changePercent: 3.2 }
    ],
    ageDistribution: [
      { ageRange: '18-34', memberCount: 7015, averagePMPM: 285.50, chronicConditionRate: 8.2, topConditions: ['Depression', 'Hypertension'] },
      { ageRange: '35-49', memberCount: 5846, averagePMPM: 425.75, chronicConditionRate: 18.5, topConditions: ['Hypertension', 'Diabetes'] },
      { ageRange: '50-64', memberCount: 5846, averagePMPM: 625.25, chronicConditionRate: 35.8, topConditions: ['Hypertension', 'Heart Disease'] },
      { ageRange: '65+', memberCount: 4676, averagePMPM: 985.50, chronicConditionRate: 68.2, topConditions: ['Hypertension', 'Heart Disease'] }
    ],
    geographicDistribution: [
      { location: 'Manhattan', memberCount: 4677, averagePMPM: 750.25, chronicConditionRate: 22.5, topConditions: ['Hypertension', 'Depression'] },
      { location: 'Brooklyn', memberCount: 7015, averagePMPM: 625.75, chronicConditionRate: 18.8, topConditions: ['Hypertension', 'Diabetes'] },
      { location: 'Queens', memberCount: 5846, averagePMPM: 585.50, chronicConditionRate: 16.2, topConditions: ['Hypertension', 'COPD'] },
      { location: 'Bronx', memberCount: 3508, averagePMPM: 725.25, chronicConditionRate: 28.5, topConditions: ['Diabetes', 'Hypertension'] },
      { location: 'Staten Island', memberCount: 2338, averagePMPM: 545.75, chronicConditionRate: 15.8, topConditions: ['Hypertension', 'Heart Disease'] }
    ],
    costDrivers: [
      { name: 'Emergency Room Visits', value: 2.8, unit: 'per 1000', target: 2.2, changePercent: 5.2 },
      { name: 'Inpatient Admissions', value: 85.5, unit: 'per 1000', target: 75.0, changePercent: 3.1 },
      { name: 'Specialist Referrals', value: 1.8, unit: 'per member', target: 1.5, changePercent: 2.8 },
      { name: 'Prescription Claims', value: 4.2, unit: 'per member', target: 3.8, changePercent: 1.5 }
    ]
  },
  'Manhattan': {
    name: 'Manhattan',
    costMetrics: {
      currentCostOfCarePMPM: 750.25,
      riskAdjustedPMPM: 615.50,
      medicalPMPM: 575.75,
      pharmacyPMPM: 174.50,
      riskScore: 1.12,
      totalPoolSpending: 42000000,
      activeMembership: 4677
    },
    chronicConditions: [
      { name: 'Depression', frequency: 18.5, memberCount: 865, pmpmCost: 125.75, trend: 'up', changePercent: 4.2 },
      { name: 'Hypertension', frequency: 22.8, memberCount: 1066, pmpmCost: 155.25, trend: 'up', changePercent: 2.1 },
      { name: 'Diabetes', frequency: 8.2, memberCount: 384, pmpmCost: 195.50, trend: 'down', changePercent: -1.2 },
      { name: 'Anxiety', frequency: 15.3, memberCount: 715, pmpmCost: 98.25, trend: 'up', changePercent: 3.8 },
      { name: 'Heart Disease', frequency: 6.8, memberCount: 318, pmpmCost: 325.75, trend: 'stable', changePercent: 0.3 }
    ],
    ageDistribution: [
      { ageRange: '18-34', memberCount: 1871, averagePMPM: 425.50, chronicConditionRate: 6.8, topConditions: ['Depression', 'Anxiety'] },
      { ageRange: '35-49', memberCount: 1403, averagePMPM: 585.75, chronicConditionRate: 15.2, topConditions: ['Hypertension', 'Depression'] },
      { ageRange: '50-64', memberCount: 935, averagePMPM: 825.25, chronicConditionRate: 28.5, topConditions: ['Hypertension', 'Heart Disease'] },
      { ageRange: '65+', memberCount: 468, averagePMPM: 1225.50, chronicConditionRate: 55.8, topConditions: ['Hypertension', 'Heart Disease'] }
    ],
    geographicDistribution: [
      { location: 'Manhattan', memberCount: 4677, averagePMPM: 750.25, chronicConditionRate: 22.5, topConditions: ['Hypertension', 'Depression'] }
    ],
    costDrivers: [
      { name: 'Emergency Room Visits', value: 3.2, unit: 'per 1000', target: 2.5, changePercent: 6.8 },
      { name: 'Inpatient Admissions', value: 92.5, unit: 'per 1000', target: 80.0, changePercent: 4.2 },
      { name: 'Specialist Referrals', value: 2.1, unit: 'per member', target: 1.8, changePercent: 3.5 },
      { name: 'Prescription Claims', value: 4.8, unit: 'per member', target: 4.2, changePercent: 2.1 }
    ]
  },
  'Brooklyn': {
    name: 'Brooklyn',
    costMetrics: {
      currentCostOfCarePMPM: 625.75,
      riskAdjustedPMPM: 545.25,
      medicalPMPM: 475.50,
      pharmacyPMPM: 150.25,
      riskScore: 1.18,
      totalPoolSpending: 52000000,
      activeMembership: 7015
    },
    chronicConditions: [
      { name: 'Hypertension', frequency: 31.2, memberCount: 2189, pmpmCost: 135.75, trend: 'up', changePercent: 2.8 },
      { name: 'Diabetes', frequency: 15.8, memberCount: 1108, pmpmCost: 175.25, trend: 'up', changePercent: 3.5 },
      { name: 'COPD', frequency: 8.5, memberCount: 596, pmpmCost: 225.50, trend: 'down', changePercent: -0.8 },
      { name: 'Heart Disease', frequency: 9.2, memberCount: 645, pmpmCost: 285.75, trend: 'stable', changePercent: 0.5 },
      { name: 'Depression', frequency: 12.8, memberCount: 898, pmpmCost: 88.25, trend: 'up', changePercent: 2.2 }
    ],
    ageDistribution: [
      { ageRange: '18-34', memberCount: 2806, averagePMPM: 265.50, chronicConditionRate: 9.5, topConditions: ['Depression', 'Hypertension'] },
      { ageRange: '35-49', memberCount: 2104, averagePMPM: 395.75, chronicConditionRate: 22.8, topConditions: ['Hypertension', 'Diabetes'] },
      { ageRange: '50-64', memberCount: 1403, averagePMPM: 585.25, chronicConditionRate: 38.2, topConditions: ['Hypertension', 'Heart Disease'] },
      { ageRange: '65+', memberCount: 702, averagePMPM: 875.50, chronicConditionRate: 62.5, topConditions: ['Hypertension', 'Heart Disease'] }
    ],
    geographicDistribution: [
      { location: 'Brooklyn', memberCount: 7015, averagePMPM: 625.75, chronicConditionRate: 18.8, topConditions: ['Hypertension', 'Diabetes'] }
    ],
    costDrivers: [
      { name: 'Emergency Room Visits', value: 2.5, unit: 'per 1000', target: 2.0, changePercent: 4.8 },
      { name: 'Inpatient Admissions', value: 78.5, unit: 'per 1000', target: 70.0, changePercent: 2.8 },
      { name: 'Specialist Referrals', value: 1.6, unit: 'per member', target: 1.4, changePercent: 2.2 },
      { name: 'Prescription Claims', value: 3.8, unit: 'per member', target: 3.5, changePercent: 1.8 }
    ]
  },
  'Queens': {
    name: 'Queens',
    costMetrics: {
      currentCostOfCarePMPM: 585.50,
      riskAdjustedPMPM: 515.75,
      medicalPMPM: 435.25,
      pharmacyPMPM: 150.25,
      riskScore: 1.15,
      totalPoolSpending: 43000000,
      activeMembership: 5846
    },
    chronicConditions: [
      { name: 'Hypertension', frequency: 26.8, memberCount: 1567, pmpmCost: 128.50, trend: 'up', changePercent: 2.2 },
      { name: 'COPD', frequency: 12.5, memberCount: 731, pmpmCost: 235.75, trend: 'down', changePercent: -1.5 },
      { name: 'Diabetes', frequency: 11.8, memberCount: 690, pmpmCost: 165.25, trend: 'up', changePercent: 2.8 },
      { name: 'Heart Disease', frequency: 7.8, memberCount: 456, pmpmCost: 275.50, trend: 'stable', changePercent: 0.2 },
      { name: 'Depression', frequency: 10.2, memberCount: 596, pmpmCost: 82.75, trend: 'up', changePercent: 1.8 }
    ],
    ageDistribution: [
      { ageRange: '18-34', memberCount: 2338, averagePMPM: 245.50, chronicConditionRate: 7.8, topConditions: ['Depression', 'Hypertension'] },
      { ageRange: '35-49', memberCount: 1754, averagePMPM: 365.75, chronicConditionRate: 19.5, topConditions: ['Hypertension', 'COPD'] },
      { ageRange: '50-64', memberCount: 1169, averagePMPM: 545.25, chronicConditionRate: 32.8, topConditions: ['Hypertension', 'Heart Disease'] },
      { ageRange: '65+', memberCount: 585, averagePMPM: 825.50, chronicConditionRate: 58.2, topConditions: ['Hypertension', 'Heart Disease'] }
    ],
    geographicDistribution: [
      { location: 'Queens', memberCount: 5846, averagePMPM: 585.50, chronicConditionRate: 16.2, topConditions: ['Hypertension', 'COPD'] }
    ],
    costDrivers: [
      { name: 'Emergency Room Visits', value: 2.2, unit: 'per 1000', target: 1.8, changePercent: 3.8 },
      { name: 'Inpatient Admissions', value: 72.5, unit: 'per 1000', target: 65.0, changePercent: 2.2 },
      { name: 'Specialist Referrals', value: 1.4, unit: 'per member', target: 1.2, changePercent: 1.8 },
      { name: 'Prescription Claims', value: 3.5, unit: 'per member', target: 3.2, changePercent: 1.5 }
    ]
  },
  'Bronx': {
    name: 'Bronx',
    costMetrics: {
      currentCostOfCarePMPM: 725.25,
      riskAdjustedPMPM: 635.50,
      medicalPMPM: 555.75,
      pharmacyPMPM: 169.50,
      riskScore: 1.28,
      totalPoolSpending: 30000000,
      activeMembership: 3508
    },
    chronicConditions: [
      { name: 'Diabetes', frequency: 18.5, memberCount: 649, pmpmCost: 195.75, trend: 'up', changePercent: 4.2 },
      { name: 'Hypertension', frequency: 35.8, memberCount: 1256, pmpmCost: 145.25, trend: 'up', changePercent: 3.8 },
      { name: 'Heart Disease', frequency: 12.2, memberCount: 428, pmpmCost: 315.50, trend: 'up', changePercent: 2.5 },
      { name: 'COPD', frequency: 9.8, memberCount: 344, pmpmCost: 255.25, trend: 'down', changePercent: -0.8 },
      { name: 'Depression', frequency: 14.5, memberCount: 509, pmpmCost: 95.75, trend: 'up', changePercent: 3.2 }
    ],
    ageDistribution: [
      { ageRange: '18-34', memberCount: 1403, averagePMPM: 285.50, chronicConditionRate: 12.5, topConditions: ['Depression', 'Hypertension'] },
      { ageRange: '35-49', memberCount: 1052, averagePMPM: 445.75, chronicConditionRate: 28.8, topConditions: ['Hypertension', 'Diabetes'] },
      { ageRange: '50-64', memberCount: 702, averagePMPM: 685.25, chronicConditionRate: 45.2, topConditions: ['Hypertension', 'Heart Disease'] },
      { ageRange: '65+', memberCount: 351, averagePMPM: 1025.50, chronicConditionRate: 72.8, topConditions: ['Hypertension', 'Heart Disease'] }
    ],
    geographicDistribution: [
      { location: 'Bronx', memberCount: 3508, averagePMPM: 725.25, chronicConditionRate: 28.5, topConditions: ['Diabetes', 'Hypertension'] }
    ],
    costDrivers: [
      { name: 'Emergency Room Visits', value: 3.5, unit: 'per 1000', target: 2.8, changePercent: 7.2 },
      { name: 'Inpatient Admissions', value: 95.5, unit: 'per 1000', target: 85.0, changePercent: 5.8 },
      { name: 'Specialist Referrals', value: 1.9, unit: 'per member', target: 1.6, changePercent: 4.2 },
      { name: 'Prescription Claims', value: 4.5, unit: 'per member', target: 4.0, changePercent: 2.8 }
    ]
  },
  'Staten Island': {
    name: 'Staten Island',
    costMetrics: {
      currentCostOfCarePMPM: 545.75,
      riskAdjustedPMPM: 485.50,
      medicalPMPM: 385.25,
      pharmacyPMPM: 160.50,
      riskScore: 1.08,
      totalPoolSpending: 15000000,
      activeMembership: 2338
    },
    chronicConditions: [
      { name: 'Hypertension', frequency: 24.2, memberCount: 566, pmpmCost: 125.75, trend: 'up', changePercent: 1.8 },
      { name: 'Heart Disease', frequency: 11.8, memberCount: 276, pmpmCost: 265.50, trend: 'down', changePercent: -1.2 },
      { name: 'Diabetes', frequency: 9.5, memberCount: 222, pmpmCost: 155.25, trend: 'up', changePercent: 2.2 },
      { name: 'Depression', frequency: 8.8, memberCount: 206, pmpmCost: 78.50, trend: 'up', changePercent: 1.5 },
      { name: 'COPD', frequency: 6.2, memberCount: 145, pmpmCost: 195.75, trend: 'stable', changePercent: 0.3 }
    ],
    ageDistribution: [
      { ageRange: '18-34', memberCount: 935, averagePMPM: 225.50, chronicConditionRate: 6.2, topConditions: ['Depression', 'Hypertension'] },
      { ageRange: '35-49', memberCount: 701, averagePMPM: 335.75, chronicConditionRate: 16.8, topConditions: ['Hypertension', 'Diabetes'] },
      { ageRange: '50-64', memberCount: 468, averagePMPM: 485.25, chronicConditionRate: 28.5, topConditions: ['Hypertension', 'Heart Disease'] },
      { ageRange: '65+', memberCount: 234, averagePMPM: 725.50, chronicConditionRate: 52.8, topConditions: ['Hypertension', 'Heart Disease'] }
    ],
    geographicDistribution: [
      { location: 'Staten Island', memberCount: 2338, averagePMPM: 545.75, chronicConditionRate: 15.8, topConditions: ['Hypertension', 'Heart Disease'] }
    ],
    costDrivers: [
      { name: 'Emergency Room Visits', value: 1.8, unit: 'per 1000', target: 1.5, changePercent: 2.8 },
      { name: 'Inpatient Admissions', value: 65.5, unit: 'per 1000', target: 60.0, changePercent: 1.8 },
      { name: 'Specialist Referrals', value: 1.2, unit: 'per member', target: 1.0, changePercent: 1.2 },
      { name: 'Prescription Claims', value: 3.2, unit: 'per member', target: 2.8, changePercent: 1.0 }
    ]
  }
};