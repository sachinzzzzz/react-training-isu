import { LayoutDashboard, FileText, QrCode, Languages, HelpCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div className="pnb-logo-container">
          <div className="pnb-logo-placeholder">pnb</div>
        </div>
      </div>
      <div className="sidebar-nav">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/transaction-reports" className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}>
          <FileText size={20} />
          <span>Transaction Reports</span>
        </NavLink>
        <NavLink to="/qr-details" className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}>
          <QrCode size={20} />
          <span>QR Details</span>
        </NavLink>
        <NavLink to="/language-update" className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}>
          <Languages size={20} />
          <span>Language Update</span>
        </NavLink>
        <div className="sidebar-item">
          <HelpCircle size={20} />
          <span>Help & Support</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
