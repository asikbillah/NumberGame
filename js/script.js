let firstUi = document.querySelector(".firstUi");
let firstInput = document.querySelector(".firstInput");
let firstSubmit = document.querySelector(".firstSubmit");
let firstUiError = document.querySelector(".firstUiError");


let secondUi = document.querySelector(".secondUi");
let secondUiHeading = document.querySelector(".secondUiHeading");
let secondInput = document.querySelector(".secondInput");
let secondSubmit = document.querySelector(".secondSubmit");
let secondUiError = document.querySelector(".secondUiError");


let thirdUi = document.querySelector(".thirdUi");
let thirdUiHeading = document.querySelector(".thirdUiHeading");
let thirdInput = document.querySelector(".thirdInput");
let thirdSubmit = document.querySelector(".thirdSubmit");
let thirdUiError = document.querySelector(".thirdUiError");


let fourthUi = document.querySelector(".fourthUi");
let fourthUiHeading = document.querySelector(".fourthUiHeading");
let fourthInput = document.querySelector(".fourthInput");
let fourthSubmit = document.querySelector(".fourthSubmit");
let fourthUiError = document.querySelector(".fourthUiError");

let lives = 5;

firstSubmit.addEventListener("click", () => {
    let value = Number(firstInput.value);
    if (value) {
        firstUiError.innerHTML = "Please enter a string";
    } else if (value == " ") {
        firstUiError.innerHTML = "Please enter a valid Name";
    } else {
        firstUi.style.display = "none";
        secondUi.style.display = "block";
        secondUiHeading.innerHTML = `First Player ${firstInput.value}`;
    }

})

secondSubmit.addEventListener("click", () => {

    let value = Number(secondInput.value);
    if (value == "") {
        secondUiError.innerHTML = "Please Enter a number";
    } else if (!value) {
        secondUiError.innerHTML = "Please enter a number not string";
    } else {
        if (value > 0 && value <= 10) {
            secondUi.style.display = "none";
            thirdUi.style.display = "block";
            thirdUiHeading.innerHTML = "Second Player";
        } else {
            secondUiError.innerHTML = "Please enter a number between 1 and 10";
        }
    }

})

thirdSubmit.addEventListener("click", () => {

    let value = Number(thirdInput.value);


    if (value == "") {
        thirdUiError.innerHTML = "Please Enter a number";

    } else if (!value) {
        thirdUiError.innerHTML = "Please enter a number not string";
    } else if (value > 0 && value <= 10) {
        if (value == secondInput.value) {
            thirdUi.style.display = "none";
            fourthUi.style.display = "block";
            fourthUiHeading.innerHTML = "Second Player Wins";
        }
        else {
            lives--;
            thirdUiError.innerHTML = `Wrong guess. You have ${lives} chances left`;
            thirdUiHeading.innerHTML = "Second Player";
            if (lives == 0) {
                thirdUi.style.display = "none";
                fourthUi.style.display = "block";
                fourthUiHeading.innerHTML = "First Player Win!";
            }
        }
    }
    else {
        thirdUiError.innerHTML = "Please enter a number between 1 and 10";
    }
})
