const problemText = document.querySelector("#problemText");

const problems = {
  lowOutreachText:
    "Start-ups struggle to find effective channels to showcase their products, while corporations face difficulty in discovering innovative solutions for their business needs.",
  DataInaccuracyText:
    "Outdated and unverificed data hampers the ability to find relevant solutions or accurately identify corporate needs, leading to unreliable searches.",
  ComplexEngagementText:
    "Corporates and startups often have prolonged engagement processes, as each party struggles to fully understand the other's need and expectations.",
  LackofManpowerText: "There are insufficient resources and manpower to maintain strong connections between start-ups and corporations.",
  PoorVisualizationText:
    "Poorly structured interfaces and lack of personalization makes it challenging for users to efficiently find critical information.",
};

document.querySelectorAll(".problemIcon").forEach((button) => {
  button.addEventListener("click", function () {
    const id = button.id + "Text";
    problemText.textContent = problems[id];
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const sections = document.querySelectorAll(".howitworks4_1");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("fade-out");
      } else {
        entry.target.classList.add("fade-out");
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((section) => {
  observer.observe(section);
});

var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function () {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

document.querySelectorAll(".parent").forEach((item) => {
  item.addEventListener("click", (event) => {
    const nested = item.querySelector(".nested");
    nested.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollElement = document.getElementById("scrollElement");

  const images = [...scrollElement.getElementsByTagName("img")];
  const cloneImages = images.map((img) => img.cloneNode(true));

  cloneImages.forEach((clone) => scrollElement.appendChild(clone));
});

//Only allow selection of 1 plan
function updateCheck(checkboxId) {
  var checkboxes = ["startup", "free", "business", "corporate"];

  checkboxes.forEach(function (item) {
    if (item !== checkboxId) {
      document.getElementById(item).checked = false;
    }
  });
}

function pay() {
  if (
    document.getElementById("startup").checked ||
    document.getElementById("free").checked ||
    document.getElementById("business").checked ||
    document.getElementById("corporate").checked
  ) {
    document.getElementById("pay").style.display = "block";
  } else {
    alert("Please select a membership option.");
  }
}

//show Password
function mouseoverPass() {
  let obj = document.getElementById("pwordInput");
  obj.type = "text";
}
function mouseoutPass() {
  let obj = document.getElementById("pwordInput");
  obj.type = "password";
}

//Pricing maintain leveling of bubbles
document.addEventListener("DOMContentLoaded", function () {
  const pricing2_3Elements = document.querySelectorAll(".pricing2_3");

  pricing2_3Elements.forEach((element) => {
    if (element.innerHTML.trim() === "") {
      element.style.visibility = "hidden";
    }
  });
});

//dropdown email
document.getElementById("email-domain").addEventListener("change", function () {
  var emailOtherInput = document.getElementById("email-other");
  if (this.value === "other") {
    emailOtherInput.style.display = "inline";
    emailOtherInput.setAttribute("required", "required");
  } else {
    emailOtherInput.style.display = "none";
    emailOtherInput.removeAttribute("required");
  }
});

//dropdown email
function setupEmailChangeHandler(domainId, otherId) {
  document.getElementById(domainId).addEventListener("change", function () {
    var emailOtherInput = document.getElementById(otherId);
    if (this.value === "other") {
      emailOtherInput.style.display = "inline";
      emailOtherInput.setAttribute("required", "required");
    } else {
      emailOtherInput.style.display = "none";
      emailOtherInput.removeAttribute("required");
    }
  });
}

// Call the function for each pair of elements
setupEmailChangeHandler("email-domain1", "email-other1");
setupEmailChangeHandler("email-domain2", "email-other2");

//Change content for startup and corporate setting up account
function accountContent(type) {
  const startupContent = document.getElementById("startupContent");
  const corporateContent = document.getElementById("corporateContent");

  if (type === "startup") {
    startupContent.style.display = "block";
    corporateContent.style.display = "none";
  } else if (type === "corporate") {
    startupContent.style.display = "none";
    corporateContent.style.display = "block";
  }
}

//Change content for settings support page
function showContent(type) {
  const accountSetting = document.getElementById("accountSetting");
  const teamSetting = document.getElementById("teamSetting");
  const bookmarkSetting = document.getElementById("bookmarkSetting");
  const planSetting = document.getElementById("planSetting");

  if (type === "account") {
    accountSetting.style.display = "block";
    teamSetting.style.display = "none";
    bookmarkSetting.style.display = "none";
    planSetting.style.display = "none";
  } else if (type === "team") {
    accountSetting.style.display = "none";
    teamSetting.style.display = "block";
    bookmarkSetting.style.display = "none";
    planSetting.style.display = "none";
  } else if (type === "bookmark") {
    accountSetting.style.display = "none";
    teamSetting.style.display = "none";
    bookmarkSetting.style.display = "block";
    planSetting.style.display = "none";
  } else if (type === "plan") {
    accountSetting.style.display = "none";
    teamSetting.style.display = "none";
    bookmarkSetting.style.display = "none";
    planSetting.style.display = "block";
  }
}

//Change content for settings
function FeatureContent(type) {
  const Personalization = document.getElementById("Personalization");
  const TechnologyTagging = document.getElementById("TechnologyTagging");
  const DailyRecommendations = document.getElementById("DailyRecommendations");
  const Search = document.getElementById("Search");
  const MultiAccount = document.getElementById("MultiAccount");
  const CreateCompanyCard = document.getElementById("CreateCompanyCard");
  const LocationIdentifier = document.getElementById("LocationIdentifier");

  if (type === "personalization") {
    Personalization.style.display = "block";
    TechnologyTagging.style.display = "none";
    DailyRecommendations.style.display = "none";
    Search.style.display = "none";
    MultiAccount.style.display = "none";
    CreateCompanyCard.style.display = "none";
    LocationIdentifier.style.display = "none";
  } else if (type === "technologytagging") {
    Personalization.style.display = "none";
    TechnologyTagging.style.display = "block";
    DailyRecommendations.style.display = "none";
    Search.style.display = "none";
    MultiAccount.style.display = "none";
    CreateCompanyCard.style.display = "none";
    LocationIdentifier.style.display = "none";
  } else if (type === "dailyrecommendations") {
    Personalization.style.display = "none";
    TechnologyTagging.style.display = "none";
    DailyRecommendations.style.display = "block";
    Search.style.display = "none";
    MultiAccount.style.display = "none";
    CreateCompanyCard.style.display = "none";
    LocationIdentifier.style.display = "none";
  } else if (type === "search") {
    Personalization.style.display = "none";
    TechnologyTagging.style.display = "none";
    DailyRecommendations.style.display = "none";
    Search.style.display = "block";

    MultiAccount.style.display = "none";
    CreateCompanyCard.style.display = "none";
    LocationIdentifier.style.display = "none";
  } else if (type === "multiaccount") {
    Personalization.style.display = "none";
    TechnologyTagging.style.display = "none";
    DailyRecommendations.style.display = "none";
    Search.style.display = "none";
    MultiAccount.style.display = "block";
    CreateCompanyCard.style.display = "none";
    LocationIdentifier.style.display = "none";
  } else if (type === "createcompanycard") {
    Personalization.style.display = "none";
    TechnologyTagging.style.display = "none";
    DailyRecommendations.style.display = "none";
    Search.style.display = "none";
    MultiAccount.style.display = "none";
    CreateCompanyCard.style.display = "block";
    LocationIdentifier.style.display = "none";
  } else if (type === "locationidentifier") {
    Personalization.style.display = "none";
    TechnologyTagging.style.display = "none";
    DailyRecommendations.style.display = "none";
    Search.style.display = "none";
    MultiAccount.style.display = "none";
    CreateCompanyCard.style.display = "none";
    LocationIdentifier.style.display = "block";
  }
}

//Change content for Company Card content support page
function CompanyContentInfo(type) {
  const basicinfo = document.getElementById("basicinfo");
  const productinfo = document.getElementById("productinfo");
  const financeinfo = document.getElementById("financeinfo");
  const contactinfo = document.getElementById("contactinfo");

  if (type === "basic") {
    basicinfo.style.display = "block";
    productinfo.style.display = "none";
    financeinfo.style.display = "none";
    contactinfo.style.display = "none";
  } else if (type === "product") {
    basicinfo.style.display = "none";
    productinfo.style.display = "block";
    financeinfo.style.display = "none";
    contactinfo.style.display = "none";
  } else if (type === "finance") {
    basicinfo.style.display = "none";
    productinfo.style.display = "none";
    financeinfo.style.display = "block";
    contactinfo.style.display = "none";
  } else if (type === "contact") {
    basicinfo.style.display = "none";
    productinfo.style.display = "none";
    financeinfo.style.display = "none";
    contactinfo.style.display = "block";
  }
}

//Getting Started Support Page Dynamic Change
function GettingStartedContent(type) {
  const PlanAndPricing = document.getElementById("PlanAndPricing");
  const CreatingAnAccount = document.getElementById("CreatingAnAccount");
  const SettingUpAccount = document.getElementById("SettingUpAccount");

  if (type === "planandprice") {
    PlanAndPricing.style.display = "block";
    CreatingAnAccount.style.display = "none";
    SettingUpAccount.style.display = "none";
  } else if (type === "createaccount") {
    PlanAndPricing.style.display = "none";
    CreatingAnAccount.style.display = "block";
    SettingUpAccount.style.display = "none";
  } else if (type === "setupaccount") {
    PlanAndPricing.style.display = "none";
    CreatingAnAccount.style.display = "none";
    SettingUpAccount.style.display = "block";
  }
}

// FAQ Verify Account Page Dynamic Change
function verifyContent(type) {
  const CompanyDomainUser = document.getElementById("CompanyDomainUser");
  const GeneralUser = document.getElementById("GeneralUser");

  if (type === "companydomainuser") {
    CompanyDomainUser.style.display = "block";
    GeneralUser.style.display = "none";
  } else if (type === "generaluser") {
    CompanyDomainUser.style.display = "none";
    GeneralUser.style.display = "block";
  }
}

//account Setting
// function toggleSetting(setting) {
//   var targetElement = document.querySelector(".support_navbar_subtitle_" + setting);

//   if (targetElement) {
//     targetElement.style.color = targetElement.style.color === "blue" ? "" : "blue"; // Toggle text color to blue
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   function handleClick(setting) {
//     showContent(setting); // Call showContent with the setting
//     toggleSetting(setting); // Call toggleSetting with the setting
//   }

//   document.getElementById("account").addEventListener("click", function () {
//     handleClick("account");
//   });

//   document.getElementById("team").addEventListener("click", function () {
//     handleClick("team");
//   });

//   document.getElementById("bookmark").addEventListener("click", function () {
//     handleClick("bookmark");
//   });

//   document.getElementById("plan").addEventListener("click", function () {
//     handleClick("plan");
//   });
// });
