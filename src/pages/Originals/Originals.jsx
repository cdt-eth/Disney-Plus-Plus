import "./Originals.css";
import { useState, useEffect } from "react";
import ShowResult from "../../components/ShowResult/ShowResult";

export default function Originals() {
  const [isLoading, setIsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [data, setData] = useState([]);
  const API_KEY = process.env.REACT_APP_OPEN_MOVIE_DB_API_KEY;

  useEffect(() => {
    let unmounted = false;

    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213 `
      );
      const data = await res.json();
      const results = data.results;

      if (results.length === 0) setNoResults(true);

      setData(results);
      setIsLoading(false);
    };

    if (!unmounted) {
      setIsLoading(true);
      fetchData();
    }
    return () => {
      unmounted = true;
    };
  }, [API_KEY]);

  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    return document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
      ? (document.getElementById("originals").style.fontSize = "1.7rem")
      : (document.getElementById("originals").style.fontSize = "2.7rem");
  };

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
}
