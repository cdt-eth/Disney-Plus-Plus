import "./Details.css";

export default function Details({
  overview,
  title,
  date,
  genres,
  runtime,
  rating,
}) {
  return (
    <>
      <h2>{title}</h2>
      <div className="extras">
        <div className="column1">
          <h5> {overview}</h5>
        </div>

        <div className="column2">
          <div>
            <p>Duration:</p>
            <p>{runtime}</p>
          </div>
          <div>
            <p>Release Date:</p>
            <p>{date}</p>
          </div>
          <div>
            <p>Genre:</p>
            <p>{genres.length > 0 ? `${genres.join(", ")}` : "N/A"}</p>
          </div>
          <div>
            <p>Rating:</p>
            <p>{rating}</p>
          </div>
        </div>

        <div className="column3">
          <div>
            <p>Director:</p>
            <p>director</p>
          </div>
          <div>
            <p>Starring:</p>
            <p>starring</p>
          </div>
        </div>
      </div>
    </>
  );
}
