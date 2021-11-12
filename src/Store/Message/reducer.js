import { ADD_MESSAGE } from "./constants";
import { v4 as uuidv4 } from "uuid"
import { AUTHORS } from "../../Constants/constants";
const initialState = {
  messageList: {
    1: {
      messages: [{ text: "FirstMessage", author: AUTHORS.ME, key: uuidv4() }]
    },
    2: {
         messages: [
            { text: "FirstMessageHereToo!", author: AUTHORS.ME, key: uuidv4() },
        ],
     
    },
  },
};

const messageListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const currentList = state.messageList[action.chatId] || [];
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [action.chatId]: [
            ...currentList,
            {
              ...action.message,
              id: `${action.chatId}${currentList.length}`,
            },
          ],
        },
      };
    }
    default:
      return state;
  }
};

export default messageListReducer;