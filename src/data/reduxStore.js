import {combineReducers, createStore} from "redux";

import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import dialogsReducer from "./dialogsReducer";

let reducers = combineReducers({profilePage: profileReducer, sidebar:sidebarReducer, dialogsPage: dialogsReducer});

let store = createStore(reducers);

window.store = store;
export default store;