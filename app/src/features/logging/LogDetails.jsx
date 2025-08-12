import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  deleteLogApi,
  getOneLogApi,
  logCheckInApi,
  updateLogApi,
} from '../../requests/logApi';
import LogHeader from './LogHeader';
import LogInfo from './LogInfo';
import LogActions from './LogActions';
import { Container, CircularProgress } from '@mui/material';
import LogEditForm from './LogEditForm';

const LogDetails = () => {
  const { logId } = useParams();
  const navigate = useNavigate();
  const [log, setLog] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

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

  const handleSave = async (updatedData) => {
    try {
      const updatedLog = await updateLogApi(logId, updatedData);
      setLog(updatedLog);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
      alert('Failed to save changes');
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      {isEditing ? (
        <LogEditForm
          log={log}
          onCancel={() => setIsEditing(false)}
          onSave={handleSave}
        />
      ) : (
        <>
          <LogHeader title={log.title} onCheckIn={handleCheckIn} />
          <LogInfo log={log} />
          <LogActions onDelete={deleteLog} setIsEditing={setIsEditing} />
        </>
      )}
    </Container>
  );
};

export default LogDetails;
