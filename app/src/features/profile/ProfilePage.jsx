import InterestDropdown from './InterestDropdown';
import DeleteAccountButton from './DeleteAccountButton';
import { useState } from 'react';
import { updateUserInterestsApi } from '../../requests/userApi';
import { Box, Typography, Divider } from '@mui/material';

function ProfilePage({ user, setCurrentUser }) {
  const [selectedInterests, setSelectedInterests] = useState(
    user.interests || []
  );

  const updateInterests = async (newInterests) => {
    setSelectedInterests(newInterests);
    try {
      await updateUserInterestsApi(user.id, newInterests);
    } catch (error) {
      console.error('Failed to update interests', error);
    }
  };

  return (
    <Box sx={{ maxWidth: 720, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Profile Page for {user.username}
      </Typography>

      <Typography variant="h6" gutterBottom>
        Information
      </Typography>
      <Typography>Username: {user.username}</Typography>
      <Typography>
        Phone number: {user.phoneNumber || 'Not provided'}
      </Typography>

      <Divider sx={{ my: 3 }} />

      <InterestDropdown
        selectedInterests={selectedInterests}
        onChange={updateInterests}
      />

      <Divider sx={{ my: 3 }} />

      <DeleteAccountButton user={user} setCurrentUser={setCurrentUser} />
    </Box>
  );
}

export default ProfilePage;
