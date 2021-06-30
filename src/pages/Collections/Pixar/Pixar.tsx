import "./Pixar.css";
import { useState, useEffect, ReactElement } from "react";
import Result from "../../../components/Result/Result";
import { IStudioMovies } from "../Disney/Disney";

const Pixar = (): ReactElement => {
  const [data, setData] = useState<IStudioMovies[]>([]);
  const API_KEY = process.env.REACT_APP_OPEN_MOVIE_DB_API_KEY;

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/list/9095?api_key=${API_KEY}&language=en-US`,
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
          src="https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564677724-pixar.mp4"
          type="video/mp4"
        />
      </video>
      <div className="spacer"></div>
      {/* <img src="" alt="nat-geo" className="collectionsImg" /> */}
      <div className="page collectionsPixar collectionsPage ">
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

export default Pixar;
