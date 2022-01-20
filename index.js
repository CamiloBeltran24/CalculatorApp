const divide = document.querySelector('.divide');
const times = document.querySelector('.times');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const equals = document.querySelector('.equals');
const percent = document.querySelector('.percent');
let numberButtons = document.querySelectorAll('.number'); // arreglo de botones con numero
// ciclo para agregar event listener a todos los botones.

function createEvent(myArray = []) {
  myArray.forEach((button) => {
    button.addEventListener('click', () => {
      console.log(button.value);
    });
  });
}
