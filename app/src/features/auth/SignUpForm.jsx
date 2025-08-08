// Purpose: Collect new user info for account creation (username, password, interests, profile picture).
// Events: onChange, onSubmit.
// Imports: SignupButton, InterestsDropdown, FormField.
// Routes: POST /api/auth/signup.
// State: form
// import SignUpBtn from './SignUpBtn'; => update: maybe not

import { postUserApi } from '../../requests/userApi';
import { useNavigate } from 'react-router-dom';

function SignUpForm({ currentUser, onCreateUser }) {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Read the form data
    const formData = new FormData(e.target);
    const formDataJson = Object.fromEntries(formData.entries());
    console.log('current user');
    console.log(currentUser);

    try {
      const newUser = await postUserApi(formDataJson);
      onCreateUser(newUser);
      console.log(newUser);
      e.target.reset(); // clear form
      // alert('User successfully created!');
      navigate('/HomeDashboard');
    } catch (error) {
      alert('User could not be created! Please check your input.');
      console.error('Failed to create user', error);
    }
  };

  return (
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
  );
}

export default SignUpForm;
