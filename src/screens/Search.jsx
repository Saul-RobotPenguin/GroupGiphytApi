import { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [searchWord, setSearchWord] = useState("anime");
  const [searchGif, setSearchGif] = useState([]);

  useEffect(() => {
    fetchSearchData();
  }, []);

  const fetchSearchData = async () => {
    try {
      const CLIENT_SEARCH_URL = `https://api.giphy.com/v1/gifs/search?api_key=pjZzTWYuX86ZNY37NyGW9gpqOzVo9OcH&q=${searchWord}&limit=25&offset=0&rating=g&lang=en`;
      const response = await axios.get(CLIENT_SEARCH_URL);
      const results = response.data.data[0].images.downsized_large.url;
      console.log(results);
      setSearchGif(results);
      console.log(searchGif);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <img src={searchGif} alt="stuff" />
      <input
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <button onClick={fetchSearchData}>Search</button>
    </>
  );
};

export default Search;
