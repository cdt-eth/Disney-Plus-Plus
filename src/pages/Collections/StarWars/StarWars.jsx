import "./StarWars.css";
import { useState, useEffect } from "react";
import Result from "../../../components/Result/Result";

export default function StarWars() {
  const [data, setData] = useState([]);
  const API_KEY = process.env.REACT_APP_OPEN_MOVIE_DB_API_KEY;

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/list/8136?api_key=${API_KEY}&language=en-US`,
        { signal: signal }
      );
      const data = await res.json();
      const results = data.items;

      setData(results);
    };

    fetchData();

    return () => abortController.abort();
  }, [API_KEY]);

  return (
    <div className="wrapper collection">
      <video
        loop={true}
        autoPlay={true}
        playsInline={true}
        className="collectionsVideo"
      >
        <source
          src="https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564677991-star-wars.mp4"
          type="video/mp4"
        />
      </video>
      {/* <div className="spacer"></div> */}
      <img
        src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/04BB6D7A8E43E18DB3C30E6D9916DE7F44F38C12A7B3ED6B99EDD96DF8FF7D68/scale?width=1200"
        alt="star-wars"
        className="collectionsImg"
      />
      <div className="page collectionsStarWars collectionsPage">
        <div className="results collections">
          {data.map((movie) => {
            return (
              <Result
                poster_path={movie.poster_path}
                alt={movie.title}
                key={movie.id}
                id={movie.id}
                title={movie.title}
                overview={movie.overview}
                release_date={movie.release_date}
                genre_ids={movie.genre_ids}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
