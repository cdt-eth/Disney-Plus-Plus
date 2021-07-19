import { Link } from "react-router-dom";

export default function ShowResult(props) {
  const { poster_path: poster, alt, id } = props;

  return (
    <div className="result">
      <Link to={{ pathname: `/show/${id}` }}>
        <img
          src={
            poster
              ? `https://image.tmdb.org/t/p/original${poster}`
              : "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg"
          }
          alt={alt}
        />
      </Link>
    </div>
  );
}
