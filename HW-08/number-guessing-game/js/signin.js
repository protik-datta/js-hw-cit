let userData = JSON.parse(localStorage.getItem("usersData") || "[]");

const successPopup = document.querySelector("#successPopup");
const errorPopup = document.querySelector("#errorPopup");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const remember_me = document.querySelector("#remember_me");
const signin_form = document.querySelector("#signin_form");

// ERROR FUNCTION
function showError(msg) {
  errorPopup.textContent = msg;
  errorPopup.classList.remove("-translate-y-full");
  errorPopup.classList.add("translate-y-0");
  setTimeout(() => {
    errorPopup.classList.remove("translate-y-0");
    errorPopup.classList.add("-translate-y-full");
  }, 2000);
}

// SUCCESS FUNCTION
function showSuccess(msg) {
  successPopup.textContent = msg;
  successPopup.classList.remove("-translate-y-full");
  successPopup.classList.add("translate-y-0");
  setTimeout(() => {
    successPopup.classList.remove("translate-y-0");
    successPopup.classList.add("-translate-y-full");
  }, 2000);
}

// FORM SUBMIT
signin_form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!email.value) {
    showError("An email address is required to log in your account");
    return;
  }

  if (!password.value) {
    showError("A password is required to log in your account");
    return;
  }

  const user = userData.find((e) => e.email === email.value);

  if (!user) {
    showError(
      "❌ User Not Found !! If you don't have an account create an account."
    );
    email.value = "";
    password.value = "";
    return;
  } else if (user.password !== password.value) {
    showError("❌ Password Incorrect..Try Again !!");
    email.value = "";
    password.value = "";
    return;
  } else {
    showSuccess("✅ Sign in successful!");

    // REMEMBER ME
    if (remember_me.checked) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(user));
    } else {
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("currentUser", JSON.stringify(user));
    }

    setTimeout(() => {
      window.location.replace("game.html");
    }, 1000);
  }
});
