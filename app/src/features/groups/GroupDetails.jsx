import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneGroupApi, getAllGroupUsersApi } from '../../requests/groupApi';

const GroupDetails = ({ textGroupUsers }) => {
  const { groupId } = useParams(); // groupId = the value from the URL
  const [group, setGroup] = useState(null);
  const [groupUsers, setGroupUsers] = useState(null);

  useEffect(() => {
    const fetchGroup = async () => {
      const data = await getOneGroupApi(groupId);
      setGroup(data);
    };
    fetchGroup();
  }, [groupId]);

  useEffect(() => {
    const fetchGroupUsers = async () => {
      const data = await getAllGroupUsersApi(groupId);
      setGroupUsers(data);
    };
    fetchGroupUsers();
  }, [groupId]);

  if (!group) return <p>No group Id found... try again</p>;

  // add time to give time for respond between each request
  const handleClick = () => {
    textGroupUsers(groupUsers);
  };

  return (
    <div>
      <h1>{group.name}</h1>
      <img
        src={group.picture}
        alt="A flower in a field"
        style={{ height: '200px', width: '200px' }}
      />
      <p aria-label="group-description">{group.description}</p>
      <p>You haven't checked-in today!</p>
      <button type="button" disabled>
        Check-in
      </button>
      <p aria-label="check-in-count">0</p>
      <button onClick={() => handleClick}>Text all</button>
      <button onClick={() => handleClick}>Remind</button>
    </div>
  );
};

export default GroupDetails;
