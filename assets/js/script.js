// Assignment Code
var generateBtn = document.querySelector("#generate");

/* Operational functions END */
function lengthChoice() {
  var hint = " ";
  var lengthPassword = null;

  while (hint) {
    lengthPassword = window.prompt("Please provide the password length? " + hint);
    // Parse the string to a number in the decimal mathematical system
    lengthPassword = parseInt(lengthPassword, 10);
    hint = "(The value must be a number at least 8 characters and no more than 128 characters)";

    if (Number.isInteger(lengthPassword) && lengthPassword >= 8 && lengthPassword <= 128) {
      hint = false;
    }
  }
  return lengthPassword;
}

function typeChoice() {
  var hint = null;
  var typesArray = ["lowercase", "uppercase", "numeric", "special characters"];
  var chosenTypesArray = [];

  while (!chosenTypesArray.length) {

    for (var i = 0; i < typesArray.length; i++) {
      switch (typesArray[i]) {
        case "lowercase":
          hint = "Lowercase letters: a-z.";
          break;
        case "uppercase":
          hint = "Uppercase letters: A-Z.";
          break;
        case "numeric":
          hint = "Numbers: 0-9.";
          break;
        case "special characters":
          hint = "Symbols: ~`! @#$%^&*()_-+={[}]|:;\"'<,>.?/";
          break;
      }
      answer = window.confirm("Would you like to include " + typesArray[i] + " in the password? " + hint);

      if (answer) {
        chosenTypesArray.push(typesArray[i]);
      }
    }

    if (!chosenTypesArray.length) {
      window.alert("You should choose at least one character type. Please try again.");
    }
  }
  return chosenTypesArray;
}

function passwordGenerator(characterTypes, lengthPassword) {
  var selectionArray = [];
  var passwordArray = "";

  for (var i = 0; i < characterTypes.length; i++) {
    switch (characterTypes[i]) {
      case "lowercase":
        selectionArray += "abcdefghijklmnopqrstuvwxyz";
        break;
      case "uppercase":
        selectionArray += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        break;
      case "numeric":
        selectionArray += "0123456789";
        break;
      case "special characters":
        selectionArray += "~`! @#$%^&*()_-+={[}]|:;\"'<,>.?/";
        break;
    }
  }
  for (var i = 0; i < lengthPassword; i++) {
    passwordArray += selectionArray[Math.floor(Math.random() * selectionArray.length)];
  }
  return passwordArray;
}
/* Operational functions END */

// Main function to call the operational functions
function generatePassword() {
  var lengthPassword = lengthChoice();
  var chosenTypesArray = typeChoice();
  var password = passwordGenerator(chosenTypesArray, lengthPassword);
  console.log(password);

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
