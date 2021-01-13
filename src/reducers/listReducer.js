const initialState = [];

const listReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CREATE_LIST":
      return [
        ...state,
        {
          id: payload.id,
          title: payload.title,
          cards: [],
        },
      ];

    case "DELETE_LIST":
      const copyState = [...state];
      const i = copyState.findIndex((s) => s.id === payload.id);
      copyState.splice(i, 1);
      return [...copyState];

    case "EDIT_LIST":
      const cpyState = [...state];
      const j = cpyState.findIndex((s) => s.id === payload.id);
      cpyState[j].title = payload.title;
      return [...cpyState];

    case "ADD_CARD_IN_LIST":
      const cState = [...state];
      const k = cState.findIndex((s) => s.id === payload.listId);
      cState[k].cards.push({ title: payload.cardTitle, id: payload.cardId });
      return [...cState];

    case "DELETE_CARD_FROM_LIST":
      const dupState = [...state];
      const listIndex = dupState.findIndex((s) => s.id === payload.listId);
      const cardIndex = dupState[listIndex].cards.findIndex(
        (s) => s.id === payload.cardId
      );
      dupState[listIndex].cards.splice(cardIndex, 1);
      return [...dupState];
    default:
      return state;
  }
};

export default listReducer;
