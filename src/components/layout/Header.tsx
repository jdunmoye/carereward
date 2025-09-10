import { Bell, Search, User, Settings } from 'lucide-react';
import { Input } from '../ui/Input';

const Header = () => {
  return (
    <header className="h-18 bg-gray-700 border-b border-gray-600 px-6 py-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">CR</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-50">CareReward</h1>
              <p className="text-sm text-gray-400">Healthcare Performance Platform</p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <Input
            variant="search"
            placeholder="Search metrics, reports, or users..."
            icon={Search}
            iconPosition="left"
          />
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 text-gray-400 hover:text-gray-50 hover:bg-gray-600 rounded-lg transition-colors duration-200">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          {/* Settings */}
          <button className="p-2 text-gray-400 hover:text-gray-50 hover:bg-gray-600 rounded-lg transition-colors duration-200">
            <Settings className="h-5 w-5" />
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-50">Dr. Sarah Johnson</p>
              <p className="text-xs text-gray-400">Chief Medical Officer</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
