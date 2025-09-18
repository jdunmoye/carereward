import React, { useState, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Activity, 
  Heart, 
  Users, 
  TrendingUp, 
  Target, 
  Award, 
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
  Search,
  ArrowUpDown,
  MapPin,
  Pill,
  Stethoscope,
  Brain,
  Zap,
  Shield
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';
import { boroughData, BoroughData } from '../data/boroughData';

const ClinicalMetrics: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Last 3 Months');
  const [comparisonType, setComparisonType] = useState('Last year same quarter');
  const [selectedBorough, setSelectedBorough] = useState('New York');
  const [lastRefresh, setLastRefresh] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<'name' | 'frequency'>('frequency');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const { isDark, toggleTheme } = useTheme();

  // Get data for selected borough
  const currentBoroughData: BoroughData = boroughData[selectedBorough];
  const { geographicDistribution } = currentBoroughData;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
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

  // Clinical Data - Dynamic based on borough
  const clinicalData = [
    {
      title: 'Patient Satisfaction',
      value: '92.1%',
      change: '+2.1%',
      changeType: 'positive' as const,
      icon: Heart,
      description: 'Overall patient satisfaction score',
    },
    {
      title: 'Readmission Rate',
      value: '8.3%',
      change: '-1.2%',
      changeType: 'positive' as const,
      icon: TrendingUp,
      description: '30-day readmission rate',
    },
    {
      title: 'Quality Score',
      value: '92.0%',
      change: '+3.4%',
      changeType: 'positive' as const,
      icon: Award,
      description: 'Composite quality metric',
    },
    {
      title: 'Safety Incidents',
      value: '12',
      change: '-4',
      changeType: 'positive' as const,
      icon: Activity,
      description: 'Reportable safety events',
    },
  ];

  // Enhanced Chronic Conditions Data with icons and detailed info
  const chronicConditionsData = [
    { name: 'Hypertension (High Blood Pressure)', frequency: 28.3, memberCount: 6617, pmpmCost: 142.75, trend: 'up', changePercent: 1.8, icon: Heart, color: '#ef4444' },
    { name: 'Diabetes Mellitus (Type 2)', frequency: 12.5, memberCount: 2923, pmpmCost: 185.50, trend: 'up', changePercent: 2.3, icon: Pill, color: '#f59e0b' },
    { name: 'High Cholesterol (Hyperlipidemia)', frequency: 18.7, memberCount: 4373, pmpmCost: 98.25, trend: 'stable', changePercent: 0.5, icon: Heart, color: '#3b82f6' },
    { name: 'Coronary Heart Failure (CHF)', frequency: 4.2, memberCount: 982, pmpmCost: 425.75, trend: 'down', changePercent: -0.8, icon: Heart, color: '#dc2626' },
    { name: 'Chronic Kidney Disease (CKD)', frequency: 6.8, memberCount: 1590, pmpmCost: 325.50, trend: 'up', changePercent: 1.2, icon: Shield, color: '#8b5cf6' },
    { name: 'COPD', frequency: 6.2, memberCount: 1450, pmpmCost: 245.80, trend: 'stable', changePercent: 0.1, icon: Zap, color: '#06b6d4' },
    { name: 'Cancer (various types)', frequency: 3.8, memberCount: 889, pmpmCost: 875.25, trend: 'up', changePercent: 2.1, icon: Stethoscope, color: '#ec4899' },
    { name: 'Serious Mental Illness', frequency: 8.9, memberCount: 2081, pmpmCost: 198.75, trend: 'up', changePercent: 3.2, icon: Brain, color: '#10b981' },
  ];

  // Multi-Chronicity Analysis Data
  const multiChronicityData = [
    { conditions: '1', frequency: 35.2, memberCount: 8231, pmpmCost: 285.50, color: '#10b981' },
    { conditions: '2', frequency: 28.7, memberCount: 6711, pmpmCost: 485.75, color: '#3b82f6' },
    { conditions: '3', frequency: 18.3, memberCount: 4279, pmpmCost: 685.25, color: '#f59e0b' },
    { conditions: '3+', frequency: 17.8, memberCount: 4162, pmpmCost: 985.50, color: '#ef4444' },
  ];

  // Age Distribution Data - Enhanced (removed 0-1 years for compact layout)
  const ageDistributionData = [
    { ageRange: '2-18', memberCount: 1871, averagePMPM: 185.25, chronicConditionRate: 5.8, topConditions: ['Asthma', 'ADHD'] },
    { ageRange: '18-29', memberCount: 5144, averagePMPM: 285.50, chronicConditionRate: 8.2, topConditions: ['Depression', 'Hypertension'] },
    { ageRange: '30-39', memberCount: 4676, averagePMPM: 425.75, chronicConditionRate: 18.5, topConditions: ['Hypertension', 'Diabetes'] },
    { ageRange: '40-49', memberCount: 3508, averagePMPM: 525.25, chronicConditionRate: 28.8, topConditions: ['Hypertension', 'Diabetes'] },
    { ageRange: '50-59', memberCount: 2338, averagePMPM: 725.25, chronicConditionRate: 45.2, topConditions: ['Hypertension', 'Heart Disease'] },
    { ageRange: '60+', memberCount: 4676, averagePMPM: 985.50, chronicConditionRate: 68.2, topConditions: ['Hypertension', 'Heart Disease'] },
  ];

  // Filtered and sorted chronic conditions data
  const filteredChronicConditions = useMemo(() => {
    let filtered = chronicConditionsData.filter(condition =>
      condition.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filtered.sort((a, b) => {
      const aValue = sortField === 'name' ? a.name : a.frequency;
      const bValue = sortField === 'name' ? b.name : b.frequency;
      
      if (sortDirection === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [searchTerm, sortField, sortDirection]);

  const handleSort = (field: 'name' | 'frequency') => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
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
        <span className="text-gray-900 dark:text-gray-100 font-medium">Clinical Metrics</span>
      </nav>

      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Clinical Metrics
            {selectedBorough !== 'New York' && (
              <span className="text-xl text-green-600 dark:text-green-400 ml-3">
                - {selectedBorough}
              </span>
            )}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Monitor patient outcomes, quality scores, and clinical performance indicators
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

      {/* Clinical Metrics Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Key Clinical Metrics
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
          {clinicalData.map((metric) => {
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
                      vs last quarter
                    </div>
                  </div>
                </div>
                <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">{metric.title}</h3>
                <p className="text-2xl font-bold text-green-900 dark:text-green-100">{metric.value}</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">{metric.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Chronic Conditions Distribution Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Chronic Conditions Distribution
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
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Chronic Condition Analysis</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Interactive table showing chronic condition prevalence and associated costs
            </p>
          </div>
          
          {/* Search and Filter Controls */}
          <div className="mb-6 flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search conditions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
          
          {/* Interactive Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4">
                    <button
                      onClick={() => handleSort('name')}
                      className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400"
                    >
                      Chronic Diagnosis
                      <ArrowUpDown className="h-4 w-4" />
                    </button>
                  </th>
                  <th className="text-right py-3 px-4">
                    <button
                      onClick={() => handleSort('frequency')}
                      className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 ml-auto"
                    >
                      % Frequency
                      <ArrowUpDown className="h-4 w-4" />
                    </button>
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-900 dark:text-gray-100">Members</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-900 dark:text-gray-100">PMPM Cost</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-900 dark:text-gray-100">Trend</th>
                </tr>
              </thead>
              <tbody>
                {filteredChronicConditions.map((condition, index) => {
                  const IconComponent = condition.icon;
                  return (
                    <tr key={index} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg" style={{ backgroundColor: `${condition.color}20` }}>
                            <IconComponent className="h-5 w-5" style={{ color: condition.color }} />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-gray-100">{condition.name}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Click for detailed analysis</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">{condition.frequency}%</span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className="text-gray-900 dark:text-gray-100">{formatNumber(condition.memberCount)}</span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className="text-gray-900 dark:text-gray-100">{formatCurrency(condition.pmpmCost)}</span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <span className={`text-sm font-medium ${
                            condition.trend === 'up' ? 'text-red-600 dark:text-red-400' : 
                            condition.trend === 'down' ? 'text-green-600 dark:text-green-400' : 
                            'text-gray-600 dark:text-gray-400'
                          }`}>
                            {condition.changePercent > 0 ? '+' : ''}{condition.changePercent}%
                          </span>
                          <TrendingUp className={`h-4 w-4 ${
                            condition.trend === 'down' ? 'rotate-180 text-green-600 dark:text-green-400' : 
                            condition.trend === 'up' ? 'text-red-600 dark:text-red-400' : 
                            'text-gray-600 dark:text-gray-400'
                          }`} />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Multi-Chronicity Analysis Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Multi-Chronicity Analysis
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Multi-Chronicity Bar Chart */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Condition Distribution</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Distribution of members by number of chronic conditions
              </p>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={multiChronicityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
                  <XAxis dataKey="conditions" stroke={chartColors.text} />
                  <YAxis stroke={chartColors.text} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: chartColors.background, 
                      border: `1px solid ${chartColors.grid}`,
                      borderRadius: '8px',
                      color: chartColors.text
                    }} 
                  />
                  <Bar dataKey="frequency" fill={chartColors.primary} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Multi-Chronicity Cost Analysis */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Cost Impact Analysis</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                PMPM costs associated with multiple chronic conditions
              </p>
            </div>
            <div className="space-y-4">
              {multiChronicityData.map((item, index) => (
                <div key={index} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">
                      {item.conditions} {item.conditions === '1' ? 'Condition' : 'Conditions'}
                    </h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{item.frequency}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Members:</span>
                    <span className="text-gray-900 dark:text-gray-100">{formatNumber(item.memberCount)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">PMPM Cost:</span>
                    <span className="text-gray-900 dark:text-gray-100">{formatCurrency(item.pmpmCost)}</span>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-500" 
                      style={{ 
                        width: `${(item.frequency / Math.max(...multiChronicityData.map(d => d.frequency))) * 100}%`,
                        backgroundColor: item.color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Age Distribution Analysis Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Age Distribution Analysis
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
              View Behavior Analytics
              <ChevronRight className="h-4 w-4 ml-1" />
            </NavLink>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Age Distribution Chart */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Age Group Distribution</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Member distribution and PMPM costs by age groups
              </p>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ageDistributionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
                  <XAxis dataKey="ageRange" stroke={chartColors.text} />
                  <YAxis stroke={chartColors.text} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: chartColors.background, 
                      border: `1px solid ${chartColors.grid}`,
                      borderRadius: '8px',
                      color: chartColors.text
                    }} 
                  />
                  <Bar dataKey="memberCount" fill={chartColors.primary} name="Members" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Age Group Details - Compact 3-card layout */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Age Group Analysis</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Detailed breakdown of chronic conditions and costs by age
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {ageDistributionData.map((ageGroup, index) => (
                <div key={index} className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm">{ageGroup.ageRange} years</h4>
                    <span className="text-xs text-gray-600 dark:text-gray-400">{ageGroup.chronicConditionRate}% chronic</span>
                  </div>
                  <div className="mb-2 flex-1">
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                      <span>Members</span>
                      <span>{formatNumber(ageGroup.memberCount)}</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                      <span>PMPM</span>
                      <span>{formatCurrency(ageGroup.averagePMPM)}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-green-600 h-1.5 rounded-full transition-all duration-500" 
                        style={{ width: `${Math.min(ageGroup.chronicConditionRate * 1.5, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Top: </span>
                    <span className="truncate block" title={ageGroup.topConditions.join(', ')}>
                      {ageGroup.topConditions.join(', ')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Population Location Distribution Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Population Location Distribution
            {selectedBorough !== 'New York' && (
              <span className="text-lg text-green-600 dark:text-green-400 ml-2">
                - {selectedBorough}
              </span>
            )}
          </h2>
          <div className="flex items-center gap-4">
            <NavLink 
              to="/current-situation" 
              className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex items-center"
            >
              View Geographic Analysis
              <ChevronRight className="h-4 w-4 ml-1" />
            </NavLink>
          </div>
        </div>
        
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Geographic Distribution</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Member distribution and health status across NYC boroughs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {geographicDistribution.map((location, index) => (
              <div key={index} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">{location.location}</h4>
                </div>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Members:</span>
                    <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">{formatNumber(location.memberCount)}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600 dark:text-gray-400">PMPM:</span>
                    <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">{formatCurrency(location.averagePMPM)}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Chronic Rate:</span>
                    <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">{location.chronicConditionRate}%</span>
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Top:</span> {location.topConditions.slice(0, 2).join(', ')}
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
                <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Behavior Analytics</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Behavioral health insights</p>
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

export default ClinicalMetrics;
