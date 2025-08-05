// Purpose: Display group name, picture, description, list of friends in group with their check in status.
// Events: onClick text all, onClick remind one person, onClick check in, NotesTextArea
// Imports: TextAllBtn, RemindBtn, CheckInBtn.jsx
// Routes: GET /api/groups/:groupId
// State: group

// I think you can pass in the information from ^ and hold the group id in state,
// allowing the page to be used for any group -- similar to how we used 'task-tile' in Tasklist

// function GroupDetails({ currentUser }) {
//   return <h1> This page holds the details for a single group </h1>;
// }

import React from 'react';
import NewGroupForm from './NewGroupForm';

// const name = 'Nature Hikes';
// const picture = './public/assets/nature.jpg';
// const description = 'Group for weekend hiking trips and nature walks.';

const GroupDetails = ({ name, picture, description }) => {
  return (
    <div>
      <h1>{name}</h1>
      <img
        src={picture}
        alt="A flower in a field"
        style={{ height: '200px', width: '200px' }}
      />
      <p aria-label="description">{description}</p>
      <p>You haven't checked-in today!</p>
      <button type="button" disabled>
        Check-in
      </button>
      <p aria-label="check-in-count">0</p>
      <button>Text all</button>
      <button>Remind</button>
    </div>
  );
};

export default GroupDetails;
