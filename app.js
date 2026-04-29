const PASSWORD = "1234";
const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const loginError = document.getElementById("loginError");

if (localStorage.getItem("isLoggedIn") === "true") {
  window.location.href = "kc.html";
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (passwordInput.value.trim() === PASSWORD) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "kc.html";
  } else {
    loginError.textContent = "Неверный пароль";
  }
});