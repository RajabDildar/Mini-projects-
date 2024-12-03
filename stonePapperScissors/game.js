let rockNum = 0;
let papperNum = 1;
let scissorNum = 2;
let userNum;

//accessing elements
let rock = document.querySelector("#choice1");
let papper = document.querySelector("#choice2");
let scissor = document.querySelector("#choice3");
let msg = document.querySelector("#msg");

//initializing scores
let userScore = 0;
let compScore = 0;

//generating random number by computer
function compNum() {
  return Math.floor(Math.random() * 3);
}

let userLose = () => {
  msg.innerText = "You lose!";
  msg.style.background = "red";
  compScore++;
  document.querySelector("#comp-score").innerText = compScore;
};

let userWin = () => {
  msg.innerText = "You Win!";
  msg.style.background = "green";
  userScore++;
  document.querySelector("#user-score").innerText = userScore;
};

let draw = () => {
  msg.innerText = "It was a draw.";
  msg.style.background = "#081829";
};

let playGame = () => {
  if (userNum === rockNum && compNum() === scissorNum) {
    return userWin();
  } else if (userNum === rockNum && compNum() === papperNum) {
    return userLose();
  } else if (userNum === papperNum && compNum() === rockNum) {
    return userWin();
  } else if (userNum === papperNum && compNum() === scissorNum) {
    return userLose();
  } else if (userNum === scissorNum && compNum() === papperNum) {
    return userWin();
  } else if (userNum === scissorNum && compNum() === rockNum) {
    return userLose();
  } else {
    return draw();
  }
};

rock.addEventListener("click", () => {
  userNum = rockNum;
  compNum();
  playGame();
});

papper.addEventListener("click", () => {
  userNum = papperNum;
  compNum();
  playGame();
});

scissor.addEventListener("click", () => {
  userNum = scissorNum;
  compNum();
  playGame();
});
