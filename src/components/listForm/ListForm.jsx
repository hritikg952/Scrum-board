import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import "./listForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
function ListForm({ toggleListForm }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const changeTitle = (e) => {
    setValue(e.target.value);
  };

  const onAddList = (e) => {
    e.preventDefault();
    if (value === "") {
      alert("please enter the title");
    } else {
      const id = uuidv4();
      dispatch({
        type: "CREATE_LIST",
        payload: {
          id: id,
          title: value,
        },
      });
      toggleListForm(e);
    }
  };
  const onhandleCross = (e) => {
    toggleListForm(e);
  };
  return (
    <div className="listform-container">
      <input
        className="listform-input"
        placeholder="list title.."
        value={value}
        onChange={(e) => changeTitle(e)}
      />
      <div className="listform-button-container">
        <button
          className="listform-addlist-button"
          onClick={(e) => onAddList(e)}
        >
          Add List
        </button>
        <button
          className="listform-cross-button"
          onClick={(e) => onhandleCross(e)}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
      </div>
    </div>
  );
}

export default ListForm;
