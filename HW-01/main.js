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

// const output = document.getElementById("output");

// let planet = window
//   .prompt(
//     "Enter a planet name (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune):"
//   )
//   .toLocaleLowerCase();
// let weight = Number(window.prompt("Enter your weight :"));

// let gravity = 0;
// let planetName = "";
// let found = true;

// if (planet === "mercury") {
//   planetName = "Mercury";
//   gravity = 3.7;
// } else if (planet === "venus") {
//   planetName = "Venus";
//   gravity = 8.87;
// } else if (planet === "earth") {
//   planetName = "Earth";
//   gravity = 9.8;
// } else if (planet === "mars") {
//   planetName = "Mars";
//   gravity = 3.71;
// } else if (planet === "jupiter") {
//   planetName = "Jupiter";
//   gravity = 24.79;
// } else if (planet === "saturn") {
//   planetName = "Saturn";
//   gravity = 10.44;
// } else if (planet === "uranus") {
//   planetName = "Uranus";
//   gravity = 8.69;
// } else if (planet === "neptune") {
//   planetName = "Neptune";
//   gravity = 11.15;
// } else {
//   found = false;
// }

// if (found) {
//   let yourWeight = ((weight * gravity) / 9.8).toFixed(2);

//   output.innerHTML = `<p><b>Planet :</b> ${planetName}</p>
//     <p><b>Gravity :</b> ${gravity} m/s²</p>
//     <p><b>Your weight on this planet :</b> ${yourWeight} kg</p>
//     `;
// } else {
//   output.textContent = "❌ Planet not found! Please try again.";
// }

// ===================== Planet Weight Calculator ================ //

// ===================== Multiplication Table ==================== //

// const container = document.getElementById("tableContainer");
// const number = window.prompt("Enter a number :");

// let table = document.createElement("table");

// let header = document.createElement("tr");
// header.innerHTML = `<th>Multiplicand</th><th>Multiplier</th><th>Result</th>`;

// table.appendChild(header);

// for (let i = 1; i <= 10; i++) {

//   let row = document.createElement("tr");

//   let result = number * i;

//   row.innerHTML = `<td>${number}</td><td>${i}</td><td>${result}</td>`;

//   table.appendChild(row);
//   container.appendChild(table);
// }

// ===================== Multiplication Table ==================== //

// ======================= Alphabet Checker ====================== //

// const letter = document.getElementById("letter");
// const message = document.getElementById("message");

// const input = window.prompt(
//   "Enter a word to check if it is vowel or consonant :"
// );

// const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];

// if (!isNaN(input) || input.length > 1) {
//   alert("Do not enter any number ❌ and enter only one word ✅");
// } else if (vowels.includes(input)) {
//   letter.textContent = input;
//   letter.classList.add("vowel");
//   message.textContent = `${input} is a Vowel`;
// } else {
//   letter.textContent = input;
//   letter.classList.add("consonant");
//   message.textContent = `${input} is a Consonant`;
// }

// ======================= Alphabet Checker ====================== //

// ======================= Mini Weather Emoji ==================== //

// const output = document.getElementById("weatherOutput");
// const emojis = document.querySelector(".emoji");
// const messages = document.querySelector(".message");
// const temperature = document.querySelector(".temperature");

// let temp = Number(window.prompt("Enter current temperature (°C):"));

// let emoji = "";
// let message = "";

// switch (true) {
//   case temp > 60 || temp < -60 || isNaN(temp):
//     alert("Enter a real time temparature.Invalid Input ❌");

//   case temp >= 30:
//     emoji = "☀️";
//     message = "It's very hot! Stay hydrated and enjoy the sun ☀️";
//     break;

//   case temp >= 20 && temp < 30:
//     emoji = "⛅";
//     message = "Nice weather! Perfect day for outdoor activities 🌤️";
//     break;

//   case temp >= 10 && temp < 20:
//     emoji = "🌧️";
//     message = "Cool weather with some rain. Don't forget your umbrella 🌂";
//     break;

//   case temp >= 0 && temp < 10:
//     emoji = "❄️";
//     message = "Cold day! Wear warm clothes ❄️";
//     break;

//   default:
//     emoji = "🌨️";
//     message = "Freezing cold! Stay indoors and keep warm ☃️";
//     break;
// }

// emojis.textContent = emoji;
// emojis.classList.add("emoji");

// messages.textContent = message;
// messages.classList.add("message");

// output.appendChild(emojis);
// output.appendChild(messages);

// ======================= Mini Weather Emoji ==================== //

// ======================= Product Discount List ==================== //

// const products = [
//   { name: "Notebook (300 pages)", price: 150, discount: 5 },
//   { name: "Smartphone", price: 18500, discount: 10 },
//   { name: "Backpack", price: 1200, discount: 15 },
//   { name: "Running Shoes", price: 3500, discount: 20 },
//   { name: "Water Bottle (1L)", price: 350, discount: 8 },
//   { name: "Bluetooth Earbuds", price: 2200, discount: 12 },
//   { name: "Fiction Book - The Alchemist", price: 480, discount: 7 },
//   { name: "Desk Lamp", price: 950, discount: 10 },
//   { name: "T-Shirt (Cotton)", price: 600, discount: 5 },
//   { name: "Laptop", price: 58000, discount: 18 },
// ];

// const container = document.getElementById("product-container");

// for (let i = 0; i < products.length; i++) {
//   let product = products[i];
//   let finalPrice = product.price - (product.price * product.discount) / 100;
//   let categoryClass = finalPrice > 1000 ? "premium" : "regular";

//   const card = document.createElement("div");
//   card.classList.add("card");

//   const productName = document.createElement("div");
//   productName.classList.add("product-name");
//   productName.textContent = product.name;

//   const price = document.createElement("div");
//   price.classList.add("price");
//   price.textContent = `Price: ৳${product.price}`;

//   const discount = document.createElement("div");
//   discount.classList.add("discount");
//   discount.textContent = `Discount: ${product.discount}%`;

//   const final = document.createElement("div");
//   final.classList.add("final-price", categoryClass);
//   final.textContent = `Final: ৳${finalPrice.toFixed(2)}`;

//   card.appendChild(productName);
//   card.appendChild(price);
//   card.appendChild(discount);
//   card.appendChild(final);

//   container.appendChild(card);
// }

// ======================= Product Discount List ==================== //

// ======================= Country Info Display ==================== //

// const countries = [
//   {
//     name: "Bangladesh",
//     capital: "Dhaka",
//     population: 171000000,
//     continent: "Asia",
//   },
//   {
//     name: "India",
//     capital: "New Delhi",
//     population: 1440000000,
//     continent: "Asia",
//   },
//   {
//     name: "China",
//     capital: "Beijing",
//     population: 1412000000,
//     continent: "Asia",
//   },
//   { name: "Japan", capital: "Tokyo", population: 125000000, continent: "Asia" },
//   {
//     name: "South Korea",
//     capital: "Seoul",
//     population: 51700000,
//     continent: "Asia",
//   },
//   {
//     name: "USA",
//     capital: "Washington D.C.",
//     population: 340000000,
//     continent: "North America",
//   },
//   {
//     name: "Canada",
//     capital: "Ottawa",
//     population: 39000000,
//     continent: "North America",
//   },
//   {
//     name: "Mexico",
//     capital: "Mexico City",
//     population: 130000000,
//     continent: "North America",
//   },
//   {
//     name: "Brazil",
//     capital: "Brasilia",
//     population: 220000000,
//     continent: "South America",
//   },
//   {
//     name: "Argentina",
//     capital: "Buenos Aires",
//     population: 45000000,
//     continent: "South America",
//   },
//   {
//     name: "Germany",
//     capital: "Berlin",
//     population: 84000000,
//     continent: "Europe",
//   },
//   {
//     name: "France",
//     capital: "Paris",
//     population: 67000000,
//     continent: "Europe",
//   },
//   {
//     name: "United Kingdom",
//     capital: "London",
//     population: 68000000,
//     continent: "Europe",
//   },
//   { name: "Italy", capital: "Rome", population: 60000000, continent: "Europe" },
//   {
//     name: "Nigeria",
//     capital: "Abuja",
//     population: 223000000,
//     continent: "Africa",
//   },
//   {
//     name: "Egypt",
//     capital: "Cairo",
//     population: 111000000,
//     continent: "Africa",
//   },
//   {
//     name: "South Africa",
//     capital: "Pretoria",
//     population: 60000000,
//     continent: "Africa",
//   },
//   {
//     name: "Australia",
//     capital: "Canberra",
//     population: 26000000,
//     continent: "Oceania",
//   },
//   {
//     name: "New Zealand",
//     capital: "Wellington",
//     population: 5200000,
//     continent: "Oceania",
//   },
//   {
//     name: "Russia",
//     capital: "Moscow",
//     population: 146000000,
//     continent: "Europe/Asia",
//   },
// ];

// const container = document.getElementById("country-container");

// for (let i = 0; i < countries.length; i++) {
//   let country = countries[i];

//   let statusClass = country.population > 500000000 ? "developed" : "developing";
//   let statusText = country.population > 500000000 ? "Developed" : "Developing";

//   let popM = (country.population / 1000000).toFixed(1) + " M";

//   const card = document.createElement("div");
//   card.classList.add("card");

//   card.innerHTML = `
//   <div class = "country-name">${country.name}</div>
//   <div class = "capital">${country.capital}</div>
//   <div class = "continent">${country.continent}</div>
//   <div class = "population">${popM}</div>
//   <div class = "status ${statusClass}">${statusText}</div>
//   `;

//   container.appendChild(card);
// }

// ======================= Country Info Display ==================== //
