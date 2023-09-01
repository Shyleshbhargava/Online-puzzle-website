import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Login from './Login.js'
import Signup from './Signup.js'
import {Routes,Route} from 'react-router-dom'
import {FcPuzzle} from 'react-icons/fc';

function Home () {
  return (
    <div className='home'>
      <h3><FcPuzzle/><b>Puzzle game</b></h3>
      <h4>Game rules</h4>
      <h4>
        <p>
          <u>Level-1</u>
          <ul>
            <li>
              In this level,you have to match the pairs.
          </li>
          <li>For each chance you have 40sec to solve the puzzle.</li>
          </ul>
          <u>Level-2</u>
          <ul>
            <li>
              In this level,you have to solve the Jigsaw puzzle.
          </li>
          <li> If you place the piece at correct position, then the piece can't be moved further.</li>
          </ul>
          <u>Level-3</u>
          <ul>
            <li>
              In this level,you to solve the crossword puzzle.
          </li>
          <li>The clues are given below the crossword.</li>
          </ul>
        </p>
      </h4>
      <Nav.Link href="/Login">Already have an account?Login</Nav.Link>
      <Nav.Link href="/Signup">Create an account?Register</Nav.Link>
    </div>
  )
}

export default  Home;
