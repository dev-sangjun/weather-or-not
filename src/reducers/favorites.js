import isEmpty from "is-empty";
export const ADD_TO_FAVORITES = "FAVORITES/ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "FAVORITES/REMOVE_FROM_FAVORITES";
export const UPDATE_FAVORITE = "FAVORITES/UPDATE_FAVORITE";

export const addToFavorites = data => ({
  type: ADD_TO_FAVORITES,
  data,
});

export const removeFromFavorites = data => ({
  type: REMOVE_FROM_FAVORITES,
  data,
});

export const updateFavorite = data => ({
  type: UPDATE_FAVORITE,
  data,
});

const isFavoriteEqual = (fav1, fav2) =>
  fav1.lat === fav2.lat && fav1.lon === fav2.lon;

const filteredState = (state, data) =>
  state.filter(favorite => !isFavoriteEqual(favorite, data));

const isAlreadyAdded = (state, data) => {
  if (isEmpty(state)) return false;
  return filteredState(state, data).length !== state.length;
};
const updateLocalStorage = state =>
  localStorage.setItem("weather-or-not/favorites", JSON.stringify(state));

const showAlreadyAddedMessage = data =>
  alert(`${data.city} is already added to Favorites.`);

const deleteConfirmed = data => {
  return window.confirm(
    `Are you sure you want to delete ${data.city} from Favorites?`
  );
};

const initialState = [];

export default function favorites(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    case ADD_TO_FAVORITES:
      if (isAlreadyAdded(state, action.data)) {
        showAlreadyAddedMessage(action.data);
        return state;
      }
      newState = [...state, { ...action.data, isFavorite: true }];
      updateLocalStorage(newState);
      return newState;
    case REMOVE_FROM_FAVORITES:
      if (deleteConfirmed(action.data)) {
        newState = filteredState(state, action.data);
        updateLocalStorage(newState);
      }
      return newState;
    case UPDATE_FAVORITE:
      if (isAlreadyAdded(state, action.data)) {
        newState = state.map(favorite =>
          isFavoriteEqual(favorite, action.data) ? action.data : favorite
        );
        updateLocalStorage(newState);
      }
      return newState;
    default:
      return state;
  }
}
