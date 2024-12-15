//DOM elements
const heading = document.querySelector("#question");
const allOptions = document.querySelectorAll(".options");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");
const ScoreBoard = document.querySelector(".scoreBoard");

//track score
let score = 0;

//fetch questions from API
let fetchQuestions = async () => {
  try {
    let response = await fetch("https://the-trivia-api.com/v2/questions");
    return await response.json();
  } catch (error) {
    console.error("Error fetching Questions :", error);
    alert("Error fetching Questions!");
  }
};

//generating random number
let RandomNum = () => {
  return Math.floor(Math.random() * 4);
};

let getQuestions = async () => {
  let response = await fetchQuestions();

  allOptions.forEach((element) => {
    element.style.outline = "none";
  });

  let A;
  let B;
  let C;
  let D;

  // Shuffle answers
  let randomIndex = RandomNum();
  if (randomIndex == 0) {
    A = response[0].incorrectAnswers[0];
    B = response[0].incorrectAnswers[1];
    C = response[0].incorrectAnswers[2];
    D = response[0].correctAnswer;
  } else if (randomIndex == 1) {
    A = response[0].incorrectAnswers[0];
    D = response[0].incorrectAnswers[1];
    C = response[0].incorrectAnswers[2];
    B = response[0].correctAnswer;
  } else if (randomIndex == 2) {
    B = response[0].incorrectAnswers[0];
    C = response[0].incorrectAnswers[1];
    D = response[0].incorrectAnswers[2];
    A = response[0].correctAnswer;
  } else if (randomIndex == 3) {
    C = response[0].incorrectAnswers[0];
    D = response[0].incorrectAnswers[1];
    A = response[0].incorrectAnswers[2];
    B = response[0].correctAnswer;
  }

  // Updating DOM with question and answers
  heading.innerText = response[0].question.text;
  option1.innerText = A;
  option2.innerText = B;
  option3.innerText = C;
  option4.innerText = D;

  // Add event listeners to options
  allOptions.forEach((val) => {
    val.addEventListener("click", (evt) => {
      if (evt.target.innerText == response[0].correctAnswer) {
        evt.target.style.outline = "2px solid green";
        score++;
        ScoreBoard.innerText = `Total Score = ${score}`;
        setTimeout(getQuestions, 500);
      } else {
        evt.target.style.outline = "2px solid red";
      }
    });
  });
};

// Initialize the quiz
window.addEventListener("DOMContentLoaded", getQuestions);
