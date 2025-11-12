const output = document.querySelector(".output");
const lengthEl = document.querySelector(".length");
const typeSelect = document.querySelectorAll(".typeSelect");
const generateBtn = document.querySelector(".generate");
const copyBtn = document.querySelector(".copy");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}<>?/|~+-*/=%^√∞≈≠≤≥∑∆π";

function passwordMaker() {
  const length = parseInt(lengthEl.value);

  if (length > 16) {
    output.value = "maximum limit 16";
    copyBtn.disabled = true;
    copyBtn.style.cursor = "not-allowed";
    return;
  }

  let chars = "";

  if (typeSelect[0].checked) chars += lowercase;
  if (typeSelect[1].checked) chars += uppercase;
  if (typeSelect[2].checked) chars += numbers;
  if (typeSelect[3].checked) chars += symbols;

  if (!chars) {
    output.value = "Please select at least one option";
    copyBtn.disabled = true;
    copyBtn.style.cursor = "not-allowed";
    return;
  }

  let password = "";

  for (i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * chars.length);
    password += chars[random];
  }

  output.value = password;

  copyBtn.disabled = false;
  copyBtn.style.cursor = "pointer";

  return output.value;
}

function copyPassword() {
  if (!output.value) return;

  navigator.clipboard.writeText(output.value);
  copyBtn.textContent = "Copied";

  setTimeout(() => {
    copyBtn.textContent = "Copy";
  }, 1000);
}

generateBtn.addEventListener("click", passwordMaker);
copyBtn.addEventListener("click", copyPassword);
