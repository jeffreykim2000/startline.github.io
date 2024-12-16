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
function showContent(type) {
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

//Change content for settings
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
