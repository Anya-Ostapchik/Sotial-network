import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//     friends: [s
//         { id: 1, name: "Anna", img: "https://cpad.ask.fm/340/353/663/-429996981-1sm8nbc-8ajpta4850ffpkp/original/avatar.jpg" },
//         { id: 2, name: "Ivan", img: "https://avatars.mds.yandex.net/i?id=398f4cd6c3ccdd074bf4a24f73744f609c4b3b90-9242319-images-thumbs&n=13" },
//         { id: 3, name: "Sveta", img: "https://vjoy.cc/wp-content/uploads/2020/12/1530339417_10.jpg" },
//     ]
// }

// export const sidebarReducer = (state = initialState, action) => {
//     return state;
// };

export const sidebarReducer = createSlice({
    name: 'sidebar',
    initialState: {
        friends: [
            { id: 1, name: "Anna", img: "https://cpad.ask.fm/340/353/663/-429996981-1sm8nbc-8ajpta4850ffpkp/original/avatar.jpg" },
            { id: 2, name: "Ivan", img: "https://avatars.mds.yandex.net/i?id=398f4cd6c3ccdd074bf4a24f73744f609c4b3b90-9242319-images-thumbs&n=13" },
            { id: 3, name: "Sveta", img: "https://vjoy.cc/wp-content/uploads/2020/12/1530339417_10.jpg" },
        ]
    },
    reducers: (state) => {
        return state;
    }
});

export default sidebarReducer.reducer;