import GroupTile from './GroupTile';
import NewGroupForm from './NewGroupForm';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { postGroupApi, putAddUserToGroupApi } from '../../requests/groupApi';
import JoinGroupForm from './JoinGroupForm';

function GroupPage({ groupList, userId }) {
  const [groups, setGroups] = useState(groupList || []);
  const [createdGroup, setCreatedGroup] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setGroups(groupList || []);
  }, [groupList]);

  useEffect(() => {
    if (createdGroup) {
      putAddUserToGroupApi(userId, createdGroup.id);
      console.log(createdGroup);
    }
  }, [createdGroup, userId]);

  const handleClick = (groupId) => {
    navigate(`/groups/${groupId}`);
  };

  const handleCreateGroup = (newGroup) => {
    setGroups((prev) => [...prev, newGroup]); // Show in UI immediately
    setCreatedGroup(newGroup);
  };

  // const handleCreateGroup = async (newGroupData) => {
  //   try {
  //     const response = await postGroupApi(newGroupData);
  //     setCreatedGroup(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getGroupTilesJSX = () => {
    if (!groups.length) {
      return (
        <>
          <h1>Groups</h1>
          <h2>Oops! No groups here, you should join some!</h2>
        </>
      );
    }
    const sortedGroups = [...groupList].sort((a, b) => a.id - b.id);

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
      <NewGroupForm createGroup={handleCreateGroup} userId={userId} />
      <button>Join an existing group</button>
      <JoinGroupForm></JoinGroupForm>
    </div>
  );
}

export default GroupPage;
