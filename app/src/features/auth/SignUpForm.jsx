// Purpose: Collect new user info for account creation (username, password, interests, profile picture).
// Events: onChange, onSubmit.
// Imports: SignupButton, InterestsDropdown, FormField.
// Routes: POST /api/auth/signup.
// State: form

import { postUserApi } from '../../requests/userApi';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

function SignUpForm() {
  const { setCurrentUser, refreshUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Read the form data
    const formData = new FormData(e.target);
    const formDataJson = Object.fromEntries(formData.entries());

    try {
      const newUser = await postUserApi(formDataJson);
      setCurrentUser(newUser);
      console.log(newUser);
      e.target.reset();
      refreshUser();
      navigate('/HomeDashboard');
    } catch (error) {
      alert('User could not be created! Please check your input.');
      console.error('Failed to create user', error);
    }
  };

  return (
    <>
      <button type="button" onClick={() => navigate('/')}>
        ← Log in
      </button>
      <h1>Create an account</h1>
      <form method="post" onSubmit={handleSubmit}>
        {/* Want the input names to be the same as the Axios request JSON structure */}
        <label>
          Username: <input name="username" />
        </label>
        <label>
          Password: <input name="password" />
        </label>
        <label>
          Phone number: <input name="phoneNumber" />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </>
  );
}

export default SignUpForm;
