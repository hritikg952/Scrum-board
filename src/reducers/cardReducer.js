import { v4 as uuidv4 } from "uuid";
const initialState = [];

const cardReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CREATE_CARD":
      return [...state, { id: uuidv4(), title: payload.title }];
    case "DELETE_CARD":
      const dupState = [...state];
      const cardIndex = dupState.findIndex((s) => s.id === payload.id);
      dupState.splice(cardIndex, 1);
      return [...dupState];
    default:
      return state;
  }
};

export default cardReducer;
