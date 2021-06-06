import "./Search.css";
import { useState } from "react";
import Result from "../../components/Result/Result";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=1dbf27409e387afe9abadb77b2745ddd&query=${searchValue}`
    );
    const data = await res.json();
    const results = data.results;

    setData(results);
    setIsLoading(false);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetchData();
    setSearchValue("");
  }

  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleSubmit}>
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
            {data.map((movie) => (
              <Result
                poster={movie.poster_path}
                alt={movie.title}
                key={movie.id}
                id={movie.id}
                title={movie.title}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
