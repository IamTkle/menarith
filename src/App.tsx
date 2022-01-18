import React from "react";
import "./scss/App.scss";

//import { io } from "socket.io-client";

//const SERVER_DOMAIN = "http://localhost:8080";

//const socket = io(SERVER_DOMAIN, { withCredentials: true });

enum GAME_OPTION {
  NONE,
  FIND_GAME,
  PRACTICE,
}

type gameParameters = {
  mode: "add" | "subtract" | "multiply" | "divide" | "all";
};

interface GameOptionsState {
  option: GAME_OPTION;
  params?: gameParameters;
}

type GameOptionsAction = { type: "findGame" | "practice" };

type GameOptionsParams = { difficulty: 1 | 2 | 3 } | { matchmaking: "unrated" | "ranked" } | {mode: "none"} 

const gameOptionsInitialState: GameOptionsState = {
  option: GAME_OPTION.NONE,
  params: undefined,
};

const gameOptionReducer = (
  optionState: GameOptionsState,
  action: GameOptionsAction
) => {
  switch (action.type) {
    case "findGame":
      return { ...optionState, option: GAME_OPTION.FIND_GAME };
    case "practice":
      return { ...optionState, option: GAME_OPTION.PRACTICE };
    default:
      return { ...optionState };
  }
};

const paramsArray:GameOptionsParams[] = [{mode: "none"}, {matchmaking: "unrated"}, {difficulty: 1}]

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
          <button onClick={() => gameOptionDispatcher({type: "findGame"})} className="prompt__button--game">find game</button>
          <button onClick={() => gameOptionDispatcher({type: "practice"})} className="prompt__button--prac">practice</button>
        </div>
        <span className="prompt__text">
          {user}
          <span className="prompt__cursor"></span>
          
          {gameOption.option !== GAME_OPTION.NONE && <> 
            {Object.keys(paramsArray[gameOption.option]).map((key) => {
              return(<span key={gameOption.option}>{key}: {(paramsArray[gameOption.option])[key as keyof GameOptionsParams]} </span>);
            })}
          </> }
        </span>
      </div>
    </div>
  );
}

export default App;
