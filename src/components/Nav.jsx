import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
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
  return (
    <Router>
      <div>
        <nav className="nav">
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
          <Route path="/Movies">
            <Movies />
          </Route>
          <Route path="/series">
            <Series />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Search() {
  return <h2>Search</h2>;
}

function Watchlist() {
  return <h2>Watchlist</h2>;
}

function Originals() {
  return <h2>Originals</h2>;
}

function Movies() {
  return <h2>Movies</h2>;
}

function Series() {
  return <h2>Series</h2>;
}
