import { useState, useRef, useEffect } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import './LanguageUpdate.css';

const LANGUAGES = [
  'Odia', 'Tamil', 'Bengali', 'Telugu', 'Marathi', 
  'English', 'Gujarati', 'Assamese', 'Punjabi', 'Malayalam', 'Kannada'
];

const LanguageUpdate = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleUpdate = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="language-update-container">
      <h1 className="page-title">Language Update</h1>

      <div className="language-card">
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">VPA ID</label>
            <input 
              type="text" 
              className="form-input read-only" 
              value="3456789pabaitra@pnb" 
              readOnly 
            />
          </div>
          <div className="form-group">
            <label className="form-label">Device Serial Number</label>
            <input 
              type="text" 
              className="form-input read-only" 
              value="9003567823456" 
              readOnly 
            />
          </div>
          <div className="form-group">
            <label className="form-label">Current Language</label>
            <input 
              type="text" 
              className="form-input read-only" 
              value="Odia" 
              readOnly 
            />
          </div>
          <div className="form-group" ref={dropdownRef}>
            <label className="form-label">Language Update</label>
            <div className="custom-select-wrapper">
              <div 
                className={`custom-select ${isDropdownOpen ? 'open' : ''}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className={selectedLanguage ? 'selected-text' : 'placeholder-text'}>
                  {selectedLanguage || 'Select Language Update'}
                </span>
                <ChevronDown size={16} className="select-icon" />
              </div>
              
              {isDropdownOpen && (
                <div className="custom-dropdown-list">
                  {LANGUAGES.map((lang) => (
                    <div 
                      key={lang} 
                      className={`dropdown-item ${selectedLanguage === lang ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedLanguage(lang);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {lang}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button className="btn-cancel">Cancel</button>
          <button className="btn-update" onClick={handleUpdate}>Update</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">Language update request<br/>Initiated Successfully</h2>
            <div className="modal-icon-container">
               <div className="success-circle">
                 <CheckCircle2 color="white" size={48} strokeWidth={3} />
               </div>
            </div>
            <button className="btn-modal-close" onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageUpdate;
