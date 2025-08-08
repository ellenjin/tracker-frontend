// Purpose: Display group name, picture, description, list of friends in group with their check in status.
// Events: onClick text all, onClick remind one person, onClick check in, NotesTextArea
// Imports: TextAllBtn, RemindBtn, CheckInBtn.jsx
// Routes: GET /api/groups/:groupId
// State: group

// I think you can pass in the information from ^ and hold the group id in state,
// allowing the page to be used for any group -- similar to how we used 'task-tile' in Tasklist


const GroupDetails = ({ currentGroup }) => {

  return (
    <div>
      <h1>{currentGroup.name}</h1>
      <img
        src={currentGroup.picture}
        alt="A flower in a field"
        style={{ height: '200px', width: '200px' }}
      />
      <p aria-label="group-description">{currentGroup.description}</p>
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
