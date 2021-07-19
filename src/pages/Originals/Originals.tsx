import "./Originals.css";
import { useState, useEffect, ReactElement } from "react";
import ShowResult from "../../components/ShowResult/ShowResult";

interface IOriginalsData {
  backdrop_path: string;
  poster_path: string;
  name: string;
  id: string;
  overview: string;
  first_air_date: string;
  genre_ids: string[];
}

const Originals = (): ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [noResults, setNoResults] = useState<boolean>(false);
  const [data, setData] = useState<IOriginalsData[]>([]);
  const API_KEY = process.env.REACT_APP_OPEN_MOVIE_DB_API_KEY;

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
        { signal: signal }
      );
      const data = await res.json();
      const results = data.results;

      if (results.length === 0) setNoResults(true);

      setData(results);
      setIsLoading(false);
    };

    setIsLoading(true);
    fetchData();
    return () => abortController.abort();
  }, [API_KEY]);

  // window.onscroll = () => {
  //   scrollFunction();
  // };

  // const element = document.getElementById("originals");

  // const scrollFunction = () => {
  //   console.log("element", element);

  // if (element !== null) {
  // return document.body.scrollTop > 50 ||
  //   document.documentElement.scrollTop > 50
  // return window.pageYOffset > 50
  // ? (document.getElementById("originals")!.style.fontSize = "1.7rem")
  // : (document.getElementById("originals")!.style.fontSize = "2.7rem");
  // }
  // };

  return (
    <div className="page2">
      <div className="fixedBannerOriginals">
        <h1 className="originalsTitle" id="originals">
          Originals
        </h1>
      </div>

      <div className="originalsList">
        <h4>Featured</h4>

        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {!noResults ? (
              <div className="results">
                {data.map((show) => (
                  <ShowResult
                    backdrop_path={show.backdrop_path}
                    poster_path={show.poster_path}
                    alt={show.name}
                    key={show.id}
                    id={show.id}
                    overview={show.overview}
                    first_air_date={show.first_air_date}
                    genre_ids={show.genre_ids}
                    name={show.name}
                  />
                ))}
              </div>
            ) : (
              <div>
                <h2 className="noResults">
                  No results found. Please try again.
                </h2>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Originals;
