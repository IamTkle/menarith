import React from "react";
import "./scss/App.scss";

//import { io } from "socket.io-client";

//const SERVER_DOMAIN = "http://localhost:8080";

//const socket = io(SERVER_DOMAIN, { withCredentials: true });

function App() {
  const [user, setUser] = React.useState("guest1234@menarith:~");

  return (
    <div className="main">
      <div className="title">
        <div className="title__text">menarith</div>
      </div>
      <div className="terminal">
        <div className="terminal__titlebar">{user}</div>
        <div className="terminal__menubar">
          <button className="terminal__option">Login</button>
          <button className="terminal__option">Sign up</button>
          <button className="terminal__option">Settings</button>
        </div>
        <div className="prompt">
          <button className="prompt__button--game">find game</button>
          <button className="prompt__button--prac">practice</button>
        </div>
        <span className="prompt__text">{user}</span>
      </div>
    </div>
  );
}

export default App;
