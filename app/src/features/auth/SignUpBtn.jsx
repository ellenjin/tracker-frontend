// Purpose: Submit new user signup.
// Events: onClick -> call signup handler from parent.
// Imports: none.
// Routes: None directly, handled by parent form.

// NOTE: REPURPOSING BUTTON TO REDIRECT TO THE SIGN UP PAGE INSTEAD

import { Link } from 'react-router-dom';
import SignUpForm from './SignUpForm';

const SignUpBtn = () => {
  return (
    <Link to="/SignUpForm">
      <button>Not a user yet? Sign up here</button>
    </Link>
  );
};

export default SignUpBtn;
