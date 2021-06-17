import "./Search.css";
import { useState, useEffect } from "react";
import Result from "../../components/Result/Result";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [noResults, setNoResults] = useState(false);
  const [data, setData] = useState([]);
  const API_KEY = process.env.REACT_APP_OPEN_MOVIE_DB_API_KEY;

  useEffect(() => {
    setNoResults(false);

    if (searchValue.length === 0) {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          const results = data.results;
          setData(results);
          setIsLoading(false);
        });
    } else {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchValue}`
      )
        .then((response) => response.json())
        .then((data) => {
          // if (data === undefined) setNoResults(true);
          if (data.results === undefined) {
            setNoResults(true);
          } else {
            const results = data.results;

            if (results.length === 0) setNoResults(true);

            setData(results);
            setIsLoading(false);
          }
        });
    }
  }, [searchValue, API_KEY]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleKeydown(e) {
    if (e.key === " " && searchValue.length === 0) {
      e.preventDefault();
    }
    // if (e.match(/[^0-9a-z]/i)) {
    //   e.preventDefault();
    // }
  }

  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="Search by title, character, or genre"
          className="input"
          value={searchValue}
          onKeyDown={handleKeydown}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </form>

      <div className="page">
        <h1 className="pageTitle">Explore</h1>

        {isLoading ? (
          <h1>Loading...</h1>
        ) : !noResults ? (
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
            <h1 className="noResults">
              No results found for <em>"{searchValue}"</em>
            </h1>
            <h1>Please try again.</h1>
          </div>
        )}
      </div>
    </div>
  );
}
