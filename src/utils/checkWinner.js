/**
 * ************************************
 *
 * @module checkWinner
 * @description helper function to check if there is a winner
 * 
 * @param {array} board - takes the board an argument  
 * @return {string or undefined} Either X , O or Undefined
 *
 * ************************************
 */

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function checkWinner(board) {
  for (let i = 0; i < winCombos.length; i++) {
    let combo = winCombos[i];
    if (board[combo[0]] !== '' || board[combo[1]] !== '' || board[combo[2]] !== '') {
      if (board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]) {
        return board[combo[0]];
      }
    }
  }
  return false;
}

export default checkWinner;