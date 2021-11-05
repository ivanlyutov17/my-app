import { combineReducers,createStore } from "redux";
import chatsReducer from "./Chats/reducer";
import messageListReducer from "./Message/reducer";
import { profileReducer } from "./Profile/reducer";
import { composeWithDevTools } from "redux-devtools-extension"

export const store = createStore(
    combineReducers ({
        profile:profileReducer,
        chats: chatsReducer,
        messages:messageListReducer,
}),
composeWithDevTools()
);