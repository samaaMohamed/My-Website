import axios from 'axios';
export const getProjects = async () => {
  return await axios.get("https://samaa-dashboard.herokuapp.com/api/projects/list");
};
