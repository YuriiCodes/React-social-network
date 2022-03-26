const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            // this._state.dialogsPage.newMessageText = action.newMessageText;
            state.newMessageText = action.newMessageText;
            return state;
        case SEND_MESSAGE:
            let newMessage = {chatId: 1, message: [state.newMessageText]};
            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;
        default:
            console.log("You've entered wrong type in dispatch action. Please fix that!");
            return state;
    }
};

export default dialogsReducer;

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
});

export const messageChangeActionCreator = (newMessageText) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText
})
