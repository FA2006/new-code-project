// server.js
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();

app.use(cors());
app.use(express.json());

// Serve the menu.json file as API
app.get("/api/menu", (req, res) => {
  fs.readFile("menu.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read menu file" });
    }
    res.json(JSON.parse(data));
  });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
