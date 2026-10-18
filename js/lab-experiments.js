const labForm = document.getElementById("labForm");
const labList = document.getElementById("labList");

let labExperiments = JSON.parse(localStorage.getItem("physxLabExperiments")) || [
  {
    title: "Математикалық маятник тербелісін зерттеу",
    className: "9",
    topic: "Тербелістер. Маятник",
    goal: "Жіп ұзындығының тербеліс периодына әсерін анықтау және период формуласын тәжірибеде тексеру.",
    equipment: "Маятник, жіп, секундомер, сызғыш, штатив.",
    theory: "Маятниктің тербеліс периоды жіп ұзындығына және еркін түсу үдеуіне тәуелді.",
    formula: "T = 2π√(l/g)",
    procedure: "1) Маятникті штативке бекіту. 2) Жіп ұзындығын өлшеу. 3) 10 тербеліс уақытын өлшеу. 4) Периодты есептеу. 5) Нәтижені салыстыру.",
    questions: "1) Жіп ұзындығы артқанда период қалай өзгереді? 2) g мәні нәтижеге қалай әсер етеді?"
  },
  {
    title: "Ньютонның II заңын тексеру",
    className: "9",
    topic: "Динамика. Ньютон заңдары",
    goal: "Күш, масса және үдеу арасындағы байланысты тәжірибе арқылы анықтау.",
    equipment: "Арба, жүк, динамометр, трек, секундомер.",
    theory: "Денеге әсер ететін қорытқы күш дененің массасы мен үдеуінің көбейтіндісіне тең.",
    formula: "F = ma",
    procedure: "1) Арбаға белгілі масса бекіту. 2) Күшті өзгерту. 3) Үдеуді өлшеу. 4) F және a арасындағы байланысты салыстыру.",
    questions: "1) Күш артқанда үдеу қалай өзгереді? 2) Масса артқанда үдеу қалай өзгереді?"
  },
  {
    title: "Үйкеліс коэффициентін анықтау",
    className: "9",
    topic: "Үйкеліс күші",
    goal: "Әртүрлі беттер үшін үйкеліс коэффициентін анықтау.",
    equipment: "Брусок, динамометр, әртүрлі беттер, жүктер.",
    theory: "Үйкеліс күші нормаль қысым күшіне және үйкеліс коэффициентіне тәуелді.",
    formula: "Fүйк = μN",
    procedure: "1) Брусокты бетке қою. 2) Динамометрмен бірқалыпты тарту. 3) Үйкеліс күшін өлшеу. 4) μ мәнін есептеу.",
    questions: "1) Қай бетте үйкеліс көп? 2) Нормаль күш артса, үйкеліс қалай өзгереді?"
  }
];

function saveLabs() {
  localStorage.setItem("physxLabExperiments", JSON.stringify(labExperiments));
}

function renderLabs() {
  labList.innerHTML = labExperiments.map((lab, index) => `
    <div class="lab-item">
      <div class="lab-top">
        <div>
          <h3>${lab.title}</h3>
          <p>${lab.className}-сынып • ${lab.topic}</p>
        </div>

        <button onclick="deleteLab(${index})" class="delete-class-btn">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>

      <div class="lab-formula">
        <i class="fa-solid fa-square-root-variable"></i>
        <span>${lab.formula}</span>
      </div>

      <div class="lab-detail">
        <div>
          <strong>Мақсаты:</strong>
          <p>${lab.goal}</p>
        </div>

        <div>
          <strong>Құрал-жабдықтар:</strong>
          <p>${lab.equipment}</p>
        </div>

        <div>
          <strong>Теориялық негіз:</strong>
          <p>${lab.theory}</p>
        </div>

        <div>
          <strong>Жұмыс барысы:</strong>
          <p>${lab.procedure}</p>
        </div>

        <div>
          <strong>Қорытынды сұрақтар:</strong>
          <p>${lab.questions}</p>
        </div>
      </div>

      <div class="task-meta">
        <span>
          <i class="fa-solid fa-flask"></i>
          Лаборатория
        </span>

        <span>
          <i class="fa-solid fa-school"></i>
          ${lab.className}-сынып
        </span>

        <span class="status-pill status-active">
          Дайын
        </span>
      </div>
    </div>
  `).join("");
}

function deleteLab(index) {
  const isConfirm = confirm("Бұл лабораториялық жұмысты өшіргіңіз келе ме?");

  if (!isConfirm) return;

  labExperiments.splice(index, 1);
  saveLabs();
  renderLabs();
}

labForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const newLab = {
    title: document.getElementById("labTitle").value.trim(),
    className: document.getElementById("labClass").value,
    topic: document.getElementById("labTopic").value.trim(),
    goal: document.getElementById("labGoal").value.trim(),
    equipment: document.getElementById("labEquipment").value.trim(),
    theory: document.getElementById("labTheory").value.trim(),
    formula: document.getElementById("labFormula").value.trim(),
    procedure: document.getElementById("labProcedure").value.trim(),
    questions: document.getElementById("labQuestions").value.trim()
  };

  labExperiments.push(newLab);
  saveLabs();
  renderLabs();
  labForm.reset();
});

renderLabs();