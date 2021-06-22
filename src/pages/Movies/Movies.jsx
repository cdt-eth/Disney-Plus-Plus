import "./Movies.css";
import { useState, useEffect } from "react";
import Result from "../../components/Result/Result";

export default function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(27);
  const [items] = useState([
    { label: "Action", value: 28 },
    { label: "Adventure", value: 12 },
    { label: "Animation", value: 16 },
    { label: "Comedy", value: 35 },
    { label: "Documentary", value: 99 },
    { label: "Drama", value: 18 },
    { label: "Family", value: 10751 },
    { label: "Romance", value: 10749 },
    { label: "Science Fiction", value: 878 },
    { label: "Western", value: 37 },
  ]);
  const API_KEY = process.env.REACT_APP_OPEN_MOVIE_DB_API_KEY;

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${value}`,
        { signal: signal }
      );
      const data = await res.json();
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
        <h1 className="pageTitle">Movies</h1>

        <div className="selectWrapper">
          <select
            className="dropdown"
            value={value}
            onChange={(e) => {
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
                {data.map((movie) => (
                  <Result
                    poster_path={movie.poster_path}
                    alt={movie.title}
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    overview={movie.overview}
                    release_date={movie.release_date}
                    genre_ids={movie.genre_ids}
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
}
