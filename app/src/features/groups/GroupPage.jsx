import GroupTile from './GroupTile';
import './GroupPage.css';
import GroupDetails from './GroupDetails';
import NewGroupForm from './NewGroupForm';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { postGroupApi } from '../../requests/groupApi';

function GroupPage({ groupList }) {
  // const navigate = useNavigate();
  const [currentGroup, setCurrentGroup] = useState({
    name: 'walking',
    picture: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    description: 'group for walking',
  });

  // NOTE: USE THIS TO NAVIGATE FROM EACH TILE TO THE PAGE WITH MORE DETAILS! AKA OTHER GROUP MEMBERS, ETC.
  const handleClick = (groupId) => {
    // navigate(`/groups/${groupId}`);
  };

  const handleCreateGroup = (newGroupData) => {
    postGroupApi(newGroupData);
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
      <NewGroupForm createGroup={handleCreateGroup} />
      <GroupDetails currentGroup={currentGroup} />
    </div>
  );
}

export default GroupPage;
