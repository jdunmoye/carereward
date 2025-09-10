import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  DollarSign,
  Activity,
  Target,
  TrendingUp,
  Award,
  Star,
  Settings,
  FileText,
  ChevronRight
} from 'lucide-react';
import { NavigationItem } from '../../types';

const navigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard',
    icon: 'LayoutDashboard',
  },
  {
    id: 'financial',
    label: 'Financial Metrics',
    path: '/financial-metrics',
    icon: 'DollarSign',
  },
  {
    id: 'clinical',
    label: 'Clinical Metrics',
    path: '/clinical-metrics',
    icon: 'Activity',
  },
  {
    id: 'behavior',
    label: 'Behavior Drivers',
    path: '/behavior-drivers',
    icon: 'Target',
  },
  {
    id: 'opportunity',
    label: 'Opportunity Analysis',
    path: '/opportunity-analysis',
    icon: 'TrendingUp',
  },
  {
    id: 'rewards',
    label: 'Reward System',
    path: '/reward-system',
    icon: 'Award',
  },
  {
    id: 'stories',
    label: 'Success Stories',
    path: '/success-stories',
    icon: 'Star',
  },
  {
    id: 'reports',
    label: 'Reports',
    path: '/reports',
    icon: 'FileText',
  },
  {
    id: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: 'Settings',
  },
];

const iconMap = {
  LayoutDashboard,
  DollarSign,
  Activity,
  Target,
  TrendingUp,
  Award,
  Star,
  Settings,
  FileText,
  ChevronRight,
};

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-secondary-200 overflow-y-auto">
      <nav className="p-4">
        <div className="sidebar-nav">
          {navigationItems.map((item) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            
            return (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `sidebar-nav-item ${isActive ? 'active' : ''}`
                }
              >
                <IconComponent className="sidebar-nav-item-icon" />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-8 p-4 bg-primary-50 rounded-lg">
          <h3 className="text-sm font-semibold text-primary-900 mb-3">Quick Stats</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-primary-700">Active Rewards</span>
              <span className="font-medium text-primary-900">24</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-primary-700">Points Awarded</span>
              <span className="font-medium text-primary-900">12,450</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-primary-700">Participants</span>
              <span className="font-medium text-primary-900">156</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-4 p-4 bg-secondary-50 rounded-lg">
          <h3 className="text-sm font-semibold text-secondary-900 mb-3">Recent Activity</h3>
          <div className="space-y-2">
            <div className="text-xs text-secondary-600">
              <p className="font-medium">New reward earned</p>
              <p className="text-secondary-500">Dr. Smith - 2 hours ago</p>
            </div>
            <div className="text-xs text-secondary-600">
              <p className="font-medium">Goal achieved</p>
              <p className="text-secondary-500">Cardiology Dept - 4 hours ago</p>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
