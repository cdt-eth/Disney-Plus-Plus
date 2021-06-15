import Carousel from "../components/Carousel/Carousel";
import Studios from "../components/Studios/Studios";
import Recommendations from "../components/Recommendations/Recommendations";
import { useState, useEffect } from "react";

export default function App() {
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const API_KEY = process.env.REACT_APP_OPEN_MOVIE_DB_API_KEY;

  useEffect(() => {
    const fetchUpcoming = async () => {
      setIsLoading(true);

      const res = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await res.json();
      const results = data.results;

      setUpcoming(results);
      setIsLoading(false);
    };

    fetchUpcoming();
  }, [API_KEY]);

  useEffect(() => {
    const fetchTopRated = async () => {
      setIsLoading(true);

      const res = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await res.json();
      const results = data.results;

      setTopRated(results);
      setIsLoading(false);
    };

    fetchTopRated();
  }, [API_KEY]);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      setIsLoading(true);

      const res = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await res.json();
      const results = data.results;

      setNowPlaying(results);
      setIsLoading(false);
    };

    fetchNowPlaying();
  }, [API_KEY]);

  return (
    <div className="App">
      <Carousel />
      <Studios />
      <Recommendations title={"Upcoming"} data={upcoming} loading={isLoading} />
      <Recommendations
        title={"Top Rated"}
        data={topRated}
        loading={isLoading}
      />
      <Recommendations
        title={"Now Playing"}
        data={nowPlaying}
        loading={isLoading}
      />
    </div>
  );
}
