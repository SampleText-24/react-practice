const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: newMessage }],
      };

    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessageBody) => ({
  type: ADD_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
