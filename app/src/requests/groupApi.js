import axios from 'axios';

const URL = import.meta.env.VITE_BACKEND_URL;

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
export const postAddUserToGroupApi = async (userId, newGroupId) => {
  try {
    const response = await axios.post(`${URL}/users/${userId}/add-to-group`, {
      groupId: newGroupId,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Text one group member
export const postRemindOneMember = async (phoneNumber) => {
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

// Text all group members

// // find groups' information. Can be used for multiple
// // group ids must be passed in as an array

// Send text belt API request
// export const postTextAll = async (userId) => {
// Get phone number
// };

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
