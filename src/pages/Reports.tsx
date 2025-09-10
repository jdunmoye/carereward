import { FileText, Download, Filter, Calendar, BarChart3, PieChart, TrendingUp, Users } from 'lucide-react';

const Reports = () => {
  const reportTypes = [
    {
      id: 1,
      name: 'Financial Performance Report',
      type: 'financial' as const,
      description: 'Comprehensive analysis of cost savings, ROI, and financial metrics',
      lastGenerated: '2024-01-15',
      schedule: 'monthly' as const,
      recipients: 12,
    },
    {
      id: 2,
      name: 'Clinical Quality Metrics',
      type: 'clinical' as const,
      description: 'Patient outcomes, satisfaction scores, and quality indicators',
      lastGenerated: '2024-01-14',
      schedule: 'weekly' as const,
      recipients: 8,
    },
    {
      id: 3,
      name: 'Engagement Dashboard',
      type: 'engagement' as const,
      description: 'User participation, reward distribution, and program effectiveness',
      lastGenerated: '2024-01-13',
      schedule: 'daily' as const,
      recipients: 15,
    },
    {
      id: 4,
      name: 'Department Performance',
      type: 'custom' as const,
      description: 'Custom report comparing performance across departments',
      lastGenerated: '2024-01-12',
      schedule: 'quarterly' as const,
      recipients: 6,
    },
    {
      id: 5,
      name: 'Reward System Analytics',
      type: 'custom' as const,
      description: 'Detailed analysis of reward distribution and effectiveness',
      lastGenerated: '2024-01-11',
      schedule: 'monthly' as const,
      recipients: 10,
    },
    {
      id: 6,
      name: 'Compliance Report',
      type: 'custom' as const,
      description: 'Regulatory compliance and audit trail documentation',
      lastGenerated: '2024-01-10',
      schedule: 'quarterly' as const,
      recipients: 4,
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'financial': return 'success';
      case 'clinical': return 'primary';
      case 'engagement': return 'warning';
      case 'custom': return 'accent';
      default: return 'secondary';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'financial': return BarChart3;
      case 'clinical': return TrendingUp;
      case 'engagement': return Users;
      case 'custom': return FileText;
      default: return FileText;
    }
  };

  const recentReports = [
    {
      id: 1,
      name: 'Financial Performance Report - January 2024',
      type: 'financial',
      generatedBy: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      size: '2.4 MB',
      downloads: 8,
    },
    {
      id: 2,
      name: 'Clinical Quality Metrics - Week 2',
      type: 'clinical',
      generatedBy: 'System',
      date: '2024-01-14',
      size: '1.8 MB',
      downloads: 12,
    },
    {
      id: 3,
      name: 'Engagement Dashboard - Daily',
      type: 'engagement',
      generatedBy: 'System',
      date: '2024-01-13',
      size: '945 KB',
      downloads: 15,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900">Reports</h1>
          <p className="text-secondary-600 mt-1">
            Generate, schedule, and manage reports across all system metrics and data.
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="btn btn-outline btn-md">
            <Filter className="h-4 w-4 mr-2" />
            Filter Reports
          </button>
          <button className="btn btn-primary btn-md">
            <FileText className="h-4 w-4 mr-2" />
            Create Report
          </button>
        </div>
      </div>

      {/* Report Types Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reportTypes.map((report) => {
          const IconComponent = getTypeIcon(report.type);
          
          return (
            <div key={report.id} className="card hover:shadow-md transition-shadow duration-200">
              <div className="card-header">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <IconComponent className={`h-5 w-5 text-${getTypeColor(report.type)}-600`} />
                      <span className={`badge badge-${getTypeColor(report.type)}`}>
                        {report.type}
                      </span>
                      <span className="badge badge-secondary">
                        {report.schedule}
                      </span>
                    </div>
                    <h3 className="card-title text-lg">{report.name}</h3>
                    <p className="card-description">{report.description}</p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary-600">Last Generated</span>
                    <span className="font-medium text-secondary-900">
                      {new Date(report.lastGenerated).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary-600">Recipients</span>
                    <span className="font-medium text-secondary-900">{report.recipients}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary-600">Schedule</span>
                    <span className="font-medium text-secondary-900 capitalize">
                      {report.schedule}
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="flex space-x-2">
                  <button className="btn btn-ghost btn-sm flex-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule
                  </button>
                  <button className="btn btn-primary btn-sm flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Generate
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Reports */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Recent Reports</h3>
          <p className="card-description">
            Latest generated reports and their download statistics
          </p>
        </div>
        <div className="card-content">
          <div className="space-y-4">
            {recentReports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 rounded-lg bg-secondary-50">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 bg-${getTypeColor(report.type)}-100 rounded-lg flex items-center justify-center`}>
                    {(() => {
                      const IconComponent = getTypeIcon(report.type);
                      return <IconComponent className={`h-5 w-5 text-${getTypeColor(report.type)}-600`} />;
                    })()}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-secondary-900">
                      {report.name}
                    </p>
                    <p className="text-sm text-secondary-600">
                      Generated by {report.generatedBy} • {new Date(report.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium text-secondary-900">
                      {report.size}
                    </p>
                    <p className="text-xs text-secondary-500">
                      {report.downloads} downloads
                    </p>
                  </div>
                  <button className="btn btn-ghost btn-sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-ghost btn-sm">
            View all reports
          </button>
        </div>
      </div>

      {/* Report Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Report Usage */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Report Usage</h3>
            <p className="card-description">
              Most frequently generated and downloaded reports
            </p>
          </div>
          <div className="card-content">
            <div className="space-y-4">
              {[
                { name: 'Financial Performance Report', downloads: 45, generated: 12 },
                { name: 'Engagement Dashboard', downloads: 38, generated: 30 },
                { name: 'Clinical Quality Metrics', downloads: 32, generated: 16 },
                { name: 'Department Performance', downloads: 28, generated: 4 },
                { name: 'Reward System Analytics', downloads: 24, generated: 6 },
              ].map((report, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-secondary-900">{report.name}</p>
                    <p className="text-xs text-secondary-600">
                      {report.generated} generated, {report.downloads} downloads
                    </p>
                  </div>
                  <div className="w-20 bg-secondary-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(report.downloads / 45) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Report Schedule */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Scheduled Reports</h3>
            <p className="card-description">
              Upcoming automated report generations
            </p>
          </div>
          <div className="card-content">
            <div className="space-y-4">
              {[
                { name: 'Engagement Dashboard', schedule: 'Daily', nextRun: 'Tomorrow 8:00 AM', recipients: 15 },
                { name: 'Clinical Quality Metrics', schedule: 'Weekly', nextRun: 'Monday 9:00 AM', recipients: 8 },
                { name: 'Financial Performance Report', schedule: 'Monthly', nextRun: 'Feb 1, 10:00 AM', recipients: 12 },
                { name: 'Department Performance', schedule: 'Quarterly', nextRun: 'Apr 1, 11:00 AM', recipients: 6 },
              ].map((report, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary-50">
                  <div>
                    <p className="text-sm font-medium text-secondary-900">{report.name}</p>
                    <p className="text-xs text-secondary-600">
                      {report.schedule} • {report.recipients} recipients
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-medium text-secondary-900">{report.nextRun}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Report Templates */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Report Templates</h3>
          <p className="card-description">
            Pre-configured report templates for quick generation
          </p>
        </div>
        <div className="card-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Executive Summary', description: 'High-level overview for leadership', icon: BarChart3, color: 'primary' },
              { name: 'Department Comparison', description: 'Compare performance across departments', icon: PieChart, color: 'success' },
              { name: 'Trend Analysis', description: 'Historical trends and projections', icon: TrendingUp, color: 'warning' },
              { name: 'User Activity', description: 'Detailed user engagement metrics', icon: Users, color: 'accent' },
            ].map((template, index) => (
              <div key={index} className={`text-center p-6 bg-${template.color}-50 rounded-lg cursor-pointer hover:shadow-md transition-shadow duration-200`}>
                <template.icon className={`h-8 w-8 text-${template.color}-600 mx-auto mb-2`} />
                <h4 className={`text-lg font-semibold text-${template.color}-900`}>{template.name}</h4>
                <p className={`text-sm text-${template.color}-700 mt-1`}>{template.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
