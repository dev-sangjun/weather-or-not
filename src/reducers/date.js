import { getCurUTCDate } from "../utils";
export const GET_UTC_TIME = "TIME/GET_UTC_TIME";
export const UPDATE_UTC_TIME = "TIME/SET_CUR_UTC_TIME";

export const updateUTCTime = () => ({
  type: UPDATE_UTC_TIME,
});

const initialState = getCurUTCDate();

export default function date(state = initialState, action) {
  switch (action.type) {
    case UPDATE_UTC_TIME:
      return new Date(state.getTime() + 1000);
    default:
      return state;
  }
}
