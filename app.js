const PASSWORD = "1234";

const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const loginError = document.getElementById("loginError");

// Якщо вже логінились — одразу на вибір КЦ
if (localStorage.getItem("isLoggedIn") === "true") {
  window.location.href = "kc.html";
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const entered = passwordInput.value.trim();

  if (entered === PASSWORD) {
    loginError.textContent = "";
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "kc.html";
    return;
  }

  // перекладена помилка
  loginError.textContent = t("login.error");
});