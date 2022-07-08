import { getPosts } from "../../services/post.service";
import { GET_POSTS } from "../types/post.type";

export const getPostsAction = () => (dispatch, getState) => {
  getPosts().then((data) => {
    dispatch({
      type: GET_POSTS,
      payload: data,
    });
  });
};
