import Recommendations from "../../components/Recommendations/Recommendations";
import "./Originals.css";

export default function Originals() {
  // When the user scrolls down 50px from the top of the document, resize the header's font size
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("originals").style.fontSize = "1.7rem";
    } else {
      document.getElementById("originals").style.fontSize = "2.7rem";
    }
  }

  return (
    <div className="page2">
      <div className="fixedBannerOriginals">
        <h1 className="originalsTitle" id="originals">
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
      <Recommendations title="Series" />
      <Recommendations title="Shorts" />
      <Recommendations title="Specials" />
    </div>
  );
}
