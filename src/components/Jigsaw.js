import React, { useState,useEffect } from 'react';
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import '../App.css';
import './Jigsaw.css';
import {useNavigate} from 'react-router-dom';

function Jigsaw() {
  let navigate=useNavigate();
    const arr=[
      {
        src:'images/html5.png',
        id:1
      },
      {
        src:'images/css3.png',
        id:2
      },
      {
        src:'images/JS.png',
        id:3
      },
      {
        src:'images/bootstrap.png',
        id:4
      },
      {
        src:'images/react.png',
        id:5
      },
      {
        src:'images/nodejs.png',
        id:6
      },
      {
        src:'images/mongo.png',
        id:7
      },
      {
        src:'images/vue.jpg',
        id:8
      },
  
    ]
    const [text, setText] = useState("Make a picture!!");
    const [gameover,setGameOver]=useState(false);
    const solve=()=>{
        setText("Congratulations!!"); 
        setGameOver(true);
    }
    let idx=Math.floor(Math.random()*arr.length);
    return (
        <>
          <h1>{text}</h1>
          {gameover&&<button className='rounded mt-4 crossbtn'  type={gameover?"nextbtnf":"nextbtni"} onClick={()=>navigate('/Crossword')}>Proceed to level-3</button>}
          <div className={gameover?"solved":"puzzle-container"}>
            <JigsawPuzzle
              imageSrc={arr[idx].src}
              rows={3}
              columns={3}
              onSolved={solve}
            />
          </div>
          
        </>
      );
}

export default Jigsaw


