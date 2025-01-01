import data from "./language.js";

function updateContent(language) {
  const inputText = {
    en: ["At least 12 characters"],
    kr: ["12자 이상 입력 해주세요"],
    cn: ["至少12个字符"],
    jp: ["12文字以上"],
  };

  document.getElementById("nav1").textContent = data[language].nav1;
  document.getElementById("nav2").textContent = data[language].nav2;
  document.getElementById("nav3").textContent = data[language].nav3;
  document.getElementById("nav4").textContent = data[language].nav4;
  document.getElementById("nav5").textContent = data[language].nav5;
  document.getElementById("nav6").textContent = data[language].nav6;
  document.getElementById("nav7").textContent = data[language].nav7;
  document.getElementById("login_startup").textContent = data[language].login_startup;
  document.getElementById("login_corporate").textContent = data[language].login_corporate;
  document.getElementById("login_welcome_back").textContent = data[language].login_welcome_back;
  document.getElementById("login_corporate_slogan").textContent = data[language].login_corporate_slogan;
  document.getElementById("login_work_email").textContent = data[language].login_work_email;
  document.getElementById("login_password").textContent = data[language].login_password;
  document.getElementById("pwordInput").placeholder = inputText[language][0];
  document.getElementById("login_remember").textContent = data[language].login_remember;
  document.getElementById("login_forgot_pwd").textContent = data[language].login_forgot_pwd;
  document.getElementById("login_sign_in").textContent = data[language].login_sign_in;
  document.getElementById("login_sign_up").textContent = data[language].login_sign_up;
}

document.getElementById("switchToEnglish").addEventListener("click", () => updateContent("en"));
document.getElementById("switchToKorean").addEventListener("click", () => updateContent("kr"));
document.getElementById("switchToChinese").addEventListener("click", () => updateContent("cn"));
document.getElementById("switchToJapanese").addEventListener("click", () => updateContent("jp"));
