import { combineReducers,createStore } from "redux";
import chatsReducer from "./Chats/reducer";
import messageListReducer from "./Message/reducer";
import { profileReducer } from "./Profile/reducer";
import thunk from 'redux-thunk';
import { compose } from "redux";
import { applyMiddleware } from "redux";
import { addMessageWithThunk } from "./Message/actions"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    combineReducers ({
        profile:profileReducer,
        chats: chatsReducer,
        messages:messageListReducer,
}),
applyMiddleware(thunk,addMessageWithThunk))
;