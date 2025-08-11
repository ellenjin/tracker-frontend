import React, { useEffect, useState } from 'react';
import { getLogsApi } from '../../requests/logApi';
import { useNavigate } from 'react-router-dom';
import NewLogForm from './NewLogForm';

// Fetch logs from backend using getLogsApi(userId) in logApi.js
// Map over the logs and display relevant info (Log Name for now to click into later)
// Each log display title will be a button that takes you to full log information

const LogList = ({ userId, groupId, logId }) => {
  const [logs, setLogs] = useState([]);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const logs = await getLogsApi(userId);
        setLogs(logs);
      } catch (error) {
        console.error('Failed to fetch logs:', error);
      }
    };
    fetchLogs();
  }, [userId]);

  const handleClick = (logId) => {
    navigate(`/logs/${logId}`);
  };

  return (
    <div>
      <h2>Your Currrent Logs</h2>
      {logs.length === 0 ? (
        <p>No logs yet.</p>
      ) : (
        <ul>
          {logs.map((log) => (
            <li key={log.logId}>
              <button onClick={() => handleClick(log.logId)}>
                {log.title}
              </button>
            </li>
          ))}
        </ul>
      )}

      <button onClick={() => setIsVisible(!isVisible)}>
        Create a New Log!
      </button>
      {isVisible && (
        <div>
          <NewLogForm userId={userId} groupId={groupId} logId={logId} />
        </div>
      )}
    </div>
  );
};

export default LogList;
