const playerScoreEl = document.getElementById("playerScore");
const computerScoreEl = document.getElementById("computerScore");

const choices = document.querySelectorAll(".choice");

const messageEl = document.getElementById("message");
const resetGame = document.querySelector(".reset");

let playerScore = 0;
let computerScore = 0;
const winningScore = 10;
let lastPlayerChoice = null;

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    if (playerScore >= winningScore || computerScore >= winningScore) return;

    const playerChoice = choice.dataset.choice;

    let computerChoice;

    if (lastPlayerChoice && Math.random() < 0.7) {
      if (lastPlayerChoice === "rock") computerChoice = "paper";
      else if (lastPlayerChoice === "paper") computerChoice = "scissors";
      else if (lastPlayerChoice === "scissors") computerChoice = "paper";
    } else {
      computerChoice = ["rock", "paper", "scissors"][
        Math.floor(Math.random() * 3)
      ];
    }

    lastPlayerChoice = playerChoice;

    let result = "";

    if (playerChoice === computerChoice) {
      result = `Draw! Both chose ${playerChoice}`;
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      playerScore++;
      playerScoreEl.textContent = playerScore;
      result = `You Win! ${playerChoice} beats ${computerChoice}`;
    } else {
      computerScore++;
      computerScoreEl.textContent = computerScore;
      result = `Computer Wins! ${computerChoice} beats ${playerChoice}`;
    }
    messageEl.textContent = result;

    if (playerScore === winningScore) {
      messageEl.textContent = "🎉 You Won the Game!";
      startConfetti();
    }
    if (computerScore === winningScore) {
      messageEl.textContent = "💻 Computer Won the Game!";
      startConfetti();
    }
  });
});

resetGame.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = 0;
  computerScoreEl.textContent = 0;
  messageEl.textContent = "Make your move 👆🏻";
  stopConfetti();
});

let confettiFrameId;

function startConfetti() {
  const end = Date.now() + 3000;
  const colors = ["#bb0000", "#ffffff"];

  function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 70,
      origin: { x: 0, y: 1 },
      colors: colors,
    });

    confetti({
      particleCount: 2,
      angle: 120,
      spread: 70,
      origin: { x: 1, y: 1 },
      colors: colors,
    });

    confetti({
      particleCount: 2,
      angle: 90,
      spread: 70,
      origin: { x: 0.3, y: 1 },
      colors: colors,
    });

    confetti({
      particleCount: 2,
      angle: 90,
      spread: 70,
      origin: { x: 0.5, y: 1 },
      colors: colors,
    });

    confetti({
      particleCount: 2,
      angle: 90,
      spread: 70,
      origin: { x: 0.7, y: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      confettiFrameId = requestAnimationFrame(frame);
    }
  }

  frame();
}

function stopConfetti() {
  cancelAnimationFrame(confettiFrameId);
}
