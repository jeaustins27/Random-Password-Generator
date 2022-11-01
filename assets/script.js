// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var finalPW = ""  // the final password
var Characters = [] // thats all the chosen characters concatinated together or joined together

function generatePassword() {
    // userLength()
    var pwLength = prompt("How long would you like your password to be? Must be between 8 and 128 characters.");
    console.log(pwLength)

    if (pwLength < 8 || pwLength > 128) {
        alert("Number entered was not within the specified requirements. Please try again."); // alerting you that the number entered was either lower than 8 or higher than 128
        return "Try Again"
    } else if (isNaN(pwLength)) {
        alert("Value entered is not a number. Please try again."); // alerting you that the value entered was not a number
        return "Try Again"
    } else
    var pwUpperC = confirm("Would you like Upper Case letters in your password? OK = Yes CANCEL = NO"); // prompting you to choose if you would like upper case letters
    console.log(pwUpperC) // console logging prompt for upper case letters
    var pwLowerC = confirm("Would you like Lower Case letters in your password? OK = Yes CANCEL = NO"); // prompting you to choose if you would like lower case letters
    console.log(pwLowerC) // console logging prompt for lower case letters
    var pwNumbers = confirm("Would you like numbers in your password? OK = Yes CANCEL = NO"); // prompting you to choose if you would like numbers
    console.log(pwNumbers) // console logging prompt for numbers
    var pwSpecial = confirm("Would you like special characters in your password? OK = Yes CANCEL = NO"); // prompting you to choose if you would like special characters
    console.log(pwSpecial) // console logging prompt for special characters
// if statement that lets you know you need to select at least one category for your password
    if (!pwUpperC && !pwLowerC && !pwNumbers && !pwSpecial) {
        alert("No specifications were selected. Please select at least one.");
        return "Try Again";
    } else {

        // if statement for selecting the Uppercase characters
      if (pwUpperC) {
        Characters = Characters.concat(upperC);
        }

        // if statement for selecting the Lowercase characters
        if (pwLowerC) {
            Characters = Characters.concat(lowerC);
            
        }

        // if statement for selecting the numbers
        if (pwNumbers) {
            Characters = Characters.concat(numbers);
            
        }

        // if statement for selecting the special characters
        if (pwSpecial) {
            Characters = Characters.concat(special);

        }
        // console logging the selected characters 
        console.log(Characters);

        // created loop to randomize each character for the desired password length
        for (var i = 0; i < pwLength; i++) {
            finalPW = finalPW.concat(Characters[Math.floor(Math.random() * Characters.length)]);
            console.log(finalPW);
        }

        // resets the function so it does not continue to add characters if you want to generate a new password without having to referesh the webpage
        Characters = [];
        var password = finalPW;
        finalPW = "";
        // displays the randomly generated password
        return password;
    }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);