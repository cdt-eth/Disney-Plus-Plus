import "./NatGeo.css";
import { useState, useEffect } from "react";
import Result from "../../../components/Result/Result";

export default function Marvel() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=1dbf27409e387afe9abadb77b2745ddd&query=national+geographic"
    );
    const data = await res.json();
    const results = data.results;

    setData(results);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
