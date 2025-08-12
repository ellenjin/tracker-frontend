import React, { useEffect, useState } from 'react';
import { List, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getLogsApi, deleteLogApi } from '../../requests/logApi';
import LogListItem from './LogListItem';
import SkeletonList from './SkeletonLogList';
import NewLogForm from './NewLogForm';

export default function LogList({ userId, groupId, logId }) {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLogs = async () => {
      setLoading(true);
      try {
        const logs = await getLogsApi(userId);
        setLogs(logs);
      } catch (error) {
        console.error('Failed to fetch logs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchLogs();
  }, [userId]);

  const handleClick = (logId) => {
    navigate(`/logs/${logId}`);
  };

  const handleDelete = async (logId) => {
    try {
      await deleteLogApi(logId);
      setLogs((prevLogs) => prevLogs.filter((log) => log.logId !== logId));
    } catch (error) {
      console.error('Failed to delete log:', error);
    }
  };

  return (
    <Box sx={{ maxWidth: 720, mx: 'auto', p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Logs Activity
      </Typography>

      {loading ? (
        <SkeletonList />
      ) : logs.length === 0 ? (
        <Typography>No logs yet.</Typography>
      ) : (
        <List>
          {logs.map((log) => (
            <LogListItem
              key={log.logId}
              log={log}
              onClick={handleClick}
              onDelete={handleDelete}
            />
          ))}
        </List>
      )}

      <Button
        variant="contained"
        onClick={() => setIsVisible(!isVisible)}
        sx={{ mt: 2 }}
      >
        {isVisible ? 'Hide New Log Form' : 'Create a New Log!'}
      </Button>

      {isVisible && (
        <NewLogForm userId={userId} groupId={groupId} logId={logId} />
      )}
    </Box>
  );
}
