function listener() {
  let buttons = document.querySelectorAll('.button');
  let myValue = '';
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.classList.contains('number')) {
        let isCero;
        button.textContent === 0 ? (isCero = true) : (isCero = false);
        if (isCero) {
          clearScreen(button.textContent);
        }
        myValue = captureNumber(button);
        console.log(myValue);
        addNumberToScreen(myValue);
      } else if (button.classList.contains('dot')) {
        console.log('dot');
      } else {
        getMySymbol(button);
      }
    });
  });
}

function captureNumber(button) {
  let myNumber = parseInt(button.value);
  return myNumber;
}

function getMySymbol(button) {
  let symbol = button.value;

  switch (symbol) {
    case 'ac':
      clearScreen();
      break;
    case 'convert':
      break;
    default:
      break;
  }
}

function clearScreen(value) {
  let BigNumber = document.getElementById('screenText');
  let smallNumber = document.getElementById('smallNumber');
  BigNumber.textContent = 0;
  smallNumber.textContent = 0;
}

function addNumberToScreen(number) {
  let BigNumber = document.getElementById('screenText');

  BigNumber.textContent += number;
}

listener();
