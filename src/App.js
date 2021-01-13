import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./App.css";
import List from "./components/List/List.jsx";
import ListForm from "./components/listForm/ListForm";
function App() {
  const listState = useSelector((state) => state.list);
  const [listForm, setListForm] = useState(false);

  const toggleListForm = (e) => {
    e.preventDefault();
    setListForm(!listForm);
  };

  const onDragEnd = () => {};

  return (
    <div className="App">
      <header className="header">
        <h1>Scrum Board</h1>
      </header>
        <div className="list-container">
          {listState.length > 0 ? (
            <>
              {listState.map((list) => {
                return <List title={list.title} id={list.id} key={list.id} />;
              })}

              {listForm ? (
                <ListForm toggleListForm={toggleListForm} />
              ) : (
                <button
                  className="another-list-button"
                  onClick={(e) => toggleListForm(e)}
                >
                  Add Another List
                </button>
              )}
            </>
          ) : (
            <>
              {listForm ? (
                <ListForm toggleListForm={toggleListForm} />
              ) : (
                <button
                  className="another-list-button"
                  onClick={(e) => toggleListForm(e)}
                >
                  Add Another List
                </button>
              )}
            </>
          )}
        </div>
    </div>
  );
}

export default App;
