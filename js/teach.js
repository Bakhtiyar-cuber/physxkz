const lessonsData = {
  beginner: [
    {
      id: "b1",
      levelName: "Бастапқы деңгей",
      title: "1.1 Механикалық қозғалыс",
      theory: "Механикалық қозғалыс — дененің басқа денелермен салыстырғанда уақыт өтуіне қарай орнын өзгертуі. Қозғалысты сипаттау үшін санақ денесі, координата жүйесі және уақыт қолданылады.",
      formula: "v = s / t",
      formulaText: "Мұндағы v — жылдамдық, s — жүрілген жол, t — уақыт.",
      example: `
        <b>Есеп:</b> Дене 50 м жолды 10 с уақытта жүрді. Жылдамдығын табыңдар.<br><br>
        <b>Берілгені:</b> s = 50 м, t = 10 с<br>
        <b>Формула:</b> v = s / t<br>
        <b>Шешуі:</b> v = 50 / 10 = 5 м/с<br>
        <b>Жауабы:</b> 5 м/с
      `,
      test: `
        <b>Сұрақ:</b> Дененің уақыт өтуіне қарай орнын өзгертуі қалай аталады?<br><br>
        A) Күш<br>
        B) Механикалық қозғалыс<br>
        C) Энергия<br>
        D) Қысым<br><br>
        <b>Дұрыс жауап:</b> B
      `,
      summary: "Бұл сабақта оқушылар механикалық қозғалыс, санақ жүйесі, жол, уақыт және жылдамдық ұғымдарын меңгереді."
    },
    {
      id: "b2",
      levelName: "Бастапқы деңгей",
      title: "1.2 Қозғалыстың салыстырмалылығы",
      theory: "Қозғалыстың салыстырмалылығы — дененің қозғалысы таңдалған санақ жүйесіне тәуелді болуы. Бір дене бір бақылаушыға қатысты тыныштықта, ал басқа бақылаушыға қатысты қозғалыста болуы мүмкін.",
      formula: "vсал = v1 - v2",
      formulaText: "Салыстырмалы жылдамдық денелердің жылдамдықтарының айырмасымен анықталады.",
      example: `
        <b>Есеп:</b> Бір бағытта 10 м/с және 6 м/с жылдамдықпен қозғалған екі дененің салыстырмалы жылдамдығын табыңдар.<br><br>
        <b>Формула:</b> vсал = v1 - v2<br>
        <b>Шешуі:</b> vсал = 10 - 6 = 4 м/с<br>
        <b>Жауабы:</b> 4 м/с
      `,
      test: `
        <b>Сұрақ:</b> Қозғалыс неге тәуелді?<br><br>
        A) Санақ жүйесіне<br>
        B) Тек массаға<br>
        C) Тек көлемге<br>
        D) Тек түске<br><br>
        <b>Дұрыс жауап:</b> A
      `,
      summary: "Оқушылар қозғалыстың бақылаушыға және санақ жүйесіне тәуелді екенін түсінеді."
    },
    {
      id: "b3",
      levelName: "Бастапқы деңгей",
      title: "1.3 Жылдамдық",
      theory: "Жылдамдық дененің бірлік уақытта қанша жол жүргенін көрсетеді. Жылдамдық векторлық шама болып табылады.",
      formula: "v = s / t",
      formulaText: "Жылдамдық жолдың уақытқа қатынасына тең.",
      example: `
        <b>Есеп:</b> Автомобиль 120 м жолды 20 с уақытта жүрді. Жылдамдығын табыңдар.<br><br>
        <b>Берілгені:</b> s = 120 м, t = 20 с<br>
        <b>Формула:</b> v = s / t<br>
        <b>Шешуі:</b> v = 120 / 20 = 6 м/с<br>
        <b>Жауабы:</b> 6 м/с
      `,
      test: `
        <b>Сұрақ:</b> Жылдамдықтың өлшем бірлігі қандай?<br><br>
        A) Н<br>
        B) м/с<br>
        C) Дж<br>
        D) Па<br><br>
        <b>Дұрыс жауап:</b> B
      `,
      summary: "Оқушылар жылдамдық формуласын қолданып есеп шығаруды үйренеді."
    }
  ],

  intermediate: [
    {
      id: "i1",
      levelName: "Орта деңгей",
      title: "2.1 Күш және Ньютонның II заңы",
      theory: "Күш — денелердің өзара әрекеттесуін сипаттайтын физикалық шама. Ньютонның екінші заңы бойынша денеге әсер ететін қорытқы күш дененің массасы мен үдеуінің көбейтіндісіне тең.",
      formula: "F = ma",
      formulaText: "Мұндағы F — күш, m — масса, a — үдеу.",
      example: `
        <b>Есеп:</b> Массасы 2 кг денеге 3 м/с² үдеу берілді. Күшті табыңдар.<br><br>
        <b>Берілгені:</b> m = 2 кг, a = 3 м/с²<br>
        <b>Формула:</b> F = ma<br>
        <b>Шешуі:</b> F = 2 · 3 = 6 Н<br>
        <b>Жауабы:</b> 6 Н
      `,
      test: `
        <b>Сұрақ:</b> Ньютонның II заңы қандай формуламен беріледі?<br><br>
        A) F = ma<br>
        B) v = s/t<br>
        C) A = Fs<br>
        D) P = A/t<br><br>
        <b>Дұрыс жауап:</b> A
      `,
      summary: "Оқушылар күш, масса және үдеу арасындағы байланысты түсінеді."
    },
    {
      id: "i2",
      levelName: "Орта деңгей",
      title: "2.2 Ауырлық күші және салмақ",
      theory: "Ауырлық күші — Жердің денені өзіне тарту күші. Салмақ — дененің тірекке немесе аспаға түсіретін күші.",
      formula: "F = mg",
      formulaText: "Мұндағы m — масса, g — еркін түсу үдеуі.",
      example: `
        <b>Есеп:</b> Массасы 5 кг денеге әсер ететін ауырлық күшін табыңдар. g = 10 Н/кг.<br><br>
        <b>Берілгені:</b> m = 5 кг, g = 10 Н/кг<br>
        <b>Формула:</b> F = mg<br>
        <b>Шешуі:</b> F = 5 · 10 = 50 Н<br>
        <b>Жауабы:</b> 50 Н
      `,
      test: `
        <b>Сұрақ:</b> Ауырлық күші қандай формуламен анықталады?<br><br>
        A) F = mg<br>
        B) A = Fs<br>
        C) P = A/t<br>
        D) v = s/t<br><br>
        <b>Дұрыс жауап:</b> A
      `,
      summary: "Оқушылар ауырлық күші мен салмақтың айырмашылығын ажыратады."
    },
    {
      id: "i3",
      levelName: "Орта деңгей",
      title: "2.3 Үйкеліс күші",
      theory: "Үйкеліс күші жанасқан денелердің салыстырмалы қозғалысына кедергі жасайды. Ол нормаль қысым күшіне және үйкеліс коэффициентіне тәуелді.",
      formula: "Fүйк = μN",
      formulaText: "Мұндағы μ — үйкеліс коэффициенті, N — тірек реакциясы.",
      example: `
        <b>Есеп:</b> Үйкеліс коэффициенті 0,3, тірек реакциясы 20 Н. Үйкеліс күшін табыңдар.<br><br>
        <b>Берілгені:</b> μ = 0,3, N = 20 Н<br>
        <b>Формула:</b> Fүйк = μN<br>
        <b>Шешуі:</b> Fүйк = 0,3 · 20 = 6 Н<br>
        <b>Жауабы:</b> 6 Н
      `,
      test: `
        <b>Сұрақ:</b> Үйкеліс күші қай бағытта әсер етеді?<br><br>
        A) Қозғалыс бағытымен<br>
        B) Қозғалысқа қарсы<br>
        C) Жоғары ғана<br>
        D) Төмен ғана<br><br>
        <b>Дұрыс жауап:</b> B
      `,
      summary: "Оқушылар үйкеліс күшінің пайда болуын және есептеу жолын меңгереді."
    }
  ],

  advanced: [
    {
      id: "a1",
      levelName: "Жоғары деңгей",
      title: "3.1 Жұмыс және қуат",
      theory: "Механикалық жұмыс күш әсерінен дене орын ауыстырғанда атқарылады. Қуат жұмыстың уақытқа қатынасымен анықталады.",
      formula: "A = Fs,  P = A / t",
      formulaText: "A — жұмыс, F — күш, s — орын ауыстыру, P — қуат, t — уақыт.",
      example: `
        <b>Есеп:</b> 10 Н күш денені 4 м-ге жылжытты. Жұмысты табыңдар.<br><br>
        <b>Берілгені:</b> F = 10 Н, s = 4 м<br>
        <b>Формула:</b> A = Fs<br>
        <b>Шешуі:</b> A = 10 · 4 = 40 Дж<br>
        <b>Жауабы:</b> 40 Дж
      `,
      test: `
        <b>Сұрақ:</b> Жұмыстың өлшем бірлігі қандай?<br><br>
        A) Н<br>
        B) Вт<br>
        C) Дж<br>
        D) Па<br><br>
        <b>Дұрыс жауап:</b> C
      `,
      summary: "Оқушылар жұмыс пен қуатты есептеуді және олардың физикалық мағынасын түсінеді."
    },
    {
      id: "a2",
      levelName: "Жоғары деңгей",
      title: "3.2 Энергияның сақталу заңы",
      theory: "Тұйық жүйеде толық механикалық энергия сақталады. Кинетикалық және потенциалдық энергия бір-біріне түрленуі мүмкін.",
      formula: "E = Ek + Ep",
      formulaText: "Толық механикалық энергия кинетикалық және потенциалдық энергиялардың қосындысына тең.",
      example: `
        <b>Есеп:</b> Дененің кинетикалық энергиясы 40 Дж, потенциалдық энергиясы 60 Дж. Толық энергияны табыңдар.<br><br>
        <b>Формула:</b> E = Ek + Ep<br>
        <b>Шешуі:</b> E = 40 + 60 = 100 Дж<br>
        <b>Жауабы:</b> 100 Дж
      `,
      test: `
        <b>Сұрақ:</b> Толық механикалық энергия қалай анықталады?<br><br>
        A) E = Ek + Ep<br>
        B) F = ma<br>
        C) v = s/t<br>
        D) A = Fs<br><br>
        <b>Дұрыс жауап:</b> A
      `,
      summary: "Оқушылар энергияның сақталу заңын механика есептерінде қолданады."
    },
    {
      id: "a3",
      levelName: "Жоғары деңгей",
      title: "3.3 Импульс және сақталу заңы",
      theory: "Импульс дененің массасы мен жылдамдығының көбейтіндісіне тең. Тұйық жүйеде импульс сақталады.",
      formula: "p = mv",
      formulaText: "p — импульс, m — масса, v — жылдамдық.",
      example: `
        <b>Есеп:</b> Массасы 3 кг дене 4 м/с жылдамдықпен қозғалады. Импульсін табыңдар.<br><br>
        <b>Берілгені:</b> m = 3 кг, v = 4 м/с<br>
        <b>Формула:</b> p = mv<br>
        <b>Шешуі:</b> p = 3 · 4 = 12 кг·м/с<br>
        <b>Жауабы:</b> 12 кг·м/с
      `,
      test: `
        <b>Сұрақ:</b> Импульс формуласы қандай?<br><br>
        A) p = mv<br>
        B) F = ma<br>
        C) A = Fs<br>
        D) P = A/t<br><br>
        <b>Дұрыс жауап:</b> A
      `,
      summary: "Оқушылар импульс және импульстің сақталу заңын түсінеді."
    }
  ]
};

const levelButtons = document.querySelectorAll(".level-choice");
const lessonSelect = document.getElementById("lessonSelect");
const openLessonBtn = document.getElementById("openLessonBtn");
const tabButtons = document.querySelectorAll(".teach-tab");
const panels = document.querySelectorAll(".teach-panel");

let currentLevel = "beginner";
let currentLesson = lessonsData[currentLevel][0];

function renderLessonOptions() {
  lessonSelect.innerHTML = lessonsData[currentLevel].map((lesson, index) => `
    <option value="${index}">${lesson.title}</option>
  `).join("");

  currentLesson = lessonsData[currentLevel][0];
  renderLesson(currentLesson);
}

function renderLesson(lesson) {
  document.getElementById("lessonLevelBadge").textContent = lesson.levelName;
  document.getElementById("lessonTitle").textContent = lesson.title;
  document.getElementById("lessonTheory").textContent = lesson.theory;
  document.getElementById("lessonFormula").textContent = lesson.formula;
  document.getElementById("lessonFormulaText").textContent = lesson.formulaText;
  document.getElementById("lessonExample").innerHTML = lesson.example;
  document.getElementById("lessonTest").innerHTML = lesson.test;
  document.getElementById("lessonSummary").textContent = lesson.summary;
}

levelButtons.forEach(button => {
  button.addEventListener("click", () => {
    levelButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    currentLevel = button.dataset.level;
    renderLessonOptions();
  });
});

lessonSelect.addEventListener("change", () => {
  currentLesson = lessonsData[currentLevel][lessonSelect.value];
});

openLessonBtn.addEventListener("click", () => {
  renderLesson(currentLesson);

  document.getElementById("teachScreen").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    const tab = button.dataset.tab;

    tabButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    panels.forEach(panel => panel.classList.remove("active"));
    document.getElementById(`${tab}Panel`).classList.add("active");
  });
});

function toggleFullscreen() {
  const screen = document.getElementById("teachScreen");

  if (!document.fullscreenElement) {
    screen.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

renderLessonOptions();