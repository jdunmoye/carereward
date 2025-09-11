import { DollarSign, TrendingUp, TrendingDown, Target, RefreshCw, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

const FinancialMetrics = () => {
  const [dateRange, setDateRange] = useState<'1m' | '3m' | '6m' | '1y'>('6m');
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(true); // Default to dark mode
  
  const financialData = [
    {
      title: 'Total Savings',
      value: '$2.4M',
      change: '+15.2%',
      changeType: 'positive' as const,
      icon: DollarSign,
      description: 'Year-to-date cost savings',
    },
    {
      title: 'Cost Per Patient',
      value: '$1,247',
      change: '-8.3%',
      changeType: 'positive' as const,
      icon: TrendingDown,
      description: 'Average cost reduction',
    },
    {
      title: 'Revenue Impact',
      value: '+$850K',
      change: '+12.1%',
      changeType: 'positive' as const,
      icon: TrendingUp,
      description: 'Additional revenue generated',
    },
    {
      title: 'ROI',
      value: '340%',
      change: '+45%',
      changeType: 'positive' as const,
      icon: Target,
      description: 'Return on investment',
    },
  ];

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  const budgetItems = [
    { category: 'Clinical Excellence', allocated: 450000, spent: 320000, remaining: 130000 },
    { category: 'Quality Improvement', allocated: 300000, spent: 280000, remaining: 20000 },
    { category: 'Innovation Projects', allocated: 200000, spent: 150000, remaining: 50000 },
    { category: 'Staff Development', allocated: 150000, spent: 120000, remaining: 30000 },
    { category: 'Technology Upgrades', allocated: 100000, spent: 85000, remaining: 15000 },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Financial Metrics</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Track cost savings, ROI, and financial performance across all programs.
          </p>
        </div>
        
        {/* Date Range Selector */}
        <div className="flex items-center gap-4">
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
          
          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="p-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
          </button>
          
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <button className="px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:border-green-300 dark:hover:border-green-600 transition-colors">
            <Target className="h-4 w-4 mr-2 inline" />
            Set Targets
          </button>
          <button className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-colors">
            <DollarSign className="h-4 w-4 mr-2 inline" />
            Generate Report
          </button>
        </div>
      </div>

      {/* Financial Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {financialData.map((metric) => {
          const IconComponent = metric.icon;
          return (
            <div key={metric.title} className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                  <IconComponent className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div className={`text-sm font-medium ${
                  metric.changeType === 'positive' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                }`}>
                  {metric.change}
                </div>
              </div>
              <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">{metric.title}</h3>
              <p className="text-2xl font-bold text-green-900 dark:text-green-100">{metric.value}</p>
              <p className="text-xs text-green-600 dark:text-green-400 mt-1">{metric.description}</p>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Budget Allocation */}
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Budget Allocation</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Current budget status across all categories
            </p>
          </div>
          <div>
            <div className="space-y-4">
              {budgetItems.map((item) => {
                const percentage = (item.spent / item.allocated) * 100;
                return (
                  <div key={item.category} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        ${item.spent.toLocaleString()} / ${item.allocated.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>{percentage.toFixed(1)}% spent</span>
                      <span>${item.remaining.toLocaleString()} remaining</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Monthly Trends */}
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Monthly Trends</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Financial performance over the last 6 months
            </p>
          </div>
          <div>
            <div className="space-y-4">
              {[
                { month: 'Jan', savings: 180000, costs: 120000, roi: 150 },
                { month: 'Feb', savings: 220000, costs: 135000, roi: 163 },
                { month: 'Mar', savings: 250000, costs: 140000, roi: 179 },
                { month: 'Apr', savings: 280000, costs: 145000, roi: 193 },
                { month: 'May', savings: 320000, costs: 150000, roi: 213 },
                { month: 'Jun', savings: 350000, costs: 155000, roi: 226 },
              ].map((trend) => (
                <div key={trend.month} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 text-center">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{trend.month}</p>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Savings</p>
                          <p className="text-sm font-medium text-green-600 dark:text-green-400">
                            ${(trend.savings / 1000).toFixed(0)}K
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Costs</p>
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                            ${(trend.costs / 1000).toFixed(0)}K
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">ROI</p>
                          <p className="text-sm font-medium text-green-600 dark:text-green-400">
                            {trend.roi}%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cost Savings Breakdown */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Cost Savings Breakdown</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Detailed analysis of savings by category
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="text-lg font-semibold text-green-900 dark:text-green-100">Reduced Readmissions</h4>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-2">$1.2M</p>
            <p className="text-sm text-green-700 dark:text-green-300 mt-1">35% reduction in readmission costs</p>
          </div>
          <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="text-lg font-semibold text-green-900 dark:text-green-100">Efficiency Gains</h4>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-2">$850K</p>
            <p className="text-sm text-green-700 dark:text-green-300 mt-1">Streamlined processes and workflows</p>
          </div>
          <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="text-lg font-semibold text-green-900 dark:text-green-100">Quality Improvements</h4>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-2">$350K</p>
            <p className="text-sm text-green-700 dark:text-green-300 mt-1">Better outcomes, lower costs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialMetrics;
