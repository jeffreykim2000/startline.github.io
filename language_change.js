fetch("content.json")
  .then((response) => response.json())
  .then((data) => {
    function updateContent(language) {
      document.getElementById("welcome").textContent = data[language].welcome_message;
      document.getElementById("about").textContent = data[language].about;
      document.getElementById("contact").textContent = data[language].contact;
    }

    // Initially load English content
    updateContent("en");

    // Add event listeners to switch language
    document.getElementById("switchToEnglish").addEventListener("click", () => updateContent("en"));
    document.getElementById("switchToKorean").addEventListener("click", () => updateContent("ko"));
  });
