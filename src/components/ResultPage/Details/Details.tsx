import "./Details.css";
import React, { ReactElement } from "react";

type IDetails = {
  overview: string;
  title: string;
  date: string;
  genres: string[];
  runtime: string;
  rating: string;
  director: string;
  cast: string[];
};

const Details = ({
  overview,
  title,
  date,
  genres,
  runtime,
  rating,
  director,
  cast,
}: IDetails): ReactElement => {
  return (
    <>
      <h2>{title}</h2>
      <div className="extras">
        <div className="column1">
          <h5> {overview.length > 0 ? overview : "No summary available."}</h5>
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
};

export default Details;
