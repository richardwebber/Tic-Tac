console.log('hello world')

const selectedBox = document.querySelectorAll('.square')
const selectedPlayer = document.querySelector('#current-player');


//////////////////////////////////////////////////////
let player = 'X'


const play = (evt) => {
    const targetSquare = evt.target;
    targetSquare.innerText = player;

    if (player === 'X') {
        player = 'O'
    } else {
        player = 'X'
    }
    
    selectedPlayer.innerText = player;

    const winner = calculateWinner();
    if (winner) {
        alert(`${winner} is the winner!`)
    } else if (isBoardFull()) {
        alert(`Game is a tie!`)
    }
}


for (const i of selectedBox) {
    i.addEventListener('click', play)
}

function calculateWinner() {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (const line of lines) {
        const [a, b, c] = line;
        const squareAText = selectedBox[a].innerText;
        const squareBText = selectedBox[b].innerText;
        const squareCText = selectedBox[c].innerText;

        if (squareAText !== '' && squareAText === squareBText && squareAText === squareCText) {
            return squareAText;
        }
      }
      return undefined;
}

function isBoardFull() {
    for (const square of selectedBox) {
      if (square.innerText === '') {
        return false;
      }
    }
    return true;
  }
  
  
  

////////////////////////////////////////////////////////
