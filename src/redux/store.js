import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    ProfilePage: {
      posts: [
        { id: 1, message: "You remind me of my bimmer", likes: "❤ 240" },
        {
          id: 2,
          message: "A lot of trunk space, the perfect two seater",
          likes: "❤ 124",
        },
        {
          id: 3,
          message: "You got a lot of drive I'm trying to keep up",
          likes: "❤ 420",
        },
      ],
      newPostText: "Sample Text",
    },
    DialogsPage: {
      dialogs: [
        { id: 1, name: "Sample User 1" },
        { id: 2, name: "Sample User 2" },
        { id: 3, name: "Sample User 3" },
        { id: 4, name: "Sample User 4" },
        { id: 5, name: "Sample User 5" },
      ],
      messages: [
        { id: 1, message: "hi" },
        { id: 2, message: "how ya" },
        { id: 3, message: "i'm fine" },
        { id: 4, message: "thanks" },
        { id: 5, message: "where is my money Lebowsky?!" },
      ],
      newMessageText: "Sample Message Text",
    },
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
    this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
