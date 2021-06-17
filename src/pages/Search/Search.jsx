import "./Search.css";
import { useState, useEffect } from "react";
import Result from "../../components/Result/Result";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [noResults, setNoResults] = useState(false);
  const [data, setData] = useState([]);
  const API_KEY = process.env.REACT_APP_OPEN_MOVIE_DB_API_KEY;

  useEffect(() => {
    let unmounted = false;
    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchValue}`
      );
      const data = await res.json();
      const results = data.results;

      // if (results.length === 0) setNoResults(true);

      setData(results);
      setIsLoading(false);
    };

    if (!unmounted) {
      fetchData();
    }
    return () => {
      unmounted = true;
    };
  }, [searchValue, API_KEY]);

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   fetchData();
  // }

  return (
    <div className="wrapper">
      {/* <form className="form" onSubmit={handleSubmit}> */}
      <form className="form">
        <input
          placeholder="Search by title, character, or genre"
          className="input"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </form>

      <div className="page">
        <h1 className="pageTitle">Explore</h1>

        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="results">
            {data &&
              data.map((movie) => (
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

            {/* {!noResults ? (
              data.map((movie) => (
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
              ))
            ) : (
              <div>
                <h1 className="noResults">
                  No results found for <em>"{searchValue}"</em>
                </h1>
                <h1>Please try again.</h1>
              </div>
            )} */}
          </div>
        )}
      </div>
    </div>
  );
}
