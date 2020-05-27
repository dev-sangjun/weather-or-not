import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers, { CELSIUS } from "./reducers";

const initState = () => {
  let favorites = localStorage.getItem("weather-or-not/favorites");
  let degree = localStorage.getItem("weather-or-not/degree");
  if (!favorites) {
    //if there are no favorite items, create new item
    favorites = [];
    localStorage.setItem("weather-or-not/favorites", JSON.stringify(favorites));
  }
  if (!degree) {
    degree = CELSIUS;
    localStorage.setItem("weather-or-not/degree", degree);
  }
  return { favorites: JSON.parse(favorites), degree };
};
//check weather once in a while, 시간, 온도
const store = createStore(reducers, initState(), composeWithDevTools());

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
