// theme.js
(function () {
  const KEY = "theme"; // "light" | "dark"

  function getTheme() {
    return localStorage.getItem(KEY) || "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  function setTheme(theme) {
    localStorage.setItem(KEY, theme);
    applyTheme(theme);
    updateThemeButtons();
  }

  function toggleTheme() {
    const next = getTheme() === "dark" ? "light" : "dark";
    setTheme(next);
  }

  function updateThemeButtons() {
    const theme = getTheme();
    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      btn.textContent = theme === "dark" ? "☀️" : "🌙";
      btn.title = theme === "dark" ? "Light" : "Dark";
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyTheme(getTheme());
    updateThemeButtons();

    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-theme-toggle]");
      if (!btn) return;
      toggleTheme();
    });
  });
})();