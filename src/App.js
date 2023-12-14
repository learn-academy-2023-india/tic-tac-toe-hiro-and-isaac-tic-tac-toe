import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player1, nextPlayer] = useState('❌')
//if player 1 clicks on the box it should be x
  const handleClick = (index) => {
  if(squares[index] === null){
    const newSquares = [...squares]
    newSquares[index] = player1
    setSquares(newSquares)
    nextPlayer(player1 === '❌' ? '⭕️' : '❌')
  }
  const winner = calculateWinner(squares)
  if (winner){
    alert(`Player ${winner} wins!`)
  } else{
    return 
  }
  }

const restartGame =() => {
setSquares(Array(9).fill(null))
nextPlayer('❌')
}
  return (
    <>
      <h1>🎄🎄 Tic Tac Toe 🎄🎄</h1>
      <div className='boxes'>
      {squares.map((value,index) => (
        <Square key ={index} value={value} onClick={() => handleClick(index)} />
      ))}
      </div>
      <div>
      <button className="restart" onClick={restartGame}>Restart</button>
    </div>
    </>
  )
}
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null;
}
export default App





// import React, { useState } from 'react'
// import Square from './components/Square'
// import './App.css'



// const App = () => {
//   const [squares, setSquares] = useState(Array(9).fill(null))
//   const [player1, nextPlayer] = useState('❌')
//   const [player2, prevPlayer] = useState('⭕️')
//   const [isDraw, setDraw] = useState(Array(9).fill(false))
// //if player 1 clicks on the box it should be x
//   const handleClick = (index) => {
//   if(squares[index] === null || squares[index] !==null){
//     const newSquares = [...squares]
//     newSquares[index] = player1
//     setSquares(newSquares)
  
//     nextPlayer(player1 === '❌' ? '⭕️' : '❌')
//     prevPlayer(player2 === '⭕️' ? '❌' : '⭕️')
  
//   const winner = calculateWinner(squares)
//   const isDraw = (squares) =>{
//     return squares.every(true)
//   }
  
//   if (winner){
//     alert(`Player ${winner} wins!`)
//   } else if(isDraw(newSquares)){
//     alert(`Both of you are LOSERS ${player1} && ${player2} 👎🏽`)
//   } 
//   }
// }

// const restartGame =() => {
// setSquares(Array(9).fill(null))
// nextPlayer('❌')
// }

//   return (
//     <>
//       <h1>Tic Tac Toe</h1>
//       <div className='boxes'>
     
//       {squares.map((value,index) => (
//         <Square key ={index} value={value} onClick={() => handleClick(index)} />
//       ))} 
//       </div>
//       <div>
//       {/* <h1>{restart ? 'Component Restarted' : 'Welcome to React'}</h1> */}
//       <button className="restart" onClick={restartGame}>Restart</button>
//     </div>

//     </>
//   )
// }
// const calculateWinner = (squares) => {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ]

//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a]
//     }
//   }

//   return null;
// }
// export default App

