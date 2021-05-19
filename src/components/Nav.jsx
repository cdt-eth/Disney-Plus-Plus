import React from "react";
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
    <nav className="nav">
      <a href="www.com" className="logo">
        <img
          src="https://prod-static.disney-plus.net/us-west-2/builds/e76798ab2a732a884562763cbd19b969a80dcd5b_1606148151180/images/logo.svg"
          alt=""
        />
      </a>

      <ul className="menu">
        <li>
          <HomeIcon />
          <span>Home</span>
        </li>
        <li>
          <SearchIcon />
          <span>Search</span>
        </li>
        <li>
          <WatchlistIcon />
          <span>Watchlist</span>
        </li>
        <li>
          <StarIcon />
          <span>Originals</span>
        </li>
        <li>
          <TvIcon />
          <span>Movies</span>
        </li>
        <li>
          <MovieIcon />
          <span>Series</span>
        </li>
      </ul>

      <a href="www.com" className="login">
        <p>CDT</p>
        <LoginIcon />
      </a>
    </nav>
  );
}
