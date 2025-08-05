// This page should show a list view of all the groups that a user is a part of.

import GroupTile from './GroupTile';
import './GroupPage.css';

import { useNavigate } from 'react-router-dom';

function GroupPage({ groupList }) {
  const navigate = useNavigate();

  // NOTE: USE THIS TO NAVIGATE FROM EACH TILE TO THE PAGE WITH MORE DETAILS! AKA OTHER GROUP MEMBERS, ETC.
  const handleClick = (groupId) => {
    // navigate(`/groups/${groupId}`);
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
        <button key={group.id} onClick={() => handleClick(group.id)}>
          <GroupTile
            key={group.id}
            id={group.id}
            name={group.name}
            description={group.description}
          ></GroupTile>
        </button>
      );
    });
  };

  return (
    <>
      <h1>Groups</h1>
      <section className="group-list">{getGroupTilesJSX()}</section>
    </>
  );
}

export default GroupPage;
