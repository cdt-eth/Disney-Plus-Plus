import "./ResultPage.css";
// import { useParams } from "react-router-dom";

import { FaPlay as PlayIcon } from "react-icons/fa";

export default function ResultPage(props) {
  //   const { id } = useParams();
  const { poster, overview, title, alt, release_date, genre_ids } =
    props.location.state;
  const date = release_date.substr(0, release_date.indexOf("-"));

  console.log(genre_ids);

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
          {/* <h4>
            Genres:{" "}
            {genre_ids.map((genre) => {
              return <li>{genre}</li>;
            })}
          </h4> */}
          <h5>{overview}</h5>
        </div>
      </div>
    </div>
  );
}
