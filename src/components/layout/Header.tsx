import { Bell, Search, User, Settings, ChevronDown } from 'lucide-react';
import { Input } from '../ui/Input';
import { cn } from '../../lib/utils';

const Header = () => {
  return (
    <header className="h-18 bg-gray-800/80 backdrop-blur-xl border-b border-gray-700/50 px-6 py-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">CR</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                CareReward
              </h1>
              <p className="text-sm text-gray-400">Healthcare Performance Platform</p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              variant="search"
              placeholder="Search metrics, reports, or users..."
              className="pl-10 bg-gray-700/50 border-gray-600/50 focus:border-emerald-400"
            />
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 backdrop-blur-sm">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
              3
            </span>
          </button>

          {/* Settings */}
          <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 backdrop-blur-sm">
            <Settings className="h-5 w-5" />
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3 bg-gray-700/50 rounded-xl px-3 py-2 backdrop-blur-sm border border-gray-600/30 hover:border-gray-500/50 transition-all duration-200">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-white">Dr. Sarah Johnson</p>
              <p className="text-xs text-gray-400">Chief Medical Officer</p>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;