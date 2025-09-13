import { ExampleContent } from '../components/ui/dashboard-with-collapsible-sidebar';
import { useState } from 'react';

// TypeScript interfaces for dropdown selections
export type LineOfBusiness = 'MCR' | 'MCD' | 'COMM';
export type ProductType = 'PPO' | 'HMO' | 'HSA' | 'MMCD' | 'CHP' | 'ESRD';
export type TimePeriod = '1m' | '3m' | '6m' | '1y';

const Dashboard = () => {
  const [isDark, setIsDark] = useState(false); // Default to light mode
  const [lineOfBusiness, setLineOfBusiness] = useState<LineOfBusiness>('COMM'); // Default to Commercial
  const [productType, setProductType] = useState<ProductType>('HMO'); // Default to HMO
  const [timePeriod, setTimePeriod] = useState<TimePeriod>('3m'); // Default to 3 months
  
  return (
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
  );
};

export default Dashboard;