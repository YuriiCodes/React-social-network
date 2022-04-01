const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const CHANGE_PAGE = "CHANGE_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_PAGINATION_ARRAY = "SET_PAGINATION_ARRAY";
const SET_LAST_PAGINATION_ELEMENT = "SET_LAST_PAGINATION_ELEMENT";
let initialState = {
    users: [],
    currentPage: 1,
    usersPerPage: 5,
    totalUsersCount: 16,
    currentPaginationArray:[1, 2, 3],
    lastPaginationElement: 0

};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            };
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_USERS:
            return {...state, users: [ ...action.users]}

        case CHANGE_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case SET_PAGINATION_ARRAY:
            return {...state, currentPaginationArray: [...action.currentPaginationArray]}
        case SET_LAST_PAGINATION_ELEMENT:
            return {...state, lastPaginationElement: action.lastPaginationElement}

        default:
            return state;
    }
}

export const setLastPaginationElementAC = (lastPaginationElement) => ({type: SET_LAST_PAGINATION_ELEMENT, lastPaginationElement})
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (page) => ({type: CHANGE_PAGE, currentPage: page});
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setPaginationArrayAC = (paginationArray) => ({type: SET_PAGINATION_ARRAY, currentPaginationArray: paginationArray});

export default usersReducer;
