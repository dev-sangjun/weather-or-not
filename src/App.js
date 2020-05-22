import React from "react";
import "./css/App.css";
import { Background, Navbar } from "./components";
import { Weather, Search } from "./containers";
import { GlobalStyle } from "./global";
import BackgroundImage from "./images/background.jpg";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Background image={BackgroundImage} />
      <Navbar />
      <Search />
      <Weather />
    </div>
  );
};

export default App;
