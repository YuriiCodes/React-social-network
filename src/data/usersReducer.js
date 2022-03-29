const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

// let initialState = {
//     users: []
// };
let initialState = {
    users: [{
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
    }]
};

const usersReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case SET_USERS:
            debugger;

            // let stateCopy = {...state};
            // stateCopy.users = [...state.users];
            // stateCopy.users.push(...action.users);
            // return stateCopy;

            let newState ={...state, users: [...state.users, ...action.users]};
            debugger;
            return newState;
        case FOLLOW:
            return {
                ...state,
                // Two code lines below are equal
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, following: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, following: false}
                    }
                    return u;
                })
            }
        default:
            return state;
    }
}

export default usersReducer;

export const followActionCreator = (userID) => ({
    type: FOLLOW, userID
});
export const unFollowActionCreator = (userID) => ({
    type: UNFOLLOW, userID
});
export const setUsersActionCreator = (users) => {
    debugger;
    return {
        type: SET_USERS,
        users
    }
}