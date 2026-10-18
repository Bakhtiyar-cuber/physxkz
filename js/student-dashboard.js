const user = JSON.parse(localStorage.getItem("physxUser")) || {
  progress: {
    points: 0,
    lessonsCompleted: []
  },
  badges: [],
  studyLevel: "beginner"
};

const levelNames = {
  beginner: "Бастапқы",
  intermediate: "Орта",
  advanced: "Жоғары"
};

const totalLessons = 9;
const completedCount = user.progress.lessonsCompleted.length || 0;
const points = user.progress.points || 0;
const badges = user.badges || [];
const progressPercent = Math.min(Math.round((completedCount / totalLessons) * 100), 100);

document.getElementById("studentXP").textContent = points + " XP";
document.getElementById("completedLessons").textContent = completedCount + " сабақ";
document.getElementById("studentBadges").textContent = badges.length + " бейдж";
document.getElementById("studentLevel").textContent = levelNames[user.studyLevel] || "Бастапқы";

document.getElementById("progressPercent").textContent = progressPercent + "%";
document.getElementById("progressFill").style.width = progressPercent + "%";

const advice = document.getElementById("studentAdvice");

if (completedCount === 0) {
  advice.textContent = "Бүгін оқу картасындағы бірінші сабақты бастап, механикалық қозғалыс тақырыбын меңгеріңіз.";
} else if (completedCount < 3) {
  advice.textContent = "Жақсы бастама! Енді келесі сабақтарды аяқтап, тест арқылы біліміңізді бекітіңіз.";
} else if (completedCount < 6) {
  advice.textContent = "Прогресс жақсы. Виртуалды лабораторияны қолданып, теорияны тәжірибемен байланыстырыңыз.";
} else {
  advice.textContent = "Өте жақсы нәтиже! Жоғары деңгей тапсырмаларын орындап, рейтингтегі орныңызды жақсартыңыз.";
}