import { useState, useEffect } from "react";
import axios from "axios";
import { CLIENT_RANDOM_URL } from "../services/constants";

const Random = () => {
  const [gif, setGif] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(CLIENT_RANDOM_URL);
      const results = response.data.data.images.downsized_large.url;
      console.log(results);
      setGif(results);
      console.log(gif);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <img src={gif} alt="stuff" />
      <button onClick={fetchData}>Random</button>
    </>
  );
};

export default Random;
