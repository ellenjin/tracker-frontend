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
