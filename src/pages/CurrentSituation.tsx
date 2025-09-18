import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import NYCMap from '../components/NYCMap';
import NYCMapFallback from '../components/NYCMapFallback';

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
  Filter,
  ChevronDown
} from 'lucide-react';
// Note: Using borough-specific data instead of mock data
import { boroughData, BoroughData } from '../data/boroughData';

// NYC Interactive Map Wrapper Component with fallback
const NYCInteractiveMap: React.FC<{ geographicData: any[] }> = ({ geographicData }) => {
  // Try to render the Leaflet map, fallback to SVG if it fails
  try {
    return <NYCMap geographicData={geographicData} />;
  } catch (error) {
    console.warn('Leaflet map failed to load, using fallback:', error);
    return <NYCMapFallback geographicData={geographicData} />;
  }
};

const CurrentSituation: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Last 3 Months');
  const [comparisonType, setComparisonType] = useState('Last year same quarter');
  const [selectedBorough, setSelectedBorough] = useState('New York');
  const [lastRefresh, setLastRefresh] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  // Get data for selected borough
  const currentBoroughData: BoroughData = boroughData[selectedBorough];
  const { costMetrics } = currentBoroughData;
  const chronicConditions = currentBoroughData.chronicConditions;
  const ageDistribution = currentBoroughData.ageDistribution;
  const geographicDistribution = currentBoroughData.geographicDistribution;
  const costDrivers = currentBoroughData.costDrivers;

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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Current Situation Overview
            {selectedBorough !== 'New York' && (
              <span className="text-xl text-green-600 dark:text-green-400 ml-3">
                - {selectedBorough}
              </span>
            )}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Comprehensive analysis of current cost drivers and member health status
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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Key Cost Metrics
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
        </div>
      </div>

      {/* Forward-Looking Predictors Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Forward-Looking Predictors
            {selectedBorough !== 'New York' && (
              <span className="text-lg text-green-600 dark:text-green-400 ml-2">
                - {selectedBorough}
              </span>
            )}
          </h2>
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Age Distribution Analysis - Card Layout */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 shadow-sm h-full flex flex-col">
            <div className="mb-4">
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">Age Distribution of Chronic Conditions</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Chronic condition prevalence and costs by age groups
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 flex-1">
              {ageDistribution.map((ageGroup, index) => (
                <div key={index} className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm">{ageGroup.ageRange} years</h4>
                    <div className="text-right">
                      <p className="text-xs font-medium text-gray-900 dark:text-gray-100">{formatNumber(ageGroup.memberCount)}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{formatCurrency(ageGroup.averagePMPM)}</p>
                    </div>
                  </div>
                  <div className="mb-2 flex-1">
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                      <span>Chronic Rate</span>
                      <span>{ageGroup.chronicConditionRate}%</span>
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
                    <span className="truncate block" title={ageGroup.topConditions.slice(0, 2).join(', ')}>
                      {ageGroup.topConditions.slice(0, 2).join(', ')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Geographic Distribution - Map View - Compact */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 shadow-sm h-full flex flex-col">
            <div className="mb-4">
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">NYC Borough Distribution</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Member distribution and health status across NYC boroughs
              </p>
            </div>
            
            {/* Interactive NYC Borough Map - Reduced height */}
            <div className="mb-3 flex-1">
              <NYCInteractiveMap geographicData={geographicDistribution} />
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              {geographicDistribution.map((location, index) => (
                <div key={index} className="p-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200">
                  <div className="flex items-center gap-1 mb-2">
                    <MapPin className="w-3 h-3 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 text-xs truncate">{location.location}</h4>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-medium text-gray-900 dark:text-gray-100">
                      {formatNumber(location.memberCount)}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {formatCurrency(location.averagePMPM)}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {location.chronicConditionRate}% chronic
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 truncate" title={location.topConditions.slice(0, 2).join(', ')}>
                      {location.topConditions.slice(0, 2).join(', ')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* Analysis Grid Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Analysis Overview
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Chronic Conditions */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 shadow-sm h-full flex flex-col">
            <div className="mb-4">
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">Chronic Conditions</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Analysis of chronic conditions and their associated PMPM costs
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 flex-1">
              {chronicConditions.slice(0, 4).map((condition, index) => (
                <div key={index} className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 text-xs">{condition.name}</h4>
                    <div className="flex items-center gap-1">
                      {getTrendIcon(condition.trend)}
                      <span className={`text-xs ${getTrendColor(condition.trend)}`}>
                        {condition.changePercent > 0 ? '+' : ''}{condition.changePercent}%
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                      {condition.frequency}% ({formatNumber(condition.memberCount)})
                    </div>
                    <div className="text-xs font-medium text-gray-900 dark:text-gray-100">
                      {formatCurrency(condition.pmpmCost)} PMPM
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
              <button className="text-xs text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex items-center gap-1">
                <span>View All Conditions</span>
                <ChevronRight className="h-3 w-3" />
              </button>
            </div>
          </div>

          {/* Testing Compliance */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 shadow-sm h-full flex flex-col">
            <div className="mb-4">
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">Testing Compliance</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Preventive care and testing compliance rates
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 flex-1">
              <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 text-xs">Annual Wellness</h4>
                  <span className="text-xs text-green-600 dark:text-green-400">+3.5%</span>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Current: 65.2%</div>
                  <div className="text-xs font-medium text-gray-900 dark:text-gray-100">Target: 75.0%</div>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 text-xs">HbA1c Testing</h4>
                  <span className="text-xs text-green-600 dark:text-green-400">+2.1%</span>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Current: 78.5%</div>
                  <div className="text-xs font-medium text-gray-900 dark:text-gray-100">Target: 85.0%</div>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 text-xs">Mammography</h4>
                  <span className="text-xs text-red-600 dark:text-red-400">-1.2%</span>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Current: 68.3%</div>
                  <div className="text-xs font-medium text-gray-900 dark:text-gray-100">Target: 75.0%</div>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 text-xs">Colonoscopy</h4>
                  <span className="text-xs text-green-600 dark:text-green-400">+1.8%</span>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Current: 72.1%</div>
                  <div className="text-xs font-medium text-gray-900 dark:text-gray-100">Target: 80.0%</div>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
              <button className="text-xs text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex items-center gap-1">
                <span>View All Tests</span>
                <ChevronRight className="h-3 w-3" />
              </button>
            </div>
          </div>

          {/* Cost Drivers Measures */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 shadow-sm h-full flex flex-col">
            <div className="mb-4">
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">Cost Drivers Measures</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Key utilization metrics driving healthcare costs
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 flex-1">
              {costDrivers.slice(0, 4).map((driver, index) => (
                <div key={index} className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 text-xs">{driver.name}</h4>
                    <div className="flex items-center gap-1">
                      <span className={`text-xs ${
                        driver.changePercent < 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                      }`}>
                        {driver.changePercent > 0 ? '+' : ''}{driver.changePercent}%
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                      Current: {driver.value} {driver.unit}
                    </div>
                    <div className="text-xs font-medium text-gray-900 dark:text-gray-100">
                      Target: {driver.target} {driver.unit}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
              <button className="text-xs text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex items-center gap-1">
                <span>View All Drivers</span>
                <ChevronRight className="h-3 w-3" />
              </button>
            </div>
          </div>

          {/* Control Measures */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 shadow-sm h-full flex flex-col">
            <div className="mb-4">
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">Control Measures</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Quality and utilization control metrics
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 flex-1">
              <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 text-xs">Generic Drugs</h4>
                  <span className="text-xs text-green-600 dark:text-green-400">+2.3%</span>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Current: 78.5%</div>
                  <div className="text-xs font-medium text-gray-900 dark:text-gray-100">Target: 85.0%</div>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 text-xs">Drug Pickup</h4>
                  <span className="text-xs text-green-600 dark:text-green-400">+1.8%</span>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Current: 82.3%</div>
                  <div className="text-xs font-medium text-gray-900 dark:text-gray-100">Target: 90.0%</div>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 text-xs">Out of Network</h4>
                  <span className="text-xs text-green-600 dark:text-green-400">-1.2%</span>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Current: 12.8%</div>
                  <div className="text-xs font-medium text-gray-900 dark:text-gray-100">Target: 10.0%</div>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 text-xs">Care Gap</h4>
                  <span className="text-xs text-green-600 dark:text-green-400">+4.2%</span>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Current: 71.5%</div>
                  <div className="text-xs font-medium text-gray-900 dark:text-gray-100">Target: 80.0%</div>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
              <button className="text-xs text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex items-center gap-1">
                <span>View All Controls</span>
                <ChevronRight className="h-3 w-3" />
              </button>
            </div>
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