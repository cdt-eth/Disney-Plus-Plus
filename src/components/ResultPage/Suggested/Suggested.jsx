import "./Suggested.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: false,
  autoplay: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  centerMode: false,
  arrows: false,
  useTransform: true, // Mandatory to use cssEase
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

export default function Suggested({ id }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    let unmounted = false;

    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=1dbf27409e387afe9abadb77b2745ddd&language=en-US&page=1`
      );
      const data = await res.json();
      const results = data.results;
      setData(results);
    };
    if (!unmounted) {
      fetchData();
    }
    return () => {
      unmounted = true;
    };
  }, [id]);

  return (
    <div className="suggested">
      {data.length > 0 ? (
        <Slider {...settings}>
          {data.map((movie) => {
            return (
              <Link
                to={{
                  pathname: `/results/${movie.id}`,
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
}
