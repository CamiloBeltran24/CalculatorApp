function listener() {
  buttonsListener();
}

function buttonsListener() {
  let buttons = document.querySelectorAll('.button');
  let myValue = '';

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.classList.contains('number')) {
        myValue = captureNumber(button);
        addNumberToScreen(myValue);
      } else if (button.classList.contains('dot')) {
        addDotToScreen(button.value);
      } else {
        getMySymbol(button);
      }
    });
  });
}

//Funcion para capturar el numero del boton clicado
function captureNumber(button) {
  let myNumber = parseInt(button.value);
  return myNumber;
}

//Capturar el simbolo del boton
function getMySymbol(button) {
  let symbol = button.value;

  switch (symbol) {
    case 'ac':
      clearScreen(0);
      break;
    case 'convert':
      convert();
      break;
    case '+':
      add();
      break;
    case '-':
      subtract();
      break;
    case '*':
      multiply();
      break;
    case '/':
      divide();
      break;
    case '=':
      result();
      break;
    case '%':
      percent();
      break;
    default:
      break;
  }
}

function add() {
  let number_container = document.getElementById('screenText');
  let number1 = number_container.textContent;

  clearScreen(number1);

  // let number2 =
}

function subtract() {}

function multiply() {}

function divide() {}
function result() {}

function percent() {}

function convert() {}

function printResult() {}

//Funcion para limpiar la pantalla de la calculadora
function clearScreen(current_number) {
  let BigNumber = document.getElementById('screenText');
  // let smallNumber = document.getElementById('smallNumber');

  if (current_number) {
    BigNumber.textContent = current_number;
  } else {
    BigNumber.textContent = 0;
  }
}

//Fucncion para saber si ya se ha agregado una punto(".") a los numeros
function isDecimal(value) {
  if (value.includes('.')) {
    return true;
  } else {
    return false;
  }
}

function addNewNumber() {
  let bigNumber = document.querySelector();
}

//Funcion para agregar el dot a los numeros en pantalla
function addDotToScreen(value) {
  let bigNumber = document.getElementById('screenText');
  let numberOnScreen = bigNumber.textContent;

  if (!isDecimal(numberOnScreen)) {
    bigNumber.textContent += value;
  }
}

//Funcion para agrear los numeros a la pantalla de la calculadora
function addNumberToScreen(number, status) {
  let bigNumber = document.getElementById('screenText');
  let numberOnScreen = bigNumber.textContent;
  let arrayOfNumbers = numberOnScreen.split('');

  if (isDecimal(numberOnScreen)) {
    numberOnScreen = parseFloat(numberOnScreen);
  } else {
    numberOnScreen = parseInt(numberOnScreen);
  }

  if (numberOnScreen === 0 && number === 0) {
    // console.log('Es un cero ');
    bigNumber.textContent = number;
  } else if (
    numberOnScreen === 0 &&
    number != 0 &&
    arrayOfNumbers.length <= 1
  ) {
    // console.log('Tamaño: ', numberOnScreen.length);
    bigNumber.textContent = number;
  } else {
    bigNumber.textContent += number;
  }
}

listener();
