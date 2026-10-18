const resultsTable = document.getElementById("resultsTable");
const resultSearch = document.getElementById("resultSearch");
const resultFilter = document.getElementById("resultFilter");

function getGrowthType(growth) {
  if (growth >= 24) return "high";
  if (growth >= 18) return "middle";
  return "low";
}

function getGrowthText(growth) {
  if (growth >= 24) return "Жоғары өсім";
  if (growth >= 18) return "Орташа өсім";
  return "Қосымша көмек керек";
}

function getGrowthClass(growth) {
  if (growth >= 24) return "status-active";
  if (growth >= 18) return "level-middle";
  return "status-low";
}

function renderResults() {
  const searchValue = resultSearch.value.toLowerCase().trim();
  const selectedFilter = resultFilter.value;

  const filteredResults = demoResults.filter(item => {
    const growth = item.finalScore - item.startScore;
    const growthType = getGrowthType(growth);

    const matchesSearch =
      item.name.toLowerCase().includes(searchValue) ||
      item.className.toLowerCase().includes(searchValue);

    const matchesFilter =
      selectedFilter === "all" || selectedFilter === growthType;

    return matchesSearch && matchesFilter;
  });

  resultsTable.innerHTML = filteredResults.map((item, index) => {
    const growth = item.finalScore - item.startScore;

    return `
      <tr>
        <td>${index + 1}</td>
        <td>${item.name}</td>
        <td>${item.className}</td>
        <td>${item.startScore} балл</td>
        <td><b>${item.finalScore} балл</b></td>
        <td>
          <span class="level-pill level-high">+${growth}</span>
        </td>
        <td>
          <span class="status-pill ${getGrowthClass(growth)}">
            ${getGrowthText(growth)}
          </span>
        </td>
      </tr>
    `;
  }).join("");
}

resultSearch.addEventListener("input", renderResults);
resultFilter.addEventListener("change", renderResults);

renderResults();