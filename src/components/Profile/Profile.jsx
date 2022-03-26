import classes from "./Profile.module.css";
import PostsList from "./PostsList/PostsList";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <PostsList posts={props.state.posts}  dispatch={props.dispatch} newPostText={props.state.newPostText} />
        </div>
    )
}

export default Profile;