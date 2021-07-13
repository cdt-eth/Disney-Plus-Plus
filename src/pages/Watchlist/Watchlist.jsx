import "./Watchlist.css";
import { MdAddCircleOutline as AddIcon } from "react-icons/md";
import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import { Link } from "react-router-dom";

// const [loading, setLoading] = useState(true);

// fetch(
//   `https://api.themoviedb.org/3/movie/${item.id}?api_key=${API_KEY}&language=en-US&page=1`
// )
//   .then((res) => res.json())
//   .then((data) => setData(data));

export default function Watchlist() {
  const [data, setData] = useState([]);
  const API_KEY = process.env.REACT_APP_OPEN_MOVIE_DB_API_KEY;

  useEffect(() => {
    const getWatchlist = async () => {
      let { data } = await supabase.from("watchlist").select("id");

      data.map(async (item) => {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${item.id}?api_key=${API_KEY}&language=en-US&page=1`
        );
        const data = await res.json();
        setData((array) => [...array, data]);
      });
    };

    getWatchlist();
  }, [API_KEY]);

  console.log(data);

  return (
    <div className="wrapper">
      <div className="watchlistWrapper">
        <AddIcon />
        <h3>Your watchlist is empty</h3>
        <p>Content you add to your watchlist will appear here.</p>{" "}
      </div>
      {/* </div> */}

      <div className="page collectionsPage">
        <div className="results collections">
          {data.map((item) => {
            // console.log("item", item);
            return (
              <div key={item.id} className="result">
                <Link
                  to={{
                    pathname: `/movie/${item.id}`,
                    state: { ...item },
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
          })}
        </div>
      </div>
    </div>
    // </div>
  );
}

// import "./Watchlist.css";
// import { Link } from "react-router-dom";
// import { useState, useEffect, ReactElement } from "react";
// // import { MdAddCircleOutline as AddIcon } from "react-icons/md";
// // import Result from "../../components/Result/Result";
// import { supabase } from "../../supabaseClient";
// import { ISearchData } from "../Search/Search";

// interface IWatchlist {
//   id: number | null;
//   poster_path: string;
//   title: string;
//   overview: string;
//   release_date: string;
//   genre_ids: string[];
//   alt: string;
// }

// const Watchlist = (): ReactElement => {
// const [loading, setLoading] = useState<boolean>(true);
// const [data, setData] = useState<ISearchData[]>([]);
// const [watchlist, setWatchlist] = useState<IWatchlist[] | null>([]);
// const API_KEY = process.env.REACT_APP_OPEN_MOVIE_DB_API_KEY;

//   list.then(
//     (watchlist: any) => {
//       // getWatchlistData();
//       console.log("PROMISE RESOLVED", watchlist);
//       fetch(
//         `https://api.themoviedb.org/3/movie/${watchlist[0].id}?api_key=${API_KEY}&language=en-US&page=1`
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           console.log("results:", data);
//           // setData(data);
//         });
//     },
//     function (err) {
//       console.log(err);
//     }
//   );

//   async function getUserWatchlist() {
//     try {
// setLoading(true);

// let { data: id, error } = await supabase.from("watchlist").select("id");

// setWatchlist(id);

// console.log("ID IS NOW:", id);
// setLoading(false);

//       if (error) throw error;
//     } catch (error) {
//       console.log("error:", error);
//       throw error;
//     }
//   }

//   // async function getWatchlistData() {
//   //   console.log("watchlist1", watchlist);
//   //   fetch(
//   //     `https://api.themoviedb.org/3/movie/${
//   //       watchlist![0].id
//   //     }?api_key=${API_KEY}&language=en-US&page=1`
//   //   )
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       console.log("results:", data);
//   //       // setData(data);
//   //     });
//   // }

//   return (
//     <div className="wrapper">
//       <div className="watchlistWrapper">
//         {/* <div className="noList">
//           <AddIcon />
//           <h3>Your watchlist is empty</h3>
//           <p>Content you add to your watchlist will appear here.</p>
//         </div> */}

//         <div className="pge collectionsPage">
//           <div className="results collections">
//             {
//               loading ? (
//                 <h3>Loading...</h3>
//               ) : (
//                 // watchlist![0].id
//                 // watchlist!.map(
//                 //   (item) => item
//                 <div className="result">
//                   <Link
//                     to={{
//                       pathname: `/movie/${data.id}`,
//                       state: { ...data },
//                     }}
//                   >
//                     <img
//                       src={
//                         data.poster_path
//                           ? `https://image.tmdb.org/t/p/original${data.poster_path}`
//                           : "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg"
//                       }
//                       alt={"item.id"}
//                     />
//                   </Link>
//                 </div>
//               )
//               // )
//             }
//             {/* // } */}
//           </div>
//         </div>
//       </div>
//     </div>

//     //  {loading ? (
//     //   <h3>Loading...</h3>
//     // ) : (
//     //   <div className="results">
//     //     {watchlist?.map((item: IWatchlist) => {
//     //       return <li key={item.id}>{item.id}</li>;
//     //     })}
//     //   </div>
//     // )}
//   );
// };

// export default Watchlist;
