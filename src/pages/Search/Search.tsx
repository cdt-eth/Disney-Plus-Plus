import "./Search.css";
import {
  useState,
  useEffect,
  ReactElement,
  FormEvent,
  KeyboardEvent,
} from "react";
import Result from "../../components/Result/Result";

export type ISearchData = {
  poster_path: string;
  id: string;
  title: string;
  overview: string;
  release_date: string;
  genre_ids: string;
};

const Search = (): ReactElement => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [noResults, setNoResults] = useState<boolean>(false);
  const [data, setData] = useState<ISearchData[]>([]);
  const [explore, setExplore] = useState<boolean>(false);
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
          setExplore(true);
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
            setExplore(false);
            setIsLoading(false);
          }
        });
    }
  }, [searchValue, API_KEY]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function handleKeydown(e: KeyboardEvent) {
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
          autoFocus
          onKeyDown={handleKeydown}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </form>

      <div className="page">
        {explore && <h1 className="pageTitle">Explore</h1>}

        {isLoading ? (
          <h1>Loading...</h1>
        ) : !noResults ? (
          <>
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
          </>
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
};

export default Search;
