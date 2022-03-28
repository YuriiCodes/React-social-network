const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


let initialState = {
    posts: [{id: 1, text: "Hello props!", likes: 93}, {id: 2, text: "Hello props! SECOND COMPONENT!", likes: 18},],
    newPostText: ""
};
const profileReducer = (state = initialState, action) => {

    // We copy state, because reducer is a pure function, and pure function takes in some data and
    // outputs result, but cannot change imputed data. That property is called immutability

    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts]
            let newPost = {
                id: 5, text: stateCopy.newPostText, likes: 0
            }
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:

            // Here we don't deep copy posts array, because in this reducer case, only post text is updated.
            // If we deep copy state.posts, it will lead to re-rendering posts array, and we don't need it in this case.
            let stateCopy = {...state};
            stateCopy.newPostText = (action.newPostText);
            return stateCopy;
        default:
            return stateCopy;
    }
}

export default profileReducer;

export const addPostActionCreator = () => ({
    type: ADD_POST
});
export const postChangeActionCreator = (newPostText) => ({
    type: UPDATE_NEW_POST_TEXT, newPostText
});