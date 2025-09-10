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
    <aside className="fixed left-0 top-18 h-[calc(100vh-4.5rem)] w-70 bg-gray-900 border-r border-gray-600 overflow-y-auto">
      <nav className="p-4">
        <div className="space-y-1">
          {navigationItems.map((item) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            
            return (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center h-12 px-4 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive 
                      ? 'bg-green-600 text-gray-50' 
                      : 'text-gray-400 hover:bg-gray-700 hover:text-gray-50'
                  }`
                }
              >
                <IconComponent className="w-5 h-5 mr-3" />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-8 p-4 bg-gray-700 rounded-lg border border-gray-600">
          <h3 className="text-sm font-semibold text-gray-50 mb-3">Quick Stats</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Active Rewards</span>
              <span className="font-medium text-gray-50">24</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Points Awarded</span>
              <span className="font-medium text-gray-50">12,450</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Participants</span>
              <span className="font-medium text-gray-50">156</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-4 p-4 bg-gray-700 rounded-lg border border-gray-600">
          <h3 className="text-sm font-semibold text-gray-50 mb-3">Recent Activity</h3>
          <div className="space-y-2">
            <div className="text-xs text-gray-400">
              <p className="font-medium text-gray-50">New reward earned</p>
              <p className="text-gray-500">Dr. Smith - 2 hours ago</p>
            </div>
            <div className="text-xs text-gray-400">
              <p className="font-medium text-gray-50">Goal achieved</p>
              <p className="text-gray-500">Cardiology Dept - 4 hours ago</p>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
