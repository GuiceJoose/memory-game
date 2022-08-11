import React, { useState } from "react";
import Card from "./Card";

function Main() {
  const cardsArray = [];
  for (let i = 0; i < 14; i++) {
    cardsArray.push(<Card />);
  }

  return (
    <div className="main">
      <div className="header">
        <h1 className="title">Futurama Memory Game</h1>
        <div className="scoardbard">
          <div className="score">Score:</div>
          <div className="highscore">High Score:</div>
        </div>
      </div>
      <div className="game-area">{cardsArray}</div>
    </div>
  );
}

export default Main;
