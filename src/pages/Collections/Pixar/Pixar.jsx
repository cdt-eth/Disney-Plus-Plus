import "./Pixar.css";
import { useState, useEffect } from "react";
import Result from "../../../components/Result/Result";

export default function Pixar() {
  const [data, setData] = useState([]);
  const API_KEY = process.env.REACT_APP_OPEN_MOVIE_DB_API_KEY;

  useEffect(() => {
    let unmounted = false;

    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/list/9095?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      const results = data.items;

      setData(results);
    };

    if (!unmounted) {
      fetchData();
    }
    return () => {
      unmounted = true;
    };
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
