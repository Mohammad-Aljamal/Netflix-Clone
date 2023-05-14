import axios from "axios";
import { useState, useEffect } from 'react';
import MovieList from "./MovieList";

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const sendReq = async () => {
    const serverUrl = `http://localhost:3000/trending`;
    const result = await axios.get(serverUrl);
    setTrendingMovies(result.data);
  };

  useEffect (() => {
      sendReq();
  },[]);

  return (
    <>
      <h3>Home</h3>
      <MovieList trendingMovies={trendingMovies}/>
    </>
  );
}

export default Home;
