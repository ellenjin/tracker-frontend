import axios from 'axios';

const URL = import.meta.env.VITE_BACKEND_URL;

// find existing user(s) -- will find just 1 if identifier is given.
// works for multiple users
export const getOneUserApi = async (identifier) => {
  try {
    const specificUrl = identifier
      ? `${URL}/users/${identifier}`
      : `${URL}/users`;
    const response = await axios.get(specificUrl);
    if (Array.isArray(response.data)) {
      return response.data.map((user) => ({
        id: user.id,
        username: user.username,
        groups: user.groups,
        phoneNumber: user.phoneNumber,
      }));
    } else if (response.data) {
      return {
        id: response.data.id,
        username: response.data.username,
        groups: response.data.groups,
        phoneNumber: response.data.phoneNumber,
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export const postUserApi = async (userData) => {
  try {
    const response = await axios.post(`${URL}/users`, userData);
    console.log(response);
    return [
      {
        id: response.data.id,
        username: response.data.username,
        groups: response.data.groups,
        phoneNumber: response.data.phoneNumber,
      },
    ];
  } catch (error) {
    console.log('Cannot post user with username "' + userData.username + '"');
    console.log(error);
    throw error;
  }
};
