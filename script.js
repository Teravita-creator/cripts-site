// ================== ЗАХИСТ ==================
(function () {
  if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "index.html";
    return;
  }

  const kc = localStorage.getItem("selectedKC");
  if (!kc) {
    window.location.href = "kc.html";
    return;
  }

  const scriptId = localStorage.getItem("selectedScriptId");
  if (!scriptId) {
    window.location.href = "scripts.html";
    return;
  }

  // ================== DOM READY ==================
  document.addEventListener("DOMContentLoaded", () => {
    // назад
    document.getElementById("backBtn")?.addEventListener("click", () => {
      window.location.href = "scripts.html";
    });

    // рендер з ретраями (на випадок якщо дані ще не встигли зареєструватись)
    renderWithRetry(kc, scriptId);

    // ✅ Перерендер динамічних блоків після зміни мови
    document.addEventListener("lang:changed", () => {
      const obj = window.SCRIPTS_DATA?.[kc]?.[scriptId] || null;
      if (!obj) return;
      renderDynamic(obj);
    });

    // yes/no кнопки в акордеонах
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".ynBtn");
      if (!btn) return;

      const wrap = btn.closest(".accBody");
      if (!wrap) return;

      const mode = btn.getAttribute("data-show");

      wrap.querySelectorAll(".ynBtn").forEach((b) => {
        b.classList.toggle("active", b === btn);
      });

      wrap.querySelectorAll(".ynPanel").forEach((panel) => {
        panel.style.display =
          panel.getAttribute("data-panel") === mode ? "block" : "none";
      });
    });

    initScrollSpy();
  });

  // ================== MAIN RENDER ==================
  function renderWithRetry(kc, scriptId) {
    const MAX = 25; // ~2.5s
    let i = 0;

    const tick = () => {
      const scriptObj = window.SCRIPTS_DATA?.[kc]?.[scriptId] || null;

      if (scriptObj) {
        renderAll(kc, scriptId, scriptObj);
        return;
      }

      i++;
      if (i >= MAX) {
        // показуємо зрозуміле повідомлення, якщо даних немає
        setHTML("textGreeting", `<p class="muted">Нет данных для скрипта: ${kc} / ${scriptId}</p>`);
        return;
      }

      setTimeout(tick, 100);
    };

    tick();
  }

  function renderAll(kc, scriptId, scriptObj) {
    // title/meta
    const title =
      scriptObj?.title ||
      localStorage.getItem("selectedScriptTitle") ||
      "Скрипт";

    const titleEl = document.getElementById("scriptTitle");
    if (titleEl) titleEl.textContent = title;

    const metaEl = document.getElementById("scriptMeta");
    if (metaEl) metaEl.textContent = `KC: ${kc} • ID: ${scriptId}`;

    // stages
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

    // accordions
    fillAccordions("needsAccordions", scriptObj?.accordions?.needs || []);
    fillAccordions("objectionsAccordions", scriptObj?.accordions?.objections || []);
    toggleAccordionBlock("needsAccordions");
    toggleAccordionBlock("objectionsAccordions");
    hideAllBranchAnswers();

    // dynamic blocks
    renderDynamic(scriptObj);
  }

  function renderDynamic(scriptObj) {
  renderPricing(scriptObj);
  renderCrossSellProducts(scriptObj);
  renderProducts(scriptObj);
  renderObjectionsButtons(scriptObj);
}


  // ================== HELPERS ==================
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

  function hideAllBranchAnswers() {
    document.querySelectorAll(".ynPanel").forEach((panel) => {
      panel.style.display = "none";
    });
    document.querySelectorAll(".ynBtn").forEach((btn) => {
      btn.classList.remove("active");
    });
  }

  function makeAccordion(question, answerHtml) {
    const details = document.createElement("details");
    details.className = "acc";
    details.open = true;

    const summary = document.createElement("summary");
    summary.innerHTML = question || "";

    summary.addEventListener("click", (e) => {
      e.preventDefault();
      details.open = true;
    });

    const body = document.createElement("div");
    body.className = "accBody";
    body.innerHTML = answerHtml || "";

    details.appendChild(summary);
    details.appendChild(body);
    return details;
  }

  // ================== PRICING ==================
  function renderPricing(scriptObj) {
    const host = document.getElementById("pricingBlock");
    if (!host) return;

    const pricing = scriptObj?.pricing;
    if (!Array.isArray(pricing) || pricing.length === 0) {
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

    function activate(idx) {
      const item = pricing[idx];
      [...tabs.children].forEach((b, i) => b.classList.toggle("active", i === idx));
      panel.innerHTML = item?.html || "";
      panel.style.display = "block";
    }

    pricing.forEach((item, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "priceBtn";
      btn.textContent = item.label || `Вариант #${idx + 1}`;
      btn.addEventListener("click", () => activate(idx));
      tabs.appendChild(btn);
    });
  }




  // ================== CROSS-SELL ==================
  function renderCrossSellProducts(scriptObj) {
    const host = document.getElementById("crossSellBlock");
    if (!host) return;

    const items = scriptObj?.crossSellProducts;
    if (!Array.isArray(items) || items.length === 0) {
      host.innerHTML = `<p class="muted">Нет продуктов для кросса.</p>`;
      return;
    }

    host.innerHTML = "";

    const tabs = document.createElement("div");
    tabs.className = "crossTabs";

    const panel = document.createElement("div");
    panel.className = "crossPanel";
    panel.style.display = "none";

    host.appendChild(tabs);
    host.appendChild(panel);

    function activate(idx) {
      const item = items[idx];
      [...tabs.children].forEach((b, i) => b.classList.toggle("active", i === idx));
      panel.innerHTML = item?.html || "";
      panel.style.display = "block";
    }

    items.forEach((item, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "crossBtn";
      btn.textContent = item?.label || `Продукт #${idx + 1}`;
      btn.addEventListener("click", () => activate(idx));
      tabs.appendChild(btn);
    });
  }

  // ================== OBJECTIONS BUTTONS ==================
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
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "objBtn";
      btn.textContent = item.label || `Возражение #${index + 1}`;

      const panel = document.createElement("div");
      panel.className = "objPanel";
      panel.innerHTML = item.html || "";
      panel.style.display = "none";

      btn.addEventListener("click", () => {
        host.querySelectorAll(".objPanel").forEach((p) => {
          if (p !== panel) p.style.display = "none";
        });
        host.querySelectorAll(".objBtn").forEach((b) => {
          if (b !== btn) b.classList.remove("active");
        });

        const isOpen = panel.style.display === "block";
        panel.style.display = isOpen ? "none" : "block";
        btn.classList.toggle("active", !isOpen);
      });

      host.appendChild(btn);
      host.appendChild(panel);
    });
  }

  // ================== PRODUCTS ==================
  function renderProducts(scriptObj) {
  const host = document.getElementById("productsList");
  if (!host) return;

  const items = scriptObj?.products;
  if (!Array.isArray(items) || items.length === 0) {
    host.innerHTML = `<p class="muted">Нет данных по препаратам.</p>`;
    return;
  }

  host.innerHTML = "";

  // 🔘 кнопки
  const tabs = document.createElement("div");
  tabs.className = "crossTabs";

  // 📦 панель з препаратом
  const panel = document.createElement("div");
  panel.className = "crossPanel";
  panel.style.display = "none";

  host.appendChild(tabs);
  host.appendChild(panel);

  function activate(idx) {
    const p = items[idx];

    [...tabs.children].forEach((b, i) =>
      b.classList.toggle("active", i === idx)
    );

    panel.innerHTML = buildProductCard(p);
    panel.style.display = "block";
  }

  items.forEach((p, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "crossBtn";
    btn.textContent = p.name || `Препарат #${idx + 1}`;
    btn.addEventListener("click", () => activate(idx));
    tabs.appendChild(btn);
  });
}


  function safeT(key, fallback) {
    try {
      if (typeof t === "function") return t(key);
    } catch (_) {}
    return fallback;
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function escapeAttr(str) {
    return escapeHtml(str).replaceAll("`", "&#096;");
  }
function buildProductCard(p) {
  if (!p) return "";

  const imgHtml = p.image
    ? `<img class="prodImg" src="${p.image}" alt="${p.name || "Product"}">`
    : "";

  const ingredientsRows = Array.isArray(p.ingredients)
    ? p.ingredients
        .map(
          (ing) => `
          <tr>
            <td>${ing.name || ""}</td>
            <td>${ing.effect || ""}</td>
          </tr>`
        )
        .join("")
    : "";

  const tableHtml = ingredientsRows
    ? `
      <table class="prodTable">
        <thead>
          <tr>
            <th>Состав</th>
            <th>Эффект</th>
          </tr>
        </thead>
        <tbody>${ingredientsRows}</tbody>
      </table>
    `
    : `<p class="muted">Нет состава</p>`;

  return `
    <div class="prodCard">
      <div class="prodHeader">
        ${imgHtml}
        <div>
          <div class="prodTitle">${p.name || "Препарат"}</div>
          <div class="prodMeta">
            ${p.origin ? `<div><b>Страна:</b> ${p.origin}</div>` : ""}
            ${p.format ? `<div><b>Формат:</b> ${p.format}</div>` : ""}
            ${p.usage ? `<div><b>Применение:</b> ${p.usage}</div>` : ""}
          </div>
        </div>
      </div>

      ${p.description ? `<div class="prodDesc">${p.description}</div>` : ""}

      <div class="prodBlockTitle"><b>Состав</b></div>
      ${tableHtml}
    </div>
  `;
}


  // ================== SCROLL ==================
  function initScrollSpy() {
    const stageLinks = Array.from(document.querySelectorAll(".stageLink"));

    stageLinks.forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const id = a.getAttribute("href").replace("#", "");
        const target = document.getElementById(id);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      });
    });
  }
})();
