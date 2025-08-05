// Purpose: Display group name, picture, description, list of friends in group with their check in status.
// Events: onClick text all, onClick remind one person, onClick check in, NotesTextArea
// Imports: TextAllBtn, RemindBtn, CheckInBtn.jsx
// Routes: GET /api/groups/:groupId
// State: group

// I think you can pass in the information from ^ and hold the group id in state,
// allowing the page to be used for any group -- similar to how we used 'task-tile' in Tasklist

function GroupDetails({ currentUser }) {
  return <h1> This page holds the details for a single group </h1>;
}

export default GroupDetails;
