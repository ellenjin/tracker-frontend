import axios from 'axios';

const URL = import.meta.env.VITE_BACKEND_URL;

// // find groups' information. Can be used for multiple
// // group ids must be passed in as an array
// export const getGroupsApi = async (groupIds) => {};

// PUT check user in
// how do i update the log object with the group id
export const putUserLogCheckIn = async (logData) => {
  try {
    const response = async () => {
      await axios.put(`${URL}/logId`, {
        data: { logData },
      });
      return {
        checkInCount: response.data.checkInCount,
      };
    };
  } catch (error) {
    console.log(error);
  }
};
