"use strict";

function getRollButton() {
    return document.getElementById("rollDice");
}

function getDiceToRoll() {
    var diceToRoll = [];
    var selectedDice = document.getElementById("diceSelectionContainer").getElementsByTagName("div");

    for (var i = 0; i < selectedDice.length; i++) {

        var dice = {
            MaximumResult: selectedDice[i].getAttribute("max")
        };

        diceToRoll.push(dice);
    }

    return diceToRoll;
}
var connection = new signalR.HubConnectionBuilder().withUrl("/rollHub").build();
connection.serverTimeoutInMilliseconds = 600000;

////Disable send button until connection is established
getRollButton().disabled = true;

connection.on("RollResult", function (diceResult) {
    clearDiceSelection();
    //{Result: "2", DiceName: "4"}
    diceResult.forEach(function (value) {
        createUserDice(value.Result, value.DiceName)
    });
});

connection.start().then(function () {
    getRollButton().disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

getRollButton().addEventListener("click", function (event) {
    var diceToRoll =
        getDiceToRoll();

    connection.invoke("Roll", diceToRoll).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});