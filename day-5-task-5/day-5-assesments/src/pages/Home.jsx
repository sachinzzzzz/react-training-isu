import React, { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';
import { Users } from 'lucide-react';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch users automatically when the component mounts
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError('Error loading users. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="loader-container page-transition">
        <span className="spinner"></span>
        <p>Loading Digital Directory...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container glass-panel fade-in" style={{ margin: '3rem auto', maxWidth: '600px' }}>
        <h2>Oops! Something went wrong.</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container page-transition">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <div style={{ padding: '0.75rem', background: 'rgba(99, 102, 241, 0.2)', borderRadius: '12px' }}>
          <Users size={28} color="#818cf8" />
        </div>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>Digital Directory</h1>
          <p style={{ color: 'var(--text-muted)' }}>Explore and connect with our global network of professionals.</p>
        </div>
      </div>

      {users.length === 0 ? (
        <div className="empty-state glass-panel">No users found.</div>
      ) : (
        <div className="users-grid">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
