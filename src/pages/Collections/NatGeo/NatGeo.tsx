import "./NatGeo.css";
import { useState, useEffect, ReactElement } from "react";
import Result from "../../../components/Result/Result";
import { IStudioMovies } from "../Disney/Disney";

const NatGeo = (): ReactElement => {
  const [data, setData] = useState<IStudioMovies[]>([]);
  const API_KEY = process.env.REACT_APP_OPEN_MOVIE_DB_API_KEY;

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=national+geographic`,
        { signal: signal }
      );
      const data = await res.json();
      const results = data.results;

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
          src="https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/02/1564784586-national-geographic.mp4"
          type="video/mp4"
        />
      </video>
      <img
        src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B794A4647CDE36B4D8742BB6B3FDAEC940351C90F2D7D15E803B2376021C3826/scale?width=1200"
        alt="nat-geo"
        className="collectionsImg"
      />
      <div className="page  collectionsNatGeo collectionsPage">
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

export default NatGeo;
