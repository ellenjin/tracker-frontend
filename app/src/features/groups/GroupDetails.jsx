import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  getOneGroupApi,
  getAllGroupUsersApi,
  postTextMemberApi,
} from '../../requests/groupApi';
import { getLogForUserInGroupApi, logCheckInApi } from '../../requests/logApi';

const GroupDetails = ({ userId }) => {
  const { groupId } = useParams(); // groupId = the value from the URL
  const [group, setGroup] = useState(null);

  useEffect(() => {
    const fetchGroup = async () => {
      const data = await getOneGroupApi(groupId);
      setGroup(data);
    };

    fetchGroup();
  }, [groupId]);

  if (!group) return <p>No group Id found... try again</p>;

  const message = 'Check in today!';

  const handleTextGroupUsers = async () => {
    const groupUsers = await getAllGroupUsersApi(group.id);
    console.log('This is group users', groupUsers);
    for (const user of groupUsers) {
      console.log(user.phoneNumber);
      await postTextMemberApi(user.phoneNumber, message);
    }
  };

  const handleCheckIn = async () => {
    const log = await getLogForUserInGroupApi(userId, group.id);
    console.log(log);
    logCheckInApi(log.logId); // adjust this to handle error
    console.log('successfully checked in');
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
      <p>You haven't checked in today!</p>
      {/* <button type="button">Check-in</button> */}
      <button onClick={handleCheckIn}>Check in</button>
      <p aria-label="check-in-count">0</p>
      <button onClick={handleTextGroupUsers}>Text all</button>
      <button onClick={handleTextGroupUsers}>Remind</button>
    </div>
  );
};

export default GroupDetails;
