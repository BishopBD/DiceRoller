"use strict";

function getDiceSelection() {
    return document.getElementById("diceSelection");
}

function getClearButton() {
    return document.getElementById("clearDice");
}

function getDiceArgumentsFromNumber(max) {
    return {
        Max : max,
        Id : "d" + max
    }
}

function registerDiceOnClick(value) {
    document.getElementById(value.Id).onclick = function () {

        var li = document.createElement("li");
        li.textContent = value.Id.toUpperCase();
        li.setAttribute("max", value.Max);

        getDiceSelection().appendChild(li);
    }
}

function clearDiceSelection() {
    var root = getDiceSelection();

    while (root.firstChild) {
        root.removeChild(root.firstChild);
    }
}

var diceIds =
    [
        getDiceArgumentsFromNumber(4),
        getDiceArgumentsFromNumber(6),
        getDiceArgumentsFromNumber(8),
        getDiceArgumentsFromNumber(10),
        getDiceArgumentsFromNumber(12),
        getDiceArgumentsFromNumber(20)
    ];

diceIds.forEach(registerDiceOnClick);

getClearButton().onclick = function () {
    clearDiceSelection();
}