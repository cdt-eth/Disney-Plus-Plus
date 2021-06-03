import "./Search.css";
import { useState } from "react";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=1dbf27409e387afe9abadb77b2745ddd&query=${searchValue}`
    );

    const data = await res.json();
    const results = data.results;

    console.log(results);
    setData(results);
  };

  function handleSubmit(e) {
    e.preventDefault();

    console.log(searchValue);
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

      {data.map((movie) => {
        console.log(movie.title);
        return (
          <div>
            <p key={movie.id}>{movie.title}</p>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                  : "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg"
              }
              alt={movie.title}
              width={100}
            />
          </div>
        );
      })}

      <div className="page">
        <h1 className="pageTitle">Explore</h1>

        <div className="results">
          <div className="result">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
              alt="Mandalorian"
            />
          </div>
          <div className="result">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
              alt="Mandalorian"
            />
          </div>
          <div className="result">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
              alt="Mandalorian"
            />
          </div>
          <div className="result">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
              alt="Mandalorian "
            />
          </div>
          <div className="result">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
              alt="Mandalorian"
            />
          </div>
          <div className="result">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
              alt="Mandalorian "
            />
          </div>
          <div className="result">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
              alt="Mandalorian"
            />
          </div>
          <div className="result">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
              alt="Mandalorian "
            />
          </div>
          <div className="result">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
              alt="Mandalorian"
            />
          </div>
          <div className="result">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
              alt="Mandalorian "
            />
          </div>
          <div className="result">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
              alt="Mandalorian"
            />
          </div>
          <div className="result">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
              alt="Mandalorian "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
