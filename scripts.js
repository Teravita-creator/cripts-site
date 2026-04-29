/* ============================
   ЗАХИСТ СТОРІНКИ
============================ */


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
const listsByKC = {
  ge_ru: {
    hot: ["hot_1", "hot_2", "hot_3", "hot_4"],
    base: ["base_1", "base_2"]
  },
  pl: {
    hot: ["hot_1", "hot_2", "hot_3", "hot_4"],
    base: ["base_1", "base_2", "base_3"]
  },
  ge: {
    hot: ["hot_1", "hot_2", "hot_3", "hot_4", "hot_5", "hot_6", "hot_7", "hot_8", "hot_9", "hot_10", "hot_11", "hot_12", "hot_13", "hot_14"],
    base: ["base_1", "base_2"]
  },
  ro: {
    hot: ["hot_1", "hot_2", "hot_3", "hot_4", "hot_5", "hot_6"],
    base: ["base_1", "base_2"]
  }
  

 
};

const currentLists = listsByKC[selectedKC] || {
  hot: Array.from({ length: 10 }, (_, i) => `hot_${i + 1}`),
  base: Array.from({ length: 10 }, (_, i) => `base_${i + 1}`)
};

const hotIds = currentLists.hot;
const baseIds = currentLists.base;
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
