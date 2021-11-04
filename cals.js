function checkData(operation, firstNumber, secondNumber) {
  if (
    !operation ||
    !firstNumber ||
    !secondNumber ||
    isNaN(secondNumber) ||
    isNaN(firstNumber)
  )
    return "Error";
  let result = calcNumbers(operation, firstNumber, secondNumber);
  return result;
}

function calcNumbers(operation, firstNumber, secondNumber) {
  let operations = {
    sum: firstNumber + secondNumber,
    sub: firstNumber - secondNumber,
    mult: firstNumber * secondNumber,
    div: firstNumber / secondNumber,
  };

  switch (operation) {
    case "sum":
      return operations.sum;
    case "sub":
      return operations.sub;
    case "mult":
      return operations.mult;
    case "div":
      return operations.div;
    default:
      return "Unknown operation";
  }
}

console.log(checkData("sum", 6, 3));
console.log(checkData("sub", 6, 3));
console.log(checkData("mult", 6, 3));
console.log(checkData("div", 6, 3));
console.log(checkData("sm", 6, 3));
console.log(checkData("", 6, 3));
console.log(checkData("sum", 6));
