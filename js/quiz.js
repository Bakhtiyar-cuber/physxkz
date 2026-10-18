console.log(easyQuestions);

const bank = {
  easy: easyQuestions,
  medium: mediumQuestions,
  hard: hardQuestions
};

let questions = [];
let current = 0;
let score = 0;
let lives = 5;
let streak = 0;
let time = 15;
let timer;
let paused = false;

function startGame() {
  clearInterval(timer);

  const level = document.getElementById("difficultySelect").value;
  const count = Number(document.getElementById("questionCountSelect").value);

  questions = [...bank[level]]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);

  current = 0;
  score = 0;
  lives = 5;
  streak = 0;
  paused = false;

  loadQuestion();
}

function loadQuestion() {
  clearInterval(timer);

  const q = questions[current];

  if (!q) {
    document.getElementById("question").innerText = "Сұрақ табылмады!";
    document.getElementById("answers").innerHTML = "";
    return;
  }

  document.getElementById("question").innerText =
    `${current + 1}/${questions.length}. ${q.q}`;

  document.getElementById("scoreText").innerText = score;
  document.getElementById("lives").innerText = lives;
  document.getElementById("comboText").innerText = `🔥 x${streak}`;

  document.getElementById("answers").innerHTML = q.options.map((opt, i) =>
    `<button onclick="answer(${i})" class="answer-btn">${opt}</button>`
  ).join("");

  document.getElementById("feedback").innerText = "";

  updateProgress();
  startTimer();
}

function updateProgress() {
  const percent = ((current + 1) / questions.length) * 100;
  document.getElementById("quizProgress").style.width = percent + "%";
}

function startTimer() {
  time = 15;
  document.getElementById("timer").innerText = time;

  timer = setInterval(() => {
    if (paused) return;

    time--;
    document.getElementById("timer").innerText = time;

    if (time <= 0) {
      lives--;
      streak = 0;
      showFeedback("Уақыт бітті!", false);
      next();
    }
  }, 1000);
}

function answer(i) {
  const q = questions[current];

  if (i === q.correct) {
    score++;
    streak++;
    showFeedback("Дұрыс!", true);
  } else {
    lives--;
    streak = 0;
    showFeedback("Қате!", false);
  }

  setTimeout(next, 600);
}

function showFeedback(text, good) {
  const f = document.getElementById("feedback");
  f.innerText = text;
  f.className = good ? "correct-text" : "wrong-text";
}

function next() {
  clearInterval(timer);

  if (lives <= 0) {
    finish();
    return;
  }

  current++;

  if (current >= questions.length) {
    finish();
  } else {
    loadQuestion();
  }
}

function pauseGame() {
  paused = !paused;
}

function restartGame() {
  startGame();
}

function finish() {
  const percent = Math.round((score / questions.length) * 100);

  document.body.innerHTML = `
    <div class="quiz-result">
      <h1>🎉 Quiz аяқталды</h1>
      <h2>${score}/${questions.length}</h2>
      <p>Нәтиже: ${percent}%</p>
      <p>Қалған өмір: ${lives}</p>
      <button onclick="location.reload()">Қайта бастау</button>
    </div>
  `;
}

startGame();

document.getElementById("difficultySelect")
  .addEventListener("change", startGame);

document.getElementById("questionCountSelect")
  .addEventListener("change", startGame);