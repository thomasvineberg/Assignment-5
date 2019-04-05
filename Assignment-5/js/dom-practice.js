/*eslint-env browser*/

/*

//STEP 1

function beenClicked() {
    "use strict";
    window.alert("I have been clicked");
}

//STEP 2

var myElement = document.getElementById("yourButton");

myElement.onclick = function () {
    "use strict";
    window.alert("I have been clicked");
};

//STEP 3

herButton.addEventListener("click", youBeenClicked);
function youBeenClicked() {
    window.alert("I have been clicked");
}

//STEP 4

hisButton.addEventListener("click", function (e) {
    window.alert(e.target.innerText);
}, false);



//STEP 5

document.addEventListener("DOMContentLoaded", init, false);
function init () {
    hisButton.addEventListener("click", function (e) {
    window.alert(e.target.innerText);
    }, false);
}

//STEP 6

redirect.addEventListener("click", function (e) {
    e.preventDefault();
    
});

//STEP 7

function alertSubmit() {
    { 
    document.getElementById("submitButton").disabled = true;
    var yourText;    
    yourText = document.getElementById("box").value;
    }
    window.alert(yourText);
}

//STEP 8

theNewPage.addEventListener("click", goToNewPage);
function goToNewPage() {
    window.open('newpage.html','newpage','width=300,height=300');
}

*/

//STEP 9 - not complete

//pressStart.addEventListener.window.setInterval("click", learnJavascript, 2000); 
//function learnJavascript() { window.console.log("Learning JavaScript is fun!"); }


//var stopIt = window.setInterval(learnJavascript, 2000);

//pressStop.addEventListener("click", stopJavascript);
//function stopJavascript() {
//    window.clearInterval(stopIt);
//}


//STEP 10

selectdropdown.addEventListener("click", makeSelection);
function makeSelection() {
    var choice = document.getElementById("selections").value;
    window.alert(choice);
}