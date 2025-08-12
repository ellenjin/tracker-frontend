import React, { useEffect, useState } from 'react';
import { getLogsApi } from '../../requests/logApi';
import { useNavigate } from 'react-router-dom';
import NewLogForm from './NewLogForm';
import NewLogBtn from '../../components/NewLogBtn';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
} from '@mui/material';

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
    <Box sx={{ p: 2, maxWidth: 720, margin: 'auto' }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Your Current Logs
      </Typography>

      {logs.length === 0 ? (
        <Typography>No logs yet.</Typography>
      ) : (
        <List>
          {logs.map((log) => (
            <ListItem key={log.logId} disablePadding>
              <ListItemButton onClick={() => handleClick(log.logId)}>
                <ListItemText primary={log.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}

      <NewLogBtn
        isVisible={isVisible}
        onClick={() => setIsVisible(!isVisible)}
        showText="Create a New Log!"
        hideText="Hide New Log Form"
      />

      {isVisible && (
        <NewLogForm userId={userId} groupId={groupId} logId={logId} />
      )}
    </Box>
  );
};

export default LogList;


