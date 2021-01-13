import React from "react";
import "./card.css";
function Card({ title, id, listId, index }) {
  return (
        <div
          
          className="card-container"
        >
          <p>{title}</p>
        </div>
  );
}

export default Card;
