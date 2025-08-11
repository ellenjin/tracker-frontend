import { useState, useEffect } from 'react';
import { UserContext } from './UserContext';
import { getOneUserApi } from '../requests/userApi';

// const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // You can add more user-related methods here later (logout, update, etc)
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
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
