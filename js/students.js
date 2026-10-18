const studentsTable = document.getElementById("studentsTable");
const studentSearch = document.getElementById("studentSearch");
const levelFilter = document.getElementById("levelFilter");

function getLevelClass(level) {
  if (level === "Бастапқы") return "level-beginner";
  if (level === "Орта") return "level-middle";
  if (level === "Жоғары") return "level-high";
  return "level-beginner";
}

function getStatusClass(status) {
  if (status === "Белсенді") return "status-active";
  return "status-low";
}

function renderStudents() {
  const searchValue = studentSearch.value.toLowerCase().trim();
  const selectedLevel = levelFilter.value;

  const filteredStudents = demoStudents.filter(student => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchValue) ||
      student.className.toLowerCase().includes(searchValue);

    const matchesLevel =
      selectedLevel === "all" || student.level === selectedLevel;

    return matchesSearch && matchesLevel;
  });

  studentsTable.innerHTML = filteredStudents.map((student, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.className}</td>
      <td>
        <span class="level-pill ${getLevelClass(student.level)}">
          ${student.level}
        </span>
      </td>
      <td>${student.xp} XP</td>
      <td>
        <div style="display:flex; align-items:center; gap:10px;">
          <div class="progress-line">
            <span style="width:${student.progress}%"></span>
          </div>
          <b>${student.progress}%</b>
        </div>
      </td>
      <td>
        <span class="status-pill ${getStatusClass(student.status)}">
          ${student.status}
        </span>
      </td>
    </tr>
  `).join("");
}

studentSearch.addEventListener("input", renderStudents);
levelFilter.addEventListener("change", renderStudents);

renderStudents();