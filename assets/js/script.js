// Assignment Code
var generateBtn = document.querySelector("#generate");

//Global variables
var lengthPassword = null;


// additional funtional
function lengthChoice() {
  var hint = " ";

  while (hint) {
    lengthPassword = window.prompt("Please provide the password length?" + hint);
    // Parse the string to a number in the decimal mathematical system
    lengthPassword = parseInt(lengthPassword, 10);
    hint = "(The value must be a number at least 8 characters and no more than 128 characters)";

    if (Number.isInteger(lengthPassword) && lengthPassword >= 8 && lengthPassword < 128) {
      hint = false;
    }
  }
}



// main functional
function generatePassword() {
  lengthChoice();




}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

