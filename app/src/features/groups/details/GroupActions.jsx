import MatchDropdown from './MatchDropDown';

const GroupActions = ({ onRemind, groupUsers, groupId, handleCheckIn }) => {
  return (
    <>
      <p>Have you checked in today?</p>
      <button onClick={handleCheckIn}>Check-in</button>
      <button onClick={onRemind}>Remind Friends</button>
      <MatchDropdown groupUsers={groupUsers} groupId={groupId} />
    </>
  );
};

export default GroupActions;
