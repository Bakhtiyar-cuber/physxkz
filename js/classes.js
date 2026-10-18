const classForm = document.getElementById("classForm");
const classesList = document.getElementById("classesList");

let classes = JSON.parse(localStorage.getItem("physxClasses")) || [
  {
    name: "9А",
    count: 21,
    average: 81,
    progress: 78
  },
  {
    name: "9Ә",
    count: 22,
    average: 76,
    progress: 72
  }
];

function saveClasses() {
  localStorage.setItem("physxClasses", JSON.stringify(classes));
}

function renderClasses() {
  classesList.innerHTML = classes.map((item, index) => `
    <div class="class-item">
      <div class="class-top">
        <div>
          <h3>${item.name} сыныбы</h3>
          <p>${item.count} оқушы</p>
        </div>

        <button onclick="deleteClass(${index})" class="delete-class-btn">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>

      <div class="class-info-grid">
        <div>
          <span>Орташа балл</span>
          <strong>${item.average}</strong>
        </div>

        <div>
          <span>Прогресс</span>
          <strong>${item.progress}%</strong>
        </div>
      </div>

      <div class="progress-line full">
        <span style="width:${item.progress}%"></span>
      </div>
    </div>
  `).join("");
}

function deleteClass(index) {
  const isConfirm = confirm("Бұл сыныпты өшіргіңіз келе ме?");

  if (!isConfirm) return;

  classes.splice(index, 1);
  saveClasses();
  renderClasses();
}

classForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const newClass = {
    name: document.getElementById("className").value.trim(),
    count: Number(document.getElementById("studentCount").value),
    average: Number(document.getElementById("averageScore").value),
    progress: Number(document.getElementById("classProgress").value)
  };

  classes.push(newClass);
  saveClasses();
  renderClasses();
  classForm.reset();
});

renderClasses();