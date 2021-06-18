import "./App.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import "react-modal-video/scss/modal-video.scss";
// import { useState } from "react";
// import { context } from "./Context";

function App() {
  // const [user, setUser] = useState(null);
  // const [loggedIn, isLoggedIn] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // const loginInfo = {
  //   loggedIn,
  //   isLoggedIn,
  //   user,
  //   setUser,
  //   isLoading,
  //   setIsLoading,
  // };

  // console.log("user", user);

  return (
    <div className="App">
      {/* <context.Provider value={{ user, setUser }}> */}
      {/* <context.Provider value={loginInfo}> */}
      <Nav />
      {/* </context.Provider> */}
      <Footer />
    </div>
  );
}

export default App;
