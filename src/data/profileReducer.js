const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                text: state.newPostText,
                likes: 0
            }
            state.posts.push(newPost);
            state.newPostText = "";
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = (action.newPostText);
            // this._state.profilePage.newPostText = (action.newPostText);
            return state;

        default:
            console.log("You've entered wrong type in dispatch action. Please fix that!")
            return state;
    }
}

export default profileReducer;

export const addPostActionCreator = () => ({
    type: ADD_POST
});
export const postChangeActionCreator = (newPostText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText
});