"use strict";

function getDiceSelection() {
    return document.getElementById("diceSelection");
}

function getClearButton() {
    return document.getElementById("clearDice");
}

function registerDiceOnClick(value) {
    document.getElementById(value).onclick = function () {
        var li = document.createElement("li");
        li.textContent = value.toUpperCase();
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
        "d4",
        "d6",
        "d8",
        "d10",
        "d12",
        "d20"
    ];


diceIds.forEach(registerDiceOnClick);

getClearButton().onclick = function () {
    clearDiceSelection();
}