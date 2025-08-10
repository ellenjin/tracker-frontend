// Purpose: Navigation bar for authenticated user (home, logs, groups, logout
// Events: onClick -> route change.
// Imports: React Router, Hash router
// Routes: N/A (nav only).
// Notes: Reference PageRoutes where the routes are defined.

import { Link, useNavigate } from 'react-router-dom';
import './NavHeader.css';

function NavHeader({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };
  return (
    <nav className="container nav">
      <ul className="nav-links">
        <li>
          <Link to="/HomeDashboard" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/GroupPage" className="nav-link">
            Groups
          </Link>
        </li>
        <li>
          <Link to="/logs" className="nav-link">
            Logs
          </Link>
        </li>
        <li>
          <Link to="/ProfilePage" className="nav-link">
            Profile
          </Link>
        </li>
      </ul>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </nav>
  );
}

export default NavHeader;
