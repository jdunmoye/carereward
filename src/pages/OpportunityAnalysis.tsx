import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { 
  TrendingUp, 
  Target, 
  DollarSign, 
  CheckCircle, 
  AlertCircle,
  RefreshCw,
  Moon,
  Sun,
  Download,
  FileText,
  BarChart3,
  Filter,
  ChevronRight,
  Home,
  ChevronDown,
  Activity,
  Heart,
  Pill,
  Stethoscope,
  Minus,
  Calculator,
  Shield,
  Award
} from 'lucide-react';

const OpportunityAnalysis: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Last 3 Months');
  const [comparisonType, setComparisonType] = useState('Last year same quarter');
  const [selectedBorough, setSelectedBorough] = useState('New York');
  const [lastRefresh, setLastRefresh] = useState(new Date());
  const [scenarioModel, setScenarioModel] = useState('conservative');
  const { isDark, toggleTheme } = useTheme();


  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };


  const formatPercent = (num: number) => {
    return `${num.toFixed(1)}%`;
  };

  const handleRefresh = () => {
    setLastRefresh(new Date());
  };

  // Export functionality
  const handleExport = (format: 'pdf' | 'excel' | 'csv') => {
    alert(`Exporting data as ${format.toUpperCase()}...`);
  };

  // Opportunity Overview Data
  const opportunityOverview = {
    totalPotentialImpact: 3750000,
    currentStateScore: 68.5,
    targetStateScore: 85.0,
    roiPotential: 4.2,
    confidenceInterval: '±12%',
    priorityCategories: [
      { name: 'Avoidance', impact: 1250000, priority: 'high' },
      { name: 'Prevention', impact: 850000, priority: 'high' },
      { name: 'Substitute', impact: 650000, priority: 'medium' },
      { name: 'Control', impact: 450000, priority: 'medium' },
      { name: 'Compliance', impact: 350000, priority: 'medium' },
      { name: 'Disease Reversal', impact: 200000, priority: 'low' }
    ]
  };

  // Category Analysis Data
  const avoidanceOpportunities = [
    { metric: 'Preventable Admissions', current: 12.3, target: 8.0, delta: 4.3, impact: 450000, confidence: 'high' },
    { metric: 'Unnecessary ED Visits', current: 2.8, target: 2.2, delta: 0.6, impact: 320000, confidence: 'high' },
    { metric: 'Avoidable Procedures', current: 15.2, target: 10.0, delta: 5.2, impact: 280000, confidence: 'medium' },
    { metric: 'Duplicate Testing', current: 8.5, target: 5.0, delta: 3.5, impact: 125000, confidence: 'high' },
    { metric: 'Readmissions (30-day)', current: 6.8, target: 4.5, delta: 2.3, impact: 180000, confidence: 'medium' },
    { metric: 'Inappropriate Imaging', current: 12.1, target: 8.0, delta: 4.1, impact: 150000, confidence: 'medium' },
    { metric: 'Overutilization', current: 18.5, target: 12.0, delta: 6.5, impact: 220000, confidence: 'low' }
  ];

  const preventionOpportunities = [
    { metric: 'Annual Wellness Visits', current: 65.2, target: 85.0, delta: 19.8, impact: 280000, confidence: 'high' },
    { metric: 'Cancer Screenings', current: 72.5, target: 90.0, delta: 17.5, impact: 195000, confidence: 'high' },
    { metric: 'Vaccination Rates', current: 68.8, target: 85.0, delta: 16.2, impact: 125000, confidence: 'high' },
    { metric: 'Diabetes Prevention', current: 45.2, target: 70.0, delta: 24.8, impact: 180000, confidence: 'medium' },
    { metric: 'Hypertension Screening', current: 78.5, target: 95.0, delta: 16.5, impact: 95000, confidence: 'high' },
    { metric: 'Mental Health Screening', current: 35.8, target: 60.0, delta: 24.2, impact: 140000, confidence: 'medium' },
    { metric: 'Fall Risk Assessment', current: 42.1, target: 75.0, delta: 32.9, impact: 85000, confidence: 'medium' }
  ];

  const substituteOpportunities = [
    { metric: 'Generic Drug Utilization', current: 78.5, target: 90.0, delta: 11.5, impact: 185000, confidence: 'high' },
    { metric: 'Outpatient vs Inpatient', current: 65.2, target: 80.0, delta: 14.8, impact: 220000, confidence: 'medium' },
    { metric: 'Telemedicine Usage', current: 25.8, target: 50.0, delta: 24.2, impact: 150000, confidence: 'high' },
    { metric: 'Home Health Services', current: 35.5, target: 60.0, delta: 24.5, impact: 125000, confidence: 'medium' },
    { metric: 'Urgent Care vs ED', current: 45.2, target: 70.0, delta: 24.8, impact: 180000, confidence: 'high' },
    { metric: 'Biosimilar Usage', current: 15.8, target: 40.0, delta: 24.2, impact: 95000, confidence: 'medium' },
    { metric: 'Physical Therapy First', current: 28.5, target: 55.0, delta: 26.5, impact: 110000, confidence: 'medium' }
  ];

  const controlOpportunities = [
    { metric: 'HbA1c Control (<7%)', current: 58.2, target: 75.0, delta: 16.8, impact: 125000, confidence: 'high' },
    { metric: 'Blood Pressure Control', current: 62.5, target: 80.0, delta: 17.5, impact: 150000, confidence: 'high' },
    { metric: 'LDL Cholesterol Control', current: 55.8, target: 70.0, delta: 14.2, impact: 95000, confidence: 'medium' },
    { metric: 'Asthma Control', current: 68.5, target: 85.0, delta: 16.5, impact: 85000, confidence: 'high' },
    { metric: 'Depression Remission', current: 45.2, target: 65.0, delta: 19.8, impact: 120000, confidence: 'medium' },
    { metric: 'COPD Exacerbation Control', current: 52.8, target: 75.0, delta: 22.2, impact: 110000, confidence: 'medium' },
    { metric: 'Heart Failure Management', current: 48.5, target: 70.0, delta: 21.5, impact: 140000, confidence: 'medium' }
  ];

  const complianceOpportunities = [
    { metric: 'Medication Adherence', current: 72.5, target: 85.0, delta: 12.5, impact: 180000, confidence: 'high' },
    { metric: 'Follow-up Visit Compliance', current: 68.8, target: 80.0, delta: 11.2, impact: 125000, confidence: 'high' },
    { metric: 'Lab Test Compliance', current: 75.2, target: 90.0, delta: 14.8, impact: 95000, confidence: 'medium' },
    { metric: 'Specialist Referral Follow-up', current: 58.5, target: 75.0, delta: 16.5, impact: 110000, confidence: 'medium' },
    { metric: 'Care Plan Adherence', current: 45.8, target: 70.0, delta: 24.2, impact: 150000, confidence: 'medium' },
    { metric: 'Lifestyle Modification', current: 35.2, target: 60.0, delta: 24.8, impact: 120000, confidence: 'low' },
    { metric: 'Treatment Protocol Compliance', current: 62.5, target: 85.0, delta: 22.5, impact: 140000, confidence: 'high' }
  ];

  const diseaseReversalOpportunities = [
    { metric: 'Weight Loss (5%+)', current: 25.8, target: 45.0, delta: 19.2, impact: 85000, confidence: 'medium' },
    { metric: 'Smoking Cessation', current: 15.2, target: 35.0, delta: 19.8, impact: 120000, confidence: 'medium' },
    { metric: 'Physical Activity Increase', current: 35.5, target: 60.0, delta: 24.5, impact: 75000, confidence: 'low' },
    { metric: 'Diabetes Remission', current: 8.5, target: 20.0, delta: 11.5, impact: 150000, confidence: 'low' },
    { metric: 'Hypertension Reversal', current: 12.8, target: 25.0, delta: 12.2, impact: 95000, confidence: 'low' },
    { metric: 'Mental Health Recovery', current: 22.5, target: 40.0, delta: 17.5, impact: 110000, confidence: 'medium' },
    { metric: 'Substance Use Recovery', current: 18.2, target: 35.0, delta: 16.8, impact: 125000, confidence: 'low' }
  ];

  // Scenario Modeling Data
  const scenarioData = {
    conservative: { impact: 2500000, roi: 3.2, confidence: 'high' },
    moderate: { impact: 3750000, roi: 4.2, confidence: 'medium' },
    aggressive: { impact: 5500000, roi: 5.8, confidence: 'low' }
  };

  // Priority Matrix Data

  const getConfidenceColor = (confidence: string) => {
    switch (confidence) {
      case 'high': return 'text-green-600 dark:text-green-400';
      case 'medium': return 'text-yellow-600 dark:text-yellow-400';
      case 'low': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getConfidenceIcon = (confidence: string) => {
    switch (confidence) {
      case 'high': return <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />;
      case 'medium': return <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />;
      case 'low': return <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />;
      default: return <Minus className="h-4 w-4 text-gray-600 dark:text-gray-400" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Avoidance': return <Shield className="h-5 w-5 text-red-600 dark:text-red-400" />;
      case 'Prevention': return <Heart className="h-5 w-5 text-green-600 dark:text-green-400" />;
      case 'Substitute': return <Pill className="h-5 w-5 text-blue-600 dark:text-blue-400" />;
      case 'Control': return <Stethoscope className="h-5 w-5 text-purple-600 dark:text-purple-400" />;
      case 'Compliance': return <CheckCircle className="h-5 w-5 text-orange-600 dark:text-orange-400" />;
      case 'Disease Reversal': return <TrendingUp className="h-5 w-5 text-teal-600 dark:text-teal-400" />;
      default: return <Target className="h-5 w-5 text-gray-600 dark:text-gray-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
        <NavLink to="/dashboard" className="flex items-center hover:text-green-600 dark:hover:text-green-400 transition-colors">
          <Home className="h-4 w-4 mr-1" />
          Dashboard
        </NavLink>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900 dark:text-gray-100 font-medium">Opportunity Analysis Engine</span>
      </nav>

      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Opportunity Analysis Engine
            {selectedBorough !== 'New York' && (
              <span className="text-xl text-green-600 dark:text-green-400 ml-3">
                - {selectedBorough}
              </span>
            )}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Identify, prioritize, and track improvement opportunities across the organization
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
          
          {/* Comparison Toggle */}
          <div className="relative">
            <select
              value={comparisonType}
              onChange={(e) => setComparisonType(e.target.value)}
              className="px-4 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 appearance-none pr-8"
            >
              <option value="Last year same quarter">Last year same quarter</option>
              <option value="Prior period">Prior period</option>
              <option value="Benchmark">Benchmark</option>
              <option value="Target">Target</option>
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

      {/* Opportunity Overview Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Opportunity Overview
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
                  {opportunityOverview.confidenceInterval}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Confidence
                </div>
              </div>
            </div>
            <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">Total Potential Impact</h3>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">{formatCurrency(opportunityOverview.totalPotentialImpact)}</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">Across all opportunity categories</p>
          </div>

          <div className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                <Target className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-green-600 dark:text-green-400">
                  {opportunityOverview.targetStateScore}%
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Target Score
        </div>
              </div>
            </div>
            <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">Current State Score</h3>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">{opportunityOverview.currentStateScore}%</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">Performance vs. target state</p>
            <div className="mt-3 pt-3 border-t border-green-200 dark:border-green-700">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-500" 
                  style={{ width: `${(opportunityOverview.currentStateScore / opportunityOverview.targetStateScore) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-green-600 dark:text-green-400">
                  {opportunityOverview.confidenceInterval}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Confidence
                </div>
              </div>
            </div>
            <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">ROI Potential</h3>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">{opportunityOverview.roiPotential}x</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">Return on investment potential</p>
          </div>

          <div className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-green-600 dark:text-green-400">
                  2 High
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Priority
                </div>
              </div>
            </div>
            <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">Priority Categories</h3>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">6</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">Opportunity categories identified</p>
        </div>
      </div>

      {/* Priority Categories Grid */}
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Priority Category Ranking</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {opportunityOverview.priorityCategories.map((category, index) => (
              <div key={index} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200">
                <div className="flex flex-col items-center text-center mb-2">
                  <div className="flex items-center gap-2 mb-2">
                    {getCategoryIcon(category.name)}
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm">{category.name}</h4>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    category.priority === 'high' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' :
                    category.priority === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                    'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
                  }`}>
                    {category.priority}
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {formatCurrency(category.impact)}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Potential impact
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Analysis Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Category Analysis
            {selectedBorough !== 'New York' && (
              <span className="text-lg text-green-600 dark:text-green-400 ml-2">
                - {selectedBorough}
              </span>
            )}
          </h2>
          <div className="flex items-center gap-4">
            <NavLink 
              to="/behavior-drivers" 
              className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex items-center"
            >
              View Behavior Drivers
              <ChevronRight className="h-4 w-4 ml-1" />
            </NavLink>
            </div>
        </div>

        {/* Category Tables Grid - 2 per row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Avoidance Opportunities Table */}
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="h-6 w-6 text-red-600 dark:text-red-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Avoidance Opportunities</h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">- Cost avoidance through prevention</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Metric</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Current State</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Target State</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Delta</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Financial Impact</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Confidence</th>
                </tr>
              </thead>
              <tbody>
                {avoidanceOpportunities.slice(0, 5).map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-3 px-4 text-gray-900 dark:text-gray-100">{item.metric}</td>
                    <td className="py-3 px-4 text-right text-gray-700 dark:text-gray-300">{formatPercent(item.current)}</td>
                    <td className="py-3 px-4 text-right text-gray-700 dark:text-gray-300">{formatPercent(item.target)}</td>
                    <td className="py-3 px-4 text-right text-red-600 dark:text-red-400 font-medium">+{formatPercent(item.delta)}</td>
                    <td className="py-3 px-4 text-right text-green-600 dark:text-green-400 font-medium">{formatCurrency(item.impact)}</td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        {getConfidenceIcon(item.confidence)}
                        <span className={`text-xs ${getConfidenceColor(item.confidence)}`}>
                          {item.confidence}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex items-center">
              View Full List ({avoidanceOpportunities.length} items)
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Prevention Opportunities Table */}
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Heart className="h-6 w-6 text-green-600 dark:text-green-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Prevention Opportunities</h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">- Preventive care and early intervention</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Metric</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Current State</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Target State</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Delta</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Financial Impact</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Confidence</th>
                </tr>
              </thead>
              <tbody>
                {preventionOpportunities.slice(0, 5).map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-3 px-4 text-gray-900 dark:text-gray-100">{item.metric}</td>
                    <td className="py-3 px-4 text-right text-gray-700 dark:text-gray-300">{formatPercent(item.current)}</td>
                    <td className="py-3 px-4 text-right text-gray-700 dark:text-gray-300">{formatPercent(item.target)}</td>
                    <td className="py-3 px-4 text-right text-green-600 dark:text-green-400 font-medium">+{formatPercent(item.delta)}</td>
                    <td className="py-3 px-4 text-right text-green-600 dark:text-green-400 font-medium">{formatCurrency(item.impact)}</td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        {getConfidenceIcon(item.confidence)}
                        <span className={`text-xs ${getConfidenceColor(item.confidence)}`}>
                          {item.confidence}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex items-center">
              View Full List ({preventionOpportunities.length} items)
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Substitute Opportunities Table */}
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Pill className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Substitute Opportunities</h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">- Care substitution and alternative treatments</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Metric</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Current State</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Target State</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Delta</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Financial Impact</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Confidence</th>
                </tr>
              </thead>
              <tbody>
                {substituteOpportunities.slice(0, 5).map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-3 px-4 text-gray-900 dark:text-gray-100">{item.metric}</td>
                    <td className="py-3 px-4 text-right text-gray-700 dark:text-gray-300">{formatPercent(item.current)}</td>
                    <td className="py-3 px-4 text-right text-gray-700 dark:text-gray-300">{formatPercent(item.target)}</td>
                    <td className="py-3 px-4 text-right text-blue-600 dark:text-blue-400 font-medium">+{formatPercent(item.delta)}</td>
                    <td className="py-3 px-4 text-right text-green-600 dark:text-green-400 font-medium">{formatCurrency(item.impact)}</td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        {getConfidenceIcon(item.confidence)}
                        <span className={`text-xs ${getConfidenceColor(item.confidence)}`}>
                          {item.confidence}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex items-center">
              View Full List ({substituteOpportunities.length} items)
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Control Opportunities Table */}
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Stethoscope className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Control Opportunities</h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">- Disease and condition control</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Metric</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Current State</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Target State</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Delta</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Financial Impact</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Confidence</th>
                </tr>
              </thead>
              <tbody>
                {controlOpportunities.slice(0, 5).map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-3 px-4 text-gray-900 dark:text-gray-100">{item.metric}</td>
                    <td className="py-3 px-4 text-right text-gray-700 dark:text-gray-300">{formatPercent(item.current)}</td>
                    <td className="py-3 px-4 text-right text-gray-700 dark:text-gray-300">{formatPercent(item.target)}</td>
                    <td className="py-3 px-4 text-right text-purple-600 dark:text-purple-400 font-medium">+{formatPercent(item.delta)}</td>
                    <td className="py-3 px-4 text-right text-green-600 dark:text-green-400 font-medium">{formatCurrency(item.impact)}</td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        {getConfidenceIcon(item.confidence)}
                        <span className={`text-xs ${getConfidenceColor(item.confidence)}`}>
                          {item.confidence}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex items-center">
              View Full List ({controlOpportunities.length} items)
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Compliance Opportunities Table */}
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Compliance to Care Opportunities</h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">- Treatment adherence and compliance</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Metric</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Current State</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Target State</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Delta</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Financial Impact</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Confidence</th>
                </tr>
              </thead>
              <tbody>
                {complianceOpportunities.slice(0, 5).map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-3 px-4 text-gray-900 dark:text-gray-100">{item.metric}</td>
                    <td className="py-3 px-4 text-right text-gray-700 dark:text-gray-300">{formatPercent(item.current)}</td>
                    <td className="py-3 px-4 text-right text-gray-700 dark:text-gray-300">{formatPercent(item.target)}</td>
                    <td className="py-3 px-4 text-right text-orange-600 dark:text-orange-400 font-medium">+{formatPercent(item.delta)}</td>
                    <td className="py-3 px-4 text-right text-green-600 dark:text-green-400 font-medium">{formatCurrency(item.impact)}</td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        {getConfidenceIcon(item.confidence)}
                        <span className={`text-xs ${getConfidenceColor(item.confidence)}`}>
                          {item.confidence}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex items-center">
              View Full List ({complianceOpportunities.length} items)
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Disease Reversal Opportunities Table */}
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-6 w-6 text-teal-600 dark:text-teal-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Disease Reversal Opportunities</h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">- Health improvement and disease reversal</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Metric</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Current State</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Target State</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Delta</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Financial Impact</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Confidence</th>
                </tr>
              </thead>
              <tbody>
                {diseaseReversalOpportunities.slice(0, 5).map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-3 px-4 text-gray-900 dark:text-gray-100">{item.metric}</td>
                    <td className="py-3 px-4 text-right text-gray-700 dark:text-gray-300">{formatPercent(item.current)}</td>
                    <td className="py-3 px-4 text-right text-gray-700 dark:text-gray-300">{formatPercent(item.target)}</td>
                    <td className="py-3 px-4 text-right text-teal-600 dark:text-teal-400 font-medium">+{formatPercent(item.delta)}</td>
                    <td className="py-3 px-4 text-right text-green-600 dark:text-green-400 font-medium">{formatCurrency(item.impact)}</td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        {getConfidenceIcon(item.confidence)}
                        <span className={`text-xs ${getConfidenceColor(item.confidence)}`}>
                          {item.confidence}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex items-center">
              View Full List ({diseaseReversalOpportunities.length} items)
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
        </div>
      </div>

      {/* Scenario Modeling Tool */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Scenario Modeling Tool
            {selectedBorough !== 'New York' && (
              <span className="text-lg text-green-600 dark:text-green-400 ml-2">
                - {selectedBorough}
              </span>
            )}
          </h2>
          <div className="flex items-center gap-4">
            <NavLink 
              to="/financial-metrics" 
              className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex items-center"
            >
              View Financial Impact
              <ChevronRight className="h-4 w-4 ml-1" />
            </NavLink>
          </div>
        </div>
        
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">What-If Calculator</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Test different improvement scenarios and their potential impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(scenarioData).map(([scenario, data]) => (
              <div key={scenario} className={`p-6 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                scenarioModel === scenario 
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                  : 'border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600'
              }`} onClick={() => setScenarioModel(scenario)}>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 capitalize">{scenario} Scenario</h4>
                  <Calculator className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{formatCurrency(data.impact)}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Potential Impact</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-green-600 dark:text-green-400">{data.roi}x</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">ROI Estimate</div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getConfidenceIcon(data.confidence)}
                    <span className={`text-xs ${getConfidenceColor(data.confidence)}`}>
                      {data.confidence} confidence
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Hub */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Related Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            to="/clinical-metrics" 
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors">
                <Stethoscope className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Clinical Metrics</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Clinical performance indicators</p>
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

export default OpportunityAnalysis;
