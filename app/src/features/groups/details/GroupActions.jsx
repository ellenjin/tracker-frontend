import React from 'react';
import MatchDropdown from './MatchDropDown';

const GroupActions = ({ onRemind, groupUsers, groupId }) => {
  return (
    <>
      <p>You haven't checked-in today!</p>
      <button type="button">Check-in</button>
      <p aria-label="check-in-count">0</p>
      <button onClick={onRemind}>Remind Friends</button>
      <MatchDropdown groupUsers={groupUsers} groupId={groupId} />
    </>
  );
};

export default GroupActions;
