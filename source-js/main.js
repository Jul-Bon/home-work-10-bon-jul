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

/************************************************
 * Another way
 * to function.
 * so it was at first.
 * *********************************************/

var a = 10
var b = 2
var c

//Function to add numbers
function plusFunction () {
  c = a + b
  console.log(c)
}

plusFunction() //call function

//Function for subtraction of numbers
function minusFunction () {
  c = a - b
  console.log(c)
}

minusFunction() //call function

//Function for multiplication of numbers
function multiplyFunction () {
  c = a * b
  console.log(c)
}

multiplyFunction() //call function

//Function for division of numbers
function devisionFunction () {
  c = a / b
  console.log(c)
}

devisionFunction() //call function

//Function of elevation to degree
function degreeFunction () {
  c = Math.pow(a, b) // ("a" is the base number, "b" is the exponent used to raise the base)
  console.log(c)
}

degreeFunction() //call function

//Function returns the square root of a number
function rootFunction () {
  var y = 100
  if (y >= 0) {
    c = Math.sqrt(y)
    console.log(c)
  } else {
    console.log('Number must be greater than 0')
  }
}

rootFunction() //call function

//Function for calculating a cosine
function cosineFunction () {
  var y = 0
  c = Math.cos(y)
  console.log(c)
}

cosineFunction() //call function

//Function for sinus calculation
function sinusFunction () {
  var y = 1
  c = Math.sin(y)
  console.log(c)
}

sinusFunction() //call function

//Calculation of factorial number
function factorial (n) {
  return (n != 1) ? n * factorial(n - 1) : 1
}

console.log(factorial(4))