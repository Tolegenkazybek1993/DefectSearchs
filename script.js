
function showTab(tabId) {
  document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".tabs li").forEach(el => el.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");
  document.querySelector(`.tabs li[onclick="showTab('${tabId}')"]`).classList.add("active");
}

function startCheck() {
  const fileInput = document.getElementById("fileInput");
  if (!fileInput.files.length) {
    alert("Выберите файл для проверки!");
    return;
  }
  document.getElementById("status").textContent = "🔄 Обработка...";
  setTimeout(() => {
    document.getElementById("status").textContent = "";
    document.querySelector(".download").classList.remove("hidden");
  }, 2000); // Имитация обработки
}
