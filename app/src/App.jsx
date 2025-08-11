import { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import PageRoutes from './PageRoutes';
import { getOneUserApi } from './requests/userApi';
import { UserProvider } from './features/auth/UserContext';

function App() {

  return (
    <UserProvider>
      <HashRouter>
        <PageRoutes />
      </HashRouter>
    </UserProvider>
  );
}

export default App;
