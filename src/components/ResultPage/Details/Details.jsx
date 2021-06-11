import "./Details.css";

export default function Details({
  overview,
  title,
  date,
  genres,
  runtime,
  rating,
  director,
  cast,
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
            <p>{runtime ? runtime : "N/A"}</p>
          </div>
          <div>
            <p>Release Date:</p>
            <p>{date ? date : "N/A"}</p>
          </div>
          <div>
            <p>Genre:</p>
            <p>{genres.length > 0 ? `${genres.join(", ")}` : "N/A"}</p>
          </div>
          <div>
            <p>Rating:</p>
            <p>{rating ? rating : "N/A"}</p>
          </div>
        </div>

        <div className="column3">
          <div>
            <p>Director:</p>
            <p>{director ? director : "N/A"}</p>
          </div>
          <div>
            <p>Starring:</p>
            <p className="cast">
              {cast.length > 0
                ? cast.map((cast) => <li key={cast}>{cast}</li>)
                : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
