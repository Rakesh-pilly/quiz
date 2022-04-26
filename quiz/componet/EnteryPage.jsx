import React from "react";

export default function EnteryPage(prop) {
  return (
    <div className="EnteryMian">
      <h1>Quizzical </h1>

      <button className="startButton" onClick={() => prop.change("start")}>
        Start quiz{" "}
      </button>
    </div>
  );
}
