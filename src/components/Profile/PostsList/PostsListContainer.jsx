import {addPostActionCreator, postChangeActionCreator} from "../../../data/profileReducer";
import PostsList from "./PostsList";

function PostsListContainer(props){

    let state = props.store.getState();
    let newPostText = state.profilePage.newPostText;
    let posts = state.profilePage.posts;
    let addPost = () => {
        props.store.dispatch(addPostActionCreator()).bind(props.store)
    }
    let updateNewPostText  = (text) => {
        props.store.dispatch(postChangeActionCreator(text));
    }
    return (
       // <PostsList addPost={addPost}  updateNewPostText={updateNewPostText} posts={props.posts}  dispatch={props.dispatch} newPostText={props.newPostText}/>
       <PostsList addPost={addPost}  updateNewPostText={updateNewPostText} posts={posts} newPostText={newPostText}/>
    )
}
export default PostsListContainer;