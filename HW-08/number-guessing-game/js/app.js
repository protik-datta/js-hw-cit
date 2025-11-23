const guessForm = document.querySelector("#guessForm");
const guessInput = document.querySelector("#guessInput");
const attempts = document.querySelector("#attempts");

const submitBtn = document.querySelector("#submitBtn");
const resetBtn = document.querySelector("#resetBtn");
const restartBtn = document.querySelector("#restartBtn");
const logoutBtn = document.querySelector("#logoutBtn");

const successPopup = document.querySelector("#successPopup");
const errorPopup = document.querySelector("#errorPopup");

// CHECK LOGIN
if (
  !sessionStorage.getItem("isLoggedIn") &&
  !localStorage.getItem("isLoggedIn")
) {
  window.location.replace("signin.html");
}

// PREVENT BACK BUTTON
history.pushState(null, null, location.href);
window.addEventListener("popstate", () => {
  history.pushState(null, null, location.href);
});

// CURRENT USER
const currentUser =
  JSON.parse(sessionStorage.getItem("currentUser")) ||
  JSON.parse(localStorage.getItem("currentUser"));

// INITIAL ATTEMPTS
let attempt = Number(localStorage.getItem("attempt")) || 10;
attempts.innerHTML = `Attempts left: ${attempt}`;

let maxNum = 100;
let computerNumber = Math.floor(Math.random() * maxNum) + 1;

// ERROR FUNCTION
function showError(msg) {
  errorPopup.textContent = msg;
  errorPopup.classList.remove("-translate-y-full");
  errorPopup.classList.add("translate-y-0");
  setTimeout(() => {
    errorPopup.classList.remove("translate-y-0");
    errorPopup.classList.add("-translate-y-full");
  }, 3000);
}

// SUCCESS FUNCTION
function showSuccess(msg) {
  successPopup.textContent = msg;
  successPopup.classList.remove("-translate-y-full");
  successPopup.classList.add("translate-y-0");
  setTimeout(() => {
    successPopup.classList.remove("translate-y-0");
    successPopup.classList.add("-translate-y-full");
  }, 3000);
}

// GAME SUBMIT
guessForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const value = guessInput.value;

  // VALIDATIONS
  if (value === "") {
    showError("Input field cannot be empty!");
    return;
  }

  if (isNaN(value)) {
    showError("Please enter a valid number");
    return;
  }

  if (value < 1 || value > 100) {
    showError("Number must be between 1 and 100");
    guessInput.value = "";
    return;
  }

  // GAME LOGIC
  if (attempt <= 0) {
    showError("No attempts left! Restart the game.");
    submitBtn.disabled = true;
    return;
  }

  if (Number(value) !== computerNumber) {
    attempt--;
    localStorage.setItem("attempt", attempt);
    attempts.innerHTML = `Attempts left: ${attempt}`;
    showError("Incorrect guess. Please try again");
    guessInput.value = "";

    if (attempt === 0) {
      showError("No attempts left! Restarting the game…");
      submitBtn.disabled = true;
      guessInput.disabled = true;
      resetBtn.disabled = true;
    }
    return;
  }

  showSuccess("🎉 Correct guess! You win! Wanna play again? Restart the game!");
  guessInput.value = "";
  submitBtn.disabled = true;
  guessInput.disabled = true;
});

// RESET BUTTON
resetBtn.addEventListener("click", () => {
  guessInput.value = "";
});

// RESTART BUTTON
restartBtn.addEventListener("click", () => {
  attempt = 10;
  localStorage.setItem("attempt", attempt);
  location.reload();
});

// ENTER KEY SUBMIT
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    guessForm.dispatchEvent(new Event("submit"));
  }
});
