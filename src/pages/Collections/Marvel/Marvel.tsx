import "./Marvel.css";
import { useState, useEffect, ReactElement } from "react";
import Result from "../../../components/Result/Result";
import { IStudioMovies } from "../Disney/Disney";

const Marvel = (): ReactElement => {
  const [data, setData] = useState<IStudioMovies[]>([]);
  const API_KEY = process.env.REACT_APP_OPEN_MOVIE_DB_API_KEY;

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/list/9387?api_key=${API_KEY}&language=en-US`,
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
          src="https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/09/06/1567786546-marvel.mp4"
          type="video/mp4"
        />
      </video>
      <img
        src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BC26D77B10047FCE6F1CC1AB419F700447E5C37D352BAD6433B2EF7C068187D0/scale?width=1200"
        alt="marvel"
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
};

export default Marvel;
