import "./ResultPage.css";
import { useState, useEffect, ReactElement } from "react";
import {
  FaPlay as PlayIcon,
  FaPlus as PlusIcon,
  FaCheck as CheckIcon,
} from "react-icons/fa";
import { IoIosPeople as PeopleIcon } from "react-icons/io";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import Suggested from "../../components/ResultPage/Suggested/Suggested";
import Extras from "../../components/ResultPage/Extras/Extras";
import Details from "../../components/ResultPage/Details/Details";
import { supabase } from "../../supabaseClient";
import { Session } from "@supabase/supabase-js";

export interface IResult {
  id: string;
  location?: any;
  props?: any;
  logo?: string;
  match?: any;
  params?: any;
}

export interface IResultData {
  backdrop_path: string;
  homepage: string;
}

export interface ILogo {
  iso_639_1: string;
  file_path: string;
}

export interface IGenres {
  id: string;
  name: string;
}

export interface IRating {
  iso_3166_1: string;
  release_dates: string[] | any;
  rating?: string | any;
}

interface ICrew {
  name: string;
  job: string;
}

const ResultPage = (props: IResult): ReactElement => {
  const [data, setData] = useState<any | IResultData[]>([]);
  // const [loading, setIsLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [releaseDate, setReleaseDate] = useState<string>("");
  const [alt, setAlt] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [director, setDirector] = useState<string>("");
  const [castList, setCast] = useState<string[]>([]);
  const [rating, setRating] = useState<string>("");
  const [logo, setLogo] = useState<string>("");
  const [noLogo, setNoLogo] = useState<boolean>(false);
  const [genreNames, setGenreNames] = useState<string[]>([]);
  const [trailer, setTrailer] = useState([]);
  const [extras, setExtras] = useState([]);
  const [noExtras, setNoExtras] = useState<boolean>(false);
  const [noTrailer, setNoTrailer] = useState<boolean>(false);
  const [added, setIsAdded] = useState<boolean>(false);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [showSuggested, setShowSuggested] = useState<boolean>(true);
  const [showExtras, setShowExtras] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const API_KEY = process.env.REACT_APP_OPEN_MOVIE_DB_API_KEY;

  const [session, setSession] = useState<Session | null>(null);
  const id = props.match.params.id;

  useEffect(() => {
    const isMovieAdded = async () => {
      // setIsLoading(true);
      let { data } = await supabase.from("watchlist").select("id");
      data?.map((movieId) => {
        if (movieId.id === id) {
          setIsAdded(true);
          // setIsLoading(false);
        }

        return id;
      });
    };

    isMovieAdded();
  }, [id, added]);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    const fetchMovieData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          props?.match?.params!.id
        }?api_key=${API_KEY}&append_to_response=videos,images,release_dates,credits`
      );
      const data = await res.json();
      setData(data);

      // TITLE
      setTitle(data.title);

      // ALT
      setAlt(data.title);

      // RELEASE DATE
      setReleaseDate(
        data.release_date.substr(0, data.release_date.indexOf("-"))
      );

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
      data.release_dates.results.map((rating: IRating) => {
        if (rating.iso_3166_1 === "US") {
          setRating(rating.release_dates[0].certification);
        }
        return rating;
      });

      // DIRECTOR
      data.credits.crew.map((crew: ICrew) => {
        if (crew.job === "Director") {
          setDirector(crew.name);
        }
        return crew;
      });

      // CAST
      const castArray: string[] = [];
      let castMember = data.credits.cast;

      for (var i = 0; i < 6; i++) {
        if (castMember[i] === undefined) {
          break;
        } else {
          castArray.push(castMember[i].name);
        }
      }

      if (castArray.length > 0) setCast(castArray as []);
    };

    fetchMovieData();
  }, [id, props.match.params, API_KEY]);

  const addMovie = async () => {
    let { error } = await supabase.from("watchlist").insert({ id: id });

    setIsAdded(true);

    if (error) {
      console.log("error:", error);
      throw error;
    }
  };

  const deleteMovie = async () => {
    let { error } = await supabase.from("watchlist").delete().match({ id: id });

    setIsAdded(false);

    if (error) {
      console.log("error:", error);
      throw error;
    }
  };

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
            <h1> {title} </h1>
          )}

          <div className="generalInfo">
            {rating ? `${rating} • ` : ""} {releaseDate}{" "}
            {genreNames.length > 0 ? `• ${genreNames.join(", ")}` : ""}
          </div>

          <div className="actions">
            {noTrailer ? (
              <button className="play playError trailerError">
                <p>No Videos</p>
              </button>
            ) : (
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
            )}

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

            {!session ? (
              <Link to="/login" className="circleButton">
                <PlusIcon />
              </Link>
            ) : // : loading ? (
            // <div className="circleButton"> </div>
            // )
            !added ? (
              <div className="circleButton" onClick={addMovie}>
                <PlusIcon />
              </div>
            ) : (
              <div className="circleButton" onClick={deleteMovie}>
                <CheckIcon />
              </div>
            )}

            <Link to="/login" className="circleButton">
              <PeopleIcon />
            </Link>
          </div>

          <div className="overview">
            <h5>
              {data.overview && data.overview.length > 0
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
            {showSuggested && <Suggested id={id} />}
            {showExtras && <Extras extras={extras} noExtras={noExtras} />}
            {showDetails && (
              <Details
                overview={data.overview}
                title={title}
                date={releaseDate}
                genres={genreNames}
                runtime={duration}
                rating={rating}
                director={director}
                cast={castList}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
