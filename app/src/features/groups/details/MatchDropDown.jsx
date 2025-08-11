import React from 'react';

const MatchDropdown = ({ groupUsers, groupId }) => {
  // Filter match options: wantsPartner = true, same skill level, no partner assigned yet
  const matchOptions = groupUsers.filter((user) =>
    user.logs.some(
      (log) =>
        log.group.id === Number(groupId) && log.wantsPartner && !log.partnerName
    )
  );

  const handleSelect = (event) => {
    const selectedUserId = event.target.value;
    console.log('Selected partner userId:', selectedUserId);
    // TODO: Call backend to update partnerName for both users
  };

  return (
    <select onChange={handleSelect}>
      <option value="">Select a partner</option>
      {matchOptions.map((user) => {
        const log = user.logs.find((log) => log.group.id === Number(groupId));
        return (
          <option key={user.id} value={user.id}>
            {user.username} ({log.skillLevel})
          </option>
        );
      })}
    </select>
  );
};

export default MatchDropdown;
