import { ReactElement } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ISuggestedShow = {
  id: number;
  poster_path?: string;
  title?: string;
  name?: string;
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
const SuggestedShows = ({ id }: ISuggestedShow): ReactElement => {
  const [data, setData] = useState<ISuggestedShow[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const API_KEY = process.env.REACT_APP_OPEN_MOVIE_DB_API_KEY;

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      try {
        setIsLoading(true);

        const res = await fetch(
          `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`,
          { signal: signal }
        );

        if (!res.ok) throw new Error("Request failed.");

        const data = await res.json();
        const results = data.results;

        setData(results);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [id, API_KEY]);

  return (
    <div className="suggested">
      {isLoading ? (
        <h3>Loading...</h3>
      ) : data.length === 0 ? (
        <h3 className="reccommendationsError">No Recommendations Available</h3>
      ) : (
        <Slider {...settings}>
          {data.map((show) => {
            return (
              <Link
                to={{
                  pathname: `/show/${show
                    .name!.replace(/[^a-z\d\s]+/gi, "")
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`,
                  state: { ...show },
                }}
                key={show.id}
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
      )}
    </div>
  );
};

export default SuggestedShows;
