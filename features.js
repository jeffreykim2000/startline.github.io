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
