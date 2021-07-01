import "./ShowResultPage.css";
import { useState, useEffect } from "react";
import { FaPlay as PlayIcon, FaPlus as PlusIcon } from "react-icons/fa";
import { IoIosPeople as PeopleIcon } from "react-icons/io";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import Extras from "../../components/ResultPage/Extras/Extras.tsx";
import ShowDetails from "../../components/ResultPage/ShowDetails/ShowDetails.tsx";
import SuggestedShows from "../../components/ResultPage/SuggestedShows/SuggestedShows.tsx";

export default function ShowResultPage(props) {
  const [data, setData] = useState([]);
  const [date, setDate] = useState("");
  const [logo, setLogo] = useState("");
  const [noLogo, setNoLogo] = useState(null);
  const [creator, setCreator] = useState("");
  const [castList, setCast] = useState([]);
  const [rating, setRating] = useState("");
  const [genreNames, setGenreNames] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [extras, setExtras] = useState([]);
  const [noExtras, setNoExtras] = useState(null);
  const [noTrailer, setNoTrailer] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [showSuggested, setShowSuggested] = useState(true);
  const [showExtras, setShowExtras] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const API_KEY = process.env.REACT_APP_OPEN_MOVIE_DB_API_KEY;
  const {
    // poster_path: poster,
    overview,
    alt,
    genre_ids: genres,
    id,
    name,
    first_air_date,
  } = props.location.state;

  useEffect(() => {
    const fetchShowData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&append_to_response=videos,images,credits,content_ratings`
      );
      const data = await res.json();
      setData(data);

      // LOGO
      if (data.images.length === 0 || data.images.logos.length === 0) {
        setNoLogo(true);
      } else {
        setNoLogo(false);
        setLogo(data.images.logos[0].file_path);
      }

      // DATE
      const date = first_air_date.substr(0, first_air_date.indexOf("-"));
      setDate(date);

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

      // EXTRAS
      if (data.videos.results.length === 0) {
        setNoExtras(true);
      } else {
        setNoExtras(false);
        setExtras(data.videos.results);
      }

      // RATING
      data.content_ratings.results.map((res) => {
        if (res.iso_3166_1 === "US") {
          setRating(res.rating);
        }
        return rating;
      });

      // CREATORS
      const creatorArray = [];
      let creator = data.created_by;

      for (var i = 0; i < 6; i++) {
        if (creator[i] === undefined) {
          break;
        } else {
          creatorArray.push(creator[i].name);
        }
      }
      if (creatorArray.length > 0) setCreator(creatorArray);

      // CAST
      const castArray = [];
      let castMember = data.credits.cast;

      for (var j = 0; j < 6; j++) {
        if (castMember[j] === undefined) {
          break;
        } else {
          castArray.push(castMember[j].name);
        }
      }
      if (castArray.length > 0) setCast(castArray);
    };

    fetchShowData();
  }, [id, genres, first_air_date, rating, API_KEY]);

  const fetchRequest = () => {
    setOpen(true);
  };

  return (
    <div className="resultPage">
      <div className="resultBackground">
        {data.backdrop_path && (
          <img
            className="posterBackground"
            src={
              data.backdrop_path
                ? `https://image.tmdb.org/t/p/original${data.backdrop_path}`
                : "https://i1.wp.com/www.africanflair.com/wp-content/uploads/2015/10/pix-horizontal-placeholder.jpg?w=1920&ssl=1"
            }
            alt={alt}
          />
        )}
        <div className="resultInfo">
          {!noLogo ? (
            <img
              className="logoImg"
              src={`https://image.tmdb.org/t/p/w500${logo}`}
              alt={logo}
            />
          ) : (
            <h1> {name} </h1>
          )}

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

            {noTrailer ? (
              <button className="play trailer trailerError">
                <p>No Trailer</p>
              </button>
            ) : (
              <button className="play trailer" onClick={fetchRequest}>
                <PlayIcon />
                <p>Trailer</p>
              </button>
            )}

            <Link to="/watchlist" className="circleButton">
              <PlusIcon />
            </Link>

            <Link to="/login" className="circleButton">
              <PeopleIcon />
            </Link>
          </div>

          <div>
            {rating ? `${rating} • ` : ""} {date}{" "}
            {genreNames.length > 0 ? `• ${genreNames.join(", ")}` : ""}
          </div>

          <div className="overview">
            <h5>
              {overview
                ? overview.split(".")[0] + "."
                : "No summary available."}
            </h5>

            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId={trailer}
              onClose={() => setOpen(false)}
            />
          </div>

          <nav className="subNav">
            <div className={`subNavSection ${showSuggested ? "active" : ""} `}>
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

            <div className={`subNavSection ${showExtras ? "active" : ""} `}>
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

            <div className={`subNavSection ${showDetails ? "active" : ""} `}>
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
            {showSuggested && <SuggestedShows id={id} />}
            {showExtras && <Extras extras={extras} noExtras={noExtras} />}
            {showDetails && (
              <ShowDetails
                overview={overview}
                name={name}
                date={date}
                genres={genreNames}
                rating={rating}
                creator={creator}
                cast={castList}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
