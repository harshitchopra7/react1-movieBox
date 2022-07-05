import React, { useEffect, useState } from "react";
import "./HomePageContent.css";
import Row from "./Row/Row";

function HomePageContent() {
  // image path = https://image.tmdb.org/t/p/original

  // APIs   
  // Popular Movies
  // https://api.themoviedb.org/3/movie/popular?api_key=yourApiKey&language=en-US&page=1

  // Now Playing
  // https://api.themoviedb.org/3/movie/now_playing?api_key=yourApiKey&language=en-US&page=1

  const BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY = "0477f5f21bb6f8f9d6406faeb32c0ef9";

  const topRatedMoviesApiUrl = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  const popularMoviesApiUrl = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const nowPlayingMoviesApiUrl = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&p`;

  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  function callApi(url, setVariable) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setVariable(data.results))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    callApi(topRatedMoviesApiUrl, setTopRatedMovies);
    callApi(popularMoviesApiUrl, setPopularMovies);
    callApi(nowPlayingMoviesApiUrl, setNowPlayingMovies);
  }, []);

  return (
    <div className="homepagecontent_container">
      {topRatedMovies.length > 0 && (
        <Row
          rowTitle="Top Rated Movies"
          moviesArray={topRatedMovies}
          posterPath={true}
        />
      )}

      {popularMovies.length > 0 && (
        <Row
          rowTitle="Popular Movies"
          moviesArray={popularMovies}
          posterPath={true}
        />
      )}

      {nowPlayingMovies.length > 0 && (
        <Row
          rowTitle="Now Playing Movies"
          moviesArray={nowPlayingMovies}
          posterPath={true}
        />
      )}
    </div>
  );
}

export default HomePageContent;
