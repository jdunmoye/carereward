import { Star, TrendingUp, Users, Award, Heart, Target, DollarSign, Calendar } from 'lucide-react';

const SuccessStories = () => {
  const successStories = [
    {
      id: 1,
      title: 'Cardiology Department Reduces Readmissions by 40%',
      description: 'Through focused patient education and follow-up protocols, the cardiology team achieved a 40% reduction in 30-day readmissions while maintaining high patient satisfaction scores.',
      category: 'quality_improvement' as const,
      impact: 850000,
      participants: ['Dr. Sarah Johnson', 'Nurse Maria Rodriguez', 'Dr. Michael Chen'],
      department: 'Cardiology',
      date: '2024-01-15',
      metrics: {
        before: 12.5,
        after: 7.5,
        improvement: 40,
      },
      featured: true,
    },
    {
      id: 2,
      title: 'Emergency Department Streamlines Triage Process',
      description: 'Implemented a new triage system that reduced average wait times by 35% and improved patient flow without compromising care quality.',
      category: 'efficiency' as const,
      impact: 420000,
      participants: ['Dr. Lisa Wang', 'Nurse James Smith', 'Dr. Robert Davis'],
      department: 'Emergency Medicine',
      date: '2024-01-10',
      metrics: {
        before: 45,
        after: 29,
        improvement: 35,
      },
      featured: true,
    },
    {
      id: 3,
      title: 'Pharmacy Team Implements Medication Reconciliation',
      description: 'New medication reconciliation process reduced medication errors by 60% and improved patient safety across all departments.',
      category: 'patient_care' as const,
      impact: 320000,
      participants: ['Pharmacy Team', 'Dr. Anna Lee', 'Nurse Jennifer Brown'],
      department: 'Pharmacy',
      date: '2024-01-08',
      metrics: {
        before: 2.1,
        after: 0.8,
        improvement: 60,
      },
      featured: false,
    },
    {
      id: 4,
      title: 'Surgery Department Optimizes OR Scheduling',
      description: 'Advanced scheduling algorithms and team coordination reduced OR turnover time by 25% and increased daily capacity.',
      category: 'cost_savings' as const,
      impact: 650000,
      participants: ['Dr. David Wilson', 'OR Team', 'Scheduling Coordinator'],
      department: 'Surgery',
      date: '2024-01-05',
      metrics: {
        before: 45,
        after: 34,
        improvement: 25,
      },
      featured: false,
    },
    {
      id: 5,
      title: 'Pediatrics Implements Family-Centered Care Model',
      description: 'New family-centered care approach increased patient satisfaction scores to 98% and reduced length of stay by 20%.',
      category: 'innovation' as const,
      impact: 280000,
      participants: ['Dr. Emily Taylor', 'Pediatric Team', 'Child Life Specialists'],
      department: 'Pediatrics',
      date: '2024-01-03',
      metrics: {
        before: 89,
        after: 98,
        improvement: 10,
      },
      featured: true,
    },
    {
      id: 6,
      title: 'IT Department Launches Telemedicine Platform',
      description: 'Successful telemedicine implementation reduced unnecessary visits by 30% and improved access to care for rural patients.',
      category: 'innovation' as const,
      impact: 750000,
      participants: ['IT Team', 'Dr. Sarah Johnson', 'Telehealth Coordinators'],
      department: 'Information Technology',
      date: '2023-12-28',
      metrics: {
        before: 100,
        after: 70,
        improvement: 30,
      },
      featured: false,
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'quality_improvement': return 'primary';
      case 'cost_savings': return 'success';
      case 'innovation': return 'warning';
      case 'efficiency': return 'accent';
      case 'patient_care': return 'primary';
      default: return 'secondary';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'quality_improvement': return Target;
      case 'cost_savings': return DollarSign;
      case 'innovation': return Star;
      case 'efficiency': return TrendingUp;
      case 'patient_care': return Heart;
      default: return Award;
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900">Success Stories</h1>
          <p className="text-secondary-600 mt-1">
            Celebrate achievements and learn from successful initiatives across the organization.
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="btn btn-outline btn-md">
            <Star className="h-4 w-4 mr-2" />
            Submit Story
          </button>
          <button className="btn btn-primary btn-md">
            <Award className="h-4 w-4 mr-2" />
            Share Success
          </button>
        </div>
      </div>

      {/* Featured Stories */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-secondary-900">Featured Success Stories</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {successStories
            .filter(story => story.featured)
            .map((story) => {
              const CategoryIcon = getCategoryIcon(story.category);
              
              return (
                <div key={story.id} className="card border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white">
                  <div className="card-header">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Star className="h-5 w-5 text-warning-500" />
                          <span className="badge badge-primary">Featured</span>
                          <span className={`badge badge-${getCategoryColor(story.category)}`}>
                            {story.category.replace('_', ' ')}
                          </span>
                        </div>
                        <h3 className="card-title text-xl">{story.title}</h3>
                        <p className="card-description mt-2">{story.description}</p>
                      </div>
                      <CategoryIcon className={`h-6 w-6 text-${getCategoryColor(story.category)}-600`} />
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-secondary-600">Department</p>
                        <p className="text-sm font-medium text-secondary-900">{story.department}</p>
                      </div>
                      <div>
                        <p className="text-sm text-secondary-600">Impact</p>
                        <p className="text-sm font-medium text-success-600">
                          ${(story.impact / 1000).toFixed(0)}K
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-secondary-600">Improvement</p>
                        <p className="text-sm font-medium text-primary-600">
                          {story.metrics.improvement}%
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-secondary-600">Date</p>
                        <p className="text-sm font-medium text-secondary-900">
                          {new Date(story.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-secondary-900">Key Participants</p>
                      <div className="flex flex-wrap gap-2">
                        {story.participants.map((participant, index) => (
                          <span key={index} className="badge badge-secondary">
                            {participant}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-primary btn-sm">
                      Read Full Story
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* All Success Stories */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-secondary-900">All Success Stories</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {successStories.map((story) => {
            const CategoryIcon = getCategoryIcon(story.category);
            
            return (
              <div key={story.id} className="card">
                <div className="card-header">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        {story.featured && <Star className="h-4 w-4 text-warning-500" />}
                        <span className={`badge badge-${getCategoryColor(story.category)}`}>
                          {story.category.replace('_', ' ')}
                        </span>
                      </div>
                      <h3 className="card-title text-lg">{story.title}</h3>
                      <p className="card-description">{story.description}</p>
                    </div>
                    <CategoryIcon className={`h-5 w-5 text-${getCategoryColor(story.category)}-600`} />
                  </div>
                </div>
                <div className="card-content">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-secondary-600">Department</p>
                      <p className="text-sm font-medium text-secondary-900">{story.department}</p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary-600">Impact</p>
                      <p className="text-sm font-medium text-success-600">
                        ${(story.impact / 1000).toFixed(0)}K
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary-600">Before</p>
                      <p className="text-sm font-medium text-secondary-900">
                        {story.metrics.before}{story.category.includes('satisfaction') ? '%' : ''}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary-600">After</p>
                      <p className="text-sm font-medium text-success-600">
                        {story.metrics.after}{story.category.includes('satisfaction') ? '%' : ''}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary-600">Improvement</span>
                      <span className="font-medium text-primary-600">
                        {story.metrics.improvement}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min(story.metrics.improvement, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center space-x-2 text-sm text-secondary-600">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(story.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="btn btn-ghost btn-sm">View Details</button>
                      <button className="btn btn-primary btn-sm">Share</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Success Metrics Summary */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Success Metrics Summary</h3>
          <p className="card-description">
            Overall impact of all success stories across the organization
          </p>
        </div>
        <div className="card-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-success-50 rounded-lg">
              <DollarSign className="h-8 w-8 text-success-600 mx-auto mb-2" />
              <h4 className="text-lg font-semibold text-success-900">Total Impact</h4>
              <p className="text-3xl font-bold text-success-600 mt-2">
                ${(successStories.reduce((sum, story) => sum + story.impact, 0) / 1000000).toFixed(1)}M
              </p>
              <p className="text-sm text-success-700 mt-1">Cost savings & revenue</p>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <TrendingUp className="h-8 w-8 text-primary-600 mx-auto mb-2" />
              <h4 className="text-lg font-semibold text-primary-900">Avg Improvement</h4>
              <p className="text-3xl font-bold text-primary-600 mt-2">
                {Math.round(successStories.reduce((sum, story) => sum + story.metrics.improvement, 0) / successStories.length)}%
              </p>
              <p className="text-sm text-primary-700 mt-1">Average improvement</p>
            </div>
            <div className="text-center p-6 bg-warning-50 rounded-lg">
              <Users className="h-8 w-8 text-warning-600 mx-auto mb-2" />
              <h4 className="text-lg font-semibold text-warning-900">Participants</h4>
              <p className="text-3xl font-bold text-warning-600 mt-2">
                {successStories.reduce((sum, story) => sum + story.participants.length, 0)}
              </p>
              <p className="text-sm text-warning-700 mt-1">Total contributors</p>
            </div>
            <div className="text-center p-6 bg-accent-50 rounded-lg">
              <Award className="h-8 w-8 text-accent-600 mx-auto mb-2" />
              <h4 className="text-lg font-semibold text-accent-900">Success Stories</h4>
              <p className="text-3xl font-bold text-accent-600 mt-2">
                {successStories.length}
              </p>
              <p className="text-sm text-accent-700 mt-1">Completed initiatives</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
