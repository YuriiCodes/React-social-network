const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";


let initialState = {
    messages: [
        {chatId: 1, message: ["Hello"],},
        {chatId: 2, message: [" How's life, pal?"]}],
    contacts: [
        {id: 1, name: "🤠 Pevel Durov",},
        {id: 2, name: "🥶 Elon Musk"}
    ],
    newMessageText: ""
};
const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.messages = [...state.messages];

    switch (action.type){
        case UPDATE_NEW_MESSAGE_TEXT:
            // this._state.dialogsPage.newMessageText = action.newMessageText;
            stateCopy.newMessageText = action.newMessageText;
            return stateCopy;
        case SEND_MESSAGE:
            stateCopy.messages = [...state.messages];
            let newMessage = {chatId: 1, message: [state.newMessageText]};
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = "";
            return stateCopy;
        default:
            return stateCopy;
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
