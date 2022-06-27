import React from 'react'
import "./ScoreBoard.css"

export default function ScoreBoard({score, xPlaying, myStyle}) {
  return (
    <div className='scoreboard' style={myStyle}>
      <span className={`score x-score ${!xPlaying && "inactive"}`}>X- {score.xScore}</span>
      <span className={`score o-score ${xPlaying && "inactive"}`}>O- {score.oScore}</span>
    </div>
  )
}
