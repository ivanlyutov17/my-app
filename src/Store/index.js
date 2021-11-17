import { combineReducers,createStore } from "redux";
import chatsReducer from "./Chats/reducer";
import messageListReducer from "./Message/reducer";
import { profileReducer } from "./Profile/reducer";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { applyMiddleware } from "redux";
import storage from 'redux-persist/lib/storage';
import { compose } from "redux";
import gistsReducer from "./Gists/reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
    key: 'root',
    storage,
};
const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messageListReducer,
    gists:gistsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store);