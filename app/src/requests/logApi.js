// handles API communication between front and back end for anything related to logs.

import axios from 'axios';
const URL = import.meta.env.VITE_BACKEND_URL;

// getLogsApi(userId) -- Fetches all logs for a specific user
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

// Get a log for given userId and groupId
export const getLogForUserInGroupApi = async (userId, groupId) => {
  const response = await axios.get(
    `${URL}/logs/user/${userId}/group/${groupId}`
  );
  return response.data; // should be the log for that groupId and userId.
  // There aren't failsafes in place yet if either groupId or userId are wrong
  // -- will throw an error from LogRepository in backend
};

// increase checkIn
export const logCheckInApi = async (logId) => {
  const response = await axios.put(`${URL}/logs/${logId}/checkIn`);
  return response.data;
};
