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
 
// why aggies section
function toggleFeature(box) {
  const isActive = box.classList.contains("active");

  // close all other boxes in why choose us section
  document.querySelectorAll(".feature-box").forEach(b => b.classList.remove("active"));

  // clicked box
  if (!isActive) {
    box.classList.add("active");
  }
}
 
// --- Dynamic menu loading ---
fetch("http://localhost:5000/api/menu")
  .then(res => res.json())
  .then(menu => {
    menu.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("dish-card"); // add some styling class
      div.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p>Price: ${item.price}</p>
      `;

      // Append to the correct section
      switch(item.category.toLowerCase()) {
        case "soup":
          document.getElementById("soupsContainer").appendChild(div);
          break;
        case "swallow":
          document.getElementById("swallowsContainer").appendChild(div);
          break;
        case "rice":
          document.getElementById("riceContainer").appendChild(div);
          break;
        case "drink":
          document.getElementById("drinksContainer").appendChild(div);
          break;
        case "pasta":
          document.getElementById("pastaContainer").appendChild(div);
          break;
        case "pastry":
          document.getElementById("pastryContainer").appendChild(div);
          break;
        case "local snack":
          document.getElementById("local-snacksContainer").appendChild(div);
          break;
      }
    });
  })
  .catch(err => console.error(err));
