const addSectionBtn = document.getElementById("addSectionBtn");
const sectionsContainer = document.getElementById("sectionsContainer");
let roundNumber = 1;

addSectionBtn.addEventListener("click", function () {
  const originalSection = document.querySelector(".section");
  const newSection = originalSection.cloneNode(true);
  sectionsContainer.appendChild(newSection);

  roundNumber++;
  newSection.querySelector(".Financials_title").textContent = `Round ${roundNumber}`;
});

const productsContainer = document.getElementById("productsContainer");
const addProductBtn = document.getElementById("AddProductBtn");

addProductBtn.addEventListener("click", function () {
  const originalProduct = document.querySelector(".product");
  const newProduct = originalProduct.cloneNode(true);
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

let memberCount = 1;

document.getElementById("addTeamBtn").addEventListener("click", function () {
  memberCount++;
  const newTeamMember = document.createElement("div");
  newTeamMember.className = "TeamInfo";
  newTeamMember.innerHTML = `
                <br />
                <p class="Member_title">Member ${memberCount}</p>
                <form>
                    <label for="email" class="profile_heading">Name</label>
                    <input type="text" id="email" name="email" placeholder="name@company.com" class="filters2" />
                    <br />
                    <label for="employee" class="profile_heading">Department</label>
                    <input type="text" id="employee" name="employee" placeholder="Jeffrey Kim" class="filters2" />
                    <br />
                    <label for="employee" class="profile_heading">Role</label>
                    <input type="text" id="employee" name="employee" placeholder="Jeffrey Kim" class="filters2" />
                    <br />
                    <label for="website" class="profile_heading">Work Email</label>
                    <input type="text" id="website" name="website" placeholder="www.startline.vip" class="filters2" />
                    <br />
                    <label for="phone" class="profile_heading">Work Phone</label>
                    <input type="text" id="phone" name="phone" placeholder="xxxx-xxxx" class="filters2" />
                    <br />
                    <label for="employee" class="profile_heading">Linkedin URL</label>
                    <input type="text" id="employee" name="employee" placeholder="Jeffrey Kim" class="filters2" />
                    <br />
                </form>
            `;
  document.getElementById("TeamContainer").appendChild(newTeamMember);
});
