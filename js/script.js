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

let fifthUi = document.querySelector(".fifthUi");
let fifthUiHeading = document.querySelector(".fifthUiHeading");
let fifthUiError = document.querySelector(".fifthUiError");

let lives = 5;


function showMessage(event) {

    event.style.display = "block";

    setTimeout(() => {
        event.style.display = "none";
    }, 4000);
}


firstSubmit.addEventListener("click", () => {

    let value = Number(firstInput.value);
    if (value) {
        firstUiError.innerHTML = "Please enter a string";
        showMessage(firstUiError);
    } else if (value == " ") {
        firstUiError.innerHTML = "Please enter a valid Name";
        showMessage(firstUiError);
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
        showMessage(secondUiError);
    } else if (!value) {
        secondUiError.innerHTML = "Please enter a number not string";
        showMessage(secondUiError);
    } else {
        if (value > 0 && value <= 10) {
            secondUi.style.display = "none";
            thirdUi.style.display = "block";
        } else {
            secondUiError.innerHTML = "Please enter a number between 1 and 10";
            showMessage(secondUiError);
        }
    }

})

thirdSubmit.addEventListener("click", () => {

    let value = Number(thirdInput.value);
    if (value) {
        thirdUiError.innerHTML = "Please enter a string";
        showMessage(thirdUiError);
    } else if (value == " ") {
        thirdUiError.innerHTML = "Please enter a valid Name";
        showMessage(thirdUiError);
    } else {
        thirdUi.style.display = "none";
        fourthUi.style.display = "block";
        fourthUiHeading.innerHTML = `Second Player ${thirdInput.value}`;
    }

})

fourthSubmit.addEventListener("click", () => {

    let value = Number(fourthInput.value);
    if (value == "") {
        fourthUiError.innerHTML = "Please Enter a number";
        showMessage(fourthUiError);

    } else if (!value) {
        fourthUiError.innerHTML = "Please enter a number not string";
        showMessage(fourthUiError);
    } else if (value > 0 && value <= 10) {
        if (value == secondInput.value) {
            fourthUi.style.display = "none";
            fifthUi.style.display = "block";
            fifthUiHeading.innerHTML = `${thirdInput.value} Wins`;

            firstInput.value = "";
            secondInput.value = "";
            thirdInput.value = "";
            fourthInput.value = "";
        }
        else {
            lives--;
            fourthUiError.innerHTML = `Wrong guess. You have ${lives} chances left`;
            fourthUiHeading.innerHTML = "Second Player";
            showMessage(fourthUiError);
            if (lives == 0) {
                fourthUi.style.display = "none";
                fifthUi.style.display = "block";
                fifthUiHeading.innerHTML = `${firstInput.value} Wins`;

                firstInput.value = "";
                secondInput.value = "";
                thirdInput.value = "";
                fourthInput.value = "";
            }
        }
    }
    else {
        fourthUiError.innerHTML = "Please enter a number between 1 and 10";
        showMessage(fourthUiError);
    }
})

