window.onload = function() {
    // 1. Сақталған деңгейді тексереміз
    const userLevel = localStorage.getItem('userLevel') || 'beginner';
    const container = document.querySelector('.path-container');

    if (!container) {
        console.error("Қате: .path-container табылмады!");
        return;
    }

    // 2. Сабақтар базасы
    const lessonsData = {
        beginner: [
            { title: "1.1 Механикалық қозғалыс", file: "levels/beginner/lesson1_1.html" },
            { title: "1.2 Материялық нүкте", file: "levels/beginner/lesson1_2.html" },
            { title: "1.3 Траектория мен жол", file: "levels/beginner/lesson1_3.html" }
        ],
        intermediate: [
            { title: "1.1 Векторлар және проекциялар", file: "levels/intermediate/lesson2_1.html" },
            { title: "1.2 Теңайнымалы қозғалыс", file: "levels/intermediate/lesson2_2.html" }
        ],
        advanced: [
            { title: "1.1 Кинематикалық ұғымдар", file: "levels/advanced/lesson3_1.html" },
            { title: "1.2 Түзусызықты қозғалыс", file: "levels/advanced/lesson3_2.html" }
        ]
    };

    const currentLessons = lessonsData[userLevel];
    
    // Картаны толтыру
    let htmlContent = `<h1 class="heading" style="color:white; text-align:center;">${userLevel.toUpperCase()} КАРТАСЫ</h1>`;

    currentLessons.forEach((lesson, index) => {
        let status = (index === 0) ? 'current' : 'locked';
        let icon = (index === 0) ? 'fa-play' : 'fa-lock';
        
        htmlContent += `
            <div class="step ${status}" style="margin: 20px auto; text-align:center;">
                <a href="levels/${lesson.file}" class="icon-circle">
                    <i class="fas ${icon}"></i>
                </a>
                <div class="step-info">
                    <div class="title" style="color:white; margin-top:10px;">${lesson.title}</div>
                </div>
            </div>
        `;
    });

    container.innerHTML = htmlContent;
};