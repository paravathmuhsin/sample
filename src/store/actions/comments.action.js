import { getComments} from "../../services/Comments.service";
import { GET_COMMENTS } from "../types/comments.type.js"

export const getCommentsAction= () => (dispatch, getState) => {
  getComments().then((data) => {
    dispatch({
      type:GET_COMMENTS ,
      payload: data,
    });
  });
};
