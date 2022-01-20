class Calculator {
  constructor() {
    this.result = 0;
  }
  add() {
    return function (number) {
      this.result += number;
      console.log(this.result);
      return this.result;
    };
  }
}

const calc = new Calculator();

const myAdd = calc.add();
console.log(myAdd(3));
console.log(myAdd(2));
