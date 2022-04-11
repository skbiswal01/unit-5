import { useState } from "react";

import "./App.css";

function App() {
  const [score, setScore] = useState({
    Score : 76,
    Wicket : 2,
    Ball : 50
  });

  function Scoreboard(str, value){
    let x = {};
    x[str] = score[str] + value;
    let res = {
      ...score,
      ...x,
    }
    setScore(res);
  }

  var wicketcount = "";
  if(score.Wicket <= 12){
    wicketcount = wicketcount+score.Wicket;
  }else{
    wicketcount = wicketcount+"All Out";
  }

  
    var balls = score.Ball;
    var balls2 = score.Ball;
    var f = Math.floor(balls2 / 6);
    var total_over = Math.ceil(balls%6);
    if(f > 1){
      var total_over = Math.ceil(balls%6) + 1;
    }
     
    var totals_over_calculated = f+"."+total_over;
  
     
  

  var won = "";
  if(score.Score > 100){
    won = "Won";
  }
  return (
    <div className="App">
      <h3>India:{won}</h3>
      <div className="banner">
        <div>
          Score:{score.Score}
          <h1 className="scoreCount">
            {
              // show "score" here
              score.Score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              wicketcount
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              totals_over_calculated
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>{Scoreboard("Score",+1)}}>Add 1</button>
        <button className="addScore4" onClick={()=>{Scoreboard("Score",+4)}}>Add 4</button>
        <button className="addScore6" onClick={()=>{Scoreboard("Score",+6)}}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>{Scoreboard("Wicket",+1)}}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>{Scoreboard("Ball",+1)}}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;
