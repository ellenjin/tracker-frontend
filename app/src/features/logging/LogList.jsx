import React, { useEffect, useState } from 'react';
import { getLogsApi } from '../../requests/logApi';
import { useNavigate } from 'react-router-dom';

// Fetch logs from backend using getLogsApi(userId) in logApi.js
// Map over the logs and display relevant info (Log Name for now to click into later)
// Each log display title will be a button that takes you to full log information

const LogList = ({ userId }) => {
  const [logs, setLogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLogs = async () => {
      const result = await getLogsApi(userId);
      setLogs(result);
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
            <li key={log.id}>
              <button
                onClick={() => handleClick(log.id)}
                className="text-blue-600 underline hover:text-blue-800"
              >
                {log.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LogList;
