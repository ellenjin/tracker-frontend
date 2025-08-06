// Display user's username, phone number, interests
// Allow user to choose interests (from a drop down)
// Allow user to change username and phone number?
import InterestDropdown from './InterestDropdown';
import { useState, useEffect } from 'react';
import { updateUserInterestsApi } from '../../requests/userApi';

function ProfilePage({ user }) {
  const [selectedInterests, setSelectedInterests] = useState(
    user.interests || []
  );

  useEffect(() => {
    setSelectedInterests(user.interests || []);
  }, [user.interests]);

  const updateInterests = async (newInterests) => {
    setSelectedInterests(newInterests);
    try {
      await updateUserInterestsApi(user.id, newInterests);
    } catch (error) {
      console.error('Failed to update interests', error);
    }
  };

  return (
    <>
      <h1>Profile Page for {user.username}</h1>{' '}
      {/* could change this later to user.name if we add in name */}
      <p>Username: {user.username}</p>
      <p>Phone number: {user.phoneNumber}</p>
      <InterestDropdown
        selectedInterests={selectedInterests}
        onChange={updateInterests}
      ></InterestDropdown>
    </>
  );
}

export default ProfilePage;
