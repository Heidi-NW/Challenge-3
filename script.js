// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var userInput = window.prompt("Please enter a password length between 8 - 128 characters");

  var passwordLength = parseInt(userInput);

  if (isNaN(passwordLength)) {
    window.alert("Invalid password length, password length must be between 8 - 128 characters");
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 - 128 characters");
    return
  }

  var userWantUppercase = window.confirm("Would you like to include uppercase letters in your password? ");
  var userWantLowercase = window.confirm("Would you like to include lowercase letters in your password? ");
  var userWantNumber = window.confirm("Would you like to include numbers in your password? ");
  var userWantSymbol = window.confirm("Would you like to include symbols in your password? ");

  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var symbol = ["!", "@", "#", "$", "%", "^", "&", "*"];

  var option = [];

  if (userWantUppercase === true) {
    option = option.concat(upperCase)
  }

  if (userWantLowercase === true) {
    option = option.concat(lowerCase)
  }

  if (userWantNumber === true) {
    option = option.concat(number)
  }

  if (userWantSymbol === true) {
    option = option.concat(symbol)
  }

  if (!userWantUppercase && !userWantLowercase && !userWantNumber && !userWantSymbol === true) {
    window.alert("Please select at least one option from 'Uppercase letters, Lowercase letters, Numbers or Symbols'.")
    return
  }

  // Write password to the #password input

  var finalPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    finalPassword += option[Math.floor(Math.random() * option.length)];
  }
  return finalPassword
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
