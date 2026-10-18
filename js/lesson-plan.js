const lessonPlanForm = document.getElementById("lessonPlanForm");
const lessonPlanList = document.getElementById("lessonPlanList");

let lessonPlans = JSON.parse(localStorage.getItem("physxLessonPlans")) || [
  {
    topic: "Механикалық қозғалыс",
    className: "9",
    duration: "45 минут",
    start: "Ұйымдастыру кезеңі. Оқушылардың назарын сабаққа аудару. Қозғалыс туралы күнделікті өмірден мысал келтіру.",
    middle: "Механикалық қозғалыс, траектория, жол және орын ауыстыру ұғымдарын түсіндіру. PhysX платформасындағы тақырыптық сабақ пен есептерді орындау.",
    end: "Сабақты қорытындылау. Оқушыларға қысқа тест беру. Кері байланыс алу.",
    assessment: "Дескриптор арқылы бағалау: анықтаманы біледі, формуланы қолданады, есеп шығарады.",
    physx: "PhysX платформасының 'Механикалық қозғалыс' сабағы, тақырыптық тест және оқу картасы қолданылады."
  },
  {
    topic: "Ньютонның екінші заңы",
    className: "9",
    duration: "45 минут",
    start: "Өткен тақырыпты қайталау. Күш, масса, үдеу ұғымдары бойынша сұрақ-жауап.",
    middle: "F=ma формуласын түсіндіру. Тақтада есеп шығару. PhysX платформасында деңгейлік тапсырмалар орындау.",
    end: "Сабақ соңында қорытынды тест және рефлексия жүргізіледі.",
    assessment: "Формативті бағалау, тест нәтижесі, есеп шығару сапасы.",
    physx: "PhysX платформасындағы Ньютон заңдары тақырыбы және виртуалды эксперимент қолданылады."
  }
];

function saveLessonPlans() {
  localStorage.setItem("physxLessonPlans", JSON.stringify(lessonPlans));
}

function renderLessonPlans() {
  lessonPlanList.innerHTML = lessonPlans.map((item, index) => `
    <div class="qmg-item">
      <div class="qmg-top">
        <div>
          <h3>${item.topic}</h3>
          <p>${item.className}-сынып • ${item.duration}</p>
        </div>

        <button onclick="deleteLessonPlan(${index})" class="delete-class-btn">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>

      <div class="qmg-info">
        <div>
          <strong>Сабақтың басы:</strong>
          <p>${item.start}</p>
        </div>

        <div>
          <strong>Сабақтың ортасы:</strong>
          <p>${item.middle}</p>
        </div>

        <div>
          <strong>Сабақтың соңы:</strong>
          <p>${item.end}</p>
        </div>

        <div>
          <strong>Бағалау:</strong>
          <p>${item.assessment}</p>
        </div>

        <div>
          <strong>PhysX қолдану:</strong>
          <p>${item.physx}</p>
        </div>
      </div>

      <div class="task-meta">
        <span>
          <i class="fa-solid fa-diagram-project"></i>
          Сабақ жоспары
        </span>

        <span>
          <i class="fa-solid fa-clock"></i>
          ${item.duration}
        </span>

        <span class="status-pill status-active">
          Дайын
        </span>
      </div>
    </div>
  `).join("");
}

function deleteLessonPlan(index) {
  const isConfirm = confirm("Бұл сабақ жоспарын өшіргіңіз келе ме?");

  if (!isConfirm) return;

  lessonPlans.splice(index, 1);
  saveLessonPlans();
  renderLessonPlans();
}

lessonPlanForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const newPlan = {
    topic: document.getElementById("planTopic").value.trim(),
    className: document.getElementById("planClass").value,
    duration: document.getElementById("planDuration").value,
    start: document.getElementById("planStart").value.trim(),
    middle: document.getElementById("planMiddle").value.trim(),
    end: document.getElementById("planEnd").value.trim(),
    assessment: document.getElementById("planAssessment").value.trim(),
    physx: document.getElementById("planPhysx").value.trim()
  };

  lessonPlans.push(newPlan);
  saveLessonPlans();
  renderLessonPlans();
  lessonPlanForm.reset();
});

renderLessonPlans();