import data from "./language.js";

function updateContent(language) {
  document.getElementById("nav1").textContent = data[language].nav1;
  document.getElementById("nav2").textContent = data[language].nav2;
  document.getElementById("nav3").textContent = data[language].nav3;
  document.getElementById("nav4").textContent = data[language].nav4;
  document.getElementById("nav5").textContent = data[language].nav5;
  document.getElementById("nav6").textContent = data[language].nav6;
  document.getElementById("nav7").textContent = data[language].nav7;
  document.getElementById("index_title").textContent = data[language].index_title;
  document.getElementById("index_slogan").textContent = data[language].index_slogan;
  document.getElementById("index_context").textContent = data[language].index_context;
  document.getElementById("join_now").textContent = data[language].join_now;
  document.getElementById("weekly_startline").textContent = data[language].weekly_startline;
  document.getElementById("our_product").textContent = data[language].our_product;
  document.getElementById("product_slogan").textContent = data[language].product_slogan;
  document.getElementById("feature_title_1").textContent = data[language].feature_title_1;
  document.getElementById("feature_slogan_1").textContent = data[language].feature_slogan_1;
  document.getElementById("feature_content_1").textContent = data[language].feature_content_1;
  document.getElementById("learn_more_1").textContent = data[language].learn_more_1;
  document.getElementById("feature_title_2").textContent = data[language].feature_title_2;
  document.getElementById("feature_slogan_2").textContent = data[language].feature_slogan_2;
  document.getElementById("feature_content_2").textContent = data[language].feature_content_2;
  document.getElementById("learn_more_2").textContent = data[language].learn_more_2;
  document.getElementById("feature_title_3").textContent = data[language].feature_title_3;
  document.getElementById("feature_slogan_3").textContent = data[language].feature_slogan_3;
  document.getElementById("feature_content_3").textContent = data[language].feature_content_3;
  document.getElementById("learn_more_3").textContent = data[language].learn_more_3;
  document.getElementById("simeff").textContent = data[language].simeff;
  document.getElementById("simeff_title").textContent = data[language].simeff_title;
  document.getElementById("simeff_content").textContent = data[language].simeff_content;
  document.getElementById("simeff_demo").textContent = data[language].simeff_demo;
  document.getElementById("partners_clients").textContent = data[language].partners_clients;
  document.getElementById("whatwedo").textContent = data[language].whatwedo;
  document.getElementById("whatwedo_slogan").textContent = data[language].whatwedo_slogan;
  document.getElementById("whatwedo_content").textContent = data[language].whatwedo_content;
  document.getElementById("get_started").textContent = data[language].get_started;
  document.getElementById("questions").textContent = data[language].questions;
  document.getElementById("questions_slogan").textContent = data[language].questions_slogan;
  document.getElementById("questions_content").textContent = data[language].questions_content;
  document.getElementById("questions_contact").textContent = data[language].questions_contact;
}

document.getElementById("switchToEnglish").addEventListener("click", () => updateContent("en"));
document.getElementById("switchToKorean").addEventListener("click", () => updateContent("kr"));
document.getElementById("switchToChinese").addEventListener("click", () => updateContent("cn"));
document.getElementById("switchToJapanese").addEventListener("click", () => updateContent("jp"));
