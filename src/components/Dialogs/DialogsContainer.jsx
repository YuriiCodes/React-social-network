import React from "react";
import Dialogs from "./Dialogs";
import {messageChangeActionCreator, sendMessageActionCreator} from "../../data/dialogsReducer";
import StoreContext from "../../StoreContext";


function DialogsContainer(props) {
    return (<StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let messages = state.dialogsPage.messages;
                let contacts = state.dialogsPage.contacts;
                let newMessageText = state.dialogsPage.newMessageText;


                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                };
                debugger;
                let updateMessage = (newMessage) => {
                    store.dispatch(messageChangeActionCreator(newMessage));
                }
                return (<Dialogs store={store} messages={messages} contacts={contacts} newMessageText={newMessageText}
                                 sendMessage={sendMessage} updateMessage={updateMessage}
                    />)
            }}
        </StoreContext.Consumer>);
};


export default DialogsContainer;