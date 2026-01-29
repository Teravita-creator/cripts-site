// scripts_registry.js

// Глобальне сховище скриптів
window.SCRIPTS_DATA = window.SCRIPTS_DATA || {
  pl: {},
  ge: {},
  ge_ru: {},
  ro: {},
};

// ✅ 9 етапів (додали cross + survey)
window.STAGE_KEYS = [
  "greeting",
  "needs",
  "presentation",
  "courses",
  "cross",
  "survey",
  "closing",
  "objections",
  "products",
];

// Реєстрація скрипта (щоб додавати з окремих файлів)
window.registerScript = function registerScript(kc, scriptId, obj) {
  if (!window.SCRIPTS_DATA[kc]) window.SCRIPTS_DATA[kc] = {};
  window.SCRIPTS_DATA[kc][scriptId] = normalizeHotScript(obj);
};

function normalizeHotScript(obj) {
  const stages = obj?.stages || {};
  const fixedStages = {};

  // гарантуємо, що всі 9 етапів є рядками
  window.STAGE_KEYS.forEach((k) => {
    fixedStages[k] = typeof stages[k] === "string" ? stages[k] : "";
  });

  // ✅ ВАЖЛИВО: ці поля раніше губилися під час normalize()
  // Тепер вони зберігаються і будуть доступні в script.js
  const pricing = Array.isArray(obj?.pricing) ? obj.pricing : [];
  const objectionsButtons = Array.isArray(obj?.objectionsButtons)
    ? obj.objectionsButtons
    : [];

  return {
    title: typeof obj?.title === "string" ? obj.title : "",
    stages: fixedStages,

    // ✅ ДОДАЛИ: щоб рендерились ціни та кнопки заперечень
    pricing,
    objectionsButtons,

    accordions: {
      needs: Array.isArray(obj?.accordions?.needs) ? obj.accordions.needs : [],
      objections: Array.isArray(obj?.accordions?.objections)
        ? obj.accordions.objections
        : [],
    },
  };
}
