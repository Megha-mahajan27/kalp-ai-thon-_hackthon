const form = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const taskList = document.getElementById("taskList");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const task = taskInput.value;
  const date = new Date(dateInput.value).toLocaleString();

  const li = document.createElement("li");
  li.innerHTML = `<span>${task} - ${date}</span>
                  <button onclick="this.parentElement.remove()">❌</button>`;

  taskList.appendChild(li);

  form.reset();
});