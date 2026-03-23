import React, { useEffect, useState } from 'react';
import { List, ListItem, Typography, Box, Button } from '@mui/material';
import GroupTile from './GroupTile';
import NewGroupForm from './NewGroupForm';
import JoinGroupForm from './JoinGroupForm';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { getOneGroupApi, putAddUserToGroupApi, postGroupApi } from '../../requests/groupApi';
import { createLogApi } from '../../requests/logApi';

function GroupPage() {
  const { currentUser, setCurrentUser } = useUser();
  const [loadingGroups, setLoadingGroups] = useState(false);
  const navigate = useNavigate();

  const handleClick = (groupId) => {
    navigate(`/groups/${groupId}`);
  };

  const handleJoinGroup = async (groupId) => {
    try {
      const group = await getOneGroupApi(groupId);
      await putAddUserToGroupApi(currentUser.id, group.id);
      const request = {
        title: group.name,
        user: { id: currentUser.id },
        group: { id: group.id },
        frequencyCount: 1,
        frequencyUnit: 'WEEK',
        skillLevel: 'BEGINNER',
        wantsPartner: false,
        partnerName: '',
        checkInCount: 0,
        score: 0,
      };
      const response = await createLogApi(request);
      console.log('User added to group ', response.title);
      setCurrentUser((prevUser) => ({
        ...prevUser,
        groups: [...(prevUser.groups || []), group],
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateGroup = async (newGroupData) => {
    try {
      console.log(newGroupData);
      const response = await postGroupApi(newGroupData);
      console.log(response);
      handleJoinGroup(response.id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!currentUser?.groups) {
      setLoadingGroups(true);
      setLoadingGroups(false);
    }
  }, [currentUser]);

  const getGroupTilesJSX = () => {
    if (!currentUser?.groups || currentUser.groups.length === 0) {
      return (
        <Typography>No groups available. Join or create one!</Typography>
      );
    }
    const sortedGroups = [...currentUser.groups].sort((a, b) => a.id - b.id);

    return (
      <List>
        {sortedGroups.map((group) => (
          <ListItem key={group.id} disablePadding sx={{ mb: 1 }}>
            <Button
              onClick={() => handleClick(group.id)}
              sx={{
                textTransform: 'none',
                justifyContent: 'flex-start',
                width: '100%',
                padding: 1,
                display: 'flex',
              }}
            >
              <GroupTile
                id={group.id}
                name={group.name}
                description={group.description}
              />
            </Button>
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <Box sx={{ maxWidth: 720, mx: 'auto', p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Groups
      </Typography>

      {loadingGroups ? <SkeletonGroupList /> : getGroupTilesJSX()}

      <NewGroupForm createGroup={handleCreateGroup} userId={currentUser.id} />
      <JoinGroupForm joinGroup={handleJoinGroup} />
    </Box>
  );
}

export default GroupPage;

