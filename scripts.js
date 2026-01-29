/* ============================
   ЗАХИСТ СТОРІНКИ
============================ */
if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "index.html";
}

const selectedKC = localStorage.getItem("selectedKC");
if (!selectedKC) {
  window.location.href = "kc.html";
}

/* ============================
   ВІДОБРАЖЕННЯ КЦ
============================ */
const kcNameMap = {
  pl: "PL",
  ge: "GE",
  ge_ru: "GE/RU",
  ro: "RO",
};

const kcNameEl = document.getElementById("kcName");
if (kcNameEl) {
  kcNameEl.textContent = kcNameMap[selectedKC] || selectedKC;
}

/* ============================
   КНОПКА «НАЗАД»
============================ */
const backBtn = document.getElementById("backBtn");
if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.location.href = "kc.html";
  });
}

/* ============================
   СПИСКИ СКРИПТІВ
============================ */
const hotList = document.getElementById("hotList");
const baseList = document.getElementById("baseList");

// ID скриптів (10 + 10)
const hotIds = Array.from({ length: 10 }, (_, i) => `hot_${i + 1}`);
const baseIds = Array.from({ length: 10 }, (_, i) => `base_${i + 1}`);

/* ============================
   ХЕЛПЕРИ
============================ */

// беремо title зі scripts_data.js або fallback
function getTitleFromData(kc, scriptId, fallback) {
  if (typeof SCRIPTS_DATA === "undefined") return fallback;

  const scriptObj = SCRIPTS_DATA?.[kc]?.[scriptId];
  const title = scriptObj?.title;

  if (typeof title === "string" && title.trim().length > 0) {
    return title.trim();
  }

  return fallback;
}

// створення кнопки
function createScriptButton(scriptId, title) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "tile";
  btn.textContent = title;

  btn.addEventListener("click", () => {
    localStorage.setItem("selectedScriptId", scriptId);
    localStorage.setItem("selectedScriptTitle", title);
    window.location.href = "script.html";
  });

  return btn;
}

/* ============================
   ГАРЯЧІ ПРОДАЖІ
============================ */
if (hotList) {
  hotIds.forEach((id, index) => {
    const fallbackTitle = `Скрипт (Горячие) #${index + 1}`;
    const title = getTitleFromData(selectedKC, id, fallbackTitle);
    hotList.appendChild(createScriptButton(id, title));
  });
}

/* ============================
   БАЗА
============================ */
if (baseList) {
  baseIds.forEach((id, index) => {
    const fallbackTitle = `Скрипт (База) #${index + 1}`;
    const title = getTitleFromData(selectedKC, id, fallbackTitle);
    baseList.appendChild(createScriptButton(id, title));
  });
}
function renderScriptLists() {
  if (hotList) hotList.innerHTML = "";
  if (baseList) baseList.innerHTML = "";

  if (hotList) {
    hotIds.forEach((id, index) => {
      const fallbackTitle = `Скрипт (Горячие) #${index + 1}`;
      const title = getTitleFromData(selectedKC, id, fallbackTitle);
      hotList.appendChild(createScriptButton(id, title));
    });
  }

  if (baseList) {
    baseIds.forEach((id, index) => {
      const fallbackTitle = `Скрипт (База) #${index + 1}`;
      const title = getTitleFromData(selectedKC, id, fallbackTitle);
      baseList.appendChild(createScriptButton(id, title));
    });
  }
}

// ✅ якщо мова змінилась — перебудувати список кнопок
document.addEventListener("lang:changed", () => {
  renderScriptLists();
});
