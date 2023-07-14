import React from "react";
import "./serviceCard.scss";

export default function ServiceCard({ cardInfo }) {
  return (
    <div className="rectangle">
      <div className="container">
        <div>
          <img src={cardInfo.logo} width={200} height={200}></img>
        </div>
      </div>
      <div className="info-container">
        <div className="talk-card-title">{cardInfo.title}</div>
        <p className="talk-card-subtitle">{cardInfo.description}</p>
      </div>
    </div>
  );
}
