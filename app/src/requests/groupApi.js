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
export const postTextMemberApi = async (phoneNumber) => {
  try {
    const response = await axios.post('https://textbelt.com/text', {
      phone: phoneNumber,
      message: "Don't forget to log!",
      key: 'textbelt',
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

// Get all lgroup members
export const getAllGroupUsersApi = async (groupId) => {
  try {
    const response = await axios.get(`${URL}/groups/${groupId}/users`);
    console.log(response);
    return {
      users: response.data.users,
    };
  } catch (error) {
    console.log('Could not get users in group ', groupId);
    console.log(error);
  }
};
