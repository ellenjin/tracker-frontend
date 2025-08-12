import React, { useState } from 'react';
import NewLogForm from '../../features/logging/NewLogForm';
import { Box, Typography } from '@mui/material';
import NewLogBtn from '../../components/NewLogBtn';

function HomeDashboard({ user, userId, groupId, logId }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Box className="container" sx={{ maxWidth: 720, margin: 'auto', p: 2 }}>
        <Typography variant="h4" gutterBottom>
          Welcome, {user.username}!
        </Typography>

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
    </>
  );
}

export default HomeDashboard;
