//connection.on("ReceiveMessage", function (user, message) {
//    var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
//    var encodedMsg = user + " says " + msg;
//    var li = document.createElement("li");
//    li.textContent = encodedMsg;
//    document.getElementById("messagesList").appendChild(li);
//});
//var diceIds =
//    [
//        "d4",
//        "d6",
//        "d8",
//        "d10",
//        "d12",
//        "d20"
//    ];

//diceIds.forEach

//function registerDiceOnClick(value) {

//}

document.getElementById("d4").onclick = function () {
    var li = document.createElement("li");
    li.textContent = "D4";
    document.getElementById("diceSelection").appendChild(li);
}