import { ADD_MESSAGE, INITAL_MESSAGE,DELETE_MESSAGES} from "./constants";
import { AUTHORS } from "../../Constants/constants";
import { v4 as uuidv4 } from 'uuid';


export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
});


export const initMessages = (chatId, message) => ({
  type: INITAL_MESSAGE,
  chatId,
  message
})

export const deleteMessages = (chatId) => ({
  type: DELETE_MESSAGES,
  chatId
})

export const addMessageWithThunk = (chatId, message) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message));
    if (message.author !== AUTHORS.BOT) {
      const botMessage = {
        text: "test"
        , author: AUTHORS.BOT, key: uuidv4()
      };

       setTimeout(() => dispatch(addMessage(chatId, botMessage)), 2000);
    }
  }
