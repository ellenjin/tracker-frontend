// Purpose: Landing page after login. Shows welcome message, profile picture, groups, and logs.
// Events: useEffect
// Imports: NavHeader, ProfilePicture, NewGroupBtn, NewLogBtn
// Routes: GET /api/user/:id
// State: user
import React, { useState } from 'react';
import NewLogForm from '../../features/logging/NewLogForm';

function HomeDashboard({ user, userId, groupId, logId }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div className="container">
        <h1> Welcome, {user.username}! </h1>
      </div>

      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide New Log Form' : 'Create a New Log!'}
      </button>
      {isVisible && (
        <div>
          <NewLogForm userId={userId} groupId={groupId} logId={logId} />
        </div>
      )}
    </>
  );
}

export default HomeDashboard;
