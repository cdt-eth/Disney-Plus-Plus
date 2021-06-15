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

export default function SuggestedShows({ id }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    let unmounted = false;

    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=1dbf27409e387afe9abadb77b2745ddd&language=en-US&page=1`
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
          {data.map((show) => {
            return (
              <Link
                to={{
                  pathname: `/show/${show.id}`,
                  state: { ...show },
                }}
                key={show.title}
              >
                <div className="banner recBanner">
                  <img
                    src={
                      show.poster_path
                        ? `https://image.tmdb.org/t/p/original/${show.poster_path}`
                        : "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg"
                    }
                    alt={show.title}
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
//
