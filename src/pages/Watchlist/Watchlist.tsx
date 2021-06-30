import "./Watchlist.css";
import { ReactElement } from "react";
import { MdAddCircleOutline as AddIcon } from "react-icons/md";

const Watchlist = (): ReactElement => {
  return (
    <div className="wrapper">
      <div className="watchlistWrapper">
        <AddIcon />
        <h3>Your watchlist is empty</h3>
        <p>Content you add to your watchlist will appear here.</p>
      </div>
    </div>
  );
};

export default Watchlist;
