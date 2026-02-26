import { Routes, Route, Navigate } from 'react-router-dom';
import ResetPasswordPage from './pages/ResetPasswordPage';
import DepartmentsPage from './pages/DepartmentsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/departments" replace />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/departments" element={<DepartmentsPage />} />
    </Routes>
  );
}

export default App;
