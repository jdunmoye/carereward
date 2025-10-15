"use client"
// Fixed RefreshCw import issue
import React, { useState, useEffect } from "react";
import {
  Home,
  DollarSign,
  BarChart3,
  Users,
  ChevronDown,
  Moon,
  Sun,
  TrendingUp,
  Activity,
  Package,
  Bell,
  Settings,
  HelpCircle,
  User,
  Heart,
  Award,
  Target,
  RefreshCw,
  Filter,
  ArrowUpRight,
  Star,
  AlertTriangle,
  CheckCircle,
  Info,
  Clock,
  TrendingDown,
  FileText,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { 
  mockBehaviorAlerts,
  mockChronicConditions,
  mockUsers,
  mockEngagementMetrics,
  mockOpportunityMetrics,
} from "../../data/mockData";
import { formatCurrency, formatDate } from "../../utils/helpers";
// Import types from Dashboard
import { LineOfBusiness, ProductType, TimePeriod } from "../../pages/Dashboard";

export const Example = () => {
  const [isDark, setIsDark] = useState(false);
  const [lineOfBusiness, setLineOfBusiness] = useState<LineOfBusiness>('COMM');
  const [productType, setProductType] = useState<ProductType>('HMO');
  const [timePeriod, setTimePeriod] = useState<TimePeriod>('3m');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`flex min-h-screen w-full ${isDark ? 'dark' : ''}`}>
      <div className="flex w-full bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Sidebar />
        <ExampleContent 
          isDark={isDark} 
          setIsDark={setIsDark}
          lineOfBusiness={lineOfBusiness}
          setLineOfBusiness={setLineOfBusiness}
          productType={productType}
          setProductType={setProductType}
          timePeriod={timePeriod}
          setTimePeriod={setTimePeriod}
        />
      </div>
    </div>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <nav
      className={`sticky top-0 h-screen shrink-0 border-r transition-all duration-300 ease-in-out ${
        open ? 'w-64' : 'w-16'
      } border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-2 shadow-sm ${
        !open ? 'hover:w-20' : ''
      }`}
      style={{ width: open ? '256px' : '64px' }}
    >
      <TitleSection open={open} />

      <div className="space-y-1 mb-8">
        <NavLink to="/dashboard" className="block">
          <Option
            Icon={Home}
            title="Dashboard"
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
        </NavLink>
        <NavLink to="/financial-metrics" className="block">
          <Option
            Icon={DollarSign}
            title="Financial Metrics"
            selected={selected}
            setSelected={setSelected}
            open={open}
            notifs={3}
          />
        </NavLink>
        <NavLink to="/clinical-metrics" className="block">
          <Option
            Icon={Heart}
            title="Clinical Metrics"
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
        </NavLink>
        <NavLink to="/behavior-drivers" className="block">
          <Option
            Icon={Activity}
            title="Behavior Analytics"
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
        </NavLink>
        <NavLink to="/reward-system" className="block">
          <Option
            Icon={Award}
            title="Reward System"
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
        </NavLink>
        <NavLink to="/opportunity-analysis" className="block">
          <Option
            Icon={Target}
            title="Opportunity Analysis"
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
        </NavLink>
        <NavLink to="/reports" className="block">
          <Option
            Icon={FileText}
            title="Reports"
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
        </NavLink>
        <NavLink to="/use-cases" className="block">
          <Option
            Icon={Star}
            title="Use Cases"
            selected={selected}
            setSelected={setSelected}
            open={open}
            notifs={12}
          />
        </NavLink>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 pt-4 space-y-1">
        {open && (
          <div className="px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            Account
          </div>
        )}
        <NavLink to="/settings" className="block">
          <Option
            Icon={Settings}
            title="Settings"
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
        </NavLink>
        <NavLink to="/help" className="block">
          <Option
            Icon={HelpCircle}
            title="Help & Support"
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
        </NavLink>
      </div>

      <ToggleClose open={open} setOpen={setOpen} />
    </nav>
  );
};

interface OptionProps {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  selected: string;
  setSelected: (title: string) => void;
  open: boolean;
  notifs?: number;
}

const Option = ({ Icon, title, selected, setSelected, open, notifs }: OptionProps) => {
  const isSelected = selected === title;
  
  return (
    <div
      onClick={() => setSelected(title)}
      className={`relative flex h-11 w-full items-center rounded-md transition-all duration-200 cursor-pointer group ${
        isSelected 
          ? "bg-green-50 dark:bg-green-900/50 text-green-700 dark:text-green-300 shadow-sm border-l-2 border-green-500" 
          : "text-gray-600 dark:text-gray-400 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-700 dark:hover:text-green-300"
      }`}
      title={!open ? title : undefined}
    >
      <div className="grid h-full w-12 place-content-center">
        <Icon className={`h-5 w-5 transition-all duration-200 ${
          isSelected 
            ? "text-green-600 dark:text-green-400" 
            : "text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400"
        } ${!open ? "scale-110" : ""}`} />
      </div>
      
      {open && (
        <span className="text-sm font-medium transition-opacity duration-200 ml-3">
          {title}
        </span>
      )}

      {notifs && open && (
        <span className="absolute right-3 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 dark:bg-green-600 text-xs text-white font-medium">
          {notifs}
        </span>
      )}
      
      {/* Notification dot for collapsed state */}
      {notifs && !open && (
        <span className="absolute top-2 right-2 flex h-2 w-2 items-center justify-center rounded-full bg-red-500">
        </span>
      )}
    </div>
  );
};

interface TitleSectionProps {
  open: boolean;
}

const TitleSection = ({ open }: TitleSectionProps) => {
  return (
    <div className="mb-6 border-b border-gray-200 dark:border-gray-800 pb-4">
      <div className="flex cursor-pointer items-center justify-between rounded-md p-2 transition-colors hover:bg-green-50 dark:hover:bg-green-900/20">
        <div className="flex items-center gap-3">
          <Logo />
          {open && (
            <div className="flex items-center gap-2 transition-opacity duration-200">
              <div>
                <span className="block text-sm font-semibold text-gray-900 dark:text-gray-100">
                  CareReward
                </span>
                <span className="block text-xs text-gray-500 dark:text-gray-400">
                  Healthcare Analytics
                </span>
              </div>
            </div>
          )}
        </div>
        {open && (
          <ChevronDown className="h-4 w-4 text-gray-400 dark:text-gray-500" />
        )}
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="grid size-10 shrink-0 place-content-center rounded-lg bg-gradient-to-br from-green-500 to-green-600 shadow-sm hover:shadow-md transition-shadow">
      <svg
        width="20"
        height="16"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-white"
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        />
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        />
      </svg>
    </div>
  );
};

interface ToggleCloseProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ToggleClose = ({ open, setOpen }: ToggleCloseProps) => {
  return (
    <button
      onClick={() => setOpen(!open)}
      className={`absolute bottom-0 left-0 right-0 border-t border-gray-200 dark:border-gray-800 transition-colors hover:bg-green-50 dark:hover:bg-green-900/20 ${
        !open ? 'bg-green-50 dark:bg-green-900/20' : ''
      }`}
      title={open ? "Collapse sidebar" : "Expand sidebar"}
    >
      <div className="flex items-center p-3">
        <div className="grid size-10 place-content-center">
          {open ? (
            <PanelLeftClose
              className="h-5 w-5 transition-all duration-300 text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
            />
          ) : (
            <PanelLeftOpen
              className="h-5 w-5 transition-all duration-300 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
            />
          )}
        </div>
        {open && (
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300 transition-opacity duration-200 ml-3">
            Hide
          </span>
        )}
      </div>
    </button>
  );
};

interface ExampleContentProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
  lineOfBusiness: LineOfBusiness;
  setLineOfBusiness: (lob: LineOfBusiness) => void;
  productType: ProductType;
  setProductType: (pt: ProductType) => void;
  timePeriod: TimePeriod;
  setTimePeriod: (tp: TimePeriod) => void;
}

const ExampleContent = ({ 
  isDark, 
  setIsDark, 
  lineOfBusiness, 
  setLineOfBusiness, 
  productType, 
  setProductType, 
  timePeriod, 
  setTimePeriod 
}: ExampleContentProps) => {
  // State management
  const [loading, setLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'high_risk' | 'diabetes' | 'hypertension'>('all');

  // Dark mode effect
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);
  
  // Get the latest data
  const currentUser = mockUsers[0]; // Dr. Sarah Johnson
  const recentAlerts = mockBehaviorAlerts.slice(0, 5);
  const topOpportunities = mockOpportunityMetrics.slice(0, 3);
  const engagementData = mockEngagementMetrics[0];
  
  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };
  
  return (
    <div className="flex-1 bg-gray-50 dark:bg-gray-950 p-6 overflow-auto">
      {/* 1. HEADER SECTION */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">CareReward Dashboard Demo</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Healthcare analytics and population health insights</p>
        </div>
        
        {/* Control Selectors */}
        <div className="flex items-center gap-4 flex-wrap">
          {/* Time Period Selector */}
          <div className="flex bg-white dark:bg-gray-900 rounded-lg p-1 border border-gray-200 dark:border-gray-800">
            {(['1m', '3m', '6m', '1y'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimePeriod(range)}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
                  timePeriod === range
                    ? "bg-green-500 text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
                }`}
              >
                {range.toUpperCase()}
              </button>
            ))}
          </div>
          
          {/* Line of Business Dropdown */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Line of Business:</label>
            <select
              value={lineOfBusiness}
              onChange={(e) => setLineOfBusiness(e.target.value as LineOfBusiness)}
              className="text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-1 min-w-[140px]"
            >
              <option value="MCR">Medicare (MCR)</option>
              <option value="MCD">Medicaid (MCD)</option>
              <option value="COMM">Commercial (COMM)</option>
            </select>
          </div>
          
          {/* Product Type Dropdown */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Product Type:</label>
            <select
              value={productType}
              onChange={(e) => setProductType(e.target.value as ProductType)}
              className="text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-1 min-w-[100px]"
            >
              <option value="PPO">PPO</option>
              <option value="HMO">HMO</option>
              <option value="HSA">HSA</option>
              <option value="MMCD">MMCD</option>
              <option value="CHP">CHP</option>
              <option value="ESRD">ESRD</option>
            </select>
          </div>
          
          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="p-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
          </button>
          
          {/* Notifications */}
          <button className="relative p-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
            <Bell className="h-5 w-5" />
            {recentAlerts.length > 0 && (
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
            )}
          </button>
          
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-600 dark:hover:text-green-400 transition-colors"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          
          {/* User Profile */}
          <div className="flex items-center gap-3 bg-white dark:bg-gray-900 rounded-lg px-3 py-2 border border-gray-200 dark:border-gray-800 hover:border-green-300 dark:hover:border-green-600 transition-colors">
            <div className="h-8 w-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : 'Dr. Sarah Johnson'}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{currentUser.department}</p>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
      
      {/* 2. OVERVIEW WIDGETS SECTION */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Overview</h2>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value as any)}
              className="text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-1"
            >
              <option value="all">All Members</option>
              <option value="high_risk">High Risk</option>
              <option value="diabetes">Diabetes</option>
              <option value="hypertension">Hypertension</option>
            </select>
          </div>
        </div>
        
        {/* Financial Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <TrendingDown className="h-4 w-4 text-red-500" />
            </div>
            <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">Total PMPM</h3>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">$680</p>
            <p className="text-sm text-red-600 dark:text-red-400 mt-1">-2.5% vs. Prior Quarter</p>
          </div>
          
          <div className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </div>
            <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">Active Membership</h3>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">23,383</p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">+5% vs. Prior Quarter</p>
          </div>
          
          <div className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                <Heart className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <TrendingDown className="h-4 w-4 text-red-500" />
            </div>
            <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">Medical PMPM</h3>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">$517</p>
            <p className="text-sm text-red-600 dark:text-red-400 mt-1">-4.5% vs. Prior Quarter</p>
          </div>

          <div className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-800/30">
                <Package className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </div>
            <h3 className="font-medium text-green-700 dark:text-green-300 mb-1">Rx PMPM</h3>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">$163</p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">+2.1% vs. Prior Quarter</p>
          </div>
        </div>
        
        {/* Employee Population Health & Reward System Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Employee Population Health Status */}
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-500" />
                Population Health Status
              </h3>
              <NavLink to="/clinical-metrics" className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium">
                View Details
              </NavLink>
            </div>
            
            <div className="space-y-4">
              {mockChronicConditions.slice(0, 3).map((condition) => (
                <div key={condition.name} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{condition.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{condition.frequency}%</span>
                    <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000"
                        style={{ width: `${condition.frequency}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reward System Performance */}
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                <Award className="h-5 w-5 mr-2 text-amber-500" />
                Reward System Performance
              </h3>
              <NavLink to="/reward-system" className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium">
                View Details
              </NavLink>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Active Participants</span>
                <span className="text-lg font-bold text-gray-900 dark:text-gray-100">{engagementData?.participants?.toLocaleString() || '2,847'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Points Awarded (30d)</span>
                <span className="text-lg font-bold text-green-600 dark:text-green-400">1.2M</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Engagement Rate</span>
                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{engagementData?.participationRate || 78.5}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 3. QUICK ACTION BUTTONS */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'View Reports', icon: BarChart3, href: '/reports', color: 'blue' },
            { label: 'Manage Rewards', icon: Award, href: '/reward-system', color: 'amber' },
            { label: 'Clinical Metrics', icon: Heart, href: '/clinical-metrics', color: 'red' },
            { label: 'Opportunity Analysis', icon: Target, href: '/opportunity-analysis', color: 'green' },
          ].map((action) => (
            <NavLink
              key={action.label}
              to={action.href}
              className="group block p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${
                  action.color === 'blue' && 'from-blue-500 to-blue-600',
                  action.color === 'amber' && 'from-amber-500 to-amber-600',
                  action.color === 'red' && 'from-red-500 to-red-600',
                  action.color === 'green' && 'from-green-500 to-green-600'
                }`}>
                  <action.icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {action.label}
                </span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      {/* 4. KEY SEGMENTS PREVIEW */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Key Segments Preview</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Current State Financial & Clinical Metrics */}
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-blue-500" />
                Current State Metrics
              </h3>
              <NavLink to="/financial-metrics" className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium">
                View Details
              </NavLink>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Risk Score */}
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Risk Score</span>
                  <div className="p-1 rounded bg-amber-100 dark:bg-amber-900/30">
                    <Target className="h-3 w-3 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-gray-100">1.2</span>
              </div>
              
              {/* Risk Adjusted PMPM */}
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Risk Adjusted PMPM</span>
                  <div className="p-1 rounded bg-blue-100 dark:bg-blue-900/30">
                    <DollarSign className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-gray-100">$558</span>
              </div>
              
              {/* Member Satisfaction */}
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Member Satisfaction</span>
                  <div className="p-1 rounded bg-green-100 dark:bg-green-900/30">
                    <Heart className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-gray-100">92.1%</span>
              </div>
              
              {/* Quality Score */}
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Quality Score</span>
                  <div className="p-1 rounded bg-green-100 dark:bg-green-900/30">
                    <Star className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-gray-100">92%</span>
              </div>
              
              {/* Adherence Score */}
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Adherence Score</span>
                  <div className="p-1 rounded bg-blue-100 dark:bg-blue-900/30">
                    <CheckCircle className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-gray-100">85.7%</span>
              </div>
              
              {/* Compliance Score */}
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Compliance Score</span>
                  <div className="p-1 rounded bg-green-100 dark:bg-green-900/30">
                    <Award className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-gray-100">88.2%</span>
              </div>
            </div>
          </div>

          {/* Opportunity Analysis Summary */}
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                <Target className="h-5 w-5 mr-2 text-green-500" />
                Opportunity Analysis
              </h3>
              <NavLink to="/opportunity-analysis" className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium">
                View Details
              </NavLink>
            </div>
            
            <div className="space-y-4">
              {topOpportunities.map((opportunity, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div className="flex items-center space-x-3">
                    <div className={`h-2 w-2 rounded-full ${
                      opportunity.priority === 'high' ? 'bg-red-500' :
                      opportunity.priority === 'medium' ? 'bg-amber-500' : 'bg-green-500'
                    }`}></div>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{opportunity.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-green-600 dark:text-green-400">
                      {formatCurrency(opportunity.financialImpact)}
                    </span>
                    <p className="text-xs text-gray-500 dark:text-gray-400">ROI: {opportunity.roi}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5. NAVIGATION HUB */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Platform Navigation</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Analytics & Insights */}
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Analytics & Insights</h3>
            <div className="space-y-3">
              {[
                { label: 'Financial Metrics', icon: DollarSign, href: '/financial-metrics', description: 'PMPM analysis and cost trends' },
                { label: 'Clinical Metrics', icon: Heart, href: '/clinical-metrics', description: 'Health outcomes and quality measures' },
                { label: 'Behavior Analytics', icon: Activity, href: '/behavior-drivers', description: 'Engagement and risk patterns' },
              ].map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className="group flex items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-green-900/20 border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/20 group-hover:bg-green-100 dark:group-hover:bg-green-900/30 transition-colors">
                    <item.icon className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {item.label}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.description}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-green-500 transition-colors" />
                </NavLink>
              ))}
            </div>
          </div>

          {/* Program Management */}
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Program Management</h3>
            <div className="space-y-3">
              {[
                { label: 'Reward System', icon: Award, href: '/reward-system', description: 'Points, incentives, and engagement' },
                { label: 'Opportunity Analysis', icon: Target, href: '/opportunity-analysis', description: 'Cost savings and improvements' },
                { label: 'Use Cases', icon: Star, href: '/use-cases', description: 'Patient success stories and outcomes' },
              ].map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className="group flex items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-green-900/20 border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/20 group-hover:bg-green-100 dark:group-hover:bg-green-900/30 transition-colors">
                    <item.icon className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {item.label}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.description}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-green-500 transition-colors" />
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Alerts & Notifications Panel */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Recent Alerts & Notifications</h2>
          <NavLink to="/reports" className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium">
            View All
          </NavLink>
        </div>
        
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
          <div className="space-y-4">
            {recentAlerts.map((alert, i) => (
              <div
                key={i}
                className="flex items-start p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
              >
                <div className={`p-2 rounded-lg ${
                  alert.severity === 'high' ? 'bg-red-50 dark:bg-red-900/20' :
                  alert.severity === 'medium' ? 'bg-amber-50 dark:bg-amber-900/20' :
                  'bg-blue-50 dark:bg-blue-900/20'
                }`}>
                  {alert.severity === 'high' && <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400" />}
                  {alert.severity === 'medium' && <Info className="h-4 w-4 text-amber-600 dark:text-amber-400" />}
                  {alert.severity === 'low' && <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />}
                </div>
                <div className="ml-4 flex-1">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">{alert.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{alert.description}</p>
                  <div className="flex items-center mt-2 space-x-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      alert.severity === 'high' ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' :
                      alert.severity === 'medium' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300' :
                      'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                    }`}>
                      {alert.severity.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {formatDate(alert.createdAt)}
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

export { ExampleContent };
export default Example;
