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
import GroupUserList from './GroupUserList';
import { useUser } from '../../../contexts/UserContext';
import {
  Container,
  CircularProgress,
  Box,
  Button,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const GroupDetails = () => {
  const { currentUser } = useUser();
  const { groupId } = useParams();
  const [group, setGroup] = useState(null);
  const [groupUsers, setGroupUsers] = useState([]);
  const navigate = useNavigate();
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

  if (!group)
    return (
      <Container sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Container>
    );

  const handleTextGroupUsers = async () => {
    for (const user of groupUsers) {
      await postTextMemberApi(user.phoneNumber, message);
    }
  };

  const handleCheckIn = async () => {
    const getLog = await getLogForUserInGroupApi(currentUser.id, groupId);
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
      navigate('/groups');
    } catch (error) {
      console.error(error);
      alert('Error deleting group');
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      {/* Pass required props to GroupHeader */}
      <GroupHeader
        group={group}
        groupUsers={groupUsers}
        groupId={groupId}
        handleCheckIn={handleCheckIn}
        onRemind={handleTextGroupUsers}
      />

      <Typography variant="h5" gutterBottom>
        Your Friends
      </Typography>

      <GroupUserList
        groupUsers={groupUsers}
        groupId={groupId}
        onRemind={handleTextGroupUsers}
      />

      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          startIcon={<DeleteIcon />}
          variant="outlined"
          color="error"
          onClick={handleDeleteGroup}
        >
          Delete Group
        </Button>
      </Box>
    </Container>
  );
};

export default GroupDetails;
