import profileReducer, {
  addPostActionCreator,
  deletePostActionCreator,
} from "./profile-reducer";
import React from "react";

let state = {
  // 1. input data
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
};

test("length of post should be incremented", () => {
  let action = addPostActionCreator("Sample text here");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(4);
});

test("message of new post should be correct", () => {
  let action = addPostActionCreator("Sample text here");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts[3].message).toBe("Sample text here");
});

test("after deleting length of post should be decremented", () => {
  let action = deletePostActionCreator(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(2);
});

test("after deleting length of post should't be decremented if id incorrect", () => {
  let action = deletePostActionCreator(25);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});
