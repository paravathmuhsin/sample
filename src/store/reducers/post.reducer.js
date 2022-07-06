import { GET_POSTS } from "../types/post.type";

const initilaState = {
  posts: [],
};

const postReducer = (state = initilaState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        posts: action.payload,
      };

    default:
      return state;
  }
};
export default postReducer;
