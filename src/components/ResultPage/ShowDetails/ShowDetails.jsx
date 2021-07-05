const ShowDetails = ({
  overview,
  date,
  genres,
  rating,
  creator,
  cast,
  name,
}) => {
  return (
    <>
      <h2>{name}</h2>
      <div className="extras">
        <div className="column1">
          <h5> {overview ? overview : "No summary available."}</h5>
        </div>

        <div className="column2">
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
            <p>Creator:</p>
            <p className="cast">
              {creator.length > 0
                ? creator.map((creator) => <li key={creator}>{creator}</li>)
                : "N/A"}
            </p>
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
};

export default ShowDetails;
