const beginner = ["A1","A2","A3"];
const intermediate = ["B1","B2"];
const advanced = ["C1"];

const allLessons = [...beginner, ...intermediate, ...advanced];

function getUser(){
  return JSON.parse(localStorage.getItem("physxUser")) || {
    level: "beginner",
    progress: { points: 0, lessonsCompleted: [] }
  };
}

// LEVEL ACCESS
function canAccessLevel(levelName, userLevel){
  const order = { beginner:1, intermediate:2, advanced:3 };
  return order[levelName] <= order[userLevel];
}

// MAP UPDATE
function updateMap(){

  const user = getUser();
  const completed = user.progress.lessonsCompleted;
  const userLevel = user.level;

  // LEVEL LOCK
  document.querySelectorAll(".level-section").forEach(sec=>{
    const level = sec.dataset.level;

    if(!canAccessLevel(level, userLevel)){
      sec.classList.add("level-locked");
    }
  });

  // STRICT UNLOCK
  allLessons.forEach((id,index)=>{
    const el = document.getElementById(id);
    if(!el) return;

    el.classList.remove("locked","unlocked","completed");

    if(completed.includes(id)){
      el.classList.add("completed");
    }
    else if(index === 0 || completed.includes(allLessons[index-1])){
      el.classList.add("unlocked");
    }
    else{
      el.classList.add("locked");
      el.removeAttribute("href");
    }
  });

  // PROGRESS %
  const percent = Math.round((completed.length / allLessons.length)*100);
  document.getElementById("progressText").innerText = percent+"%";
  document.getElementById("progressFill").style.width = percent+"%";
}

window.onload = updateMap;