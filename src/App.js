import React, { useState } from "react";
import "./App.css";

function App() {
  const [clickedPoints, setClickedPoints] = useState([]);

  const getCoordinates = (e) => {
    const { clientX, clientY } = e;
    setClickedPoints([...clickedPoints, { clientX, clientY }]);
    console.log(clickedPoints);
  };

  const handleUndo = () => {
    const newClickedPoints = [...clickedPoints];
    newClickedPoints.pop();
    setClickedPoints(newClickedPoints);
  };

  return (
    <div className="App">
      <div className="head-btns">
        <button
          className="btn"
          onClick={handleUndo}
          disabled={clickedPoints.length === 0}
        >
          Undo
        </button>
      </div>
      <div className="container" onClick={getCoordinates}>
        {clickedPoints.map((clickedPoint, index) => {
          return (
            <div
              key={index}
              className="ball"
              style={{
                left: clickedPoint.clientX - 15,
                top: clickedPoint.clientY - 15,
                position: "absolute",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
