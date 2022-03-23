import classes from "./Profile.module.css";
import PostsList from "./PostsList/PostsList";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <PostsList/>
        </div>
    )
}

export default Profile;