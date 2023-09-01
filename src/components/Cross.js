import React, { useState } from "react";
import Crossword from "@jaredreisinger/react-crossword";
import './Cross.css'
const data = {
  across: {
    1: {
      clue: "abbreviated programming language",
      answer: "JS",
      row: 1,
      col: 6
    },
    2: {
      clue: "JS library for building UIs",
      answer: "REACT",
      row: 3,
      col: 6
    },
    3: {
      clue: "DOM bindings for React Router",
      answer: "ROUTERDOM",
      row: 5,
      col: 0
    },
    4: {
      clue: "JS runtime environment",
      answer: "NODE",
      row: 10,
      col: 2
    }
  },
  down: {
    5: {
      clue: "content management system",
      answer: "WORDPRESS",
      row: 0,
      col: 0
    },
    6: {
      clue: "enable config override",
      answer: "REWIRED",
      row: 4,
      col: 4
    },
    7: {
      clue: "crossword creator",
      answer: "JARED",
      row: 1,
      col: 6
    },
    8: {
      clue: "online publishing platform",
      answer: "MEDIUM",
      row: 5,
      col: 8
    },
    9: {
      clue: "favourite code editor",
      answer: "ATOM",
      row: 2,
      col: 10
    }
  }
};

export function Cross() {
  const [res,setRes]=useState(null);
  function handleCross(){
    setRes("You did it,You conquered the cross!!");
  }
  return (
    <>
    <h1 className="text-center mt-3">Cross Word</h1>
    <h3 className="text-center mt-5 mb-5">{res}</h3>
    <div className="Cross">
      <Crossword className='cross' data={data} onCrosswordCorrect={handleCross} />
    </div>
    </>
  );
}
