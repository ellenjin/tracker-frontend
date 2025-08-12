import GroupTile from './GroupTile';
import NewGroupForm from './NewGroupForm';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import {
  getOneGroupApi,
  postGroupApi,
  putAddUserToGroupApi,
} from '../../requests/groupApi';
import { createLogApi } from '../../requests/logApi';
import JoinGroupForm from './JoinGroupForm';
import { List, Typography, Box, Button } from '@mui/material';

function GroupPage() {
  const { currentUser, setCurrentUser } = useUser();
  const navigate = useNavigate();

  const handleClick = (groupId) => {
    navigate(`/groups/${groupId}`);
  };
  // just creates a group
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

  // Handles joining an existing group
  const handleJoinGroup = async (groupId) => {
    try {
      const group = await getOneGroupApi(groupId);
      await putAddUserToGroupApi(currentUser.id, group.id);
      // createa log for joining
      const request = {
        title: group.name,
        user: { id: currentUser.id },
        group: { id: group.id },
        // set the rest to default
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

  const getGroupTilesJSX = () => {
    if (!currentUser?.groups || currentUser.groups.length === 0) {
      return (
        <>
          <Typography>Groups</Typography>
          <Typography>Oops! No groups here, you should join some!</Typography>
        </>
      );
    }
    const sortedGroups = [...currentUser.groups].sort((a, b) => a.id - b.id);

    return sortedGroups.map((group) => {
      return (
        <Button
          className="group-tile"
          key={group.id}
          onClick={() => handleClick(group.id)}
        >
          <GroupTile
            key={group.id}
            id={group.id}
            name={group.name}
            description={group.description}
          />
        </Button>
      );
    });
  };

  return (
    <Box sx={{ maxWidth: 720, mx: 'auto', p: 2 }}>
      {/* <div className="container group-page"> */}
      {/* <h1 className="page-header">Groups</h1> */}
      <Typography variant="h5" gutterBottom>
        Groups
      </Typography>

      <section className="group-list">{getGroupTilesJSX()}</section>
      <NewGroupForm createGroup={handleCreateGroup} userId={currentUser.id} />
      <JoinGroupForm joinGroup={handleJoinGroup}></JoinGroupForm>
      {/* </div> */}
    </Box>
  );
}

export default GroupPage;
