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
  function generatePassword () {
      var numberOfCart = prompt ("Please provide the length of your password.");
      if (numberOfCart >= 8 && numberOfCart <=128) {
          console.log("rabbit");
           }
      else {
          alert ("Please provide a valid entry!");
          return ("Please try again.");
       }
    
//userEntry 
    var includeUpper = confirm("Do you want to include uppercase?");
    var includeLower = confirm("Do you want to include lowercase?");
    var includeNumbers = confirm("Do you want to include numbers?");
    var includeSymbols = confirm("Do you want to include Symbols?");
       console.log(includeUpper);
  if (includeLower ===false && includeSymbols===false && includeNumbers===false && includeUpper===false) {
    alert("This is invalid entry.")
    return ("Please select each category!");
  }
  else {
    console.log("rabbit2");
  }

//start supperArray: lowerCase, upperCase, symbols, numbers
  passwordArray= [];
  superArray = [];
  lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "Y",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  symbols = [
    "!",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "+",
    ",",
    "-",
    ".",
    "/",
    ";",
    ":",
    "<",
    ">",
    "=",
    "?",
    "@",
    "[",
    "]",
    "_",
    "{",
    "}",
    "|",
    "~",
    '"',
    "'"];
    numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// finish superArray line

//for loop and validate 
if (includeLower === true){
  for (var i = 0; i <lowerCase.length; i++) {
    superArray.push(lowerCase[i]);
    console.log(superArray)
  }
} else console.log("Lowercase not included!")

if (includeUpper === true){
  for (var i = 0; i <upperCase.length; i++) {
    superArray.push(upperCase[i]);
    console.log(superArray)
  }
} else console.log("Uppercase not included!")

if (includeSymbols === true){
  for (var i = 0; i <symbols.length; i++) {
    superArray.push(symbols[i]);
    console.log(superArray)
  }
} else console.log("Symbols not included!")

if (includeNumbers === true){
  for (var i = 0; i <numbers.length; i++) {
    superArray.push(numbers[i]);
    console.log(superArray)
  }
} else console.log("Numbers not included!")



for (var i =0; i < numberOfCart; i++){
  var randomIndex =Math.floor(Math.random() * superArray.length);
  passwordArray.push(superArray[randomIndex]);
}
console.log(passwordArray);

var secret = passwordArray.join ("");
console.log(secret);
return secret;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



