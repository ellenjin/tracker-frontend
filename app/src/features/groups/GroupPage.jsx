// This page should show a list view of all the groups that a user is a part of.

import GroupTile from './GroupTile';
import './GroupPage.css';

function GroupPage({ groupList }) {
  const getGroupTilesJSX = () => {
    console.log(groupList);
    return groupList.map((group) => {
      return (
        <GroupTile
          key={group.id}
          id={group.id}
          name={group.name}
          description={group.description}
        ></GroupTile>
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
