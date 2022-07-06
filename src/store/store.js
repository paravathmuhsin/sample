import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/login.reducer";
import postReducer from "./reducers/post.reducer";

export default configureStore({
  reducer: {
    login: loginReducer,
    post: postReducer,
  },
});
