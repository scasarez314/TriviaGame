
// need an inital start function 
initalStart();

function initalStart() {
    $("#triviaQestions").hide();


}

//create a start button to lead to the questions.
$("#showTriviaButton").on("click", (function () {

    //runTimer function
    runtimer();
    //generateHtml() questions
    $("#triviaQuestions").show()
    //after its toggled button should hide and show done button.




}));


//need a timer.
var time = 10;
var intervalId;

function runtimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

}
function decrement() {
    time--;
    $("#timeCounter").html("<h2>" + time + "</h2>");

    if (time === 0) {
        stopTimer();
        //toggle doneButton() load "All Done screen".

    }
}
function stopTimer() {

    clearInterval(intervalId);

}


//each question should have options to choose from.


//while the answers are being chosen they should be tracked 
//^^^for the right answer/wrong answer.

//Done button should take you to a new screen where the 
// ^^^questions they have right/wrong will show

// need a restart reset function