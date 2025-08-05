import { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import PageRoutes from './PageRoutes';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <HashRouter>
      <PageRoutes
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      ></PageRoutes>
    </HashRouter>
  );
}

export default App;
