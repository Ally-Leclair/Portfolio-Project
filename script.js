//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var winterScore = 0;
var springScore = 0;
var fallScore = 0;
var summerScore = 0;
var result = document.getElementById("result");

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

//#variables for answer choice buttons for question 2.
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

//#variables for answer choice buttons for question 3.
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

//#variables for answer choice buttons for question 4.
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

//#variables for answer choice buttons for question 5
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

//#variables for answer choice buttons for question 6
var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

//#TODO: Add Event Listeners to your answer choice variables.

var q1a1 = document.getElementById('q1a1');
if(q1a1){
  q1a1.addEventListener('click', winter);
}
q1a2.addEventListener("click", fall);
q1a3.addEventListener("click", spring);
q1a4.addEventListener("click", summer);

q2a1.addEventListener("click", winter);
q2a2.addEventListener("click", spring);
q2a3.addEventListener("click", summer);
q2a4.addEventListener("click", fall);

q3a1.addEventListener("click", summer);
q3a2.addEventListener("click", winter);
q3a3.addEventListener("click", fall);
q3a4.addEventListener("click", spring);

q4a1.addEventListener("click", summer);
q4a2.addEventListener("click", spring);
q4a3.addEventListener("click", winter);
q4a4.addEventListener("click", fall);

q5a1.addEventListener("click", fall);
q5a2.addEventListener("click", spring);
q5a3.addEventListener("click", summer);
q5a4.addEventListener("click", winter);

q6a1.addEventListener("click", summer);
q6a2.addEventListener("click", fall);
q6a3.addEventListener("click", spring);
q6a4.addEventListener("click", winter);

q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);
q1a4.addEventListener("click", disableQ1);

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);
q2a4.addEventListener("click", disableQ2);

//Quiz Functions

// Extension 5 - Disable Buttons
function disableQ1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
}

function disableQ2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
}

function disableQ3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
}

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", disableQ3);
q3a4.addEventListener("click", disableQ3);

function enableQuestions() {
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
}

function winter() {
  winterScore += 1;
  questionCount += 1;
  // alert("winter");
  if (questionCount >= 6) {
    updateResult();
  }
}

function spring() {
  springScore += 1;
  questionCount += 1;
  // alert("spring");
  if (questionCount >= 6) {
    updateResult();
  }
}

function fall() {
  fallScore += 1;
  questionCount += 1;
  // alert("fall");
  if (questionCount >= 6) {
    updateResult();
  }
}

function summer() {
  summerScore += 1;
  questionCount += 1;
  // alert("summer");
  if (questionCount >= 6) {
    updateResult();
  }
}

function updateResult() {
  if (winterScore >= 4) {
    result.innerHTML = "Your personality suits Winter!";
  } else if (fallScore >= 4) {
    result.innerHTML = "Your personality suits Fall!";
  } else if (springScore >= 4) {
    result.innerHTML = "Your personality suits Spring!";
  } else if (summerScore >= 4) {
    result.innerHTML = "Your personality suits Summer!";
  } else {
    result.innerHTML =
      "Your personality is to diverse to reflet a single season!";
  }

}
  //Restart Quiz
  var restart = document.getElementById("restart");
  restart.addEventListener("click", restartQuiz);

  function restartQuiz() {
    result.innerHTML = "Your result is...";
    questionCount = 0;
    winterScore = 0;
    fallScore = 0;
    springScore = 0;
    summerScore = 0;
  }
