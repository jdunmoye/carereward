import { ExampleContent } from '../components/ui/dashboard-with-collapsible-sidebar';
import { useState } from 'react';

const Dashboard = () => {
  const [isDark, setIsDark] = useState(true); // Default to dark mode
  
  return <ExampleContent isDark={isDark} setIsDark={setIsDark} />;
};

export default Dashboard;