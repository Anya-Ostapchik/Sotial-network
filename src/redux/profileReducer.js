import { createSlice } from "@reduxjs/toolkit";

export const profileReducer = createSlice({
    name: 'profile',
    initialState: {
        posts: [
            { id: 1, message: "Hi, it's my first post", countLikes: 1 },
            { id: 2, message: "How are you?", countLikes: 10 },
            { id: 3, message: "I'm Anya", countLikes: 18 },
        ],
        profile: null,
        postMessage: ""
    },
    reducers: {
        addPost: (state) => {
            let id = state.posts.length;
            id++;

            const post = {
                id: id, 
                message: state.postMessage, 
                countLikes: 0
            }

            state.posts = [...state.posts, post];
            state.postMessage = '';
        },
        updateNewPostText: (state, action) => {
            state.postMessage = action.payload;
        },
        setUserProfile: (state, action) => {
            state.profile = action.payload;
        }
    }
});

export const {addPost, updateNewPostText, setUserProfile} = profileReducer.actions;

export default profileReducer.reducer;

// export const { addMessage, updateNewMessage } = dialogReducer.actions;

// export default dialogReducer.reducer;

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// const initialState = {
    // posts: [
    //     { id: 1, message: "Hi, it's my first post", countLikes: 1 },
    //     { id: 2, message: "How are you?", countLikes: 10 },
    //     { id: 3, message: "I'm Anya", countLikes: 18 },
    // ],
    // postMessage: ""
// }

// export const profileReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_POST:{
                // let id = state.posts.length;
                // id++;
                // const post = {
                //     id: id, 
                //     message: state.postMessage, 
                //     countLikes: 0
                // }

                // return{
                //     ...state,
                //     posts: [...state.posts, post],
                //     postMessage: ''
                // };
//             }
//         case UPDATE_NEW_POST_TEXT:{
//                 return{
//                     ...state,
//                     postMessage: action.newPostText
//                 };
//             }
//         default:
//             return state;
//     }
// }

// export const addPostActionCreator = () => {
//     return {type: ADD_POST};
// }

// export const updateNewPostTextActionCreator = (text) => {
//     return {type: UPDATE_NEW_POST_TEXT, newPostText: text};
// }