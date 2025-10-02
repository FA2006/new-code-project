 const menuToggle = 
  document.getElementById("menuToggle");
const dropdownMenu = 
  document.getElementById("dropdownMenu");

// Toggle menu
menuToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdownMenu.classList.toggle("show");
});

// Close menu when clicking outside
document.addEventListener("click", function (e) {
  if (!dropdownMenu.contains(e.target) && e.target !== menuToggle) {
    dropdownMenu.classList.remove("show");
  }
});

//why aggies secton

function toggleFeature(box) {
  const isActive = box.classList.contains("active");


//close all other boxes in why choose us section

document.querySelectorAll(".feature-box").forEach(b => b.classList.remove("active"))

//cliked box

if (!isActive) {box.classList.add("active");}
}

// Hero section background images
