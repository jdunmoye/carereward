import React from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { 
  ArrowLeft, 
  Star, 
  TrendingUp, 
  Users, 
  Award, 
  Heart, 
  Target, 
  DollarSign, 
  Calendar,
  MapPin,
  User,
  Phone,
  Mail,
  Briefcase,
  Home,
  ChevronRight,
  Download,
  Share2,
  Edit,
  Eye,
  Activity,
  Shield,
  Pill,
  CheckCircle,
  Brain,
  Clock,
  BarChart3,
  PieChart as LucidePieChart,
  LineChart as LucideLineChart
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const UseCaseDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { isDark } = useTheme();

  // Use Cases Data (same as in UseCases.tsx)
  const useCases = [
    {
      id: 1,
      patientName: 'Sarah Chen',
      age: 45,
      gender: 'Female',
      location: 'Manhattan, NY',
      employment: 'Accountant',
      familyStatus: 'Married, 2 children',
      primaryCondition: 'Type 2 Diabetes',
      secondaryConditions: ['Pre-hypertension', 'Obesity'],
      baselineRiskScore: 8.2,
      initialCostProfile: 12500,
      engagementHistory: 'Low - missed 40% of appointments',
      healthChallenge: {
        primary: 'A1C 9.2%, sedentary lifestyle, stress eating, medication non-compliance',
        clinicalMarkers: ['A1C: 9.2%', 'Weight: 185 lbs', 'BP: 140/90', 'LDL: 160'],
        behavioralBarriers: ['Medication non-compliance', 'Missed appointments', 'Poor diet', 'No exercise'],
        costImpact: '$12,500 annual healthcare costs',
        utilizationPatterns: ['3 ER visits', '2 hospitalizations', '15 specialist visits'],
        motivationLevel: 'Low - overwhelmed by diagnosis'
      },
      intervention: {
        rewardProgram: 'Diabetes Management Rewards',
        pointStructure: 'Weight loss: 100 pts/lb, Glucose monitoring: 50 pts/day, Medication adherence: 75 pts/week',
        activities: ['Weight loss challenges', 'Glucose monitoring', 'Healthy meal prep', 'Exercise tracking'],
        careTeam: ['Endocrinologist', 'Diabetes Educator', 'Nutritionist', 'Care Coordinator'],
        technology: ['Mobile app tracking', 'Glucose monitor integration', 'Wearable fitness tracker'],
        familySupport: 'Spouse and children involved in meal planning and exercise'
      },
      journey: [
        { month: 1, milestone: 'Program enrollment', points: 0, clinical: 'A1C: 9.2%', behavioral: 'Started tracking' },
        { month: 3, milestone: 'First 10lb weight loss', points: 1000, clinical: 'A1C: 8.5%', behavioral: 'Medication compliance improved' },
        { month: 6, milestone: 'Consistent glucose monitoring', points: 2500, clinical: 'A1C: 7.8%', behavioral: 'Regular exercise routine' },
        { month: 9, milestone: 'Major lifestyle change', points: 4500, clinical: 'A1C: 7.2%', behavioral: 'Family support engaged' },
        { month: 12, milestone: 'Target achieved', points: 6500, clinical: 'A1C: 6.8%', behavioral: 'Sustained healthy habits' }
      ],
      outcomes: {
        clinical: {
          a1c: { before: 9.2, after: 6.8, improvement: 26 },
          weight: { before: 185, after: 150, improvement: 35 },
          bloodPressure: { before: '140/90', after: '125/80', improvement: 'Normalized' },
          cholesterol: { before: 160, after: 120, improvement: 25 }
        },
        behavioral: {
          medicationAdherence: { before: 60, after: 95, improvement: 58 },
          appointmentCompliance: { before: 60, after: 90, improvement: 50 },
          exerciseFrequency: { before: 0, after: 4, improvement: '4x/week' },
          dietCompliance: { before: 20, after: 85, improvement: 325 }
        },
        utilization: {
          erVisits: { before: 3, after: 0, improvement: 100 },
          hospitalizations: { before: 2, after: 0, improvement: 100 },
          specialistVisits: { before: 15, after: 8, improvement: 47 }
        },
        financial: {
          annualCosts: { before: 12500, after: 8300, improvement: 4200 },
          pmpmReduction: { before: 1042, after: 692, improvement: 350 },
          medicationCosts: { before: 2400, after: 1200, improvement: 1200 }
        },
        qualityOfLife: {
          satisfaction: { before: 3, after: 9, improvement: 200 },
          energy: { before: 4, after: 8, improvement: 100 },
          confidence: { before: 3, after: 9, improvement: 200 }
        }
      },
      category: 'diabetes',
      featured: true,
      totalPointsEarned: 6500,
      costSavings: 4200,
      duration: '12 months'
    },
    {
      id: 2,
      patientName: 'Marcus Johnson',
      age: 52,
      gender: 'Male',
      location: 'Brooklyn, NY',
      employment: 'Construction Manager',
      familyStatus: 'Married, 3 children',
      primaryCondition: 'Hypertension',
      secondaryConditions: ['High Cholesterol', 'Smoking'],
      baselineRiskScore: 9.1,
      initialCostProfile: 18500,
      engagementHistory: 'Very Low - missed 60% of appointments',
      healthChallenge: {
        primary: 'BP 180/110, cholesterol 280, smoking, missed cardiology appointments',
        clinicalMarkers: ['BP: 180/110', 'Cholesterol: 280', 'Smoking: 1 pack/day', 'BMI: 32'],
        behavioralBarriers: ['Smoking addiction', 'Missed appointments', 'Poor diet', 'No exercise'],
        costImpact: '$18,500 annual healthcare costs',
        utilizationPatterns: ['5 ER visits', '3 hospitalizations', '20 specialist visits'],
        motivationLevel: 'Very Low - denial about health risks'
      },
      intervention: {
        rewardProgram: 'Heart Health Transformation',
        pointStructure: 'Smoking cessation: 200 pts/day, BP monitoring: 50 pts/day, Exercise: 100 pts/session',
        activities: ['Smoking cessation program', 'Blood pressure monitoring', 'Cardiac rehab', 'Nutrition counseling'],
        careTeam: ['Cardiologist', 'Smoking Cessation Counselor', 'Cardiac Rehab Specialist', 'Care Coordinator'],
        technology: ['BP monitor app', 'Smoking cessation app', 'Fitness tracker'],
        familySupport: 'Family involved in meal planning and exercise support'
      },
      journey: [
        { month: 1, milestone: 'Program enrollment', points: 0, clinical: 'BP: 180/110', behavioral: 'Started monitoring' },
        { month: 2, milestone: 'First smoke-free week', points: 1400, clinical: 'BP: 170/105', behavioral: 'Reduced smoking' },
        { month: 4, milestone: '30 days smoke-free', points: 3500, clinical: 'BP: 155/95', behavioral: 'Quit smoking' },
        { month: 8, milestone: 'Cardiac rehab completion', points: 5800, clinical: 'BP: 135/85', behavioral: 'Regular exercise' },
        { month: 12, milestone: 'Target achieved', points: 8200, clinical: 'BP: 125/80', behavioral: 'Sustained lifestyle changes' }
      ],
      outcomes: {
        clinical: {
          bloodPressure: { before: '180/110', after: '125/80', improvement: 'Normalized' },
          cholesterol: { before: 280, after: 190, improvement: 32 },
          smoking: { before: '1 pack/day', after: '0', improvement: 100 },
          weight: { before: 220, after: 195, improvement: 25 }
        },
        behavioral: {
          smokingStatus: { before: 'Active smoker', after: '8 months smoke-free', improvement: 100 },
          appointmentCompliance: { before: 40, after: 95, improvement: 138 },
          exerciseFrequency: { before: 0, after: 5, improvement: '5x/week' },
          dietCompliance: { before: 15, after: 80, improvement: 433 }
        },
        utilization: {
          erVisits: { before: 5, after: 1, improvement: 80 },
          hospitalizations: { before: 3, after: 0, improvement: 100 },
          specialistVisits: { before: 20, after: 10, improvement: 50 }
        },
        financial: {
          annualCosts: { before: 18500, after: 11200, improvement: 7300 },
          pmpmReduction: { before: 1542, after: 933, improvement: 609 },
          medicationCosts: { before: 3600, after: 1800, improvement: 1800 }
        },
        qualityOfLife: {
          satisfaction: { before: 2, after: 9, improvement: 350 },
          energy: { before: 3, after: 8, improvement: 167 },
          confidence: { before: 2, after: 9, improvement: 350 }
        }
      },
      category: 'cardiac',
      featured: true,
      totalPointsEarned: 8200,
      costSavings: 7300,
      duration: '12 months'
    },
    {
      id: 3,
      patientName: 'Emma Rodriguez',
      age: 29,
      gender: 'Female',
      location: 'Queens, NY',
      employment: 'Teacher',
      familyStatus: 'Single',
      primaryCondition: 'Depression',
      secondaryConditions: ['Anxiety', 'Chronic Stress'],
      baselineRiskScore: 7.8,
      initialCostProfile: 8900,
      engagementHistory: 'Low - missed 50% of appointments',
      healthChallenge: {
        primary: 'Missed therapy appointments, medication inconsistency, social withdrawal, burnout',
        clinicalMarkers: ['PHQ-9: 18', 'GAD-7: 15', 'Stress: High', 'Sleep: 4 hours/night'],
        behavioralBarriers: ['Missed appointments', 'Medication inconsistency', 'Social withdrawal', 'Work burnout'],
        costImpact: '$8,900 annual healthcare costs',
        utilizationPatterns: ['2 ER visits', '1 hospitalization', '12 therapy visits'],
        motivationLevel: 'Low - feeling hopeless'
      },
      intervention: {
        rewardProgram: 'Mental Health Recovery',
        pointStructure: 'Therapy attendance: 150 pts/session, Medication adherence: 100 pts/week, Self-care: 50 pts/day',
        activities: ['Therapy attendance', 'Medication adherence', 'Stress management', 'Social activities'],
        careTeam: ['Psychiatrist', 'Therapist', 'Care Coordinator', 'Social Worker'],
        technology: ['Mental health app', 'Medication reminder app', 'Mood tracking'],
        familySupport: 'Close friends involved in support system'
      },
      journey: [
        { month: 1, milestone: 'Program enrollment', points: 0, clinical: 'PHQ-9: 18', behavioral: 'Started therapy' },
        { month: 3, milestone: 'Consistent therapy', points: 1800, clinical: 'PHQ-9: 14', behavioral: 'Regular appointments' },
        { month: 6, milestone: 'Medication stabilized', points: 3600, clinical: 'PHQ-9: 10', behavioral: 'Medication compliance' },
        { month: 9, milestone: 'Return to work', points: 5400, clinical: 'PHQ-9: 6', behavioral: 'Full work capacity' },
        { month: 12, milestone: 'Recovery achieved', points: 7200, clinical: 'PHQ-9: 3', behavioral: 'Sustained wellness' }
      ],
      outcomes: {
        clinical: {
          depressionScore: { before: 18, after: 3, improvement: 83 },
          anxietyScore: { before: 15, after: 4, improvement: 73 },
          stressLevel: { before: 'High', after: 'Low', improvement: 'Normalized' },
          sleepQuality: { before: 4, after: 7, improvement: 75 }
        },
        behavioral: {
          therapyCompliance: { before: 50, after: 90, improvement: 80 },
          medicationAdherence: { before: 40, after: 95, improvement: 138 },
          socialEngagement: { before: 20, after: 80, improvement: 300 },
          workCapacity: { before: 60, after: 100, improvement: 67 }
        },
        utilization: {
          erVisits: { before: 2, after: 0, improvement: 100 },
          hospitalizations: { before: 1, after: 0, improvement: 100 },
          therapyVisits: { before: 12, after: 24, improvement: 100 }
        },
        financial: {
          annualCosts: { before: 8900, after: 6200, improvement: 2700 },
          pmpmReduction: { before: 742, after: 517, improvement: 225 },
          medicationCosts: { before: 1800, after: 1200, improvement: 600 }
        },
        qualityOfLife: {
          satisfaction: { before: 2, after: 9, improvement: 350 },
          energy: { before: 3, after: 8, improvement: 167 },
          confidence: { before: 2, after: 8, improvement: 300 }
        }
      },
      category: 'mental_health',
      featured: true,
      totalPointsEarned: 7200,
      costSavings: 2700,
      duration: '12 months'
    }
  ];

  // Find the use case by ID
  const useCase = useCases.find(uc => uc.id === parseInt(id || '1'));
  
  if (!useCase) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Use Case Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">The requested use case could not be found.</p>
          <button
            onClick={() => navigate('/use-cases')}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            Back to Use Cases
          </button>
        </div>
      </div>
    );
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'diabetes': return <Pill className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'cardiac': return <Heart className="w-6 h-6 text-red-600 dark:text-red-400" />;
      case 'mental_health': return <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
      case 'preventive': return <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />;
      case 'medication': return <CheckCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />;
      default: return <Award className="w-6 h-6 text-gray-600 dark:text-gray-400" />;
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'diabetes': return 'Diabetes Management';
      case 'cardiac': return 'Heart Health';
      case 'mental_health': return 'Mental Wellness';
      case 'preventive': return 'Preventive Care';
      case 'medication': return 'Medication Adherence';
      default: return 'Other';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  // Chart data for journey timeline
  const journeyChartData = useCase.journey.map(entry => ({
    month: `Month ${entry.month}`,
    points: entry.points,
    clinical: entry.clinical.includes('A1C') ? parseFloat(entry.clinical.split(': ')[1].replace('%', '')) : 
             entry.clinical.includes('BP') ? parseFloat(entry.clinical.split(': ')[1].split('/')[0]) :
             entry.clinical.includes('PHQ') ? parseFloat(entry.clinical.split(': ')[1]) : 0
  }));

  // Clinical outcomes data for before/after comparison
  const clinicalOutcomesData = [
    { name: 'Before', value: 100, fill: '#ef4444' },
    { name: 'After', value: 100 - (useCase.outcomes.clinical.a1c?.improvement || useCase.outcomes.clinical.bloodPressure?.improvement || useCase.outcomes.clinical.depressionScore?.improvement || 0), fill: '#10b981' }
  ];

  // Cost savings over time
  const costSavingsData = useCase.journey.map((entry, index) => ({
    month: `Month ${entry.month}`,
    cumulative: (useCase.costSavings / useCase.journey.length) * (index + 1),
    monthly: useCase.costSavings / useCase.journey.length
  }));

  return (
    <div className="space-y-6">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/use-cases')}
            className="p-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {useCase.patientName} - Use Case Details
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Comprehensive patient journey and health outcomes analysis
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </button>
          <button className="px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
          <button className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white transition-colors flex items-center">
            <Edit className="h-4 w-4 mr-2" />
            Edit Case
          </button>
        </div>
      </div>

      {/* Patient Profile Section */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center">
            <User className="h-6 w-6 mr-3 text-green-600 dark:text-green-400" />
            Patient Profile
          </h2>
          <div className="flex items-center gap-2">
            {useCase.featured && <Star className="h-5 w-5 text-yellow-500" />}
            <span className="px-3 py-1 bg-green-100 dark:bg-green-800/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
              {getCategoryName(useCase.category)}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Basic Information</h3>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <User className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-400">Name:</span>
                  <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">{useCase.patientName}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-400">Age:</span>
                  <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">{useCase.age} years old</span>
                </div>
                <div className="flex items-center text-sm">
                  <User className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-400">Gender:</span>
                  <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">{useCase.gender}</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-400">Location:</span>
                  <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">{useCase.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Employment & Family</h3>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Briefcase className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-400">Employment:</span>
                  <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">{useCase.employment}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Home className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-400">Family Status:</span>
                  <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">{useCase.familyStatus}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Health Profile</h3>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Target className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-400">Risk Score:</span>
                  <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">{useCase.baselineRiskScore}/10</span>
                </div>
                <div className="flex items-center text-sm">
                  <DollarSign className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-400">Initial Cost:</span>
                  <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">{formatCurrency(useCase.initialCostProfile)}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Activity className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-400">Engagement:</span>
                  <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">{useCase.engagementHistory}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Health Conditions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Primary Condition</p>
              <p className="font-medium text-gray-900 dark:text-gray-100">{useCase.primaryCondition}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Secondary Conditions</p>
              <div className="flex flex-wrap gap-2">
                {useCase.secondaryConditions.map((condition, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm">
                    {condition}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Health Challenge Overview */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center mb-6">
          <Target className="h-6 w-6 mr-3 text-red-600 dark:text-red-400" />
          Health Challenge Overview
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Primary Challenge</h3>
              <p className="text-gray-600 dark:text-gray-400">{useCase.healthChallenge.primary}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Clinical Markers</h3>
              <div className="space-y-2">
                {useCase.healthChallenge.clinicalMarkers.map((marker, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-600 dark:text-gray-400">{marker}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Behavioral Barriers</h3>
              <div className="space-y-2">
                {useCase.healthChallenge.behavioralBarriers.map((barrier, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-600 dark:text-gray-400">{barrier}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Cost Impact</h3>
              <p className="text-gray-600 dark:text-gray-400">{useCase.healthChallenge.costImpact}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Utilization Patterns</h3>
              <div className="space-y-2">
                {useCase.healthChallenge.utilizationPatterns.map((pattern, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-600 dark:text-gray-400">{pattern}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Motivation Level</h3>
              <p className="text-gray-600 dark:text-gray-400">{useCase.healthChallenge.motivationLevel}</p>
            </div>
          </div>
        </div>
      </div>

      {/* CareReward Intervention Strategy */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center mb-6">
          <Award className="h-6 w-6 mr-3 text-green-600 dark:text-green-400" />
          CareReward Intervention Strategy
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Reward Program</h3>
              <p className="text-gray-600 dark:text-gray-400">{useCase.intervention.rewardProgram}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Point Structure</h3>
              <p className="text-gray-600 dark:text-gray-400">{useCase.intervention.pointStructure}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Targeted Activities</h3>
              <div className="space-y-2">
                {useCase.intervention.activities.map((activity, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-gray-600 dark:text-gray-400">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Care Team</h3>
              <div className="space-y-2">
                {useCase.intervention.careTeam.map((member, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <Users className="h-4 w-4 text-blue-500 mr-3" />
                    <span className="text-gray-600 dark:text-gray-400">{member}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Technology Tools</h3>
              <div className="space-y-2">
                {useCase.intervention.technology.map((tool, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <Shield className="h-4 w-4 text-purple-500 mr-3" />
                    <span className="text-gray-600 dark:text-gray-400">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Family Support</h3>
              <p className="text-gray-600 dark:text-gray-400">{useCase.intervention.familySupport}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Patient Journey Timeline */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center mb-6">
          <Clock className="h-6 w-6 mr-3 text-blue-600 dark:text-blue-400" />
          Patient Journey Timeline
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Journey Progression</h3>
            <div className="space-y-4">
              {useCase.journey.map((entry, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-800/30 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-green-600 dark:text-green-400">{entry.month}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">{entry.milestone}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{entry.clinical}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{entry.behavioral}</p>
                    <div className="flex items-center mt-2">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{formatNumber(entry.points)} points</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Points Accumulation</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={journeyChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: isDark ? '#1f2937' : '#ffffff',
                    border: isDark ? '1px solid #374151' : '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="points" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Measurable Health Outcomes */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center mb-6">
          <TrendingUp className="h-6 w-6 mr-3 text-green-600 dark:text-green-400" />
          Measurable Health Outcomes
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Clinical Improvements</h3>
            <div className="space-y-4">
              {Object.entries(useCase.outcomes.clinical).map(([key, outcome]: [string, any]) => (
                <div key={key} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900 dark:text-gray-100 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      {typeof outcome.improvement === 'number' ? `${outcome.improvement}%` : outcome.improvement}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Before: {outcome.before}</span>
                    <span>After: {outcome.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Behavioral Changes</h3>
            <div className="space-y-4">
              {Object.entries(useCase.outcomes.behavioral).map(([key, outcome]: [string, any]) => (
                <div key={key} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900 dark:text-gray-100 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      {typeof outcome.improvement === 'number' ? `${outcome.improvement}%` : outcome.improvement}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Before: {outcome.before}</span>
                    <span>After: {outcome.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Financial Impact</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Annual Cost Reduction:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">
                    {formatCurrency(useCase.outcomes.financial.annualCosts.improvement)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">PMPM Reduction:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">
                    {formatCurrency(useCase.outcomes.financial.pmpmReduction.improvement)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Medication Savings:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">
                    {formatCurrency(useCase.outcomes.financial.medicationCosts.improvement)}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Quality of Life</h3>
              <div className="space-y-3">
                {Object.entries(useCase.outcomes.qualityOfLife).map(([key, outcome]: [string, any]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}:
                    </span>
                    <span className="font-medium text-green-600 dark:text-green-400">
                      {outcome.before}/10 → {outcome.after}/10
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Total Points Earned:</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {formatNumber(useCase.totalPointsEarned)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Total Cost Savings:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">
                    {formatCurrency(useCase.costSavings)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Program Duration:</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {useCase.duration}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Progress Demonstration */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center mb-6">
          <BarChart3 className="h-6 w-6 mr-3 text-purple-600 dark:text-purple-400" />
          Visual Progress Demonstration
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Cost Savings Over Time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={costSavingsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: isDark ? '#1f2937' : '#ffffff',
                    border: isDark ? '1px solid #374151' : '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="cumulative" 
                  stroke="#10b981" 
                  fill="#10b981"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Before vs After Comparison</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={clinicalOutcomesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {clinicalOutcomesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: isDark ? '#1f2937' : '#ffffff',
                    border: isDark ? '1px solid #374151' : '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center space-x-6 mt-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Before</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">After</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCaseDetails;
