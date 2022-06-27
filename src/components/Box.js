import React from 'react';
import './Box.css';

export const Box = ({value, onClick, myStyle}) =>{
    const style = value === "x"? "Box x" :"Box o";
  return (
    <button className={style} onClick={onClick} style={myStyle}>
      {value}
    </button>
  )
}
