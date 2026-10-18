function loginAs(role) {
  localStorage.setItem("physxRole", role);

  if (role === "student") {
    window.location.href = "student-dashboard.html";
  }

  if (role === "teacher") {
    window.location.href = "teacher-dashboard.html";
  }
}

function logout() {
  localStorage.removeItem("physxRole");
  window.location.href = "login.html";
}

function checkRole(requiredRole) {
  const role = localStorage.getItem("physxRole");

  if (role !== requiredRole) {
    alert("Бұл бетке кіру үшін алдымен сәйкес рөлмен кіріңіз.");
    window.location.href = "login.html";
  }
}