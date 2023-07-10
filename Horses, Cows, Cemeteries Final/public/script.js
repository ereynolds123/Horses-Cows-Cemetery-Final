//Declaring Variables
let scoreText;
let scoreTeamOne = 0;
let scoreTeamTwo = 0;

//Get the values from localstorage if they exist
let scoreTeamOneTemp =localStorage.getItem("scoreTeamOne")
let scoreTeamTwoTemp =localStorage.getItem("scoreTeamTwo")
if(scoreTeamOneTemp){
   scoreTeamOne = parseInt(scoreTeamOneTemp)
}
if(scoreTeamTwoTemp){
    scoreTeamTwo = parseInt(scoreTeamTwoTemp)
 }

 console.log(`scores: ${scoreTeamOne} and ${scoreTeamTwo}`)
// Storing score in local storage to persist the data
localStorage.setItem("scoreTeamOne", scoreTeamOne);
localStorage.setItem("scoreTeamTwo", scoreTeamTwo);
console.log(`scores: ${scoreTeamOne} and ${scoreTeamTwo}`)

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

function instructionsMessage() {
    // Create popup div
    var popupDiv = document.createElement('div');
    popupDiv.id = 'popup';
    
    // Create popup content
    var popupContent = document.createElement('div');
    popupContent.id = 'popup-content';
    
    // Create title
    var title = document.createElement('h2');
    title.textContent = 'Instructions';
    popupContent.appendChild(title);
    
    // Create message
    var message = document.createElement('p');
    popupContent.appendChild(message);
    
    // Create list
    var list = document.createElement('ul');
    var listItem1 = document.createElement('li');
    listItem1.textContent = 'Click on the horse button to when you see a horse on your side of the car';
    list.appendChild(listItem1);
    var listItem2 = document.createElement('li');
    listItem2.textContent = 'When you opponent spots a cow on your side, hit the cow button';
    list.appendChild(listItem2);
    var listItem3 = document.createElement('li');
    listItem3.textContent = 'When you cemetery spots a cow on your side, hit the cemetery button';
    list.appendChild(listItem3);
    popupContent.appendChild(list);
    var listItem4 = document.createElement('li');
    listItem4.textContent = 'Drive safely! This scorekeeper is for passengers only.';
    list.appendChild(listItem4);
    popupContent.appendChild(list);
    
    // Create close button
    var closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', function() {
      popupDiv.remove();
    });
    popupContent.appendChild(closeButton);
    
    // Append popup content to popup div
    popupDiv.appendChild(popupContent);
    
    // Append popup div to body
    document.body.appendChild(popupDiv);
  }



  function winningMessage() {
    var result;
    if (scoreTeamOne > scoreTeamTwo) {
        result = "Team One has won!";
    } else if (scoreTeamTwo > scoreTeamOne) {
        result = "Team Two has won!";
    } else {
        result = "It's a tie!";
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
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', function() {
        popupDiv.remove();
    });
    popupContent.appendChild(closeButton);

    // Append popup content to popup div
    popupDiv.appendChild(popupContent);

    // Append popup div to body
    document.body.appendChild(popupDiv);
}

