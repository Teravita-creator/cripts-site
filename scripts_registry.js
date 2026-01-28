// Глобальне сховище скриптів
window.SCRIPTS_DATA = window.SCRIPTS_DATA || {
  pl: {},
  ge: {},
  ge_ru: {},
  ro: {},
};

// 7 етапів (гарячі продажі)
window.STAGE_KEYS = [
  "greeting",
  "needs",
  "presentation",
  "courses",
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
  window.STAGE_KEYS.forEach((k) => {
    fixedStages[k] = typeof stages[k] === "string" ? stages[k] : "";
  });

  return {
    title: typeof obj?.title === "string" ? obj.title : "",
    stages: fixedStages,
    accordions: {
      needs: Array.isArray(obj?.accordions?.needs) ? obj.accordions.needs : [],
      objections: Array.isArray(obj?.accordions?.objections) ? obj.accordions.objections : [],
    },
  };
}
