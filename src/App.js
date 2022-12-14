import React, { useState } from "react";
import "./App.css";

function App() {
  const [clickedPoints, setClickedPoints] = useState([]);
  const [undoPoints, setUndoPoints] = useState([]);

  const getCoordinates = (e) => {
    const { clientX, clientY } = e;
    setClickedPoints([...clickedPoints, { clientX, clientY }]);
    console.log(clickedPoints);
  };

  const handleUndo = () => {
    const newClickedPoints = [...clickedPoints];
    const undoPoint = newClickedPoints.pop();
    setClickedPoints(newClickedPoints);
    setUndoPoints([...undoPoints, undoPoint]);
  };

  const handleRedo = () => {
    const newUndoPoints = [...undoPoints];
    const redoPoint = newUndoPoints.pop();
    setUndoPoints(newUndoPoints);
    setClickedPoints([...clickedPoints, redoPoint]);
  };

  return (
    <div className="App">
      <div className="title">Make dots wherever you want, my friend!!</div>

      <div className="container" onClick={getCoordinates}>
        {clickedPoints.map((clickedPoint, index) => {
          return (
            <div
              key={index}
              className="ball"
              style={{
                left: clickedPoint.clientX,
                top: clickedPoint.clientY,
                position: "absolute",
              }}
            ></div>
          );
        })}
      </div>
      <div className="head-btns">
        <button
          className="btn"
          onClick={handleUndo}
          disabled={clickedPoints.length === 0}
        >
          Undo
        </button>
        <button
          className="btn"
          onClick={handleRedo}
          disabled={undoPoints.length === 0}
        >
          Redo
        </button>
      </div>
    </div>
  );
}

export default App;
