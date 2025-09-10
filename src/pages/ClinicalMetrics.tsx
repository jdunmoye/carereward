import { Activity, Heart, Users, TrendingUp, Target, Award } from 'lucide-react';

const ClinicalMetrics = () => {
  const clinicalData = [
    {
      title: 'Patient Satisfaction',
      value: '94.2%',
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
      value: '96.8',
      change: '+3.4',
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

  const outcomeMetrics = [
    { metric: 'Patient Satisfaction', baseline: 89.1, current: 94.2, improvement: 5.1, target: 95.0 },
    { metric: 'Readmission Rate', baseline: 12.5, current: 8.3, improvement: -4.2, target: 8.0 },
    { metric: 'Length of Stay', baseline: 4.2, current: 3.8, improvement: -0.4, target: 3.5 },
    { metric: 'Infection Rate', baseline: 2.1, current: 1.4, improvement: -0.7, target: 1.0 },
    { metric: 'Medication Errors', baseline: 0.8, current: 0.3, improvement: -0.5, target: 0.2 },
  ];

  const departmentPerformance = [
    { department: 'Cardiology', score: 98.2, trend: 'up' as const, change: 2.1 },
    { department: 'Emergency', score: 95.8, trend: 'up' as const, change: 1.8 },
    { department: 'Pediatrics', score: 97.5, trend: 'stable' as const, change: 0.2 },
    { department: 'Surgery', score: 94.3, trend: 'up' as const, change: 3.2 },
    { department: 'Oncology', score: 96.1, trend: 'down' as const, change: -0.8 },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900">Clinical Metrics</h1>
          <p className="text-secondary-600 mt-1">
            Monitor patient outcomes, quality scores, and clinical performance indicators.
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="btn btn-outline btn-md">
            <Target className="h-4 w-4 mr-2" />
            Set Targets
          </button>
          <button className="btn btn-primary btn-md">
            <Activity className="h-4 w-4 mr-2" />
            View Details
          </button>
        </div>
      </div>

      {/* Clinical Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {clinicalData.map((metric) => {
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
        {/* Outcome Improvements */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Outcome Improvements</h3>
            <p className="card-description">
              Key clinical metrics and their progress toward targets
            </p>
          </div>
          <div className="card-content">
            <div className="space-y-4">
              {outcomeMetrics.map((outcome) => {
                const progress = ((outcome.current - outcome.baseline) / (outcome.target - outcome.baseline)) * 100;
                const isImproving = outcome.improvement > 0 || (outcome.metric.includes('Rate') && outcome.improvement < 0);
                
                return (
                  <div key={outcome.metric} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-secondary-900">
                        {outcome.metric}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-secondary-600">
                          {outcome.current}{outcome.metric.includes('Rate') ? '%' : ''}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          isImproving ? 'bg-success-100 text-success-800' : 'bg-accent-100 text-accent-800'
                        }`}>
                          {isImproving ? '+' : ''}{outcome.improvement.toFixed(1)}
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          progress >= 100 ? 'bg-success-600' : 'bg-primary-600'
                        }`}
                        style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-secondary-500">
                      <span>Baseline: {outcome.baseline}{outcome.metric.includes('Rate') ? '%' : ''}</span>
                      <span>Target: {outcome.target}{outcome.metric.includes('Rate') ? '%' : ''}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Department Performance */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Department Performance</h3>
            <p className="card-description">
              Quality scores by department with trend indicators
            </p>
          </div>
          <div className="card-content">
            <div className="space-y-4">
              {departmentPerformance.map((dept) => (
                <div key={dept.department} className="flex items-center justify-between p-3 rounded-lg bg-secondary-50">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-secondary-900">
                        {dept.department}
                      </p>
                      <p className="text-xs text-secondary-600">
                        Quality Score: {dept.score}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`flex items-center space-x-1 ${
                      dept.trend === 'up' ? 'text-success-600' : 
                      dept.trend === 'down' ? 'text-accent-600' : 'text-secondary-600'
                    }`}>
                      <TrendingUp className={`h-4 w-4 ${
                        dept.trend === 'down' ? 'rotate-180' : ''
                      }`} />
                      <span className="text-sm font-medium">
                        {dept.change > 0 ? '+' : ''}{dept.change}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quality Indicators */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Quality Indicators</h3>
          <p className="card-description">
            Comprehensive view of clinical quality measures
          </p>
        </div>
        <div className="card-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-success-50 rounded-lg">
              <Heart className="h-8 w-8 text-success-600 mx-auto mb-2" />
              <h4 className="text-lg font-semibold text-success-900">Patient Safety</h4>
              <p className="text-2xl font-bold text-success-600 mt-2">98.5%</p>
              <p className="text-sm text-success-700 mt-1">Safety score</p>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <Activity className="h-8 w-8 text-primary-600 mx-auto mb-2" />
              <h4 className="text-lg font-semibold text-primary-900">Care Coordination</h4>
              <p className="text-2xl font-bold text-primary-600 mt-2">92.3%</p>
              <p className="text-sm text-primary-700 mt-1">Coordination score</p>
            </div>
            <div className="text-center p-6 bg-warning-50 rounded-lg">
              <Target className="h-8 w-8 text-warning-600 mx-auto mb-2" />
              <h4 className="text-lg font-semibold text-warning-900">Clinical Effectiveness</h4>
              <p className="text-2xl font-bold text-warning-600 mt-2">95.7%</p>
              <p className="text-sm text-warning-700 mt-1">Effectiveness score</p>
            </div>
            <div className="text-center p-6 bg-accent-50 rounded-lg">
              <Award className="h-8 w-8 text-accent-600 mx-auto mb-2" />
              <h4 className="text-lg font-semibold text-accent-900">Patient Experience</h4>
              <p className="text-2xl font-bold text-accent-600 mt-2">94.2%</p>
              <p className="text-sm text-accent-700 mt-1">Experience score</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicalMetrics;
