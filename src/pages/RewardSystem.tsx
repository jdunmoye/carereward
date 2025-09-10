import { Award, Plus, Settings, Users, Star, Gift, Trophy, Medal } from 'lucide-react';

const RewardSystem = () => {
  const rewardTypes = [
    {
      id: 1,
      name: 'Excellence in Patient Care',
      description: 'Awarded for exceptional patient care and satisfaction scores above 95%',
      type: 'points' as const,
      value: 500,
      criteria: ['Patient satisfaction > 95%', 'Zero safety incidents', 'Peer nomination'],
      isActive: true,
      category: 'Clinical Excellence',
      icon: 'Award',
      color: 'primary',
    },
    {
      id: 2,
      name: 'Cost Savings Champion',
      description: 'Recognize providers who identify and implement cost-saving measures',
      type: 'monetary' as const,
      value: 1000,
      criteria: ['Documented cost savings > $10K', 'Quality maintained', 'Team collaboration'],
      isActive: true,
      category: 'Financial Performance',
      icon: 'Gift',
      color: 'success',
    },
    {
      id: 3,
      name: 'Innovation Pioneer',
      description: 'Reward innovative solutions that improve patient outcomes or efficiency',
      type: 'badge' as const,
      value: 750,
      criteria: ['Innovative solution implemented', 'Measurable improvement', 'Scalable impact'],
      isActive: true,
      category: 'Innovation',
      icon: 'Star',
      color: 'warning',
    },
    {
      id: 4,
      name: 'Team Player',
      description: 'Recognize exceptional collaboration and teamwork across departments',
      type: 'recognition' as const,
      value: 300,
      criteria: ['Cross-department collaboration', 'Positive peer feedback', 'Project leadership'],
      isActive: true,
      category: 'Teamwork',
      icon: 'Users',
      color: 'accent',
    },
    {
      id: 5,
      name: 'Quality Improvement Leader',
      description: 'Award for leading quality improvement initiatives with measurable results',
      type: 'certificate' as const,
      value: 600,
      criteria: ['Quality metric improvement', 'Process documentation', 'Team training'],
      isActive: false,
      category: 'Quality',
      icon: 'Trophy',
      color: 'primary',
    },
    {
      id: 6,
      name: 'Safety Excellence',
      description: 'Recognize commitment to patient safety and zero-harm initiatives',
      type: 'points' as const,
      value: 400,
      criteria: ['Zero safety incidents', 'Safety training completion', 'Safety improvement suggestions'],
      isActive: true,
      category: 'Safety',
      icon: 'Medal',
      color: 'success',
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'points': return 'primary';
      case 'monetary': return 'success';
      case 'badge': return 'warning';
      case 'certificate': return 'accent';
      case 'recognition': return 'secondary';
      default: return 'secondary';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Clinical Excellence': return 'primary';
      case 'Financial Performance': return 'success';
      case 'Innovation': return 'warning';
      case 'Teamwork': return 'accent';
      case 'Quality': return 'primary';
      case 'Safety': return 'success';
      default: return 'secondary';
    }
  };

  const iconMap = {
    Award,
    Gift,
    Star,
    Users,
    Trophy,
    Medal,
  };

  const recentAwards = [
    {
      id: 1,
      recipient: 'Dr. Sarah Johnson',
      reward: 'Excellence in Patient Care',
      points: 500,
      date: '2024-01-15',
      department: 'Cardiology',
    },
    {
      id: 2,
      recipient: 'Nurse Maria Rodriguez',
      reward: 'Safety Excellence',
      points: 400,
      date: '2024-01-14',
      department: 'Emergency',
    },
    {
      id: 3,
      recipient: 'Dr. Michael Chen',
      reward: 'Cost Savings Champion',
      points: 1000,
      date: '2024-01-13',
      department: 'Surgery',
    },
    {
      id: 4,
      recipient: 'Pharmacy Team',
      reward: 'Team Player',
      points: 300,
      date: '2024-01-12',
      department: 'Pharmacy',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900">Reward System</h1>
          <p className="text-secondary-600 mt-1">
            Manage reward types, criteria, and track recent awards across the organization.
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="btn btn-outline btn-md">
            <Settings className="h-4 w-4 mr-2" />
            Configure
          </button>
          <button className="btn btn-primary btn-md">
            <Plus className="h-4 w-4 mr-2" />
            Create Reward
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="metric-card">
          <div className="card-content">
            <div className="flex items-center justify-between">
              <div>
                <p className="metric-label">Active Rewards</p>
                <p className="metric-value">5</p>
              </div>
              <div className="p-3 rounded-lg bg-primary-100">
                <Award className="h-6 w-6 text-primary-600" />
              </div>
            </div>
          </div>
        </div>
        <div className="metric-card">
          <div className="card-content">
            <div className="flex items-center justify-between">
              <div>
                <p className="metric-label">Total Awards</p>
                <p className="metric-value">127</p>
              </div>
              <div className="p-3 rounded-lg bg-success-100">
                <Trophy className="h-6 w-6 text-success-600" />
              </div>
            </div>
          </div>
        </div>
        <div className="metric-card">
          <div className="card-content">
            <div className="flex items-center justify-between">
              <div>
                <p className="metric-label">Points Awarded</p>
                <p className="metric-value">45,200</p>
              </div>
              <div className="p-3 rounded-lg bg-warning-100">
                <Star className="h-6 w-6 text-warning-600" />
              </div>
            </div>
          </div>
        </div>
        <div className="metric-card">
          <div className="card-content">
            <div className="flex items-center justify-between">
              <div>
                <p className="metric-label">Categories</p>
                <p className="metric-value">6</p>
              </div>
              <div className="p-3 rounded-lg bg-accent-100">
                <Users className="h-6 w-6 text-accent-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reward Types Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {rewardTypes.map((reward) => {
          const IconComponent = iconMap[reward.icon as keyof typeof iconMap];
          
          return (
            <div key={reward.id} className="card">
              <div className="card-header">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <IconComponent className={`h-5 w-5 text-${reward.color}-600`} />
                      <h3 className="card-title text-lg">{reward.name}</h3>
                      <span className={`badge badge-${getTypeColor(reward.type)}`}>
                        {reward.type}
                      </span>
                      <span className={`badge badge-${getCategoryColor(reward.category)}`}>
                        {reward.category}
                      </span>
                    </div>
                    <p className="card-description">{reward.description}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${
                      reward.isActive ? 'bg-success-500' : 'bg-secondary-400'
                    }`}></div>
                    <button className="p-2 text-secondary-600 hover:bg-secondary-100 rounded-lg transition-colors">
                      <Settings className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div className="mb-4">
                  <p className="text-sm text-secondary-600 mb-2">Value</p>
                  <p className="text-2xl font-bold text-secondary-900">
                    {reward.type === 'monetary' ? `$${reward.value}` : 
                     reward.type === 'points' ? `${reward.value} pts` :
                     reward.type === 'badge' ? 'Badge' :
                     reward.type === 'certificate' ? 'Certificate' : 'Recognition'}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-secondary-900">Criteria</p>
                  <ul className="space-y-1">
                    {reward.criteria.map((criterion, index) => (
                      <li key={index} className="text-sm text-secondary-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                        {criterion}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="card-footer">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      reward.isActive ? 'bg-success-500' : 'bg-secondary-400'
                    }`}></div>
                    <span className="text-sm text-secondary-600">
                      {reward.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="btn btn-ghost btn-sm">View Details</button>
                    <button className="btn btn-primary btn-sm">Edit</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Awards */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Recent Awards</h3>
          <p className="card-description">
            Latest reward distributions and recognitions
          </p>
        </div>
        <div className="card-content">
          <div className="space-y-4">
            {recentAwards.map((award) => (
              <div key={award.id} className="flex items-center justify-between p-4 rounded-lg bg-secondary-50">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-secondary-900">
                      {award.recipient}
                    </p>
                    <p className="text-sm text-secondary-600">
                      {award.reward} • {award.department}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium text-secondary-900">
                      {award.points} points
                    </p>
                    <p className="text-xs text-secondary-500">
                      {new Date(award.date).toLocaleDateString()}
                    </p>
                  </div>
                  <button className="btn btn-ghost btn-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-ghost btn-sm">
            View all awards
          </button>
        </div>
      </div>

      {/* Reward Categories */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Reward Categories</h3>
          <p className="card-description">
            Distribution of rewards across different categories
          </p>
        </div>
        <div className="card-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: 'Clinical Excellence', count: 45, totalPoints: 22500, color: 'primary' },
              { category: 'Financial Performance', count: 23, totalPoints: 23000, color: 'success' },
              { category: 'Innovation', count: 18, totalPoints: 13500, color: 'warning' },
              { category: 'Teamwork', count: 32, totalPoints: 9600, color: 'accent' },
              { category: 'Quality', count: 28, totalPoints: 16800, color: 'primary' },
              { category: 'Safety', count: 21, totalPoints: 8400, color: 'success' },
            ].map((cat) => (
              <div key={cat.category} className={`text-center p-6 bg-${cat.color}-50 rounded-lg`}>
                <h4 className={`text-lg font-semibold text-${cat.color}-900`}>{cat.category}</h4>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className={`text-${cat.color}-700`}>Awards</span>
                    <span className={`font-medium text-${cat.color}-900`}>{cat.count}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className={`text-${cat.color}-700`}>Total Points</span>
                    <span className={`font-medium text-${cat.color}-900`}>{cat.totalPoints.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className={`text-${cat.color}-700`}>Avg Points</span>
                    <span className={`font-medium text-${cat.color}-900`}>
                      {Math.round(cat.totalPoints / cat.count)}
                    </span>
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

export default RewardSystem;
