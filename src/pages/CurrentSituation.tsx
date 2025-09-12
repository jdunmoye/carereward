import React, { useState } from 'react';
import { Badge } from '../components/ui/Badge';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  MapPin, 
  Download,
  RefreshCw,
  Minus,
  BarChart3,
  Moon,
  Sun,
  Home,
  ChevronRight,
  FileText,
  Filter
} from 'lucide-react';
import { 
  mockCurrentSituationData,
  mockCurrentSituationChronicConditions,
  mockCurrentSituationAgeDistribution,
  mockCurrentSituationGeographicDistribution,
  mockCurrentSituationCostDrivers
} from '../data/currentSituation';

const CurrentSituation: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Last 3 Months');
  const [lastRefresh, setLastRefresh] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const { costMetrics } = mockCurrentSituationData;
  const chronicConditions = mockCurrentSituationChronicConditions;
  const ageDistribution = mockCurrentSituationAgeDistribution;
  const geographicDistribution = mockCurrentSituationGeographicDistribution;
  const costDrivers = mockCurrentSituationCostDrivers;

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

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-red-500" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-green-500" />;
      default:
        return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const getTrendColor = (trend: 'up' | 'down' | 'stable', isCost = false) => {
    if (isCost) {
      return trend === 'up' ? 'text-red-500' : trend === 'down' ? 'text-green-500' : 'text-gray-500';
    }
    return trend === 'up' ? 'text-green-500' : trend === 'down' ? 'text-red-500' : 'text-gray-500';
  };

  const getImpactColor = (impact: 'high' | 'medium' | 'low') => {
    switch (impact) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-green-100 text-green-800 border-green-200';
    }
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

  return (
    <div className="space-y-6">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
        <NavLink to="/dashboard" className="flex items-center hover:text-green-600 dark:hover:text-green-400 transition-colors">
          <Home className="h-4 w-4 mr-1" />
          Dashboard
        </NavLink>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900 dark:text-gray-100 font-medium">Current Situation</span>
      </nav>

      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Current Situation Overview</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Comprehensive analysis of current cost drivers and member health status
          </p>
        </div>
        
        {/* Controls */}
        <div className="flex items-center gap-4">
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
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
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

      {/* Key Metrics Dashboard Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Cost Metrics</h2>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Last updated: {lastRefresh.toLocaleString()}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          <div className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-red-600 dark:text-red-400">
                  +2.3%
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  ↑ vs prev
                </div>
              </div>
            </div>
            <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">Cost of Care PMPM</h3>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">{formatCurrency(costMetrics.currentCostOfCarePMPM)}</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">Per Member Per Month total cost</p>
            <div className="mt-3 pt-3 border-t border-green-200 dark:border-green-700">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500 dark:text-gray-400">Benchmark:</span>
                <span className="text-gray-700 dark:text-gray-300">$520.00</span>
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span className="text-gray-500 dark:text-gray-400">Percentile:</span>
                <span className="text-green-600 dark:text-green-400 font-medium">75th</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                <Activity className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-red-600 dark:text-red-400">
                  +1.8%
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  ↑ vs prev
                </div>
              </div>
            </div>
            <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">Risk Adjusted PMPM</h3>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">{formatCurrency(costMetrics.riskAdjustedPMPM)}</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">Risk-adjusted cost per member</p>
            <div className="mt-3 pt-3 border-t border-green-200 dark:border-green-700">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500 dark:text-gray-400">Benchmark:</span>
                <span className="text-gray-700 dark:text-gray-300">$450.00</span>
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span className="text-gray-500 dark:text-gray-400">Percentile:</span>
                <span className="text-green-600 dark:text-green-400 font-medium">80th</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-red-600 dark:text-red-400">
                  +2.1%
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  ↑ vs prev
                </div>
              </div>
            </div>
            <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">Medical PMPM</h3>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">{formatCurrency(costMetrics.medicalPMPM)}</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">Medical services cost per member</p>
            <div className="mt-3 pt-3 border-t border-green-200 dark:border-green-700">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500 dark:text-gray-400">Benchmark:</span>
                <span className="text-gray-700 dark:text-gray-300">$320.00</span>
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span className="text-gray-500 dark:text-gray-400">Percentile:</span>
                <span className="text-green-600 dark:text-green-400 font-medium">70th</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                <Activity className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-green-600 dark:text-green-400">
                  -0.8%
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  ↓ vs prev
                </div>
              </div>
            </div>
            <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">Pharmacy PMPM</h3>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">{formatCurrency(costMetrics.pharmacyPMPM)}</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">Pharmacy cost per member</p>
            <div className="mt-3 pt-3 border-t border-green-200 dark:border-green-700">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500 dark:text-gray-400">Benchmark:</span>
                <span className="text-gray-700 dark:text-gray-300">$200.00</span>
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span className="text-gray-500 dark:text-gray-400">Percentile:</span>
                <span className="text-green-600 dark:text-green-400 font-medium">85th</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-red-600 dark:text-red-400">
                  +3.2%
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  ↑ vs prev
                </div>
              </div>
            </div>
            <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">Total Pool Spending</h3>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">{formatCurrency(costMetrics.totalPoolSpending)}</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">Total spending for selected period</p>
            <div className="mt-3 pt-3 border-t border-green-200 dark:border-green-700">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500 dark:text-gray-400">Period:</span>
                <span className="text-gray-700 dark:text-gray-300">{selectedPeriod}</span>
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span className="text-gray-500 dark:text-gray-400">Members:</span>
                <span className="text-green-600 dark:text-green-400 font-medium">{formatNumber(costMetrics.activeMembership)}</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                <Activity className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-green-600 dark:text-green-400">
                  Stable
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Risk Level
                </div>
              </div>
            </div>
            <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">Risk Score</h3>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">{costMetrics.riskScore}</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">Population risk assessment</p>
            <div className="mt-3 pt-3 border-t border-green-200 dark:border-green-700">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500 dark:text-gray-400">Target:</span>
                <span className="text-gray-700 dark:text-gray-300">1.0</span>
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span className="text-gray-500 dark:text-gray-400">Status:</span>
                <span className="text-yellow-600 dark:text-yellow-400 font-medium">Above Target</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chronic Conditions Analysis Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Chronic Conditions Analysis</h2>
          <div className="flex items-center gap-4">
            <NavLink 
              to="/clinical-metrics" 
              className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex items-center"
            >
              View Clinical Metrics
              <ChevronRight className="h-4 w-4 ml-1" />
            </NavLink>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chronic Diagnosis Overview */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Chronic Conditions Impact</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Analysis of chronic conditions and their associated PMPM costs
              </p>
            </div>
            <div className="space-y-4">
              {chronicConditions.map((condition, index) => (
                <div key={index} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">{condition.name}</h4>
                    <div className="flex items-center gap-2">
                      {getTrendIcon(condition.trend)}
                      <span className={`text-sm ${getTrendColor(condition.trend)}`}>
                        {condition.changePercent > 0 ? '+' : ''}{condition.changePercent}%
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <span>{condition.frequency}% ({formatNumber(condition.memberCount)} members)</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">{formatCurrency(condition.pmpmCost)} PMPM</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${Math.min(condition.frequency * 2, 100)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Age Distribution Analysis */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Age Distribution of Chronic Conditions</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Chronic condition prevalence and costs by age groups
              </p>
            </div>
            <div className="space-y-4">
              {ageDistribution.map((ageGroup, index) => (
                <div key={index} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">{ageGroup.ageRange} years</h4>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{formatNumber(ageGroup.memberCount)} members</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{formatCurrency(ageGroup.averagePMPM)} PMPM</p>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <span>Chronic Condition Rate</span>
                      <span>{ageGroup.chronicConditionRate}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-500" 
                        style={{ width: `${Math.min(ageGroup.chronicConditionRate * 1.5, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Top conditions: </span>
                    {ageGroup.topConditions.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Geographic Distribution Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Geographic Distribution</h2>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Member Locations and Health Status</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Geographic analysis of member distribution and chronic condition prevalence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {geographicDistribution.map((location, index) => (
              <div key={index} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">{location.location}</h4>
                  <Badge variant="info" className="text-xs">{location.state}</Badge>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Members:</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">{formatNumber(location.memberCount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Chronic Rate:</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">{location.chronicConditionRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Avg PMPM:</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">{formatCurrency(location.averagePMPM)}</span>
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    <span className="font-medium">Top: </span>
                    {location.topConditions.slice(0, 2).join(', ')}
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
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {costDrivers.map((driver, index) => (
            <div key={index} className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                  <Activity className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-right">
                  <div className={`text-sm font-medium ${
                    driver.changePercent < 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    {driver.changePercent > 0 ? '+' : ''}{driver.changePercent}%
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {driver.trend === 'down' ? '↓' : '↑'} vs prev
                  </div>
                </div>
              </div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1">{driver.name}</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{driver.value}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{driver.unit}</p>
              <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500 dark:text-gray-400">Target:</span>
                  <span className="text-gray-700 dark:text-gray-300">{driver.target} {driver.unit}</span>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span className="text-gray-500 dark:text-gray-400">Impact:</span>
                  <span className={`font-medium ${getImpactColor(driver.impact)}`}>
                    {driver.impact}
                  </span>
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
                <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Financial Metrics</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Detailed PMPM analysis and trends</p>
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
                <Activity className="h-6 w-6 text-green-600 dark:text-green-400" />
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
                <BarChart3 className="h-6 w-6 text-green-600 dark:text-green-400" />
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

export default CurrentSituation;