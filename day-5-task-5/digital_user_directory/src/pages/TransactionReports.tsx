import { useState } from 'react';
import { Search, Download, ArrowUpDown, ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import './TransactionReports.css';

const MOCK_DATA = [
  { id: '703118109867', rrn: '703118109867', amount: '10,000', date: '24/02/2026, 12:23 PM', status: 'Received' },
  { id: '703118109862', rrn: '703118109862', amount: '10,000', date: '24/02/2026, 12:23 PM', status: 'Received' },
  { id: '703118109865', rrn: '703118109865', amount: '10,000', date: '24/02/2026, 12:23 PM', status: 'Received' },
  { id: '703118109860', rrn: '703118109860', amount: '10,000', date: '24/02/2026, 12:23 PM', status: 'Received' },
];

const TransactionReports = () => {
  const [filter, setFilter] = useState('monthly');

  return (
    <div className="transaction-reports-container">
      <h1 className="page-title">Transaction Reports</h1>

      {/* Filter Section */}
      <div className="filter-card">
        <label className="filter-label">Select a Report Filter</label>
        <div className="radio-group">
          <label className="radio-label">
            <input 
              type="radio" 
              name="reportFilter" 
              value="today" 
              checked={filter === 'today'}
              onChange={() => setFilter('today')}
            />
            <span>Today</span>
          </label>
          <label className="radio-label">
            <input 
              type="radio" 
              name="reportFilter" 
              value="monthly" 
              checked={filter === 'monthly'}
              onChange={() => setFilter('monthly')}
            />
            <span>Monthly</span>
          </label>
          <label className="radio-label">
            <input 
              type="radio" 
              name="reportFilter" 
              value="custom" 
              checked={filter === 'custom'}
              onChange={() => setFilter('custom')}
            />
            <span>Custom Range</span>
          </label>
        </div>

        {filter === 'monthly' && (
          <div className="filter-actions">
            <span className="filter-subtext">Monthly</span>
            <div className="filter-row">
              <select className="report-select">
                <option>Last 3 Month Report</option>
                <option>Last 6 Month Report</option>
                <option>Last 1 Year Report</option>
              </select>
              <button className="submit-btn">Submit</button>
            </div>
          </div>
        )}
      </div>

      {/* Table Section */}
      <div className="table-card">
        <div className="table-toolbar">
          <div className="search-container">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search here..." className="search-input" />
          </div>
          <button className="download-btn">
            <Download size={18} />
            <span>Download</span>
          </button>
        </div>

        <div className="table-responsive">
          <table className="transaction-table">
            <thead>
              <tr>
                <th>S. No. <ArrowUpDown size={14} className="sort-icon" /></th>
                <th>Transaction ID <ArrowUpDown size={14} className="sort-icon" /></th>
                <th>RRN Number <ArrowUpDown size={14} className="sort-icon" /></th>
                <th>Amount <ArrowUpDown size={14} className="sort-icon" /></th>
                <th>Date <ArrowUpDown size={14} className="sort-icon" /></th>
                <th>Status <ArrowUpDown size={14} className="sort-icon" /></th>
              </tr>
            </thead>
            <tbody>
              {MOCK_DATA.map((row, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{row.id}</td>
                  <td>{row.rrn}</td>
                  <td>{row.amount}</td>
                  <td>{row.date}</td>
                  <td>
                    <span className="status-pill">{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="pagination-container">
          <div className="pagination-left">
            <span className="pagination-text">Row per page</span>
            <select className="rows-select">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
            <span className="pagination-text">Go to</span>
            <input type="text" className="goto-input" defaultValue="9" />
          </div>
          <div className="pagination-right">
            <button className="page-btn"><ChevronLeft size={16} /></button>
            <button className="page-btn">1</button>
            <span className="page-dots"><MoreHorizontal size={16} /></span>
            <button className="page-btn">4</button>
            <button className="page-btn">5</button>
            <button className="page-btn active">6</button>
            <button className="page-btn">7</button>
            <button className="page-btn">8</button>
            <span className="page-dots"><MoreHorizontal size={16} /></span>
            <button className="page-btn">50</button>
            <button className="page-btn"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionReports;
