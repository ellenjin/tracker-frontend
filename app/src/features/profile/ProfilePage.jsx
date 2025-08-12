import InterestDropdown from './InterestDropdown';
import DeleteAccountButton from './DeleteAccountButton';
import { useState } from 'react';
import { updateUserInterestsApi } from '../../requests/userApi';
import {
  Box,
  Typography,
  Divider,
  Avatar,
  Grid,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

function ProfilePage({ user, setCurrentUser }) {
  const [selectedInterests, setSelectedInterests] = useState(
    user.interests || []
  );
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const updateInterests = async (newInterests) => {
    setSelectedInterests(newInterests);
    try {
      await updateUserInterestsApi(user.id, newInterests);
      setCurrentUser((prev) => ({
        ...prev,
        interests: newInterests,
      }));
    } catch (error) {
      console.error('Failed to update interests', error);
    }
  };

  // Generate placeholder if profilePicture is missing
  console.log('profile picture: ');
  console.log(user.profilePicture);
  const avatarSrc =
    user.profilePicture ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      user.username
    )}&background=random&color=fff&size=256`;

  return (
    <Box sx={{ maxWidth: 720, mx: 'auto', p: 3 }}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent={'space-between'}
        direction={isSmallScreen ? 'column' : 'row'}
      >
        <Grid>
          <Typography variant="h4" gutterBottom>
            Howdy, {user.username}!
          </Typography>

          <Typography variant="h6" gutterBottom>
            Account Information
          </Typography>
          <Typography>Username: {user.username}</Typography>
          <Typography>
            Phone number: {user.phoneNumber || 'Not provided'}
          </Typography>
        </Grid>

        <Grid>
          <Avatar
            alt={user.username}
            src={avatarSrc}
            sx={{
              width: isSmallScreen ? 100 : 150,
              height: isSmallScreen ? 100 : 150,
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>

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
