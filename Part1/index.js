
// Testing to make sure the javascript src connected you to your html script tags. 
// If this works, you will see 'hello world' in your console.
console.log('hello world')

// This code will go into your HTML document and select ALL class's with the name 'square'.
// when setting up event handlers, you will need to know what element in the DOM you are selecting.
const selectedBox = document.querySelectorAll('.square')
// This code will go into your HTML document and select the first class with the id 'current-player'.
const selectedPlayer = document.querySelector('#current-player');


//////////////////////////////////////////////////////
// This will be useful for when we begin the game of Tic Tac Toe. 
// In the game of Tic Tac Toe, 'X' makes the first move on the grid.
// We will need something to toggle between player 'X's turn and player 'O's once they have clicked on there square.
// Good to note that we made it a global variable and gave it the let type so that it can change freely between X and O.
let player = 'X'

// Now we create our play function.
// Here we are creating the function that will be passed into our event handler. 

const play = (evt) => {
    // First things first, we create a variable that will represent the square on our DOM.
    // Then we go into our square, into our inner text and change it to 'player'. 
    const targetSquare = evt.target;
    targetSquare.innerText = player;

    // After the user triggers the event handler, and it creates those variable above, we enter our if statement.
    // Here we see what player has triggered the event, check the conditions, and change it to the other player.
    if (player === 'X') {
        player = 'O'
    } else {
        player = 'X'
    }
    
    // This toggles the innertext displayed by our selectedPlayer DOM element. 
    selectedPlayer.innerText = player;

    // Here we are setting a variable that will tell us who is the winner. 
    // Winner is a function that takes a callback function. 
    // Once the function calculateWinner has met it's resolve, the code below will begin to run.
    const winner = calculateWinner();
    // This if statement checks to see if it was a tie or not.
    // If calculateWinner returned a winner. Alert that winner! 
    if (winner) {
        alert(`${winner} is the winner!`)
    // Else if calculateWinner didnt return a winner... 
    // check to make sure that every square was marked, and alert the players that it was a tie.
    } else if (isBoardFull()) {
        alert(`Game is a tie!`)
    }
}

// This line of code listens to the 9 squares represented on our DOM by attaching an event listener to every square on our board.

for (const i of selectedBox) {
    // This is how you would attach an event listener.
    // Here 'i' represents the address/index of each square. 
    i.addEventListener('click', play)
}

// Remember that function we created called 'winner' that took a callback function?
// This is the callback function that needs to resolve in order for winner to get its value.
function calculateWinner() {
    // Here in our function, we create a an array of arrays.
    // These array of arrays represent every possible way a player can win the game of Tic Tac Toe.
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
    
      // Remeber, we have 9 squares and 3 rows for our Tic Tac Toe grid but all our computer can see is 9 <td> tags with the class of square.
      // because computers are funny, the computer 0 indexes those <td class="square">
      // as we go through our for loop we plug in those address's/ indexes from our lines array for a, b, and c and read what in those boxes.
      // If what we read in those boxes, aka <td> tags, are all the same charecter, return the charecter that won.
      for (const line of lines) {
        const [a, b, c] = line;
        const squareAText = selectedBox[a].innerText;
        const squareBText = selectedBox[b].innerText;
        const squareCText = selectedBox[c].innerText;

        if (squareAText !== '' && squareAText === squareBText && squareAText === squareCText) {
            return squareAText;
        }
      }
      // If all the squares on the board have a charecter in them but none of the conditions have been met.
      return undefined;
}

// Just for extra precaution, we will create a function that we will envoke at the end of our play function if our callback function doesn't return a winner.
// This is just a for loop that looks at all the boxes, aka <td class="square">, and double checks that they have no innertext.
// If any of the squares are empty, return flase.
// Else, return true.
// If this function is returning false, you are most likely not returning a winner from the calculate winner function.
function isBoardFull() {
    for (const square of selectedBox) {
      if (square.innerText === '') {
        return false;
      }
    }
    return true;
  }
  
  
  

////////////////////////////////////////////////////////
