import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from "./reducers/comments.reducer";
import loginReducer from "./reducers/login.reducer";
import postReducer from "./reducers/post.reducer";

export default configureStore({
  reducer: {
    login: loginReducer,
    post: postReducer,
    comments: commentsReducer,
  },
});
