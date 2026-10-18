const { questions, current, sectionName, questionCount, questionText, optionsBox, answers, renderNumbers } = require("./placement-test");

export function renderQuestion() {
    const item = questions[current];

    sectionName.innerText = "Бөлім: " + item.section;
    questionCount.innerText = Сұрақ; $; { current + 1; };
    questionText.innerText = item.q;

    optionsBox.innerHTML = "";

    item.options.forEach((option, index) => {
        const div = document.createElement("div");
        div.className = "option";

        if (answers[current] === index) {
            div.classList.add("selected");
        }

        div.innerHTML = `
      <span class="option-letter">${String.fromCharCode(65 + index)}</span>
      <span>${option}</span>
    `;

        div.onclick = () => {
            answers[current] = index;
            renderQuestion();
        };

        optionsBox.appendChild(div);
    });

    renderNumbers();
}
