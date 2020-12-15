/*user test state
 * problems - a list of problems
 * correctAnswers -  the number of user's correct answers
 * currentQuestion - a display question
 * userAnswers - a list of user answers
 */

let userState = {
  problems: [],
  correctAnswers: 0,
  currentQuestion: 0,
  userAnswers: [],
};

//random a number in the range min to mix
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//generate a math problem and set correct answer
function generateProblemAnswer() {
  let tmp = {
    operand1: randomNumber(1, 10),
    operand2: randomNumber(1, 10),
    operator: ["+", "-", "*"][randomNumber(0, 2)],
  };

  //set problem to prob object
  let prob = { question: tmp.operand1 + tmp.operator + tmp.operand2 };

  //set answer to prob object
  switch (tmp.operator) {
    case "+":
      prob.answer = tmp.operand1 + tmp.operand2;
      break;
    case "-":
      prob.answer = tmp.operand1 - tmp.operand2;
      break;
    case "*":
      prob.answer = tmp.operand1 * tmp.operand2;
      break;
  }

  // console.log(`prob: ${prob}`);
  return prob;
}

//add each problem to problems array
function generateProblems(question) {
  for (let i = 0; i < question; i++) {
    userState.problems[i] = generateProblemAnswer();
  }
}

//display the problem at the specified index 
function showQuestion(questIndex) {
  const problemLabel = document.getElementById("quest");
  problemLabel.innerHTML = `${userState.problems[questIndex].question} = `;
}


let numOfQuestions = prompt("Enter the number of Math questions generated");
generateProblems(numOfQuestions);
showQuestion(userState.currentQuestion);

//console.log(`length: ${userState.problems.length}`);
let btn = document.getElementById("next");
btn.addEventListener("click", next, false);

function next() {
  //console.log("current: "+userState.currentQuestion);
  userState.userAnswers[userState.currentQuestion] = document.getElementById("ans").value;
  if (userState.userAnswers[userState.currentQuestion] == "") {
    return;
  }
  if (userState.userAnswers[userState.currentQuestion] == userState.problems[userState.currentQuestion].answer) {
    userState.correctAnswers++;
    //console.log(`correct: ${userState.correctAnswers}`);
  }
  if (userState.currentQuestion == userState.problems.length-1) {
    alert(`Your Scores: ${userState.correctAnswers}`);
  } else {
    userState.currentQuestion++;
    showQuestion(userState.currentQuestion);
    document.getElementById("ans").value = "";
  }
  
}
