import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreator, setUsersActionCreator, unFollowActionCreator} from "../../data/usersReducer";


let mapStateToProps = (state) => ({
    users: state.usersPage.users
})
let mapDispatchToProps = (dispatch) => ({
    follow: (userID) => {
        dispatch(followActionCreator(userID))
    },
    unFollow: (userID) => {
        dispatch(unFollowActionCreator(userID))
    },
    setUsers: (users) => {
        dispatch(setUsersActionCreator(users));
    }
})
let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;


