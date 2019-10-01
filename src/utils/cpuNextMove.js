/**
 * ************************************
 *
 * @module cpuNextMove
 * @description custom algo that finds the CPUs next month
 *
 * ************************************
 */

import checkWinner from './checkWinner';

function findAvailSpots(board) {
  return board.reduce((acc, curr, index) => {
    if (curr === '') acc.push(index);
    return acc;
  }, [])
}


// This custom algo finds all empty spaces
// First, it will find all of the winning moves
// Then, it will find moves that it needs to block
// If none, then it will pick a random empty space for its next move.
function cpuNextMove(board, player) {
  const spots = findAvailSpots(board);
  let win = [];
  let block = [];

  for (let i = 0; i < spots.length; i++) {
    let copy = JSON.parse(JSON.stringify(board));
    copy[spots[i]] = 'X';
    if (checkWinner(copy) === 'X') win.push(spots[i]);
    copy[spots[i]] = 'O';
    if (checkWinner(copy) === 'O') block.push(spots[i]);
  }

  if (win.length > 0) return win[0];
  else if (block.length > 0) return block[0]
  else return spots[Math.round(Math.random() * spots.length)];
}

export default cpuNextMove;