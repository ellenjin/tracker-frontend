// Display user's username, phone number, interests
// Allow user to choose interests (from a drop down)
// Allow user to change username and phone number?
import InterestDropdown from './InterestDropdown';
import DeleteAccountButton from './DeleteAccountButton';
import { useState } from 'react';
import { updateUserInterestsApi } from '../../requests/userApi';

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
    <>
      <h1>Profile Page for {user.username}</h1>{' '}
      {/* could change this later to user.name if we add in name */}
      <h2> Information </h2>
      <p>Username: {user.username}</p>
      <p>Phone number: {user.phoneNumber}</p>
      <InterestDropdown
        selectedInterests={selectedInterests}
        onChange={updateInterests}
      ></InterestDropdown>
      <DeleteAccountButton
        user={user}
        setCurrentUser={setCurrentUser}
      ></DeleteAccountButton>
    </>
  );
}

export default ProfilePage;
