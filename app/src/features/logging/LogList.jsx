import React, { useEffect, useState } from 'react';
import { getLogsApi } from '../../requests/logApi';
import { useNavigate } from 'react-router-dom';
import NewLogForm from './NewLogForm';

// Fetch logs from backend using getLogsApi(userId) in logApi.js
// Map over the logs and display relevant info (Log Name for now to click into later)
// Each log display title will be a button that takes you to full log information

const LogList = ({ userId }) => {
  const [logs, setLogs] = useState([]);
  const navigate = useNavigate();

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
      <h2 className="text-xl font-semibold mb-2">Your Currrent Logs</h2>
      {logs.length === 0 ? (
        <p>No logs yet.</p>
      ) : (
        <ul className="space-y-2">
          {logs.map((log) => (
            <li key={log.logId}>
              <button
                onClick={() => handleClick(log.logId)}
                // className="text-blue-600 underline hover:text-blue-800"
              >
                {log.title}
              </button>
            </li>
          ))}
        </ul>
      )}
      <h2>Create a New Log</h2>
      {/* hardcode test */}
      <NewLogForm userId={userId} groupId={104} />
      {/* <NewLogForm userId={userId} groupId={groupId} /> */}
    </div>
  );
};

export default LogList;
