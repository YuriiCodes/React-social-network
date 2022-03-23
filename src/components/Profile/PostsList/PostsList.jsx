import classes from "./PostsList.css";
import Post from "./Post/Post";

function PostsList(){
    let posts = [
        {id: 1, text:"Hello props!", likes: 93},
        {id: 2, text:"Hello props! SECOND COMPONENT!", likes: 18},
    ];
    let postsElements = posts.map(post =>  <Post likes = {post.likes} text={post.text}/>)
    return (
        <div>
            {postsElements};
        </div>
    )
}
export default PostsList;