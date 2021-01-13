import { v4 as uuidv4 } from "uuid";
const initialState = [];

const cardReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CREATE_CARD":
      return [...state, { id: uuidv4(), title: payload.title }];

    default:
      return state;
  }
};

export default cardReducer;
