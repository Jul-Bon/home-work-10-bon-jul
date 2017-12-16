//Function to add numbers
function sum (number1, number2) {
  return number1 + number2
}

console.log(sum(10, 5))


//Function for subtraction of numbers
function deduction (number1, number2) {
  return number1 - number2
}

console.log(deduction(10, 5))


//Function for multiplication of numbers
function multiple (number1, number2) {
  return number1 * number2
}

console.log(multiple(10, 5))


//Function for division of numbers
function divide (number1, number2) {
  return number1 / number2
}

console.log(divide(10, 5))


//Function of elevation to degree
function degree (number1, number2) {
  return Math.pow(number1, number2) // ("number1" is the base number, "number2" is the exponent used to raise the base)
}

console.log(degree(2, 5))


//Function returns the square root of a number
function root (number1) {
  return Math.sqrt(number1)
}

console.log(root(8))


//Function for calculating a cosine
function cosine (number1) {
  return Math.cos(number1)
}

console.log(cosine(1))


//Function for sinus calculation
function sinus (number1) {
  return Math.sin(number1)
}

console.log(sinus(1))


//Calculation of factorial number
function factorial (n) {
  return (n != 1) ? n * factorial(n - 1) : 1
}

console.log(factorial(4))