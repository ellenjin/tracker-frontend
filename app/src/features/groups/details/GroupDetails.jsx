import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  getOneGroupApi,
  getAllGroupUsersApi,
  postTextMemberApi,
  deleteGroupApi,
} from '../../../requests/groupApi';
import { getLogForUserInGroupApi } from '../../../requests/logApi';
import GroupHeader from './GroupHeader';
import GroupActions from './GroupActions';
import GroupUserList from './GroupUserList';
import { useUser } from '../../../contexts/UserContext';

const GroupDetails = () => {
  const { currentUser } = useUser();
  const { groupId } = useParams();
  const [group, setGroup] = useState(null);
  const [groupUsers, setGroupUsers] = useState([]);
  const message = 'Check in today!';
  const navigate = useNavigate();

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

  if (!group) return <p>Loading...</p>;

  const handleTextGroupUsers = async () => {
    for (const user of groupUsers) {
      await postTextMemberApi(user.phoneNumber, message);
    }
  };

  const handleCheckIn = async () => {
    const getLog = await getLogForUserInGroupApi(currentUser.id, groupId);
    console.log(getLog);
    navigate(`/logs/${getLog.logId}`);
  };

  const handleDeleteGroup = async () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the group "${group.name}"?`
    );
    if (!confirmDelete) return;

    try {
      await deleteGroupApi(group.id);
      alert('Group deleted successfully');
      // navigate('/groups', { state: { deletedGroupId: group.id } });
      navigate('/groups');
    } catch (error) {
      console.error(error);
      alert('Error deleting group');
    }
  };

  return (
    <div className="container">
      <GroupHeader group={group} />
      <GroupActions
        onRemind={handleTextGroupUsers}
        groupUsers={groupUsers}
        groupId={groupId}
        handleCheckIn={handleCheckIn}
      />
      <h2>Your Friends</h2>
      <GroupUserList
        groupUsers={groupUsers}
        groupId={groupId}
        onRemind={handleTextGroupUsers}
      />
      <button onClick={handleDeleteGroup}>Delete Group</button>
    </div>
  );
};

export default GroupDetails;
