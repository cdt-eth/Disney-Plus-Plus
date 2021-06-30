import Carousel from "../components/Carousel/Carousel";
import Studios from "../components/Studios/Studios.tsx";
import Recommendations from "../components/Recommendations/Recommendations.tsx";
import { useState, useEffect } from "react";

export default function App() {
  const [cannes, setCannes] = useState([]);
  const [trending, setTrending] = useState([]);
  const [marvelUniverse, setMarvelUniverse] = useState([]);
  const [anime, setAnime] = useState([]);
  const [bestPictures, setBestPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const API_KEY = process.env.REACT_APP_OPEN_MOVIE_DB_API_KEY;

  useEffect(() => {
    const fetchCannes = async () => {
      setIsLoading(true);

      const res = await fetch(
        `https://api.themoviedb.org/3/list/112870?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      const results = data.items;

      setCannes(results);
      setIsLoading(false);
    };

    fetchCannes();
  }, [API_KEY]);

  useEffect(() => {
    const fetchMarvelUniverse = async () => {
      setIsLoading(true);

      const res = await fetch(
        `https://api.themoviedb.org/3/list/1?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      const results = data.items;

      setMarvelUniverse(results);
      setIsLoading(false);
    };

    fetchMarvelUniverse();
  }, [API_KEY]);

  useEffect(() => {
    const fetchTrending = async () => {
      setIsLoading(true);

      const res = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&original_language=en`
      );
      const data = await res.json();
      const results = data.results;

      setTrending(results);
      setIsLoading(false);
    };

    fetchTrending();
  }, [API_KEY]);

  useEffect(() => {
    const fetchAnime = async () => {
      setIsLoading(true);

      const res = await fetch(
        `https://api.themoviedb.org/3/list/3321?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      const results = data.items;

      setAnime(results);
      setIsLoading(false);
    };

    fetchAnime();
  }, [API_KEY]);

  useEffect(() => {
    const fetchBestPictures = async () => {
      setIsLoading(true);

      const res = await fetch(
        `https://api.themoviedb.org/3/list/28?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      const results = data.items;

      setBestPictures(results);
      setIsLoading(false);
    };

    fetchBestPictures();
  }, [API_KEY]);

  return (
    <div className="App">
      <Carousel />
      <Studios />
      <Recommendations
        title={"Best Picture Winners"}
        data={bestPictures}
        loading={isLoading}
      />
      <Recommendations
        title={"Cannes 2019"}
        data={cannes}
        loading={isLoading}
      />
      <Recommendations title={"Anime"} data={anime} loading={isLoading} />
      <Recommendations title={"Trending"} data={trending} loading={isLoading} />
      <Recommendations
        title={"The Marvel Universe"}
        data={marvelUniverse}
        loading={isLoading}
      />
    </div>
  );
}
