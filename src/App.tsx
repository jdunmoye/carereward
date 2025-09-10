import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import FinancialMetrics from './pages/FinancialMetrics';
import ClinicalMetrics from './pages/ClinicalMetrics';
import BehaviorDrivers from './pages/BehaviorDrivers';
import OpportunityAnalysis from './pages/OpportunityAnalysis';
import RewardSystem from './pages/RewardSystem';
import SuccessStories from './pages/SuccessStories';
import Settings from './pages/Settings';
import Reports from './pages/Reports';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/financial-metrics" element={<FinancialMetrics />} />
        <Route path="/clinical-metrics" element={<ClinicalMetrics />} />
        <Route path="/behavior-drivers" element={<BehaviorDrivers />} />
        <Route path="/opportunity-analysis" element={<OpportunityAnalysis />} />
        <Route path="/reward-system" element={<RewardSystem />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Layout>
  );
}

export default App;
