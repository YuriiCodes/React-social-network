import User from "./User/User";
import classes from "./User/User.module.css";
import React from "react";

function Users(props) {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                // photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4E_d2WpFzHjpmcjH_Fi4epAj6z4ul2c0BJQ&usqp=CAU",
                photoUrl: "",
                followed: true,
                fullName: "Igor V",
                status: "I am Igor!",
                location: {city: "Kyiv", country: "Ukraine"}
            },
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <User id={u.id} photoUrl={u.photoUrl} followed={u.followed}
                                           fullName={u.fullName} status={u.status} follow={props.follow}
                                           unfollow={props.unfollow} city={u.location.city} country={u.location.country}/>)
                // props.users.map(u => <div className={classes.user}>
                //     <div className={classes.photoAndSubscribe}>
                //         <div className={classes.avatar}></div>
                //         <span className={classes.photoUrl}>{props.photoUrl}</span>
                //
                //         {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                //             <button onClick={() => props.follow(u.id)}>follow</button>}
                //
                //
                //     </div>
                //
                //     <div className={classes.userInfo}>
                //         <div className={classes.userPersonalInfo}>
                //             <div>
                //                 <span className={classes.name}>{u.fullName}</span>
                //             </div>
                //             <div>
                //                 <span className={classes.status}>{u.status}</span>
                //             </div>
                //
                //         </div>
                //         <div className={classes.userLocation}>
                //             <div>
                //                 <span className={classes.country}>{u.country}</span>
                //
                //             </div>
                //             <div>
                //                 <span className={classes.city}>{u.city}</span>
                //
                //             </div>
                //         </div>
                //     </div>
                // </div>)
            }
        </div>
    )
};


export default Users;