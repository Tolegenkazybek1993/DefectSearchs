
function search() {
  const input = document.getElementById("input").value.trim();
  const output = document.getElementById("output");

  if (!input) {
    output.innerHTML = "<p style='color:red;'>Введите код МКБ</p>";
    return;
  }

  // Заглушка. Здесь можно встроить подсказку с бекенда или из JSON
  output.innerHTML = `<div class="result">🔎 Результаты по: <strong>${input}</strong><br>— (пример) Острое заболевание — ГОБМП</div>`;
}
