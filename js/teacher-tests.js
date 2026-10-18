const testForm = document.getElementById("testForm");
const testsList = document.getElementById("testsList");

let tests = JSON.parse(localStorage.getItem("physxTeacherTests")) || [
  {
    title: "Механикалық қозғалыс тесті",
    topic: "Механикалық қозғалыс",
    level: "Бастапқы",
    question: "Дененің уақыт өтуіне қарай орнын өзгертуі қалай аталады?",
    options: {
      A: "Күш",
      B: "Механикалық қозғалыс",
      C: "Энергия",
      D: "Қысым"
    },
    correct: "B",
    score: 1
  },
  {
    title: "Ньютон заңдары тесті",
    topic: "Күш. Ньютон заңдары",
    level: "Орта",
    question: "Ньютонның II заңы қандай формуламен өрнектеледі?",
    options: {
      A: "F = ma",
      B: "v = s/t",
      C: "A = Fs",
      D: "P = A/t"
    },
    correct: "A",
    score: 1
  }
];

function saveTests() {
  localStorage.setItem("physxTeacherTests", JSON.stringify(tests));
}

function getLevelClass(level) {
  if (level === "Бастапқы") return "level-beginner";
  if (level === "Орта") return "level-middle";
  if (level === "Жоғары") return "level-high";
  return "level-beginner";
}

function renderTests() {
  testsList.innerHTML = tests.map((test, index) => `
    <div class="test-item">
      <div class="task-top">
        <div>
          <h3>${test.title}</h3>
          <p>${test.topic}</p>
        </div>

        <button onclick="deleteTest(${index})" class="delete-class-btn">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>

      <div class="test-question">
        <strong>Сұрақ:</strong>
        <p>${test.question}</p>
      </div>

      <div class="test-options">
        <div class="${test.correct === "A" ? "correct-option" : ""}">
          <b>A)</b> ${test.options.A}
        </div>

        <div class="${test.correct === "B" ? "correct-option" : ""}">
          <b>B)</b> ${test.options.B}
        </div>

        <div class="${test.correct === "C" ? "correct-option" : ""}">
          <b>C)</b> ${test.options.C}
        </div>

        <div class="${test.correct === "D" ? "correct-option" : ""}">
          <b>D)</b> ${test.options.D}
        </div>
      </div>

      <div class="task-meta">
        <span class="level-pill ${getLevelClass(test.level)}">
          ${test.level}
        </span>

        <span>
          <i class="fa-solid fa-check"></i>
          Дұрыс жауап: ${test.correct}
        </span>

        <span>
          <i class="fa-solid fa-star"></i>
          ${test.score} балл
        </span>
      </div>
    </div>
  `).join("");
}

function deleteTest(index) {
  const isConfirm = confirm("Бұл тест сұрағын өшіргіңіз келе ме?");

  if (!isConfirm) return;

  tests.splice(index, 1);
  saveTests();
  renderTests();
}

testForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const newTest = {
    title: document.getElementById("testTitle").value.trim(),
    topic: document.getElementById("testTopic").value.trim(),
    level: document.getElementById("testLevel").value,
    question: document.getElementById("questionText").value.trim(),
    options: {
      A: document.getElementById("optionA").value.trim(),
      B: document.getElementById("optionB").value.trim(),
      C: document.getElementById("optionC").value.trim(),
      D: document.getElementById("optionD").value.trim()
    },
    correct: document.getElementById("correctAnswer").value,
    score: Number(document.getElementById("testScore").value)
  };

  tests.push(newTest);
  saveTests();
  renderTests();
  testForm.reset();
});

renderTests();