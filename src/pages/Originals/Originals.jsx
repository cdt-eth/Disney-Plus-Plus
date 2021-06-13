// import Recommendations from "../../components/Recommendations/Recommendations";
import "./Originals.css";

export default function Originals() {
  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    return document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
      ? (document.getElementById("originals").style.fontSize = "1.7rem")
      : (document.getElementById("originals").style.fontSize = "2.7rem");
  };

  return (
    <div className="page2">
      <div className="fixedBannerOriginals">
        <h1
          className="originalsTitle"
          id="originals"
          // style={
          //   document.body.scrollTop > 50 ||
          //   document.documentElement.scrollTop > 50
          //     ? { fontSize: "1.7rem" }
          //     : { fontSize: "2.7rem" }
          // }
        >
          Originals
        </h1>
      </div>

      <div className="originalsList">
        <h4>Featured</h4>
        <div className="results">
          <div className="result">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
              alt="Mandalorian"
            />
          </div>
          <div className="result">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
              alt="Mandalorian"
            />
          </div>
          <div className="result">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
              alt="Mandalorian"
            />
          </div>
          <div className="result">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
              alt="Mandalorian "
            />
          </div>
          <div className="result">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
              alt="Mandalorian"
            />
          </div>
          <div className="result">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
              alt="Mandalorian "
            />
          </div>
          <div className="result">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
              alt="Mandalorian"
            />
          </div>
          <div className="result">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
              alt="Mandalorian"
            />
          </div>
          <div className="result">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
              alt="Mandalorian "
            />
          </div>
          <div className="result">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/267252F276A5CB826A8AB77FB70B5C4EE8EA0E529DE9C82C79D0F85C899D5FB9/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals"
              alt="Mandalorian"
            />
          </div>
        </div>
      </div>
      {/* <Recommendations title="Series" />
      <Recommendations title="Shorts" />
      <Recommendations title="Specials" /> */}
    </div>
  );
}
