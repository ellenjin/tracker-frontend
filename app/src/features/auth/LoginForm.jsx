// Purpose: Collect username and password for login.
// Events: onChange for inputs, onSubmit for login.
// Imports: LoginBtn, FormField, LoginBtn
// Routes: POST /api/auth/login.
// State: user

import LoginBtn from './LoginBtn';

function LoginForm({ username, setUsername, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        /* Should this ^ be using FormField.jsx? Not sure if it's necessary */
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input placeholder="Password" /> {/* Just a dummy holder for now */}
      <LoginBtn></LoginBtn>
    </form>
  );
}

export default LoginForm;
