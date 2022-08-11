import React from "react";

function Card() {
  const number = Number.parseInt(Math.random() * 10);

  return <div className="card">{number}</div>;
}

export default Card;
