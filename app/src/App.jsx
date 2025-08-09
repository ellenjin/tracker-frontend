import { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import PageRoutes from './PageRoutes';
import { getOneUserApi } from './requests/userApi';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    console.log('useEffect triggered');
    if (!currentUser?.id) {
      return;
    }

    const fetchUser = async () => {
      try {
        const updatedUser = await getOneUserApi(currentUser.id);
        setCurrentUser(updatedUser);
      } catch (error) {
        console.error('Failed to load user: ', error);
      }
    };

    fetchUser();
  }, [currentUser?.id]);

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
