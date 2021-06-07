import "./ResultPage.css";
// import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import { useState } from "react";
import { FaPlay as PlayIcon } from "react-icons/fa";

export default function ResultPage(props) {
  const [genreNames, setGenreNames] = useState([]);
  //   const { id } = useParams();
  const { poster, overview, title, alt, release_date, genres } =
    props.location.state;
  const date = release_date.substr(0, release_date.indexOf("-"));

  //   console.log("props genres:", genres);

  useEffect(() => {
    // console.log("useEffect Ran!");

    const fetchGenres = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=1dbf27409e387afe9abadb77b2745ddd"
      );
      const data = await res.json();
      const apiGenres = data.genres;

      const filtered = [];
      apiGenres.map((res) => {
        if (genres.includes(res.id)) {
          filtered.push(res.name);
        }
        return filtered;
      });

      setGenreNames(filtered);
    };

    fetchGenres();
  }, [genres]);

  return (
    <div className="resultPage">
      <img
        className="posterBackground"
        src={
          poster
            ? `https://image.tmdb.org/t/p/original/${poster}`
            : "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg"
        }
        alt={alt}
      />
      <div className="resultBackground">
        <div className="resultInfo">
          <h1> {title} </h1>

          <div className="actions">
            <a href="www.com" className="play">
              <PlayIcon />
              <p>Play</p>
            </a>

            <a href="www.com" className="play trailer">
              <PlayIcon />
              <p>Trailer</p>
            </a>
          </div>

          <h3>{date} </h3>
          <div>Genres: {genreNames.join(", ")}</div>
          <h5>{overview}</h5>
        </div>
      </div>
    </div>
  );
}
