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
      {/* <NewGroupForm /> */}
    </div>
  );
};

// I think you can pass in the information from ^ and hold the group id in state,
// allowing the page to be used for any group -- similar to how we used 'task-tile' in Tasklist

// function GroupDetails({ currentUser }) {
//   return <h1> This page holds the details for a single group </h1>;
// }


export default GroupDetails;
