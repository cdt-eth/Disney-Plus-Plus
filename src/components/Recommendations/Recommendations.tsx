import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import "./Recommendations.css";
import { RecommendationData } from "../../pages/Home";

interface RecommendationProps {
  data: RecommendationData;
  loading: boolean;
  title: string;
}

const Recommendations = ({
  title,
  data,
  loading,
}: RecommendationProps): ReactElement => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
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

  return (
    <div className="recommendationSection">
      <h3>{title}</h3>

      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <Slider {...settings}>
          {data.map((movie) => {
            return (
              <Link
                to={{
                  pathname: `/movie/${movie.id}`,
                  // pathname: `/movie/${movie.title
                  //   .replace(/[^a-z\d\s]+/gi, "")
                  //   .replace(/\s+/g, "-")
                  //   .toLowerCase()}`,
                  // state: { ...movie },
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
      )}
    </div>
  );
};

export default Recommendations;
