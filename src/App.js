import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUTCTime } from "./reducers";
import "./css/App.css";
import { Background, Navbar } from "./components";
import { Favorites, Search } from "./containers";
import { GlobalStyle } from "./global";
import BackgroundImage from "./images/background.jpg";
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
      <Background image={BackgroundImage} />
      <Navbar />
      <Search />
      <Favorites />
    </div>
  );
};

export default App;
