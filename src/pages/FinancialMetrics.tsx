import { DollarSign, TrendingUp, TrendingDown, Target } from 'lucide-react';

const FinancialMetrics = () => {
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900">Financial Metrics</h1>
          <p className="text-secondary-600 mt-1">
            Track cost savings, ROI, and financial performance across all programs.
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="btn btn-outline btn-md">
            <Target className="h-4 w-4 mr-2" />
            Set Targets
          </button>
          <button className="btn btn-primary btn-md">
            <DollarSign className="h-4 w-4 mr-2" />
            Generate Report
          </button>
        </div>
      </div>

      {/* Financial Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {financialData.map((metric) => {
          const IconComponent = metric.icon;
          return (
            <div key={metric.title} className="metric-card">
              <div className="card-content">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="metric-label">{metric.title}</p>
                    <p className="metric-value">{metric.value}</p>
                    <p className="text-xs text-secondary-500 mt-1">{metric.description}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-${metric.changeType === 'positive' ? 'success' : 'accent'}-100`}>
                    <IconComponent className={`h-6 w-6 text-${metric.changeType === 'positive' ? 'success' : 'accent'}-600`} />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <span className={`metric-change ${metric.changeType}`}>
                    {metric.change}
                  </span>
                  <span className="text-secondary-500 text-sm ml-2">vs last quarter</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Budget Allocation */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Budget Allocation</h3>
            <p className="card-description">
              Current budget status across all categories
            </p>
          </div>
          <div className="card-content">
            <div className="space-y-4">
              {budgetItems.map((item) => {
                const percentage = (item.spent / item.allocated) * 100;
                return (
                  <div key={item.category} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-secondary-900">
                        {item.category}
                      </span>
                      <span className="text-sm text-secondary-600">
                        ${item.spent.toLocaleString()} / ${item.allocated.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-secondary-500">
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
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Monthly Trends</h3>
            <p className="card-description">
              Financial performance over the last 6 months
            </p>
          </div>
          <div className="card-content">
            <div className="space-y-4">
              {[
                { month: 'Jan', savings: 180000, costs: 120000, roi: 150 },
                { month: 'Feb', savings: 220000, costs: 135000, roi: 163 },
                { month: 'Mar', savings: 250000, costs: 140000, roi: 179 },
                { month: 'Apr', savings: 280000, costs: 145000, roi: 193 },
                { month: 'May', savings: 320000, costs: 150000, roi: 213 },
                { month: 'Jun', savings: 350000, costs: 155000, roi: 226 },
              ].map((trend) => (
                <div key={trend.month} className="flex items-center justify-between p-3 rounded-lg bg-secondary-50">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 text-center">
                      <p className="text-sm font-medium text-secondary-900">{trend.month}</p>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <div>
                          <p className="text-xs text-secondary-600">Savings</p>
                          <p className="text-sm font-medium text-success-600">
                            ${(trend.savings / 1000).toFixed(0)}K
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-secondary-600">Costs</p>
                          <p className="text-sm font-medium text-secondary-900">
                            ${(trend.costs / 1000).toFixed(0)}K
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-secondary-600">ROI</p>
                          <p className="text-sm font-medium text-primary-600">
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
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Cost Savings Breakdown</h3>
          <p className="card-description">
            Detailed analysis of savings by category
          </p>
        </div>
        <div className="card-content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-success-50 rounded-lg">
              <h4 className="text-lg font-semibold text-success-900">Reduced Readmissions</h4>
              <p className="text-3xl font-bold text-success-600 mt-2">$1.2M</p>
              <p className="text-sm text-success-700 mt-1">35% reduction in readmission costs</p>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <h4 className="text-lg font-semibold text-primary-900">Efficiency Gains</h4>
              <p className="text-3xl font-bold text-primary-600 mt-2">$850K</p>
              <p className="text-sm text-primary-700 mt-1">Streamlined processes and workflows</p>
            </div>
            <div className="text-center p-6 bg-warning-50 rounded-lg">
              <h4 className="text-lg font-semibold text-warning-900">Quality Improvements</h4>
              <p className="text-3xl font-bold text-warning-600 mt-2">$350K</p>
              <p className="text-sm text-warning-700 mt-1">Better outcomes, lower costs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialMetrics;
