import "./App.css";
import Nav from "./components/Nav";
import HomeSlider from "./components/HomeSlider";
import Studios from "./components/Studios";
import Recommendations from "./components/Recommendations";

function App() {
  return (
    <div className="App">
      <Nav />
      <HomeSlider />
      <Studios />
      <Recommendations title={"Recommended For You"} />
      <Recommendations title={"New to Disney+"} />
      <Recommendations
        title={"Because You Watched The Falcon and The Winter Soldier"}
      />
      <Recommendations title={"Originals"} />
      <Recommendations title={"Trending"} />
      <Recommendations title={"Comedies"} />
    </div>
  );
}

export default App;
