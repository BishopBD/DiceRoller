"use strict";

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

function registerDiceOnClick(value) {
    document.getElementById(value).onclick = function () {
        var li = document.createElement("li");
        li.textContent = value.toUpperCase();
        document.getElementById("diceSelection").appendChild(li);
    }
}