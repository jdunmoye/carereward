import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Star, 
  TrendingUp, 
  Users, 
  Award, 
  Heart, 
  Target, 
  DollarSign, 
  Search,
  Filter,
  Plus,
  Download,
  RefreshCw,
  Moon,
  Sun,
  Home,
  ChevronRight,
  FileText,
  ChevronDown,
  Eye,
  Edit,
  BarChart3,
  Activity,
  Shield,
  Pill,
  CheckCircle,
  Brain
} from 'lucide-react';

const UseCases: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Last 12 Months');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBorough, setSelectedBorough] = useState('New York');
  const [lastRefresh, setLastRefresh] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { isDark, toggleTheme } = useTheme();

  // Use Cases Data
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'diabetes': return <Pill className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'cardiac': return <Heart className="w-5 h-5 text-red-600 dark:text-red-400" />;
      case 'mental_health': return <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case 'preventive': return <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />;
      case 'medication': return <CheckCircle className="w-5 h-5 text-orange-600 dark:text-orange-400" />;
      default: return <Award className="w-5 h-5 text-gray-600 dark:text-gray-400" />;
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

  const handleRefresh = () => {
    setLastRefresh(new Date());
  };

  const handleExport = (format: 'pdf' | 'excel' | 'csv') => {
    alert(`Exporting data as ${format.toUpperCase()}...`);
  };

  const filteredUseCases = useCases.filter(useCase => {
    const matchesSearch = useCase.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         useCase.primaryCondition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         useCase.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || useCase.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalCostSavings = useCases.reduce((sum, useCase) => sum + useCase.costSavings, 0);
  const totalPointsEarned = useCases.reduce((sum, useCase) => sum + useCase.totalPointsEarned, 0);
  const averageImprovement = useCases.reduce((sum, useCase) => {
    const improvements = Object.values(useCase.outcomes.clinical).map(outcome => 
      typeof outcome.improvement === 'number' ? outcome.improvement : 0
    );
    return sum + (improvements.reduce((a, b) => a + b, 0) / improvements.length);
  }, 0) / useCases.length;

  return (
    <div className="space-y-6">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
        <NavLink to="/dashboard" className="flex items-center hover:text-green-600 dark:hover:text-green-400 transition-colors">
          <Home className="h-4 w-4 mr-1" />
          Dashboard
        </NavLink>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900 dark:text-gray-100 font-medium">Use Cases</span>
      </nav>

      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Use Cases
            {selectedBorough !== 'New York' && (
              <span className="text-xl text-green-600 dark:text-green-400 ml-3">
                - {selectedBorough}
              </span>
            )}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Showcase individual patient effectiveness and CareReward's impact on personal health outcomes
            {selectedBorough !== 'New York' && ` for ${selectedBorough}`}
          </p>
        </div>
        
        {/* Controls */}
        <div className="flex items-center gap-4">
          {/* Borough Selector Dropdown */}
          <div className="relative">
            <select
              value={selectedBorough}
              onChange={(e) => setSelectedBorough(e.target.value)}
              className="px-4 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 appearance-none pr-8"
            >
              <option value="New York">New York (All Boroughs)</option>
              <option value="Manhattan">Manhattan</option>
              <option value="Brooklyn">Brooklyn</option>
              <option value="Queens">Queens</option>
              <option value="Bronx">Bronx</option>
              <option value="Staten Island">Staten Island</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Period Selector Dropdown */}
          <div className="relative">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 appearance-none pr-8"
            >
              <option value="Year to Date">Year to Date</option>
              <option value="Last 12 Months">Last 12 Months</option>
              <option value="Last 6 Months">Last 6 Months</option>
              <option value="Last 3 Months">Last 3 Months</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
          
          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            className="p-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            title="Refresh Data"
          >
            <RefreshCw className="h-5 w-5" />
          </button>
          
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          {/* Export Dropdown */}
          <div className="relative group">
            <button className="px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:border-green-300 dark:hover:border-green-600 transition-colors flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
              <button
                onClick={() => handleExport('pdf')}
                className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-t-lg flex items-center"
              >
                <FileText className="h-4 w-4 mr-2" />
                Export as PDF
              </button>
              <button
                onClick={() => handleExport('excel')}
                className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center"
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Export as Excel
              </button>
              <button
                onClick={() => handleExport('csv')}
                className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-b-lg flex items-center"
              >
                <Download className="h-4 w-4 mr-2" />
                Export as CSV
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Use Case Impact Summary */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Use Case Impact Summary
            {selectedBorough !== 'New York' && (
              <span className="text-lg text-green-600 dark:text-green-400 ml-2">
                - {selectedBorough}
              </span>
            )}
          </h2>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Last updated: {lastRefresh.toLocaleString()}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-green-600 dark:text-green-400">
                  +15.8%
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  ↑ vs prev
                </div>
              </div>
            </div>
            <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">Total Cost Savings</h3>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">{formatCurrency(totalCostSavings)}</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">Cumulative savings from all use cases</p>
          </div>

          <div className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                <Star className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-green-600 dark:text-green-400">
                  +8.3%
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  ↑ vs prev
                </div>
              </div>
            </div>
            <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">Total Points Earned</h3>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">{formatNumber(totalPointsEarned)}</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">Points awarded across all patients</p>
          </div>

          <div className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-green-600 dark:text-green-400">
                  +12.5%
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  ↑ vs prev
                </div>
              </div>
            </div>
            <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">Average Improvement</h3>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">{Math.round(averageImprovement)}%</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">Average clinical improvement rate</p>
          </div>

          <div className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-green-600 dark:text-green-400">
                  +5.2%
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  ↑ vs prev
                </div>
              </div>
            </div>
            <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">Active Use Cases</h3>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">{useCases.length}</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">Patient success stories documented</p>
          </div>
        </div>
      </div>

      {/* Featured Use Cases */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Featured Use Cases
            {selectedBorough !== 'New York' && (
              <span className="text-lg text-green-600 dark:text-green-400 ml-2">
                - {selectedBorough}
              </span>
            )}
          </h2>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white transition-colors flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              Add New Use Case
            </button>
            <NavLink 
              to="/reward-system" 
              className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex items-center"
            >
              View Reward System
              <ChevronRight className="h-4 w-4 ml-1" />
            </NavLink>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search use cases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none pr-8"
            >
              <option value="all">All Categories</option>
              <option value="diabetes">Diabetes Management</option>
              <option value="cardiac">Heart Health</option>
              <option value="mental_health">Mental Wellness</option>
              <option value="preventive">Preventive Care</option>
              <option value="medication">Medication Adherence</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-green-100 dark:bg-green-800/30 text-green-600 dark:text-green-400' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <BarChart3 className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' 
                  ? 'bg-green-100 dark:bg-green-800/30 text-green-600 dark:text-green-400' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <FileText className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredUseCases.map((useCase) => (
            <div key={useCase.id} className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {getCategoryIcon(useCase.category)}
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">{useCase.patientName}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{getCategoryName(useCase.category)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {useCase.featured && <Star className="h-4 w-4 text-yellow-500" />}
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                      <Edit className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Age & Location</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{useCase.age} years, {useCase.location}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Primary Condition</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{useCase.primaryCondition}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Points Earned</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{formatNumber(useCase.totalPointsEarned)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Cost Savings</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{formatCurrency(useCase.costSavings)}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Health Challenge</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{useCase.healthChallenge.primary}</p>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Duration: </span>
                  {useCase.duration}
                </div>
                <div className="flex items-center gap-2">
                  <NavLink 
                    to={`/use-cases/${useCase.id}`}
                    className="px-3 py-1 text-xs bg-green-100 dark:bg-green-800/30 text-green-700 dark:text-green-300 rounded-full hover:bg-green-200 dark:hover:bg-green-800/50 transition-colors"
                  >
                    View Full Story
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Hub */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Related Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <NavLink 
            to="/reward-system" 
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors">
                <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Reward System</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Manage reward activities and incentives</p>
              </div>
            </div>
            <div className="text-sm text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300 flex items-center">
              View System <ChevronRight className="h-4 w-4 ml-1" />
            </div>
          </NavLink>

          <NavLink 
            to="/opportunity-analysis" 
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors">
                <Target className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Opportunity Analysis</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Identify improvement opportunities</p>
              </div>
            </div>
            <div className="text-sm text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300 flex items-center">
              View Analysis <ChevronRight className="h-4 w-4 ml-1" />
            </div>
          </NavLink>

          <NavLink 
            to="/behavior-drivers" 
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors">
                <Activity className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Behavior Drivers</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Behavioral metrics and analytics</p>
              </div>
            </div>
            <div className="text-sm text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300 flex items-center">
              View Analytics <ChevronRight className="h-4 w-4 ml-1" />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
