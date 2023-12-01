import { createSlice } from "@reduxjs/toolkit";

export const dialogReducer = createSlice({
  name: 'dialogs',
  initialState: {
    dialogs: [
      { id: "1", name: "Anna" },
      { id: "2", name: "Ivan" },
      { id: "3", name: "Sveta" },
      { id: "4", name: "Sasha" },
      { id: "5", name: "Andrey" },
      { id: "6", name: "Valera" },
    ],
    messages: [
      { id: "1", message: "Hi" },
      { id: "2", message: "How is your it-kamasutra?" },
      { id: "3", message: "Yo" },
      { id: "4", message: "Yo" },
      { id: "5", message: "Yo" },
      { id: "6", message: "Yo" },
    ],
    messageText: "",
  },
  reducers:{
    addMessage: (state) => {
      let num = state.messages.length;
      num++;

      const message = {
        id: num,
        message: state.messageText,
      };

      state.messages = [...state.messages, message];
      state.messageText = '';
    },

    updateNewMessage: (state, action) => {
      state.messageText = action.payload;
    },
  }
});

export const { addMessage, updateNewMessage } = dialogReducer.actions;

export default dialogReducer.reducer;

// const ADD_MESSAGE = "ADD-MESSAGE";
// const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

// const initialState = {
  // dialogs: [
  //   { id: "1", name: "Anna" },
  //   { id: "2", name: "Ivan" },
  //   { id: "3", name: "Sveta" },
  //   { id: "4", name: "Sasha" },
  //   { id: "5", name: "Andrey" },
  //   { id: "6", name: "Valera" },
  // ],
  // messages: [
  //   { id: "1", message: "Hi" },
  //   { id: "2", message: "How is your it-kamasutra?" },
  //   { id: "3", message: "Yo" },
  //   { id: "4", message: "Yo" },
  //   { id: "5", message: "Yo" },
  //   { id: "6", message: "Yo" },
  // ],
  // messageText: "",
// };

// export const dialogReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_MESSAGE:{
        // let num = state.messages.length;
        // num++;

        // const message = {
        //   id: num,
        //   message: state.messageText,
        // };

        // return{
        //   ...state,
        //   messages: [...state.messages, message],
        //   messageText: ''
        // };
//       }

//     case UPDATE_NEW_MESSAGE_TEXT:{
//       return{
//         ...state,
//         messageText: action.newMessageText
//       };
//     }

//     default:
//       return state;
//   }
// };

// export const addMessageActionCreator = () => {
//   return { type: ADD_MESSAGE };
// };

// export const updateNewMessageTextActionCreator = (text) => {
//   return { type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text };
// };
