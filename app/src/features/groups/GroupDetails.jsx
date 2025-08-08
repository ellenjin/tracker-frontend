import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneGroupApi } from '../../requests/groupApi';
// import { getOneLogApi, deleteLogApi } from '../../requests/logApi';
const GroupDetails = () => {
  const { groupId } = useParams(); // groupId = the value from the URL
  const [group, setGroup] = useState(null);

  useEffect(() => {
    const fetchGroup = async () => {
      const data = await getOneGroupApi(groupId);
      setGroup(data);
    };
    fetchGroup();
  }, [groupId]);

  if (!group) return <p>No group Id found... try again</p>;

  return (
    <div>
      <h1>{group.name}</h1>
      <img
        src={group.picture}
        alt="A flower in a field"
        style={{ height: '200px', width: '200px' }}
      />
      <p aria-label="group-description">{group.description}</p>
      <p>You haven't checked-in today!</p>
      <button type="button" disabled>
        Check-in
      </button>
      <p aria-label="check-in-count">0</p>
      <button>Text all</button>
      <button>Remind</button>
    </div>
  );
};

export default GroupDetails;
