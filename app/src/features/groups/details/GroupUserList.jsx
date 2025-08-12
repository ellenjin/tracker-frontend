import React from 'react';
import GroupUserTile from '../GroupUserTile';

const GroupUserList = ({ groupUsers, groupId }) => {
  return (
    <section>
      {groupUsers.map((user) => {
        const userLog = user.logs.find(
          (log) => log.group?.id === Number(groupId)
        );
        return (
          <GroupUserTile
            key={user.id}
            user={user}
            userLog={userLog}
            groupId={groupId}
          />
        );
      })}
    </section>
  );
};

export default GroupUserList;
