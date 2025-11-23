const fullName = document.querySelector("#name");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password_confirmation = document.querySelector("#password_confirmation");
const signupForm = document.querySelector("#signup__form");

const errorPopup = document.querySelector("#errorPopup");
const successPopup = document.querySelector("#successPopup");

const togglePassword = document.querySelector("#togglePassword");
const togglePasswordConfirm = document.querySelector("#togglePasswordConfirm");

let userData = JSON.parse(localStorage.getItem("usersData") || "[]");

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

// EMAIL VALIDATION
function emailValidation(email) {
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// PASSWORD VALIDATION
function passwordCheck(password) {
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

// FORM SUBMIT
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!fullName.value.trim()) {
    showError("A valid name is required to create your account");
    return;
  } else if (!username.value.trim()) {
    showError("A valid username is required to create your account");
    return;
  } else if (!email.value.trim()) {
    showError("A valid email address is required to create your account");
    return;
  } else if (!password.value.trim()) {
    showError("A password is required to create your account");
    return;
  } else if (!password_confirmation.value.trim()) {
    showError("Password confirmation is required");
    return;
  } else if (password.value !== password_confirmation.value) {
    showError(
      "Please make sure your password and confirm password fields match"
    );
    return;
  } else if (!emailValidation(email.value)) {
    showError("Please enter a valid email address");
    return;
  } else if (!passwordCheck(password.value)) {
    showError(
      "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)."
    );
    return;
  } else {
    showSuccess("Account created successfully");

    let user = {
      name: fullName.value,
      username: username.value,
      email: email.value,
      password: password.value,
      cpassword: password_confirmation.value,
    };

    userData.push(user);
    localStorage.setItem("usersData", JSON.stringify(userData));

    setTimeout(() => {
      fullName.value = "";
      username.value = "";
      email.value = "";
      password.value = "";
      password_confirmation.value = "";
      window.location.href = "signin.html";
    }, 1000);
  }
});

// Toggle password visibility
togglePassword.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    togglePassword.classList.add("fa-eye-slash");
    togglePassword.classList.remove("fa-eye");
  } else {
    password.type = "password";
    togglePassword.classList.add("fa-eye");
    togglePassword.classList.remove("fa-eye-slash");
  }
});

// Toggle confirm password visibility
togglePasswordConfirm.addEventListener("click", () => {
  if (password_confirmation.type === "password") {
    password_confirmation.type = "text";
    togglePasswordConfirm.classList.add("fa-eye-slash");
    togglePasswordConfirm.classList.remove("fa-eye");
  } else {
    password_confirmation.type = "password";
    togglePasswordConfirm.classList.add("fa-eye");
    togglePasswordConfirm.classList.remove("fa-eye-slash");
  }
});
