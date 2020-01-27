// Assignment Code
var generateBtn = document.querySelector("#generate");



// arrays are set to a Math.random number. They follow the defined order.
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]"];
var numbers = "1234567890".split("");
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

//changable version of password
var randomPass = "";


// main variables 
var passLength;
var wantSpecial;
var wantNumbs;
var wantCaps


// Write password to the #password input
function writePassword() {
    var password = generatePassword(); {


    }
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
    passLength = prompt("Enter how many characters you want your password to be? (must be 8-128");
    wantSpecial = confirm("Do you want to have special characters within your password?");
    wantNums = confirm("And what about numbers?");
    wantCaps = confirm("You want some capitol letters?");


    // if statement to see if the password is an acceptible length
    if (passLength > 7 && passLength < 129) {

        // for loop that checks if the user wants a type of character, and randomly selects the ones they want. 
        for (let index = 0; index < passLength; index = randomPass.length) {
            var randomCharacterNumber = Math.floor(Math.random() * 4);
            var randomCharacter = "";
            if (wantSpecial === true && randomCharacterNumber === 0) {

                var specialRandom = Math.floor(Math.random() * 14);
                randomCharacter = specialCharacters[specialRandom];
            } else if (wantCaps === true && randomCharacterNumber === 1) {

                var upperRandom = Math.floor(Math.random() * 26);
                randomCharacter = upperAlpha[upperRandom];
            } else if (wantNums === true && randomCharacterNumber === 2) {

                var numberRandom = Math.floor(Math.random() * 10);
                randomCharacter = numbers[numberRandom];
            } else {
                var lowerRandom = Math.floor(Math.random() * 26);
                randomCharacter = alphabet[lowerRandom];
            }
            randomPass += randomCharacter;
        }
    }
    // if the user selects and unnacceptible length
    else {
        alert("please choose a legth between 8 and 128")
    }

    return randomPass;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);