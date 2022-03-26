let store = {
    _state: {
        dialogsPage: {
            messages: [
                {chatId: 1, message: ["Hello"],},
                {chatId: 2, message: [" How's life, pal?"]}],
            contacts: [
                {id: 1, name: "🤠 Pevel Durov",},
                {id: 2, name: "🥶 Elon Musk"}],
            newMessageText: ""
        },
        profilePage: {
            posts: [
                {id: 1, text: "Hello props!", likes: 93},
                {id: 2, text: "Hello props! SECOND COMPONENT!", likes: 18},
            ],
            newPostText: ""
        }
    },
    _reRenderEntireTree() {
        console.log('state has change!');
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observerFn) {
        this._reRenderEntireTree = observerFn; //observer pattern
    },
    dispatch(action) {
        switch (action.type){
            case "ADD-POST":
                let newPost = {
                    id: 5,
                    text: this._state.profilePage.newPostText,
                    likes: 0
                }
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = "";
                this._reRenderEntireTree(this._state);
                break;
            case "UPDATE-NEW-POST-TEXT":
                this._state.profilePage.newPostText = (action.newPostText);
                this._reRenderEntireTree(this._state);
                break;
            case "GET-STATE":
                return this._state;
            case "UPDATE-NEW-MESSAGE-TEXT":
                this._state.dialogsPage.newMessageText = action.newMessageText;
                this._reRenderEntireTree(this._state);
                break;
            case "SEND-MESSAGE":
                let newMessage = {chatId: 1, message: [this._state.dialogsPage.newMessageText]};
                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newMessageText = "";
                this._reRenderEntireTree(this._state);
                break;
            default:
                console.log("You've entered wrong type in dispatch action. Please fix that!")
        }
    },

    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         text: this._state.profilePage.newPostText,
    //         likes: 0
    //     }
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = "";
    //     this._reRenderEntireTree(this._state);
    // },
    // updateNewPostText(newPostText) {
    //     this._state.profilePage.newPostText = (newPostText);
    //     this._reRenderEntireTree(this._state);
    // },
    // updateNewMessageText(newMessageText) {
    //     this._state.dialogsPage.newMessageText = newMessageText;
    //     this._reRenderEntireTree(this._state);
    // },
    // sendMessage() {
    //     let newMessage = {chatId: 1, message: [this._state.dialogsPage.newMessageText]};
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._state.dialogsPage.newMessageText = "";
    //     this._reRenderEntireTree(this._state);
    // },
}
window.store = store;
export default store;