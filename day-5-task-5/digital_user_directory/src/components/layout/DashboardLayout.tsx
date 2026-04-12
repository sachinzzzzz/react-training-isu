import type { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import './DashboardLayout.css';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="main-area">
        <Header />
        <div className="content-area">
          {children}
        </div>
      </div>
    </div>
  );
}
