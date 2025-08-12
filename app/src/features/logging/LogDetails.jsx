import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  deleteLogApi,
  getOneLogApi,
  logCheckInApi,
} from '../../requests/logApi';
import LogHeader from './LogHeader'; 
import LogInfo from './LogInfo';
import LogActions from './LogActions';
import { Container, CircularProgress } from '@mui/material';

const LogDetails = () => {
  const { logId } = useParams();
  const navigate = useNavigate();
  const [log, setLog] = useState(null);

  useEffect(() => {
    const fetchLog = async () => {
      const data = await getOneLogApi(logId);
      setLog(data);
    };
    fetchLog();
  }, [logId]);

  if (!log)
    return (
      <Container sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Container>
    );

  const handleCheckIn = async () => {
    try {
      const updatedLog = await logCheckInApi(log.logId);
      setLog(updatedLog);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteLog = async () => {
    const confirm = window.confirm('Delete this log?');
    if (!confirm) return;

    await deleteLogApi(logId);
    navigate('/logs');
  };

  return (
    <Container sx={{ mt: 4 }}>
      <LogHeader title={log.title} onCheckIn={handleCheckIn} />
      <LogInfo log={log} />
      <LogActions onDelete={deleteLog}/>
    </Container>
  );
};

export default LogDetails;
