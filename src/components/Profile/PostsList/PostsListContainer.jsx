import {addPostActionCreator, postChangeActionCreator} from "../../../data/profileReducer";
import PostsList from "./PostsList";
import StoreContext from "../../../StoreContext";

function PostsListContainer(props) {
    return (<StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let newPostText = state.profilePage.newPostText;
                let posts = state.profilePage.posts;

                let addPost = () => {
                    store.dispatch(addPostActionCreator()).bind(props.store)
                }
                let updateNewPostText = (text) => {
                    store.dispatch(postChangeActionCreator(text));
                }
                return (<PostsList addPost={addPost} updateNewPostText={updateNewPostText} posts={posts}
                                   newPostText={newPostText}/>)
            }}
        </StoreContext.Consumer>)
}

export default PostsListContainer;