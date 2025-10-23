// ===================== Age Group Analyzer ================ //

// const ageDOM = document.getElementById("ageDOM");
// const message = document.getElementById("message");

// let age = window.prompt("Enter your age :");

// age = Number(age);

// if (age <= 0 || isNaN(age)) {
//   alert("Please enter a valid number");
// } else if (age <= 12) {
//   ageDOM.innerHTML = `Your age is ${age}. You are a <b>Child 👶</b>. Young and full of curiosity.`;
// } else if (age >= 13 && age <= 19) {
//   ageDOM.innerHTML = `Your age is ${age}. You are a <b>Teen 👦</b>. Exploring new ideas and learning about life..`;
// } else if (age >= 20 && age <= 59) {
//   ageDOM.innerHTML = `Your age is ${age}. You are an <b>Adult 👨</b>. Responsible and working towards goals.`;
// } else if (age >= 60 && age <= 100) {
//   ageDOM.innerHTML = `Your age is ${age}. You are a <b>Senior 👴</b>. Wise and full of experience.`;
// } else {
//   ageDOM.innerHTML = `You are dead 💀`;
// }

// message.textContent =
//   "👁️‍🗨️ Every age tells a different story — this program reveals them all.";

// ===================== Age Group Analyzer ================ //

// ===================== Planet Weight Calculator ================ //

const output = document.getElementById("output");

let planet = window
  .prompt(
    "Enter a planet name (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune):"
  )
  .toLocaleLowerCase();
let weight = Number(window.prompt("Enter your weight :"));

let gravity = 0;
let planetName = "";
let found = true;

if (planet === "mercury") {
  planetName = "Mercury";
  gravity = 3.7;
} else if (planet === "venus") {
  planetName = "Venus";
  gravity = 8.87;
} else if (planet === "earth") {
  planetName = "Earth";
  gravity = 9.8;
} else if (planet === "mars") {
  planetName = "Mars";
  gravity = 3.71;
} else if (planet === "jupiter") {
  planetName = "Jupiter";
  gravity = 24.79;
} else if (planet === "saturn") {
  planetName = "Saturn";
  gravity = 10.44;
} else if (planet === "uranus") {
  planetName = "Uranus";
  gravity = 8.69;
} else if (planet === "neptune") {
  planetName = "Neptune";
  gravity = 11.15;
} else {
  found = false;
}

if (found) {
  let yourWeight = ((weight * gravity) / 9.8).toFixed(2);

  output.innerHTML = `<p><b>Planet :</b> ${planetName}</p>
    <p><b>Gravity :</b> ${gravity} m/s²</p>
    <p><b>Your weight on this planet :</b> ${yourWeight} kg</p>
    `;
} else {
  output.textContent = "❌ Planet not found! Please try again.";
}

// ===================== Planet Weight Calculator ================ //
