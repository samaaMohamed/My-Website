import axios from "axios";

export const sendMessage = (message) => {
  return axios.post(
    "https://samaa-dashboard.herokuapp.com/api/messages/new",
    message
  );
};
