import {combineReducers, createStore} from "redux";

import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
<<<<<<< HEAD
    sidebar:sidebarReducer,
=======
    sidebar: sidebarReducer,
>>>>>>> 1b57fc94827862bddc6cfff3bf5ca2e81360f9dc
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;
export default store;