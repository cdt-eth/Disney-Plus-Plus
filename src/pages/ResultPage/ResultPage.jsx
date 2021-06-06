import "./ResultPage.css";
import { useParams } from "react-router-dom";

export default function ResultPage(props) {
  const { id } = useParams();
  const { poster, title, alt } = props.location.state;

  return (
    <div className="resultPage">
      <h3>this is page: {id}</h3>
      <h3>poster: {poster}</h3>
      <h3> title: {title} </h3>
      <h3> alt: {alt} </h3>
    </div>
  );
}
