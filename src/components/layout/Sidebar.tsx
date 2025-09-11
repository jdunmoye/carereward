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
  ChevronRight,
  Users,
  Zap
} from 'lucide-react';
import { NavigationItem } from '../../types';
import { cn } from '../../lib/utils';

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
  Users,
  Zap,
};

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-18 h-[calc(100vh-4.5rem)] w-70 bg-gray-900/80 backdrop-blur-xl border-r border-gray-700/50 overflow-y-auto">
      <nav className="p-4">
        <div className="space-y-2">
          {navigationItems.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            
            return (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center h-12 px-4 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-sm",
                    isActive 
                      ? "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-white border border-emerald-500/30 shadow-lg shadow-emerald-500/10" 
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  )
                }
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: 'fadeInLeft 0.6s ease-out forwards'
                }}
              >
                <IconComponent className="w-5 h-5 mr-3" />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-8 p-4 bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50">
          <h3 className="text-sm font-semibold text-white mb-3 flex items-center">
            <Zap className="h-4 w-4 mr-2 text-emerald-400" />
            Quick Stats
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Active Rewards</span>
              <span className="font-bold text-emerald-400">24</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Points Awarded</span>
              <span className="font-bold text-blue-400">12,450</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Participants</span>
              <span className="font-bold text-purple-400">156</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-4 p-4 bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50">
          <h3 className="text-sm font-semibold text-white mb-3 flex items-center">
            <Activity className="h-4 w-4 mr-2 text-amber-400" />
            Recent Activity
          </h3>
          <div className="space-y-3">
            <div className="text-xs">
              <p className="font-medium text-white">New reward earned</p>
              <p className="text-gray-400">Dr. Smith - 2 hours ago</p>
            </div>
            <div className="text-xs">
              <p className="font-medium text-white">Goal achieved</p>
              <p className="text-gray-400">Cardiology Dept - 4 hours ago</p>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;