import { DollarSign, Target, RefreshCw, Moon, Sun, Download, FileText, BarChart3, Users, Activity, Heart, Pill, Calendar, Filter, ChevronRight, Home } from 'lucide-react';
import { useState, useMemo } from 'react';
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
import { NavLink } from 'react-router-dom';

const FinancialMetrics = () => {
  const [dateRange, setDateRange] = useState<'1m' | '3m' | '6m' | '1y'>('6m');
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(false); // Default to light mode
  const [selectedMetric, setSelectedMetric] = useState<string>('all');
  const [chartType, setChartType] = useState<'line' | 'area' | 'bar'>('line');
  
  // PMPM Dashboard Data
  const pmpmData = [
    {
      title: 'Total Cost of Care PMPM',
      value: '$485.32',
      change: '-3.2%',
      changeType: 'positive' as const,
      icon: DollarSign,
      description: 'Per Member Per Month total cost',
      trend: 'down',
      benchmark: '$520.00',
      percentile: 75
    },
    {
      title: 'Risk Adjusted PMPM',
      value: '$412.18',
      change: '-5.1%',
      changeType: 'positive' as const,
      icon: Target,
      description: 'Risk-adjusted cost per member',
      trend: 'down',
      benchmark: '$450.00',
      percentile: 80
    },
    {
      title: 'Medical PMPM (Mx)',
      value: '$298.45',
      change: '-2.8%',
      changeType: 'positive' as const,
      icon: Heart,
      description: 'Medical services cost per member',
      trend: 'down',
      benchmark: '$320.00',
      percentile: 70
    },
    {
      title: 'Pharmacy PMPM (Rx)',
      value: '$186.87',
      change: '-4.5%',
      changeType: 'positive' as const,
      icon: Pill,
      description: 'Pharmacy cost per member',
      trend: 'down',
      benchmark: '$200.00',
      percentile: 85
    },
  ];

  // Historical PMPM Trends Data (12 months)
  const historicalTrendsData = [
    { month: 'Jan', totalPMPM: 520, riskAdjusted: 450, medical: 320, pharmacy: 200 },
    { month: 'Feb', totalPMPM: 515, riskAdjusted: 445, medical: 318, pharmacy: 197 },
    { month: 'Mar', totalPMPM: 510, riskAdjusted: 440, medical: 315, pharmacy: 195 },
    { month: 'Apr', totalPMPM: 505, riskAdjusted: 435, medical: 312, pharmacy: 193 },
    { month: 'May', totalPMPM: 500, riskAdjusted: 430, medical: 310, pharmacy: 190 },
    { month: 'Jun', totalPMPM: 495, riskAdjusted: 425, medical: 308, pharmacy: 187 },
    { month: 'Jul', totalPMPM: 490, riskAdjusted: 420, medical: 305, pharmacy: 185 },
    { month: 'Aug', totalPMPM: 488, riskAdjusted: 418, medical: 303, pharmacy: 185 },
    { month: 'Sep', totalPMPM: 485, riskAdjusted: 415, medical: 300, pharmacy: 185 },
    { month: 'Oct', totalPMPM: 483, riskAdjusted: 413, medical: 299, pharmacy: 184 },
    { month: 'Nov', totalPMPM: 484, riskAdjusted: 414, medical: 299, pharmacy: 185 },
    { month: 'Dec', totalPMPM: 485, riskAdjusted: 412, medical: 298, pharmacy: 187 },
  ];

  // Benchmark Comparison Data
  const benchmarkData = [
    { metric: 'Total PMPM', current: 485, benchmark: 520, industry: 550, percentile: 75 },
    { metric: 'Risk Adjusted', current: 412, benchmark: 450, industry: 480, percentile: 80 },
    { metric: 'Medical PMPM', current: 298, benchmark: 320, industry: 340, percentile: 70 },
    { metric: 'Pharmacy PMPM', current: 187, benchmark: 200, industry: 220, percentile: 85 },
  ];

  // Key Cost Drivers Data
  const costDriversData = [
    {
      metric: 'Admissions per 1000',
      current: 45.2,
      previous: 48.1,
      change: -6.0,
      benchmark: 50.0,
      trend: 'down',
      icon: Activity,
      description: 'Hospital admissions per 1000 members'
    },
    {
      metric: 'Avoidable Admissions per 1000',
      current: 8.3,
      previous: 9.2,
      change: -9.8,
      benchmark: 12.0,
      trend: 'down',
      icon: Target,
      description: 'Preventable hospital admissions'
    },
    {
      metric: 'ED Visits per 1000',
      current: 125.4,
      previous: 128.7,
      change: -2.6,
      benchmark: 140.0,
      trend: 'down',
      icon: Heart,
      description: 'Emergency department visits'
    },
    {
      metric: 'Preventable ED Visits',
      current: 18.6,
      previous: 20.1,
      change: -7.5,
      benchmark: 25.0,
      trend: 'down',
      icon: Target,
      description: 'Avoidable emergency visits'
    },
    {
      metric: 'Generic Drug Utilization',
      current: 78.5,
      previous: 76.2,
      change: 3.0,
      benchmark: 75.0,
      trend: 'up',
      icon: Pill,
      description: 'Percentage of generic prescriptions'
    },
    {
      metric: 'Drug Pickup Rate',
      current: 89.2,
      previous: 87.8,
      change: 1.6,
      benchmark: 85.0,
      trend: 'up',
      icon: Pill,
      description: 'Medication adherence rate'
    },
    {
      metric: 'Annual Wellness Visit Participation',
      current: 72.3,
      previous: 69.8,
      change: 3.6,
      benchmark: 70.0,
      trend: 'up',
      icon: Calendar,
      description: 'Preventive care participation'
    },
    {
      metric: 'Out of Network Utilization',
      current: 5.2,
      previous: 6.1,
      change: -14.8,
      benchmark: 8.0,
      trend: 'down',
      icon: Users,
      description: 'Out-of-network service usage'
    },
  ];

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
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
  }, [selectedMetric]);


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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Financial Metrics</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Comprehensive PMPM analysis and cost driver insights
          </p>
        </div>
        
        {/* Controls */}
        <div className="flex items-center gap-4">
          {/* Date Range Selector */}
          <div className="flex bg-white dark:bg-gray-900 rounded-lg p-1 border border-gray-200 dark:border-gray-800">
            {(['1m', '3m', '6m', '1y'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setDateRange(range)}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
                  dateRange === range
                    ? "bg-green-500 text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
                }`}
              >
                {range.toUpperCase()}
              </button>
            ))}
          </div>
          
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
            onClick={() => setIsDark(!isDark)}
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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">PMPM Dashboard</h2>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Historical Trends</h2>
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
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Benchmark Comparisons</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Cost Drivers</h2>
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
