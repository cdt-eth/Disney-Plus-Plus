import "./Watchlist.css";
import { MdAddCircleOutline as AddIcon } from "react-icons/md";
import { useState, useEffect, ReactElement } from "react";
import { supabase } from "../../supabaseClient";
import { Link } from "react-router-dom";
import { Session } from "@supabase/supabase-js";

export interface IWatchlist {
  id: string;
  poster_path: string;
  alt: string;
  title: string;
}

const Watchlist = (): ReactElement => {
  const [data, setData] = useState<IWatchlist[]>([]);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const API_KEY = process.env.REACT_APP_OPEN_MOVIE_DB_API_KEY;
  const [session, setSession] = useState<Session | null>(null);
  const user = supabase.auth.user();

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    const getWatchlist = async () => {
      let { data } = await supabase.from("watchlist").select("id");

      if (data!.length > 0) setIsEmpty(false);

      data!.map(async (item) => {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${item.id}?api_key=${API_KEY}&language=en-US&page=1`
        );
        const data = await res.json();
        setData((array) => [...array, data]);
      });
      setLoading(false);
    };

    getWatchlist();
  }, [API_KEY]);

  return (
    <div className="wrapper">
      {isEmpty || !user || !session ? (
        <div className="watchlistWrapper">
          <AddIcon />
          <h3>Your watchlist is empty</h3>
          <p>Content you add to your watchlist will appear here.</p>
        </div>
      ) : (
        <div className="page collectionsPage">
          <div className="results collections">
            {loading ? (
              <h3>Loading...</h3>
            ) : (
              data.map((item) => {
                return (
                  <div key={item.id} className="result">
                    <Link
                      to={{
                        pathname: `/movie/${item.id}`,
                        // pathname: `/movie/${item.title
                        //   .replace(/[^a-z\d\s]+/gi, "")
                        //   .replace(/\s+/g, "-")
                        //   .toLowerCase()}`,
                        // state: { ...item },
                      }}
                    >
                      <img
                        src={
                          item.poster_path
                            ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
                            : "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg"
                        }
                        alt={item.alt}
                      />
                    </Link>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Watchlist;
