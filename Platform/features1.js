let roundCount = 1;

function renumberRounds() {
  const roundTitles = document.querySelectorAll(".Financials_title");
  roundTitles.forEach((title, index) => {
    title.textContent = `Round ${index + 1}`;
  });
}

document.getElementById("addSectionBtn").addEventListener("click", function () {
  roundCount++;
  const newFinanceRound = document.createElement("div");
  newFinanceRound.className = "FinanceRound";
  newFinanceRound.innerHTML = `
    <br />
    <p class="Financials_title">Round ${roundCount}</p>
    <article class="flex_left_space">
      <form>
        <label for="announcedDate" class="profile_heading">Announced Date</label>
        <input type="date" id="announcedDate" name="announcedDate" placeholder="YYYY-MM-DD" class="filters2" />
        <br />
        <label for="roundInfo" class="profile_heading">Round Info</label>
        <input type="text" id="roundInfo" name="roundInfo" placeholder="Seed Round, Series A, etc." class="filters2" />
        <br />
        <label for="amountRaised" class="profile_heading">Amount Raised</label>
        <input type="number" id="amountRaised" name="amountRaised" placeholder="Amount raised in USD" class="filters2" />
        <br />
        <label for="leadInvestors" class="profile_heading">Lead Investors</label>
        <input type="text" id="leadInvestors" name="leadInvestors" placeholder="Lead investors' names" class="filters2" />
        <br />
      </form>
      <img src="./icon/Trash.png" class="DeleteRow" alt="Delete Round" />
    </article>
  `;
  document.getElementById("sectionsContainer").appendChild(newFinanceRound);
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("DeleteRow")) {
    const roundInfo = e.target.closest(".FinanceRound");
    roundInfo.remove();
    roundCount--;
    renumberRounds();
  }
});

//add product
let productCount = 1;

function renumberProducts() {
  const productTitles = document.querySelectorAll(".Products_title");
  productTitles.forEach((title, index) => {
    title.textContent = `Product ${index + 1}`;
  });
}

document.getElementById("AddProductBtn").addEventListener("click", function () {
  productCount++;

  const newProductRound = document.createElement("div");
  newProductRound.className = "product_round";
  newProductRound.innerHTML = `
      <br />
      <p class="Products_title">Product ${productCount}</p>
      <article class="flex_left_space">
        <form>
          <input type="file" id="fileInput1" name="filename1" /> <input type="file" id="fileInput2" name="filename2" />
          <br />
          <label for="product" class="profile_heading">Product</label>
          <input type="text" id="tag" name="tag" placeholder="Product Name" class="filters2" /><br />
          <label for="product" class="profile_heading">Description</label>
          <input type="text" id="tag" name="tag" placeholder="Describe the product" class="filters2" /><br />
        </form>
        <img src="./icon/Trash.png" class="DeleteRow" alt="Delete Product" />
      </article>
    `;

  document.getElementById("productsContainer").appendChild(newProductRound);

  renumberProducts(); // Update product numbers after adding a new product
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("DeleteRow")) {
    const productRound = e.target.closest(".product_round");
    productRound.remove();
    productCount--;
    renumberProducts(); // Update product numbers after deleting a product
  }
});

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

//show Password
function mouseoverPass() {
  let obj = document.getElementById("pwordInput");
  obj.type = "text";
}
function mouseoutPass() {
  let obj = document.getElementById("pwordInput");
  obj.type = "password";
}
