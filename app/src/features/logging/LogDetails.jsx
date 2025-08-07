import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneLogApi } from '../../requests/logApi';

const LogDetails = () => {
  const { logId } = useParams(); // logId = the value from the URL
  const [log, setLog] = useState(null);

  useEffect(() => {
    const fetchLog = async () => {
      const data = await getOneLogApi(logId);
      setLog(data);
    };
    fetchLog();
  }, [logId]);

  if (!log) return <p>No Log Id found... try again</p>;

  const handleClick = (logId) => {
    // delete the log? Pop up button or message to confirm?
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
      <button
        onClick={() => handleClick(log.logId)}
        // className="text-blue-600 underline hover:text-blue-800"
      >
        Delete this Log
      </button>
    </div>
  );
};

export default LogDetails;
