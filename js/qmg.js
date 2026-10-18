const qmgForm = document.getElementById("qmgForm");
const qmgList = document.getElementById("qmgList");

let qmgItems = JSON.parse(localStorage.getItem("physxQMG")) || [
  {
    topic: "Механикалық қозғалыс",
    className: "9",
    section: "Механика",
    learningGoal: "Механикалық қозғалыс ұғымын түсіндіру және қозғалысты сипаттайтын шамаларды анықтау.",
    lessonGoal: "Оқушылар траектория, жол, орын ауыстыру және жылдамдық ұғымдарын ажыратады.",
    criteria: "Қозғалыс түрлерін сипаттайды; формулаларды қолданады; есеп шығарады.",
    methods: "Түсіндіру, сұрақ-жауап, деңгейлік тапсырма, PhysX платформасы",
    resources: "PhysX платформасы, интерактивті тақта, есептер жинағы"
  },
  {
    topic: "Ньютонның екінші заңы",
    className: "9",
    section: "Динамика негіздері",
    learningGoal: "Ньютонның екінші заңын тұжырымдау және есептер шығаруда қолдану.",
    lessonGoal: "Оқушылар F=ma формуласын қолданып, күш, масса және үдеуді анықтайды.",
    criteria: "Ньютон заңын түсіндіреді; формуланы түрлендіреді; сандық есептер шығарады.",
    methods: "Проблемалық сұрақ, жұптық жұмыс, виртуалды эксперимент",
    resources: "PhysX, виртуалды лаборатория, презентация"
  }
];

function saveQMG() {
  localStorage.setItem("physxQMG", JSON.stringify(qmgItems));
}

function renderQMG() {
  qmgList.innerHTML = qmgItems.map((item, index) => `
    <div class="qmg-item">
      <div class="qmg-top">
        <div>
          <h3>${item.topic}</h3>
          <p>${item.className}-сынып • ${item.section}</p>
        </div>

        <button onclick="deleteQMG(${index})" class="delete-class-btn">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>

      <div class="qmg-info">
        <div>
          <strong>Оқу мақсаты:</strong>
          <p>${item.learningGoal}</p>
        </div>

        <div>
          <strong>Сабақ мақсаты:</strong>
          <p>${item.lessonGoal}</p>
        </div>

        <div>
          <strong>Бағалау критерийі:</strong>
          <p>${item.criteria}</p>
        </div>

        <div>
          <strong>Әдіс-тәсілдер:</strong>
          <p>${item.methods}</p>
        </div>

        <div>
          <strong>Ресурстар:</strong>
          <p>${item.resources}</p>
        </div>
      </div>

      <div class="task-meta">
        <span>
          <i class="fa-solid fa-file-lines"></i>
          ҚМЖ
        </span>

        <span>
          <i class="fa-solid fa-school"></i>
          ${item.className}-сынып
        </span>

        <span class="status-pill status-active">
          Дайын
        </span>
      </div>
    </div>
  `).join("");
}

function deleteQMG(index) {
  const isConfirm = confirm("Бұл ҚМЖ жазбасын өшіргіңіз келе ме?");

  if (!isConfirm) return;

  qmgItems.splice(index, 1);
  saveQMG();
  renderQMG();
}

qmgForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const newQMG = {
    topic: document.getElementById("qmgTopic").value.trim(),
    className: document.getElementById("qmgClass").value,
    section: document.getElementById("qmgSection").value.trim(),
    learningGoal: document.getElementById("qmgLearningGoal").value.trim(),
    lessonGoal: document.getElementById("qmgLessonGoal").value.trim(),
    criteria: document.getElementById("qmgCriteria").value.trim(),
    methods: document.getElementById("qmgMethods").value.trim(),
    resources: document.getElementById("qmgResources").value.trim()
  };

  qmgItems.push(newQMG);
  saveQMG();
  renderQMG();
  qmgForm.reset();
});

renderQMG();