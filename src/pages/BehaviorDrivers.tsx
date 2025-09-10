import { Target, Users, Award, TrendingUp, Play, Pause, Settings } from 'lucide-react';

const BehaviorDrivers = () => {
  const behaviorDrivers = [
    {
      id: 1,
      name: 'Patient Safety Excellence',
      description: 'Reward providers for maintaining zero safety incidents',
      category: 'clinical' as const,
      impact: 'high' as const,
      frequency: 'monthly' as const,
      points: 500,
      isActive: true,
      participants: 45,
      successRate: 92,
    },
    {
      id: 2,
      name: 'Cost Reduction Initiative',
      description: 'Encourage cost-effective care without compromising quality',
      category: 'operational' as const,
      impact: 'high' as const,
      frequency: 'quarterly' as const,
      points: 750,
      isActive: true,
      participants: 32,
      successRate: 87,
    },
    {
      id: 3,
      name: 'Patient Satisfaction Focus',
      description: 'Reward high patient satisfaction scores and feedback',
      category: 'patient_care' as const,
      impact: 'medium' as const,
      frequency: 'monthly' as const,
      points: 300,
      isActive: true,
      participants: 67,
      successRate: 95,
    },
    {
      id: 4,
      name: 'Innovation Challenge',
      description: 'Encourage innovative solutions and process improvements',
      category: 'innovation' as const,
      impact: 'medium' as const,
      frequency: 'quarterly' as const,
      points: 1000,
      isActive: false,
      participants: 18,
      successRate: 78,
    },
    {
      id: 5,
      name: 'Team Collaboration',
      description: 'Reward effective interdepartmental collaboration',
      category: 'operational' as const,
      impact: 'medium' as const,
      frequency: 'monthly' as const,
      points: 250,
      isActive: true,
      participants: 89,
      successRate: 91,
    },
    {
      id: 6,
      name: 'Quality Metrics Achievement',
      description: 'Reward meeting or exceeding quality benchmarks',
      category: 'clinical' as const,
      impact: 'high' as const,
      frequency: 'monthly' as const,
      points: 400,
      isActive: true,
      participants: 56,
      successRate: 88,
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'clinical': return 'primary';
      case 'operational': return 'success';
      case 'patient_care': return 'warning';
      case 'innovation': return 'accent';
      default: return 'secondary';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'success';
      case 'medium': return 'warning';
      case 'low': return 'secondary';
      default: return 'secondary';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900">Behavior Drivers</h1>
          <p className="text-secondary-600 mt-1">
            Manage and monitor behavior-driven reward programs that drive performance.
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="btn btn-outline btn-md">
            <Settings className="h-4 w-4 mr-2" />
            Configure
          </button>
          <button className="btn btn-primary btn-md">
            <Target className="h-4 w-4 mr-2" />
            Create Driver
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="metric-card">
          <div className="card-content">
            <div className="flex items-center justify-between">
              <div>
                <p className="metric-label">Active Drivers</p>
                <p className="metric-value">5</p>
              </div>
              <div className="p-3 rounded-lg bg-success-100">
                <Play className="h-6 w-6 text-success-600" />
              </div>
            </div>
          </div>
        </div>
        <div className="metric-card">
          <div className="card-content">
            <div className="flex items-center justify-between">
              <div>
                <p className="metric-label">Total Participants</p>
                <p className="metric-value">156</p>
              </div>
              <div className="p-3 rounded-lg bg-primary-100">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
            </div>
          </div>
        </div>
        <div className="metric-card">
          <div className="card-content">
            <div className="flex items-center justify-between">
              <div>
                <p className="metric-label">Avg Success Rate</p>
                <p className="metric-value">88.5%</p>
              </div>
              <div className="p-3 rounded-lg bg-warning-100">
                <TrendingUp className="h-6 w-6 text-warning-600" />
              </div>
            </div>
          </div>
        </div>
        <div className="metric-card">
          <div className="card-content">
            <div className="flex items-center justify-between">
              <div>
                <p className="metric-label">Points Awarded</p>
                <p className="metric-value">8,450</p>
              </div>
              <div className="p-3 rounded-lg bg-accent-100">
                <Award className="h-6 w-6 text-accent-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Behavior Drivers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {behaviorDrivers.map((driver) => (
          <div key={driver.id} className="card">
            <div className="card-header">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="card-title text-lg">{driver.name}</h3>
                    <span className={`badge badge-${getCategoryColor(driver.category)}`}>
                      {driver.category}
                    </span>
                    <span className={`badge badge-${getImpactColor(driver.impact)}`}>
                      {driver.impact} impact
                    </span>
                  </div>
                  <p className="card-description">{driver.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  {driver.isActive ? (
                    <button className="p-2 text-success-600 hover:bg-success-100 rounded-lg transition-colors">
                      <Play className="h-4 w-4" />
                    </button>
                  ) : (
                    <button className="p-2 text-secondary-600 hover:bg-secondary-100 rounded-lg transition-colors">
                      <Pause className="h-4 w-4" />
                    </button>
                  )}
                  <button className="p-2 text-secondary-600 hover:bg-secondary-100 rounded-lg transition-colors">
                    <Settings className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-secondary-600">Points</p>
                  <p className="text-lg font-semibold text-secondary-900">{driver.points}</p>
                </div>
                <div>
                  <p className="text-sm text-secondary-600">Frequency</p>
                  <p className="text-lg font-semibold text-secondary-900 capitalize">{driver.frequency}</p>
                </div>
                <div>
                  <p className="text-sm text-secondary-600">Participants</p>
                  <p className="text-lg font-semibold text-secondary-900">{driver.participants}</p>
                </div>
                <div>
                  <p className="text-sm text-secondary-600">Success Rate</p>
                  <p className="text-lg font-semibold text-secondary-900">{driver.successRate}%</p>
                </div>
              </div>
              
              {/* Success Rate Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-secondary-600">Success Rate</span>
                  <span className="font-medium text-secondary-900">{driver.successRate}%</span>
                </div>
                <div className="w-full bg-secondary-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      driver.successRate >= 90 ? 'bg-success-600' :
                      driver.successRate >= 80 ? 'bg-warning-600' : 'bg-accent-600'
                    }`}
                    style={{ width: `${driver.successRate}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    driver.isActive ? 'bg-success-500' : 'bg-secondary-400'
                  }`}></div>
                  <span className="text-sm text-secondary-600">
                    {driver.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button className="btn btn-ghost btn-sm">View Details</button>
                  <button className="btn btn-primary btn-sm">Edit</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Category Performance */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Performance by Category</h3>
          <p className="card-description">
            Success rates and participation across different behavior driver categories
          </p>
        </div>
        <div className="card-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: 'Clinical', drivers: 2, participants: 101, avgSuccess: 90, color: 'primary' },
              { category: 'Operational', drivers: 2, participants: 121, avgSuccess: 89, color: 'success' },
              { category: 'Patient Care', drivers: 1, participants: 67, avgSuccess: 95, color: 'warning' },
              { category: 'Innovation', drivers: 1, participants: 18, avgSuccess: 78, color: 'accent' },
            ].map((cat) => (
              <div key={cat.category} className={`text-center p-6 bg-${cat.color}-50 rounded-lg`}>
                <h4 className={`text-lg font-semibold text-${cat.color}-900`}>{cat.category}</h4>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className={`text-${cat.color}-700`}>Drivers</span>
                    <span className={`font-medium text-${cat.color}-900`}>{cat.drivers}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className={`text-${cat.color}-700`}>Participants</span>
                    <span className={`font-medium text-${cat.color}-900`}>{cat.participants}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className={`text-${cat.color}-700`}>Avg Success</span>
                    <span className={`font-medium text-${cat.color}-900`}>{cat.avgSuccess}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehaviorDrivers;
