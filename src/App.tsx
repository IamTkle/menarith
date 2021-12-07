import React from "react";
import "./scss/App.scss";

//import { io } from "socket.io-client";

//const SERVER_DOMAIN = "http://localhost:8080";

//const socket = io(SERVER_DOMAIN, { withCredentials: true });

enum GAME_OPTION {
  FIND_GAME,
  PRACTICE,
}

type gameParameters = {
  mode: "add" | "subtract" | "multiply" | "divide" | "all";
};

interface GameOptionsState {
  option?: GAME_OPTION;
  params?: gameParameters;
}

type GameOptionsAction = { type: "choose" };

const gameOptionsInitialState: GameOptionsState = {
  option: undefined,
  params: undefined,
};

const gameOptionReducer = (
  optionState: GameOptionsState,
  action: GameOptionsAction
) => {
  switch (action.type) {
    case "choose":
      return { ...optionState, option: GAME_OPTION.FIND_GAME };
    default:
      return { ...optionState };
  }
};

function App() {
  const [user, setUser] = React.useState("guest1234@menarith:~");
  const [gameOption, gameOptionDispatcher] = React.useReducer(
    gameOptionReducer,
    gameOptionsInitialState
  );

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
        <span className="prompt__text">
          {user}

          <span className="prompt__cursor"></span>
        </span>
      </div>
    </div>
  );
}

export default App;
