$(document).ready(function () {

    initalStart();



});


// an inital start function 
function initalStart() {
    //hide questions
    $("#triviaQuestions").hide();
    //hide done button
    $("#done").hide();
    //hide results 
    $("#questionResults").hide();


}

//create a start button to lead to the questions.
$("#showTriviaButton").on("click", (function () {

    //runTimer function
    runtimer();
    //generateHtml() questions
    $("#triviaQuestions").show();
    //after its toggled button should hide and show done button.
    $("#showTriviaButton").hide();
    //show done button
    $("#done").show();
    //hide result window
    $("#questionsResults").hide();



}));

//need a timer
var time = 10;
var intervalId;

function runtimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

}

function decrement() {
    time--;
    $("#yellow").html(time);

    if (time === 0) {
        stopTimer();
        resultWindow();
        actualTriviaQuestions();


    }
}

function stopTimer() {

    clearInterval(intervalId);

}

var numCorrect = 0;
var numWrong = 0;
var numUnanswered = 0;

$("#done").on("click", function () {
    stopTimer();
    resultWindow();
    actualTriviaQuestions();

});


function actualTriviaQuestions() {

    var q1 = $('input[name=questionOne]:checked').val();
    console.log(q1);

    if (q1 === "correct") {
        numCorrect++
        $("#numCorrect").html(numCorrect)
    } else if (q1 === "incorrect") {
        numWrong++
        $("#numWrong").html(numWrong)
    } else if (q1 != "incorrect" || "correct") {
        numUnanswered++
        $("#numunAnswered").html(numUnanswered)

    }

    var q2 = $('input[name=questionTwo]:checked').val();

    if (q2 === "correct") {
        numCorrect++
        $("#numCorrect").html(numCorrect)
    } else if (q2 === "incorrect") {
        numWrong++
        $("#numWrong").html(numWrong)
    } else if (q2 != "incorrect" || "correct") {
        numUnanswered++
        $("#numunAnswered").html(numUnanswered)

    }

    console.log(q2);

    var q3 = $('input[name=questionThree]:checked').val();

    if (q3 === "correct") {
        numCorrect++
        $("#numCorrect").html(numCorrect)
    } else if (q3 === "incorrect") {
        numWrong++
        $("#numWrong").html(numWrong)
    } else if (q3 != "incorrect" || "correct") {
        numUnanswered++
        $("#numunAnswered").html(numUnanswered)

    }

    console.log(q3);


}


function resultWindow() {
    $("#questionResults").show();
    $("#showTriviaButton").hide();
    $("#done").hide();
    $("#triviaQuestions").hide();
    $("#timeCounter").hide();
}