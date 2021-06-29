import "./Suggested.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useState, useEffect, ReactElement } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ISuggestedData = {
  id: number;
  title: string;
  poster_path: string;
};

type ISuggested = {
  id: number;
};

const settings = {
  dots: false,
  infinite: false,
  autoplay: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  centerMode: false,
  arrows: false,
  useTransform: true,
  cssEase: "ease-in",
  responsive: [
    {
      breakpoint: 812,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const Suggested = ({ id }: ISuggested): ReactElement => {
  // export default function Suggested({ id }) {
  const [data, setData] = useState<ISuggestedData[]>([]);
  const API_KEY = process.env.REACT_APP_OPEN_MOVIE_DB_API_KEY;

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`,
        { signal: signal }
      );
      const data = await res.json();
      const results = data.results;
      setData(results);
    };

    fetchData();

    return () => abortController.abort();
  }, [id, API_KEY]);

  return (
    <div className="suggested">
      {data.length > 0 ? (
        <Slider {...settings}>
          {data.map((movie) => {
            return (
              <Link
                to={{
                  pathname: `/movie/${movie.id}`,
                  state: { ...movie },
                }}
                key={movie.title}
              >
                <div className="banner recBanner">
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                        : "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg"
                    }
                    alt={movie.title}
                  />
                </div>
              </Link>
            );
          })}
        </Slider>
      ) : (
        <h3 className="reccommendationsError">No Recommendations Available</h3>
      )}
    </div>
  );
};

export default Suggested;
