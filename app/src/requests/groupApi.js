import axios from 'axios';

const URL = import.meta.env.VITE_BACKEND_URL;

// Get on group
export const getOneGroupApi = async (groupId) => {
  const response = await axios.get(`${URL}/groups/${groupId}`);
  return response.data;
};

// Create new group
export const postGroupApi = async (groupData) => {
  try {
    const response = await axios.post(`${URL}/groups`, {
      name: groupData.groupName,
      picture: groupData.groupPicture,
      description: groupData.groupDescription,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Add user to group
export const putAddUserToGroupApi = async (userId, newGroupId) => {
  try {
    const response = await axios.put(`${URL}/users/${userId}/add-to-group`, {
      groupId: newGroupId,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Text group member
export const postTextMemberApi = async (phoneNumber, message) => {
  try {
    const data = {
      phone: phoneNumber,
      message: message,
    };

    const response = await axios.post(`${URL}/texts/send`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.log('Error sending text:', error);
  }
};

// Get all group members
export const getAllGroupUsersApi = async (groupId) => {
  try {
    const response = await axios.get(`${URL}/groups/${groupId}/users`);
    return response.data;
  } catch (error) {
    console.log('Could not get users in group ', groupId);
    console.log(error);
  }
};
