import data from "./language.js";

function updateContent(language) {
  document.getElementById("nav1").textContent = data[language].nav1;
  document.getElementById("nav2").textContent = data[language].nav2;
  document.getElementById("nav3").textContent = data[language].nav3;
  document.getElementById("nav4").textContent = data[language].nav4;
  document.getElementById("nav5").textContent = data[language].nav5;
  document.getElementById("nav6").textContent = data[language].nav6;
  document.getElementById("nav7").textContent = data[language].nav7;
  document.getElementById("pricing_1").textContent = data[language].pricing_1;
  document.getElementById("pricing_slogan").textContent = data[language].pricing_slogan;
  document.getElementById("pricing_free").textContent = data[language].pricing_free;
  document.getElementById("pricing_free_price").textContent = data[language].pricing_free_price;
  document.getElementById("pricing_free_tag").textContent = data[language].pricing_free_tag;
  document.getElementById("pricing_free_feature_1").textContent = data[language].pricing_free_feature_1;
  document.getElementById("pricing_free_feature_2").textContent = data[language].pricing_free_feature_2;
  document.getElementById("pricing_free_feature_3").textContent = data[language].pricing_free_feature_3;
  document.getElementById("pricing_business").textContent = data[language].pricing_business;
  document.getElementById("pricing_business_price").textContent = data[language].pricing_business_price;
  document.getElementById("pricing_business_tag_1").textContent = data[language].pricing_business_tag_1;
  document.getElementById("pricing_business_tag_2").textContent = data[language].pricing_business_tag_2;
  document.getElementById("pricing_business_feature_1").textContent = data[language].pricing_business_feature_1;
  document.getElementById("pricing_business_feature_2").textContent = data[language].pricing_business_feature_2;
  document.getElementById("pricing_business_feature_3").textContent = data[language].pricing_business_feature_3;
  document.getElementById("pricing_business_feature_4").textContent = data[language].pricing_business_feature_4;
  document.getElementById("pricing_enterprise").textContent = data[language].pricing_enterprise;
  document.getElementById("pricing_enterprise_price").textContent = data[language].pricing_enterprise_price;
  document.getElementById("pricing_enterprise_tag_1").textContent = data[language].pricing_enterprise_tag_1;
  document.getElementById("pricing_enterprise_tag_2").textContent = data[language].pricing_enterprise_tag_2;
  document.getElementById("pricing_enterprise_tag_3").textContent = data[language].pricing_enterprise_tag_3;
  document.getElementById("pricing_enterprise_feature_1").textContent = data[language].pricing_enterprise_feature_1;
  document.getElementById("pricing_enterprise_feature_2").textContent = data[language].pricing_enterprise_feature_2;
  document.getElementById("pricing_enterprise_feature_3").textContent = data[language].pricing_enterprise_feature_3;
  document.getElementById("pricing_enterprise_feature_4").textContent = data[language].pricing_enterprise_feature_4;
  document.getElementById("pricing_enterprise_feature_5").textContent = data[language].pricing_enterprise_feature_5;
  document.getElementById("pricing_enterprise_feature_6").textContent = data[language].pricing_enterprise_feature_6;
  document.getElementById("pricing_price_usd").textContent = data[language].pricing_price_usd;
}

document.getElementById("switchToEnglish").addEventListener("click", () => updateContent("en"));
document.getElementById("switchToKorean").addEventListener("click", () => updateContent("kr"));
