import "./Result.css";

export default function Result({ key, poster, alt }) {
  return (
    <div className="result" key={key}>
      <img
        src={
          poster
            ? `https://image.tmdb.org/t/p/original/${poster}`
            : "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg"
        }
        alt={alt}
      />
    </div>
  );
}
