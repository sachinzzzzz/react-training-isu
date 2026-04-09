import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';

const UserCard = ({ user }) => {
  // Get initials for the avatar
  const initials = user.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <Link to={`/user/${user.id}`} className="user-card glass-panel glass-panel-hover fade-in">
      <div className="user-card-header">
        <div className="avatar">{initials}</div>
        <div className="user-info">
          <h3>{user.name}</h3>
          <p>@{user.username}</p>
        </div>
      </div>
      
      <div className="user-meta">
        <div className="meta-item">
          <Mail size={16} />
          <span>{user.email}</span>
        </div>
        <div className="meta-item">
          <Phone size={16} />
          <span>{user.phone.split(' ')[0]}</span>
        </div>
        <div className="meta-item">
          <Globe size={16} />
          <span>{user.website}</span>
        </div>
        <div className="meta-item">
          <MapPin size={16} />
          <span>{user.address.city}</span>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
