function doGet(e) {
  const id = e.parameter.id || '123';

  return ContentService
    .createTextOutput(JSON.stringify({
      id: id,
      name: "ทดสอบ ระบบ",
      amount: 1500
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
