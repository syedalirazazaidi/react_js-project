import React, { useState } from "react";
import "./main.css";
function RandomNo() {
  const [min, setStateMin] = useState(0);
  const [max, setStateMax] = useState(10);
  const [randomNum, setrandomNum] = useState(5);
  const randomNumber = (min, max) => {
    setrandomNum(Math.floor(Math.random() * (max - min + 1)) + Number(min));
  };
  return (
    <div>
      <div className="container">
        <h3>Random Number :</h3>
        <p>{randomNum}</p>
      </div>
      <div className="minmax">
        <div>
          <p>Min </p>
          <input
            type="number"
            placeholder="0"
            value={min}
            onChange={(e) => setStateMin(e.target.value)}
          />
        </div>
        <div>
          <p>Max </p>
          <input
            type="number"
            placeholder="0"
            value={max}
            onChange={(e) => setStateMax(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button onClick={() => randomNumber(min, max)}>
          Get Random Number
        </button>
      </div>
    </div>
  );
}

export default RandomNo;
