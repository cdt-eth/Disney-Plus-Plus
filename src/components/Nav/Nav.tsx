import "./Nav.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect, ReactElement } from "react";
import Home from "../../pages/Home";
import Search from "../../pages/Search/Search";
import Watchlist from "../../pages/Watchlist/Watchlist";
import Originals from "../../pages/Originals/Originals";
import Movies from "../../pages/Movies/Movies";
import Series from "../../pages/Series/Series";
import ResultPage from "../../pages/ResultPage/ResultPage";
import Auth from "../../pages/Auth/Auth";
import Disney from "../../pages/Collections/Disney/Disney";
import Pixar from "../../pages/Collections/Pixar/Pixar";
import Marvel from "../../pages/Collections/Marvel/Marvel";
import StarWars from "../../pages/Collections/StarWars/StarWars";
import NatGeo from "../../pages/Collections/NatGeo/NatGeo";
import ShowResultPage from "../../pages/ShowResultPage/ShowResultPage";
import NoMatch from "../../pages/404/404";
import {
  MdAccountCircle as LoginIcon,
  MdHome as HomeIcon,
  MdSearch as SearchIcon,
  MdLibraryAdd as WatchlistIcon,
  MdStar as StarIcon,
  MdTv as TvIcon,
  MdLocalMovies as MovieIcon,
} from "react-icons/md";
import { supabase } from "../../supabaseClient";
import { Session } from "@supabase/supabase-js";

const Nav = (): ReactElement => {
  const [session, setSession] = useState<Session | null>(null);
  const user = supabase.auth.user();

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    return window.pageYOffset > 50
      ? (document.getElementById("nav")!.style.background = "black")
      : (document.getElementById("nav")!.style.background = "");
  };

  return (
    <Router>
      <div>
        <nav className="nav" id="nav">
          <Link to="/" className="logo">
            <img className="logoImg" src="/dpp.png" alt="logo" />
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

          <Link to="/login" className="login">
            <p>{session ? user!.email : "Log In"}</p>
            <LoginIcon />
          </Link>
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
          <Route path="/login">
            <Auth />
          </Route>

          <Route path={"/movie/:id"} component={ResultPage} />
          <Route path={"/show/:id"} component={ShowResultPage} />

          <Route path={"/brand/disney"} component={Disney} />
          <Route path={"/brand/pixar"} component={Pixar} />
          <Route path={"/brand/marvel"} component={Marvel} />
          <Route path={"/brand/star-wars"} component={StarWars} />
          <Route path={"/brand/nat-geo"} component={NatGeo} />

          <Route exact path="/">
            <Home />
          </Route>

          <Route path={"*"} component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};
export default Nav;
