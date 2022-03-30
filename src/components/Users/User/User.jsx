import classes from "./User.module.css"
function User(props) {
    debugger;
    return (
        <div className={classes.user}>
            <div className={classes.photoAndSubscribe}>
                <div className={classes.avatar}></div>
                <span className={classes.photoUrl}>{props.photoUrl}</span>

                {props.followed ? <button onClick={() => props.unfollow(props.id)}>Unfollow</button> :
                    <button onClick={() => props.follow(props.id)}>follow</button>}


            </div>

            <div className={classes.userInfo}>
                <div className={classes.userPersonalInfo}>
                    <div>
                        <span className={classes.name}>{props.fullName}</span>
                    </div>
                    <div>
                        <span className={classes.status}>{props.status}</span>
                    </div>

                </div>
                <div className={classes.userLocation}>
                    <div>
                        <span className={classes.country}>{props.country}</span>

                    </div>
                    <div>
                        <span className={classes.city}>{props.city}</span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default User