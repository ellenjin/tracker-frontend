// Purpose: Collect new user info for account creation (username, password, interests, profile picture).
// Events: onChange, onSubmit.
// Imports: SignupButton, InterestsDropdown, FormField.
// Routes: POST /api/auth/signup.
// State: form
// import SignUpBtn from './SignUpBtn'; => update: maybe not

import { postUserApi } from '../../requests/userApi';
import { useNavigate } from 'react-router-dom';

function SignUpForm({ onCreateUser }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Read the form data
    const formData = new FormData(e.target);
    const formDataJson = Object.fromEntries(formData.entries());

    postUserApi(formDataJson)
      .then((newUser) => {
        onCreateUser(newUser);

        // Clear the form after successful submission
        e.target.reset();
        alert('User successfully created!');
        navigate('/HomeDashboard');
      })
      .catch((error) => {
        console.error('Failed to create user:', error);

        // Show an error message to the user
        alert('Failed to create user. Please try again.');
      });
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Username: <input name="username" />
      </label>
      <button type="submit">Submit form</button>
    </form>
  );
}

export default SignUpForm;
