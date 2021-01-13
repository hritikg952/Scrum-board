import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./cardForm.css";

function CardForm({ toggleCardForm, listId }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const addCardHandler = (e) => {
    e.preventDefault();
    if (value === "") {
      alert("Please enter card title");
    } else {
      const id = uuidv4();
      dispatch({
        type: "CREATE_CARD",
        payload: {
          id: id,
          title: value,
        },
      });
      dispatch({
        type: "ADD_CARD_IN_LIST",
        payload: {
          cardId: id,
          listId: listId,
          cardTitle: value,
        },
      });
    }
  };

  const onhandleCross = (e) => {
    e.preventDefault();
    toggleCardForm(e);
  };
  return (
    <div className="cardform-container">
      <textarea
        className="cardform-input"
        cols="5"
        rows="3"
        placeholder="Enter title for this card"
        onChange={(e) => handleInput(e)}
        value={value}
      ></textarea>
      <div className="cardform-button-container">
        <button
          className="cardform-addlist-button"
          onClick={(e) => addCardHandler(e)}
        >
          Add List
        </button>
        <button
          className="cardform-cross-button"
          onClick={(e) => onhandleCross(e)}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
      </div>
    </div>
  );
}

export default CardForm;
