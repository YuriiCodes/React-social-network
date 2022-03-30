<<<<<<< HEAD
import classes from "./User.module.css"
function User(props) {
    debugger;
=======
import classes from "./User.module.css";
import React from "react";
function User(props) {
>>>>>>> 1b57fc94827862bddc6cfff3bf5ca2e81360f9dc
    return (
        <div className={classes.user}>
            <div className={classes.photoAndSubscribe}>
                <div className={classes.avatar}></div>
                <span className={classes.photoUrl}>{props.photoUrl}</span>
<<<<<<< HEAD

                {props.followed ? <button onClick={() => props.unfollow(props.id)}>Unfollow</button> :
                    <button onClick={() => props.follow(props.id)}>follow</button>}


=======
                { props.following ?  <button>Follow</button> : <button>Unfollow</button>}
>>>>>>> 1b57fc94827862bddc6cfff3bf5ca2e81360f9dc
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
<<<<<<< HEAD
                        <span className={classes.country}>{props.country}</span>
=======
                        <span className={classes.country}>{props.country}, </span>
>>>>>>> 1b57fc94827862bddc6cfff3bf5ca2e81360f9dc

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