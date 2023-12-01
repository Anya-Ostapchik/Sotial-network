import { dialogReducer } from "./dialogReducer";
import { profileReducer } from "./profileReducer";
import { sidebarReducer } from "./sidebarReducer";

export const store = {
    _state: {
        dialogsPage: {
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
            messageText: ''
        },
        profilePage: {
            posts: [
                { id: 1, message: "Hi, it's my first post", countLikes: 1 },
                { id: 2, message: "How are you?", countLikes: 10 },
                { id: 3, message: "I'm Anya", countLikes: 18 },
            ],
            postMessage: ""
        },
        sidebar: {
            friends: [
                { id: 1, name: "Anna", img: "https://cpad.ask.fm/340/353/663/-429996981-1sm8nbc-8ajpta4850ffpkp/original/avatar.jpg" },
                { id: 2, name: "Ivan", img: "https://avatars.mds.yandex.net/i?id=398f4cd6c3ccdd074bf4a24f73744f609c4b3b90-9242319-images-thumbs&n=13" },
                { id: 3, name: "Sveta", img: "https://vjoy.cc/wp-content/uploads/2020/12/1530339417_10.jpg" },
            ]
        }
    },

    getState(){
        return this._state;
    },

    _callSubscribe(){},
    subscribe(observer) {
        this._callSubscribe = observer;
    },

    dispatch(action){
        // debugger;
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscribe(this._state);
    }
}