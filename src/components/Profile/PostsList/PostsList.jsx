import classes from "./PostsList.css";
import Post from "./Post/Post";

function PostsList(props){

    let postsElements = props.posts.map(post =>  <Post likes = {post.likes} text={post.text}/>)
    return (
        <div>
            {postsElements};
        </div>
    )
}
export default PostsList;