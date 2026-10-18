(function () {
  const STORAGE_KEY = "physxGlobalZoom";
  const MIN_ZOOM = 0.5;
  const MAX_ZOOM = 1.2;
  const STEP = 0.05;

  function getZoom() {
    const saved = Number(localStorage.getItem(STORAGE_KEY));
    return Number.isFinite(saved) ? saved : 0.9;
  }

  function setZoom(value) {
    let zoom = Math.round(value * 100) / 100;
    if (zoom < MIN_ZOOM) zoom = MIN_ZOOM;
    if (zoom > MAX_ZOOM) zoom = MAX_ZOOM;

    localStorage.setItem(STORAGE_KEY, String(zoom));
    applyZoom(zoom);
  }

  function applyZoom(zoom) {
    const target =
      document.querySelector(".lesson-card") ||
      document.querySelector(".map-main") ||
      document.querySelector("main");

    if (target) {
      target.classList.add("physx-zoom-target");
      target.style.transform = `scale(${zoom})`;
      target.style.marginBottom = `${(1 - zoom) * -100}px`;
    }

    const value = document.getElementById("physxZoomValue");
    if (value) value.textContent = `${Math.round(zoom * 100)}%`;
  }

  function createWidget() {
    if (document.getElementById("physxZoomWidget")) return;

    const headerNav = document.querySelector(".nav");
    const widget = document.createElement("div");
    widget.id = "physxZoomWidget";
    widget.className = "physx-zoom-widget";

    widget.innerHTML = `
      <button type="button" id="physxZoomMinus">−</button>
      <span class="physx-zoom-value" id="physxZoomValue">90%</span>
      <button type="button" id="physxZoomPlus">+</button>
    `;

    if (headerNav) {
      headerNav.appendChild(widget);
    } else {
      widget.style.position = "fixed";
      widget.style.top = "12px";
      widget.style.right = "12px";
      document.body.appendChild(widget);
    }

    document.getElementById("physxZoomMinus").onclick = function () {
      setZoom(getZoom() - STEP);
    };

    document.getElementById("physxZoomPlus").onclick = function () {
      setZoom(getZoom() + STEP);
    };
  }

  document.addEventListener("DOMContentLoaded", function () {
    createWidget();
    applyZoom(getZoom());
  });
})();