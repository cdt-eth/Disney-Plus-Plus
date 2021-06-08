import "./ResultPage.css";
import { useState, useEffect } from "react";
import { FaPlay as PlayIcon, FaPlus as PlusIcon } from "react-icons/fa";
import { IoIosPeople as PeopleIcon } from "react-icons/io";

export default function ResultPage(props) {
  const [genreNames, setGenreNames] = useState([]);

  const {
    poster_path: poster,
    overview,
    title,
    alt,
    release_date,
    genre_ids: genres,
  } = props.location.state;

  const date = release_date.substr(0, release_date.indexOf("-"));

  useEffect(() => {
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

            <a href="www.com" className="circleButton">
              <PlusIcon />
            </a>

            <a href="www.com" className="circleButton">
              <PeopleIcon />
            </a>
          </div>

          <div>
            {date} • {genreNames.join(", ")}
          </div>

          <h5>{overview}</h5>
        </div>
      </div>
    </div>
  );
}
