import React from "react";
import "./css/App.css";
import { Background, Navbar } from "./components";
import { Weather } from "./containers";
import BackgroundImage from "./images/background.jpg";
function App() {
  return (
    <div className="App">
      <Background image={BackgroundImage} />
      <Navbar />
      <Weather />
    </div>
  );
}

export default App;
