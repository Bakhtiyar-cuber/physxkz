function calculateResult() {
    let score = 0;
    let form = document.getElementById('quiz-form');
    let formData = new FormData(form);

    for (let value of formData.values()) {
        score += parseInt(value);
    }

    let resultDiv = document.getElementById('result');
    let levelKey = ""; // Бұл деңгейді анықтау үшін керек
    let levelName = "";

    if (score === 1) {
        levelName = "А - Бастапқы деңгей";
        levelKey = "beginner";
    } else if (score === 2) {
        levelName = "В - Орта деңгей";
        levelKey = "intermediate";
    } else if (score === 3) {
        levelName = "С - Жоғары деңгей";
        levelKey = "advanced";
    } else {
        levelName = "Бастапқы деңгей";
        levelKey = "beginner"; // Төмен ұпай алса да бастапқы деңгейге жібереміз
    }

    // МАҢЫЗДЫ: Пайдаланушы деңгейін браузер жадына сақтаймыз
    localStorage.setItem('userLevel', levelKey);

    resultDiv.innerHTML = `Құттықтаймыз! Сіздің деңгейіңіз: ${levelName}. Оқу картасына бағытталуда...`;

    // 2 секундтан кейін КАРТА бетіне өту
    setTimeout(() => {
        window.location.href = "levels_map.html";
    }, 2000);
}