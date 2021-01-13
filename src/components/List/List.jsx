import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardForm from "../cardForm/CardForm";
import Card from "../Card/Card";
import "./list.css";
function List({ title, id }) {
  const dispatch = useDispatch();
  const cardsInListState = useSelector((state) => state.list);
  const indexOfList = cardsInListState.findIndex((s) => s.id === id);

  //?STATE
  const [cardForm, setCardForm] = useState(false);
  const [isTitleEditing, setIsTitleEditing] = useState(false);
  const [titleValue, setTitleValue] = useState("");

  //?HANDLERS
  const toggleCardForm = (e) => {
    e.preventDefault();
    setCardForm(!cardForm);
  };
  const toggleTitleEditForm = (e) => {
    e.preventDefault();
    setIsTitleEditing(!isTitleEditing);
  };

  return (
    <div className="list">
      <div>
        {isTitleEditing ? (
          <form
            className="list-title-edit-input"
            onSubmit={(e) => {
              dispatch({
                type: "EDIT_LIST",
                payload: {
                  title: titleValue,
                  id: id,
                },
              });
              toggleTitleEditForm(e);
            }}
          >
            <input
              placeholder="Edit title"
              value={titleValue}
              onChange={(e) => setTitleValue(e.target.value)}
            />
          </form>
        ) : (
          <h4 className="list-title" onClick={(e) => toggleTitleEditForm(e)}>
            {title}
          </h4>
        )}
      </div>
      <div>
        {cardsInListState[indexOfList].cards.length > 0 ? (
          <>
            {cardsInListState[indexOfList].cards.map((card, index) => {
              return (
                <Card
                  title={card.title}
                  id={card.id}
                  listId={id}
                  index={index}
                  key={card.id}
                />
              );
            })}

            {cardForm ? (
              <>
                <CardForm toggleCardForm={toggleCardForm} listId={id} />
              </>
            ) : (
              <button
                className="list-button"
                onClick={(e) => toggleCardForm(e)}
              >
                Add Another Card
              </button>
            )}
          </>
        ) : (
          <>
            {cardForm ? (
              <>
                <CardForm toggleCardForm={toggleCardForm} listId={id} />
              </>
            ) : (
              <button
                className="list-button"
                onClick={(e) => toggleCardForm(e)}
              >
                Add Another Card
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default List;
