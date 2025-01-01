import data from "./language.js";

function updateContent(language) {
  document.getElementById("nav1").textContent = data[language].nav1;
  document.getElementById("nav2").textContent = data[language].nav2;
  document.getElementById("nav3").textContent = data[language].nav3;
  document.getElementById("nav4").textContent = data[language].nav4;
  document.getElementById("nav5").textContent = data[language].nav5;
  document.getElementById("nav6").textContent = data[language].nav6;
  document.getElementById("nav7").textContent = data[language].nav7;
  document.getElementById("join1_title").textContent = data[language].join1_title;
  document.getElementById("join1_select").textContent = data[language].join1_select;
  document.getElementById("join1_faq_1").textContent = data[language].join1_faq_1;
  document.getElementById("join1_faq_ans_1").textContent = data[language].join1_faq_ans_1;
  document.getElementById("join1_faq_2").textContent = data[language].join1_faq_2;
  document.getElementById("join1_faq_ans_2").textContent = data[language].join1_faq_ans_2;
  document.getElementById("join1_startup").textContent = data[language].join1_startup;
  document.getElementById("join1_startup_content").textContent = data[language].join1_startup_content;
  document.getElementById("join1_corporate_free_title").textContent = data[language].join1_corporate_free_title;
  document.getElementById("join1_corporate_free_price").textContent = data[language].join1_corporate_free_price;
  document.getElementById("join1_corporate_free_content").textContent = data[language].join1_corporate_free_content;
  document.getElementById("join1_corporate_business_title").textContent = data[language].join1_corporate_business_title;
  document.getElementById("join1_corporate_business_price").textContent = data[language].join1_corporate_business_price;
  document.getElementById("join1_corporate_business_content").textContent = data[language].join1_corporate_business_content;
  document.getElementById("join1_corporate_enterprise_title").textContent = data[language].join1_corporate_enterprise_title;
  document.getElementById("join1_corporate_enterprise_price").textContent = data[language].join1_corporate_enterprise_price;
  document.getElementById("join1_corporate_enterprise_content").textContent = data[language].join1_corporate_enterprise_content;
  document.getElementById("join1_pay").textContent = data[language].join1_pay;
}

document.getElementById("switchToEnglish").addEventListener("click", () => updateContent("en"));
document.getElementById("switchToKorean").addEventListener("click", () => updateContent("kr"));
document.getElementById("switchToChinese").addEventListener("click", () => updateContent("cn"));
document.getElementById("switchToJapanese").addEventListener("click", () => updateContent("jp"));
