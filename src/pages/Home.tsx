import Carousel from "../components/Carousel/Carousel";
import Studios from "../components/Studios/Studios";
import Recommendations from "../components/Recommendations/Recommendations";
import { useState, useEffect, ReactElement } from "react";

interface IRecommendations {
  title: string;
  id: string;
  poster_path: string;
}

export type RecommendationData = IRecommendations[];

const App = (): ReactElement => {
  const [cannes, setCannes] = useState<IRecommendations[]>([]);
  const [trending, setTrending] = useState<IRecommendations[]>([]);
  const [marvelUniverse, setMarvelUniverse] = useState<IRecommendations[]>([]);
  const [anime, setAnime] = useState<IRecommendations[]>([]);
  const [bestPictures, setBestPictures] = useState<IRecommendations[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
};

export default App;
