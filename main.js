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