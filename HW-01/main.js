// ===================== Age Group Analyzer ================ //

const ageDOM = document.getElementById("ageDOM");
const message = document.getElementById("message");

let age = window.prompt("Enter your age :");

age = Number(age);

if (age <= 0 || isNaN(age)) {
  alert("Please enter a valid number");
} else if (age <= 12) {
  ageDOM.innerHTML = `Your age is ${age}. You are a <b>Child 👶</b>. Young and full of curiosity.`;
} else if (age >= 13 && age <= 19) {
  ageDOM.innerHTML = `Your age is ${age}. You are a <b>Teen 👦</b>. Exploring new ideas and learning about life..`;
} else if (age >= 20 && age <= 59) {
  ageDOM.innerHTML = `Your age is ${age}. You are an <b>Adult 👨</b>. Responsible and working towards goals.`;
} else if (age >= 60 && age <= 100) {
  ageDOM.innerHTML = `Your age is ${age}. You are a <b>Senior 👴</b>. Wise and full of experience.`;
} else {
  ageDOM.innerHTML = `You are dead 💀`;
}

message.textContent =
  "👁️‍🗨️ Every age tells a different story — this program reveals them all.";

// ===================== Age Group Analyzer ================ //




