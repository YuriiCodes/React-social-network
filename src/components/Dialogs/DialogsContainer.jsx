import React from "react";
import Dialogs from "./Dialogs";
import {messageChangeActionCreator, sendMessageActionCreator} from "../../data/dialogsReducer";

function DialogsContainer(props) {
    let state = props.store.getState();
    let messages = state.dialogsPage.messages;
    let contacts = state.dialogsPage.contacts;
    let newMessageText = state.dialogsPage.newMessageText;

    debugger;
    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }
    let updateMessage = (newMessage) => {
        props.dispatch(messageChangeActionCreator(newMessage));
    }

    return (<Dialogs store={props.store} messages={messages} contacts={contacts} newMessageText={newMessageText}
                     sendMessage={sendMessage} updateMessage={updateMessage}
    />);
};


export default DialogsContainer;