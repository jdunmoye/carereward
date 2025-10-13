import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import CurrentSituation from './pages/CurrentSituation';
import FinancialMetrics from './pages/FinancialMetrics';
import ClinicalMetrics from './pages/ClinicalMetrics';
import BehaviorDrivers from './pages/BehaviorDrivers';
import OpportunityAnalysis from './pages/OpportunityAnalysis';
import RewardSystem from './pages/RewardSystem';
import UseCases from './pages/UseCases';
import UseCaseDetails from './components/UseCaseDetails';
import Settings from './pages/Settings';
import Reports from './pages/Reports';
import DemoOne from './demo';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/demo" element={<DemoOne />} />
        <Route path="/*" element={
          <DashboardLayout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/current-situation" element={<CurrentSituation />} />
              <Route path="/financial-metrics" element={<FinancialMetrics />} />
              <Route path="/clinical-metrics" element={<ClinicalMetrics />} />
              <Route path="/behavior-drivers" element={<BehaviorDrivers />} />
              <Route path="/opportunity-analysis" element={<OpportunityAnalysis />} />
              <Route path="/reward-system" element={<RewardSystem />} />
              <Route path="/use-cases" element={<UseCases />} />
              <Route path="/use-cases/:id" element={<UseCaseDetails />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </DashboardLayout>
        } />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
