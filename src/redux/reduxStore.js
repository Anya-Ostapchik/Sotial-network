// import { legacy_createStore as createStore, combineReducers} from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';

export default configureStore({
  reducer:{
    profile: profileReducer,
    dialogs: dialogReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
  }
});

// const reducers = combineReducers({
//   dialogsPage: dialogReducer,
//   profilePage: profileReducer,
//   sidebar: sidebarReducer
// });

// export const store = createStore(reducers);