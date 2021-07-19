import "./Result.css";
import { Link } from "react-router-dom";

export default function Result(props) {
  const { poster_path: poster, alt, id } = props;

  return (
    <div className="result">
      <Link
        to={{
          pathname: `/movie/${id}`,
          // pathname: `/movie/${id}/${title
          //   .replace(/[^a-z\d\s]+/gi, "")
          //   .replace(/\s+/g, "-")
          //   .toLowerCase()}`,
          // state: { id: id },
          // state: { ...props },
        }}
      >
        <img
          src={
            poster
              ? `https://image.tmdb.org/t/p/original/${poster}`
              : "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg"
          }
          alt={alt}
        />
      </Link>
    </div>
  );
}
