import { User, Bell, Shield, Database, Palette, Save } from 'lucide-react';

const Settings = () => {
  const settingsSections = [
    {
      id: 'profile',
      title: 'Profile Settings',
      description: 'Manage your personal information and preferences',
      icon: User,
      color: 'primary',
    },
    {
      id: 'notifications',
      title: 'Notifications',
      description: 'Configure notification preferences and alerts',
      icon: Bell,
      color: 'warning',
    },
    {
      id: 'security',
      title: 'Security & Privacy',
      description: 'Manage security settings and privacy controls',
      icon: Shield,
      color: 'accent',
    },
    {
      id: 'data',
      title: 'Data Management',
      description: 'Configure data export, backup, and retention policies',
      icon: Database,
      color: 'success',
    },
    {
      id: 'appearance',
      title: 'Appearance',
      description: 'Customize theme, colors, and display preferences',
      icon: Palette,
      color: 'secondary',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900">Settings</h1>
          <p className="text-secondary-600 mt-1">
            Manage your account settings, preferences, and system configuration.
          </p>
        </div>
        <button className="btn btn-primary btn-md">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </button>
      </div>

      {/* Settings Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {settingsSections.map((section) => {
          const IconComponent = section.icon;
          
          return (
            <div key={section.id} className="card hover:shadow-md transition-shadow duration-200 cursor-pointer">
              <div className="card-content">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-${section.color}-100`}>
                    <IconComponent className={`h-6 w-6 text-${section.color}-600`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-secondary-900">
                      {section.title}
                    </h3>
                    <p className="text-sm text-secondary-600 mt-1">
                      {section.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Profile Settings */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Profile Settings</h3>
          <p className="card-description">
            Update your personal information and account details
          </p>
        </div>
        <div className="card-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="label">Full Name</label>
                <input
                  type="text"
                  defaultValue="Dr. Sarah Johnson"
                  className="input"
                />
              </div>
              <div>
                <label className="label">Email Address</label>
                <input
                  type="email"
                  defaultValue="sarah.johnson@carealign.com"
                  className="input"
                />
              </div>
              <div>
                <label className="label">Department</label>
                <select className="input">
                  <option value="cardiology">Cardiology</option>
                  <option value="emergency">Emergency Medicine</option>
                  <option value="surgery">Surgery</option>
                  <option value="pediatrics">Pediatrics</option>
                </select>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="label">Job Title</label>
                <input
                  type="text"
                  defaultValue="Chief Medical Officer"
                  className="input"
                />
              </div>
              <div>
                <label className="label">Phone Number</label>
                <input
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
                  className="input"
                />
              </div>
              <div>
                <label className="label">Role</label>
                <select className="input">
                  <option value="admin">Administrator</option>
                  <option value="manager">Manager</option>
                  <option value="provider">Healthcare Provider</option>
                  <option value="analyst">Analyst</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Notification Preferences</h3>
          <p className="card-description">
            Choose how you want to be notified about important updates
          </p>
        </div>
        <div className="card-content">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-secondary-900">Email Notifications</h4>
                <p className="text-sm text-secondary-600">Receive notifications via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-secondary-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-secondary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-secondary-900">Push Notifications</h4>
                <p className="text-sm text-secondary-600">Receive push notifications in browser</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-secondary-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-secondary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-secondary-900">Reward Notifications</h4>
                <p className="text-sm text-secondary-600">Get notified when you earn rewards</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-secondary-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-secondary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-secondary-900">Goal Reminders</h4>
                <p className="text-sm text-secondary-600">Reminders about goals and deadlines</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-secondary-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-secondary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Security Settings</h3>
          <p className="card-description">
            Manage your account security and privacy settings
          </p>
        </div>
        <div className="card-content">
          <div className="space-y-6">
            <div>
              <label className="label">Current Password</label>
              <input type="password" className="input" placeholder="Enter current password" />
            </div>
            <div>
              <label className="label">New Password</label>
              <input type="password" className="input" placeholder="Enter new password" />
            </div>
            <div>
              <label className="label">Confirm New Password</label>
              <input type="password" className="input" placeholder="Confirm new password" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-secondary-900">Two-Factor Authentication</h4>
                <p className="text-sm text-secondary-600">Add an extra layer of security to your account</p>
              </div>
              <button className="btn btn-outline btn-sm">Enable 2FA</button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-secondary-900">Session Timeout</h4>
                <p className="text-sm text-secondary-600">Automatically log out after inactivity</p>
              </div>
              <select className="input w-32">
                <option value="15">15 minutes</option>
                <option value="30" selected>30 minutes</option>
                <option value="60">1 hour</option>
                <option value="120">2 hours</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* System Settings */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">System Configuration</h3>
          <p className="card-description">
            Configure system-wide settings and preferences
          </p>
        </div>
        <div className="card-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="label">Default Dashboard View</label>
                <select className="input">
                  <option value="overview">Overview</option>
                  <option value="detailed">Detailed</option>
                  <option value="compact">Compact</option>
                </select>
              </div>
              <div>
                <label className="label">Date Format</label>
                <select className="input">
                  <option value="mm/dd/yyyy">MM/DD/YYYY</option>
                  <option value="dd/mm/yyyy">DD/MM/YYYY</option>
                  <option value="yyyy-mm-dd">YYYY-MM-DD</option>
                </select>
              </div>
              <div>
                <label className="label">Time Zone</label>
                <select className="input">
                  <option value="EST">Eastern Time (EST)</option>
                  <option value="CST">Central Time (CST)</option>
                  <option value="MST">Mountain Time (MST)</option>
                  <option value="PST">Pacific Time (PST)</option>
                </select>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="label">Language</label>
                <select className="input">
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>
              <div>
                <label className="label">Theme</label>
                <select className="input">
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="auto">Auto</option>
                </select>
              </div>
              <div>
                <label className="label">Items Per Page</label>
                <select className="input">
                  <option value="10">10</option>
                  <option value="25" selected>25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
