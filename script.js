// Захист
if (localStorage.getItem("isLoggedIn") !== "true") window.location.href = "index.html";

const kc = localStorage.getItem("selectedKC");
if (!kc) window.location.href = "kc.html";

const scriptId = localStorage.getItem("selectedScriptId");
if (!scriptId) window.location.href = "scripts.html";

document.getElementById("backBtn").addEventListener("click", () => {
  window.location.href = "scripts.html";
});

// Дістаємо дані
const scriptObj = SCRIPTS_DATA?.[kc]?.[scriptId] || null;

// Заголовок
const title =
  scriptObj?.title ||
  localStorage.getItem("selectedScriptTitle") ||
  t("script.pageTitle");

document.getElementById("scriptTitle").textContent = title;
document.getElementById("scriptMeta").textContent = `KC: ${kc} • ID: ${scriptId}`;

// 7 етапів — завжди показуємо (навіть якщо порожньо)
setHTML("textGreeting", scriptObj?.stages?.greeting || "");
setHTML("textNeeds", scriptObj?.stages?.needs || "");
setHTML("textPresentation", scriptObj?.stages?.presentation || "");
setHTML("textCourses", scriptObj?.stages?.courses || "");
setHTML("textClosing", scriptObj?.stages?.closing || "");
setHTML("textObjections", scriptObj?.stages?.objections || "");
setHTML("textProducts", scriptObj?.stages?.products || "");

// Accordion-и (опціонально)
fillAccordions("needsAccordions", scriptObj?.accordions?.needs || []);
fillAccordions("objectionsAccordions", scriptObj?.accordions?.objections || []);

// Якщо акордеонів нема — ховаємо заголовок і блок (але сам етап лишається!)
toggleAccordionBlock("needsAccordions");
toggleAccordionBlock("objectionsAccordions");

// Scroll spy + плавний скрол
initScrollSpy();

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
  const header = wrap.previousElementSibling; // h3 перед блоком
  const hasItems = wrap.children.length > 0;

  wrap.style.display = hasItems ? "" : "none";
  if (header && header.tagName === "H3") header.style.display = hasItems ? "" : "none";
}

function makeAccordion(question, answer) {
  const details = document.createElement("details");
  details.className = "acc";

  const summary = document.createElement("summary");
  summary.textContent = question || "";

  const body = document.createElement("div");
  body.className = "accBody";
  body.textContent = answer || "";

  details.appendChild(summary);
  details.appendChild(body);
  return details;
}

function initScrollSpy() {
  const stageLinks = Array.from(document.querySelectorAll(".stageLink"));
  const sections = Array.from(document.querySelectorAll(".stageSection"));

  stageLinks.forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const id = a.getAttribute("href").replace("#", "");
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      const stage = visible.target.getAttribute("data-stage");
      stageLinks.forEach((a) => {
        a.classList.toggle("active", a.getAttribute("data-stage") === stage);
      });
    },
    { root: null, threshold: [0.2, 0.35, 0.5, 0.65] }
  );

  sections.forEach((sec) => observer.observe(sec));

  // одразу активуємо перший
  const firstStage = sections[0]?.getAttribute("data-stage");
  if (firstStage) {
    stageLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("data-stage") === firstStage));
  }
}
