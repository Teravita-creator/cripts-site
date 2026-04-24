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

  const presentationFlow = Array.isArray(obj?.presentationFlow) ? obj.presentationFlow : [];

 const needsBranches = Array.isArray(obj?.needsBranches) ? obj.needsBranches : [];


  // ✅ Раніше ці поля губилися під час normalize()
  // Тепер вони зберігаються і будуть доступні в script.js

  // Ціни (вкладки)
  const pricing = Array.isArray(obj?.pricing) ? obj.pricing : [];

  // Довгі кнопки в етапі "Заперечення"
  const objectionsButtons = Array.isArray(obj?.objectionsButtons)
    ? obj.objectionsButtons
    : [];

    const products = Array.isArray(obj?.products) ? obj.products : [];
    const fixedProducts = products.map(p => ({
    ...p,
    tabs: Array.isArray(p.tabs) ? p.tabs : [],
    format: p.format || "",         // ✅ Додали формат
      manufacturer: p.manufacturer || "", // ✅ Додали виробника
      storage: p.storage || "",       // ✅ Додали зберігання
      characteristics: p.characteristics || "",
      benefits: p.benefits || "",
      contraindications: p.contraindications || ""
  }));

    const crossSellProducts = Array.isArray(obj?.crossSellProducts)
  ? obj.crossSellProducts
  : [];
    const navStages = Array.isArray(obj?.navStages) ? obj.navStages : null;






  return {
    title: typeof obj?.title === "string" ? obj.title : "",
    stages: fixedStages,
    navStages,
description: typeof obj?.description === "string" ? obj.description : "",

    // ✅ ДОДАЛИ: щоб рендерились ціни та кнопки
    pricing,
    objectionsButtons,
    products: fixedProducts,
    crossSellProducts,
    presentationFlow,
    needsBranches,




    accordions: {
      needs: Array.isArray(obj?.accordions?.needs) ? obj.accordions.needs : [],
      objections: Array.isArray(obj?.accordions?.objections)
        ? obj.accordions.objections
        : [],
    },
  };
}