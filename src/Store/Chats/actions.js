import { ADD_CHAT,DELETE_CHAT } from "./constants"
import { v4 as uuidv4 } from 'uuid'
import { deleteMessages, initMessages } from "../Message/actions";
import { AUTHORS } from "../../Constants/constants";

export const addChat = (id,name) => ({
    type: ADD_CHAT,
    id,
    name,
});
export const deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    chatId,
});
export const deleteChatWithThunk = (chatId) => (dispatch, getState) => {
    dispatch(deleteChat(chatId));
    dispatch(deleteMessages(chatId));
}

export const AddChatWithThunk = (name) => (dispatch, getState) => {
    const id = uuidv4()

    const botMessage = {
        text: "test"
        , author: AUTHORS.BOT, key: uuidv4()
    };
    dispatch(addChat(id, name));
    dispatch(initMessages(id, botMessage));
}
   