import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Target, 
  Settings,
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
  AlertTriangle,
  CheckCircle,
  XCircle,
  Activity,
  Heart,
  Pill,
  Stethoscope,
  Eye,
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
} from 'recharts';

const BehaviorDrivers: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Last 3 Months');
  const [comparisonType, setComparisonType] = useState('Last year same quarter');
  const [selectedBorough, setSelectedBorough] = useState('New York');
  const [lastRefresh, setLastRefresh] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const { isDark, toggleTheme } = useTheme();


  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  };


  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLastRefresh(new Date());
    }, 1000);
  };

  // Export functionality
  const handleExport = (format: 'pdf' | 'excel' | 'csv') => {
    setLoading(true);
    // Simulate export process
    setTimeout(() => {
      setLoading(false);
      alert(`Exporting data as ${format.toUpperCase()}...`);
    }, 1000);
  };

  // Chart colors for dark/light mode
  const chartColors = {
    primary: isDark ? '#10b981' : '#059669',
    secondary: isDark ? '#3b82f6' : '#2563eb',
    tertiary: isDark ? '#f59e0b' : '#d97706',
    quaternary: isDark ? '#ef4444' : '#dc2626',
    background: isDark ? '#1f2937' : '#ffffff',
    text: isDark ? '#f9fafb' : '#111827',
    grid: isDark ? '#374151' : '#e5e7eb'
  };

  // Key Cost Drivers Metrics Data
  const admissionRatesData = [
    { name: 'Admissions per 1000', current: 85.5, target: 75.0, benchmark: 80.0, trend: 'up', changePercent: 3.1, avoidable: 12.3 },
    { name: 'Avoidable Admissions', current: 12.3, target: 8.0, benchmark: 10.0, trend: 'up', changePercent: 2.5, avoidability: 14.4 }
  ];

  const emergencyDepartmentData = [
    { name: 'ED Visits per 1000', current: 2.8, target: 2.2, benchmark: 2.5, trend: 'up', changePercent: 5.2, severity: { low: 45, medium: 35, high: 20 } },
    { name: 'Preventable ED Visits', current: 0.8, target: 0.5, benchmark: 0.6, trend: 'up', changePercent: 4.1, prevention: 28.6 }
  ];

  const medicationManagementData = [
    { name: 'Generic Drug Utilization', current: 78.5, target: 85.0, benchmark: 82.0, trend: 'up', changePercent: 2.3, savings: 125000 },
    { name: 'Drug Pickup Rate', current: 82.3, target: 90.0, benchmark: 88.0, trend: 'up', changePercent: 1.8, adherence: 15.2 }
  ];

  const preventiveCareData = [
    { name: 'Annual Wellness Visits', current: 65.2, target: 75.0, benchmark: 70.0, trend: 'up', changePercent: 3.5, engagement: 8.7 }
  ];

  const networkUtilizationData = [
    { name: 'Out of Network Utilization', current: 12.8, target: 10.0, benchmark: 11.0, trend: 'down', changePercent: -1.2, costDiff: 185000 }
  ];

  // Trend Analysis Data (12 months)
  const trendAnalysisData = [
    { month: 'Jan', admissions: 82.1, edVisits: 2.6, genericUtil: 76.2, wellnessVisits: 61.8, outOfNetwork: 14.2 },
    { month: 'Feb', admissions: 83.5, edVisits: 2.7, genericUtil: 77.1, wellnessVisits: 62.5, outOfNetwork: 13.8 },
    { month: 'Mar', admissions: 84.2, edVisits: 2.8, genericUtil: 77.8, wellnessVisits: 63.2, outOfNetwork: 13.5 },
    { month: 'Apr', admissions: 83.8, edVisits: 2.7, genericUtil: 78.1, wellnessVisits: 63.8, outOfNetwork: 13.2 },
    { month: 'May', admissions: 84.5, edVisits: 2.8, genericUtil: 78.3, wellnessVisits: 64.1, outOfNetwork: 13.0 },
    { month: 'Jun', admissions: 85.1, edVisits: 2.9, genericUtil: 78.4, wellnessVisits: 64.5, outOfNetwork: 12.8 },
    { month: 'Jul', admissions: 85.8, edVisits: 2.9, genericUtil: 78.5, wellnessVisits: 64.8, outOfNetwork: 12.6 },
    { month: 'Aug', admissions: 85.5, edVisits: 2.8, genericUtil: 78.6, wellnessVisits: 65.0, outOfNetwork: 12.5 },
    { month: 'Sep', admissions: 85.2, edVisits: 2.8, genericUtil: 78.5, wellnessVisits: 65.1, outOfNetwork: 12.7 },
    { month: 'Oct', admissions: 85.3, edVisits: 2.8, genericUtil: 78.4, wellnessVisits: 65.2, outOfNetwork: 12.8 },
    { month: 'Nov', admissions: 85.4, edVisits: 2.8, genericUtil: 78.5, wellnessVisits: 65.2, outOfNetwork: 12.8 },
    { month: 'Dec', admissions: 85.5, edVisits: 2.8, genericUtil: 78.5, wellnessVisits: 65.2, outOfNetwork: 12.8 }
  ];

  // Alert Management Data
  const alertData = [
    { id: 1, type: 'warning', metric: 'Admissions per 1000', message: 'Admissions rate 14% above target', severity: 'high', timestamp: '2024-01-15T10:30:00Z', status: 'active' },
    { id: 2, type: 'info', metric: 'Generic Drug Utilization', message: 'Generic utilization approaching target', severity: 'medium', timestamp: '2024-01-15T09:15:00Z', status: 'active' },
    { id: 3, type: 'success', metric: 'Out of Network Utilization', message: 'Out of network usage improved 8%', severity: 'low', timestamp: '2024-01-14T16:45:00Z', status: 'resolved' },
    { id: 4, type: 'warning', metric: 'ED Visits per 1000', message: 'ED visits trending upward', severity: 'high', timestamp: '2024-01-14T14:20:00Z', status: 'active' },
    { id: 5, type: 'info', metric: 'Annual Wellness Visits', message: 'Wellness visit participation increasing', severity: 'medium', timestamp: '2024-01-14T11:30:00Z', status: 'active' }
  ];

  // Performance Indicators Data
  const performanceIndicators = [
    { metric: 'Admissions per 1000', current: 85.5, target: 75.0, benchmark: 80.0, percentile: 75, status: 'warning', roi: 125000 },
    { metric: 'ED Visits per 1000', current: 2.8, target: 2.2, benchmark: 2.5, percentile: 80, status: 'warning', roi: 85000 },
    { metric: 'Generic Drug Utilization', current: 78.5, target: 85.0, benchmark: 82.0, percentile: 65, status: 'info', roi: 125000 },
    { metric: 'Annual Wellness Visits', current: 65.2, target: 75.0, benchmark: 70.0, percentile: 60, status: 'info', roi: 95000 },
    { metric: 'Out of Network Utilization', current: 12.8, target: 10.0, benchmark: 11.0, percentile: 70, status: 'warning', roi: 185000 }
  ];


  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />;
      case 'warning': return <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />;
      case 'error': return <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />;
      default: return <Activity className="h-5 w-5 text-blue-600 dark:text-blue-400" />;
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
        <span className="text-gray-900 dark:text-gray-100 font-medium">Behavior Drivers Analytics</span>
      </nav>

      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Behavior Drivers Analytics
            {selectedBorough !== 'New York' && (
              <span className="text-xl text-green-600 dark:text-green-400 ml-3">
                - {selectedBorough}
              </span>
            )}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Monitor measurable behaviors that impact healthcare costs and quality outcomes
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
            disabled={loading}
            className="p-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors disabled:opacity-50"
            title="Refresh Data"
          >
            <RefreshCw className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
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

      {/* Key Cost Drivers Metrics Dashboard */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Key Cost Drivers Metrics
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

        {/* Admission Rates Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <Stethoscope className="h-5 w-5 text-green-600 dark:text-green-400" />
            Admission Rates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {admissionRatesData.map((metric, index) => (
              <div key={index} className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                    <Stethoscope className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-red-600 dark:text-red-400">
                      +{metric.changePercent}%
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      ↑ vs prev
                    </div>
                  </div>
                </div>
                <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">{metric.name}</h3>
                <p className="text-2xl font-bold text-green-900 dark:text-green-100">{metric.current}</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">Current rate per 1000 members</p>
                <div className="mt-3 pt-3 border-t border-green-200 dark:border-green-700">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 dark:text-gray-400">Target:</span>
                    <span className="text-gray-700 dark:text-gray-300">{metric.target}</span>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-gray-500 dark:text-gray-400">Benchmark:</span>
                    <span className="text-gray-700 dark:text-gray-300">{metric.benchmark}</span>
                  </div>
                  {metric.avoidable && (
                    <div className="flex justify-between text-xs mt-1">
                      <span className="text-gray-500 dark:text-gray-400">Avoidable:</span>
                      <span className="text-red-600 dark:text-red-400 font-medium">{metric.avoidable}%</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Department Usage Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <Activity className="h-5 w-5 text-green-600 dark:text-green-400" />
            Emergency Department Usage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emergencyDepartmentData.map((metric, index) => (
              <div key={index} className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                    <Activity className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-red-600 dark:text-red-400">
                      +{metric.changePercent}%
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      ↑ vs prev
                    </div>
                  </div>
                </div>
                <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">{metric.name}</h3>
                <p className="text-2xl font-bold text-green-900 dark:text-green-100">{metric.current}</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">Current rate per 1000 members</p>
                <div className="mt-3 pt-3 border-t border-green-200 dark:border-green-700">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 dark:text-gray-400">Target:</span>
                    <span className="text-gray-700 dark:text-gray-300">{metric.target}</span>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-gray-500 dark:text-gray-400">Benchmark:</span>
                    <span className="text-gray-700 dark:text-gray-300">{metric.benchmark}</span>
                  </div>
                  {metric.severity && (
                    <div className="text-xs mt-1">
                      <span className="text-gray-500 dark:text-gray-400">Severity: </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {metric.severity.low}% Low, {metric.severity.medium}% Med, {metric.severity.high}% High
                      </span>
                    </div>
                  )}
                  {metric.prevention && (
                    <div className="flex justify-between text-xs mt-1">
                      <span className="text-gray-500 dark:text-gray-400">Prevention:</span>
                      <span className="text-yellow-600 dark:text-yellow-400 font-medium">{metric.prevention}%</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Medication Management Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <Pill className="h-5 w-5 text-green-600 dark:text-green-400" />
            Medication Management
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {medicationManagementData.map((metric, index) => (
              <div key={index} className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                    <Pill className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-600 dark:text-green-400">
                      +{metric.changePercent}%
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      ↑ vs prev
                    </div>
                  </div>
                </div>
                <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">{metric.name}</h3>
                <p className="text-2xl font-bold text-green-900 dark:text-green-100">{metric.current}%</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">Current utilization rate</p>
                <div className="mt-3 pt-3 border-t border-green-200 dark:border-green-700">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 dark:text-gray-400">Target:</span>
                    <span className="text-gray-700 dark:text-gray-300">{metric.target}%</span>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-gray-500 dark:text-gray-400">Benchmark:</span>
                    <span className="text-gray-700 dark:text-gray-300">{metric.benchmark}%</span>
                  </div>
                  {metric.savings && (
                    <div className="flex justify-between text-xs mt-1">
                      <span className="text-gray-500 dark:text-gray-400">Savings:</span>
                      <span className="text-green-600 dark:text-green-400 font-medium">{formatCurrency(metric.savings)}</span>
                    </div>
                  )}
                  {metric.adherence && (
                    <div className="flex justify-between text-xs mt-1">
                      <span className="text-gray-500 dark:text-gray-400">Adherence:</span>
                      <span className="text-green-600 dark:text-green-400 font-medium">{metric.adherence}%</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Preventive Care Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <Heart className="h-5 w-5 text-green-600 dark:text-green-400" />
            Preventive Care
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {preventiveCareData.map((metric, index) => (
              <div key={index} className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                    <Heart className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-600 dark:text-green-400">
                      +{metric.changePercent}%
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      ↑ vs prev
                    </div>
                  </div>
                </div>
                <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">{metric.name}</h3>
                <p className="text-2xl font-bold text-green-900 dark:text-green-100">{metric.current}%</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">Current participation rate</p>
                <div className="mt-3 pt-3 border-t border-green-200 dark:border-green-700">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 dark:text-gray-400">Target:</span>
                    <span className="text-gray-700 dark:text-gray-300">{metric.target}%</span>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-gray-500 dark:text-gray-400">Benchmark:</span>
                    <span className="text-gray-700 dark:text-gray-300">{metric.benchmark}%</span>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-gray-500 dark:text-gray-400">Engagement:</span>
                    <span className="text-green-600 dark:text-green-400 font-medium">{metric.engagement}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Network Utilization Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <Target className="h-5 w-5 text-green-600 dark:text-green-400" />
            Network Utilization
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {networkUtilizationData.map((metric, index) => (
              <div key={index} className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                    <Target className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-600 dark:text-green-400">
                      {metric.changePercent}%
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      ↓ vs prev
                    </div>
                  </div>
                </div>
                <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">{metric.name}</h3>
                <p className="text-2xl font-bold text-green-900 dark:text-green-100">{metric.current}%</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">Current out of network rate</p>
                <div className="mt-3 pt-3 border-t border-green-200 dark:border-green-700">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 dark:text-gray-400">Target:</span>
                    <span className="text-gray-700 dark:text-gray-300">{metric.target}%</span>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-gray-500 dark:text-gray-400">Benchmark:</span>
                    <span className="text-gray-700 dark:text-gray-300">{metric.benchmark}%</span>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-gray-500 dark:text-gray-400">Cost Impact:</span>
                    <span className="text-red-600 dark:text-red-400 font-medium">{formatCurrency(metric.costDiff)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trend Analysis View */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Trend Analysis
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
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">12-Month Performance Trends</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Time series analysis of key behavioral metrics over the past year
            </p>
          </div>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendAnalysisData}>
                <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
                <XAxis dataKey="month" stroke={chartColors.text} />
                <YAxis stroke={chartColors.text} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: chartColors.background, 
                    border: `1px solid ${chartColors.grid}`,
                    borderRadius: '8px',
                    color: chartColors.text
                  }} 
                />
                <Line type="monotone" dataKey="admissions" stroke={chartColors.quaternary} strokeWidth={2} name="Admissions per 1000" />
                <Line type="monotone" dataKey="edVisits" stroke={chartColors.tertiary} strokeWidth={2} name="ED Visits per 1000" />
                <Line type="monotone" dataKey="genericUtil" stroke={chartColors.primary} strokeWidth={2} name="Generic Utilization %" />
                <Line type="monotone" dataKey="wellnessVisits" stroke={chartColors.secondary} strokeWidth={2} name="Wellness Visits %" />
                <Line type="monotone" dataKey="outOfNetwork" stroke="#ef4444" strokeWidth={2} name="Out of Network %" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Alert Management Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Alert Management
            {selectedBorough !== 'New York' && (
              <span className="text-lg text-green-600 dark:text-green-400 ml-2">
                - {selectedBorough}
              </span>
            )}
          </h2>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:border-green-300 dark:hover:border-green-600 transition-colors flex items-center">
              <Settings className="h-4 w-4 mr-2" />
              Configure Alerts
            </button>
          </div>
        </div>
        
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Real-time Performance Alerts</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Active notifications and performance alerts for metrics exceeding thresholds
            </p>
          </div>
          <div className="space-y-4">
            {alertData.map((alert) => (
              <div key={alert.id} className={`p-4 rounded-lg border-l-4 ${
                alert.type === 'warning' ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20' :
                alert.type === 'success' ? 'border-green-500 bg-green-50 dark:bg-green-900/20' :
                'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
              }`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    {getStatusIcon(alert.type)}
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">{alert.metric}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{alert.message}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          alert.severity === 'high' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' :
                          alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                          'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        }`}>
                          {alert.severity} priority
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {new Date(alert.timestamp).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      alert.status === 'active' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' :
                      'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                    }`}>
                      {alert.status}
                    </span>
                    <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Indicators */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Performance Indicators
            {selectedBorough !== 'New York' && (
              <span className="text-lg text-green-600 dark:text-green-400 ml-2">
                - {selectedBorough}
              </span>
            )}
          </h2>
          <div className="flex items-center gap-4">
            <NavLink 
              to="/opportunity-analysis" 
              className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex items-center"
            >
              View Opportunity Analysis
              <ChevronRight className="h-4 w-4 ml-1" />
            </NavLink>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {performanceIndicators.map((indicator, index) => (
            <div key={index} className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">{indicator.metric}</h3>
                {getStatusIcon(indicator.status)}
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Current</span>
                  <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">{indicator.current}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Target</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{indicator.target}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Benchmark</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{indicator.benchmark}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Percentile</span>
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">{indicator.percentile}th</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">ROI Impact</span>
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">{formatCurrency(indicator.roi)}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      indicator.status === 'success' ? 'bg-green-500' :
                      indicator.status === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`}
                    style={{ width: `${Math.min((indicator.current / indicator.target) * 100, 100)}%` }}
                  ></div>
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
            to="/financial-metrics" 
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors">
                <Activity className="h-6 w-6 text-green-600 dark:text-green-400" />
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
        </div>
      </div>
    </div>
  );
};

export default BehaviorDrivers;
