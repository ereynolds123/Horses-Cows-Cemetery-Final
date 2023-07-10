//Declaring Variables
let scoreText;
let scoreTeamOne = 0;
let scoreTeamTwo = 0;

// Storing score in local storage to persist the data

localStorage.setItem("scoreTeamOne", scoreTeamOne);
localStorage.setItem("scoreTeamTwo", scoreTeamTwo);

// Retrieving score from local storage when the page loads

window.addEventListener("load", function() {
    scoreTeamOne = parseInt(localStorage.getItem("scoreTeamOne"));
    scoreTeamTwo = parseInt(localStorage.getItem("scoreTeamTwo"));
    document.getElementById("scoreTotalTeamOne").innerHTML = scoreTeamOne;
    document.getElementById("scoreTotalTeamTwo").innerHTML = scoreTeamTwo;
});

// Updating score in local storage when it changes

function updateLocalStorage() {
    localStorage.setItem("scoreTeamOne", scoreTeamOne);
    localStorage.setItem("scoreTeamTwo", scoreTeamTwo);
}

//Adding to Team One Score
function addTenTeamOne() {
    scoreTeamOne = scoreTeamOne + 10;
    document.getElementById("scoreTotalTeamOne").innerHTML = scoreTeamOne;
    updateLocalStorage();
};

function subtractOneTeamOne() {
    scoreTeamOne = scoreTeamOne - 1;
    document.getElementById("scoreTotalTeamOne").innerHTML = scoreTeamOne;
    updateLocalStorage();
};

function subtractOneHundredTeamOne() {
    scoreTeamOne = scoreTeamOne - 100;
    document.getElementById("scoreTotalTeamOne").innerHTML = scoreTeamOne;
    updateLocalStorage();
};

//Adding to Team Two Score
function addTenTeamTwo() {
    scoreTeamTwo = scoreTeamTwo + 10;
    document.getElementById("scoreTotalTeamTwo").innerHTML = scoreTeamTwo;
    updateLocalStorage();
};

function subtractOneTeamTwo() {
    scoreTeamTwo = scoreTeamTwo - 1;
    document.getElementById("scoreTotalTeamTwo").innerHTML = scoreTeamTwo;
    updateLocalStorage();
};

function subtractOneHundredTeamTwo() {
    scoreTeamTwo = scoreTeamTwo - 100;
    document.getElementById("scoreTotalTeamTwo").innerHTML = scoreTeamTwo;
    updateLocalStorage();
};

//Alert Winner and Restart the game

function winningMessage() {
    if (scoreTeamOne > scoreTeamTwo) {
        alert("Congratulations Team One!")

    } else if (scoreTeamTwo > scoreTeamOne) {
        alert("Congratulations Team Two!")

    } else if (scoreTeamOne == scoreTeamTwo) {
        alert("It's a tie!")

    }
    scoreTeamOne = 0;
    document.getElementById("scoreTotalTeamOne").innerHTML = scoreTeamOne;
    scoreTeamTwo = 0;
    document.getElementById("scoreTotalTeamTwo").innerHTML = scoreTeamTwo;

    updateLocalStorage();
}

function instructionsMessage() {
    alert("If you spot a horse on your team's side your team gets 10 points.\n\nIf you spot a cow on your opponent's side your opponent loses 1 point.\n\nIf you spot a cemetery on your opponent's side your opponent loses 100 points.\n\nWhen you spot something, click on the icon associated with the side it's on.\n\nYour game will save in the browser!")
}

//This section clicks on the various buttons for Team One and adds to the point total Team One. 
let clickOnTeamOneButtons =
    document.getElementById('horseTeamOne').addEventListener("click", addTenTeamOne);

document.getElementById('cowTeamOne').addEventListener("click", subtractOneTeamOne);

document.getElementById('cemeteryTeamOne').addEventListener("click", subtractOneHundredTeamOne);

//This section clicks on the various buttons for Team Two and adds to the point total for Team Two. 
let clickOnTeamTwoButtons =
    document.getElementById('horseTeamTwo').addEventListener("click", addTenTeamTwo);

document.getElementById('cowTeamTwo').addEventListener("click", subtractOneTeamTwo);

document.getElementById('cemeteryTeamTwo').addEventListener("click", subtractOneHundredTeamTwo);