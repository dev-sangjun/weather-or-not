export const SET_KEYWORD = "FAVORITES/SET_KEYWORD";

export const setKeyword = keyword => ({
  type: SET_KEYWORD,
  keyword,
});

const initialState = "";

export default function search(state = initialState, action) {
  switch (action.type) {
    case SET_KEYWORD:
      return action.keyword;
    default:
      return state;
  }
}
