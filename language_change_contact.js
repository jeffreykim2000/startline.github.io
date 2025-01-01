import data from "./language.js";

function updateContent(language) {
  const inputText = {
    en: ["Frist Name", "Last Name", "Company Name", "Phone Number", "Email", "Message"],
    kr: ["성함", "성", "회사명", "전화번호", "이메일", "내용"],
    cn: ["名字", "姓氏", "公司名称", "电话", "电子邮件", "信息"],
    jp: ["名前", "姓", "会社名", "電話", "メール", "メッセージ"],
  };

  const submitText = {
    en: ["Submit"],
    kr: ["문의하기"],
    cn: ["提交"],
    jp: ["Submit"],
  };
  document.getElementById("nav1").textContent = data[language].nav1;
  document.getElementById("nav2").textContent = data[language].nav2;
  document.getElementById("nav3").textContent = data[language].nav3;
  document.getElementById("nav4").textContent = data[language].nav4;
  document.getElementById("nav5").textContent = data[language].nav5;
  document.getElementById("nav6").textContent = data[language].nav6;
  document.getElementById("nav7").textContent = data[language].nav7;
  document.getElementById("contact").textContent = data[language].contact;
  document.getElementById("contact_question_1").textContent = data[language].contact_question_1;
  document.getElementById("contact_question_2").textContent = data[language].contact_question_2;
  document.getElementById("contact_question_3").textContent = data[language].contact_question_3;
  document.getElementById("contact_question_4").textContent = data[language].contact_question_4;
  document.getElementById("contact_question_5").textContent = data[language].contact_question_5;
  document.getElementById("contact_question_6").textContent = data[language].contact_question_6;
  document.getElementById("contact_fname").placeholder = inputText[language][0];
  document.getElementById("contact_lname").placeholder = inputText[language][1];
  document.getElementById("contact_company_name").placeholder = inputText[language][2];
  document.getElementById("contact_phone").placeholder = inputText[language][3];
  document.getElementById("contact_email").placeholder = inputText[language][4];
  document.getElementById("contact_message").placeholder = inputText[language][5];
  document.getElementById("contact_submit").value = submitText[language][0];
  document.getElementById("price_ready_to_start").textContent = data[language].price_ready_to_start;
  document.getElementById("price_kickstart_innovation").textContent = data[language].price_kickstart_innovation;
  document.getElementById("price_try_startline_now").textContent = data[language].price_try_startline_now;
}

document.getElementById("switchToEnglish").addEventListener("click", () => updateContent("en"));
document.getElementById("switchToKorean").addEventListener("click", () => updateContent("kr"));
document.getElementById("switchToChinese").addEventListener("click", () => updateContent("cn"));
document.getElementById("switchToJapanese").addEventListener("click", () => updateContent("jp"));
