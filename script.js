// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//generate Password function
//length for password (8<=128)
function generatePassword() {
  var numberOfCart = parseInt(
    prompt("Please provide the length of your password at least 8 characters.")
  );
  if (numberOfCart >= 8 && numberOfCart <= 128) {
    //console.log("rabbit");
  } else {
    alert("Please provide a valid entry!");
    return "Please try again.";
  }

  //create supper strings: lower, upper, numbers, symbols

  var superString = "";
  var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerString = "abcdefghijklmnopqrstuvwxyz";
  var numbersString = "0123456789";
  var symbolsString = "!“#$%&()*+,-./:;<=>?@][^_`{|}~";
  var password = "";

  //create user entry and validate

  if (confirm("Do you want uppercase?")) {
    superString += upperString;
       var random = Math.floor(Math.random() * superString.length);
       password += upperString.charAt(random);
  }
  console.log("upper Included");

  if (confirm("Do you want lowercase?")) {
    superString += lowerString;
       var random = Math.floor(Math.random() * superString.length);
       password += lowerString.charAt(random);
  }
  console.log("Lowercase Included");

  if (confirm("Do you want numbers?")) {
    superString += numbersString;
       var random = Math.floor(Math.random() * superString.length);
       password += numbersString.charAt(random);
  }
  console.log("Numbers Included");

  if (confirm("Do you want symbols?")) {
    superString += symbolsString;
       var random = Math.floor(Math.random() * symbolsString.length);
       password += symbolsString.charAt(random);
  }
  console.log("Symbols Included");
  //adjust for loop numbers of chart so password is shorter

  if (superString.length === 0) {
    alert("You did not select any category");
    return "Please try again!";
  }
  
  var userSelect = "";
  for (var i = 0; i < length; i++) {
    //picks a character within charSet at index of random number
    userSelect += password.charAt(Math.floor(Math.random() * password.length));
  }

  for (var i = 0; i < numberOfCart; i++) {
    var random = Math.floor(Math.random() * superString.length);
    password += superString.charAt(random);
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
