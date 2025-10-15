import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  BarChart3,
  ChevronDown,
  Settings,
  HelpCircle,
  Heart,
  Award,
  Target,
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react';

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  selected: string;
  setSelected: (selected: string) => void;
}

interface OptionProps {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  selected: string;
  setSelected: (title: string) => void;
  open: boolean;
  notifs?: number;
}

interface TitleSectionProps {
  open: boolean;
}

interface ToggleCloseProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar = ({ open, setOpen, selected, setSelected }: SidebarProps) => {
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
        <NavLink to="/current-situation" className="block">
          <Option
            Icon={BarChart3}
            title="Current Situation"
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
        </NavLink>
        {/* <NavLink to="/financial-metrics" className="block">
          <Option
            Icon={DollarSign}
            title="Financial Metrics"
            selected={selected}
            setSelected={setSelected}
            open={open}
            notifs={3}
          />
        </NavLink> */}
        <NavLink to="/clinical-metrics" className="block">
          <Option
            Icon={Heart}
            title="Clinical Metrics"
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
        </NavLink>
        {/* <NavLink to="/behavior-drivers" className="block">
          <Option
            Icon={Activity}
            title="Behavior Analytics"
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
        </NavLink> */}
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
        {/* <NavLink to="/reports" className="block">
          <Option
            Icon={FileText}
            title="Reports"
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
        </NavLink> */}
        {/* <NavLink to="/use-cases" className="block">
          <Option
            Icon={Star}
            title="Use Cases"
            selected={selected}
            setSelected={setSelected}
            open={open}
            notifs={12}
          />
        </NavLink> */}
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
                  CareReward Demo
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

export default Sidebar;