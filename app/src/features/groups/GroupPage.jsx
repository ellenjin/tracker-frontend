import GroupTile from './GroupTile';
import NewGroupForm from './NewGroupForm';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  postGroupApi,
  putAddUserToGroupApi,
  postTextMemberApi,
} from '../../requests/groupApi';

function GroupPage({ groupList, userId }) {
  const [createdGroup, setCreatedGroup] = useState(null);
  // const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  // add to useEffect
  // const handleShowForm = () => {
  //   setShowForm(!showForm);
  // };

  useEffect(() => {
    if (createdGroup) {
      putAddUserToGroupApi(userId, createdGroup.id);
      console.log(createdGroup);
    }
  }, [createdGroup, userId]);

  const handleClick = (groupId) => {
    navigate(`/groups/${groupId}`);
  };

  const handleCreateGroup = async (newGroupData) => {
    try {
      const response = await postGroupApi(newGroupData);
      setCreatedGroup(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTextGroupUsers = (groupUsers) => {
    for (const user in groupUsers) {
      postTextMemberApi(user.phone);
    }
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
      <NewGroupForm
        createGroup={handleCreateGroup}
        userId={userId}
        textGroupUsers={handleTextGroupUsers}
      />
    </div>
  );
}

export default GroupPage;
