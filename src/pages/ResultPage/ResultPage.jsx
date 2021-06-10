import "./ResultPage.css";
import { useState, useEffect } from "react";
import { FaPlay as PlayIcon, FaPlus as PlusIcon } from "react-icons/fa";
import { IoIosPeople as PeopleIcon } from "react-icons/io";
import ModalVideo from "react-modal-video";

export default function ResultPage(props) {
  const [genreNames, setGenreNames] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [noTrailer, setNoTrailer] = useState(null);
  const [isOpen, setOpen] = useState(false);

  const {
    poster_path: poster,
    overview,
    title,
    alt,
    release_date,
    genre_ids: genres,
    id,
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

  const fetchRequest = () => {
    const fetchTrailer = async () => {
      const res = await fetch(
        `http://api.themoviedb.org/3/movie/${id}?api_key=1dbf27409e387afe9abadb77b2745ddd&append_to_response=videos`
      );

      const data = await res.json();

      if (data.videos.results.length === 0) {
        setNoTrailer(true);
      } else {
        const key = data.videos.results[0].key;

        setNoTrailer(false);
        setTrailer(key);
      }
    };

    fetchTrailer();

    setOpen(true);
  };

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

            <button className="play trailer" onClick={fetchRequest}>
              <PlayIcon />
              <p>Trailer</p>
            </button>

            <a href="www.com" className="circleButton">
              <PlusIcon />
            </a>

            <a href="www.com" className="circleButton">
              <PeopleIcon />
            </a>
          </div>

          <div>
            {date} {genreNames.length > 0 ? `• ${genreNames.join(", ")}` : ""}
          </div>
          <div>
            <h5>{overview}</h5>

            {noTrailer ? (
              <h2 className="trailerError">No trailer available</h2>
            ) : (
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId={trailer}
                onClose={() => setOpen(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
