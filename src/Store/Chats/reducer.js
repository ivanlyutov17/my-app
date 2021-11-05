import { ADD_CHAT } from "./constants";

const initialState = {
  chatList: {
      1: {
        id: 1,
        name: "Чат 1",
    },
    2: {
        id: 2,
        name: "Чат 2",
    },
    },
};

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            id: `id${state.chatList.length}`,
            name: action.name,
          },
        ],
      };
    default:
      return state;
  }
};

export default chatsReducer;