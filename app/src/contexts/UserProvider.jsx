import { useState, useEffect, useRef } from 'react';
import { UserContext } from './UserContext';
import { getOneUserApi } from '../requests/userApi';

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const prevUserId = useRef();
  // You can add more user-related methods here later (logout, update, etc)
  useEffect(() => {
    if (!currentUser?.id) return;
    if (prevUserId.current === currentUser.id) {
      return;
    }

    console.log('useEffect triggered');
    const fetchUser = async () => {
      try {
        const updatedUser = await getOneUserApi(currentUser.id);
        setCurrentUser(updatedUser);
        prevUserId.current = currentUser.id;
      } catch (error) {
        console.error('Failed to load user: ', error);
      }
    };

    fetchUser();
  }, [currentUser?.id]);

  // Manual user refresh function
  const refreshUser = async () => {
    if (!currentUser?.id) return;
    try {
      console.log('useEffect MANUALLY triggered');
      const updatedUser = await getOneUserApi(currentUser.id);
      setCurrentUser(updatedUser);
    } catch (error) {
      console.error('Failed to refresh user:', error);
    }
  };

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, refreshUser }}>
      {children}
    </UserContext.Provider>
  );
};
