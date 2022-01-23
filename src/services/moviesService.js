import axios from "axios";

export const getData = async () => {
  const url = `https://imdb-api.com/API/Top250Movies/${process.env.REACT_APP_LOCAL_API_KEY}/`;
  try {
    return await axios.get(url);
  } catch (e) {
    console.error(e);
  }
};
