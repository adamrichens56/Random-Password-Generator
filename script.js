var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword () {
 // var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var chars = []
var password = "";
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lower = ['a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z']
var symbol = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
var  number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

var passwordLength = prompt ('how long do you want your password')

var askUpper = confirm('do you want upper?')
if (askUpper) {
  chars = chars + upper
}
console.log(chars)
var askLower = confirm('do you want lower?')
if (askLower) {
  chars = chars + lower
}


var askSymbol= confirm('do you want symbols?')
if (askSymbol) {
  chars = chars + symbol
}

var askNumber = confirm('do you want numbers?')
if (askNumber) {
  chars = chars + number
}

var negitiveValue = []

if (askUpper === true) {
  negitiveValue.push(upper)
}

if (askLower === true) {
  negitiveValue.push(lower)
}

if (askSymbol === true) {
  negitiveValue.push(symbol)
}

if (askNumber === true) {
  negitiveValue.push(number)
}

if (
  symbol === false &&
  number === false &&
  lower=== false &&
  upper === false
) {
  alert('Must select at least one character type');
  return null;
}
console.log(chars)


for (var index = 0; index <= passwordLength; index++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
}
return password
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
