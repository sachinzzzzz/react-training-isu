import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Building, MapPin, Phone, Globe, Briefcase, Mail } from 'lucide-react';

const UserProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch specific user details
    const fetchUserDetail = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
          throw new Error('User not found');
        }
        const data = await response.json();
        setUser(data);
        setError(null);
      } catch (err) {
        setError('Could not load user profile details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="loader-container page-transition">
        <span className="spinner"></span>
        <p>Loading Profile...</p>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="container page-transition">
        <div className="header-controls">
          <button className="btn btn-secondary" onClick={() => navigate('/')}>
            <ArrowLeft size={18} /> Back to Directory
          </button>
        </div>
        <div className="error-container glass-panel fade-in" style={{ marginTop: '2rem' }}>
          <h2>Profile Not Found</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  const initials = user.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="profile-container page-transition">
      <div className="header-controls" style={{ marginBottom: '1rem', padding: '0 1rem' }}>
        <button className="btn btn-secondary" onClick={() => navigate('/')}>
          <ArrowLeft size={18} /> Back to Directory
        </button>
      </div>

      <div className="profile-card glass-panel fade-in">
        <div className="profile-cover"></div>
        
        <div className="profile-header">
          <div className="profile-avatar">{initials}</div>
          <h1>{user.name}</h1>
          <div className="username">@{user.username}</div>
        </div>

        <div className="profile-grid">
          {/* Contact Details */}
          <div className="profile-section">
            <h3><Mail size={18} /> Contact Information</h3>
            <div className="detail-item">
              <span className="detail-label">Email Address</span>
              <span className="detail-value">{user.email}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Phone Number</span>
              <span className="detail-value">{user.phone}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Website</span>
              <span className="detail-value" style={{ color: 'var(--primary)' }}>{user.website}</span>
            </div>
          </div>

          {/* Work / Company */}
          <div className="profile-section">
            <h3><Briefcase size={18} /> Work Details</h3>
            <div className="detail-item">
              <span className="detail-label">Company Name</span>
              <span className="detail-value">{user.company.name}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Catch Phrase</span>
              <span className="detail-value" style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>"{user.company.catchPhrase}"</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Business Type</span>
              <span className="detail-value">{user.company.bs}</span>
            </div>
          </div>

          {/* Location Details */}
          <div className="profile-section" style={{ gridColumn: '1 / -1' }}>
            <h3><MapPin size={18} /> Address Location</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div className="detail-item">
                <span className="detail-label">Street</span>
                <span className="detail-value">{user.address.suite}, {user.address.street}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">City</span>
                <span className="detail-value">{user.address.city}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Zipcode</span>
                <span className="detail-value">{user.address.zipcode}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
