import { ADD_CHAT, DELETE_CHAT } from "./constants";
import { v4 as uuidv4 } from 'uuid';

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
    case DELETE_CHAT:
    //   // delete state.chatList.action.chatId[messages];
      delete state.chatList[action.chatId];

      return {
        ...state
      }

    case ADD_CHAT:
      return {
        ...state,
        chatList: {
        ...state.chatList,
          [action.id]: {
          ...state.chatList[action.id],
          id: action.id,
          name:action.name
          }
        }
      };
    default:
      return state;
  }
};

export default chatsReducer;