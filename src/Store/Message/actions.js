import { ADD_MESSAGE } from "./constants";
import { AUTHORS } from "../../Constants/constants";
import { v4 as uuidv4 } from 'uuid';
export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
});
export const addMessageWithThunk = (chatId, message) => (dispatch, getState) => {
  console.log(message);
    dispatch(addMessage(chatId, message));
    if (message.author !== AUTHORS.BOT) {
      const botMessage = { text: test, author: AUTHORS.BOT, key: uuidv4()};
          console.log('asdasdasd');

       setTimeout(() => dispatch(addMessage(chatId, botMessage)), 2000);
    }
  }
