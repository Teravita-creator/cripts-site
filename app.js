// Код для роботи з Netlify Identity
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.open(); // Відкриває вікно входу, якщо користувач не залогінений
    } else {
      // Якщо користувач вже увійшов, перенаправляємо на сторінку зі скриптами
      if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
        window.location.href = "kc.html";
      }
    }
  });

  window.netlifyIdentity.on("login", user => {
    window.netlifyIdentity.close();
    window.location.href = "kc.html"; // Куди йдемо після успішного входу
  });

  window.netlifyIdentity.on("logout", () => {
    window.location.href = "index.html"; // Куди йдемо після виходу
  });
}