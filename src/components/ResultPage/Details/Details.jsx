import "./Details.css";

export default function Details({ overview, title }) {
  console.log("detail props", overview, title);

  return (
    <>
      <h2>{title}</h2>
      <div className="extras">
        <div className="column1">
          <h5> {overview}</h5>
        </div>

        <div className="column2">
          <p>Duration:</p>
          <p>Release Date:</p>
          <p>Genre:</p>
          <p>Rating:</p>
        </div>

        <div className="column3">
          <p>Director:</p>
          <p>Starring:</p>
        </div>
      </div>
    </>
  );
}
