// Observational game that lets you count how many horses, cows and cemeteries you see

//Declaring Variables
let scoreText;
let scoreTeamOne = 0;
let scoreTeamTwo = 0;

//This section clicks on the various buttons for Team One and adds to the point total Team One. 
let clickOnTeamOneButtons =
    document.getElementById('horseTeamOne').addEventListener("click", addPointsTeamOne);

document.getElementById('cowTeamOne').addEventListener("click", subtractPointsTeamOne);

document.getElementById('cemeteryTeamOne').addEventListener("click", subtractPointsTeamOneHundredTeamOne);

//This section clicks on the various buttons for Team Two and adds to the point total for Team Two. 
let clickOnTeamTwoButtons =
    document.getElementById('horseTeamTwo').addEventListener("click", addPointsTeamTwo);

document.getElementById('cowTeamTwo').addEventListener("click", subtractPointsTeamTwo);

document.getElementById('cemeteryTeamTwo').addEventListener("click", subtractPointsTeamOneHundredTeamTwo);

//Function to get the count of items from the user
function getCount(item, team) {
    let count = prompt(`Enter the count of ${item}s:`);
    if (count !== null && count !== '') {
        if (team === 'teamOne') {
            updateScoreTeamOne(item, count);
        } else if (team === 'teamTwo') {
            updateScoreTeamTwo(item, count);
        }
    }
}

//Function to update Team One score based on user input
function updateScoreTeamOne(item, count) {
    if (item === 'horse') {
        scoreTeamOne += count * 10;
    } else if (item === 'cow') {
        scoreTeamOne -= count;
    } else if (item === 'cemetery') {
        scoreTeamOne -= count * 100;
    }
    document.getElementById("scoreTotalTeamOne").innerHTML = scoreTeamOne;
}

//Function to update Team Two score based on user input
function updateScoreTeamTwo(item, count) {
    if (item === 'horse') {
        scoreTeamTwo += count * 10;
    } else if (item === 'cow') {
        scoreTeamTwo -= count;
    } else if (item === 'cemetery') {
        scoreTeamTwo -= count * 100;
    }
    document.getElementById("scoreTotalTeamTwo").innerHTML = scoreTeamTwo;
}

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

}

function instructionsMessage() {
    alert("If you spot a horse on your team's side your team gets 10 points.\n\nIf you spot a cow on your opponent's side your opponent loses 1 point.\n\nIf you spot a cemetery on your opponent's side your opponent loses 100 points.\n\nWhen you spot something, click on the icon associated with the side it's on.\n\nYour game will save in the browser!")
}