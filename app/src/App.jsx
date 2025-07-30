import { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import PageRoutes from './PageRoutes';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  // const [loginStatus, setLoginStatus] = useState(false); // track whether a user is logged in or not
  return (
    // <>
    //   {!currentUser ? (
    //     <AuthPage onLogin={setCurrentUser} />
    //   ) : (
    //     <h1>
    //       Welcome {currentUser.username}
    //       {/* Change ^ to redirect to the user home page once created */}
    //     </h1>
    //   )}
    // </>
    // <HashRouter>
    //   <nav>
    //     <ul>
    //       <Link to="/AuthPage">Login Page (testing)</Link>
    //       <Link to="/HomeDashboard">Home</Link>
    //     </ul>
    //   </nav>
    //   <Routes>
    //     <Route path="/AuthPage" element={<AuthPage />} />
    //     <Route path="/HomeDashboard" element={<HomeDashboard />} />
    //   </Routes>
    // </HashRouter>
    <HashRouter>
      <PageRoutes
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      ></PageRoutes>
    </HashRouter>
  );
}

export default App;
