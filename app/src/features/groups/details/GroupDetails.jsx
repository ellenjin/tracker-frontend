import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  getOneGroupApi,
  getAllGroupUsersApi,
  postTextMemberApi,
} from '../../../requests/groupApi';
import GroupHeader from './GroupHeader';
import GroupActions from './GroupActions';
import GroupUserList from './GroupUserList';

const GroupDetails = () => {
  const { groupId } = useParams();
  const [group, setGroup] = useState(null);
  const [groupUsers, setGroupUsers] = useState([]);
  const message = 'Check in today!';

  useEffect(() => {
    const fetchGroup = async () => {
      const data = await getOneGroupApi(groupId);
      setGroup(data);
    };
    const fetchGroupUsers = async () => {
      const data = await getAllGroupUsersApi(groupId);
      setGroupUsers(data);
    };
    fetchGroup();
    fetchGroupUsers();
  }, [groupId]);

  if (!group) return <p>No group Id found... try again</p>;

  const handleTextGroupUsers = async () => {
    for (const user of groupUsers) {
      await postTextMemberApi(user.phoneNumber, message);
    }
  };

  return (
    <div className="container">
      <GroupHeader group={group} />
      <GroupActions
        onRemind={handleTextGroupUsers}
        groupUsers={groupUsers}
        groupId={groupId}
      />
      <h2>Your Friends</h2>
      <GroupUserList groupUsers={groupUsers} groupId={groupId} />
    </div>
  );
};

export default GroupDetails;
