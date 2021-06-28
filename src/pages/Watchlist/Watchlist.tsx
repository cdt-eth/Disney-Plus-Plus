import "./Watchlist.css";
import { MdAddCircleOutline as AddIcon } from "react-icons/md";

export default function Watchlist() {
  return (
    <div className="wrapper">
      {/* <h1 className="pageTitle">Watchlist</h1> */}

      <div className="watchlistWrapper">
        <AddIcon />
        <h3>Your watchlist is empty</h3>
        <p>Content you add to your watchlist will appear here.</p>
      </div>
    </div>
  );
}
