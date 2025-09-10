import { TrendingUp, Users, Award, DollarSign, Activity, Target } from 'lucide-react';

const Dashboard = () => {
  const metrics = [
    {
      title: 'Total Providers',
      value: '156',
      change: '+12%',
      changeType: 'positive' as const,
      icon: Users,
      color: 'primary',
    },
    {
      title: 'Active Rewards',
      value: '24',
      change: '+3',
      changeType: 'positive' as const,
      icon: Award,
      color: 'success',
    },
    {
      title: 'Points Awarded',
      value: '12,450',
      change: '+1,250',
      changeType: 'positive' as const,
      icon: TrendingUp,
      color: 'warning',
    },
    {
      title: 'Monthly Engagement',
      value: '89%',
      change: '+5%',
      changeType: 'positive' as const,
      icon: Activity,
      color: 'accent',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'reward_awarded',
      title: 'Excellence in Patient Care',
      description: 'Dr. Sarah Johnson earned 500 points',
      timestamp: '2 hours ago',
      points: 500,
    },
    {
      id: 2,
      type: 'goal_achieved',
      title: 'Quality Improvement Goal',
      description: 'Cardiology department achieved 95% satisfaction',
      timestamp: '4 hours ago',
    },
    {
      id: 3,
      type: 'milestone_reached',
      title: 'Cost Savings Milestone',
      description: 'Hospital saved $50,000 this month',
      timestamp: '6 hours ago',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900">Dashboard</h1>
          <p className="text-secondary-600 mt-1">
            Welcome back! Here's what's happening with your rewards program.
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="btn btn-outline btn-md">
            <Target className="h-4 w-4 mr-2" />
            Set Goals
          </button>
          <button className="btn btn-primary btn-md">
            <Award className="h-4 w-4 mr-2" />
            Award Points
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => {
          const IconComponent = metric.icon;
          return (
            <div key={metric.title} className="metric-card">
              <div className="card-content">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="metric-label">{metric.title}</p>
                    <p className="metric-value">{metric.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-${metric.color}-100`}>
                    <IconComponent className={`h-6 w-6 text-${metric.color}-600`} />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <span className={`metric-change ${metric.changeType}`}>
                    {metric.change}
                  </span>
                  <span className="text-secondary-500 text-sm ml-2">from last month</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Recent Activity</h3>
              <p className="card-description">
                Latest updates from your rewards program
              </p>
            </div>
            <div className="card-content">
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary-50 transition-colors">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Activity className="h-4 w-4 text-primary-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-secondary-900">
                        {activity.title}
                      </p>
                      <p className="text-sm text-secondary-600">
                        {activity.description}
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-xs text-secondary-500">
                          {activity.timestamp}
                        </p>
                        {activity.points && (
                          <span className="badge badge-success">
                            +{activity.points} pts
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-footer">
              <button className="btn btn-ghost btn-sm">
                View all activity
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Quick Actions</h3>
              <p className="card-description">
                Common tasks and shortcuts
              </p>
            </div>
            <div className="card-content">
              <div className="space-y-3">
                <button className="w-full btn btn-outline btn-md justify-start">
                  <Award className="h-4 w-4 mr-2" />
                  Award Points
                </button>
                <button className="w-full btn btn-outline btn-md justify-start">
                  <Target className="h-4 w-4 mr-2" />
                  Set Goals
                </button>
                <button className="w-full btn btn-outline btn-md justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Manage Users
                </button>
                <button className="w-full btn btn-outline btn-md justify-start">
                  <DollarSign className="h-4 w-4 mr-2" />
                  View Reports
                </button>
              </div>
            </div>
          </div>

          {/* Top Performers */}
          <div className="card mt-6">
            <div className="card-header">
              <h3 className="card-title">Top Performers</h3>
              <p className="card-description">
                This month's leaders
              </p>
            </div>
            <div className="card-content">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-primary-600">SJ</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-secondary-900">Dr. Sarah Johnson</p>
                      <p className="text-xs text-secondary-600">Cardiology</p>
                    </div>
                  </div>
                  <span className="badge badge-success">2,450 pts</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-secondary-600">MR</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-secondary-900">Dr. Michael Rodriguez</p>
                      <p className="text-xs text-secondary-600">Emergency</p>
                    </div>
                  </div>
                  <span className="badge badge-success">2,100 pts</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-warning-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-warning-600">AL</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-secondary-900">Dr. Anna Lee</p>
                      <p className="text-xs text-secondary-600">Pediatrics</p>
                    </div>
                  </div>
                  <span className="badge badge-success">1,850 pts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
