import { useState } from 'react';
import { Menu, User } from 'lucide-react';
import { logout } from '../../auth/authService';
import './Header.css';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="header">
      <div className="header-left">
        <Menu className="hamburger" size={24} strokeWidth={1.5} />
      </div>
      <div className="header-right">
        <div className="user-profile-container">
          <div className="user-profile" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <div className="avatar">
               <User size={20} color="#fff" />
            </div>
            <span className="user-name">Stebin Ben</span>
          </div>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item">View Profile</div>
              <div className="dropdown-item logout" onClick={() => logout()}>Logout</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
