import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Board } from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import Alert from "./components/Alert";

function App() {
  const win_condition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [score, setScore] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [mode, setMode] = useState(false);
  const [alert, setAleart] = useState(null);

  const showAleart = (message, type)=>{
    setAleart({
      msg : message,
      type : type
    })
    setTimeout( ()=>{
      setAleart(null);
    }, 2000);
  }



  const handelMode = ()=>{
    if(mode===false){
      setMode(true);
    }
    else{
      setMode(false);
    }
  }
  const myStyle = {
    color : 'white',
    backgroundColor: '#112B3C',
    boxShadow: "0px 0px 16px #FF0000"
  }

  const myContStyle = {
    color : 'white',
    backgroundColor: '#112B3C',
    boxShadow: "0px 0px 16px #FF0000",
    
  }
  const myBodyStyle = {
    color : 'white',
    backgroundColor: '#000000'
  }
  const myBoxStyle = {
    backgroundColor: '#000000'
  }

  const myHeadStyle = {
    color : '#FF0000',
    backgroundColor: '#000000'
  }


  const handelBoxClick = (boxIdx) => {
    const UpdatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "x" : "o";
      } else {
        return value;
      }
    });
    setBoard(UpdatedBoard);
    const winner = checkWinner(UpdatedBoard);
    if (winner) {
      const newScore = score;
      if (winner === "x") {
        newScore.xScore = score.xScore + 1;
      } else {
        newScore.oScore = score.oScore + 1;
      }

      setScore(newScore);
    }
    console.log(score);
    setXPlaying(!xPlaying);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < win_condition.length; i++) {
      const [x, y, z] = win_condition[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        console.log("winner " + board[x]);
        const msg = " "+board[x]+" is the Winner!!";
        setGameOver(true);
        // resetGame();
        showAleart(msg, "success");
        return board[x];
      }
    }
  };

  const resetGame = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  return (
    <div className="body" style={mode?myBodyStyle:null}>
      <div className="container" style={mode?myContStyle:null} >
        <div className="head" style={mode?myHeadStyle:null}>
          <div className="darkmode-btn">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={handelMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Change Mode
            </label>
          </div>
          </div>
          <div className="headLogo">
          <div className="heading" style={mode?myHeadStyle:null}>
            <h3> Tic-Tac-Toe Game Using-React</h3>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
        <Alert alert={alert}/>
        <ScoreBoard score={score} xPlaying={xPlaying} myStyle={mode?myStyle:null}/>
        <Board board={board} onClick={gameOver ? resetGame : handelBoxClick} myStyle={mode?myBoxStyle:null} />
        <button className="resetButton" onClick={resetGame} style={mode?myHeadStyle:null}>
          {" "}
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
