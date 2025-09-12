import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useTheme } from "../../contexts/ThemeContext";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { isDark } = useTheme();
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");
  const location = useLocation();

  // Update selected based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path === '/dashboard' || path === '/') {
      setSelected('Dashboard');
    } else if (path === '/current-situation') {
      setSelected('Current Situation');
    } else if (path === '/financial-metrics') {
      setSelected('Financial Metrics');
    } else if (path === '/clinical-metrics') {
      setSelected('Clinical Metrics');
    } else if (path === '/behavior-drivers') {
      setSelected('Behavior Analytics');
    } else if (path === '/reward-system') {
      setSelected('Reward System');
    } else if (path === '/opportunity-analysis') {
      setSelected('Opportunity Analysis');
    } else if (path === '/reports') {
      setSelected('Reports');
    } else if (path === '/success-stories') {
      setSelected('Success Stories');
    } else if (path === '/settings') {
      setSelected('Settings');
    } else if (path === '/help') {
      setSelected('Help & Support');
    }
  }, [location.pathname]);

  return (
    <div className={`flex min-h-screen w-full ${isDark ? 'dark' : ''}`}>
      <div className="flex w-full bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Sidebar open={open} setOpen={setOpen} selected={selected} setSelected={setSelected} />
        <div className="flex-1 bg-gray-50 dark:bg-gray-950 p-6 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
