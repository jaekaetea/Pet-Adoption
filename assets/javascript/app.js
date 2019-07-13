var num = 0;
var mySound = new Audio();
//var intervalId = setInterval(wait, 1000);

$(document).ready(function() {
    var a = "something";
    //catFacts();

function catFactsPull() {
    var catFactsURL = "https://cat-fact.herokuapp.com/facts";
    $.ajax({
        url: catFactsURL,
        method: "GET"
    })
    .then(function(response) {
        var catFacts = response.data;
        console.log(catFacts);
    })
};

function wait() {
    num = 30;
    clearInterval(intervalId);
    intervalId = setInterval(waiting, 1000);
};

function waiting() {
    num--;
    if (num === 0) {
        catFacts();
        num = 30;
    }
};

function play() {
    event.preventDefault();
    mySound.src = "assets/images/angel.aac";
    mySound.currentTime = 0;
    mySound.play();
}

$(document).on("click", "#submit", play);
});

