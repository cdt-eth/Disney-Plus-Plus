import "./Series.css";
import { useState, useEffect, ReactElement, ChangeEvent } from "react";
import ShowResult from "../../components/ShowResult/ShowResult";

type ISeriesData = {
  poster_path: string;
  backdrop_path: string;
  id: string;
  name: string;
  first_air_date: string;
  overview: string;
  genre_ids: string[];
};

const Series = (): ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [noResults, setNoResults] = useState<boolean>(false);
  const [data, setData] = useState<ISeriesData[]>([]);
  const [value, setValue] = useState<string>("10759");
  const [items] = useState([
    { label: "Action & Adventure", value: 10759 },
    { label: "Animation", value: "16" },
    { label: "Comedy", value: "35" },
    { label: "Crime", value: "80" },
    { label: "Documentary", value: "99" },
    { label: "Drama", value: "18" },
    { label: "Family", value: "10751" },
    { label: "Kids", value: "10762" },
    { label: "News", value: "10763" },
    { label: "Talk", value: "10767" },
  ]);
  const API_KEY = process.env.REACT_APP_OPEN_MOVIE_DB_API_KEY;

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=${value}`,
        { signal: signal }
      );
      const data = await res.json();
      console.log(data);
      const results = data.results;

      if (results.length === 0) setNoResults(true);

      setData(results);
      setIsLoading(false);
    };

    setIsLoading(true);
    fetchData();

    return () => abortController.abort();
  }, [value, API_KEY]);

  return (
    <div className="moviePage">
      <div className="fixedBanner">
        <h1 className="pageTitle">Series</h1>

        <div className="selectWrapper">
          <select
            className="dropdown"
            value={value}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setValue(e.currentTarget.value);
            }}
          >
            {items.map((item) => (
              <option key={item.value} label={item.label} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="movieList">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {!noResults ? (
              <div className="results">
                {data.map((show) => (
                  <ShowResult
                    backdrop_path={show.backdrop_path}
                    poster_path={show.poster_path}
                    alt={show.name}
                    key={show.id}
                    id={show.id}
                    overview={show.overview}
                    first_air_date={show.first_air_date}
                    genre_ids={show.genre_ids}
                    name={show.name}
                  />
                ))}
              </div>
            ) : (
              <div>
                <h2 className="noResults">
                  No results found. Please try again.
                </h2>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Series;
