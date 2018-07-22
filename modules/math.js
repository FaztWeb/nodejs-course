const PI = 3.14;

function add(x, y) {
  return x + y;
}

function substract(x, y) {
  return x - y;
}

function division(x, y) {
  if(y ==  0) {
    showMessage('You cannot divide by 0');
  } else {
    return x / y;
  }
}

function multiply(x, y) {
  return x * y;
}

function showMessage(message) {
  console.log(message);
}

exports.add = add;
exports.substract = substract;
exports.division = division;
exports.multiply = multiply;
