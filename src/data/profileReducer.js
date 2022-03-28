const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


let initialState = {
    posts: [
        {id: 1, text: "Hello props!", likes: 93},
        {id: 2, text: "Hello props! SECOND COMPONENT!", likes: 18},
    ],
    newPostText: ""
};

const profileReducer = (state = initialState, action) => {

    // We copy state, because reducer is a pure function, and pure function takes in some data and
    // outputs result, but cannot change imputed data. That property is called immutability
    let stateCopy = {...state};
    stateCopy.posts = [...state.posts]
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                text: stateCopy.newPostText,
                likes: 0
            }
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:
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
    type: UPDATE_NEW_POST_TEXT,
    newPostText
});