import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Award, 
  Plus, 
  Users, 
  Star,
  Shield,
  Heart,
  Pill,
  Stethoscope,
  CheckCircle,
  TrendingUp,
  Download,
  RefreshCw,
  Moon,
  Sun,
  Home,
  ChevronRight,
  FileText,
  Filter,
  ChevronDown,
  Search,
  Edit,
  Trash2,
  Eye,
  BarChart3,
  DollarSign,
  Activity,
  Target,
  Settings,
  Save,
  AlertCircle,
  Calculator,
  Percent
} from 'lucide-react';

const RewardSystem: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Last 3 Months');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBorough, setSelectedBorough] = useState('New York');
  const [lastRefresh, setLastRefresh] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { isDark, toggleTheme } = useTheme();

  // Point Allocation System State
  const [pointAllocation, setPointAllocation] = useState({
    categories: [
      {
        id: 1,
        name: 'Care Site Substitution',
        weight: 25,
        description: 'Encourage use of lower-cost care settings',
        subActivities: [
          { id: 1, name: 'Inpatient Only', points: 1, description: 'Avoid unnecessary inpatient care' },
          { id: 2, name: 'Mail Order Med', points: 3, description: 'Use mail-order pharmacy services' },
          { id: 3, name: 'Urgent Care', points: 9, description: 'Choose urgent care over ER when appropriate' }
        ]
      },
      {
        id: 2,
        name: 'Preventive Care',
        weight: 20,
        description: 'Promote preventive health measures',
        subActivities: [
          { id: 4, name: 'Annual Wellness Visit', points: 5, description: 'Complete annual wellness examination' },
          { id: 5, name: 'Vaccination Compliance', points: 3, description: 'Stay up-to-date with recommended vaccines' },
          { id: 6, name: 'Screening Tests', points: 7, description: 'Complete age-appropriate screening tests' }
        ]
      },
      {
        id: 3,
        name: 'Medication Management',
        weight: 20,
        description: 'Optimize medication choices and adherence',
        subActivities: [
          { id: 7, name: 'Generic Substitution', points: 2, description: 'Choose generic medications when available' },
          { id: 8, name: 'Medication Adherence', points: 6, description: 'Maintain 80%+ medication adherence' },
          { id: 9, name: 'Formulary Compliance', points: 4, description: 'Use preferred formulary medications' }
        ]
      },
      {
        id: 4,
        name: 'Chronic Disease Management',
        weight: 15,
        description: 'Manage chronic conditions effectively',
        subActivities: [
          { id: 10, name: 'HbA1c Control', points: 8, description: 'Maintain HbA1c below 7%' },
          { id: 11, name: 'Blood Pressure Control', points: 6, description: 'Keep BP within target range' },
          { id: 12, name: 'Weight Management', points: 10, description: 'Achieve 5%+ weight loss' }
        ]
      },
      {
        id: 5,
        name: 'Avoidable Care Reduction',
        weight: 20,
        description: 'Reduce unnecessary healthcare utilization',
        subActivities: [
          { id: 13, name: 'Preventable Admissions', points: 12, description: 'Avoid preventable hospital admissions' },
          { id: 14, name: 'Duplicate Testing', points: 3, description: 'Avoid duplicate diagnostic tests' },
          { id: 15, name: 'Early Discharge', points: 5, description: 'Opt for appropriate early discharge' }
        ]
      }
    ]
  });

  // Reward Activities Data (Updated to reflect point allocation)
  const rewardActivities = [
    {
      id: 1,
      name: 'Urgent Care Utilization',
      description: 'Reward for choosing urgent care over emergency room when appropriate',
      category: 'careSiteSubstitution',
      points: 9,
      participationRate: 78.5,
      effectiveness: 85.2,
      isActive: true,
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      participants: 1250,
      totalPointsAwarded: 11250,
      costSavings: 1250000,
      icon: 'Shield',
      color: 'red'
    },
    {
      id: 2,
      name: 'Annual Wellness Visit Completion',
      description: 'Incentivize completion of annual wellness visits for preventive care',
      category: 'preventiveCare',
      points: 5,
      participationRate: 65.2,
      effectiveness: 72.8,
      isActive: true,
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      participants: 3200,
      totalPointsAwarded: 16000,
      costSavings: 480000,
      icon: 'Heart',
      color: 'green'
    },
    {
      id: 3,
      name: 'Generic Drug Utilization',
      description: 'Reward for choosing generic medications over brand-name alternatives',
      category: 'medicationManagement',
      points: 2,
      participationRate: 82.3,
      effectiveness: 91.5,
      isActive: true,
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      participants: 4500,
      totalPointsAwarded: 9000,
      costSavings: 675000,
      icon: 'Pill',
      color: 'blue'
    },
    {
      id: 4,
      name: 'HbA1c Control Achievement',
      description: 'Reward patients for achieving and maintaining HbA1c levels below 7%',
      category: 'chronicDiseaseManagement',
      points: 8,
      participationRate: 58.7,
      effectiveness: 76.3,
      isActive: true,
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      participants: 890,
      totalPointsAwarded: 7120,
      costSavings: 445000,
      icon: 'Stethoscope',
      color: 'purple'
    },
    {
      id: 5,
      name: 'Medication Adherence Program',
      description: 'Reward for maintaining medication adherence above 80%',
      category: 'medicationManagement',
      points: 6,
      participationRate: 71.4,
      effectiveness: 68.9,
      isActive: true,
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      participants: 2100,
      totalPointsAwarded: 12600,
      costSavings: 315000,
      icon: 'CheckCircle',
      color: 'orange'
    },
    {
      id: 6,
      name: 'Weight Loss Achievement',
      description: 'Reward for achieving 5% or more weight loss with lifestyle changes',
      category: 'chronicDiseaseManagement',
      points: 10,
      participationRate: 34.2,
      effectiveness: 82.1,
      isActive: true,
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      participants: 450,
      totalPointsAwarded: 4500,
      costSavings: 675000,
      icon: 'TrendingUp',
      color: 'teal'
    }
  ];

  const systemStats = {
    totalActiveActivities: 6,
    totalParticipants: 12390,
    totalPointsIssued: 60470,
    engagementRate: 68.4,
    totalCostSavings: 3875000,
    roi: 3.2
  };

  // Point Allocation Helper Functions
  const updateCategoryWeight = (categoryId: number, newWeight: number) => {
    setPointAllocation(prev => ({
      ...prev,
      categories: prev.categories.map(cat => 
        cat.id === categoryId ? { ...cat, weight: newWeight } : cat
      )
    }));
  };

  const updateSubActivityPoints = (categoryId: number, subActivityId: number, newPoints: number) => {
    setPointAllocation(prev => ({
      ...prev,
      categories: prev.categories.map(cat => 
        cat.id === categoryId 
          ? {
              ...cat,
              subActivities: cat.subActivities.map(sub => 
                sub.id === subActivityId ? { ...sub, points: newPoints } : sub
              )
            }
          : cat
      )
    }));
  };

  const getTotalWeight = () => {
    return pointAllocation.categories.reduce((sum, cat) => sum + cat.weight, 0);
  };

  const isWeightValid = () => {
    return getTotalWeight() === 100;
  };

  const savePointAllocation = () => {
    if (isWeightValid()) {
      // Here you would typically save to backend
      alert('Point allocation saved successfully!');
    } else {
      alert(`Total weight must equal 100%. Current total: ${getTotalWeight()}%`);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'careSiteSubstitution': return <Shield className="w-5 h-5 text-red-600 dark:text-red-400" />;
      case 'preventiveCare': return <Heart className="w-5 h-5 text-green-600 dark:text-green-400" />;
      case 'medicationManagement': return <Pill className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'chronicDiseaseManagement': return <Stethoscope className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case 'avoidableCareReduction': return <CheckCircle className="w-5 h-5 text-orange-600 dark:text-orange-400" />;
      default: return <Award className="w-5 h-5 text-gray-600 dark:text-gray-400" />;
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'careSiteSubstitution': return 'Care Site Substitution';
      case 'preventiveCare': return 'Preventive Care';
      case 'medicationManagement': return 'Medication Management';
      case 'chronicDiseaseManagement': return 'Chronic Disease Management';
      case 'avoidableCareReduction': return 'Avoidable Care Reduction';
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

  const filteredActivities = rewardActivities.filter(activity => {
    const matchesSearch = activity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || activity.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
        <NavLink to="/dashboard" className="flex items-center hover:text-green-600 dark:hover:text-green-400 transition-colors">
          <Home className="h-4 w-4 mr-1" />
          Dashboard
        </NavLink>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900 dark:text-gray-100 font-medium">Reward System Management</span>
      </nav>

      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Reward System Management
            {selectedBorough !== 'New York' && (
              <span className="text-xl text-green-600 dark:text-green-400 ml-3">
                - {selectedBorough}
              </span>
            )}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Central hub for configuring and managing the behavioral incentive program
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

      {/* System Status & Quick Statistics */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            System Overview
            {selectedBorough !== 'New York' && (
              <span className="text-lg text-green-600 dark:text-green-400 ml-2">
                - {selectedBorough}
              </span>
            )}
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">System Active</span>
            </div>
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Last updated: {lastRefresh.toLocaleString()}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          <div className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-green-600 dark:text-green-400">
                  Active
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Status
                </div>
              </div>
            </div>
            <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">Active Activities</h3>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">{systemStats.totalActiveActivities}</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">Reward activities currently running</p>
          </div>

          <div className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
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
            <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">Total Participants</h3>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">{formatNumber(systemStats.totalParticipants)}</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">Members enrolled in activities</p>
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
            <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">Points Issued</h3>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">{formatNumber(systemStats.totalPointsIssued)}</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">Total points awarded this period</p>
          </div>

          <div className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                <Activity className="h-6 w-6 text-green-600 dark:text-green-400" />
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
            <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">Engagement Rate</h3>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">{systemStats.engagementRate}%</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">Average participation rate</p>
          </div>

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
            <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">Cost Savings</h3>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">{formatCurrency(systemStats.totalCostSavings)}</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">Total savings generated</p>
          </div>

          <div className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-green-600 dark:text-green-400">
                  +2.1%
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  ↑ vs prev
                </div>
              </div>
            </div>
            <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">ROI</h3>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">{systemStats.roi}x</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">Return on investment</p>
          </div>
        </div>
      </div>

      {/* Point Allocation System */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Point Allocation System
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Configure category weights and sub-activity point values to incentivize cost-effective healthcare decisions
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
              isWeightValid() 
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' 
                : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
            }`}>
              <Percent className="h-4 w-4" />
              <span className="text-sm font-medium">
                Total Weight: {getTotalWeight()}%
              </span>
              {!isWeightValid() && (
                <AlertCircle className="h-4 w-4 ml-1" />
              )}
            </div>
            <button
              onClick={savePointAllocation}
              className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white transition-colors flex items-center"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Configuration
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {pointAllocation.categories.map((category) => (
            <div key={category.id} className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-100 dark:bg-green-800/30">
                    <Settings className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">{category.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{category.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={category.weight}
                    onChange={(e) => updateCategoryWeight(category.id, parseInt(e.target.value) || 0)}
                    className="w-16 px-2 py-1 text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-400">%</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Sub-Activities & Points</h4>
                {category.subActivities.map((subActivity) => (
                  <div key={subActivity.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900 dark:text-gray-100">{subActivity.name}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">({subActivity.points} pts)</span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{subActivity.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="1"
                        max="50"
                        value={subActivity.points}
                        onChange={(e) => updateSubActivityPoints(category.id, subActivity.id, parseInt(e.target.value) || 1)}
                        className="w-16 px-2 py-1 text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400">pts</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Point Allocation Summary */}
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-800/30">
              <Calculator className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Allocation Summary</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{getTotalWeight()}%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Category Weight</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {pointAllocation.categories.reduce((sum, cat) => sum + cat.subActivities.length, 0)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Sub-Activities</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {pointAllocation.categories.reduce((sum, cat) => 
                  sum + cat.subActivities.reduce((subSum, sub) => subSum + sub.points, 0), 0
                )}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Available Points</div>
            </div>
          </div>
        </div>
      </div>

      {/* Reward Activities Dashboard */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Reward Activities Dashboard
            {selectedBorough !== 'New York' && (
              <span className="text-lg text-green-600 dark:text-green-400 ml-2">
                - {selectedBorough}
              </span>
            )}
          </h2>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white transition-colors flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              Add New Activity
            </button>
            <NavLink 
              to="/opportunity-analysis" 
              className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex items-center"
            >
              View Opportunity Analysis
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
              placeholder="Search activities..."
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
              <option value="careSiteSubstitution">Care Site Substitution</option>
              <option value="preventiveCare">Preventive Care</option>
              <option value="medicationManagement">Medication Management</option>
              <option value="chronicDiseaseManagement">Chronic Disease Management</option>
              <option value="avoidableCareReduction">Avoidable Care Reduction</option>
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

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredActivities.map((activity) => (
            <div key={activity.id} className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {getCategoryIcon(activity.category)}
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">{activity.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{getCategoryName(activity.category)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${
                    activity.isActive ? 'bg-green-500' : 'bg-gray-400'
                  }`}></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {activity.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{activity.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Points Value</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{activity.points} pts</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Participants</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{formatNumber(activity.participants)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Participation Rate</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{activity.participationRate}%</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Effectiveness</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{activity.effectiveness}%</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Cost Savings: </span>
                  {formatCurrency(activity.costSavings)}
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
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

          <NavLink 
            to="/financial-metrics" 
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors">
                <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Financial Metrics</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Cost analysis and PMPM insights</p>
              </div>
            </div>
            <div className="text-sm text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300 flex items-center">
              View Metrics <ChevronRight className="h-4 w-4 ml-1" />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default RewardSystem;
