import { TrendingUp, Target, Users, DollarSign, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const OpportunityAnalysis = () => {
  const opportunities = [
    {
      id: 1,
      title: 'Telemedicine Integration',
      description: 'Implement telemedicine platform to reduce patient visits and improve access',
      category: 'innovation' as const,
      priority: 'high' as const,
      potentialImpact: 850000,
      effort: 'medium' as const,
      timeline: '6 months',
      status: 'in_progress' as const,
      owner: 'Dr. Sarah Johnson',
      department: 'IT & Clinical',
    },
    {
      id: 2,
      title: 'Medication Reconciliation Process',
      description: 'Streamline medication reconciliation to reduce errors and improve safety',
      category: 'quality_improvement' as const,
      priority: 'high' as const,
      potentialImpact: 450000,
      effort: 'low' as const,
      timeline: '3 months',
      status: 'identified' as const,
      owner: 'Pharmacy Team',
      department: 'Pharmacy',
    },
    {
      id: 3,
      title: 'Predictive Analytics for Readmissions',
      description: 'Use AI to predict and prevent patient readmissions',
      category: 'cost_savings' as const,
      priority: 'medium' as const,
      potentialImpact: 1200000,
      effort: 'high' as const,
      timeline: '12 months',
      status: 'identified' as const,
      owner: 'Data Analytics Team',
      department: 'Analytics',
    },
    {
      id: 4,
      title: 'Staff Scheduling Optimization',
      description: 'Optimize staff scheduling to reduce overtime and improve efficiency',
      category: 'efficiency' as const,
      priority: 'medium' as const,
      potentialImpact: 320000,
      effort: 'medium' as const,
      timeline: '4 months',
      status: 'completed' as const,
      owner: 'HR Department',
      department: 'Human Resources',
    },
    {
      id: 5,
      title: 'Patient Portal Enhancement',
      description: 'Enhance patient portal with appointment scheduling and health records',
      category: 'patient_care' as const,
      priority: 'low' as const,
      potentialImpact: 280000,
      effort: 'medium' as const,
      timeline: '5 months',
      status: 'cancelled' as const,
      owner: 'IT Department',
      department: 'Information Technology',
    },
    {
      id: 6,
      title: 'Supply Chain Optimization',
      description: 'Optimize medical supply ordering and inventory management',
      category: 'cost_savings' as const,
      priority: 'high' as const,
      potentialImpact: 650000,
      effort: 'low' as const,
      timeline: '2 months',
      status: 'in_progress' as const,
      owner: 'Supply Chain Manager',
      department: 'Operations',
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'accent';
      case 'medium': return 'warning';
      case 'low': return 'secondary';
      default: return 'secondary';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'success';
      case 'in_progress': return 'primary';
      case 'identified': return 'warning';
      case 'cancelled': return 'accent';
      default: return 'secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'in_progress': return Clock;
      case 'identified': return Target;
      case 'cancelled': return AlertCircle;
      default: return Target;
    }
  };

  const getEffortColor = (effort: string) => {
    switch (effort) {
      case 'low': return 'success';
      case 'medium': return 'warning';
      case 'high': return 'accent';
      default: return 'secondary';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900">Opportunity Analysis</h1>
          <p className="text-secondary-600 mt-1">
            Identify, prioritize, and track improvement opportunities across the organization.
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="btn btn-outline btn-md">
            <Target className="h-4 w-4 mr-2" />
            Add Opportunity
          </button>
          <button className="btn btn-primary btn-md">
            <TrendingUp className="h-4 w-4 mr-2" />
            Generate Report
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="metric-card">
          <div className="card-content">
            <div className="flex items-center justify-between">
              <div>
                <p className="metric-label">Total Opportunities</p>
                <p className="metric-value">6</p>
              </div>
              <div className="p-3 rounded-lg bg-primary-100">
                <Target className="h-6 w-6 text-primary-600" />
              </div>
            </div>
          </div>
        </div>
        <div className="metric-card">
          <div className="card-content">
            <div className="flex items-center justify-between">
              <div>
                <p className="metric-label">In Progress</p>
                <p className="metric-value">2</p>
              </div>
              <div className="p-3 rounded-lg bg-warning-100">
                <Clock className="h-6 w-6 text-warning-600" />
              </div>
            </div>
          </div>
        </div>
        <div className="metric-card">
          <div className="card-content">
            <div className="flex items-center justify-between">
              <div>
                <p className="metric-label">Potential Impact</p>
                <p className="metric-value">$3.75M</p>
              </div>
              <div className="p-3 rounded-lg bg-success-100">
                <DollarSign className="h-6 w-6 text-success-600" />
              </div>
            </div>
          </div>
        </div>
        <div className="metric-card">
          <div className="card-content">
            <div className="flex items-center justify-between">
              <div>
                <p className="metric-label">Completed</p>
                <p className="metric-value">1</p>
              </div>
              <div className="p-3 rounded-lg bg-success-100">
                <CheckCircle className="h-6 w-6 text-success-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {opportunities.map((opportunity) => {
          const StatusIcon = getStatusIcon(opportunity.status);
          
          return (
            <div key={opportunity.id} className="card">
              <div className="card-header">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="card-title text-lg">{opportunity.title}</h3>
                      <span className={`badge badge-${getPriorityColor(opportunity.priority)}`}>
                        {opportunity.priority} priority
                      </span>
                      <span className={`badge badge-${getStatusColor(opportunity.status)}`}>
                        {opportunity.status.replace('_', ' ')}
                      </span>
                    </div>
                    <p className="card-description">{opportunity.description}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <StatusIcon className={`h-5 w-5 text-${getStatusColor(opportunity.status)}-600`} />
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-secondary-600">Category</p>
                    <p className="text-sm font-medium text-secondary-900 capitalize">
                      {opportunity.category.replace('_', ' ')}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-600">Effort</p>
                    <span className={`badge badge-${getEffortColor(opportunity.effort)}`}>
                      {opportunity.effort}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-600">Timeline</p>
                    <p className="text-sm font-medium text-secondary-900">{opportunity.timeline}</p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-600">Owner</p>
                    <p className="text-sm font-medium text-secondary-900">{opportunity.owner}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary-600">Potential Impact</span>
                    <span className="font-medium text-success-600">
                      ${(opportunity.potentialImpact / 1000).toFixed(0)}K
                    </span>
                  </div>
                  <div className="w-full bg-secondary-200 rounded-full h-2">
                    <div
                      className="bg-success-600 h-2 rounded-full transition-all duration-300"
                      style={{ 
                        width: `${Math.min((opportunity.potentialImpact / 1200000) * 100, 100)}%` 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="flex justify-between items-center w-full">
                  <div className="text-sm text-secondary-600">
                    <span className="font-medium">{opportunity.department}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="btn btn-ghost btn-sm">View Details</button>
                    <button className="btn btn-primary btn-sm">Update Status</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Impact vs Effort Matrix */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Impact vs Effort Matrix</h3>
          <p className="card-description">
            Visual representation of opportunities based on potential impact and required effort
          </p>
        </div>
        <div className="card-content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* High Impact, Low Effort */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-success-900">High Impact, Low Effort</h4>
              <div className="space-y-3">
                {opportunities
                  .filter(opp => opp.priority === 'high' && opp.effort === 'low')
                  .map(opp => (
                    <div key={opp.id} className="p-3 bg-success-50 rounded-lg border border-success-200">
                      <h5 className="font-medium text-success-900">{opp.title}</h5>
                      <p className="text-sm text-success-700 mt-1">
                        ${(opp.potentialImpact / 1000).toFixed(0)}K impact
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            {/* High Impact, High Effort */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-warning-900">High Impact, High Effort</h4>
              <div className="space-y-3">
                {opportunities
                  .filter(opp => opp.priority === 'high' && opp.effort === 'high')
                  .map(opp => (
                    <div key={opp.id} className="p-3 bg-warning-50 rounded-lg border border-warning-200">
                      <h5 className="font-medium text-warning-900">{opp.title}</h5>
                      <p className="text-sm text-warning-700 mt-1">
                        ${(opp.potentialImpact / 1000).toFixed(0)}K impact
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Medium Impact, Medium Effort */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary-900">Medium Impact, Medium Effort</h4>
              <div className="space-y-3">
                {opportunities
                  .filter(opp => opp.priority === 'medium' && opp.effort === 'medium')
                  .map(opp => (
                    <div key={opp.id} className="p-3 bg-primary-50 rounded-lg border border-primary-200">
                      <h5 className="font-medium text-primary-900">{opp.title}</h5>
                      <p className="text-sm text-primary-700 mt-1">
                        ${(opp.potentialImpact / 1000).toFixed(0)}K impact
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityAnalysis;
