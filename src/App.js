import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUTCTime } from "./reducers";
import "./css/App.css";
import { Navbar } from "./components";
import { Favorites, Search } from "./containers";
import { GlobalStyle } from "./global";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateUTCTime());
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Search />
      <Favorites />
    </div>
  );
};

export default App;
