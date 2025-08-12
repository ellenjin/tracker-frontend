import GroupTile from './GroupTile';
import NewGroupForm from './NewGroupForm';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { postGroupApi, putAddUserToGroupApi } from '../../requests/groupApi';
import JoinGroupForm from './JoinGroupForm';

function GroupPage({ user }) {
  const [groups, setGroups] = useState(user.groups);
  // const [createdGroup, setCreatedGroup] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   setGroups(groupList || []);
  // }, [groupList]);

  // useEffect(() => {
  //   if (createdGroup) {
  //     putAddUserToGroupApi(userId, createdGroup.id);
  //     console.log(createdGroup);
  //   }
  // }, [createdGroup, userId]);

  const handleClick = (groupId) => {
    navigate(`/groups/${groupId}`);
  };

  // const handleCreateGroup = (newGroup) => {
  //   setGroups((prev) => [...prev, newGroup]); // Show in UI immediately
  //   setCreatedGroup(newGroup);
  // };

  const handleCreateGroup = async (newGroupData) => {
    try {
      console.log(newGroupData);
      const response = await postGroupApi(newGroupData);
      console.log(response);
      // setCreatedGroup(response);
      setGroups((prev) => [...prev, response]);
      await putAddUserToGroupApi(user.id, response.id);
      // should also add the user to the group once the group is made
    } catch (error) {
      console.log(error);
    }
  };

  const getGroupTilesJSX = () => {
    if (!groups.length) {
      return (
        <>
          <h1>Groups</h1>
          <h2>Oops! No groups here, you should join some!</h2>
        </>
      );
    }
    const sortedGroups = [...groups].sort((a, b) => a.id - b.id);

    return sortedGroups.map((group) => {
      return (
        <button
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
        </button>
      );
    });
  };

  return (
    <div className="container group-page">
      <h1 className="page-header">Groups</h1>
      <section className="group-list">{getGroupTilesJSX()}</section>
      {/* <button>New Group</button> */}
      <NewGroupForm createGroup={handleCreateGroup} userId={user.id} />
      <button>Join an existing group</button>
      <JoinGroupForm></JoinGroupForm>
    </div>
  );
}

export default GroupPage;
