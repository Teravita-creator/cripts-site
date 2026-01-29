/*
  Формат для ГАРЯЧИХ продажів (7 етапів завжди):

  SCRIPTS_DATA[KC][SCRIPT_ID] = {
    title: "опціонально",
    stages: {
      greeting: "HTML...",
      needs: "HTML...",
      presentation: "HTML...",
      courses: "HTML...",
      closing: "HTML...",
      objections: "HTML...",
      products: "HTML..."
    },
    accordions: {
      needs: [ {q:"", a:""}, ... ],
      objections: [ {q:"", a:""}, ... ]
    }
  }

  ✅ Ти просто підставляєш текст у потрібні поля.
  ✅ Етапи завжди відображаються (не ховаємо).
  ✅ Accordion-и можна робити різні для кожного скрипта.
*/

const STAGE_KEYS = [
  "greeting",
  "needs",
  "presentation",
  "courses",
  "closing",
  "objections",
  "products",
];

// Хелпер: щоб не плутатись — створює об’єкт скрипта з 7 етапами
function makeHotScript({ title, stages, needsAcc = [], objectionsAcc = [] }) {
  const fullStages = {};
  STAGE_KEYS.forEach((k) => {
    fullStages[k] = (stages && stages[k]) ? stages[k] : ""; // якщо нема — порожньо
  });

  return {
    title: title || "",
    stages: fullStages,
    accordions: {
      needs: Array.isArray(needsAcc) ? needsAcc : [],
      objections: Array.isArray(objectionsAcc) ? objectionsAcc : [],
    },
  };
}

const SCRIPTS_DATA = {
  pl: {
    // ✅ Приклад: hot_1
    hot_1: makeHotScript({
      title: "PL • Hot #1",
      stages: {
        greeting: `<p><b>Operator:</b> Dzień dobry…</p>`,
        needs: `<p>Питання для виявлення потреб…</p>`,
        presentation: `<p>Презентація рішення…</p>`,
        courses: `<p>Курси/умови…</p>`,
        closing: `<p>Завершення…</p>`,
        objections: `<p>Заперечення…</p>`,
        products: `<p>Препарати…</p>`,
      },
      needsAcc: [
        { q: "Czy byłeś u lekarza?", a: "ВСТАВ ТЕКСТ під артроз/артрит/…" },
        { q: "Jak długo trwa problem?", a: "ВСТАВ ТЕКСТ…" },
      ],
      objectionsAcc: [
        { q: "Drogo", a: "ВСТАВ ТЕКСТ…" },
      ],
    }),

    // ✅ Решту hot_2..hot_10 зробимо як заготовки (щоб ти лише вставляла текст)
    hot_2: makeHotScript({ title: "PL • Hot #2", stages: {} }),
    hot_3: makeHotScript({ title: "PL • Hot #3", stages: {} }),
    hot_4: makeHotScript({ title: "PL • Hot #4", stages: {} }),
    hot_5: makeHotScript({ title: "PL • Hot #5", stages: {} }),
    hot_6: makeHotScript({ title: "PL • Hot #6", stages: {} }),
    hot_7: makeHotScript({ title: "PL • Hot #7", stages: {} }),
    hot_8: makeHotScript({ title: "PL • Hot #8", stages: {} }),
    hot_9: makeHotScript({ title: "PL • Hot #9", stages: {} }),
    hot_10: makeHotScript({ title: "PL • Hot #10", stages: {} }),
  },

  ge: {
    hot_1: makeHotScript({ title: "GE • Hot #1", stages: { greeting: `<p>ქართული ტექსტი…</p>` } }),
    hot_2: makeHotScript({ title: "GE • Hot #2", stages: {} }),
    hot_3: makeHotScript({ title: "GE • Hot #3", stages: {} }),
    hot_4: makeHotScript({ title: "GE • Hot #4", stages: {} }),
    hot_5: makeHotScript({ title: "GE • Hot #5", stages: {} }),
    hot_6: makeHotScript({ title: "GE • Hot #6", stages: {} }),
    hot_7: makeHotScript({ title: "GE • Hot #7", stages: {} }),
    hot_8: makeHotScript({ title: "GE • Hot #8", stages: {} }),
    hot_9: makeHotScript({ title: "GE • Hot #9", stages: {} }),
    hot_10: makeHotScript({ title: "GE • Hot #10", stages: {} }),
  },

  ge_ru: {
    hot_1: makeHotScript({ title: "GE/RU • Hot #1", stages: { greeting: `<p>Русский текст…</p>` } }),
    hot_2: makeHotScript({ title: "GE/RU • Hot #2", stages: {} }),
    hot_3: makeHotScript({ title: "GE/RU • Hot #3", stages: {} }),
    hot_4: makeHotScript({ title: "GE/RU • Hot #4", stages: {} }),
    hot_5: makeHotScript({ title: "GE/RU • Hot #5", stages: {} }),
    hot_6: makeHotScript({ title: "GE/RU • Hot #6", stages: {} }),
    hot_7: makeHotScript({ title: "GE/RU • Hot #7", stages: {} }),
    hot_8: makeHotScript({ title: "GE/RU • Hot #8", stages: {} }),
    hot_9: makeHotScript({ title: "GE/RU • Hot #9", stages: {} }),
    hot_10: makeHotScript({ title: "GE/RU • Hot #10", stages: {} }),
  },

  ro: {
    hot_1: makeHotScript({ title: "RO • Hot #1", stages: { greeting: `<p>Text română…</p>` } }),
    hot_2: makeHotScript({ title: "RO • Hot #2", stages: {} }),
    hot_3: makeHotScript({ title: "RO • Hot #3", stages: {} }),
    hot_4: makeHotScript({ title: "RO • Hot #4", stages: {} }),
    hot_5: makeHotScript({ title: "RO • Hot #5", stages: {} }),
    hot_6: makeHotScript({ title: "RO • Hot #6", stages: {} }),
    hot_7: makeHotScript({ title: "RO • Hot #7", stages: {} }),
    hot_8: makeHotScript({ title: "RO • Hot #8", stages: {} }),
    hot_9: makeHotScript({ title: "RO • Hot #9", stages: {} }),
    hot_10: makeHotScript({ title: "RO • Hot #10", stages: {} }),
  },
};
