let MyMath = new Object({
  firstNumber: 5,
  secondNumber: 2,
});

MyMath.sum = function () {
  return MyMath.firstNumber + MyMath.secondNumber;
};

console.log(MyMath.sum());

MyMath.multiplication = function () {
  return MyMath.firstNumber * MyMath.secondNumber;
};

console.log(MyMath.multiplication());

MyMath.division = function () {
  return MyMath.firstNumber / MyMath.secondNumber;
};

console.log(MyMath.division());

MyMath.subtraction = function () {
  return MyMath.firstNumber - MyMath.secondNumber;
};

console.log(MyMath.subtraction());
