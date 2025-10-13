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
    abbreviation: string;
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
  utilizationCostDrivers: Array<{
    name: string;
    value: number;
    unit: string;
    target: number;
    changePercent: number;
  }>;
  testingCompliance: Array<{
    shortName: string;
    fullName: string;
    currentRate: number;
    targetRate: number;
    changePercent: number;
    trend: 'up' | 'down' | 'stable';
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
      { abbreviation: 'AMI', name: 'Acute Myocardial Infraction', frequency: 0.3, memberCount: 70, pmpmCost: 1250.00, trend: 'stable', changePercent: 0.1 },
      { abbreviation: 'Asthma', name: 'Asthma', frequency: 10.2, memberCount: 2385, pmpmCost: 185.50, trend: 'up', changePercent: 2.3 },
      { abbreviation: 'CHF', name: 'Congestive Heart Failure', frequency: 2.1, memberCount: 491, pmpmCost: 450.75, trend: 'down', changePercent: -1.2 },
      { abbreviation: 'CKD', name: 'Chronic Kidney Disease', frequency: 7.3, memberCount: 1707, pmpmCost: 325.25, trend: 'up', changePercent: 3.1 },
      { abbreviation: 'COPD', name: 'Chronic Obstructive Pulmonary Disease', frequency: 2.6, memberCount: 608, pmpmCost: 245.80, trend: 'stable', changePercent: 0.1 },
      { abbreviation: 'Diabetes', name: 'Diabetes', frequency: 11.6, memberCount: 2712, pmpmCost: 195.50, trend: 'up', changePercent: 2.8 },
      { abbreviation: 'ESRD', name: 'End Stage Renial Disease', frequency: 0.4, memberCount: 94, pmpmCost: 1850.00, trend: 'stable', changePercent: 0.2 },
      { abbreviation: 'Hypertension', name: 'Hyperthension', frequency: 19.4, memberCount: 4536, pmpmCost: 142.75, trend: 'up', changePercent: 1.8 },
      { abbreviation: 'HIV', name: 'HIV', frequency: 0.9, memberCount: 210, pmpmCost: 750.25, trend: 'down', changePercent: -0.5 },
      { abbreviation: 'MH SMI', name: 'Mental Health Serious Mental Illeness', frequency: 14.3, memberCount: 3344, pmpmCost: 225.50, trend: 'up', changePercent: 3.2 },
      { abbreviation: 'MH Non SMI', name: 'MH Non Serious Mental Illness', frequency: 8.6, memberCount: 2011, pmpmCost: 125.75, trend: 'up', changePercent: 2.1 },
      { abbreviation: 'Neuro/CVA', name: 'Cerebrovascular', frequency: 1.5, memberCount: 351, pmpmCost: 385.25, trend: 'stable', changePercent: 0.3 },
      { abbreviation: 'Oncology', name: 'Oncology', frequency: 2.9, memberCount: 678, pmpmCost: 485.90, trend: 'up', changePercent: 1.5 },
      { abbreviation: 'PVD', name: 'Peripheral Vascular Disease', frequency: 3.8, memberCount: 889, pmpmCost: 275.50, trend: 'down', changePercent: -0.8 },
      { abbreviation: 'Sickel Cell', name: 'Sicke Cell', frequency: 0.2, memberCount: 47, pmpmCost: 650.75, trend: 'stable', changePercent: 0.0 },
      { abbreviation: 'Substance Abuse', name: 'Substance Abuse', frequency: 2.0, memberCount: 468, pmpmCost: 195.25, trend: 'up', changePercent: 2.5 }
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
    ],
    utilizationCostDrivers: [
      { name: 'Risk Score', value: 0.92, unit: '', target: 1.0, changePercent: -2.1 },
      { name: 'Annual Wellness Visit (AWV)', value: 74, unit: '%', target: 80, changePercent: 3.2 },
      { name: 'Acute Admit Follow Up: 3days', value: 24, unit: '%', target: 30, changePercent: 2.8 },
      { name: 'Acute Admit Follow Up: 7days', value: 50, unit: '%', target: 60, changePercent: 1.9 },
      { name: 'Acute Admit Follow Up: 14days', value: 61, unit: '%', target: 70, changePercent: 1.5 },
      { name: 'Acute Admit per 1000', value: 280, unit: 'per 1000', target: 250, changePercent: 4.2 },
      { name: 'Acute Admit per 1000: Avoidable', value: 43, unit: 'per 1000', target: 35, changePercent: 5.8 },
      { name: 'RA Acute Admit Per 1000', value: 305, unit: 'per 1000', target: 280, changePercent: 3.9 },
      { name: 'ED visit per 1000', value: 598, unit: 'per 1000', target: 550, changePercent: 6.1 },
      { name: 'ED visit per 1000: Preventable', value: 207, unit: 'per 1000', target: 180, changePercent: 7.2 },
      { name: 'RA ED visit per 1000', value: 650, unit: 'per 1000', target: 600, changePercent: 5.5 },
      { name: 'Out of Network %', value: 13, unit: '%', target: 10, changePercent: 2.3 },
      { name: 'PCP Visit per 100', value: 7653, unit: 'per 100', target: 8000, changePercent: -1.8 }
    ],
    testingCompliance: [
      { shortName: 'Annual Dental Visit', fullName: 'Annual Dental Visit', currentRate: 68.5, targetRate: 75.0, changePercent: 3.2, trend: 'up' },
      { shortName: 'Antidepressant Management', fullName: 'Antidepressant Medication Management - Effective Acute Phase Treatment & Effective Continuation Phase Treatment', currentRate: 72.8, targetRate: 80.0, changePercent: 2.5, trend: 'up' },
      { shortName: 'Breast Cancer Screening', fullName: 'Breast Cancer Screening', currentRate: 71.2, targetRate: 78.0, changePercent: 1.8, trend: 'up' },
      { shortName: 'Medication Review', fullName: 'Care for Older Adults – Medication Review', currentRate: 65.4, targetRate: 70.0, changePercent: 4.1, trend: 'up' },
      { shortName: 'Cervical Cancer Screening', fullName: 'Cervical Cancer Screening', currentRate: 74.6, targetRate: 80.0, changePercent: 2.3, trend: 'up' },
      { shortName: 'Childhood Immunization', fullName: 'Childhood Immunization Status – Combination 3', currentRate: 82.1, targetRate: 85.0, changePercent: 1.5, trend: 'up' },
      { shortName: 'Chlamydia Screening', fullName: 'Chlamydia Screening in Women', currentRate: 58.7, targetRate: 65.0, changePercent: 3.8, trend: 'up' },
      { shortName: 'Colorectal Cancer Screening', fullName: 'Colorectal Cancer Screening', currentRate: 69.3, targetRate: 75.0, changePercent: 2.9, trend: 'up' },
      { shortName: 'HbA1c Poor Control', fullName: 'Comprehensive Diabetes Care: Hemoglobin A1c (HbA1c) Poor Control (>9.0%)', currentRate: 24.8, targetRate: 20.0, changePercent: -2.1, trend: 'down' },
      { shortName: 'Diabetes Nephropathy', fullName: 'Comprehensive Diabetes Care: Medical Attention for Nephropathy', currentRate: 76.2, targetRate: 80.0, changePercent: 1.7, trend: 'up' },
      { shortName: 'Blood Pressure Control', fullName: 'Controlling High Blood Pressure', currentRate: 68.9, targetRate: 75.0, changePercent: 3.4, trend: 'up' },
      { shortName: 'Diabetes Screening', fullName: 'Diabetes Screening for People with Schizophrenia or Bipolar Disorder Who Are Using Antipsychotic Medications', currentRate: 71.5, targetRate: 78.0, changePercent: 2.8, trend: 'up' },
      { shortName: 'ED Follow-up AOD', fullName: 'Follow-Up After Emergency Department Visit for Alcohol and Other Drug Abuse or Dependence', currentRate: 45.2, targetRate: 55.0, changePercent: 4.5, trend: 'up' },
      { shortName: 'ED Follow-up Mental Health', fullName: 'Follow-Up After Emergency Department Visit for Mental Illness', currentRate: 52.8, targetRate: 60.0, changePercent: 3.2, trend: 'up' },
      { shortName: 'Mental Health Follow-up', fullName: 'Follow-up after hospitalization for mental illness', currentRate: 48.6, targetRate: 55.0, changePercent: 2.9, trend: 'up' },
      { shortName: 'ADHD Follow-up', fullName: 'Follow-Up Care for Children Prescribed ADHD Medication', currentRate: 73.4, targetRate: 80.0, changePercent: 2.1, trend: 'up' },
      { shortName: 'Adolescent Immunization', fullName: 'Immunizations for Adolescents – Combination 2', currentRate: 78.9, targetRate: 85.0, changePercent: 1.8, trend: 'up' },
      { shortName: 'AOD Treatment Initiation', fullName: 'Initiation and Engagement of Alcohol and Other Drug Abuse or Dependence Treatment', currentRate: 42.7, targetRate: 50.0, changePercent: 3.6, trend: 'up' },
      { shortName: 'Maternal Depression Screening', fullName: 'Maternal Depression Screening', currentRate: 66.8, targetRate: 72.0, changePercent: 2.4, trend: 'up' },
      { shortName: 'Asthma Medication Management', fullName: 'Medication Management for People with Asthma', currentRate: 74.1, targetRate: 80.0, changePercent: 1.9, trend: 'up' },
      { shortName: 'Asthma Admission Rate', fullName: 'PDI #14 Asthma Admission Rate', currentRate: 12.3, targetRate: 10.0, changePercent: -1.2, trend: 'down' },
      { shortName: 'Prenatal Care', fullName: 'Prenatal and Postpartum Care', currentRate: 81.5, targetRate: 85.0, changePercent: 1.6, trend: 'up' },
      { shortName: 'Statin CVD', fullName: 'Statin Therapy for Patients with Cardiovascular Disease', currentRate: 77.8, targetRate: 82.0, changePercent: 2.3, trend: 'up' },
      { shortName: 'Statin Diabetes', fullName: 'Statin Therapy for Patients with Diabetes', currentRate: 75.2, targetRate: 80.0, changePercent: 2.7, trend: 'up' },
      { shortName: 'Psychosocial Care', fullName: 'Use of First-Line Psychosocial Care for Children and Adolescents on Antipsychotics', currentRate: 69.6, targetRate: 75.0, changePercent: 2.8, trend: 'up' },
      { shortName: 'High-Risk Medications', fullName: 'Use of High–Risk Medications in the Elderly', currentRate: 8.4, targetRate: 5.0, changePercent: -1.8, trend: 'down' },
      { shortName: 'COPD Spirometry', fullName: 'Use of Spirometry Testing in the Assessment and Diagnosis of COPD', currentRate: 62.3, targetRate: 70.0, changePercent: 3.1, trend: 'up' },
      { shortName: 'Weight Assessment', fullName: 'Weight Assessment and Counseling for Nutrition and Physical Activity for Children/Adolescents', currentRate: 71.7, targetRate: 78.0, changePercent: 2.5, trend: 'up' },
      { shortName: 'Well-Child 15 Months', fullName: 'Well-Child Visits in the First 15 Months of Life', currentRate: 79.2, targetRate: 85.0, changePercent: 1.9, trend: 'up' },
      { shortName: 'Well-Child 3-6 Years', fullName: 'Well-Child Visits in the Third, Fourth, Fifth, and Sixth Year of Life', currentRate: 76.8, targetRate: 82.0, changePercent: 2.2, trend: 'up' }
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
      { abbreviation: 'AMI', name: 'Acute Myocardial Infraction', frequency: 0.2, memberCount: 9, pmpmCost: 1250.00, trend: 'stable', changePercent: 0.1 },
      { abbreviation: 'Asthma', name: 'Asthma', frequency: 8.5, memberCount: 397, pmpmCost: 185.50, trend: 'up', changePercent: 2.3 },
      { abbreviation: 'CHF', name: 'Congestive Heart Failure', frequency: 1.8, memberCount: 84, pmpmCost: 450.75, trend: 'down', changePercent: -1.2 },
      { abbreviation: 'CKD', name: 'Chronic Kidney Disease', frequency: 6.2, memberCount: 290, pmpmCost: 325.25, trend: 'up', changePercent: 3.1 },
      { abbreviation: 'COPD', name: 'Chronic Obstructive Pulmonary Disease', frequency: 2.1, memberCount: 98, pmpmCost: 245.80, trend: 'stable', changePercent: 0.1 },
      { abbreviation: 'Diabetes', name: 'Diabetes', frequency: 9.8, memberCount: 458, pmpmCost: 195.50, trend: 'up', changePercent: 2.8 },
      { abbreviation: 'ESRD', name: 'End Stage Renial Disease', frequency: 0.3, memberCount: 14, pmpmCost: 1850.00, trend: 'stable', changePercent: 0.2 },
      { abbreviation: 'Hypertension', name: 'Hyperthension', frequency: 16.8, memberCount: 785, pmpmCost: 142.75, trend: 'up', changePercent: 1.8 },
      { abbreviation: 'HIV', name: 'HIV', frequency: 0.7, memberCount: 33, pmpmCost: 750.25, trend: 'down', changePercent: -0.5 },
      { abbreviation: 'MH SMI', name: 'Mental Health Serious Mental Illeness', frequency: 12.5, memberCount: 584, pmpmCost: 225.50, trend: 'up', changePercent: 3.2 },
      { abbreviation: 'MH Non SMI', name: 'MH Non Serious Mental Illness', frequency: 7.2, memberCount: 337, pmpmCost: 125.75, trend: 'up', changePercent: 2.1 },
      { abbreviation: 'Neuro/CVA', name: 'Cerebrovascular', frequency: 1.2, memberCount: 56, pmpmCost: 385.25, trend: 'stable', changePercent: 0.3 },
      { abbreviation: 'Oncology', name: 'Oncology', frequency: 2.4, memberCount: 112, pmpmCost: 485.90, trend: 'up', changePercent: 1.5 },
      { abbreviation: 'PVD', name: 'Peripheral Vascular Disease', frequency: 3.2, memberCount: 150, pmpmCost: 275.50, trend: 'down', changePercent: -0.8 },
      { abbreviation: 'Sickel Cell', name: 'Sicke Cell', frequency: 0.1, memberCount: 5, pmpmCost: 650.75, trend: 'stable', changePercent: 0.0 },
      { abbreviation: 'Substance Abuse', name: 'Substance Abuse', frequency: 1.6, memberCount: 75, pmpmCost: 195.25, trend: 'up', changePercent: 2.5 }
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
    ],
    utilizationCostDrivers: [
      { name: 'Risk Score', value: 0.88, unit: '', target: 1.0, changePercent: -1.8 },
      { name: 'Annual Wellness Visit (AWV)', value: 78, unit: '%', target: 80, changePercent: 2.5 },
      { name: 'Acute Admit Follow Up: 3days', value: 28, unit: '%', target: 30, changePercent: 2.2 },
      { name: 'Acute Admit Follow Up: 7days', value: 55, unit: '%', target: 60, changePercent: 1.6 },
      { name: 'Acute Admit Follow Up: 14days', value: 68, unit: '%', target: 70, changePercent: 1.2 },
      { name: 'Acute Admit per 1000', value: 265, unit: 'per 1000', target: 250, changePercent: 3.8 },
      { name: 'Acute Admit per 1000: Avoidable', value: 38, unit: 'per 1000', target: 35, changePercent: 5.2 },
      { name: 'RA Acute Admit Per 1000', value: 290, unit: 'per 1000', target: 280, changePercent: 3.4 },
      { name: 'ED visit per 1000', value: 565, unit: 'per 1000', target: 550, changePercent: 5.6 },
      { name: 'ED visit per 1000: Preventable', value: 195, unit: 'per 1000', target: 180, changePercent: 6.8 },
      { name: 'RA ED visit per 1000', value: 615, unit: 'per 1000', target: 600, changePercent: 5.0 },
      { name: 'Out of Network %', value: 11, unit: '%', target: 10, changePercent: 1.8 },
      { name: 'PCP Visit per 100', value: 7850, unit: 'per 100', target: 8000, changePercent: -1.5 }
    ],
    testingCompliance: [
      { shortName: 'Annual Dental Visit', fullName: 'Annual Dental Visit', currentRate: 72.1, targetRate: 75.0, changePercent: 2.8, trend: 'up' },
      { shortName: 'Antidepressant Management', fullName: 'Antidepressant Medication Management - Effective Acute Phase Treatment & Effective Continuation Phase Treatment', currentRate: 75.3, targetRate: 80.0, changePercent: 2.1, trend: 'up' },
      { shortName: 'Breast Cancer Screening', fullName: 'Breast Cancer Screening', currentRate: 73.8, targetRate: 78.0, changePercent: 1.5, trend: 'up' },
      { shortName: 'Medication Review', fullName: 'Care for Older Adults – Medication Review', currentRate: 68.2, targetRate: 70.0, changePercent: 3.6, trend: 'up' },
      { shortName: 'Cervical Cancer Screening', fullName: 'Cervical Cancer Screening', currentRate: 77.1, targetRate: 80.0, changePercent: 2.0, trend: 'up' },
      { shortName: 'Childhood Immunization', fullName: 'Childhood Immunization Status – Combination 3', currentRate: 84.5, targetRate: 85.0, changePercent: 1.2, trend: 'up' },
      { shortName: 'Chlamydia Screening', fullName: 'Chlamydia Screening in Women', currentRate: 61.8, targetRate: 65.0, changePercent: 3.2, trend: 'up' },
      { shortName: 'Colorectal Cancer Screening', fullName: 'Colorectal Cancer Screening', currentRate: 71.9, targetRate: 75.0, changePercent: 2.5, trend: 'up' },
      { shortName: 'HbA1c Poor Control', fullName: 'Comprehensive Diabetes Care: Hemoglobin A1c (HbA1c) Poor Control (>9.0%)', currentRate: 22.4, targetRate: 20.0, changePercent: -1.8, trend: 'down' },
      { shortName: 'Diabetes Nephropathy', fullName: 'Comprehensive Diabetes Care: Medical Attention for Nephropathy', currentRate: 78.6, targetRate: 80.0, changePercent: 1.4, trend: 'up' },
      { shortName: 'Blood Pressure Control', fullName: 'Controlling High Blood Pressure', currentRate: 71.2, targetRate: 75.0, changePercent: 2.9, trend: 'up' },
      { shortName: 'Diabetes Screening', fullName: 'Diabetes Screening for People with Schizophrenia or Bipolar Disorder Who Are Using Antipsychotic Medications', currentRate: 73.8, targetRate: 78.0, changePercent: 2.4, trend: 'up' },
      { shortName: 'ED Follow-up AOD', fullName: 'Follow-Up After Emergency Department Visit for Alcohol and Other Drug Abuse or Dependence', currentRate: 48.7, targetRate: 55.0, changePercent: 3.8, trend: 'up' },
      { shortName: 'ED Follow-up Mental Health', fullName: 'Follow-Up After Emergency Department Visit for Mental Illness', currentRate: 55.4, targetRate: 60.0, changePercent: 2.7, trend: 'up' },
      { shortName: 'Mental Health Follow-up', fullName: 'Follow-up after hospitalization for mental illness', currentRate: 51.2, targetRate: 55.0, changePercent: 2.4, trend: 'up' },
      { shortName: 'ADHD Follow-up', fullName: 'Follow-Up Care for Children Prescribed ADHD Medication', currentRate: 75.8, targetRate: 80.0, changePercent: 1.8, trend: 'up' },
      { shortName: 'Adolescent Immunization', fullName: 'Immunizations for Adolescents – Combination 2', currentRate: 81.3, targetRate: 85.0, changePercent: 1.5, trend: 'up' },
      { shortName: 'AOD Treatment Initiation', fullName: 'Initiation and Engagement of Alcohol and Other Drug Abuse or Dependence Treatment', currentRate: 45.8, targetRate: 50.0, changePercent: 3.1, trend: 'up' },
      { shortName: 'Maternal Depression Screening', fullName: 'Maternal Depression Screening', currentRate: 69.4, targetRate: 72.0, changePercent: 2.1, trend: 'up' },
      { shortName: 'Asthma Medication Management', fullName: 'Medication Management for People with Asthma', currentRate: 76.7, targetRate: 80.0, changePercent: 1.6, trend: 'up' },
      { shortName: 'Asthma Admission Rate', fullName: 'PDI #14 Asthma Admission Rate', currentRate: 11.2, targetRate: 10.0, changePercent: -1.0, trend: 'down' },
      { shortName: 'Prenatal Care', fullName: 'Prenatal and Postpartum Care', currentRate: 83.8, targetRate: 85.0, changePercent: 1.3, trend: 'up' },
      { shortName: 'Statin CVD', fullName: 'Statin Therapy for Patients with Cardiovascular Disease', currentRate: 80.1, targetRate: 82.0, changePercent: 2.0, trend: 'up' },
      { shortName: 'Statin Diabetes', fullName: 'Statin Therapy for Patients with Diabetes', currentRate: 77.6, targetRate: 80.0, changePercent: 2.3, trend: 'up' },
      { shortName: 'Psychosocial Care', fullName: 'Use of First-Line Psychosocial Care for Children and Adolescents on Antipsychotics', currentRate: 72.1, targetRate: 75.0, changePercent: 2.4, trend: 'up' },
      { shortName: 'High-Risk Medications', fullName: 'Use of High–Risk Medications in the Elderly', currentRate: 7.8, targetRate: 5.0, changePercent: -1.5, trend: 'down' },
      { shortName: 'COPD Spirometry', fullName: 'Use of Spirometry Testing in the Assessment and Diagnosis of COPD', currentRate: 65.2, targetRate: 70.0, changePercent: 2.7, trend: 'up' },
      { shortName: 'Weight Assessment', fullName: 'Weight Assessment and Counseling for Nutrition and Physical Activity for Children/Adolescents', currentRate: 74.3, targetRate: 78.0, changePercent: 2.2, trend: 'up' },
      { shortName: 'Well-Child 15 Months', fullName: 'Well-Child Visits in the First 15 Months of Life', currentRate: 81.6, targetRate: 85.0, changePercent: 1.6, trend: 'up' },
      { shortName: 'Well-Child 3-6 Years', fullName: 'Well-Child Visits in the Third, Fourth, Fifth, and Sixth Year of Life', currentRate: 79.4, targetRate: 82.0, changePercent: 1.9, trend: 'up' }
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
      { abbreviation: 'AMI', name: 'Acute Myocardial Infraction', frequency: 0.4, memberCount: 28, pmpmCost: 1250.00, trend: 'stable', changePercent: 0.1 },
      { abbreviation: 'Asthma', name: 'Asthma', frequency: 11.8, memberCount: 828, pmpmCost: 185.50, trend: 'up', changePercent: 2.3 },
      { abbreviation: 'CHF', name: 'Congestive Heart Failure', frequency: 2.5, memberCount: 175, pmpmCost: 450.75, trend: 'down', changePercent: -1.2 },
      { abbreviation: 'CKD', name: 'Chronic Kidney Disease', frequency: 8.1, memberCount: 568, pmpmCost: 325.25, trend: 'up', changePercent: 3.1 },
      { abbreviation: 'COPD', name: 'Chronic Obstructive Pulmonary Disease', frequency: 3.2, memberCount: 224, pmpmCost: 245.80, trend: 'stable', changePercent: 0.1 },
      { abbreviation: 'Diabetes', name: 'Diabetes', frequency: 12.8, memberCount: 898, pmpmCost: 195.50, trend: 'up', changePercent: 2.8 },
      { abbreviation: 'ESRD', name: 'End Stage Renial Disease', frequency: 0.5, memberCount: 35, pmpmCost: 1850.00, trend: 'stable', changePercent: 0.2 },
      { abbreviation: 'Hypertension', name: 'Hyperthension', frequency: 21.2, memberCount: 1487, pmpmCost: 142.75, trend: 'up', changePercent: 1.8 },
      { abbreviation: 'HIV', name: 'HIV', frequency: 1.1, memberCount: 77, pmpmCost: 750.25, trend: 'down', changePercent: -0.5 },
      { abbreviation: 'MH SMI', name: 'Mental Health Serious Mental Illeness', frequency: 15.8, memberCount: 1108, pmpmCost: 225.50, trend: 'up', changePercent: 3.2 },
      { abbreviation: 'MH Non SMI', name: 'MH Non Serious Mental Illness', frequency: 9.5, memberCount: 666, pmpmCost: 125.75, trend: 'up', changePercent: 2.1 },
      { abbreviation: 'Neuro/CVA', name: 'Cerebrovascular', frequency: 1.8, memberCount: 126, pmpmCost: 385.25, trend: 'stable', changePercent: 0.3 },
      { abbreviation: 'Oncology', name: 'Oncology', frequency: 3.2, memberCount: 224, pmpmCost: 485.90, trend: 'up', changePercent: 1.5 },
      { abbreviation: 'PVD', name: 'Peripheral Vascular Disease', frequency: 4.2, memberCount: 294, pmpmCost: 275.50, trend: 'down', changePercent: -0.8 },
      { abbreviation: 'Sickel Cell', name: 'Sicke Cell', frequency: 0.3, memberCount: 21, pmpmCost: 650.75, trend: 'stable', changePercent: 0.0 },
      { abbreviation: 'Substance Abuse', name: 'Substance Abuse', frequency: 2.3, memberCount: 161, pmpmCost: 195.25, trend: 'up', changePercent: 2.5 }
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
    ],
    utilizationCostDrivers: [
      { name: 'Risk Score', value: 0.95, unit: '', target: 1.0, changePercent: -2.3 },
      { name: 'Annual Wellness Visit (AWV)', value: 72, unit: '%', target: 80, changePercent: 3.5 },
      { name: 'Acute Admit Follow Up: 3days', value: 22, unit: '%', target: 30, changePercent: 3.1 },
      { name: 'Acute Admit Follow Up: 7days', value: 48, unit: '%', target: 60, changePercent: 2.2 },
      { name: 'Acute Admit Follow Up: 14days', value: 58, unit: '%', target: 70, changePercent: 1.8 },
      { name: 'Acute Admit per 1000', value: 295, unit: 'per 1000', target: 250, changePercent: 4.8 },
      { name: 'Acute Admit per 1000: Avoidable', value: 48, unit: 'per 1000', target: 35, changePercent: 6.2 },
      { name: 'RA Acute Admit Per 1000', value: 320, unit: 'per 1000', target: 280, changePercent: 4.3 },
      { name: 'ED visit per 1000', value: 615, unit: 'per 1000', target: 550, changePercent: 6.5 },
      { name: 'ED visit per 1000: Preventable', value: 215, unit: 'per 1000', target: 180, changePercent: 7.8 },
      { name: 'RA ED visit per 1000', value: 670, unit: 'per 1000', target: 600, changePercent: 5.9 },
      { name: 'Out of Network %', value: 14, unit: '%', target: 10, changePercent: 2.8 },
      { name: 'PCP Visit per 100', value: 7520, unit: 'per 100', target: 8000, changePercent: -2.1 }
    ],
    testingCompliance: [
      { shortName: 'Annual Dental Visit', fullName: 'Annual Dental Visit', currentRate: 66.8, targetRate: 75.0, changePercent: 3.5, trend: 'up' },
      { shortName: 'Antidepressant Management', fullName: 'Antidepressant Medication Management - Effective Acute Phase Treatment & Effective Continuation Phase Treatment', currentRate: 70.2, targetRate: 80.0, changePercent: 2.8, trend: 'up' },
      { shortName: 'Breast Cancer Screening', fullName: 'Breast Cancer Screening', currentRate: 69.5, targetRate: 78.0, changePercent: 2.1, trend: 'up' },
      { shortName: 'Medication Review', fullName: 'Care for Older Adults – Medication Review', currentRate: 63.8, targetRate: 70.0, changePercent: 4.3, trend: 'up' },
      { shortName: 'Cervical Cancer Screening', fullName: 'Cervical Cancer Screening', currentRate: 72.4, targetRate: 80.0, changePercent: 2.6, trend: 'up' },
      { shortName: 'Childhood Immunization', fullName: 'Childhood Immunization Status – Combination 3', currentRate: 80.3, targetRate: 85.0, changePercent: 1.7, trend: 'up' },
      { shortName: 'Chlamydia Screening', fullName: 'Chlamydia Screening in Women', currentRate: 56.9, targetRate: 65.0, changePercent: 4.1, trend: 'up' },
      { shortName: 'Colorectal Cancer Screening', fullName: 'Colorectal Cancer Screening', currentRate: 67.8, targetRate: 75.0, changePercent: 3.2, trend: 'up' },
      { shortName: 'HbA1c Poor Control', fullName: 'Comprehensive Diabetes Care: Hemoglobin A1c (HbA1c) Poor Control (>9.0%)', currentRate: 26.4, targetRate: 20.0, changePercent: -2.3, trend: 'down' },
      { shortName: 'Diabetes Nephropathy', fullName: 'Comprehensive Diabetes Care: Medical Attention for Nephropathy', currentRate: 74.8, targetRate: 80.0, changePercent: 1.9, trend: 'up' },
      { shortName: 'Blood Pressure Control', fullName: 'Controlling High Blood Pressure', currentRate: 67.2, targetRate: 75.0, changePercent: 3.7, trend: 'up' },
      { shortName: 'Diabetes Screening', fullName: 'Diabetes Screening for People with Schizophrenia or Bipolar Disorder Who Are Using Antipsychotic Medications', currentRate: 69.8, targetRate: 78.0, changePercent: 3.1, trend: 'up' },
      { shortName: 'ED Follow-up AOD', fullName: 'Follow-Up After Emergency Department Visit for Alcohol and Other Drug Abuse or Dependence', currentRate: 43.6, targetRate: 55.0, changePercent: 4.8, trend: 'up' },
      { shortName: 'ED Follow-up Mental Health', fullName: 'Follow-Up After Emergency Department Visit for Mental Illness', currentRate: 50.9, targetRate: 60.0, changePercent: 3.5, trend: 'up' },
      { shortName: 'Mental Health Follow-up', fullName: 'Follow-up after hospitalization for mental illness', currentRate: 46.8, targetRate: 55.0, changePercent: 3.2, trend: 'up' },
      { shortName: 'ADHD Follow-up', fullName: 'Follow-Up Care for Children Prescribed ADHD Medication', currentRate: 71.6, targetRate: 80.0, changePercent: 2.4, trend: 'up' },
      { shortName: 'Adolescent Immunization', fullName: 'Immunizations for Adolescents – Combination 2', currentRate: 77.2, targetRate: 85.0, changePercent: 2.1, trend: 'up' },
      { shortName: 'AOD Treatment Initiation', fullName: 'Initiation and Engagement of Alcohol and Other Drug Abuse or Dependence Treatment', currentRate: 40.8, targetRate: 50.0, changePercent: 3.9, trend: 'up' },
      { shortName: 'Maternal Depression Screening', fullName: 'Maternal Depression Screening', currentRate: 64.9, targetRate: 72.0, changePercent: 2.7, trend: 'up' },
      { shortName: 'Asthma Medication Management', fullName: 'Medication Management for People with Asthma', currentRate: 72.6, targetRate: 80.0, changePercent: 2.2, trend: 'up' },
      { shortName: 'Asthma Admission Rate', fullName: 'PDI #14 Asthma Admission Rate', currentRate: 13.1, targetRate: 10.0, changePercent: -1.4, trend: 'down' },
      { shortName: 'Prenatal Care', fullName: 'Prenatal and Postpartum Care', currentRate: 79.8, targetRate: 85.0, changePercent: 1.8, trend: 'up' },
      { shortName: 'Statin CVD', fullName: 'Statin Therapy for Patients with Cardiovascular Disease', currentRate: 75.9, targetRate: 82.0, changePercent: 2.6, trend: 'up' },
      { shortName: 'Statin Diabetes', fullName: 'Statin Therapy for Patients with Diabetes', currentRate: 73.4, targetRate: 80.0, changePercent: 3.0, trend: 'up' },
      { shortName: 'Psychosocial Care', fullName: 'Use of First-Line Psychosocial Care for Children and Adolescents on Antipsychotics', currentRate: 67.8, targetRate: 75.0, changePercent: 3.1, trend: 'up' },
      { shortName: 'High-Risk Medications', fullName: 'Use of High–Risk Medications in the Elderly', currentRate: 8.9, targetRate: 5.0, changePercent: -2.0, trend: 'down' },
      { shortName: 'COPD Spirometry', fullName: 'Use of Spirometry Testing in the Assessment and Diagnosis of COPD', currentRate: 60.7, targetRate: 70.0, changePercent: 3.4, trend: 'up' },
      { shortName: 'Weight Assessment', fullName: 'Weight Assessment and Counseling for Nutrition and Physical Activity for Children/Adolescents', currentRate: 69.8, targetRate: 78.0, changePercent: 2.8, trend: 'up' },
      { shortName: 'Well-Child 15 Months', fullName: 'Well-Child Visits in the First 15 Months of Life', currentRate: 77.6, targetRate: 85.0, changePercent: 2.2, trend: 'up' },
      { shortName: 'Well-Child 3-6 Years', fullName: 'Well-Child Visits in the Third, Fourth, Fifth, and Sixth Year of Life', currentRate: 75.2, targetRate: 82.0, changePercent: 2.5, trend: 'up' }
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
      { abbreviation: 'AMI', name: 'Acute Myocardial Infraction', frequency: 0.3, memberCount: 18, pmpmCost: 1250.00, trend: 'stable', changePercent: 0.1 },
      { abbreviation: 'Asthma', name: 'Asthma', frequency: 9.8, memberCount: 573, pmpmCost: 185.50, trend: 'up', changePercent: 2.3 },
      { abbreviation: 'CHF', name: 'Congestive Heart Failure', frequency: 2.0, memberCount: 117, pmpmCost: 450.75, trend: 'down', changePercent: -1.2 },
      { abbreviation: 'CKD', name: 'Chronic Kidney Disease', frequency: 6.8, memberCount: 397, pmpmCost: 325.25, trend: 'up', changePercent: 3.1 },
      { abbreviation: 'COPD', name: 'Chronic Obstructive Pulmonary Disease', frequency: 2.4, memberCount: 140, pmpmCost: 245.80, trend: 'stable', changePercent: 0.1 },
      { abbreviation: 'Diabetes', name: 'Diabetes', frequency: 10.8, memberCount: 631, pmpmCost: 195.50, trend: 'up', changePercent: 2.8 },
      { abbreviation: 'ESRD', name: 'End Stage Renial Disease', frequency: 0.4, memberCount: 23, pmpmCost: 1850.00, trend: 'stable', changePercent: 0.2 },
      { abbreviation: 'Hypertension', name: 'Hyperthension', frequency: 18.2, memberCount: 1064, pmpmCost: 142.75, trend: 'up', changePercent: 1.8 },
      { abbreviation: 'HIV', name: 'HIV', frequency: 0.8, memberCount: 47, pmpmCost: 750.25, trend: 'down', changePercent: -0.5 },
      { abbreviation: 'MH SMI', name: 'Mental Health Serious Mental Illeness', frequency: 13.2, memberCount: 771, pmpmCost: 225.50, trend: 'up', changePercent: 3.2 },
      { abbreviation: 'MH Non SMI', name: 'MH Non Serious Mental Illness', frequency: 7.8, memberCount: 456, pmpmCost: 125.75, trend: 'up', changePercent: 2.1 },
      { abbreviation: 'Neuro/CVA', name: 'Cerebrovascular', frequency: 1.4, memberCount: 82, pmpmCost: 385.25, trend: 'stable', changePercent: 0.3 },
      { abbreviation: 'Oncology', name: 'Oncology', frequency: 2.7, memberCount: 158, pmpmCost: 485.90, trend: 'up', changePercent: 1.5 },
      { abbreviation: 'PVD', name: 'Peripheral Vascular Disease', frequency: 3.5, memberCount: 205, pmpmCost: 275.50, trend: 'down', changePercent: -0.8 },
      { abbreviation: 'Sickel Cell', name: 'Sicke Cell', frequency: 0.2, memberCount: 12, pmpmCost: 650.75, trend: 'stable', changePercent: 0.0 },
      { abbreviation: 'Substance Abuse', name: 'Substance Abuse', frequency: 1.8, memberCount: 105, pmpmCost: 195.25, trend: 'up', changePercent: 2.5 }
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
    ],
    utilizationCostDrivers: [
      { name: 'Risk Score', value: 0.94, unit: '', target: 1.0, changePercent: -2.0 },
      { name: 'Annual Wellness Visit (AWV)', value: 70, unit: '%', target: 80, changePercent: 3.8 },
      { name: 'Acute Admit Follow Up: 3days', value: 20, unit: '%', target: 30, changePercent: 3.4 },
      { name: 'Acute Admit Follow Up: 7days', value: 45, unit: '%', target: 60, changePercent: 2.5 },
      { name: 'Acute Admit Follow Up: 14days', value: 55, unit: '%', target: 70, changePercent: 2.0 },
      { name: 'Acute Admit per 1000', value: 290, unit: 'per 1000', target: 250, changePercent: 4.5 },
      { name: 'Acute Admit per 1000: Avoidable', value: 45, unit: 'per 1000', target: 35, changePercent: 5.9 },
      { name: 'RA Acute Admit Per 1000', value: 315, unit: 'per 1000', target: 280, changePercent: 4.1 },
      { name: 'ED visit per 1000', value: 605, unit: 'per 1000', target: 550, changePercent: 6.2 },
      { name: 'ED visit per 1000: Preventable', value: 210, unit: 'per 1000', target: 180, changePercent: 7.5 },
      { name: 'RA ED visit per 1000', value: 660, unit: 'per 1000', target: 600, changePercent: 5.7 },
      { name: 'Out of Network %', value: 12, unit: '%', target: 10, changePercent: 2.5 },
      { name: 'PCP Visit per 100', value: 7580, unit: 'per 100', target: 8000, changePercent: -1.9 }
    ],
    testingCompliance: [
      { shortName: 'Annual Dental Visit', fullName: 'Annual Dental Visit', currentRate: 65.2, targetRate: 75.0, changePercent: 3.8, trend: 'up' },
      { shortName: 'Antidepressant Management', fullName: 'Antidepressant Medication Management - Effective Acute Phase Treatment & Effective Continuation Phase Treatment', currentRate: 68.9, targetRate: 80.0, changePercent: 3.1, trend: 'up' },
      { shortName: 'Breast Cancer Screening', fullName: 'Breast Cancer Screening', currentRate: 67.8, targetRate: 78.0, changePercent: 2.4, trend: 'up' },
      { shortName: 'Medication Review', fullName: 'Care for Older Adults – Medication Review', currentRate: 61.5, targetRate: 70.0, changePercent: 4.6, trend: 'up' },
      { shortName: 'Cervical Cancer Screening', fullName: 'Cervical Cancer Screening', currentRate: 70.8, targetRate: 80.0, changePercent: 2.9, trend: 'up' },
      { shortName: 'Childhood Immunization', fullName: 'Childhood Immunization Status – Combination 3', currentRate: 78.6, targetRate: 85.0, changePercent: 1.9, trend: 'up' },
      { shortName: 'Chlamydia Screening', fullName: 'Chlamydia Screening in Women', currentRate: 54.2, targetRate: 65.0, changePercent: 4.4, trend: 'up' },
      { shortName: 'Colorectal Cancer Screening', fullName: 'Colorectal Cancer Screening', currentRate: 65.9, targetRate: 75.0, changePercent: 3.5, trend: 'up' },
      { shortName: 'HbA1c Poor Control', fullName: 'Comprehensive Diabetes Care: Hemoglobin A1c (HbA1c) Poor Control (>9.0%)', currentRate: 27.8, targetRate: 20.0, changePercent: -2.5, trend: 'down' },
      { shortName: 'Diabetes Nephropathy', fullName: 'Comprehensive Diabetes Care: Medical Attention for Nephropathy', currentRate: 73.1, targetRate: 80.0, changePercent: 2.2, trend: 'up' },
      { shortName: 'Blood Pressure Control', fullName: 'Controlling High Blood Pressure', currentRate: 65.4, targetRate: 75.0, changePercent: 4.0, trend: 'up' },
      { shortName: 'Diabetes Screening', fullName: 'Diabetes Screening for People with Schizophrenia or Bipolar Disorder Who Are Using Antipsychotic Medications', currentRate: 67.9, targetRate: 78.0, changePercent: 3.4, trend: 'up' },
      { shortName: 'ED Follow-up AOD', fullName: 'Follow-Up After Emergency Department Visit for Alcohol and Other Drug Abuse or Dependence', currentRate: 41.8, targetRate: 55.0, changePercent: 5.1, trend: 'up' },
      { shortName: 'ED Follow-up Mental Health', fullName: 'Follow-Up After Emergency Department Visit for Mental Illness', currentRate: 48.6, targetRate: 60.0, changePercent: 3.8, trend: 'up' },
      { shortName: 'Mental Health Follow-up', fullName: 'Follow-up after hospitalization for mental illness', currentRate: 44.2, targetRate: 55.0, changePercent: 3.5, trend: 'up' },
      { shortName: 'ADHD Follow-up', fullName: 'Follow-Up Care for Children Prescribed ADHD Medication', currentRate: 69.8, targetRate: 80.0, changePercent: 2.7, trend: 'up' },
      { shortName: 'Adolescent Immunization', fullName: 'Immunizations for Adolescents – Combination 2', currentRate: 75.6, targetRate: 85.0, changePercent: 2.4, trend: 'up' },
      { shortName: 'AOD Treatment Initiation', fullName: 'Initiation and Engagement of Alcohol and Other Drug Abuse or Dependence Treatment', currentRate: 38.9, targetRate: 50.0, changePercent: 4.2, trend: 'up' },
      { shortName: 'Maternal Depression Screening', fullName: 'Maternal Depression Screening', currentRate: 62.4, targetRate: 72.0, changePercent: 3.0, trend: 'up' },
      { shortName: 'Asthma Medication Management', fullName: 'Medication Management for People with Asthma', currentRate: 70.8, targetRate: 80.0, changePercent: 2.5, trend: 'up' },
      { shortName: 'Asthma Admission Rate', fullName: 'PDI #14 Asthma Admission Rate', currentRate: 13.8, targetRate: 10.0, changePercent: -1.6, trend: 'down' },
      { shortName: 'Prenatal Care', fullName: 'Prenatal and Postpartum Care', currentRate: 77.9, targetRate: 85.0, changePercent: 2.1, trend: 'up' },
      { shortName: 'Statin CVD', fullName: 'Statin Therapy for Patients with Cardiovascular Disease', currentRate: 74.2, targetRate: 82.0, changePercent: 2.9, trend: 'up' },
      { shortName: 'Statin Diabetes', fullName: 'Statin Therapy for Patients with Diabetes', currentRate: 71.8, targetRate: 80.0, changePercent: 3.3, trend: 'up' },
      { shortName: 'Psychosocial Care', fullName: 'Use of First-Line Psychosocial Care for Children and Adolescents on Antipsychotics', currentRate: 65.4, targetRate: 75.0, changePercent: 3.4, trend: 'up' },
      { shortName: 'High-Risk Medications', fullName: 'Use of High–Risk Medications in the Elderly', currentRate: 9.2, targetRate: 5.0, changePercent: -2.2, trend: 'down' },
      { shortName: 'COPD Spirometry', fullName: 'Use of Spirometry Testing in the Assessment and Diagnosis of COPD', currentRate: 58.9, targetRate: 70.0, changePercent: 3.7, trend: 'up' },
      { shortName: 'Weight Assessment', fullName: 'Weight Assessment and Counseling for Nutrition and Physical Activity for Children/Adolescents', currentRate: 67.5, targetRate: 78.0, changePercent: 3.1, trend: 'up' },
      { shortName: 'Well-Child 15 Months', fullName: 'Well-Child Visits in the First 15 Months of Life', currentRate: 75.8, targetRate: 85.0, changePercent: 2.5, trend: 'up' },
      { shortName: 'Well-Child 3-6 Years', fullName: 'Well-Child Visits in the Third, Fourth, Fifth, and Sixth Year of Life', currentRate: 73.6, targetRate: 82.0, changePercent: 2.8, trend: 'up' }
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
      { abbreviation: 'AMI', name: 'Acute Myocardial Infraction', frequency: 0.5, memberCount: 18, pmpmCost: 1250.00, trend: 'stable', changePercent: 0.1 },
      { abbreviation: 'Asthma', name: 'Asthma', frequency: 12.8, memberCount: 449, pmpmCost: 185.50, trend: 'up', changePercent: 2.3 },
      { abbreviation: 'CHF', name: 'Congestive Heart Failure', frequency: 2.8, memberCount: 98, pmpmCost: 450.75, trend: 'down', changePercent: -1.2 },
      { abbreviation: 'CKD', name: 'Chronic Kidney Disease', frequency: 9.2, memberCount: 323, pmpmCost: 325.25, trend: 'up', changePercent: 3.1 },
      { abbreviation: 'COPD', name: 'Chronic Obstructive Pulmonary Disease', frequency: 3.5, memberCount: 123, pmpmCost: 245.80, trend: 'stable', changePercent: 0.1 },
      { abbreviation: 'Diabetes', name: 'Diabetes', frequency: 14.2, memberCount: 498, pmpmCost: 195.50, trend: 'up', changePercent: 2.8 },
      { abbreviation: 'ESRD', name: 'End Stage Renial Disease', frequency: 0.6, memberCount: 21, pmpmCost: 1850.00, trend: 'stable', changePercent: 0.2 },
      { abbreviation: 'Hypertension', name: 'Hyperthension', frequency: 22.8, memberCount: 800, pmpmCost: 142.75, trend: 'up', changePercent: 1.8 },
      { abbreviation: 'HIV', name: 'HIV', frequency: 1.2, memberCount: 42, pmpmCost: 750.25, trend: 'down', changePercent: -0.5 },
      { abbreviation: 'MH SMI', name: 'Mental Health Serious Mental Illeness', frequency: 17.8, memberCount: 624, pmpmCost: 225.50, trend: 'up', changePercent: 3.2 },
      { abbreviation: 'MH Non SMI', name: 'MH Non Serious Mental Illness', frequency: 10.8, memberCount: 379, pmpmCost: 125.75, trend: 'up', changePercent: 2.1 },
      { abbreviation: 'Neuro/CVA', name: 'Cerebrovascular', frequency: 2.1, memberCount: 74, pmpmCost: 385.25, trend: 'stable', changePercent: 0.3 },
      { abbreviation: 'Oncology', name: 'Oncology', frequency: 3.8, memberCount: 133, pmpmCost: 485.90, trend: 'up', changePercent: 1.5 },
      { abbreviation: 'PVD', name: 'Peripheral Vascular Disease', frequency: 5.2, memberCount: 182, pmpmCost: 275.50, trend: 'down', changePercent: -0.8 },
      { abbreviation: 'Sickel Cell', name: 'Sicke Cell', frequency: 0.3, memberCount: 11, pmpmCost: 650.75, trend: 'stable', changePercent: 0.0 },
      { abbreviation: 'Substance Abuse', name: 'Substance Abuse', frequency: 2.8, memberCount: 98, pmpmCost: 195.25, trend: 'up', changePercent: 2.5 }
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
    ],
    utilizationCostDrivers: [
      { name: 'Risk Score', value: 0.98, unit: '', target: 1.0, changePercent: -2.5 },
      { name: 'Annual Wellness Visit (AWV)', value: 68, unit: '%', target: 80, changePercent: 4.2 },
      { name: 'Acute Admit Follow Up: 3days', value: 18, unit: '%', target: 30, changePercent: 3.8 },
      { name: 'Acute Admit Follow Up: 7days', value: 42, unit: '%', target: 60, changePercent: 2.8 },
      { name: 'Acute Admit Follow Up: 14days', value: 52, unit: '%', target: 70, changePercent: 2.3 },
      { name: 'Acute Admit per 1000', value: 310, unit: 'per 1000', target: 250, changePercent: 5.2 },
      { name: 'Acute Admit per 1000: Avoidable', value: 52, unit: 'per 1000', target: 35, changePercent: 6.8 },
      { name: 'RA Acute Admit Per 1000', value: 335, unit: 'per 1000', target: 280, changePercent: 4.8 },
      { name: 'ED visit per 1000', value: 635, unit: 'per 1000', target: 550, changePercent: 6.8 },
      { name: 'ED visit per 1000: Preventable', value: 225, unit: 'per 1000', target: 180, changePercent: 8.2 },
      { name: 'RA ED visit per 1000', value: 690, unit: 'per 1000', target: 600, changePercent: 6.3 },
      { name: 'Out of Network %', value: 15, unit: '%', target: 10, changePercent: 3.2 },
      { name: 'PCP Visit per 100', value: 7420, unit: 'per 100', target: 8000, changePercent: -2.5 }
    ],
    testingCompliance: [
      { shortName: 'Annual Dental Visit', fullName: 'Annual Dental Visit', currentRate: 63.8, targetRate: 75.0, changePercent: 4.2, trend: 'up' },
      { shortName: 'Antidepressant Management', fullName: 'Antidepressant Medication Management - Effective Acute Phase Treatment & Effective Continuation Phase Treatment', currentRate: 66.4, targetRate: 80.0, changePercent: 3.5, trend: 'up' },
      { shortName: 'Breast Cancer Screening', fullName: 'Breast Cancer Screening', currentRate: 65.9, targetRate: 78.0, changePercent: 2.8, trend: 'up' },
      { shortName: 'Medication Review', fullName: 'Care for Older Adults – Medication Review', currentRate: 59.2, targetRate: 70.0, changePercent: 5.0, trend: 'up' },
      { shortName: 'Cervical Cancer Screening', fullName: 'Cervical Cancer Screening', currentRate: 68.7, targetRate: 80.0, changePercent: 3.3, trend: 'up' },
      { shortName: 'Childhood Immunization', fullName: 'Childhood Immunization Status – Combination 3', currentRate: 76.8, targetRate: 85.0, changePercent: 2.2, trend: 'up' },
      { shortName: 'Chlamydia Screening', fullName: 'Chlamydia Screening in Women', currentRate: 51.6, targetRate: 65.0, changePercent: 4.8, trend: 'up' },
      { shortName: 'Colorectal Cancer Screening', fullName: 'Colorectal Cancer Screening', currentRate: 63.4, targetRate: 75.0, changePercent: 3.9, trend: 'up' },
      { shortName: 'HbA1c Poor Control', fullName: 'Comprehensive Diabetes Care: Hemoglobin A1c (HbA1c) Poor Control (>9.0%)', currentRate: 29.2, targetRate: 20.0, changePercent: -2.8, trend: 'down' },
      { shortName: 'Diabetes Nephropathy', fullName: 'Comprehensive Diabetes Care: Medical Attention for Nephropathy', currentRate: 71.5, targetRate: 80.0, changePercent: 2.5, trend: 'up' },
      { shortName: 'Blood Pressure Control', fullName: 'Controlling High Blood Pressure', currentRate: 63.8, targetRate: 75.0, changePercent: 4.3, trend: 'up' },
      { shortName: 'Diabetes Screening', fullName: 'Diabetes Screening for People with Schizophrenia or Bipolar Disorder Who Are Using Antipsychotic Medications', currentRate: 65.4, targetRate: 78.0, changePercent: 3.7, trend: 'up' },
      { shortName: 'ED Follow-up AOD', fullName: 'Follow-Up After Emergency Department Visit for Alcohol and Other Drug Abuse or Dependence', currentRate: 39.8, targetRate: 55.0, changePercent: 5.4, trend: 'up' },
      { shortName: 'ED Follow-up Mental Health', fullName: 'Follow-Up After Emergency Department Visit for Mental Illness', currentRate: 46.2, targetRate: 60.0, changePercent: 4.1, trend: 'up' },
      { shortName: 'Mental Health Follow-up', fullName: 'Follow-up after hospitalization for mental illness', currentRate: 41.8, targetRate: 55.0, changePercent: 3.8, trend: 'up' },
      { shortName: 'ADHD Follow-up', fullName: 'Follow-Up Care for Children Prescribed ADHD Medication', currentRate: 67.4, targetRate: 80.0, changePercent: 3.0, trend: 'up' },
      { shortName: 'Adolescent Immunization', fullName: 'Immunizations for Adolescents – Combination 2', currentRate: 73.8, targetRate: 85.0, changePercent: 2.7, trend: 'up' },
      { shortName: 'AOD Treatment Initiation', fullName: 'Initiation and Engagement of Alcohol and Other Drug Abuse or Dependence Treatment', currentRate: 36.4, targetRate: 50.0, changePercent: 4.6, trend: 'up' },
      { shortName: 'Maternal Depression Screening', fullName: 'Maternal Depression Screening', currentRate: 60.2, targetRate: 72.0, changePercent: 3.3, trend: 'up' },
      { shortName: 'Asthma Medication Management', fullName: 'Medication Management for People with Asthma', currentRate: 68.9, targetRate: 80.0, changePercent: 2.8, trend: 'up' },
      { shortName: 'Asthma Admission Rate', fullName: 'PDI #14 Asthma Admission Rate', currentRate: 14.6, targetRate: 10.0, changePercent: -1.8, trend: 'down' },
      { shortName: 'Prenatal Care', fullName: 'Prenatal and Postpartum Care', currentRate: 75.4, targetRate: 85.0, changePercent: 2.4, trend: 'up' },
      { shortName: 'Statin CVD', fullName: 'Statin Therapy for Patients with Cardiovascular Disease', currentRate: 72.1, targetRate: 82.0, changePercent: 3.2, trend: 'up' },
      { shortName: 'Statin Diabetes', fullName: 'Statin Therapy for Patients with Diabetes', currentRate: 69.8, targetRate: 80.0, changePercent: 3.6, trend: 'up' },
      { shortName: 'Psychosocial Care', fullName: 'Use of First-Line Psychosocial Care for Children and Adolescents on Antipsychotics', currentRate: 63.2, targetRate: 75.0, changePercent: 3.7, trend: 'up' },
      { shortName: 'High-Risk Medications', fullName: 'Use of High–Risk Medications in the Elderly', currentRate: 9.8, targetRate: 5.0, changePercent: -2.5, trend: 'down' },
      { shortName: 'COPD Spirometry', fullName: 'Use of Spirometry Testing in the Assessment and Diagnosis of COPD', currentRate: 56.8, targetRate: 70.0, changePercent: 4.0, trend: 'up' },
      { shortName: 'Weight Assessment', fullName: 'Weight Assessment and Counseling for Nutrition and Physical Activity for Children/Adolescents', currentRate: 65.2, targetRate: 78.0, changePercent: 3.4, trend: 'up' },
      { shortName: 'Well-Child 15 Months', fullName: 'Well-Child Visits in the First 15 Months of Life', currentRate: 73.6, targetRate: 85.0, changePercent: 2.8, trend: 'up' },
      { shortName: 'Well-Child 3-6 Years', fullName: 'Well-Child Visits in the Third, Fourth, Fifth, and Sixth Year of Life', currentRate: 71.4, targetRate: 82.0, changePercent: 3.1, trend: 'up' }
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
      { abbreviation: 'AMI', name: 'Acute Myocardial Infraction', frequency: 0.2, memberCount: 5, pmpmCost: 1250.00, trend: 'stable', changePercent: 0.1 },
      { abbreviation: 'Asthma', name: 'Asthma', frequency: 8.2, memberCount: 192, pmpmCost: 185.50, trend: 'up', changePercent: 2.3 },
      { abbreviation: 'CHF', name: 'Congestive Heart Failure', frequency: 1.6, memberCount: 37, pmpmCost: 450.75, trend: 'down', changePercent: -1.2 },
      { abbreviation: 'CKD', name: 'Chronic Kidney Disease', frequency: 5.8, memberCount: 136, pmpmCost: 325.25, trend: 'up', changePercent: 3.1 },
      { abbreviation: 'COPD', name: 'Chronic Obstructive Pulmonary Disease', frequency: 2.0, memberCount: 47, pmpmCost: 245.80, trend: 'stable', changePercent: 0.1 },
      { abbreviation: 'Diabetes', name: 'Diabetes', frequency: 8.8, memberCount: 206, pmpmCost: 195.50, trend: 'up', changePercent: 2.8 },
      { abbreviation: 'ESRD', name: 'End Stage Renial Disease', frequency: 0.3, memberCount: 7, pmpmCost: 1850.00, trend: 'stable', changePercent: 0.2 },
      { abbreviation: 'Hypertension', name: 'Hyperthension', frequency: 15.8, memberCount: 369, pmpmCost: 142.75, trend: 'up', changePercent: 1.8 },
      { abbreviation: 'HIV', name: 'HIV', frequency: 0.6, memberCount: 14, pmpmCost: 750.25, trend: 'down', changePercent: -0.5 },
      { abbreviation: 'MH SMI', name: 'Mental Health Serious Mental Illeness', frequency: 11.2, memberCount: 262, pmpmCost: 225.50, trend: 'up', changePercent: 3.2 },
      { abbreviation: 'MH Non SMI', name: 'MH Non Serious Mental Illness', frequency: 6.8, memberCount: 159, pmpmCost: 125.75, trend: 'up', changePercent: 2.1 },
      { abbreviation: 'Neuro/CVA', name: 'Cerebrovascular', frequency: 1.0, memberCount: 23, pmpmCost: 385.25, trend: 'stable', changePercent: 0.3 },
      { abbreviation: 'Oncology', name: 'Oncology', frequency: 2.2, memberCount: 51, pmpmCost: 485.90, trend: 'up', changePercent: 1.5 },
      { abbreviation: 'PVD', name: 'Peripheral Vascular Disease', frequency: 2.8, memberCount: 65, pmpmCost: 275.50, trend: 'down', changePercent: -0.8 },
      { abbreviation: 'Sickel Cell', name: 'Sicke Cell', frequency: 0.1, memberCount: 2, pmpmCost: 650.75, trend: 'stable', changePercent: 0.0 },
      { abbreviation: 'Substance Abuse', name: 'Substance Abuse', frequency: 1.6, memberCount: 37, pmpmCost: 195.25, trend: 'up', changePercent: 2.5 }
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
    ],
    utilizationCostDrivers: [
      { name: 'Risk Score', value: 0.90, unit: '', target: 1.0, changePercent: -1.9 },
      { name: 'Annual Wellness Visit (AWV)', value: 76, unit: '%', target: 80, changePercent: 2.8 },
      { name: 'Acute Admit Follow Up: 3days', value: 26, unit: '%', target: 30, changePercent: 2.5 },
      { name: 'Acute Admit Follow Up: 7days', value: 52, unit: '%', target: 60, changePercent: 1.8 },
      { name: 'Acute Admit Follow Up: 14days', value: 64, unit: '%', target: 70, changePercent: 1.4 },
      { name: 'Acute Admit per 1000', value: 270, unit: 'per 1000', target: 250, changePercent: 3.9 },
      { name: 'Acute Admit per 1000: Avoidable', value: 40, unit: 'per 1000', target: 35, changePercent: 5.5 },
      { name: 'RA Acute Admit Per 1000', value: 295, unit: 'per 1000', target: 280, changePercent: 3.6 },
      { name: 'ED visit per 1000', value: 580, unit: 'per 1000', target: 550, changePercent: 5.8 },
      { name: 'ED visit per 1000: Preventable', value: 200, unit: 'per 1000', target: 180, changePercent: 6.9 },
      { name: 'RA ED visit per 1000', value: 630, unit: 'per 1000', target: 600, changePercent: 5.2 },
      { name: 'Out of Network %', value: 10, unit: '%', target: 10, changePercent: 1.5 },
      { name: 'PCP Visit per 100', value: 7920, unit: 'per 100', target: 8000, changePercent: -1.2 }
    ],
    testingCompliance: [
      { shortName: 'Annual Dental Visit', fullName: 'Annual Dental Visit', currentRate: 70.2, targetRate: 75.0, changePercent: 2.8, trend: 'up' },
      { shortName: 'Antidepressant Management', fullName: 'Antidepressant Medication Management - Effective Acute Phase Treatment & Effective Continuation Phase Treatment', currentRate: 74.6, targetRate: 80.0, changePercent: 2.2, trend: 'up' },
      { shortName: 'Breast Cancer Screening', fullName: 'Breast Cancer Screening', currentRate: 73.1, targetRate: 78.0, changePercent: 1.6, trend: 'up' },
      { shortName: 'Medication Review', fullName: 'Care for Older Adults – Medication Review', currentRate: 67.8, targetRate: 70.0, changePercent: 3.8, trend: 'up' },
      { shortName: 'Cervical Cancer Screening', fullName: 'Cervical Cancer Screening', currentRate: 76.2, targetRate: 80.0, changePercent: 2.1, trend: 'up' },
      { shortName: 'Childhood Immunization', fullName: 'Childhood Immunization Status – Combination 3', currentRate: 83.4, targetRate: 85.0, changePercent: 1.3, trend: 'up' },
      { shortName: 'Chlamydia Screening', fullName: 'Chlamydia Screening in Women', currentRate: 61.2, targetRate: 65.0, changePercent: 3.5, trend: 'up' },
      { shortName: 'Colorectal Cancer Screening', fullName: 'Colorectal Cancer Screening', currentRate: 71.6, targetRate: 75.0, changePercent: 2.6, trend: 'up' },
      { shortName: 'HbA1c Poor Control', fullName: 'Comprehensive Diabetes Care: Hemoglobin A1c (HbA1c) Poor Control (>9.0%)', currentRate: 22.8, targetRate: 20.0, changePercent: -1.6, trend: 'down' },
      { shortName: 'Diabetes Nephropathy', fullName: 'Comprehensive Diabetes Care: Medical Attention for Nephropathy', currentRate: 78.9, targetRate: 80.0, changePercent: 1.4, trend: 'up' },
      { shortName: 'Blood Pressure Control', fullName: 'Controlling High Blood Pressure', currentRate: 70.6, targetRate: 75.0, changePercent: 3.1, trend: 'up' },
      { shortName: 'Diabetes Screening', fullName: 'Diabetes Screening for People with Schizophrenia or Bipolar Disorder Who Are Using Antipsychotic Medications', currentRate: 73.2, targetRate: 78.0, changePercent: 2.3, trend: 'up' },
      { shortName: 'ED Follow-up AOD', fullName: 'Follow-Up After Emergency Department Visit for Alcohol and Other Drug Abuse or Dependence', currentRate: 47.8, targetRate: 55.0, changePercent: 3.8, trend: 'up' },
      { shortName: 'ED Follow-up Mental Health', fullName: 'Follow-Up After Emergency Department Visit for Mental Illness', currentRate: 54.6, targetRate: 60.0, changePercent: 2.9, trend: 'up' },
      { shortName: 'Mental Health Follow-up', fullName: 'Follow-up after hospitalization for mental illness', currentRate: 50.8, targetRate: 55.0, changePercent: 2.6, trend: 'up' },
      { shortName: 'ADHD Follow-up', fullName: 'Follow-Up Care for Children Prescribed ADHD Medication', currentRate: 75.2, targetRate: 80.0, changePercent: 1.9, trend: 'up' },
      { shortName: 'Adolescent Immunization', fullName: 'Immunizations for Adolescents – Combination 2', currentRate: 80.4, targetRate: 85.0, changePercent: 1.6, trend: 'up' },
      { shortName: 'AOD Treatment Initiation', fullName: 'Initiation and Engagement of Alcohol and Other Drug Abuse or Dependence Treatment', currentRate: 44.6, targetRate: 50.0, changePercent: 3.2, trend: 'up' },
      { shortName: 'Maternal Depression Screening', fullName: 'Maternal Depression Screening', currentRate: 68.4, targetRate: 72.0, changePercent: 2.3, trend: 'up' },
      { shortName: 'Asthma Medication Management', fullName: 'Medication Management for People with Asthma', currentRate: 75.8, targetRate: 80.0, changePercent: 1.7, trend: 'up' },
      { shortName: 'Asthma Admission Rate', fullName: 'PDI #14 Asthma Admission Rate', currentRate: 10.8, targetRate: 10.0, changePercent: -0.8, trend: 'down' },
      { shortName: 'Prenatal Care', fullName: 'Prenatal and Postpartum Care', currentRate: 82.6, targetRate: 85.0, changePercent: 1.4, trend: 'up' },
      { shortName: 'Statin CVD', fullName: 'Statin Therapy for Patients with Cardiovascular Disease', currentRate: 79.4, targetRate: 82.0, changePercent: 1.9, trend: 'up' },
      { shortName: 'Statin Diabetes', fullName: 'Statin Therapy for Patients with Diabetes', currentRate: 77.8, targetRate: 80.0, changePercent: 2.2, trend: 'up' },
      { shortName: 'Psychosocial Care', fullName: 'Use of First-Line Psychosocial Care for Children and Adolescents on Antipsychotics', currentRate: 71.8, targetRate: 75.0, changePercent: 2.5, trend: 'up' },
      { shortName: 'High-Risk Medications', fullName: 'Use of High–Risk Medications in the Elderly', currentRate: 7.2, targetRate: 5.0, changePercent: -1.4, trend: 'down' },
      { shortName: 'COPD Spirometry', fullName: 'Use of Spirometry Testing in the Assessment and Diagnosis of COPD', currentRate: 64.8, targetRate: 70.0, changePercent: 2.8, trend: 'up' },
      { shortName: 'Weight Assessment', fullName: 'Weight Assessment and Counseling for Nutrition and Physical Activity for Children/Adolescents', currentRate: 73.4, targetRate: 78.0, changePercent: 2.2, trend: 'up' },
      { shortName: 'Well-Child 15 Months', fullName: 'Well-Child Visits in the First 15 Months of Life', currentRate: 80.8, targetRate: 85.0, changePercent: 1.6, trend: 'up' },
      { shortName: 'Well-Child 3-6 Years', fullName: 'Well-Child Visits in the Third, Fourth, Fifth, and Sixth Year of Life', currentRate: 78.6, targetRate: 82.0, changePercent: 1.9, trend: 'up' }
    ]
  }
};