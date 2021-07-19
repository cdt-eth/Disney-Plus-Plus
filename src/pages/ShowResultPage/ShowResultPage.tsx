import "./ShowResultPage.css";
import { useState, useEffect, ReactElement } from "react";
import { FaPlay as PlayIcon, FaPlus as PlusIcon } from "react-icons/fa";
import { IoIosPeople as PeopleIcon } from "react-icons/io";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import Extras from "../../components/ResultPage/Extras/Extras";
import ShowDetails from "../../components/ResultPage/ShowDetails/ShowDetails";
import SuggestedShows from "../../components/ResultPage/SuggestedShows/SuggestedShows";
import {
  IResult,
  IResultData,
  ILogo,
  IRating,
  IGenres,
} from "../ResultPage/ResultPage";

const ShowResultPage = (props: IResult): ReactElement => {
  const [data, setData] = useState<any | IResultData[]>([]);
  const [date, setDate] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [alt, setAlt] = useState<string>("");
  const [logo, setLogo] = useState<string>("");
  const [noLogo, setNoLogo] = useState<boolean>(false);
  const [creator, setCreator] = useState<string>("");
  const [castList, setCast] = useState<string[]>([]);
  const [rating, setRating] = useState<string>("");
  const [genreNames, setGenreNames] = useState<string[]>([]);
  const [trailer, setTrailer] = useState([]);
  const [extras, setExtras] = useState([]);
  const [noExtras, setNoExtras] = useState<boolean>(false);
  const [noTrailer, setNoTrailer] = useState<boolean>(false);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [showSuggested, setShowSuggested] = useState<boolean>(true);
  const [showExtras, setShowExtras] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const API_KEY = process.env.REACT_APP_OPEN_MOVIE_DB_API_KEY;

  const id = props.match.params.id;

  useEffect(() => {
    const fetchShowData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&append_to_response=videos,images,credits,content_ratings`
      );
      const data = await res.json();
      setData(data);

      // TITLE
      setName(data.name);

      // ALT
      setAlt(data.name);

      // LOGO
      if (data.images.length === 0 || data.images.logos.length === 0) {
        setNoLogo(true);
      }

      data.images.logos.map((logo: ILogo) => {
        if (logo.iso_639_1 === "en") {
          setNoLogo(false);
          setLogo(logo.file_path);
        }
        return logo;
      });

      // DATE
      setDate(data.first_air_date.substr(0, data.first_air_date.indexOf("-")));

      // GENRES
      data.genres.map((res: IGenres) => {
        setGenreNames((array) => [...array, res.name]);
        return res;
      });

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
      data.content_ratings.results.map((res: IRating) => {
        if (res.iso_3166_1 === "US") {
          setRating(res.rating);
        }
        return res;
      });

      // CREATORS
      const creatorArray: string[] = [];
      let creator = data.created_by;

      for (var i = 0; i < 6; i++) {
        if (creator[i] === undefined) {
          break;
        } else {
          creatorArray.push(creator[i].name);
        }
      }

      if (creatorArray.length > 0) setCreator(creatorArray as any);

      // CAST
      const castArray: string[] = [];
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
  }, [id, API_KEY]);

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
              className="resultLogo"
              src={`https://image.tmdb.org/t/p/w500${logo}`}
              alt={logo}
            />
          ) : (
            <h1> {name} </h1>
          )}

          <div className="generalInfo">
            {rating ? `${rating} • ` : ""} {date}{" "}
            {genreNames.length > 0 ? `• ${genreNames.join(", ")}` : ""}
          </div>

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

          <div className="overview">
            <h5>
              {data.overview
                ? data.overview.split(".")[0] + "."
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
            {showSuggested && <SuggestedShows name={name} id={id} />}
            {showExtras && <Extras extras={extras} noExtras={noExtras} />}
            {showDetails && (
              <ShowDetails
                overview={data.overview}
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
};

export default ShowResultPage;
