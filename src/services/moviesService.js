import axios from "axios";

export const getData = async () => {
  const url = `http://${process.env.REACT_APP_LOCAL_API}/movies`;
  return await axios.get(url);
};
