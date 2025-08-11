// handles API communication between front and back end for anything related to logs.

import axios from 'axios';
const URL = import.meta.env.VITE_BACKEND_URL;

// getLogsApi(userId) -- Fetches all logs for a specific user
// export const getLogsApi = async (userId) => {
//   const response = await axios.get(`${URL}/logs/user/${userId}`);
//   return response.data;
// };

export const getLogsApi = async (userId) => {
  const response = await axios.get(`${URL}/users/${userId}`);
  return response.data.logs; // Access logs from user object
};

// createLogApi(data) -- Sends a POST request to create a new log
export const createLogApi = async (logData) => {
  const response = await axios.post(`${URL}/logs`, logData);
  return response.data;
};

// getOneLogApi(logId) -- Fetches detailed info for a single log
export const getOneLogApi = async (logId) => {
  const response = await axios.get(`${URL}/logs/${logId}`);
  return response.data;
};

// deleteLogApi(logId) -- Sends a DELETE request to remove a log
export const deleteLogApi = async (logId) => {
  const response = await axios.delete(`${URL}/logs/${logId}`);
  return response.data;
};

// updateLogApi(id, data) -- Sends a PUT/PATCH to edit a specific log


