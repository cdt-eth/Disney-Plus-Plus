import "./ResultPage.css";
import { useState, useEffect } from "react";
import { FaPlay as PlayIcon, FaPlus as PlusIcon } from "react-icons/fa";
import { IoIosPeople as PeopleIcon } from "react-icons/io";
import ModalVideo from "react-modal-video";
import Suggested from "../../components/ResultPage/Suggested/Suggested";
import Extras from "../../components/ResultPage/Extras/Extras";
import Details from "../../components/ResultPage/Details/Details";

export default function ResultPage(props) {
  const [data, setData] = useState([]);
  const [duration, setDuration] = useState("");
  const [director, setDirector] = useState("");
  const [castList, setCast] = useState([]);
  const [rating, setRating] = useState("");
  const [genreNames, setGenreNames] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [noTrailer, setNoTrailer] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [showSuggested, setShowSuggested] = useState(true);
  const [showExtras, setShowExtras] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // window.addEventListener("scroll", function () {
  //   var currScrollPos2 =
  //     window.pageYOffset ||
  //     document.documentElement.scrollTop ||
  //     document.body.scrollTop ||
  //     0;
  //   if (currScrollPos2 > 40) {
  //     document.getElementsByClassName("opacity").style.opacity = 0.8;
  //   }
  // });

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
    const fetchMovieData = async () => {
      const res = await fetch(
        `http://api.themoviedb.org/3/movie/${id}?api_key=1dbf27409e387afe9abadb77b2745ddd&append_to_response=videos,release_dates,credits`
      );
      const data = await res.json();
      setData(data);

      // GENRES
      const apiGenres = data.genres;
      const filtered = [];
      apiGenres.map((res) => {
        if (genres.includes(res.id)) {
          filtered.push(res.name);
        }
        return filtered;
      });
      setGenreNames(filtered);

      // TRAILER
      if (data.videos.results.length === 0) {
        setNoTrailer(true);
      } else {
        const key = data.videos.results[0].key;

        setNoTrailer(false);
        setTrailer(key);
      }

      // RUNTIME
      const hours = data.runtime / 60;
      const rhours = Math.floor(hours);
      const minutes = (hours - rhours) * 60;
      const rminutes = Math.round(minutes);
      let d = "";

      if (rhours < 1) {
        d = rminutes + "m";
      } else {
        d = rhours + "h " + rminutes + "m";
      }
      setDuration(d);

      // RATING
      data.release_dates.results.map((rating) => {
        if (rating.iso_3166_1 === "US") {
          console.log("found:", rating.iso_3166_1);
          setRating(rating.release_dates[0].certification);
        }
        return rating;
      });

      // DIRECTOR
      data.credits.crew.map((crew) => {
        if (crew.job === "Director") {
          setDirector(crew.name);
        }
        return crew;
      });

      // CAST
      const castArray = [];
      let castMember = data.credits.cast;

      for (var i = 0; i < 6; i++) {
        if (castMember[i] === undefined) {
          break;
        } else {
          castArray.push(castMember[i].name);
        }
      }
      if (castArray.length > 0) setCast(castArray);
    };

    fetchMovieData();
  }, [id, genres]);

  const fetchRequest = () => {
    setOpen(true);
  };

  return (
    <div className="resultPage">
      {/* <img
        className="posterBackground"
        src={
          poster
            ? `https://image.tmdb.org/t/p/original/${poster}`
            : "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg"
        }
        alt={alt}
      /> */}
      <div className="resultBackground">
        <img
          className="posterBackground"
          src={
            data.backdrop_path
              ? `https://image.tmdb.org/t/p/original${data.backdrop_path}`
              : `https://image.tmdb.org/t/p/original${poster}`
            // "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg"
          }
          alt={alt}
        />
        <div className="resultInfo">
          <h1> {title} </h1>

          <div className="actions">
            <button
              className="play"
              onClick={
                data.homepage
                  ? () => window.open(data.homepage, "_blank")
                  : fetchRequest
              }
            >
              <PlayIcon />
              <p>Play</p>
            </button>

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
            {rating ? `${rating} • ` : ""} {date}{" "}
            {genreNames.length > 0 ? `• ${genreNames.join(", ")}` : ""}
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

          <nav className="subNav">
            <div className="subNavSection">
              <button
                onClick={() => {
                  setShowSuggested(true);
                  setShowExtras(false);
                  setShowDetails(false);
                }}
              >
                Suggested
              </button>
            </div>

            <div className="subNavSection">
              <button
                onClick={() => {
                  setShowSuggested(false);
                  setShowExtras(true);
                  setShowDetails(false);
                }}
              >
                Extras
              </button>
            </div>

            <div className="subNavSection">
              <button
                onClick={() => {
                  setShowSuggested(false);
                  setShowExtras(false);
                  setShowDetails(true);
                }}
              >
                Details
              </button>
            </div>
          </nav>
          <div className="detailsWrapper">
            {showSuggested && <Suggested />}
            {showExtras && <Extras />}
            {showDetails && (
              <Details
                overview={overview}
                title={title}
                date={date}
                genres={genreNames}
                runtime={duration}
                rating={rating}
                director={director}
                cast={castList}
              />
            )}
          </div>
        </div>

        {/* <div className="opacity"></div> */}
      </div>
    </div>
  );
}
