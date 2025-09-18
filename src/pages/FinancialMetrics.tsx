import React, { useState, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { 
  DollarSign, 
  Target, 
  RefreshCw, 
  Moon, 
  Sun, 
  Download, 
  FileText, 
  BarChart3, 
  Users, 
  Activity, 
  Heart, 
  Pill, 
  Calendar, 
  Filter, 
  ChevronRight, 
  Home,
  ChevronDown
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer
} from 'recharts';
import { boroughData, BoroughData } from '../data/boroughData';

const FinancialMetrics: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Last 3 Months');
  const [comparisonType, setComparisonType] = useState('Last year same quarter');
  const [selectedBorough, setSelectedBorough] = useState('New York');
  const [lastRefresh, setLastRefresh] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState<string>('all');
  const [chartType, setChartType] = useState<'line' | 'area' | 'bar'>('line');
  const { isDark, toggleTheme } = useTheme();

  // Get data for selected borough
  const currentBoroughData: BoroughData = boroughData[selectedBorough];
  const { costMetrics } = currentBoroughData;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  
  // PMPM Dashboard Data - Dynamic based on selected borough
  const pmpmData = [
    {
      title: 'Total Cost of Care PMPM',
      value: formatCurrency(costMetrics.currentCostOfCarePMPM),
      change: '+2.3%',
      changeType: 'negative' as const,
      icon: DollarSign,
      description: 'Per Member Per Month total cost',
      trend: 'up' as const,
      benchmark: '$520.00',
      percentile: 75
    },
    {
      title: 'Risk Adjusted PMPM',
      value: formatCurrency(costMetrics.riskAdjustedPMPM),
      change: '+1.8%',
      changeType: 'negative' as const,
      icon: Target,
      description: 'Risk-adjusted cost per member',
      trend: 'up' as const,
      benchmark: '$450.00',
      percentile: 80
    },
    {
      title: 'Medical PMPM (Mx)',
      value: formatCurrency(costMetrics.medicalPMPM),
      change: '+2.1%',
      changeType: 'negative' as const,
      icon: Heart,
      description: 'Medical services cost per member',
      trend: 'up' as const,
      benchmark: '$320.00',
      percentile: 70
    },
    {
      title: 'Pharmacy PMPM (Rx)',
      value: formatCurrency(costMetrics.pharmacyPMPM),
      change: '-0.8%',
      changeType: 'positive' as const,
      icon: Pill,
      description: 'Pharmacy cost per member',
      trend: 'down' as const,
      benchmark: '$200.00',
      percentile: 85
    },
    {
      title: 'Total Pool Spending',
      value: formatCurrency(costMetrics.totalPoolSpending),
      change: '+3.2%',
      changeType: 'negative' as const,
      icon: DollarSign,
      description: 'Total spending for selected period',
      trend: 'up' as const,
      benchmark: formatCurrency(costMetrics.activeMembership * 520),
      percentile: 75
    },
  ];

  // Historical PMPM Trends Data (12 months) - Dynamic based on borough
  const baseMultiplier = selectedBorough === 'New York' ? 1 : 
    selectedBorough === 'Manhattan' ? 1.1 : 
    selectedBorough === 'Brooklyn' ? 0.92 : 
    selectedBorough === 'Queens' ? 0.86 : 
    selectedBorough === 'Bronx' ? 1.07 : 0.8; // Staten Island

  const historicalTrendsData = [
    { month: 'Jan', totalPMPM: Math.round(520 * baseMultiplier), riskAdjusted: Math.round(450 * baseMultiplier), medical: Math.round(320 * baseMultiplier), pharmacy: Math.round(200 * baseMultiplier) },
    { month: 'Feb', totalPMPM: Math.round(515 * baseMultiplier), riskAdjusted: Math.round(445 * baseMultiplier), medical: Math.round(318 * baseMultiplier), pharmacy: Math.round(197 * baseMultiplier) },
    { month: 'Mar', totalPMPM: Math.round(510 * baseMultiplier), riskAdjusted: Math.round(440 * baseMultiplier), medical: Math.round(315 * baseMultiplier), pharmacy: Math.round(195 * baseMultiplier) },
    { month: 'Apr', totalPMPM: Math.round(505 * baseMultiplier), riskAdjusted: Math.round(435 * baseMultiplier), medical: Math.round(312 * baseMultiplier), pharmacy: Math.round(193 * baseMultiplier) },
    { month: 'May', totalPMPM: Math.round(500 * baseMultiplier), riskAdjusted: Math.round(430 * baseMultiplier), medical: Math.round(310 * baseMultiplier), pharmacy: Math.round(190 * baseMultiplier) },
    { month: 'Jun', totalPMPM: Math.round(495 * baseMultiplier), riskAdjusted: Math.round(425 * baseMultiplier), medical: Math.round(308 * baseMultiplier), pharmacy: Math.round(187 * baseMultiplier) },
    { month: 'Jul', totalPMPM: Math.round(490 * baseMultiplier), riskAdjusted: Math.round(420 * baseMultiplier), medical: Math.round(305 * baseMultiplier), pharmacy: Math.round(185 * baseMultiplier) },
    { month: 'Aug', totalPMPM: Math.round(488 * baseMultiplier), riskAdjusted: Math.round(418 * baseMultiplier), medical: Math.round(303 * baseMultiplier), pharmacy: Math.round(185 * baseMultiplier) },
    { month: 'Sep', totalPMPM: Math.round(485 * baseMultiplier), riskAdjusted: Math.round(415 * baseMultiplier), medical: Math.round(300 * baseMultiplier), pharmacy: Math.round(185 * baseMultiplier) },
    { month: 'Oct', totalPMPM: Math.round(483 * baseMultiplier), riskAdjusted: Math.round(413 * baseMultiplier), medical: Math.round(299 * baseMultiplier), pharmacy: Math.round(184 * baseMultiplier) },
    { month: 'Nov', totalPMPM: Math.round(484 * baseMultiplier), riskAdjusted: Math.round(414 * baseMultiplier), medical: Math.round(299 * baseMultiplier), pharmacy: Math.round(185 * baseMultiplier) },
    { month: 'Dec', totalPMPM: Math.round(costMetrics.currentCostOfCarePMPM), riskAdjusted: Math.round(costMetrics.riskAdjustedPMPM), medical: Math.round(costMetrics.medicalPMPM), pharmacy: Math.round(costMetrics.pharmacyPMPM) },
  ];

  // Benchmark Comparison Data - Dynamic based on borough
  const benchmarkData = [
    { metric: 'Total PMPM', current: Math.round(costMetrics.currentCostOfCarePMPM), benchmark: 520, industry: 550, percentile: 75 },
    { metric: 'Risk Adjusted', current: Math.round(costMetrics.riskAdjustedPMPM), benchmark: 450, industry: 480, percentile: 80 },
    { metric: 'Medical PMPM', current: Math.round(costMetrics.medicalPMPM), benchmark: 320, industry: 340, percentile: 70 },
    { metric: 'Pharmacy PMPM', current: Math.round(costMetrics.pharmacyPMPM), benchmark: 200, industry: 220, percentile: 85 },
  ];

  // Key Cost Drivers Data - Dynamic based on borough
  const costDriversData = [
    {
      metric: 'Admissions per 1000',
      current: currentBoroughData.costDrivers[0]?.value || 45.2,
      previous: 48.1,
      change: currentBoroughData.costDrivers[0]?.changePercent || -6.0,
      benchmark: currentBoroughData.costDrivers[0]?.target || 50.0,
      trend: 'down' as const,
      icon: Activity,
      description: 'Hospital admissions per 1000 members'
    },
    {
      metric: 'Avoidable Admissions per 1000',
      current: 8.3,
      previous: 9.2,
      change: -9.8,
      benchmark: 12.0,
      trend: 'down' as const,
      icon: Target,
      description: 'Preventable hospital admissions'
    },
    {
      metric: 'ED Visits per 1000',
      current: currentBoroughData.costDrivers[0]?.value || 125.4,
      previous: 128.7,
      change: currentBoroughData.costDrivers[0]?.changePercent || -2.6,
      benchmark: currentBoroughData.costDrivers[0]?.target || 140.0,
      trend: 'down' as const,
      icon: Heart,
      description: 'Emergency department visits'
    },
    {
      metric: 'Preventable ED Visits',
      current: 18.6,
      previous: 20.1,
      change: -7.5,
      benchmark: 25.0,
      trend: 'down' as const,
      icon: Target,
      description: 'Avoidable emergency visits'
    },
    {
      metric: 'Generic Drug Utilization',
      current: 78.5,
      previous: 76.2,
      change: 3.0,
      benchmark: 75.0,
      trend: 'up' as const,
      icon: Pill,
      description: 'Percentage of generic prescriptions'
    },
    {
      metric: 'Drug Pickup Rate',
      current: 89.2,
      previous: 87.8,
      change: 1.6,
      benchmark: 85.0,
      trend: 'up' as const,
      icon: Pill,
      description: 'Medication adherence rate'
    },
    {
      metric: 'Annual Wellness Visit Participation',
      current: 72.3,
      previous: 69.8,
      change: 3.6,
      benchmark: 70.0,
      trend: 'up' as const,
      icon: Calendar,
      description: 'Preventive care participation'
    },
    {
      metric: 'Out of Network Utilization',
      current: 5.2,
      previous: 6.1,
      change: -14.8,
      benchmark: 8.0,
      trend: 'down' as const,
      icon: Users,
      description: 'Out-of-network service usage'
    },
  ];

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

  // Filtered data based on selected metric
  const filteredTrendsData = useMemo(() => {
    if (selectedMetric === 'all') return historicalTrendsData;
    return historicalTrendsData.map(item => ({
      month: item.month,
      [selectedMetric]: item[selectedMetric as keyof typeof item]
    }));
  }, [selectedMetric, historicalTrendsData]);


  return (
    <div className="space-y-6">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
        <NavLink to="/dashboard" className="flex items-center hover:text-green-600 dark:hover:text-green-400 transition-colors">
          <Home className="h-4 w-4 mr-1" />
          Dashboard
        </NavLink>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900 dark:text-gray-100 font-medium">Financial Metrics</span>
      </nav>

      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Financial Metrics
            {selectedBorough !== 'New York' && (
              <span className="text-xl text-green-600 dark:text-green-400 ml-3">
                - {selectedBorough}
              </span>
            )}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Comprehensive PMPM analysis and cost driver insights
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

      {/* PMPM Dashboard Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            PMPM Dashboard
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {pmpmData.map((metric) => {
            const IconComponent = metric.icon;
            return (
              <div key={metric.title} className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                    <IconComponent className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-medium ${
                      metric.changeType === 'positive' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                    }`}>
                      {metric.change}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {metric.trend === 'down' ? '↓' : '↑'} vs prev
                    </div>
                  </div>
                </div>
                <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">{metric.title}</h3>
                <p className="text-2xl font-bold text-green-900 dark:text-green-100">{metric.value}</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">{metric.description}</p>
                <div className="mt-3 pt-3 border-t border-green-200 dark:border-green-700">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 dark:text-gray-400">Benchmark:</span>
                    <span className="text-gray-700 dark:text-gray-300">{metric.benchmark}</span>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-gray-500 dark:text-gray-400">Percentile:</span>
                    <span className="text-green-600 dark:text-green-400 font-medium">{metric.percentile}th</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Historical Trends Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Historical Trends
            {selectedBorough !== 'New York' && (
              <span className="text-lg text-green-600 dark:text-green-400 ml-2">
                - {selectedBorough}
              </span>
            )}
          </h2>
          <div className="flex items-center gap-4">
            {/* Chart Type Selector */}
            <div className="flex bg-white dark:bg-gray-900 rounded-lg p-1 border border-gray-200 dark:border-gray-800">
              {(['line', 'area', 'bar'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setChartType(type)}
                  className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 capitalize ${
                    chartType === type
                      ? "bg-green-500 text-white shadow-sm"
                      : "text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <select
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
              className="px-3 py-1 text-sm border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            >
              <option value="all">All Metrics</option>
              <option value="totalPMPM">Total PMPM</option>
              <option value="riskAdjusted">Risk Adjusted</option>
              <option value="medical">Medical PMPM</option>
              <option value="pharmacy">Pharmacy PMPM</option>
            </select>
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">PMPM Trends (12 Months)</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Interactive charts showing PMPM trends with zoom and pan functionality
            </p>
          </div>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              {chartType === 'line' ? (
                <LineChart data={filteredTrendsData}>
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
                  <Legend />
                  {selectedMetric === 'all' && (
                    <>
                      <Line type="monotone" dataKey="totalPMPM" stroke={chartColors.primary} strokeWidth={3} name="Total PMPM" />
                      <Line type="monotone" dataKey="riskAdjusted" stroke={chartColors.secondary} strokeWidth={3} name="Risk Adjusted" />
                      <Line type="monotone" dataKey="medical" stroke={chartColors.tertiary} strokeWidth={3} name="Medical PMPM" />
                      <Line type="monotone" dataKey="pharmacy" stroke={chartColors.quaternary} strokeWidth={3} name="Pharmacy PMPM" />
                    </>
                  )}
                  {selectedMetric !== 'all' && (
                    <Line 
                      type="monotone" 
                      dataKey={selectedMetric} 
                      stroke={chartColors.primary} 
                      strokeWidth={3} 
                      name={selectedMetric}
                    />
                  )}
                </LineChart>
              ) : chartType === 'area' ? (
                <AreaChart data={filteredTrendsData}>
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
                  <Legend />
                  {selectedMetric === 'all' && (
                    <>
                      <Area type="monotone" dataKey="totalPMPM" stackId="1" stroke={chartColors.primary} fill={chartColors.primary} fillOpacity={0.6} name="Total PMPM" />
                      <Area type="monotone" dataKey="riskAdjusted" stackId="2" stroke={chartColors.secondary} fill={chartColors.secondary} fillOpacity={0.6} name="Risk Adjusted" />
                      <Area type="monotone" dataKey="medical" stackId="3" stroke={chartColors.tertiary} fill={chartColors.tertiary} fillOpacity={0.6} name="Medical PMPM" />
                      <Area type="monotone" dataKey="pharmacy" stackId="4" stroke={chartColors.quaternary} fill={chartColors.quaternary} fillOpacity={0.6} name="Pharmacy PMPM" />
                    </>
                  )}
                  {selectedMetric !== 'all' && (
                    <Area 
                      type="monotone" 
                      dataKey={selectedMetric} 
                      stroke={chartColors.primary} 
                      fill={chartColors.primary} 
                      fillOpacity={0.6} 
                      name={selectedMetric}
                    />
                  )}
                </AreaChart>
              ) : (
                <BarChart data={filteredTrendsData}>
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
                  <Legend />
                  {selectedMetric === 'all' && (
                    <>
                      <Bar dataKey="totalPMPM" fill={chartColors.primary} name="Total PMPM" />
                      <Bar dataKey="riskAdjusted" fill={chartColors.secondary} name="Risk Adjusted" />
                      <Bar dataKey="medical" fill={chartColors.tertiary} name="Medical PMPM" />
                      <Bar dataKey="pharmacy" fill={chartColors.quaternary} name="Pharmacy PMPM" />
                    </>
                  )}
                  {selectedMetric !== 'all' && (
                    <Bar dataKey={selectedMetric} fill={chartColors.primary} name={selectedMetric} />
                  )}
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Benchmark Comparisons Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Benchmark Comparisons
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
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Industry Benchmark Analysis</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Performance indicators against industry standards and percentile rankings
            </p>
          </div>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={benchmarkData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
                <XAxis type="number" stroke={chartColors.text} />
                <YAxis dataKey="metric" type="category" stroke={chartColors.text} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: chartColors.background, 
                    border: `1px solid ${chartColors.grid}`,
                    borderRadius: '8px',
                    color: chartColors.text
                  }} 
                />
                <Legend />
                <Bar dataKey="current" fill={chartColors.primary} name="Current" />
                <Bar dataKey="benchmark" fill={chartColors.secondary} name="Benchmark" />
                <Bar dataKey="industry" fill={chartColors.tertiary} name="Industry Avg" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benchmarkData.map((item) => (
              <div key={item.metric} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">{item.metric}</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Current:</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">${item.current}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Benchmark:</span>
                    <span className="text-gray-700 dark:text-gray-300">${item.benchmark}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Percentile:</span>
                    <span className="font-medium text-green-600 dark:text-green-400">{item.percentile}th</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Cost Drivers Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Key Cost Drivers
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
            <NavLink 
              to="/clinical-metrics" 
              className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex items-center"
            >
              Clinical Context
              <ChevronRight className="h-4 w-4 ml-1" />
            </NavLink>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {costDriversData.map((driver) => {
            const IconComponent = driver.icon;
            return (
              <div key={driver.metric} className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                    <IconComponent className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-medium ${
                      driver.change < 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                    }`}>
                      {driver.change > 0 ? '+' : ''}{driver.change.toFixed(1)}%
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {driver.trend === 'down' ? '↓' : '↑'} vs prev
                    </div>
                  </div>
                </div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1">{driver.metric}</h3>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{driver.current}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{driver.description}</p>
                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 dark:text-gray-400">Benchmark:</span>
                    <span className="text-gray-700 dark:text-gray-300">{driver.benchmark}</span>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-gray-500 dark:text-gray-400">Previous:</span>
                    <span className="text-gray-700 dark:text-gray-300">{driver.previous}</span>
                  </div>
                </div>
              </div>
            );
          })}
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
                <p className="text-sm text-gray-600 dark:text-gray-400">Identify cost reduction opportunities</p>
              </div>
            </div>
            <div className="text-sm text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300 flex items-center">
              View Analysis <ChevronRight className="h-4 w-4 ml-1" />
            </div>
          </NavLink>

          <NavLink 
            to="/clinical-metrics" 
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors">
                <Heart className="h-6 w-6 text-green-600 dark:text-green-400" />
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
            to="/behavior-drivers" 
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors">
                <Activity className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Behavior Analytics</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Behavioral cost driver insights</p>
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

export default FinancialMetrics;
