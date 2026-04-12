import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Callback from './pages/Callback';
import './App.css';
import Dashboard from './pages/Dashboard';
import TransactionReports from './pages/TransactionReports';
import QrDetails from './pages/QrDetails';
import LanguageUpdate from './pages/LanguageUpdate';
import DashboardLayout from './components/layout/DashboardLayout';

function App() {
  return (
    <>
      <Router>
        <Routes>     
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/redirected" element={<Callback />} />
          <Route 
            path="/dashboard" 
            element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/transaction-reports" 
            element={
              <DashboardLayout>
                <TransactionReports />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/qr-details" 
            element={
              <DashboardLayout>
                <QrDetails />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/language-update" 
            element={
              <DashboardLayout>
                <LanguageUpdate />
              </DashboardLayout>
            } 
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
