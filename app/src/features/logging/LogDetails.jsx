import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneLogApi, deleteLogApi } from '../../requests/logApi';
import { useNavigate } from 'react-router-dom';

const LogDetails = () => {
  const { logId } = useParams(); // logId = the value from the URL
  const navigate = useNavigate();
  const [log, setLog] = useState(null);

  useEffect(() => {
    const fetchLog = async () => {
      const data = await getOneLogApi(logId);
      setLog(data);
    };
    fetchLog();
  }, [logId]);

  if (!log) return <p>Loading... </p>;

  // const deleteLog = () => {
  //   deleteLogApi(logId);
  // };

  const deleteLog = async () => {
    const confirm = window.confirm('Delete this log?');
    if (!confirm) return;

    await deleteLogApi(logId);
    navigate('/logs');
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="text-2xl font-semibold">{log.title}</h2>
      <p>
        <strong>Frequency:</strong> {log.frequencyCount} / {log.frequencyUnit}
      </p>
      <p>
        <strong>Skill Level:</strong> {log.skillLevel}
      </p>
      <p>
        <strong>Check-Ins:</strong> {log.checkInCount}
      </p>
      <p>
        <strong>Looking for Partner:</strong> {log.wantsPartner ? 'Yes' : 'No'}
      </p>
      <p>
        <strong>Partner Name:</strong> {log.partnerName}
      </p>
      <button onClick={deleteLog}> Delete this Log </button>
    </div>
  );
};

export default LogDetails;
