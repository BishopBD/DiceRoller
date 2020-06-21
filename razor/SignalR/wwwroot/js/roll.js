"use strict";

function getRollButton() {
    return document.getElementById("rollDice");
}

function getDiceSelection() {
    return document.getElementById("diceSelection");
}

function getDiceSelectionItems() {
    return getDiceSelection().getElementsByTagName("li");
}

function getDiceToRoll() {
    var diceToRoll = [];

    var selectedDice =
        getDiceSelectionItems();

    for (var i = 0; i < selectedDice.length; i++) {

        var dice = {
            MaximumResult : selectedDice[i].getAttribute("max")
        };

        diceToRoll.push(dice);
    }

    return diceToRoll;
}
var connection = new signalR.HubConnectionBuilder().withUrl("/rollHub").build();

////Disable send button until connection is established
getRollButton().disabled = true;

connection.on("RollResult", function (diceResult) {
    var encodedMsg = "";
    diceResult.forEach(function (value) {
        encodedMsg = encodedMsg + value.DiceName + ":" + value.Result + ";";        
    });

    var li = document.createElement("li");
    li.textContent = encodedMsg;
    document.getElementById("messagesList").appendChild(li);
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