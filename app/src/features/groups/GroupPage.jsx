import GroupTile from './GroupTile';
import './GroupPage.css';
import GroupDetails from './GroupDetails';
import NewGroupForm from './NewGroupForm';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  getAllGroupUsersApi,
  postGroupApi,
  postAddUserToGroupApi,
} from '../../requests/groupApi';
import { use } from 'react';

function GroupPage({ groupList, userId }) {
  // const [currentGroup, setCurrentGroup] = useState({
  //   name: 'walking',
  //   picture: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  //   description: 'group for walking',
  // });

  const [createdGroup, setCreatedGroup] = useState(null);

  const handleCreateGroup = async (newGroupData) => {
    try {
      const response = await postGroupApi(newGroupData);
      setCreatedGroup(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (createdGroup) {
      postAddUserToGroupApi(userId, createdGroup.id);
      console.log(createdGroup);
    }
  }, [createdGroup, userId]);
  const navigate = useNavigate();
  // NOTE: USE THIS TO NAVIGATE FROM EACH TILE TO THE PAGE WITH MORE DETAILS! AKA OTHER GROUP MEMBERS, ETC.
  const handleClick = (groupId) => {
    navigate(`/groups/${groupId}`);
  };

  const getGroupTilesJSX = () => {
    if (!groupList) {
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
    <div className="group-page">
      <h1 className="page-header">Groups</h1>
      <section className="group-list">{getGroupTilesJSX()}</section>
      <button>New Group</button>
      <NewGroupForm createGroup={handleCreateGroup} userId={userId} />
    </div>
  );
}

export default GroupPage;
