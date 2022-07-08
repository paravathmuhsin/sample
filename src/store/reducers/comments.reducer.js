import { GET_COMMENTS } from "../types/comments.type";

const initilaState = {
  comments: [],
};

const commentsReducer = (state = initilaState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        comments: action.payload,
      };

    default:
      return state;
  }
};
export default commentsReducer;
