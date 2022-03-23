import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dialog from "./components/Dialogs/Dialog/Dialog";
import Message from "./components/Dialogs/Message/Message";


// DATA
let contacts = [
    {
        id: 1,
        name: "🤠 Pevel Durov",
    },
    {
        id: 2,
        name: "🥶 Elon Musk"
    }
];
let messages = [
    {
        chatId: 1,
        message: ["➡️ Hello"],
    },
    {
        chatId: 2,
        message: ["➡️ How's life, pal?"]
    }
];

// Arrays of messages and dialogs, we pass it to our <Dialog /> component via props
let messagesElements = messages.map(message => <Message message={message.message}/>);
let dialogsElements = contacts.map(contact => <Dialog id={contact.id} name={contact.name}/>);



ReactDOM.render(
  <React.StrictMode>
    <App dialogsElements = {dialogsElements} messagesElements={messagesElements} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
