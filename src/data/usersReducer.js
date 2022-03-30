const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

<<<<<<< HEAD
let initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
=======
// let initialState = {
//     users: []
// };
let initialState = {
    users: [
        {
            id: 1,
            photoUrl: "",
            following: true,
            fullName: "Dmitry k",
            location: {city: "Minsk", country: "Belarus"},
            status: "I am react teacher."
        }, {
            id: 2,
            photoUrl: "",
            following: true,
            fullName: "Max M",
            location: {city: "London", country: "UK"},
            status: "I am in London lol"
        }, {
            id: 3,
            photoUrl: "",
            following: false,
            fullName: "Arthur S",
            location: {city: "Amsterdam", country: "Holland"},
            status: "I love ML"
        }
    ]
};

const usersReducer = (state = initialState, action) => {
    debugger;
>>>>>>> 1b57fc94827862bddc6cfff3bf5ca2e81360f9dc
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
<<<<<<< HEAD
                    if (u.id === action.userId) {
                        return {...u, followed: true};
=======
                    if (u.id === action.userID) {
                        return {...u, following: true}
>>>>>>> 1b57fc94827862bddc6cfff3bf5ca2e81360f9dc
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
<<<<<<< HEAD
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
=======
                    if (u.id === action.userID) {
                        return {...u, following: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.user]};
>>>>>>> 1b57fc94827862bddc6cfff3bf5ca2e81360f9dc
        default:
            return state;
    }
}

<<<<<<< HEAD

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;
=======
export default usersReducer;

export const followActionCreator = (userID) => ({
    type: FOLLOW, userID
});
export const unFollowActionCreator = (userID) => ({
    type: UNFOLLOW, userID
});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});
>>>>>>> 1b57fc94827862bddc6cfff3bf5ca2e81360f9dc
