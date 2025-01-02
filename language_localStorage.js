//language change localStorage
const languageButtons = document.querySelectorAll("button[id^='switchTo']");

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    localStorage.setItem("selectedLanguageId", button.id);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const selectedLanguageId = localStorage.getItem("selectedLanguageId");
  if (selectedLanguageId) {
    const selectedButton = document.getElementById(selectedLanguageId);
    if (selectedButton) {
      selectedButton.click();
    }
  }
});
