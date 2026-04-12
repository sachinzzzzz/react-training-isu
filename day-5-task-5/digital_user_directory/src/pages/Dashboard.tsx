import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserProfile, getAccessToken } from "../auth/authService";
import type { UserProfile } from "../auth/authService";
import { ArrowLeftRight, Banknote } from "lucide-react";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const token = getAccessToken();
        if (!token) {
          navigate("/login");
          return;
        }

        const userProfile = await getUserProfile();
        setProfile(userProfile);
      } catch (err) {
        console.error("Failed to load profile", err);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [navigate]);

  if (loading) {
    return <div>Loading profile...</div>;
  }

  // Fallbacks for profile display if API isn't ready
  const userEmail = profile?.email || "Pabitra.hota@pnb";

  return (
    <div className="dashboard-container">
      <h3 className="dashboard-title">Dashboard</h3>

      <div className="dashboard-controls">
        <span className="vpa-id">VPA ID : {userEmail}</span>
        <select className="time-filter">
          <option>Today</option>
          <option>Yesterday</option>
          <option>This Week</option>
        </select>
      </div>

      <div className="cards-container">
        <div className="stat-card">
          <div className="stat-card-left">
            <div className="stat-icon">
              <ArrowLeftRight size={16} strokeWidth={2} />
            </div>
            <span className="stat-title">Total No Of Transaction</span>
          </div>
          <span className="stat-value">20.7K</span>
        </div>

        <div className="stat-card">
          <div className="stat-card-left">
            <div className="stat-icon">
              <Banknote size={20} strokeWidth={2} />
            </div>
            <span className="stat-title">Total Amount</span>
          </div>
          <span className="stat-value">76,000 cr</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;