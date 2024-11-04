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
const addProductBtn = document.querySelector(".AddRow");

addProductBtn.addEventListener("click", function () {
  const originalProduct = document.querySelector(".product");
  const newProduct = originalProduct.cloneNode(true);
  productsContainer.appendChild(newProduct);
});
