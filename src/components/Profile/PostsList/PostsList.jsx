import classes from "./PostsList.css";
import Post from "./Post/Post";

function PostsList(){
    return (
        <div>
            <Post likes = "93" text="HELLO PROPS!"/>
            <Post likes = "18" text="HELLO PROPS! SECOND COMPONENT!"/>
        </div>
    )
}
export default PostsList;