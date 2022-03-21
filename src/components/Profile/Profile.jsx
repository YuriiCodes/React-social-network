import classes from "./Profile.module.css";
import PostsList from "./PostsList/PostsList";
function Profile(){
    return(
        <div className={classes.content}>
            <div className="cover">
                <img src="https://chance4traveller.com/wp-content/uploads/2021/05/dubai-01.jpg" alt="your cover"/>
            </div>
            <PostsList/>

        </div>
    )
}
export default Profile;