import GroupUserTile from '../GroupUserTile';
import { List } from '@mui/material';

const GroupUserList = ({ groupUsers, groupId }) => {
  return (
    <List>
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
    </List>
  );
};

export default GroupUserList;
