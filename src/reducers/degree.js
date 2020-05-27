export const TOGGLE_DEGREE = "DEGREE/TOGGLE_DEGREE";

export const toggleDegree = () => ({
  type: TOGGLE_DEGREE,
});

export const CELSIUS = "celsius";
export const FAHRENHEIT = "fahrenheit";

const updateLocalStorage = state =>
  localStorage.setItem("weather-or-not/degree", state);

const initialState = CELSIUS;

export default function degree(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    case TOGGLE_DEGREE:
      newState = state === CELSIUS ? FAHRENHEIT : CELSIUS;
      updateLocalStorage(newState);
      return newState;
    default:
      return state;
  }
}
