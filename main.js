let player1 = "Player1";
let player2 = "Player2";
let leaderboard = {};

// Edit names function
function editNames() {
    player1 = prompt("Please enter player 1's name");
    player2 = prompt("Please enter player 2's name");

    if (!player1 || !player2) {
        alert("Please enter valid names for both players.");
        return;
    }

    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
}

// Rolling dice function
function rollDice() {
    let diceNum1 = document.querySelector(".img1");
    let diceNum2 = document.querySelector(".img2");
    let result = document.querySelector('h1');
    let leaderboardContainer = document.getElementById('leaderboard-container');

    diceNum1.setAttribute("src", "dice-images/diceroll.gif");
    diceNum2.setAttribute("src", "dice-images/diceroll.gif");

    setTimeout(() => {
        let randomNum1 = Math.floor(Math.random() * 6) + 1;
        let randomNum2 = Math.floor(Math.random() * 6) + 1;

        diceNum1.setAttribute('src', 'dice-images/dice' + randomNum1 + '.png');
        diceNum2.setAttribute('src', 'dice-images/dice' + randomNum2 + '.png');

        // Winner method
        if (randomNum1 === randomNum2) {
            result.innerHTML = "Draw!";
        } else if (randomNum1 < randomNum2) {
            result.innerHTML = (player2 + " WINS!");
            updateLeaderboard(player2);
        } else {
            result.innerHTML = (player1 + " WINS!");
            updateLeaderboard(player1);
        }

        // Display leaderboard on the webpage
        displayLeaderboard(leaderboardContainer);
    }, 2500);
}

// Leaderboard update function
function updateLeaderboard(player) {
    leaderboard[player] = (leaderboard[player] || 0) + 1;
}

// Function to display leaderboard on the webpage
function displayLeaderboard(container) {
    container.innerHTML = "<h2>Leaderboard</h2><ul>";
    for (let player in leaderboard) {
        container.innerHTML += `<li>${player}: ${leaderboard[player]} wins</li>`;
    }
    container.innerHTML += "</ul>";
}