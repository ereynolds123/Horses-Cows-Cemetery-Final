
//Declaring Variables
let scoreText;
let scoreTeamOne = 0;
let scoreTeamTwo = 0;

//Get the values from localstorage if they exist
let scoreTeamOneTemp = localStorage.getItem("scoreTeamOne")
let scoreTeamTwoTemp = localStorage.getItem("scoreTeamTwo")
if (scoreTeamOneTemp) {
    scoreTeamOne = parseInt(scoreTeamOneTemp)
}
if (scoreTeamTwoTemp) {
    scoreTeamTwo = parseInt(scoreTeamTwoTemp)
}


// Storing score in local storage to persist the data
localStorage.setItem("scoreTeamOne", scoreTeamOne);
localStorage.setItem("scoreTeamTwo", scoreTeamTwo);


document.getElementById("scoreTotalTeamOne").innerHTML = scoreTeamOne;
document.getElementById("scoreTotalTeamTwo").innerHTML = scoreTeamTwo;


// Updating score in local storage when it changes
function updateLocalStorage() {
    localStorage.setItem("scoreTeamOne", scoreTeamOne);
    localStorage.setItem("scoreTeamTwo", scoreTeamTwo);
    console.log(`update scores: ${scoreTeamOne} and ${scoreTeamTwo}`)

}

//Adding to Team One Score
function addTenTeamOne() {
    scoreTeamOne += 10;
    document.getElementById("scoreTotalTeamOne").innerHTML = scoreTeamOne;
    updateLocalStorage();
};

function subtractOneTeamOne() {
    scoreTeamOne -= 1;
    document.getElementById("scoreTotalTeamOne").innerHTML = scoreTeamOne;
    updateLocalStorage();
};

function subtractOneHundredTeamOne() {
    scoreTeamOne -= 100;
    document.getElementById("scoreTotalTeamOne").innerHTML = scoreTeamOne;
    updateLocalStorage();
};

//Adding to Team Two Score
function addTenTeamTwo() {
    scoreTeamTwo += 10;
    document.getElementById("scoreTotalTeamTwo").innerHTML = scoreTeamTwo;
    updateLocalStorage();
};

function subtractOneTeamTwo() {
    scoreTeamTwo -= 1;
    document.getElementById("scoreTotalTeamTwo").innerHTML = scoreTeamTwo;
    updateLocalStorage();
};

function subtractOneHundredTeamTwo() {
    scoreTeamTwo -= 100;
    document.getElementById("scoreTotalTeamTwo").innerHTML = scoreTeamTwo;
    updateLocalStorage();
};

//Alert Winner and Restart the game

function winningMessage() {
    var result;
    if (scoreTeamOne > scoreTeamTwo) {
        result = `Team One has won with a score of ${scoreTeamOne}`;
    } else if (scoreTeamTwo > scoreTeamOne) {
        result = `Team Two has won with a score of ${scoreTeamTwo}`;
    } else {
        result = `It's a tie with a score of ${scoreTeamOne}`;
    }

    // Create popup div
    var popupDiv = document.createElement('div');
    popupDiv.id = 'popup';

    // Create popup content
    var popupContent = document.createElement('div');
    popupContent.id = 'popup-content';

    // Create title
    var title = document.createElement('h2');
    title.textContent = 'Congratulations!';
    popupContent.appendChild(title);

    // Create message
    var message = document.createElement('p');
    message.textContent = result; // Display the result dynamically
    popupContent.appendChild(message);

    // Create close button
    var closeButton = document.createElement('button');
    closeButton.textContent = 'Start a new game';
    closeButton.addEventListener('click', function () {
        resetValues()
    });
    popupContent.appendChild(closeButton);

    // Append popup content to popup div
    popupDiv.appendChild(popupContent);

    // Append popup div to body
    document.body.appendChild(popupDiv);

    function resetValues() {
        popupDiv.remove();
        localStorage.setItem("scoreTeamOne", "0");
        localStorage.setItem("scoreTeamTwo", "0");
        location.reload();
    }

}

function getCount(animal, team) {
    var count = parseInt(prompt(`Enter the number of ${animal}s to add to ${team}:`));
    if (isNaN(count) || count <= 0) {
        alert("Invalid input. Please enter a positive number.")
        return;
    }
    if (animal === "horse") {
        if (team === "teamOne") {
            scoreTeamOne += count * 10;
            document.getElementById("scoreTotalTeamOne").innerHTML = scoreTeamOne;
        } else {
            scoreTeamTwo += count * 10;
            document.getElementById("scoreTotalTeamTwo").innerHTML = scoreTeamTwo;
        }
    } else if (animal === "cow") {
        if (team === "teamOne") {
            scoreTeamOne -= count;
            document.getElementById("scoreTotalTeamOne").innerHTML = scoreTeamOne;
        } else {
            scoreTeamTwo -= count;
            document.getElementById("scoreTotalTeamTwo").innerHTML = scoreTeamTwo;
        }
    } else if (animal === "cemetery") {
        if (team === "teamOne") {
            scoreTeamOne -= count * 100;
            document.getElementById("scoreTotalTeamOne").innerHTML = scoreTeamOne;
        } else {
            scoreTeamTwo -= count * 100;
            document.getElementById("scoreTotalTeamTwo").innerHTML = scoreTeamTwo;
        }
    }
    updateLocalStorage();
}

function instructionsMessage() {
    alert("Drive safely!\n\nIf you see a horse on your side, click the horse button.\n\nIf you see a cow on your opponent's side, click the cow button.\n\n If you see a cemetery on your opponent's side, click the cemetery button")
}