import classes from "./PostsList.css";
import Post from "./Post/Post";
import NewPostForm from "./newPostForm/newPostForm";

function PostsList(props){

    let postsElements = props.posts.map(post =>  <Post likes = {post.likes} text={post.text}/>)
    return (
        <>
            <NewPostForm/>
            <div>
                {postsElements}
            </div>
        </>
    )
}
export default PostsList;