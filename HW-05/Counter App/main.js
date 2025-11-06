const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const count = document.getElementById("count");

let number = 0;

increase.addEventListener("click", () => {
  number++;
  count.textContent = number;

  updateColor();
});

decrease.addEventListener("click", () => {
  number--;
  count.textContent = number;

  updateColor();
});

reset.addEventListener("click", () => {
  number = 0;
  count.textContent = number;
  
  updateColor();
});

function updateColor() {
  if (number > 0) {
    count.style.color = "white";
  } else if (number < 0) {
    count.style.color = "red";
  } else {
    count.style.color = "white";
  }
}
