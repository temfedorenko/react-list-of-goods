import { React, useState } from "react";

import "./App.css";

const goodsFromServer = [
  "Carrot",
  "Dumplings",
  "Eggs",
  "Ice cream",
  "Apple",
  "Bread",
  "Fish",
  "Honey",
  "Jam",
  "Garlic",
];

function App() {
  const [goods, setGoods] = useState([...goodsFromServer]);
  const [goodsVisibility, setGoodsVisibility] = useState(false);
  const [length, setLength] = useState(1);

  const sortGoods = (method) => {
    switch (method) {
      case "alphabetically":
        setGoods([...goods].sort());
        break;
      case "length":
        setGoods([...goods].sort((a, b) => a.length - b.length));
        break;
      case "reset":
        setGoods([...goodsFromServer]);
        setLength(1);
        break;
      default:
        setGoods([...goods]);
    }
  };

  const reverseGoods = () => {
    setGoods([...goods].reverse());
  };

  const renderGoods = () => {
    return goods
      .filter((item) => item.length >= length)
      .map((item, i) => (
        <li key={i} className="item">
          {item}
        </li>
      ));
  };

  const elements = renderGoods();

  const renderOptions = () => {
    const options = [];
    for (let i = 1; i < 11; i++) {
      options.push(<option key={i}>{i}</option>);
    }
    return options;
  };

  const options = renderOptions();

  return (
    <div className="level-item has-text-centered">
      <button
        className=" button is-primary is-extra-large"
        onClick={() => setGoodsVisibility(true)}
        style={{ display: goodsVisibility ? "none" : "block" }}
      >
        Start
      </button>
      {goodsVisibility ? (
        <div>
          <div className="select-wrapper">
            <p className="select-title">Select min length of goods to show:</p>
            <div className="select is-normal is-rounded">
              <select
                onChange={(e) => setLength(e.target.value)}
                value={length}
              >
                {options}
              </select>
            </div>
          </div>
          <ul className="box">{elements}</ul>
          <button
            className="button is-info is-large"
            onClick={() => reverseGoods()}
          >
            Reverse
          </button>
          <button
            className="button is-info is-large"
            onClick={() => sortGoods("alphabetically")}
          >
            Sort alphabetically
          </button>
          <button
            className="button is-info is-large"
            onClick={() => sortGoods("length")}
          >
            Sort by length
          </button>
          <button
            className="button is-danger is-large"
            onClick={() => sortGoods("reset")}
          >
            Reset
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
