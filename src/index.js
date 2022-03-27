import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./data/reduxStore"

let reRenderEntireTree = (state) =>{ ReactDOM.render(
    <React.StrictMode>
        <App store={store}  state = {state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
)};

// this arrow function will be executed, caliing reRenderEntireTree method with new state, when state changes
store.subscribe( () => reRenderEntireTree(store.getState()));
reRenderEntireTree(store.getState());
store.getState()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
