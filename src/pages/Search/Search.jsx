import "./Search.css";
import { useState } from "react";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(searchValue);
    setSearchValue("");
  }

  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="Search by title, character, or genre"
          className="input"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </form>

      <div className="page">
        <h1 className="pageTitle">Explore</h1>

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
              alt="Mandalorian "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
