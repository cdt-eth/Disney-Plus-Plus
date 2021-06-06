import "./Nav.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../../pages/Home";
import Search from "../../pages/Search/Search";
import Watchlist from "../../pages/Watchlist/Watchlist";
import Originals from "../../pages/Originals/Originals";
import Movies from "../../pages/Movies/Movies";
import Series from "../../pages/Series/Series";
import ResultPage from "../../pages/ResultPage/ResultPage";

import {
  MdAccountCircle as LoginIcon,
  MdHome as HomeIcon,
  MdSearch as SearchIcon,
  MdLibraryAdd as WatchlistIcon,
  MdStar as StarIcon,
  MdTv as TvIcon,
  MdLocalMovies as MovieIcon,
} from "react-icons/md";

export default function Nav() {
  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    return window.pageYOffset > 50
      ? (document.getElementById("nav").style.background = "black")
      : (document.getElementById("nav").style.background = "");
  };

  return (
    <Router>
      <div>
        <nav className="nav" id="nav">
          <Link to="/" className="logo">
            <img
              src="https://prod-static.disney-plus.net/us-west-2/builds/e76798ab2a732a884562763cbd19b969a80dcd5b_1606148151180/images/logo.svg"
              alt="logo"
            />
          </Link>

          <ul className="menu">
            <li>
              <HomeIcon />
              <Link to="/">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <SearchIcon />
              <Link to="/search">
                <span>Search</span>
              </Link>
            </li>
            <li>
              <WatchlistIcon />
              <Link to="/watchlist">
                <span>Watchlist</span>
              </Link>
            </li>
            <li>
              <StarIcon />
              <Link to="/originals">
                <span>Originals</span>
              </Link>
            </li>
            <li>
              <TvIcon />
              <Link to="/movies">
                <span>Movies</span>
              </Link>
            </li>
            <li>
              <MovieIcon />
              <Link to="/series">
                <span>Series</span>
              </Link>
            </li>
          </ul>

          <a href="www.com" className="login">
            <p>CDT</p>
            <LoginIcon />
          </a>
        </nav>

        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/watchlist">
            <Watchlist />
          </Route>
          <Route path="/originals">
            <Originals />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/series">
            <Series />
          </Route>

          <Route path={"/results/:id"} component={ResultPage} />

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
