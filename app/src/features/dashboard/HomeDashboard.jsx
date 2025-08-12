import React, { useState } from 'react';
import NewLogForm from '../../features/logging/NewLogForm';
import { Box, Typography } from '@mui/material';
import NewLogBtn from '../../components/NewLogBtn';
import NewGroupForm from '../../features/groups/NewGroupForm';

function HomeDashboard({ user, userId, groupId, logId }) {
  const [isLogFormVisible, setIsLogFormVisible] = useState(false);

  return (
    <>
      <Box className="container" sx={{ maxWidth: 720, margin: 'auto', p: 2 }}>
        <Typography variant="h4" gutterBottom>
          Welcome, {user.username}!
        </Typography>

        <NewLogBtn
          isVisible={isLogFormVisible}
          onClick={() => setIsLogFormVisible(!isLogFormVisible)}
          showText="Create a New Log!"
          hideText="Hide New Log Form"
        />

        {isLogFormVisible && (
          <NewLogForm userId={userId} groupId={groupId} logId={logId} />
        )}
      </Box>

      <NewGroupForm userId={userId} />
    </>
  );
}

export default HomeDashboard;
