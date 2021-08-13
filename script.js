var generateBtn = document.querySelector("#generate");
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"; 
var numerals = '0123456789';
var punctuation = '!@#$%^&*(){}?/\_-=+[]|;:.,<>`~';
var capitals = lowerCaseLetters.toUpperCase();
var promptProgress = 0;
var passwordLength;
var password = "";


function generatePassword() {
  newPassword = [];
  var passwordLength = prompt("Desired password length?");
    if (passwordLength > 128 || passwordLength < 8) {
      alert("Password must be between 8 and 128 characters.")
      return;
    }

  var specialCharacters = confirm("Do you want special characters?");
  var numeric = confirm("Do you want numbers?");
  var upperCase = confirm("Do you want uppercase letters?");
  var lowerCase = confirm("Do you want lowercase letters?");
  var allCharacters = "";

  if (specialCharacters == true) {
    allCharacters = allCharacters + punctuation;
  }

  if (numeric == true) {
    allCharacters = allCharacters + numerals;
  }

  if (upperCase == true) {
    allCharacters = allCharacters + capitals;
  }

  if (lowerCase == true) {
    allCharacters = allCharacters + lowerCaseLetters;
  }

  for (let i = 0; i < passwordLength; ++i) {
    var character = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    password = password + character;
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
