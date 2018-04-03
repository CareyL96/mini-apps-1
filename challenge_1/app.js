var board = [[],[],[]];
var currentPlayer = '[x]';

var gameOver = false;
var turnCount = 0;

var player1 = { 
  name: 'Player1',
  symbol: '[x]'
}

var player2 = {
  name: 'Player2',
  symbol: '[o]'
}

window.onload = function() {
  generateBoard();
  
  document.getElementById('reset').addEventListener('click', resetBoard);
}

var generateBoard = () => {
  var htmlBoard = document.getElementById('board');
  for (var i = 0; i < htmlBoard.rows.length; i++) {
    for(var j = 0; j < htmlBoard.rows[i].children.length; j++) {
      var square = htmlBoard.rows[i].children[j];
      board[i][j] = square;
      square.addEventListener('click', function(e) {
        placePiece(e);
      });
    }
  }
}

var resetBoard = () => {
  board = [[],[],[]];
  gameOver = false;
  turnCount = 0;
  console.log('reset');
  var squares = document.getElementsByTagName('td');
  
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerText = '[ ]';
  }
  generateBoard();
}

var placePiece = (e) => {
  if (!gameOver) {
    if (currentPlayer === '[x]' && e.target.innerText === '[ ]') {
      e.target.innerText = '[x]';
      turnCount += 1;
      checkIfWinner();
      currentPlayer = '[o]';
    } else if (currentPlayer === '[o]' && e.target.innerText === '[ ]') {
      e.target.innerText = '[o]';
      turnCount += 1;
      checkIfWinner();
      currentPlayer = '[x]';
    }
  }
}

var handleStart = (e) => {

}

var checkIfWinner = () => {
  var winner = false;
  if (checkAllHorizontalWin() ||
  checkAllColWin() ||
  checkMinorDiagWin() ||
  checkMajorDiagWin() ) {
  }
  if (winner) {
    document.getElementById()
  }
}


var checkAllHorizontalWin = () => {
  var win = false;
  board.forEach(row => {
    if (!win) {
      win = row.every(val => val.innerText === currentPlayer);
    }
  });
  if(win) {
    console.log('rowwinner');
  }
  return win;
}

var checkAllColWin = () => {
  var rotatedBoard = rotateBoard(board);

  var win = false;
  rotatedBoard.forEach(row => {
    if (!win) {
      win = row.every(val => val.innerText === currentPlayer);
    }
  });
  if (win) {
    console.log('colwinner');
  }
  return win;
}

var checkMinorDiagWin = () => {
  for (var i = 0; i < board.length; i++) {
    if (board[i][i].innerText !== currentPlayer) {
      return false;
    }
  }
  console.log('minordiagwinner');
  return true;
}

var checkMajorDiagWin = () => {
  for (var i = 0; i < board.length; i++) {
    if (board[i][2-i].innerText !== currentPlayer) {
      return false;
    }
  }
  console.log('majordiagwinner')
  return true;
}

var rotateBoard = (board) => {
  var rotatedBoard = [];
  // iterate through rows

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      // push each value at each column to new array
      if (rotatedBoard[j]) {
        rotatedBoard[j].push(board[i][j]);
      } else {
        rotatedBoard.push([board[i][j]]);
      }
    }
  }
  return rotatedBoard;
}





