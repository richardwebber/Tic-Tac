//Here we connect our javascript to our HTML elements with the id's of idInput, colorInput, editCardButton.
// The .querySelector will only select the first instance of this id. If you wanted to do All instances of that id
// you would put .queryselectorAll

// Because we are getting an <input/> from the user. What ever string/ word the user puts in, will set the value of respected variables.
const idInput = document.querySelector('#idInput');
const colorInput = document.querySelector('#colorInput');
// This is the only button we will be accessing. 
// We need to access this button so we know when the user wants to update the value of the selected cards.
const editedCard = document.querySelector('#editCardButton')

// With this function we will be able to input what suit we want for our cards, select it and change its css properties.
// This function will also be the function we will pass into our event listener.
function setCard() {
  // We are using template literals to select the id on the document because the input is a text. aka a string.
  // Once we have the id of the dom element we want to change the css style on, we change it to the color of the user input provided.
  const card = document.querySelector(`#${idInput.value}`);
  card.style.color = colorInput.value;
}

editedCard.addEventListener('click', setCard);
