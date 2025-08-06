// Purpose: Opens new log form.
// Events: onClick -> open modal or render below welcome message.
// Imports: none.
// Routes: none.
// Control showing/hiding the form
// Import and render NewLogForm when toggled and import and render NewLogForm when toggled

import { useState } from 'react';
import NewLogForm from './logs/NewLogForm';

function NewLogButton({ user }) {
    const [showForm, setShowForm] = useState(false);
  
    const toggleForm = () => setShowForm(!showForm);
  
    return (
      <div>
        <button onClick={toggleForm}>
          {showForm ? 'Hide New Log Form' : 'Add New Log'}
        </button>
        {showForm && <NewLogForm user={user} />}
      </div>
    );
  }
  
  export default NewLogButton;

//   Add this button to HomeDashboard.jsx, GroupDetails.jsx, LogDetails.jsx