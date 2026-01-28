if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "index.html";
}

document.getElementById("backBtn").addEventListener("click", () => {
  window.location.href = "index.html";
});

document.querySelectorAll(".tile").forEach((btn) => {
  btn.addEventListener("click", () => {
    localStorage.setItem("selectedKC", btn.dataset.kc);

    // переходимо на список скриптів
    window.location.href = "scripts.html";
  });
});
