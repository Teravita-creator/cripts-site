// ================== ЗАХИСТ ==================
if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "index.html";
}

const kc = localStorage.getItem("selectedKC");
if (!kc) window.location.href = "kc.html";

const scriptId = localStorage.getItem("selectedScriptId");
if (!scriptId) window.location.href = "scripts.html";

// ================== НАЗАД ==================
document.getElementById("backBtn")?.addEventListener("click", () => {
  window.location.href = "scripts.html";
});

// ================== ДАНІ ==================
const scriptObj = window.SCRIPTS_DATA?.[kc]?.[scriptId] || null;

const title =
  scriptObj?.title ||
  localStorage.getItem("selectedScriptTitle") ||
  "Скрипт";

document.getElementById("scriptTitle").textContent = title;
document.getElementById("scriptMeta").textContent = `KC: ${kc} • ID: ${scriptId}`;

// ================== ЕТАПИ ==================
const STAGE_TO_ELEMENT = {
  greeting: "textGreeting",
  needs: "textNeeds",
  presentation: "textPresentation",
  courses: "textCourses",
  cross: "textCross",
  survey: "textSurvey",
  closing: "textClosing",
  objections: "textObjections",
  products: "textProducts",
};

Object.keys(STAGE_TO_ELEMENT).forEach((stageKey) => {
  const elId = STAGE_TO_ELEMENT[stageKey];
  const html = scriptObj?.stages?.[stageKey] || "";
  setHTML(elId, html);
});

// ================== АКОРДЕОНИ ==================
fillAccordions("needsAccordions", scriptObj?.accordions?.needs || []);
fillAccordions("objectionsAccordions", scriptObj?.accordions?.objections || []);
toggleAccordionBlock("needsAccordions");
toggleAccordionBlock("objectionsAccordions");
// ✅ Спочатку ховаємо всі відповіді (до кліку)
hideAllBranchAnswers();


// ================== ЦІНИ ==================
renderPricing(scriptObj);

renderObjectionsButtons(scriptObj);

// ================== SCROLL ==================
initScrollSpy();

// ================== FUNCTIONS ==================
function setHTML(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function fillAccordions(wrapperId, items) {
  const wrap = document.getElementById(wrapperId);
  if (!wrap) return;
  wrap.innerHTML = "";
  items.forEach((it) => wrap.appendChild(makeAccordion(it.q, it.a)));
}

function toggleAccordionBlock(wrapperId) {
  const wrap = document.getElementById(wrapperId);
  if (!wrap) return;
  const header = wrap.previousElementSibling;
  const hasItems = wrap.children.length > 0;
  wrap.style.display = hasItems ? "" : "none";
  if (header && header.tagName === "H3") header.style.display = hasItems ? "" : "none";
}

// ================== АКОРДЕОН (ЗАВЖДИ ВІДКРИТИЙ) ==================
function hideAllBranchAnswers() {
  document.querySelectorAll(".ynPanel").forEach(panel => {
    panel.style.display = "none";
  });
  document.querySelectorAll(".ynBtn").forEach(btn => {
    btn.classList.remove("active");
  });
}

function makeAccordion(question, answerHtml) {
  const details = document.createElement("details");
  details.className = "acc";
  details.open = true; // ❗ завжди відкрито

  const summary = document.createElement("summary");
  summary.textContent = question || "";

  const body = document.createElement("div");
  body.className = "accBody";
  body.innerHTML = answerHtml || "";

  details.appendChild(summary);
  details.appendChild(body);
  return details;
}

// ================== YES / NO КНОПКИ ==================
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".ynBtn");
  if (!btn) return;

  const wrap = btn.closest(".accBody");
  if (!wrap) return;

  const mode = btn.getAttribute("data-show");

  // 1) активна кнопка
  wrap.querySelectorAll(".ynBtn").forEach(b => {
    b.classList.toggle("active", b === btn);
  });

  // 2) показуємо тільки одну відповідь, решту ховаємо
  wrap.querySelectorAll(".ynPanel").forEach(panel => {
    panel.style.display = (panel.getAttribute("data-panel") === mode) ? "block" : "none";
  });
});


// ================== ЦІНИ (4 КНОПКИ) ==================
function renderPricing(scriptObj){
  const host = document.getElementById("pricingBlock");
  if (!host) return;

  const pricing = scriptObj?.pricing;
  if (!Array.isArray(pricing) || pricing.length === 0){
    host.innerHTML = `<p class="muted">Нет данных по ценам.</p>`;
    return;
  }

  const tabs = document.createElement("div");
  tabs.className = "priceTabs";

  const panel = document.createElement("div");
  panel.className = "pricePanel";

  host.innerHTML = "";
  host.appendChild(tabs);
  host.appendChild(panel);

  function activate(idx){
    const item = pricing[idx];
    [...tabs.children].forEach((b, i) =>
      b.classList.toggle("active", i === idx)
    );
    panel.innerHTML = item?.html || "";
    panel.style.display = "block";
  }

  pricing.forEach((item, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "priceBtn";
    btn.textContent = item.label || `Вариант #${idx+1}`;
    btn.addEventListener("click", () => activate(idx));
    tabs.appendChild(btn);
  });
}
/* =========================
   КНОПКИ ЗАПЕРЕЧЕНЬ (довгі)
   ========================= */
/* =========================
   КНОПКИ ЗАПЕРЕЧЕНЬ
   (кожна кнопка має свій текст під нею)
   ========================= */
function renderObjectionsButtons(scriptObj) {
  const host = document.getElementById("objectionsButtons");
  if (!host) return;

  const items = scriptObj?.objectionsButtons;
  if (!Array.isArray(items) || items.length === 0) {
    host.innerHTML = `<p class="muted">Нет возражений для этого скрипта.</p>`;
    return;
  }

  host.innerHTML = "";

  items.forEach((item, index) => {
    // кнопка
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "objBtn";
    btn.textContent = item.label || `Возражение #${index + 1}`;

    // прихований текст
    const panel = document.createElement("div");
    panel.className = "objPanel";
    panel.innerHTML = item.html || "";
    panel.style.display = "none";

    btn.addEventListener("click", () => {
      // закриваємо всі інші
      host.querySelectorAll(".objPanel").forEach(p => {
        if (p !== panel) p.style.display = "none";
      });
      host.querySelectorAll(".objBtn").forEach(b => {
        if (b !== btn) b.classList.remove("active");
      });

      // відкриваємо / закриваємо поточний
      const isOpen = panel.style.display === "block";
      panel.style.display = isOpen ? "none" : "block";
      btn.classList.toggle("active", !isOpen);
    });

    host.appendChild(btn);
    host.appendChild(panel);
  });
}




// ================== SCROLL SPY ==================
function initScrollSpy() {
  const stageLinks = Array.from(document.querySelectorAll(".stageLink"));
  const sections = Array.from(document.querySelectorAll(".stageSection"));

  stageLinks.forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const id = a.getAttribute("href").replace("#", "");
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
}
