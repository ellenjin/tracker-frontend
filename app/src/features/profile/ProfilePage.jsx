// Display user's username, phone number, interests
// Allow user to choose interests (from a drop down)
// Allow user to change username and phone number?
import InterestDropdown from './InterestDropdown';
import { useState } from 'react';

function ProfilePage({ user }) {
  const [selectedInterests, setSelectedInterests] = useState([]);

  return (
    <>
      <h1>Profile Page for {user.username}</h1>{' '}
      {/* could change this later to user.name if we add in name */}
      <p>Username: {user.username}</p>
      <p>Phone number: {user.phoneNumber}</p>
      <InterestDropdown
        selectedInterests={selectedInterests}
        setSelectedInterests={setSelectedInterests}
      ></InterestDropdown>
    </>
  );
}

export default ProfilePage;
