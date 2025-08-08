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

// Upload file

// // find groups' information. Can be used for multiple
// // group ids must be passed in as an array
// export const getGroupsApi = async (groupIds) => {};

// PUT check user in
// Blocked - sno will update shape of log response
// export const putUserLogCheckIn = async (logData) => {
//   try {
//     const response = async () => {
//       await axios.put(`${URL}/logId`, {
//         data: { logData },
//       });
//       return {
//         checkInCount: response.data.checkInCount,
//       };
//     };
//   } catch (error) {
//     console.log(error);
//   }
// };

// Send text belt API request
export const postTextAll = async (userId) => {
  // Get phone number
};

// If this isn't working/the file isn't running, comment out ^
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
