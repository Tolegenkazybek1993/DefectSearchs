function onOpen() {
  const ui = SpreadsheetApp.getUi();
  const user = Session.getActiveUser().getEmail();
  const allowed = JSON.parse(PropertiesService.getScriptProperties().getProperty("allowedEmails") || "[]");

  if (!allowed.includes(user.toLowerCase())) {
    ui.alert("⛔ У вас нет доступа к загрузке файлов. Подсказка МКБ доступна через меню.");
  }

  ui.createMenu("✅ Проверка")
    .addItem("📁 Загрузить Excel", "открытьUI")
    .addItem("▶ Выполнить проверку", "ручнаяПроверка")
    .addItem("🔄 Обновить доступ из таблицы", "обновитьСписокИзТаблицы")
    .addToUi();

  ui.createMenu("📘 Подсказка МКБ")
    .addItem("🔍 Открыть подсказку", "открытьПодсказкуМКБ")
    .addToUi();
} ...