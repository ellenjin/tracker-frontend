// import { Button, Box } from '@mui/material';

// function NewLogBtn({
//   isVisible,
//   onClick,
//   showText = 'Create a New Log!',
//   hideText = 'Hide New Log Form',
// }) {
//   return (
//     <Box sx={{ mt: 2, mb: 2 }}>
//       <Button
//         variant={isVisible ? 'outlined' : 'contained'}
//         color="primary"
//         onClick={onClick}
//         sx={{ width: { xs: '100%', sm: 'auto' } }}
//       >
//         {isVisible ? hideText : showText}
//       </Button>
//     </Box>
//   );
// }

// export default NewLogBtn;

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
