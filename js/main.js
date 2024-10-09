const toggleFiltersButton = document.getElementById("toggle-filters");
const checkboxContainer = document.getElementById("checkbox-container");
const imageContainer = document.querySelector(".images .container");

toggleFiltersButton.addEventListener("click", () => {
  checkboxContainer.classList.toggle("hidden");
  toggleFiltersButton.textContent = checkboxContainer.classList.contains(
    "hidden"
  )
    ? "تصفية"
    : "اخفاء";
});

// Function to filter images based on checked checkboxes
const filterImages = () => {
  const checkedCategories = Array.from(
    document.querySelectorAll("#checkbox-container input:checked")
  ).map((input) => input.value);
  const boxes = imageContainer.querySelectorAll(".box");

  boxes.forEach((box) => {
    if (
      checkedCategories.length === 0 ||
      checkedCategories.includes(box.querySelector("img").src.split("/").at(-2))
    ) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
};

// Add change event listener to all checkboxes
document.querySelectorAll("#checkbox-container input").forEach((checkbox) => {
  checkbox.addEventListener("change", filterImages);
});

///////////////////////////////////////////////////////////////

function openOverlay(imageSrc) {
  const overlay = document.getElementById("overlay");
  const overlayImage = document.getElementById("overlayImage");
  overlayImage.src = imageSrc;
  overlay.style.display = "flex"; // Show overlay
}

// Function to close the overlay
function closeOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none"; // Hide overlay
}

// Attach click event to each gallery image
document.querySelectorAll(".gallery .box img").forEach((image) => {
  image.addEventListener("click", () => openOverlay(image.src));
});

///////////////////////////////////////////////////////////////////

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
};

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
