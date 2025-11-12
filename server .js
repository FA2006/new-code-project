const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Fake menu data (we’ll later move this to a database)
const menu = {
  soups: [
    { id: 1, name: "Egusi Soup", price: 1500, description: "Ground melon seeds cooked with vegetables and spices.", image: "images/Egusi.png" },
    { id: 2, name: "Ogbono Soup", price: 1600, description: "Draw soup made with wild mango seeds.", image: "images/Ogbono.png" }
  ],
  swallows: [
    { id: 1, name: "Eba", price: 500, description: "Made from garri (cassava flakes), served with any soup.", image: "images/Eba.png" },
    { id: 2, name: "Pounded Yam", price: 800, description: "Smooth and stretchy, pairs perfectly with soups.", image: "images/PoundedYam.png" }
  ]
};

// ✅ API route to fetch menu
app.get("/api/menu", (req, res) => {
  res.json(menu);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
