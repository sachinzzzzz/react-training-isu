import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Network } from 'lucide-react';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <Link to="/" className="app-brand">
            <Network size={28} />
            Digital Directory
          </Link>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
              Home
            </Link>
          </div>
        </header>
        
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<UserProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
