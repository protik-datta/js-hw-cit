let input = document.getElementById("input");
let addBtn = document.getElementById("add-btn");
let listContainer = document.getElementById("list-container");

addBtn.addEventListener("click", () => {
  let task = input.value.trim();

  if (!task) {
    alert("Input field cannot be empty");
    return;
  }

  const list = document.createElement("li");

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const span = document.createElement("span");
  span.textContent = task;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "✕";

  deleteBtn.addEventListener("click", () => {
    list.remove();
  });

  listContainer.appendChild(list);
  list.append(taskDiv, deleteBtn);
  taskDiv.appendChild(span);

  input.value = "";

});
