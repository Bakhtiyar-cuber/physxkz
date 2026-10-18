const questions = [
  {
    section: "Механика",
    q: "Жылдамдықтың өлшем бірлігі қандай?",
    options: ["м/с", "кг", "Ньютон", "Джоуль"],
    correct: 0
  },
  {
    section: "Механика",
    q: "Ньютонның екінші заңының формуласы:",
    options: ["E = ma", "F = ma", "p = UI", "v = s/t"],
    correct: 1
  },
  {
    section: "Механика",
    q: "Қысым формуласы қалай жазылады?",
    options: ["p = F/S", "F = mg", "v = s/t", "A = Fs"],
    correct: 0
  },
  {
    section: "Қысым",
    q: "Паскаль заңы қай ортаға қатысты?",
    options: ["Тек қатты денелер", "Сұйықтар мен газдар", "Тек вакуум", "Тек жарық"],
    correct: 1
  },
  {
    section: "Архимед заңы",
    q: "Архимед күші қай бағытта әсер етеді?",
    options: ["Төмен", "Жоғары", "Солға", "Оңға"],
    correct: 1
  },
  {
    section: "Энергия",
    q: "Кинетикалық энергия неге байланысты?",
    options: ["Масса мен жылдамдыққа", "Тек температураға", "Тек көлемге", "Тек қысымға"],
    correct: 0
  },
  {
    section: "Қуат",
    q: "Қуаттың өлшем бірлігі:",
    options: ["Н", "Дж", "Вт", "Па"],
    correct: 2
  },
  {
    section: "Күш",
    q: "Ауырлық күші формуласы:",
    options: ["F = mg", "p = ρgh", "v = s/t", "F = kx"],
    correct: 0
  },
  {
    section: "Кинематика",
    q: "Орташа жылдамдық формуласы:",
    options: ["v = s/t", "F = ma", "p = F/S", "A = Fs"],
    correct: 0
  },
  {
    section: "Күш",
    q: "Серпімділік күші формуласы:",
    options: ["F = kx", "F = mg", "v = s/t", "p = ρgh"],
    correct: 0
  },
  {
    section: "Қысым",
    q: "Сұйықтағы қысым неге байланысты?",
    options: ["Тереңдікке", "Массаға", "Температураға", "Уақытқа"],
    correct: 0
  },
  {
    section: "Энергия",
    q: "Потенциалдық энергия формуласы:",
    options: ["E = mgh", "F = ma", "v = s/t", "p = UI"],
    correct: 0
  },
  {
    section: "Архимед",
    q: "Архимед күші формуласы:",
    options: ["F = ρgV", "F = ma", "E = mc²", "p = F/S"],
    correct: 0
  },
  {
    section: "Қозғалыс",
    q: "Бірқалыпты қозғалыс деген не?",
    options: ["Жылдамдық тұрақты", "Жылдамдық артады", "Жылдамдық азаяды", "Тыныштық"],
    correct: 0
  },
  {
    section: "Ньютон заңдары",
    q: "Ньютонның бірінші заңы қалай аталады?",
    options: ["Инерция заңы", "Күш заңы", "Энергия заңы", "Қысым заңы"],
    correct: 0
  },
  {
    section: "Импульс",
    q: "Импульс формуласы:",
    options: ["p = mv", "F = ma", "E = mgh", "v = s/t"],
    correct: 0
  },
  {
    section: "Қуат",
    q: "Қуат формуласы:",
    options: ["P = A/t", "F = ma", "p = F/S", "v = s/t"],
    correct: 0
  },
  {
    section: "Жылдамдық",
    q: "Жылдамдық қандай шама?",
    options: ["Векторлық", "Скаляр", "Тұрақты", "Өлшемсіз"],
    correct: 0
  },
  {
    section: "Жұмыс",
    q: "Механикалық жұмыс формуласы:",
    options: ["A = Fs", "F = ma", "E = mc²", "p = UI"],
    correct: 0
  },
  {
    section: "Тығыздық",
    q: "Тығыздық формуласы:",
    options: ["ρ = m/V", "F = ma", "p = F/S", "A = Fs"],
    correct: 0
  },
  {
    section: "Гравитация",
    q: "Еркін түсу үдеуі шамамен нешеге тең?",
    options: ["9.8 м/с²", "10 м/с", "1 м/с²", "0"],
    correct: 0
  },
  {
    section: "Қысым",
    q: "Атмосфералық қысымды өлшейтін құрал:",
    options: ["Барометр", "Термометр", "Динамометр", "Амперметр"],
    correct: 0
  },
  {
    section: "Деформация",
    q: "Деформация дегеніміз не?",
    options: ["Дененің пішіні мен өлшемінің өзгеруі", "Жылдамдықтың артуы", "Температураның төмендеуі", "Массаның өзгеруі"],
    correct: 0
  },
  {
    section: "Үйкеліс",
    q: "Үйкеліс күші қай бағытта әсер етеді?",
    options: ["Қозғалысқа қарсы", "Қозғалыс бағытымен", "Жоғары ғана", "Төмен ғана"],
    correct: 0
  },
  {
    section: "Механика",
    q: "Механикалық энергия неден тұрады?",
    options: ["Кинетикалық және потенциалдық энергиядан", "Тек жылудан", "Тек жарықтан", "Тек қысымнан"],
    correct: 0
  }
];

let current = 0;
let answers = Array(questions.length).fill(null);
let timeLeft = 25 * 60;
let timerInterval;

const numberPanel = document.getElementById("numberPanel");
const questionText = document.getElementById("questionText");
const optionsBox = document.getElementById("optionsBox");
const sectionName = document.getElementById("sectionName");
const questionCount = document.getElementById("questionCount");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const finishBtn = document.getElementById("finishBtn");

function renderNumbers() {
  numberPanel.innerHTML = "";

  questions.forEach((_, index) => {
    const btn = document.createElement("button");
    btn.className = "number-btn";

    if (index === current) btn.classList.add("active");
    if (answers[index] !== null) btn.classList.add("answered");

    btn.innerText = index + 1;

    btn.onclick = () => {
      current = index;
      renderQuestion();
    };

    numberPanel.appendChild(btn);
  });
}

function renderQuestion() {
  const item = questions[current];

  sectionName.innerText = "Бөлім: " + item.section;
  questionCount.innerText = `Сұрақ №${current + 1} / ${questions.length}`;
  questionText.innerText = item.q;

  optionsBox.innerHTML = "";

  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option-btn";

    if (answers[current] === index) {
      button.classList.add("selected");
    }

    button.innerHTML = `
      <span class="option-letter">${String.fromCharCode(65 + index)}</span>
      <span class="option-text">${option}</span>
    `;

    button.onclick = () => {
      answers[current] = index;
      renderQuestion();
    };

    optionsBox.appendChild(button);
  });

  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === questions.length - 1;

  renderNumbers();
}

function nextQuestion() {
  if (current < questions.length - 1) {
    current++;
    renderQuestion();
  }
}

function prevQuestion() {
  if (current > 0) {
    current--;
    renderQuestion();
  }
}

function confirmFinishTest() {
  const answeredCount = answers.filter(answer => answer !== null).length;
  const unanswered = questions.length - answeredCount;

  if (unanswered > 0) {
    const ok = confirm(
      `Сен ${answeredCount}/${questions.length} сұраққа жауап бердің.\n` +
      `${unanswered} сұрақ жауапсыз қалды.\n\n` +
      `Тестті аяқтағың келе ме?`
    );

    if (!ok) return;
  } else {
    const ok = confirm("Барлық сұраққа жауап берілді. Нәтижені көргің келе ме?");
    if (!ok) return;
  }

  finishTest();
}

function getLevelByScore(score) {
  if (score <= 12) {
    return {
      key: "beginner",
      title: "Бастапқы деңгей",
      label: "Beginner",
      icon: "🟢",
      message: "Саған негізгі ұғымдардан бастап жүйелі түрде оқу ұсынылады."
    };
  }

  if (score <= 20) {
    return {
      key: "intermediate",
      title: "Орта деңгей",
      label: "Intermediate",
      icon: "🟡",
      message: "Сен негізгі ұғымдарды білесің. Енді есеп шығару дағдысын күшейту керек."
    };
  }

  return {
    key: "advanced",
    title: "Жоғары деңгей",
    label: "Advanced",
    icon: "🔴",
    message: "Сен күрделі тапсырмалармен жұмыс істеуге дайынсың."
  };
}

function finishTest() {
  clearInterval(timerInterval);

  let score = 0;

  questions.forEach((question, index) => {
    if (answers[index] === question.correct) {
      score++;
    }
  });

  const level = getLevelByScore(score);

  let user = JSON.parse(localStorage.getItem("physxUser")) || {};

  if (!user.progress) {
    user.progress = {
      points: 0,
      lessonsCompleted: []
    };
  }

  if (!Array.isArray(user.progress.lessonsCompleted)) {
    user.progress.lessonsCompleted = [];
  }

  if (!Array.isArray(user.badges)) {
    user.badges = [];
  }

  user.studyLevel = level.key;
  user.placementScore = score;
  user.placementTotal = questions.length;
  user.placementDate = new Date().toLocaleDateString("kk-KZ");

  localStorage.setItem("physxUser", JSON.stringify(user));
  localStorage.setItem("userLevel", level.key);

  showResultScreen(score, level);
}

function showResultScreen(score, level) {
  const reviewList = questions.map((question, index) => {
    const userAnswerIndex = answers[index];
    const isCorrect = userAnswerIndex === question.correct;

    return `
      <div class="answer-review ${isCorrect ? "review-correct" : "review-wrong"}">
        <h4>${index + 1}. ${question.q}</h4>

        <p>
          <b>Сенің жауабың:</b>
          ${userAnswerIndex === null ? "Жауап берілмеді" : question.options[userAnswerIndex]}
        </p>

        <p>
          <b>Дұрыс жауап:</b>
          ${question.options[question.correct]}
        </p>

        <span>${isCorrect ? "✅ Дұрыс" : "❌ Қате"}</span>
      </div>
    `;
  }).join("");

  document.querySelector(".placement-content").innerHTML = `
    <section class="result-card">
      <div class="result-icon">${level.icon}</div>

      <h2>Тест аяқталды!</h2>

      <p class="result-score">
        Сенің нәтижең: <strong>${score} / ${questions.length}</strong>
      </p>

      <h3>${level.label} — ${level.title}</h3>

      <p>${level.message}</p>

      <div class="result-actions">
        <a href="levels_map.html" class="result-primary">
          <i class="fa-solid fa-map"></i>
          Оқу картасына өту
        </a>

        <a href="profile.html" class="result-secondary">
          <i class="fa-solid fa-user"></i>
          Профильді көру
        </a>
      </div>

      <details class="review-details">
        <summary>Жауаптарды қарау</summary>
        <div class="review-list">
          ${reviewList}
        </div>
      </details>
    </section>
  `;
}

function updateTimer() {
  const timer = document.getElementById("timer");
  if (!timer) return;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  timer.innerText =
    String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");

  if (timeLeft <= 0) {
    finishTest();
    return;
  }

  timeLeft--;
}

renderQuestion();
updateTimer();
timerInterval = setInterval(updateTimer, 1000);
// ===============================
// HELPER TOOLS LOGIC
// Жауап картасы, калькулятор, жазу беті, сызба тақтасы
// ===============================

function toggleTool(toolId) {
  const panels = document.querySelectorAll(".tool-panel");
  const target = document.getElementById(toolId);

  if (!target) return;

  panels.forEach(panel => {
    if (panel !== target) {
      panel.classList.remove("open");
    }
  });

  target.classList.toggle("open");

  if (toolId === "answerMapTool") {
    renderToolAnswerMap();
  }

  if (toolId === "drawTool") {
    initCanvas();
  }
}

function closeTools() {
  document.querySelectorAll(".tool-panel").forEach(panel => {
    panel.classList.remove("open");
  });
}

// ===============================
// ЖАУАП КАРТАСЫ
// ===============================

function renderToolAnswerMap() {
  const map = document.getElementById("toolAnswerMap");
  if (!map) return;

  map.innerHTML = questions.map((_, index) => {
    let className = "";

    if (index === current) {
      className = "current";
    } else if (answers[index] !== null) {
      className = "done";
    }

    return `
      <button type="button" class="${className}" onclick="goToolQuestion(${index})">
        ${index + 1}
      </button>
    `;
  }).join("");
}

function goToolQuestion(index) {
  current = index;
  renderQuestion();
  renderToolAnswerMap();
}

// renderQuestion функциясын кеңейтеміз: жауап картасы ашық болса, жаңарып тұрсын
const originalRenderQuestion = renderQuestion;

renderQuestion = function () {
  originalRenderQuestion();

  const answerMapTool = document.getElementById("answerMapTool");

  if (answerMapTool && answerMapTool.classList.contains("open")) {
    renderToolAnswerMap();
  }
};

// ===============================
// КАЛЬКУЛЯТОР
// ===============================

function calcAdd(value) {
  const display = document.getElementById("calcDisplay");
  if (!display) return;

  if (display.value === "Қате") {
    display.value = "";
  }

  display.value += value;
}

function calcClear() {
  const display = document.getElementById("calcDisplay");
  if (!display) return;

  display.value = "";
}

function calcBack() {
  const display = document.getElementById("calcDisplay");
  if (!display) return;

  display.value = display.value.slice(0, -1);
}

function calcResult() {
  const display = document.getElementById("calcDisplay");
  if (!display) return;

  try {
    const expression = display.value;

    if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
      display.value = "Қате";
      return;
    }

    const result = Function(`"use strict"; return (${expression})`)();

    if (!Number.isFinite(result)) {
      display.value = "Қате";
      return;
    }

    display.value = result;
  } catch {
    display.value = "Қате";
  }
}

// ===============================
// ЖАЗУ БЕТІ
// ===============================

function initNotes() {
  const notes = document.getElementById("studentNotes");
  if (!notes) return;

  notes.value = localStorage.getItem("placementNotes") || "";

  notes.addEventListener("input", () => {
    localStorage.setItem("placementNotes", notes.value);
  });
}

function saveNotes() {
  const notes = document.getElementById("studentNotes");
  if (!notes) return;

  localStorage.setItem("placementNotes", notes.value);
  alert("Жазба сақталды!");
}

function clearNotes() {
  const notes = document.getElementById("studentNotes");
  if (!notes) return;

  const ok = confirm("Жазбаны тазалайсыз ба?");

  if (ok) {
    notes.value = "";
    localStorage.removeItem("placementNotes");
  }
}

// ===============================
// СЫЗБА ТАҚТАСЫ
// ===============================

let canvasReady = false;
let drawing = false;
let drawMode = "pen";
let ctx = null;

function initCanvas() {
  if (canvasReady) return;

  const canvas = document.getElementById("drawCanvas");
  if (!canvas) return;

  ctx = canvas.getContext("2d");
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#0d47a1";

  canvas.addEventListener("mousedown", startDraw);
  canvas.addEventListener("mouseup", stopDraw);
  canvas.addEventListener("mouseleave", stopDraw);
  canvas.addEventListener("mousemove", draw);

  canvas.addEventListener("touchstart", startDrawTouch, { passive: false });
  canvas.addEventListener("touchend", stopDraw);
  canvas.addEventListener("touchcancel", stopDraw);
  canvas.addEventListener("touchmove", drawTouch, { passive: false });

  canvasReady = true;
}

function getCanvasPos(event) {
  const canvas = document.getElementById("drawCanvas");
  const rect = canvas.getBoundingClientRect();

  return {
    x: (event.clientX - rect.left) * (canvas.width / rect.width),
    y: (event.clientY - rect.top) * (canvas.height / rect.height)
  };
}

function startDraw(event) {
  if (!ctx) return;

  drawing = true;

  const pos = getCanvasPos(event);
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
}

function stopDraw() {
  drawing = false;

  if (ctx) {
    ctx.beginPath();
  }
}

function draw(event) {
  if (!drawing || !ctx) return;

  const pos = getCanvasPos(event);

  if (drawMode === "eraser") {
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 16;
  } else {
    ctx.strokeStyle = "#0d47a1";
    ctx.lineWidth = 3;
  }

  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
}

function startDrawTouch(event) {
  event.preventDefault();

  const touch = event.touches[0];
  if (!touch) return;

  startDraw(touch);
}

function drawTouch(event) {
  event.preventDefault();

  const touch = event.touches[0];
  if (!touch) return;

  draw(touch);
}

function setDrawMode(mode) {
  drawMode = mode;
}

function clearCanvas() {
  const canvas = document.getElementById("drawCanvas");
  if (!canvas || !ctx) return;

  const ok = confirm("Сызбаны тазалайсыз ба?");

  if (ok) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

// ===============================
// INIT
// ===============================

initNotes();
// ===============================
// REPORT ERROR LOGIC
// ===============================

function openReportModal() {
  const modal = document.getElementById("reportModal");
  if (!modal) return;

  modal.classList.add("open");
}

function closeReportModal() {
  const modal = document.getElementById("reportModal");
  if (!modal) return;

  modal.classList.remove("open");
}

function sendReport() {
  const type = document.getElementById("reportType").value;
  const text = document.getElementById("reportText").value.trim();

  if (!text) {
    alert("Қате туралы қысқаша түсіндірме жазыңыз.");
    return;
  }

  const currentQuestion = questions[current];

  const report = {
    questionNumber: current + 1,
    section: currentQuestion.section,
    question: currentQuestion.q,
    options: currentQuestion.options,
    correctAnswer: currentQuestion.options[currentQuestion.correct],
    reportType: type,
    reportText: text,
    date: new Date().toLocaleString("kk-KZ")
  };

  const reports = JSON.parse(localStorage.getItem("physxQuestionReports")) || [];
  reports.push(report);

  localStorage.setItem("physxQuestionReports", JSON.stringify(reports));

  document.getElementById("reportText").value = "";
  closeReportModal();

  showToast("Рахмет! Қате туралы хабарлама сақталды.");
}

// Modal сыртынан басқанда жабылсын
document.addEventListener("click", function(event) {
  const modal = document.getElementById("reportModal");
  const box = document.querySelector(".report-box");

  if (!modal || !box) return;

  if (event.target === modal) {
    closeReportModal();
  }
});
function showToast(message) {
  let toast = document.getElementById("physxToast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "physxToast";
    toast.className = "physx-toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}