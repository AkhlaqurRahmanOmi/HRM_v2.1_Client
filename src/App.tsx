import { Routes, Route, Navigate } from 'react-router-dom';
import ResetPasswordPage from './pages/ResetPasswordPage';
import DepartmentsPage from './pages/DepartmentsPage';
import OnboardingCompanyDetailsPage from './pages/OnboardingCompanyDetailsPage';
import OnboardingReviewPage from './pages/OnboardingReviewPage';
import EmployeeProfilePage from './pages/EmployeeProfilePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/departments" replace />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/departments" element={<DepartmentsPage />} />
      <Route path="/onboarding/step-2" element={<OnboardingCompanyDetailsPage />} />
      <Route path="/onboarding/review" element={<OnboardingReviewPage />} />
      <Route path="/employee-profile" element={<EmployeeProfilePage />} />
    </Routes>
  );
}

export default App;
