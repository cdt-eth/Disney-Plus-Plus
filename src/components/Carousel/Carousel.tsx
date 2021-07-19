import "./Carousel.css";
import { useState, useEffect, ReactElement } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ICarouselData = {
  id: string;
  title: string;
  poster_path: string;
};

const Carousel = (): ReactElement => {
  const [popular, setPopular] = useState<ICarouselData[]>([]);
  const API_KEY = process.env.REACT_APP_OPEN_MOVIE_DB_API_KEY;
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 812,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchPopular = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await res.json();
      const results = data.results;

      setPopular(results);
    };

    fetchPopular();
  }, [API_KEY]);

  return (
    <div className="slideWrapper">
      <Slider {...settings}>
        {popular.map((p) => {
          return (
            <Link to={{ pathname: `/movie/${p.id}` }} key={p.title}>
              <div className="banner">
                <img
                  src={
                    p.poster_path
                      ? `https://image.tmdb.org/t/p/original/${p.poster_path}`
                      : "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg"
                  }
                  alt={p.title}
                />
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
