const gradeForm = document.getElementById("gradeForm");
const gradesList = document.getElementById("gradesList");
const gradeSearch = document.getElementById("gradeSearch");
const gradeFilter = document.getElementById("gradeFilter");

let grades = JSON.parse(localStorage.getItem("physxGrades")) || [
  {
    student: "Айдана Ерлан",
    className: "9А",
    work: "Тест",
    topic: "Механикалық қозғалыс",
    score: 88,
    mark: "5",
    comment: "Тақырыпты жақсы меңгерген, есеп шығару жолы толық."
  },
  {
    student: "Нұрсұлтан Әлібек",
    className: "9А",
    work: "Практикалық тапсырма",
    topic: "Ньютон заңдары",
    score: 76,
    mark: "4",
    comment: "Негізгі формулаларды қолдана алады, бірақ күрделі есептерді қайталау керек."
  },
  {
    student: "Әлихан Серік",
    className: "9Ә",
    work: "Үй жұмысы",
    topic: "Үйкеліс күші",
    score: 58,
    mark: "3",
    comment: "Теорияны қайта қарап, формулаларды қолдануға жаттығу қажет."
  }
];

function saveGrades() {
  localStorage.setItem("physxGrades", JSON.stringify(grades));
}

function getMarkClass(mark) {
  if (mark === "5") return "mark-five";
  if (mark === "4") return "mark-four";
  if (mark === "3") return "mark-three";
  return "mark-two";
}

function renderGrades() {
  const searchValue = gradeSearch.value.toLowerCase().trim();
  const selectedMark = gradeFilter.value;

  const filteredGrades = grades.filter(item => {
    const matchesSearch =
      item.student.toLowerCase().includes(searchValue) ||
      item.topic.toLowerCase().includes(searchValue) ||
      item.className.toLowerCase().includes(searchValue);

    const matchesMark =
      selectedMark === "all" || item.mark === selectedMark;

    return matchesSearch && matchesMark;
  });

  gradesList.innerHTML = filteredGrades.map((item, index) => `
    <div class="grade-item">
      <div class="grade-top">
        <div>
          <h3>${item.student}</h3>
          <p>${item.className} сыныбы • ${item.work} • ${item.topic}</p>
        </div>

        <button onclick="deleteGrade(${index})" class="delete-class-btn">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>

      <div class="grade-score-row">
        <div>
          <span>Балл</span>
          <strong>${item.score}</strong>
        </div>

        <div>
          <span>Баға</span>
          <strong class="mark-badge ${getMarkClass(item.mark)}">${item.mark}</strong>
        </div>
      </div>

      <div class="grade-comment">
        <i class="fa-solid fa-comment-dots"></i>
        <p>${item.comment}</p>
      </div>
    </div>
  `).join("");
}

function deleteGrade(index) {
  const isConfirm = confirm("Бұл журнал жазбасын өшіргіңіз келе ме?");

  if (!isConfirm) return;

  grades.splice(index, 1);
  saveGrades();
  renderGrades();
}

gradeForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const newGrade = {
    student: document.getElementById("gradeStudent").value,
    className: document.getElementById("gradeClass").value,
    work: document.getElementById("gradeWork").value,
    topic: document.getElementById("gradeTopic").value.trim(),
    score: Number(document.getElementById("gradeScore").value),
    mark: document.getElementById("gradeMark").value,
    comment: document.getElementById("gradeComment").value.trim()
  };

  grades.push(newGrade);
  saveGrades();
  renderGrades();
  gradeForm.reset();
});

gradeSearch.addEventListener("input", renderGrades);
gradeFilter.addEventListener("change", renderGrades);

renderGrades();