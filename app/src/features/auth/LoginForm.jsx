// Purpose: Collect username and password for login.
// Events: onChange for inputs, onSubmit for login.
// Imports: LoginBtn, FormField, LoginBtn
// Routes: POST /api/auth/login.
// State: user

import LoginBtn from './LoginBtn';

function LoginForm({ username, setUsername, onSubmit, setError }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Make sure is username (not userId) and that field is not empty
    let isAlphabetic = /^[A-Za-z]+$/.test(username); // username can only contain letters
    // May want to change this to allow numbers as well just so long as there are *some* letters
    if (!username || !isAlphabetic) {
      setError('Please enter a valid username');
      return;
    }
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        /* Should this ^ be using FormField.jsx? Not sure if it's necessary */
        value={username} /* Should I change this to input name = instead? */
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input placeholder="Password" /> {/* Just a dummy holder for now */}
      <LoginBtn></LoginBtn>
    </form>
  );
}

export default LoginForm;
