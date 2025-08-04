// Purpose: Collect new user info for account creation (username, password, interests, profile picture).
// Events: onChange, onSubmit.
// Imports: SignupButton, InterestsDropdown, FormField.
// Routes: POST /api/auth/signup.
// State: form
// import SignUpBtn from './SignUpBtn'; => update: maybe not

/*
- Take in necessary information
- After sign up, log the user in (set the user)
- newUser -> set the current user to the just created user (using onCreateUser)

- Start with just taking username
*/
import { postUserApi } from '../../requests/userApi';

function SignUpForm({ onCreateUser }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Read the form data
    const formData = new FormData(e.target);
    const formDataJson = Object.fromEntries(formData.entries());

    postUserApi(formDataJson)
      .then((newUser) => {
        onCreateUser(newUser);

        // Optionally clear the form after successful submission
        e.target.reset();
        alert('User successfully created!');
      })
      .catch((error) => {
        console.error('Failed to create user:', error);

        // Optionally show an error message to the user
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
