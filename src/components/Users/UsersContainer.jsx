import {connect} from "react-redux";
import Users from "./Users";
<<<<<<< HEAD
import {followAC, setUsersAC, unfollowAC} from "../../data/usersReducer";


let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);
=======
import {followActionCreator, setUsersActionCreator, unFollowActionCreator} from "../../data/usersReducer";
import React from "react";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followActionCreator(userID))
        },
        unFollow: (userID) => {
            dispatch(unFollowActionCreator(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);

>>>>>>> 1b57fc94827862bddc6cfff3bf5ca2e81360f9dc
