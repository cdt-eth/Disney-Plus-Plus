import "./Disney.css";
import { useState, useEffect } from "react";
import Result from "../../../components/Result/Result";

export default function Disney() {
  const [data, setData] = useState([]);
  const API_KEY = process.env.REACT_APP_OPEN_MOVIE_DB_API_KEY;

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/list/338?api_key=${API_KEY}&language=en-US`,
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
    <div className="wrapper collectionDisney collection">
      <video
        loop={true}
        autoPlay={true}
        playsInline={true}
        className="collectionsVideo"
      >
        <source
          src="https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564677287-disney.mp4"
          type="video/mp4"
        />
      </video>
      {/* <div className="spacer"></div> */}
      <img
        src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A596DE839393E0F3DB258AC5B4F45CDB4C03257DAA4FF87F9952ADBCB28E2905/scale?width=1200"
        alt="disney"
        className="collectionsImg"
      />
      <div className="page collectionsPage">
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
