import { createSlice } from "@reduxjs/toolkit";

export const usersReducer = createSlice({
    name: 'users',
    initialState: {
        users: [],
        pageSize: 4,
        totalUsersCount: 40,
        currentPage: 1,
        isFetching: false
    },
    reducers:{
        currentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        follow: (state, action) => {
            state.users.map(u => {
                if(u.id === action.payload){
                    return u.followed = true;
                }
                return u;
            })
        },
        unfollow: (state, action) => {
            state.users.map(u => {
                if(u.id === action.payload){
                    return u.followed = false;
                }
                return u;
            })
        },
        setUsers: (state, action) => {
            state.users = [...action.payload];
            // state.totalUsersCount = action.payload.totalCount;
        },
        toggleIsFetching: (state, action) => {
            state.isFetching = action.payload;
        }
    }
});

export const { follow, unfollow, currentPage, setUsers, toggleIsFetching } = usersReducer.actions;

export default usersReducer.reducer;

// const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW';
// const SET_USERS = 'SET_USERS';

// const initialState = {
//     users: [
//         { id: 1, followed: true, fullname: "Anna O.", status: "I'm a boss", location: {city: "Minsk", country: "Belarus"}},
//         { id: 1, followed: true, fullname: "Ivan CH.", status: "I'm a boss too", location: {city: "Moskow", country: "Russia"}},
//         { id: 1, followed: true, fullname: "Olga O.", status: "I'm a boss too", location: {city: "Batumi", country: "Georgia"}}
//     ]
// }

// export const usersReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case FOLLOW:{
//             return{
//                 ...state,
//                 users: [...state.users.map(user => {
//                     if(user.id === action.userID){
//                         return {user, followed: true};
//                     }
//                     return user;
//                 })],
//             };
//         }
//         case UNFOLLOW:{
//             return{
//                 ...state,
//                 users: [...state.users.map(user => {
//                     if(user.id === action.userID){
//                         return {user, followed: false};
//                     }
//                     return user;
//                 })],
//             };
//         }
//         case SET_USERS:{
//             return{
//                ...state, users: [...state.users, ...action.users]
//             };
//         }
//         default:
//             return state;
//     }
// }

// export const followAC = (userID) => {
//     return {type: FOLLOW, userID};
// }

// export const unfollowAC = (userID) => {
//     return {type: UNFOLLOW, userID};
// }

// export const setUsersAC = (users) => {
//     return {type: SET_USERS, users};
// }