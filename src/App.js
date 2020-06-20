import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Countdown } from "./Countdown/Countdown";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Countdown
          timeTillDate="359 2020, 9:00:00 am"
          timeFormat="DDDD YYYY, h:mm:ss a"
        />
        <a href="https://www.florin-pop.com/blog/2019/05/countdown-built-with-react/">
          countdown link
        </a>
      </header>
    </div>
  );
}

export default App;
