import data from "./language.js";

function updateContent(language) {
  const inputText = {
    en: ["This is how you'll appear to others", "At least 12 characters", "First Name", "Last Name", "Input your work email"],
    kr: ["아이디", "12자 이상 입력해 주십십시오", "이름", "성", "회사 이메일을 입력해 주십시오"],
    cn: ["输入您的用户名", "至少12个字符", "名字", "姓氏", "工作邮箱"],
    jp: ["ユーザー名を入力してください", "12文字以", "名前", "姓", "仕事用メール"],
  };

  document.getElementById("nav1").textContent = data[language].nav1;
  document.getElementById("nav2").textContent = data[language].nav2;
  document.getElementById("nav3").textContent = data[language].nav3;
  document.getElementById("nav4").textContent = data[language].nav4;
  document.getElementById("nav5").textContent = data[language].nav5;
  document.getElementById("nav6").textContent = data[language].nav6;
  document.getElementById("nav7").textContent = data[language].nav7;
  document.getElementById("join_title").textContent = data[language].join_title;
  document.getElementById("join_slogan").textContent = data[language].join_slogan;
  document.getElementById("join_username").textContent = data[language].join_username;
  document.getElementById("join__input_username").placeholder = inputText[language][0];
  document.getElementById("join_pwd").textContent = data[language].join_pwd;
  document.getElementById("join_input_pwd").placeholder = inputText[language][1];
  document.getElementById("join_name").textContent = data[language].join_name;
  document.getElementById("join_input_first_name").placeholder = inputText[language][2];
  document.getElementById("join_input_last_name").placeholder = inputText[language][3];
  document.getElementById("join_work_email").textContent = data[language].join_work_email;
  document.getElementById("join_work_email").placeholder = inputText[language][4];
  document.getElementById("join_input_work_email").placeholder = inputText[language][4];

  document.getElementById("join_remember").textContent = data[language].join_remember;
  document.getElementById("join_forgot_pwd").textContent = data[language].join_forgot_pwd;
  document.getElementById("join_tc_pp_content").textContent = data[language].join_tc_pp_content;
  document.getElementById("join_sign_up").textContent = data[language].join_sign_up;
  document.getElementById("join_sign_in").textContent = data[language].join_sign_in;
}

document.getElementById("switchToEnglish").addEventListener("click", () => updateContent("en"));
document.getElementById("switchToKorean").addEventListener("click", () => updateContent("kr"));
document.getElementById("switchToChinese").addEventListener("click", () => updateContent("cn"));
document.getElementById("switchToJapanese").addEventListener("click", () => updateContent("jp"));
