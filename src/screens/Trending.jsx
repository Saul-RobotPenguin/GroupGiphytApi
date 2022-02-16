import { useState, useEffect } from "react";
import axios from "axios";
import { CLIENT_TRENDING_URL } from "../services/constants";

const Trending = () => {
  const [trendingGif, setTrendingGif] = useState([]);
  const [trendingGif2, setTrendingGif3] = useState([]);
  const [trendingGif3, setTrendingGif2] = useState([]);

  useEffect(() => {
    fetchTrendingData();
  }, []);

  const fetchTrendingData = async () => {
    try {
      const response = await axios.get(CLIENT_TRENDING_URL);
      const results = response.data.data[0].images.downsized_large.url;
      const results2 = response.data.data[2].images.downsized_large.url;
      const results3 = response.data.data[3].images.downsized_large.url;
      console.log(results);
      setTrendingGif(results);
      setTrendingGif2(results2);
      setTrendingGif3(results3);
      console.log(trendingGif);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <img src={trendingGif} alt="trendingGif1" />
      <img src={trendingGif2} alt="trendingGif2" />
      <img src={trendingGif3} alt="trendingGif3" />
      <button onClick={fetchTrendingData}>Trending</button>
    </>
  );
};

export default Trending;
