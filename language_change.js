fetch("content.json")
  .then((response) => response.json())
  .then((data) => {
    function updateContent(language) {
      document.getElementById("nav1").textContent = data[language].nav1;
      document.getElementById("nav2").textContent = data[language].nav2;
      document.getElementById("nav3").textContent = data[language].nav3;
    }

    // Initially load English content
    updateContent("en");

    // Add event listeners to switch language
    document.getElementById("switchToEnglish").addEventListener("click", () => updateContent("en"));
    document.getElementById("switchToKorean").addEventListener("click", () => updateContent("kr"));
  });
