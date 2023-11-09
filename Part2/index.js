const idInput = document.querySelector('#idInput');
const colorInput = document.querySelector('#colorInput');
const editedCard = document.querySelector("#editCardButton")

function setCard() {
  const card = document.querySelector(`#${idInput.value}`);
  card.style.color = colorInput.value;
}

editedCard.addEventListener('click', setCard);
