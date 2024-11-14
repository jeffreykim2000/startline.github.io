const addSectionBtn = document.getElementById("addSectionBtn");
const sectionsContainer = document.getElementById("sectionsContainer");
let roundNumber = 1;

addSectionBtn.addEventListener("click", function () {
  const originalSection = document.querySelector(".section");
  const newSection = originalSection.cloneNode(true);
  sectionsContainer.appendChild(newSection);

  roundNumber++;
  updateRoundNumbers();

  if (roundNumber > 1) {
    const deleteSectionBtn = document.createElement("img");
    deleteSectionBtn.src = "./icon/Trash.png";
    deleteSectionBtn.className = "DeleteRow";
    deleteSectionBtn.alt = "Delete Product";
    deleteSectionBtn.addEventListener("click", function () {
      newSection.remove();
      roundNumber--;
      updateRoundNumbers();
    });
    newSection.appendChild(deleteSectionBtn);
  }
});

function updateRoundNumbers() {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section, index) => {
    section.querySelector(".Financials_title").textContent = `Round ${index + 1}`;
  });
}
//add product

const productsContainer = document.getElementById("productsContainer");
const addProductBtn = document.getElementById("AddProductBtn");

addProductBtn.addEventListener("click", function () {
  const originalProduct = document.querySelector(".product");
  const newProduct = originalProduct.cloneNode(true);
  const newProductId = "product_" + (productsContainer.children.length + 1);
  newProduct.id = newProductId;

  // Update input ids to ensure uniqueness
  newProduct.querySelector('input[name="tag"]').id = `tag${productsContainer.children.length + 1}`;
  newProduct.querySelector('input[name="tag"]').placeholder = "Product Name";
  newProduct.querySelector('input[name="tag"]').value = "";

  newProduct.querySelector('input[name="tag"]').id = `tag${productsContainer.children.length + 1}`;
  newProduct.querySelector('input[name="tag"]').placeholder = "Describe the product";
  newProduct.querySelector('input[name="tag"]').value = "";

  if (productsContainer.children.length === 1) {
    const deleteButton = document.createElement("img");
    deleteButton.src = "./icon/Trash.png";
    deleteButton.className = "DeleteRow";
    deleteButton.alt = "Delete Product";
    deleteButton.addEventListener("click", function () {
      newProduct.remove();
    });
    newProduct.appendChild(deleteButton);
  }

  productsContainer.appendChild(newProduct);
});

function toggleBorder(checkbox) {
  var parentArticle = checkbox.closest(".flex_withBox");
  if (checkbox.checked) {
    parentArticle.classList.add("selected");
  } else {
    parentArticle.classList.remove("selected");
  }
}

//add member

let memberCount = 1;

function renumberMembers() {
  const memberTitles = document.querySelectorAll(".Member_title");
  memberTitles.forEach((title, index) => {
    title.textContent = `Member ${index + 1}`;
  });
}

document.getElementById("addTeamBtn").addEventListener("click", function () {
  memberCount++;
  const newTeamMember = document.createElement("div");
  newTeamMember.className = "TeamInfo";
  newTeamMember.innerHTML = `
                <br />
                <p class="Member_title">Member ${memberCount}</p>
                <article class="flex_left_space">
                <form>
                    <label for="name" class="profile_heading">Name</label>
                    <input type="text" id="name" name="name" placeholder="Bob Wang" class="filters2" />
                    <br />
                    <label for="department" class="profile_heading">Department</label>
                    <input type="text" id="department" name="department" placeholder="Business Development" class="filters2" />
                    <br />
                    <label for="employee" class="profile_heading">Role</label>
                    <input type="text" id="employee" name="employee" placeholder="Manager" class="filters2" />
                    <br />
                    <label for="website" class="profile_heading">Work Email</label>
                    <input type="url" id="website" name="website" placeholder="name@company.com" class="filters2" />
                    <br />
                    <label for="phone" class="profile_heading">Work Phone</label>
                    <input type="text" id="phone" name="phone" placeholder="xxxx-xxxx" class="filters2" />
                    <br />
                    <label for="Linkedin" class="profile_heading">LinkedIn URL</label>
                    <input type="url" id="Linkedin" name="Linkedin" placeholder="https://linkedin.com/company/acel-lab-limited" class="filters2" />
                    <br />
                </form>
                <img src="./icon/Trash.png" class="DeleteRow" alt="Delete Member" />
                </article>
            `;
  document.getElementById("TeamContainer").appendChild(newTeamMember);
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("DeleteRow")) {
    const memberInfo = e.target.closest(".TeamInfo");
    memberInfo.remove();
    memberCount--;
    renumberMembers();
  }
});

//adding tags
// Get the tags and input elements from the DOM
const tags = document.getElementById("tags");
const input = document.getElementById("input-tag");

// Add an event listener for keydown on the input element
input.addEventListener("keydown", function (event) {
  // Check if the key pressed is 'Enter'
  if (event.key === "Enter") {
    // Prevent the default action of the keypress
    // event (submitting the form)
    event.preventDefault();

    // Create a new list item element for the tag
    const tag = document.createElement("li");

    // Get the trimmed value of the input element
    const tagContent = input.value.trim();

    // If the trimmed value is not an empty string
    if (tagContent !== "") {
      // Set the text content of the tag to
      // the trimmed value
      tag.innerText = tagContent;

      // Add a delete button to the tag
      tag.innerHTML += '<button class="delete-button">X</button>';

      // Append the tag to the tags list
      tags.appendChild(tag);

      // Clear the input element's value
      input.value = "";
    }
  }
});

// Add an event listener for click on the tags list
tags.addEventListener("click", function (event) {
  // If the clicked element has the class 'delete-button'
  if (event.target.classList.contains("delete-button")) {
    // Remove the parent element (the tag)
    event.target.parentNode.remove();
  }
});

//scroll horizontally
document.addEventListener("DOMContentLoaded", function () {
  const gridContact = document.querySelector(".grid_contact");

  let isDown = false;
  let startX;
  let scrollLeft;

  gridContact.addEventListener("mousedown", function (e) {
    isDown = true;
    startX = e.pageX - gridContact.offsetLeft;
    scrollLeft = gridContact.scrollLeft;
  });

  gridContact.addEventListener("mouseleave", function () {
    isDown = false;
  });

  gridContact.addEventListener("mouseup", function () {
    isDown = false;
  });

  gridContact.addEventListener("mousemove", function (e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - gridContact.offsetLeft;
    const walk = x - startX;
    gridContact.scrollLeft = scrollLeft - walk;
  });
});

//Contacts pop-up
function myFunction() {
  var contact_card_viewmore = document.getElementById("myPopup");
  contact_card_viewmore.classList.toggle("show");
}
