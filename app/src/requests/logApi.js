// handles API communication between front and back end for anything related to logs.

import axios from 'axios';
const URL = import.meta.env.VITE_BACKEND_URL;

export const getLogsApi = async (userId) => {
  const response = await axios.get(`${URL}/logs/user/${userId}`);
  return response.data;
};

export const createLogApi = async (logData) => {
  const response = await axios.post(`${URL}/logs`, logData);
  return response.data;
};


// getLogsApi(userId) -- Fetches all logs for a specific user
// getOneLogApi(logId) -- Fetches detailed info for a single log
// createLogApi(data) -- Sends a POST request to create a new log
// updateLogApi(id, data) -- Sends a PUT/PATCH to edit a specific log
// deleteLogApi(id) -- Sends a DELETE request to remove a log
