import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  getOneGroupApi,
  getAllGroupUsersApi,
  postTextMemberApi,
} from '../../requests/groupApi';
import GroupUserTile from './GroupUserTile';

const GroupDetails = () => {
  const { groupId } = useParams(); // groupId = the value from the URL
  const [group, setGroup] = useState(null);
  const [groupUsers, setGroupUsers] = useState([]);

  // Refactor because you should be able to set the name of partner to user when the user clicks the name
  const [matches, setMatches] = useState({}); // { memberName: matchedMemberName }

  const message = 'Check in today!';

  useEffect(() => {
    const fetchGroup = async () => {
      const data = await getOneGroupApi(groupId);
      setGroup(data);
    };
    fetchGroup();
    const fetchGroupUsers = async () => {
      const data = await getAllGroupUsersApi(groupId);
      setGroupUsers(data);
    };

    fetchGroupUsers();
  }, [groupId]);

  if (!group) return <p>No group Id found... try again</p>;

  const handleTextGroupUsers = async () => {
    for (const user of groupUsers) {
      await postTextMemberApi(user.phoneNumber, message);
    }
  };

  // Filter match options by skill level, exclude self
  const getMatchOptions = (currentUser) => {
    return groupUsers.filter(
      (user) =>
        user.skillLevel === currentUser.skillLevel &&
        user.username !== currentUser.username
    );
  };

  const handleMatchSelect = (memberName, matchedName) => {
    setMatches((prev) => ({ ...prev, [memberName]: matchedName }));
  };

  return (
    <div className="container">
      <h1>{group.name}</h1>
      <img
        src={group.picture}
        alt="A flower in a field"
        style={{ height: '200px', width: '200px' }}
      />
      <p aria-label="group-description">{group.description}</p>
      <p>You haven't checked-in today!</p>
      <button type="button">Check-in</button>
      <p aria-label="check-in-count">0</p>
      <button onClick={handleTextGroupUsers}>Text all</button>
      <button onClick={handleTextGroupUsers}>Remind</button>
      <h2>Your Friends</h2>
      <section>
        {groupUsers &&
          groupUsers.map((user) => {
            // Find the log for this group (groupId is string, log.group.id might be number)
            const userLog = user.logs.find(
              (log) => log.group.id === Number(groupId)
            );
            console.log(groupUsers);
            console.log('groupId:', groupId, 'type:', typeof groupId);

            return (
              <GroupUserTile
                key={user.id}
                user={user}
                userLog={userLog}
                groupId={groupId}
                matchOptions={getMatchOptions(user)}
                selectedMatch={matches[user.username]}
                onMatchSelect={handleMatchSelect}
              />
            );
          })}
      </section>
    </div>
  );
};

export default GroupDetails;
