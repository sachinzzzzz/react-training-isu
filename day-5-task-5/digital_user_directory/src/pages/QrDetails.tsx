import { useState } from 'react';
import { User } from 'lucide-react';
import './QrDetails.css';

const QrDetails = () => {
  const [qrType, setQrType] = useState('static');

  return (
    <div className="qr-details-container">
      <h1 className="page-title">QR Details</h1>

      {/* Filter Section */}
      <div className="qr-filter-card">
        <label className="qr-filter-label">Select The Type of QR</label>
        <div className="qr-radio-group">
          <label className="qr-radio-label">
            <input 
              type="radio" 
              name="qrType" 
              value="static" 
              checked={qrType === 'static'}
              onChange={() => setQrType('static')}
            />
            <span className={qrType === 'static' ? "qr-text-active" : "qr-text-muted"}>Static</span>
          </label>
          <label className="qr-radio-label">
            <input 
              type="radio" 
              name="qrType" 
              value="dynamic" 
              checked={qrType === 'dynamic'}
              onChange={() => setQrType('dynamic')}
            />
            <span className={qrType === 'dynamic' ? "qr-text-active" : "qr-text-muted"}>Dynamic</span>
          </label>
        </div>
      </div>

      {/* QR Code Section */}
      <div className="qr-display-card">
        <div className="qr-header-logos">
           <div className="qr-pnb-logo-wrapper">
             <div className="qr-pnb-logo">
               <span className="qr-pnb-icon-u"></span>
               <span className="qr-pnb-text">pnb</span>
             </div>
           </div>
           <p className="qr-header-upi-text">UPI ID : 9952785870m@pnb</p>
        </div>

        <div className="qr-merchant-info">
          <div className="qr-merchant-avatar">
            <User size={16} color="#aaa" />
          </div>
          <span className="qr-merchant-name">MYMUBI FOOD COURT</span>
        </div>

        <div className="qr-code-wrapper">
          <img 
            src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=9952785870m@pnb&pn=MYMUBIFOODCOURT" 
            alt="QR Code" 
            className="qr-image" 
          />
        </div>

        <p className="qr-footer-upi-text">UPI ID : 9952785870m@pnb</p>

        <button className="qr-download-btn">
          Download QR Code
        </button>

        <div className="qr-powered-by">
          <span className="qr-powered-text">POWERED BY</span>
          <div className="qr-upi-logo-mark">
            <span className="qr-upi-u">U</span><span className="qr-upi-p">P</span><span className="qr-upi-i">I</span>
            <span className="qr-upi-arrows">
              <span className="qr-upi-arrow-green"></span>
              <span className="qr-upi-arrow-orange"></span>
            </span>
          </div>
          <span className="qr-upi-subtext">UNIFIED PAYMENTS INTERFACE</span>
        </div>
      </div>
    </div>
  );
};

export default QrDetails;
