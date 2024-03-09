// edit player names
let player1 = "Player1";
let player2 = "Player2";

// edit names function
function editNames() {
    player1 = prompt("Please enter players name")
    player2 = prompt("Please enter players name")

    if (player1.length <1 || player2.length <1) {
        alert("Please Enter A Valid Name");
        return;
    }
    document.querySelector("p.Player1")
        .innerHTML = player1;

        document.querySelector("p.Player2")
        .innerHTML = player2;
}

function rollDice() {
    let diceNum1 = document.querySelector(".img1")
    let diceNum2 = document.querySelector(".img2")

    diceNum1.setAttribute("src", "dice-roll.gif")
    diceNum2.setAttribute("src", "dice-roll.gif")

    let result = document.querySelector('h1')
    setTimeout(() => {
        let randomNum1 = math.floor(math.random() *6)+1;
        let randomNum2 = math.floor(math.random() *6)+1;

        diceNum1.setAttribute('src', 'dice'+randomNum1+'.png');
        diceNum2.setAttribute('src', 'dice'+randomNum2+'.png');

        // winner method
        if (randomNum1 === randomNum2) {
            result.innerHTML = "Draw!"
        }
        else if (randomNum1 < randomNum2) {
            result.innerHTML = (player2 + " WINS!");
        }
        else {
            result.innerHTML = (player1 + " WINS!");
        }

    }, 2500);
}