// Purpose: Navigation bar for authenticated user (home, logs, groups, logout
// Events: onClick -> route change.
// Imports: React Router, Hash router
// Routes: N/A (nav only).
// Notes: Reference PageRoutes where the routes are defined.

import { Link } from 'react-router-dom';

function NavHeader() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/HomeDashboard"> Home </Link>
        </li>
        <li>
          <Link to="/GroupDetails"> Groups </Link>
        </li>
        {/* <li>
          <Link to="/LogDetails"> Groups </Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default NavHeader;
