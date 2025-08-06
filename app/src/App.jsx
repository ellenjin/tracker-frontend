import { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import PageRoutes from './PageRoutes';
import { getOneUserApi } from './requests/userApi';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const fetchUser = async () => {
    const updatedUser = await getOneUserApi(currentUser.id);
    setCurrentUser(updatedUser);
  };

  useEffect(() => {
    if (currentUser) {
      fetchUser();
    }
  });
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
