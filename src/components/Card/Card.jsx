import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function Card({ title, id, listId, index }) {
  const dispatch = useDispatch();
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="card-container"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <p>{title}</p>
      <FontAwesomeIcon
        className={isHover ? "card-delete-show" : "card-delete-hide"}
        icon={faTrash}
        onClick={(e) => {
          e.preventDefault();
          dispatch({
            type: "DELETE_CARD_FROM_LIST",
            payload: {
              listId: listId,
              cardId: id,
            },
          });
          dispatch({
            type: "DELETE_CARD",
            payload: {
              id: id,
            },
          });
        }}
      />
    </div>
  );
}

export default Card;
