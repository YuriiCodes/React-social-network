import classes from "./PostsList.css";
import Post from "./Post/Post";
import NewPostForm from "./newPostForm/newPostForm";

function PostsList(props){

    let postsElements = props.posts.map(post =>  <Post likes = {post.likes} text={post.text}/>)
    return (
        <div className={classes.postsSection}>
            <NewPostForm  dispatch={props.dispatch} addPost={props.addPost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default PostsList;