"use strict";

function getDiceSelectionContainer() {
    return document.getElementById("diceSelectionContainer");
}

function getClearButton() {
    return document.getElementById("clearDice");
}

function getDiceArgumentsFromNumber(max) {
    return {
        Max: max,
        Id: "d" + max
    }
}

function registerDiceOnClick(value) {
    document.getElementById(value.Id).onclick = function () {
        createUserDice(value.Id, value.Max);
    }
}

//contentText: "d8"
//diceSizeNum: 8
var createUserDice = (contentText, diceSizeNum) => {
    const container = getDiceSelectionContainer();
    var outerDiv = document.createElement("div");
    outerDiv.setAttribute("max", diceSizeNum);
    var classes = "user-dice-instance-container render-d" + diceSizeNum;
    outerDiv.setAttribute("class", classes);
    var innerDiv = document.createElement("p");
    innerDiv.textContent = contentText.toUpperCase();
    innerDiv.setAttribute("class", "user-dice-instance-content");
    outerDiv.appendChild(innerDiv);
    container.appendChild(outerDiv);
}

function clearDiceSelection() {
    var root2 = getDiceSelectionContainer();
    while (root2.firstChild) {
        root2.removeChild(root2.firstChild);
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