const taskForm = document.getElementById("taskForm");
const tasksList = document.getElementById("tasksList");

let tasks = JSON.parse(localStorage.getItem("physxTasks")) || [
  {
    title: "Механикалық қозғалыс бойынша есептер",
    className: "9А",
    topic: "Механикалық қозғалыс",
    deadline: "2026-05-20",
    score: 10,
    description: "Жол, уақыт және жылдамдық формулаларын қолданып 5 есеп шығару."
  },
  {
    title: "Ньютон заңдарына дайындық",
    className: "9Ә",
    topic: "Күш. Ньютон заңдары",
    deadline: "2026-05-22",
    score: 15,
    description: "Ньютонның II заңы бойынша теорияны қайталап, 3 есеп шығару."
  }
];

function saveTasks() {
  localStorage.setItem("physxTasks", JSON.stringify(tasks));
}

function renderTasks() {
  tasksList.innerHTML = tasks.map((task, index) => `
    <div class="task-item">
      <div class="task-top">
        <div>
          <h3>${task.title}</h3>
          <p>${task.className} сыныбы • ${task.topic}</p>
        </div>

        <button onclick="deleteTask(${index})" class="delete-class-btn">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>

      <div class="task-description">
        ${task.description}
      </div>

      <div class="task-meta">
        <span>
          <i class="fa-solid fa-calendar-days"></i>
          ${task.deadline}
        </span>

        <span>
          <i class="fa-solid fa-star"></i>
          ${task.score} балл
        </span>

        <span class="status-pill status-active">
          Белсенді
        </span>
      </div>
    </div>
  `).join("");
}

function deleteTask(index) {
  const isConfirm = confirm("Бұл тапсырманы өшіргіңіз келе ме?");

  if (!isConfirm) return;

  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

taskForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const newTask = {
    title: document.getElementById("taskTitle").value.trim(),
    className: document.getElementById("taskClass").value,
    topic: document.getElementById("taskTopic").value.trim(),
    deadline: document.getElementById("taskDeadline").value,
    score: Number(document.getElementById("taskScore").value),
    description: document.getElementById("taskDescription").value.trim()
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
  taskForm.reset();
});

renderTasks();