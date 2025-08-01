// Purpose: Display group name, picture, description, list of friends in group with their check in status.
// Events: onClick text all, onClick remind one person, onClick check in, NotesTextArea
// Imports: TextAllBtn, RemindBtn, CheckInBtn.jsx
// Routes: GET /api/groups/:groupId
// State: group

// once you start noticing the number of levels that you are passing setters down, it's a clue that you may need a context
// start with use state to pass things down, and then useContext

import React from 'react';
import NewGroupForm from './NewGroupForm';

const name = 'Nature Hikes';
const picture = './features/assets/nature.jpg';
const description = 'Group for weekend hiking trips and nature walks.';

const GroupDetails = () => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={picture} alt="A flower in a field" />
      <p>{description}</p>
      <NewGroupForm />
    </div>
  );
};

export default GroupDetails;
