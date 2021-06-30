import "./App.css";
import { ReactElement } from "react";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import "react-modal-video/scss/modal-video.scss";

const App = (): ReactElement => {
  return (
    <div className="App">
      <Nav />
      <Footer />
    </div>
  );
};

export default App;
