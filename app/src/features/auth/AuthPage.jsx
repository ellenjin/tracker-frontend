// Purpose: Container for login and signup forms; handles switching between forms.
// Events: On submit (login or signup), trigger auth POST request.
// Imports: LoginForm, SignupForm.
// Routes: POST /api/auth/login, POST /api/auth/signup.
// State: user
import LoginForm from './LoginForm';
import { getOneUserApi } from '../../requests/userApi';

import { useState } from 'react';

function AuthPage({ onLogin }) {
  const [username, setUsername] = useState('');

  // Need to find user, and set state for currentUser to that user (if valid)
  const handleLogin = async () => {
    // onLogin({ name: username }); // fake login for now
    // need to set it to the current user -- so search for the user to make sure they exist, and then
    // get that user and onLogin(<User>)
    // User currentUser = getOneUserApi(username);
    // onLogin(currentUser);
    const userData = await getOneUserApi(username);
    if (userData) {
      onLogin(userData);
    } // MAKE SURE TO CATCH CASE WHERE USER DOES NOT EXIST
  };
  return (
    <>
      <h1>Welcome to Accountability Tracker!</h1>
      <LoginForm
        username={username}
        setUsername={setUsername}
        onSubmit={handleLogin}
      ></LoginForm>
    </>
  );
}
export default AuthPage;
