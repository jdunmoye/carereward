import { ExampleContent } from '../components/ui/dashboard-with-collapsible-sidebar';
import { useState } from 'react';

const Dashboard = () => {
  const [isDark, setIsDark] = useState(false); // Default to light mode
  
  return <ExampleContent isDark={isDark} setIsDark={setIsDark} />;
};

export default Dashboard;